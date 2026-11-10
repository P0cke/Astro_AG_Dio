// Weltraum-Mission · Offline-Speicher (Service Worker)
// Wird erst aktiv, wenn im Lehrer-Menü der Code eingegeben wurde. Speichert alles, was die App lädt,
// und liefert es bei fehlendem Internet aus dem Speicher. © 2026 Stephan Holtkötter
const CACHE = 'weltraum-mission-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

// Liste vorab speichern (Fotos, Töne, Seiten); meldet den Fortschritt an die App
self.addEventListener('message', e => {
  const d = e.data || {};
  if (d.type === 'precache') e.waitUntil(precache(d.urls || [], e.source));
});

async function precache(urls, client) {
  const c = await caches.open(CACHE);
  let n = 0;
  for (const u of urls) {
    try {
      if (!(await c.match(u))) {
        const same = new URL(u, self.location).origin === self.location.origin;
        const cors = same || /wikimedia\.org|wikipedia\.org/.test(u);
        const r = await fetch(new Request(u, { mode: cors ? 'cors' : 'no-cors', credentials: 'omit' }));
        if (r.ok || r.type === 'opaque') await c.put(u, r);
      }
    } catch (err) { /* nicht erreichbar: überspringen */ }
    n++;
    if (client) client.postMessage({ type: 'progress', n, total: urls.length });
  }
  if (client) client.postMessage({ type: 'done' });
}

// Teilantworten für Töne (Safari fragt Audiodateien stückweise mit „Range“ ab)
async function rangeResponse(resp, range) {
  const buf = await resp.arrayBuffer();
  const m = /bytes=(\d*)-(\d*)/.exec(range) || [];
  const start = m[1] ? +m[1] : 0, end = m[2] ? Math.min(+m[2], buf.byteLength - 1) : buf.byteLength - 1;
  return new Response(buf.slice(start, end + 1), {
    status: 206,
    headers: {
      'Content-Type': resp.headers.get('Content-Type') || 'audio/mpeg',
      'Content-Range': `bytes ${start}-${end}/${buf.byteLength}`,
      'Content-Length': String(end - start + 1),
      'Accept-Ranges': 'bytes'
    }
  });
}

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || !/^https?:/.test(r.url)) return;
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    const range = r.headers.get('range');
    // Seite selbst: zuerst aus dem Netz (damit Updates ankommen), sonst aus dem Speicher
    if (r.mode === 'navigate') {
      try { const n = await fetch(r); c.put(r.url.split('#')[0], n.clone()); return n; }
      catch (err) { return (await c.match(r.url.split('#')[0], { ignoreSearch: true })) || (await c.match('mission.html')) || Response.error(); }
    }
    const hit = await c.match(r.url, { ignoreVary: true });
    if (hit) return range && hit.type !== 'opaque' ? rangeResponse(hit.clone(), range) : hit;
    try {
      // bei Tönen die ganze Datei holen und speichern, dann den gewünschten Teil liefern
      if (range) {
        const same = new URL(r.url).origin === self.location.origin;
        const full = await fetch(r.url, { mode: same ? 'same-origin' : 'no-cors' });
        if (full.ok) { await c.put(r.url, full.clone()); return rangeResponse(full, range); }
        return fetch(r);
      }
      const n = await fetch(r);
      if (n.ok || n.type === 'opaque') c.put(r.url, n.clone());
      return n;
    } catch (err) {
      return Response.error();
    }
  })());
});
