# Weltraum-Mission (Tag der offenen Tür) – Einrichtung

## 1. Auf GitHub Pages veröffentlichen
> Ab Version 13.35 gibt es nur noch eine Seite: **index.html** (Auswahl Atlas / Kinder / Flugsimulator). mission.html und kinder.html sind nur noch kleine Weiterleitungen.
 (einmalig, ca. 10 Minuten)
1. Auf github.com anmelden → oben rechts „+“ → **New repository**. Name z. B. `universum-atlas`, **Public**, „Create repository“.
2. „uploading an existing file“ anklicken und die Dateien `index.html`, `kinder.html`, `mission.html` und `sw.js` hineinziehen → **Commit changes**. (`sw.js` ist der Offline-Speicher, siehe 2b.)
3. **Neu (echtes 3D-Dio):** in einem zweiten Durchgang die Dateien `rheine-3d-1.bin`, `rheine-3d-2.bin` (3D-Mesh bis 10 km), `umgebung-8km.jpg`, `umgebung-32km.jpg` und – falls vorhanden – `umgebung-100km.jpg` hochladen (in denselben Ordner wie `index.html`). Ältere Mesh-Dateien (`dio-3d-1.bin`, `dio-3d-2.bin`, `dio-mesh-1.bin` … `dio-mesh-4.bin`) bitte löschen. Das 3D-Mesh ist in mehrere Teile aufgeteilt, weil GitHub im Browser höchstens 25 MB pro Datei annimmt. Fehlen die Dateien, zeigt die App automatisch wieder das selbst gebaute Dio-Modell.
3. **Settings → Pages**: unter „Branch“ `main` und `/ (root)` wählen → **Save**.
4. Nach 1–2 Minuten ist die Seite erreichbar unter
   `https://<dein-name>.github.io/universum-atlas/` (Atlas), `…/kinder.html` und `…/mission.html` (Tag der offenen Tür).

## 1b. Ordner `sounds/` (Töne)
1. Im Repository „Add file → Upload files“ → oben im Pfad `sounds/` eintippen (GitHub legt den Ordner an).
2. Hineinladen:
   - `shuttlelaunch.mp3`: von https://pixabay.com/sound-effects/technology-shuttlelaunch-24467/ herunterladen („Download“) und genau so umbenennen.
   - optional `countdown.mp3`: den gewählten NASA-Countdown herunterladen (Link steht auf der Auswahlseite) und so umbenennen. Ohne diese Datei lädt die App den Countdown direkt von nasa.gov (Internet nötig).
   - optional, damit die NASA-Töne auch ohne Internet laufen (Links auf der Auswahlseite, Reiter „Töne“): `orbit.mp3` („Nice to be in orbit“), `eagle.mp3`, `smallstep.mp3`, `saturn.mp3`, `kepler.mp3`, `jupiter.mp3` (Voyager: Blitze auf Jupiter), `throttle.mp3` („Go at throttle up“).
3. Liegt eine Datei nicht im Ordner, nimmt die App automatisch die Online-Fassung bzw. den synthetischen Ton.

## 1c. Fotos und Töne auswählen
`auswahl-fotos-und-toene.html` am PC doppelklicken (Internet nötig). Pro Himmelskörper bis zu 4 Fotos anklicken (Auflösung, Urheber und Lizenz stehen dabei), im Reiter „Töne“ die Töne wählen und beim Countdown „⏱ Jetzt ist ZERO!“ drücken. Dann „✔ Auswahl fertig“ → Text kopieren und an Claude schicken; die Auswahl wird fest eingebaut.

## 2. Auf dem iPad
1. In **Safari** `…/mission.html` öffnen.
2. Teilen-Knopf → **Zum Home-Bildschirm**. Ab jetzt startet die Mission wie eine App im Vollbild.
3. Beim ersten Start „Tippe hier“ → Safari fragt nach **Bewegung und Ausrichtung** → **Erlauben** (nötig für das Kippen).
4. Einstellungen vorher: Anzeige & Helligkeit → Automatische Sperre **Nie**; Kontrollzentrum → **Ausrichtungssperre** im Querformat; Bedienungshilfen → **Geführter Zugriff** einschalten (dann dreimal die obere Taste drücken, um die App zu sperren).
5. Beamer per **AirPlay** (Kontrollzentrum → Bildschirmsynchronisierung → Apple TV).

## 2b. Offline speichern (empfohlen vor dem Tag der offenen Tür)
1. Auf dem iPad `…/mission.html` öffnen (mit Internet).
2. Im Wartemodus die **Ecke oben links 3 Sekunden** gedrückt halten → Lehrer-Menü.
3. Code **1659** eingeben → „Offline speichern“. Die Seite lädt neu; unten rechts zeigt ein Hinweis den Fortschritt (Fotos, Töne, Texturen). Warten, bis „✔ Offline bereit“ erscheint, dann am besten einmal den Wartemodus komplett durchlaufen lassen (dabei werden alle Texturen gespeichert).
4. Töne laufen offline am sichersten, wenn sie im Ordner `sounds/` liegen (siehe 1b) – Dateien direkt von nasa.gov lassen sich in Safari nicht immer offline abspielen.

## 3. Bedienung
- **Am PC testen**: `weltraum-mission.html` einfach doppelklicken (Kippen gibt es am PC nicht, dafür die Tastatur).
  - **Pfeiltasten** = lenken (wie Kippen), **A/D** = rollen
  - **W/S** oder **Bild↑/Bild↓** = Schubhebel vor/zurück, **Leertaste** = STOPP
  - **1/2/3** = Ziel wählen, **Enter** = Start / Weiter, **H** = Autopilot-Hilfe, **Esc** = Lehrer (Wartemodus bzw. Mission verlassen)
- **Wartemodus (Demo-Flug)**: Dio umkreisen → senkrecht aufsteigen → ISS von hinten → Mond mit der Erde dahinter → Sonnensystem (Totale) → Saturn → entlang der Ringe zu den Daphnis-Wellen → Jupiter → Milchstraße (Totale) → Orionnebel → Schwarzes Loch → Lokale Gruppe (Totale) → Andromeda → Universum (Totale) → kosmisches Netz → Bootes-Void → zurück zum Dio. Dauer ≈ 4½ Minuten, an jedem Ort 16–24 s, immer in Bewegung.
- **Mission**: Nulllage → Countdown am Dio → senkrechter Start → je Ebene **3 Ziele zur Auswahl** → Ziel **einfangen**: nah genug heranfliegen und 1 Sekunde im Fadenkreuz halten (grüner Fangring) → Belohnung: Stempel, Sterne (⭐⭐⭐ unter 35 s, ⭐⭐ unter 60 s), Funkspruch, die Kamera umkreist das Ziel mit dem Zentrum (z. B. der Erde) im Hintergrund → „Weiter“ → Übergang zur nächsten Ebene mit der **Totale** (z. B. ganze Milchstraße) → … → Heimflug zum Dio → Planetenpass.
- Nach 30 s erscheint der Knopf „🤖 Autopilot-Hilfe“, nach 60 s hilft der Autopilot von selbst (dann nur 1 Stern). Nach 100 s gilt das Ziel als gefangen.
- Nach dem Einfangen geht es **nicht** automatisch weiter: „🚀 Frei fliegen“ (oder einfach Schub/Pfeiltasten) erlaubt freies Herumfliegen, „Nächste Mission ▶“ (oder Enter) startet das nächste Ziel.
- **Start**: Space Shuttle auf der Startrampe neben dem Dio, Countdown, Zündung, das Raumschiff folgt dem Shuttle in den Himmel. **Heimweg**: Begegnung mit einem UFO.
- **Wartemodus**: zwei Finger auseinander/zusammen = zoomen (am PC Mausrad), kurzes Tippen startet.
- **Vollbild**: startet beim ersten Tippen bzw. Tastendruck (Browser erlauben Vollbild erst nach einer Berührung). Als Home-Bildschirm-App auf dem iPad immer Vollbild.
- **Schaltzentrale** links unten: schmaler Schubhebel, STOPP und Autopilot (Autopilot gibt nur 1 Stern).
- **Am Ziel**: ⓘ = Infos für Kinder, 📷 = echte Fotos (Wikimedia Commons, mit Urheber und Lizenz unter jedem Bild), 🔭 = Bonus-Mission (z. B. Daphnis, Jupitermonde, Apollo-11-Landestelle). Ein Finger dreht die Ansicht, zwei Finger zoomen.
- **Countdown** wie bei der NASA: Sobald in der Auswahlseite der ZERO-Zeitpunkt des Original-Mitschnitts markiert ist, läuft der echte NASA-Countdown (STS-135 bzw. Apollo 11). Bis dahin: Quindar-Piepser und englische Ansage (Sprachausgabe des Geräts). Beim Abheben spielt `sounds/shuttlelaunch.mp3`, falls vorhanden, sonst der Original-Startton von STS-131 (NASA, gemeinfrei; lädt nur mit Internet). Am Ende ertönt eine kurze Siegesfanfare.
- **Funksprüche mit Originaltönen** (ausgewählt): Beim Mitflug „Go at throttle up“ und nach dem Tank-Abwurf „Nice to be in orbit“. Mond: „That’s one small step …“. Apollo-11-Landestelle: „The Eagle has landed“. Saturn: Radiowellen (Cassini). Jupiter: Blitze (Voyager). Sterne: Klang eines Sterns (Kepler). Lange Töne werden nach 12 s ausgeblendet. Zu jedem Ton erscheint oben eine Infoblase mit Quelle.
- **Start**: Countdown-Zahlen laufen synchron zum Originalton, der nach dem ersten „… and liftoff“ ausgeblendet wird. Sobald das Shuttle oben aus dem Bild steigt, wechselt die Kamera an Bord: Booster-Trennung, Begleitkamera beim Abwurf des Außentanks, dann Cockpit – ab hier steuern die Kinder selbst („Warp-Antrieb an!“). Beim Mitflug zeigt eine Tafel Höhe, Tempo und echte Flugzeit mit kindgerechten Vergleichen; der Countdown hat deutsche Untertitel. Auch der Wartemodus zeigt den Start vom Dio.
- **Am Ziel**: Fotos und Infos öffnen sich in Fenstern innerhalb der App. Ein Klick auf ein Foto vergrößert es; die App leitet nie auf andere Websites weiter und lässt sich nicht verschieben (kein Scrollen).
- **Ende**: Zurück am Dio folgt das **Weltraum-Quiz** (5 Fragen zu den angeflogenen Zielen, 1/2/3 bzw. Antippen), danach der **Planetenpass**: Vorname eintippen, optional **Passfoto** mit der Frontkamera (Safari fragt beim ersten Mal nach der Kamera-Erlaubnis → Erlauben). Name und Foto werden nur angezeigt, nie gespeichert; beim Zurückkehren in den Wartemodus sind sie gelöscht.
- **Lehrer-Menü**: im Wartemodus Ecke oben links 3 s halten (Offline speichern, Mission beenden). Während einer Mission führt das Halten der Ecke zurück in den Wartemodus.
- 50 s ohne Bedienung (nach dem Einfangen 90 s) → zurück in den Wartemodus. **Ton** an/aus: Knopf oben in der Mitte. **Lehrer-Ecke**: oben links 3 Sekunden gedrückt halten.


## Echtes 3D-Dio in Originalgröße (ab Version 13.13)
- Das Dionysianum und die Umgebung (etwa 2,4 × 2 km) stammen aus dem 3D-Mesh von **Geobasis NRW** (Luftbild-Photogrammetrie, Lizenz dl-de/zero-2-0). Ringsum liegen Luftbilder (DOP) bis 32 km Entfernung.
- Die Startrampe mit dem Space Shuttle steht in echter Größe auf der Wiese nördlich der Schule. Die Bäume auf der Rampenfläche sind eingeebnet.
- Beim ersten Anflug lädt die App rund 29 MB. Im Lehrer-Menü (Code 1659) speichert „Offline-Speicher“ das Mesh und die Luftbilder mit.


## Neu in Version 13.14
- **Fliegen:** Die Kamera sitzt jetzt hinter und über dem eigenen Space Shuttle, das klein unten im Bild zu sehen ist. Mit dem Knopf „🎥 Cockpit“ oben rechts wechselt man in die Cockpit-Sicht und wieder zurück.
- **Schubhebel:** Das Höchsttempo ist halbiert, das Reisen gehört zur Aufgabe.
- **Hindernisse:** Beim Anflug in der Erd-Ebene treibt Weltraumschrott herum, im Sonnensystem sind es Asteroiden. Wer etwas trifft, wird gebremst. Der Autopilot fliegt ohne Treffer.
- **Am Ziel:** Mit einem Finger lässt sich die Ansicht drehen, mit zwei Fingern (oder dem Mausrad) zoomen.
- **Bonus-Mission Marsrover:** Am Mars kann man zum Rover Perseverance im Jezero-Krater fliegen.
- **Heimflug:** Er führt gleichmäßig und ohne Halt durch alle Ebenen. Danach landet das Space Shuttle auf der Salzbergener Straße vor dem Dio. Nach einer Überblendung steht es wieder mit Tank und Boostern auf der Startrampe.
- **Fotos:** Die Bildunterschriften sind jetzt auf Deutsch und für Kinder geschrieben.


## Neu in Version 13.15
- **Countdown:** Die Zahlen sind jetzt nach der echten Ansage im NASA-Mitschnitt gestellt, also nach dem Lautstärkeverlauf ausgemessen.
- **Autopilot:** Er schaltet sich nicht mehr von selbst ein. Nach einer Minute erscheint nur ein Tipp.
- **Hindernisse:** Weltraumschrott ist jetzt ein detailliertes Satelliten-Bruchstück, Asteroiden sind glatte, verkraterte Felsen. Beide werden weich eingeblendet. Nach drei Treffern ist die Mission gescheitert, und das Shuttle fliegt zur Reparatur nach Hause.
- **Flugmodus:** Das Shuttle neigt sich in Kurven, die Kamera folgt verzögert. Der Zielpfeil ist auch in der Außenansicht zu sehen.
- **Heimflug:** Er führt durch alle Ebenen mit gleichem Blick und gleichem Tempo. Am Ende landet das Shuttle mit Bremsschirm und Reifenrauch auf der Salzbergener Straße.
- **Erdkarte:** Die Detailkarte erscheint unter 400 km Höhe und verschwindet erst über 600 km wieder.
- **Kosmos:** Das kosmische Netz und die Hintergrundstrahlung blenden beim Flug in die Lokale Gruppe aus. Das Netz ist kein Missionsziel mehr.
- Die Erdachse wird nicht mehr angezeigt.


## Neu in Version 13.48
- **iPad (13.48h):** Beim Tippen auf „Flugsimulator“ fragt Safari **zuerst** nach den Bewegungssensoren („Erlauben“ tippen); erst danach (beim nächsten Tippen) geht die App in den Vollbildmodus. Die Haltung beim Start (welche Seite oben ist) erkennt die App jetzt aus der Schwerkraft selbst – unabhängig davon, was Safari meldet – und behält sie für die ganze Mission. Dreht Safari das Bild, erscheint ein Hinweis auf die Ausrichtungssperre (jetzt auch auf iPadOS, das das alte Drehsignal nicht mehr sendet).
- **iPad (13.48g) – Haltung:** Geradeausflug, wenn das iPad **fast senkrecht (80°)** vor einem gehalten wird (vorher: flach). Lenken durch Drehen wie ein Lenkrad, vor/zurück neigen = runter/hoch. Die Neigung wird jetzt ohne Sprung auch rund um die Senkrechte gemessen. Die Steuerung bleibt auf die Ausrichtung beim Start festgelegt, auch wenn Safari das Bild dreht. **Das automatische Drehen selbst kann eine Webseite auf dem iPad nicht verhindern:** dafür im Kontrollzentrum die **Ausrichtungssperre 🔒** einschalten (am besten vor dem Start im Querformat).
- **iPad (13.48f) – Steuerung:** Die Neige-Steuerung wurde nach dem ersten Ziel (beim Aussteigen am Ziel) ausgeschaltet und nicht wieder eingeschaltet – daher ging die Steuerung „nur manchmal“. Jetzt bleibt sie während der ganzen Mission an. Zusätzlich kann man im Flug jederzeit mit dem Finger lenken (über den Bildschirm ziehen) – auch wenn die Bewegungssensoren nicht erlaubt wurden.
- **iPad (13.48e) – Absturz nach dem Flug durch die Wolken:** Über den Wolken lädt die App hochaufgelöste Erdkacheln (NASA Blue Marble). Davon behielt sie bis zu 180 im Speicher (rund 250 MB). Auf iPad/iPhone jetzt höchstens 100 und ein kleinerer Umkreis um die Kamera; außerdem wird die Arbeitsspeicher-Kopie der 3D-Modell-Bilder nach dem Hochladen freigegeben und die Nordsee-Karte ist halb so groß.
- **iPad (13.48d) – Absturz im Flug behoben:** Die eigentliche Ursache war der Grafikspeicher, der sich im Flug immer weiter füllte (über 1 GB). Auf iPad/iPhone werden jetzt die Bildkacheln des 3D-Modells verkleinert (512 px innen, 256 px außen statt 1024 px), die Sonne in 2k statt 8k, Erd-Wolken und Nachtseite in 2k und die Fotos von Nebeln/Galaxien höchstens in 1280 px geladen; ersetzte kleinere Fotos werden freigegeben. Gemessener Grafikspeicher der Texturen: etwa 330 statt 670 MB (ohne die aus dem Internet geladenen Bilder, die jetzt ebenfalls kleiner sind). Am PC bleibt alles in voller Auflösung.
- **iPad 8 (13.48c):** Absturz-Schleife verhindert: Läuft ein Start keine 40 Sekunden (Safari hat die Seite wegen Speichermangel neu geladen), startet die Seite im **Sparmodus** (ohne Offline-Paket, ohne Süd-Karte, weniger Wolken); beim zweiten Mal erscheint die Auswahl statt eines automatischen Starts. Auf diesem iPad bleibt der Sparmodus danach eingeschaltet. Außerdem lädt der Ladebalken die Dateien jetzt speichersparend, und auf iPad/iPhone ist die 100-km-Karte halb so groß und es gibt weniger Wolken.
- **iPad 8 (13.48b):** Speicherbedarf gesenkt – Süd-Karte in halber Auflösung, auf iPad/iPhone nie die 8k-Erdtexturen (je ca. 130 MB Grafikspeicher), die 3D-Modell-Daten werden nach dem Einlesen sofort freigegeben.
- **Genauere Karte im Süden bis Münster:** Zwischen etwa 10 und 44 km südlich von Rheine (von ca. 20 km westlich bis 26 km östlich, Münster eingeschlossen) liegt jetzt ein Satellitenbild mit etwa 24 m pro Bildpunkt (vorher etwa 49 m; die zunächst eingebauten 12 m waren für das iPad 8 zu viel Speicher). Es wird beim Start aus Kartenkacheln (Sentinel-2 cloudless, EOX) zusammengesetzt und weich in die übrige Karte übergeblendet. Mit `offline-daten-erstellen.html` kommen diese Kacheln auch ins Offline-Paket – dafür das Paket neu erstellen.
- **Wolken realistischer:** Jede Wolke ist jetzt ein Büschel aus mehreren kleinen Teilen – flache, etwas dunklere Unterseite, nach oben gewölbt wie Blumenkohl, oben kleiner. Die Basishöhe schwankt von Gegend zu Gegend leicht.
- **Ausweichen schwieriger:** Weltraumschrott, Asteroiden usw. kommen häufiger, liegen näher an der Flugbahn, sind etwas größer, tauchen etwas später auf, und manche treiben quer durch die Bahn. Nach 3 Treffern ist die Mission wie bisher beendet.
- **Raketenstart überspringen:** Während Countdown, Start und Mitflug unten rechts der Knopf **„⏭ Start überspringen“**. Das Shuttle ist dann sofort in der Umlaufbahn über Rheine, und es geht gleich mit der Zielauswahl weiter.

## Neu in Version 13.47b
- **Ebenenwechsel nahtlos:** Kein Ab- und Aufblenden mehr. Das letzte Bild der alten Ebene wird festgehalten und in 1,4 s scharf in die neue Ebene übergeblendet; die Kamera fliegt dabei mit demselben Schwung geradeaus weiter.
- **Demo – langsam aus dem Sonnensystem:** Nach dem Jupiter-Swing-by fliegt das Shuttle etwa 10 s lang sichtbar und gleichmäßig beschleunigend geradeaus hinaus (höchstens 2,5-fach), dann geht es nahtlos in der Milchstraße weiter – immer in Richtung der Shuttle-Nase. Die Totalen in Milchstraße, Lokaler Gruppe und Universum entfallen dafür (sie hätten einen Schwenk oder Rückwärtsflug erfordert); die Flüge zu Sagittarius A*, Andromeda und Boötes-Void beginnen ruhiger.
- **Demo – Daphnis:** eine gerade Linie: Anflug direkt aus der Flugrichtung, am Ende waagerecht knapp über der Ringebene, ruhig über Daphnis hinweg (ohne Hinschwenken), dann eine gleichmäßige Kurve zum Jupiter.
- **Demo – Flug zum Jupiter ruhiger:** Kurve höchstens 6°/s, langsamer beschleunigend, Anflug 38 s statt 24 s.
- **Demo-Start:** Der Zoom auf die Erde dauert länger; die Erde dreht sich nicht mehr hastig unter der Kamera weg (Spitze vorher 55°/s, jetzt etwa 25°/s).
- **Landung – Ems:** Der Rand des 3D-Modells (Datengrenze an der Landesgrenze, durch die die Ems fließt) war halbdurchsichtig und wurde je nach Blickwinkel in wechselnder Reihenfolge gezeichnet – das flackerte. Jetzt löst er sich in ein festes, am Gelände haftendes Muster auf.
- **Kran:** Die Bäume im Umkreis von etwa 32 m um den Kran sind flach (nur im Flugsimulator) – der Kran ragt nicht mehr in die Bäume.

## Neu in Version 13.47
- **Demo – Shuttle fliegt wie im Flugmodus:** Bei jeder Richtungsänderung neigt es sich in die Kurve, dreht die Nase leicht hinein und wandert etwas zur Kurveninnenseite ins Bild (wie bei der nachgeführten Kamera im Flugmodus) – auch im Swing-by um Mond und Jupiter.
- **Demo – Ruckler an den Übergängen behoben** (Bild-für-Bild gemessen): ISS-Abflug (ein Bild Stillstand, Tempo springt), Mond (Beginn des Bogens), Daphnis (Sprung beim Übergang in den Vorbeiflug), Jupiter (Kamera wurde für ein Bild von einem Mond „weggeschoben“). Zusätzlich wird die Blickrichtung im Demo minimal geglättet (0,18 s), damit Wechsel der Drehgeschwindigkeit weich sind.
- **Ebenenwechsel:** nur noch Aus- und Einblenden, keine Unschärfe mehr (Demo und Flugmodus).
- **Demo – hinaus in die nächste Ebene:** Das Shuttle wendet nicht mehr und bewegt sich nicht seitwärts. Es fliegt geradeaus weiter, das Bild blendet aus; in der neuen Ebene beginnt die Totale weiter draußen, und die Kamera fliegt geradeaus (in Richtung der Shuttle-Nase) auf sie zu. Dort steht das Bild ruhig (kein Kreisen).
- **Demo – Abflug aus dem Sonnensystem langsamer** (nach dem Jupiter-Swing-by höchstens 4-fach statt 10-fach beschleunigt).
- **Heimflug:** Zu Beginn jeder Ebene nur geradeaus, kein Schwenk zur Seite; die neue Richtung wird während des Ausblendens eingestellt.
- **Landung:** Kamera 30 m höher. Der Rand des 3D-Modells (u. a. an der Ems) flimmert nicht mehr: Das Auflösungsmuster am Rand hängt jetzt am Gelände statt am Bildschirm.
- **Landung:** Zu Beginn der Landung wirbelte die Kamera bei bestimmten Anflugrichtungen kurz herum (bis 240°/s). Jetzt dreht sie sich ruhig in die Landeansicht (große Drehungen langsamer, bis 9 s; gemessen höchstens etwa 30°/s).
- **Atlas und Atlas für Kinder:** Kran, Shuttle, Raketen, Truck, Landebahn und Startrampe gibt es dort nicht mehr (auch die Bäume an Landebahn und Rampe bleiben natürlich). Sie erscheinen nur im Flugsimulator – oder wenn im Atlas mit 🚀 die Mission gestartet wird.
- **Atlas: Klick auf „Dio“** auf der Erdkugel fliegt direkt in die 3D-Ansicht des Dionysianums.
- **Offline-Daten erstellen:** CelesTrak (Satelliten-Bahndaten) wird nach 15 s übersprungen; dann werden die zuletzt im Browser gespeicherten Bahndaten verwendet.

## Neu in Version 13.46
- **Alles in einer Datei, ohne Internet:** three.js ist jetzt direkt in `index.html` eingebaut. Alle übrigen Online-Daten (Karten-Kacheln, Wolken, Luftbild, Fotos, Wikipedia-Texte, Schrift, ISS-/Planetendaten, Töne) erstellt die eigene Datei **`offline-daten-erstellen.html`** (im Atlas gibt es keine Download-Knöpfe mehr).
  - **So geht's (einmalig, an einem Rechner mit Internet):** `offline-daten-erstellen.html` öffnen (doppelklicken genügt, oder auf GitHub `…/offline-daten-erstellen.html`) und wählen:
    - **„Für GitHub“** → speichert `offline-daten-1.bin`, `offline-daten-2.bin`, … (je höchstens 24 MB). Alle in denselben GitHub-Ordner wie `index.html` hochladen; beim nächsten Erzeugen alte Dateien ersetzen bzw. überzählige löschen.
    - **„Für die lokale Nutzung“** → speichert eine einzige Datei `universum-atlas-offline.html` mit Auswahl Atlas / Kinder / Flugsimulator, die ohne Internet läuft (USB-Stick, Laptop). Das 3D-Modell von Rheine ist darin nicht enthalten (dafür das selbst gebaute Dio-Modell).
  - Während des Ladens zeigt die Seite „Fertig: x von N Dateien“, die Zeit, welche Dateien gerade laden (mit MB) und rot, welche nicht geladen werden konnten. Hängt ein Abruf länger als 45 s, wird er übersprungen. „Abbrechen“ ist jederzeit möglich. Falls der Browser die Dateien nicht von selbst speichert, erscheinen am Ende Links zum Anklicken.
  - Was der Browser nicht herunterladen darf (manche NASA-Töne, das NRW-Luftbild), bleibt online.
- **Lade-Balken:** Zu Beginn jedes Modus (Atlas, Kinder, Flugsimulator) zeigt ein Balken mindestens 2,5 Sekunden lang den Fortschritt, die Datenmenge und die Datei (z. B. „37,2 / 50,6 MB · Datei 3 von 5 · rheine-3d-2.bin“). Nur beim Öffnen als lokale Datei (Doppelklick) entfällt er. Dabei werden 3D-Modell, Umgebungsbilder und das Offline-Paket vorab geladen, im Flugsimulator auch die Karte rund um Rheine. Erst danach startet der Modus – ohne Ruckler durch Nachladen.
- **Demo – Wolken:** deutlich weniger und unauffälliger, dafür über dem Dio, wo die Kamera herunterfährt, eine geschlossene Wolkendecke, durch die sie hindurchtaucht.
- **Demo – Shuttle:** kein Flimmern mehr beim Übergang zur Shuttle-Ansicht nach dem Abwurf des Tanks. Die drei Haupttriebwerke haben innen eine schwarze Abdeckung (man kann nicht mehr hindurchsehen).
- **Demo – Mond → Saturn:** Der Swing-by um den Mond endet geradewegs in Richtung Saturn; das Shuttle richtet Flug und Blick danach genau auf den Saturn aus.
- **Demo – Saturn und Daphnis (neu angelegt):** Das Shuttle fliegt zum Saturn, nähert sich Daphnis langsam und fließend über den Ringen, gleitet an ihm vorbei und dreht dann in einer ruhigen, gleichmäßigen Kurve um den Saturn herum auf den Jupiter ein (höchstens etwa 9° pro Sekunde, weich an- und auslaufend). Erst dann fliegt es geradeaus zum Jupiter. Der eigene Saturn-Halt entfällt.
- **Haus- und Schloss-Knopf** überdecken im Atlas nicht mehr die Ebenen-Auswahl.
- **Demo – Systemwechsel:** keine seitliche Bewegung des Shuttles mehr. Wenn es wenden muss, dreht es sich ruhig auf der Stelle; die Kamera kreist nicht mehr um es herum.

## Neu in Version 13.45
- **Mond**: Der Swing-by ist schneller. Danach beschleunigt das Shuttle in Richtung Saturn auf bis zu das Zehnfache, wie bei einem echten Schwung-Manöver.
- **Daphnis**: Das Shuttle fliegt langsamer vorbei und bleibt immer über der Ringebene.
- **Jupiter**: Ein Swing-by nach außen, mit dem das Shuttle Schwung holt und das Sonnensystem verlässt. Im Bogen bleibt das Shuttle ruhig im Bild, nur die Kamera dreht sich.
- **Wende beim Ebenenwechsel**: Die Kamera kreist um das Shuttle, statt dass es sich vor ihr dreht; der Hintergrund dreht sich mit.
- **Landeanflug**: Die Kamera kippt schon in etwa 700 km Höhe in die Schräge, damit der Anflug auf Rheine flach aussieht statt wie ein senkrechter Sturz.
- **Wiedereintritt**: Zwischen etwa 150 und 30 km Höhe glüht das Shuttle an Nase und Unterseite orange, dahinter zieht es eine rosa-orange Plasmaschleppe.

## Neu in Version 13.44
- **ISS**: Beim Abflug gleitet das Shuttle zuerst etwa 9 Sekunden langsam geradeaus über die ISS hinweg. Die Kamera bleibt dabei zur ISS geneigt, sodass sie etwa 6 Sekunden im Bild bleibt. Erst danach geht es zum Mond.
- **Wenden des Shuttles**: Es wendet nur noch, wenn die Kamera zurückfährt, also beim Wechsel nach außen (außer ins Sonnensystem) und beim Flug in die Totale. Danach dreht es sich zuverlässig zurück, damit es nicht rückwärts auf Sagittarius A* oder Andromeda zufliegt.
- **Daphnis**:
  - Der Anflug geht direkt auf den Mond zu, mit mehr Abstand und höher über dem Ring.
  - Der Vorbeiflug ist kürzer.
  - Danach steigt das Shuttle aus der Ringebene heraus, damit die Ringe nicht lange grob und pixelig aus der Nähe zu sehen sind.
- **Beschriftungen**: Sie wechseln erst, wenn der neue Zustand 0,35 Sekunden anhält. Bei Überlappung bleibt die schon sichtbare Beschriftung stehen. Das verhindert Flackern.

## Neu in Version 13.43
- **Demo-Flugbahnen**, Bild für Bild nachgemessen:
  - Nach der ISS fliegt das Shuttle einfach geradeaus weiter (anfangs mit der ISS mitfliegend), ohne Zurückweichen.
  - Am Mond endet der Bogen in Richtung Saturn. Die Richtung kommt jetzt aus der Bahnrechnung; vorher kreiste das Shuttle endlos.
  - Beim Saturn fliegt die Kamera enger heran, Saturn bleibt im Anflug und im Bogen im Bild.
  - Beim Übergang in jeden Bogen (Mond, Saturn, Jupiter) und in den Daphnis-Vorbeiflug stand die Kamera ein Bild lang still. Behoben.
  - Der Blick folgt auf allen Flugbahnen weich, ohne schnelle Schwenks. Am Ende einer Bahn läuft die Drehung weich aus, beim Einschwenken in einen Bogen dreht sich der Blick nahtlos weiter.
  - Beim Wegflug von Daphnis startet das Shuttle langsam und ohne Sprung; vorher sprang die Kamera mit, weil Saturns Monde beim Wegfliegen vergrößert dargestellt werden.
- **Hinaus in die nächsthöhere Ebene**: Erst wendet das Shuttle in einer weichen, geneigten Kurve zum Betrachter, dann fährt die Kamera zurück. Sonst dreht es sich nicht mehr um.
- **Startbildschirm**: „Entstanden in der Astronomie-AG …“ ist weggelassen; der Knopf heißt „Tippe hier und flieg selbst!“.

## Neu in Version 13.42
- **Ton**: Der Raketen-Sound kommt jetzt auch beim ersten Demo-Start. Der Ton wird beim Antippen in der Auswahl freigeschaltet. Startet die Demo nach 3 Minuten von selbst, ohne Antippen, bleibt sie still, das verlangt der Browser.
- **ISS**:
  - Die Demo bleibt kürzer an der ISS.
  - Der Wechsel in die Demo-Ansicht nach dem Mitflug ist weich, das Shuttle springt nicht mehr im Bild.
  - Beim Abflug weicht die Kamera erst etwa 5 Sekunden lang von der ISS zurück, die ISS bleibt dabei in der Bildmitte und wird kleiner.
  - Danach fliegt die Kamera anfangs noch mit der ISS mit und dreht sich langsam zum Mond. Vorher schwenkte sie mit über 60°/s herum und ließ die ISS davonrasen.
- **Saturn**: Er wird deutlich enger umflogen.
- **Daphnis**: Der Wegflug startet mit dem Vorbeiflug-Tempo und fliegt anfangs mit Daphnis mit, ohne Ruck.
- **Herauszoomen in die nächste Ebene**: Fährt die Kamera rückwärts, dreht sich das Shuttle zum Betrachter und fliegt auf ihn zu.
- **Sagittarius A***: Der Aufenthalt ist länger, der Blick bleibt stärker auf das Schwarze Loch gerichtet. Die Beschriftung „Stern S2“ bleibt länger sichtbar.
- **Titel**: „Flieg mit dem Raumschiff bis ans Ende des Universums!“
- **Nordsee**: Das Meer um die Inseln ist heller.
- **Landeanflug**: Der Fahrtwind setzt schon im Anflug ein und wird über 9 Sekunden weich lauter.

## Neu in Version 13.41
- **ISS**: Sie verschwindet nicht mehr plötzlich, wenn das Shuttle wegfliegt. Objekte, die näher als der nahe Bildrand sind, bekommen einen eigenen Zeichenbereich.
- **Booster-Trennung**: Die vier kleinen Explosionen sitzen jetzt an den Booster-Halterungen. Vorher wurden sie im ersten Bild doppelt mitbewegt und standen weit über der Rakete.
- **Landebahn**: Beim Ausrollen ruckelt die Kamera nicht mehr. Die Bodenhöhe wird gemerkt und weich nachgeführt, statt alle 0,25 s teuer neu gemessen. Am Ende bleibt die Kamera 25 m weiter weg.
- **Demo**:
  - Der Swing-by am Mond endet genau in Richtung Saturn.
  - Saturn wird enger umflogen.
  - An Daphnis geht es halb so schnell vorbei, danach weich beschleunigen, ohne Tempo-Sprung.
  - Milchstraße, Lokale Gruppe und Universum kommen zuerst in der Totalen (Milchstraße schräg von oben, etwa 30°).
  - In jeden Bogen um ein Ziel dreht sich der Blick jetzt weich hinein.
- **Flugmodus**: In den Ebenen 3–5 startet die Mission mit einem Flug in die Totale, erst dann erscheint die Zielauswahl.
- **Missionszahlen 1–5**: Sie sind vor und während des Countdowns nicht mehr zu sehen.
- **Flugmodus nach dem Tankabwurf**: Wird schon während des Mitflugs ein Ziel gewählt, wartet das Shuttle jetzt die weiche Übergabe ab. Vorher kam es in diesem Fall noch einmal neu ins Bild.
- **Schwertransporter**:
  - Zugmaschine mit Fahrerhaus, Kühlergrill, Scheinwerfern, Spiegeln, Lichtbalken, Auspuffrohren, Tanks, Ballastkasten und „Schwertransport“-Schild.
  - Schwanenhals-Tieflader mit Holzdeck, Warnstreifen und rund 250 Rädern.
  - Auflager aus Holzbohlen und orange Spanngurte, die beim Abheben verschwinden.

## Neu in Version 13.40
- **Start**: Die Begleitkamera steht noch einmal 10 m weiter weg. Kurz nach dem Abheben schwenkt sie einmal nach unten (man sieht die Rauchsäule bis zum Boden) und wieder zurück.
- **Ruckler behoben**:
  - Nach dem Tankabwurf sprang der Blick beim Wechsel hinter das Shuttle um 6°.
  - Beim Anflug auf die Landebahn hinkte die Kamera dem Shuttle immer ein Bild hinterher.
  - Die Übergabe an das Flugmodell rechnet nur noch halb so lange.
  - Die automatische Auflösung schaltet während Start, Mitflug und Landung nicht mehr um.
- **Demo**:
  - Der Mond wird enger umflogen.
  - Nach Daphnis bleibt das Shuttle höher über dem Saturnring, steigt beim Losfliegen etwas an und beschleunigt deutlich langsamer.
- **Nach der Landung**:
  - Ein Schwertransporter (Zugmaschine mit langem Tieflader) bringt Tank und Booster liegend über die Landebahn.
  - Der Kran richtet sie vom Tieflader auf, schwenkt sie zur Rampe und setzt sie ab. Der Truck fährt wieder weg.
  - Danach hebt der Kran das Shuttle von der Bahn an den Tank.
  - Im Flugmodus erscheint das Quiz gleich nach der Landung, der Kran arbeitet im Hintergrund weiter.
  - Im Demo-Modus dauert der ganze Ablauf etwa 1½ Minuten.

## Neu in Version 13.39
- **Rauchsäule beim Start**: Sie läuft nach der Mitflug-Uhr („Echte Flugzeit“) und ist nach etwa 10 Minuten Startzeit verschwunden, also kurz nach dem Mitflug. Sie hängt fest am Dio und treibt kaum noch mit dem Wind.
- **Startkamera**: Die Begleitkamera steht 10 m weiter von der Rakete weg.
- **Kran**: Er steht immer neben der Rampe, mit dem Ausleger von der Rampe weg. Nach der Landung hebt er das Shuttle zurück und fährt danach wieder in seine Parkstellung.
- **Bremsschirm**:
  - Er hat Ringschlitze wie das Original und sinkt beim Langsamerwerden tiefer.
  - Er wird bei etwa 60 Knoten abgeworfen und bleibt dann lang ausgestreckt mit seinen Leinen auf der Landebahn liegen, bis zum nächsten Start.
- **Beschriftungen**: Sie verschwinden hinter dem UFO und dem Space Shuttle.
- **Hubble und andere Satelliten**: Das Shuttle fliegt schon aus bis zu 3000 km Abstand mit dem Satelliten mit. So ist er auch von Hand einzuholen.
- **„Ziel erreicht!“**: Diese Anzeige ersetzt „Fangstrahl“ und „Gefangen“.
- **Ebenenwechsel**: In der Milchstraße, der Lokalen Gruppe und dem Universum zoomt die Kamera zu Beginn langsam etwa doppelt so weit hinaus.
- **Flüssiger**:
  - Die Auflösung passt sich automatisch an. Fällt die Bildrate unter etwa 42 Bilder pro Sekunde, wird etwas gröber gerechnet, läuft es wieder flüssig, wieder feiner.
  - Das 3D-Stadtmodell wird undurchsichtig gezeichnet, wenn es ganz eingeblendet ist. Das iPad spart sich so verdeckte Pixel.
  - Das Schwarze Loch (Sagittarius A*) rechnet mit etwa einem Drittel weniger Schritten.

## Neu in Version 13.38
- **Nach der Landung**: Die Kamera fährt so weit zurück wie vor dem Start und kreist langsam um Dio und Rampe. Ein gelber Raupenkran hebt das Shuttle von der Landebahn, schwenkt es zur Rampe, richtet es senkrecht auf und setzt es an Tank und Booster. Danach steht die Rakete wieder startklar. Der Kran ist nur nach einer Landung zu sehen.
- **Startturm**: Er ist aus dem mitgeschickten Original-Gitterbauteil (STL) aufgebaut: vier Seiten, 72 m hoch, mit Gitterrosten alle 6 m.
- **Luftbild um die Landebahn**: Beim Start lädt die App das amtliche Luftbild (Geobasis NRW) und legt es auf den Boden rund um die Landebahn. Dafür braucht sie Internet. Ohne Verbindung bleibt die bisherige Karte.
- **Wetter**: Über der Nordsee sind keine Wolken mehr.
- **Start**:
  - Eine weiße Bodenwolke und eine graue Abgassäule bleiben stehen und lösen sich erst nach 7–10 Minuten (Echtzeit) auf.
  - Die Booster haben eine lange orange Flamme mit weißgelbem Kern und ein gleißendes Licht an den Düsen.

## Neu in Version 13.37
- **Demo: Daphnis**: Das Shuttle hält nicht mehr an. Es fliegt von hinten heran und gleitet langsam seitlich an Daphnis vorbei, mitfliegend mit ihrer Bahn um Saturn, sodass der Hintergrund ruhig bleibt.
  - Solange Daphnis vorn liegt, blickt die Kamera leicht zu ihr hin.
  - Danach zieht sie seitlich vorbei, und das Shuttle fliegt geradeaus weiter zum nächsten Ziel.

## Neu in Version 13.36
- **Demo: Heimflug und Landung**:
  - Nach dem Universum fliegt die Demo wie im Flugmodus durch alle Ebenen zurück, ohne Alien, und landet am Dio.
  - Der Ablauf der Landung ist derselbe wie im Flugmodus (Bremsschirm, Geräusche, Kamera zum Dio), nur ohne Konfetti.
  - Danach beginnt die Demo wieder an der Startrampe.
- **Kein Rauschen mehr beim Wechsel der Ebenen** (Demo und Flugmodus).

## Neu in Version 13.35
- **Eine Datei für alles (index.html)**:
  - Beim Öffnen wählt man: Universum-Atlas, Atlas für Kinder oder Flugsimulator.
  - Oben rechts erscheinen ein Schloss 🔓 und ein kleines Home-Symbol ⌂.
  - Am Anfang ist der Modus entsperrt. Ein Tippen auf das Schloss und der Code **1659** verriegeln ihn: Die Seite geht ins Vollbild und bleibt im gewählten Modus.
  - Im gesperrten Zustand führen Home, Mission-Beenden (Esc oder Lehrer-Menü) und der Wechsel in andere Modi nur über den Code weiter.
  - Wird das Vollbild verlassen, etwa mit Esc, erscheint „Gesperrt – zum Weitermachen tippen“. Neuladen oder Verlassen der Seite fragt vorher nach.
  - Ein erneutes Tippen auf das Schloss mit Code entsperrt.
  - Neuladen behält den gewählten Modus. Home führt zurück zur Auswahl.
  - Die alten Adressen mission.html und kinder.html leiten automatisch in den passenden Modus weiter (Lesezeichen, Symbole auf dem Home-Bildschirm). Direkt aufrufen lässt sich ein Modus auch mit index.html#modus=atlas, #modus=kinder oder #modus=flug.
- **Demo: Swing-by statt Drehen**:
  - Das Shuttle fliegt seitlich an jedem Ziel vorbei und schwingt in einem gleichmäßigen Bogen darum herum. Das Ziel liegt dabei seitlich vorn im Bild.
  - Aus diesem Schwung fliegt es tangential zum nächsten Ziel weiter, ohne Anhalten und ohne Drehen auf der Stelle.
- **Wolken**:
  - Feiner: kleinere, dichter gesetzte Wolkenballen, ausgefranstere Ränder, mehr Struktur.
  - Aus großer Entfernung verschmelzen sie zu Wolkenfeldern.
- **Missionsmodus**: Der weiße Nebel beim Durchfliegen der Wolken wurde bisher durch eine Stilregel versteckt. Jetzt ist er zu sehen.

## Neu in Version 13.34
- **Zielpfeil im Flugmodus (Fehler behoben)**:
  - Der Pfeil wurde über die Kameraprojektion berechnet. Die stammte vom letzten Zeichendurchgang mit sehr kleiner Sichtweite. Weiter entfernte Ziele galten deshalb als „hinter der Kamera“, und der Pfeil zeigte in die Gegenrichtung.
  - Jetzt wird die Richtung direkt aus der Blickrichtung berechnet. Im Test zeigt der Pfeil bei Zielen rechts, links, hinten-rechts und unten richtig.
- **Triebwerke**: Die Flammen kommen nur noch aus den drei modellierten Haupttriebwerken (dieselben Flammen wie beim Start) und brennen nur beim Beschleunigen. Steuerdüsen und Leuchtpunkt sind entfernt.
- **Demo: ruhigere Abflüge**: längere Flugzeit (18–30 s) und eine lange, weiche Beschleunigung über die erste Hälfte des Flugs.
- **Detailkarte bis zu den Nordseeinseln**:
  - Nördlich der 100-km-Karte liegt jetzt eine zweite Karte (Sentinel-2 cloudless von EOX, etwa 90 m pro Bildpunkt) bis etwa 53,8° N, Borkum bis Wangerooge.
  - Sie wird beim Start aus Kartenkacheln aus dem Internet zusammengesetzt und vom Offline-Speicher mitgespeichert.
- **Tank nach dem Abtrennen**: Er treibt langsam und gleichmäßig weg, statt aus dem Bild gerissen zu werden. Der schnelle Flug beginnt erst, wenn der Tank aus dem Bild oder mehr als 350 m entfernt ist.
- **Ruckeln zu Beginn des Landeanflugs (Ursache)**:
  - Beim Eintritt in die Erd-Ebene schwenkte die Kamera in etwa einer Sekunde um bis zu 90° um die Erde, um über Rheine zu kommen.
  - Dieser Bogen ist jetzt auf mehrere Sekunden des Sinkflugs verteilt.
- **Landung**:
  - Die Kamera blickt zum Dio hin, mit Shuttle und Dio zusammen im Bild.
  - Neue, realistischere Geräusche: doppelter Überschallknall zu Beginn des Anflugs, Fahrtwind, Reifenquietschen und Stoß beim Aufsetzen, Abrollgeräusch, Knall und Flattern des Bremsschirms, Bugrad.

## Neu in Version 13.33
- **Demo: Pfeiltasten und Steuerung** wirken im Demo und beim Mitflug nicht mehr. Sie arbeiteten gegen die Kamerafahrt, deshalb ruckelte es.
- **Demo: Kamera beim Start etwas flacher** (Blick 9° angehoben): Beim Abtrennen der Booster ist oben im Bild der Horizont der Erde zu sehen.
- **Ruckler nach dem Tankabwurf**:
  - Ursache: Bei der Übergabe wurde erst in diesem Moment die Kopie des Orbiters für die Überblendung angelegt, und zu Beginn des ISS-Flugs die zweite Bildebene für das scharfe Shuttle.
  - Beides geschieht jetzt vorab. Im Test gibt es keine Rechenspitzen mehr.
- **Countdown**: Die Zahlen erscheinen gleichmäßig. „10“ und „0“ bleiben an ihrer Stelle, die Zahlen dazwischen kommen im gleichen Abstand.
- **Raketen-Sound**:
  - Der Startton lief endlos weiter, wenn ein Start abgebrochen wurde, zum Beispiel wenn die Mission während des Demo-Starts begonnen wurde. Jetzt wird er sicher beendet.
  - Das Triebwerksgeräusch ist nur noch beim Beschleunigen laut.
- **Triebwerke (Demo und Flugmodus)**:
  - Das Shuttle zeigt Triebwerksflammen, die nur beim Beschleunigen brennen.
  - Bei Kurven zünden die Steuerdüsen an Nase und Heck auf der passenden Seite, beim Abbremsen die Düsen vorn.
- **Zielauswahl**:
  - Die Fenster sind breiter.
  - Es wird nicht mehr automatisch gewählt.
  - Nach 3 Minuten ohne Auswahl blendet die Mission in den Demo-Modus über.
- **Bonus-Missionen** jetzt auch in Milchstraße, Lokaler Gruppe und Universum, zum Beispiel Rigel, Alpha Centauri, Tarantelnebel, M81/M82, Großer Attraktor.
- **Laniakea**: Fotos ergänzt (Wikimedia Commons: „Laniakea.png“, „Local supercluster-ly.jpg“).
- **Landung**:
  - Das Ruckeln zu Beginn kam daher, dass das Landeshuttle erst beim Anflug gebaut wurde. Jetzt geschieht das schon zu Beginn des Heimflugs.
  - Das Shuttle setzt 100 m früher auf und steht 30 m früher.
  - Die Startrampe bleibt während der Landung stehen. Die Kamera fliegt deshalb auf der Dio-Seite (Nordnordwest), damit die Rampe nie im Weg ist.
  - Nach der Landung regnet es Konfetti.
- **Technik**: Das Packskript übernimmt bei mission.html und kinder.html nur noch die Kopfzeilen, nicht mehr den alten Stil. Änderungen am Aussehen kommen jetzt auch dort an.

## Neu in Version 13.32
- **Haken nach dem Tankabwurf (Ursache gefunden und behoben)**:
  - Das Tempo des Shuttles hing an der Steigung des Höhenprofils. Oben wird das Profil flach, deshalb bremste das Shuttle nach dem Tankabwurf fast bis zum Stillstand ab und beschleunigte bei der Übergabe wieder stark. Jetzt sinkt das Tempo nie: Nach Brennschluss gleitet es mit voller Geschwindigkeit weiter.
  - Beim Wechsel auf die Kamera hinter dem Shuttle blieb die Kamera ein Bild lang stehen. Jetzt übernimmt sie die Lage aus dem letzten Bild.
  - Bei der Übergabe drehte sich die Kamera ruckartig um etwa 20°. Jetzt richtet sie sich langsam aus, ohne doppelten Schritt, und wird danach weich schneller.
  - Im Test läuft die Bewegung vom Tankabwurf bis zum schnellen Flug ohne Stillstand und ohne Sprung durch.
- **Startrampe**: liegt jetzt östlich der Landebahn zwischen Straße und Ems und überlappt nicht mehr.
- **Kurvenlage**: Das Shuttle neigte sich in Kurven zur falschen Seite (Vorzeichenfehler). Jetzt neigt es sich in die Kurve, und die Nase zeigt leicht in die Kurve.
- **Wechsel in die nächsthöhere Ebene (Demo und Flugmodus)**:
  - Die Kamera fliegt nicht mehr hinaus, sie bleibt am jetzigen Ort und gleitet nur sanft weiter, während das Bild verschwimmt.
  - Im Demo geht es danach direkt zum nächsten Ziel, zum Beispiel vom Mond direkt zum Saturn, ohne Gesamtansicht.
  - Auch beim Neustart der Demo (Universum → Erde) gibt es kein Rückwärtsfliegen mehr.

## Neu in Version 13.31
- **Dio-Ansicht zu Beginn**: noch einmal 50 m näher.
- **Ruckeln beim Verlassen der Erde behoben**:
  - Bei der Übergabe an die Verfolgerkamera zog sich die Kamera in wenigen Sekunden kilometerweit zurück. Dadurch lief das Bild rückwärts.
  - Danach stand das Shuttle kurz still.
  - Jetzt fliegt die Kamera mit, und das Shuttle gleitet mit seinem Schwung weiter, bis der Flug zum nächsten Ziel beginnt.
- **Vorwärtsflug im Demo**:
  - Zu ISS, Mond, Saturn, Daphnis, Jupiter, Sagittarius A*, Andromeda und Bootes-Leere fliegt die Kamera auf einer Bahn und blickt immer in Flugrichtung.
  - Das Shuttle fliegt Kurven und nie seitwärts. Im Test lag die Abweichung meist unter 3°.
  - Die Bahn führt um die Erde herum und nie unter etwa 230 km Höhe, also weit über der Atmosphäre.
  - Daphnis wird wie die ISS von hinten in ihrer Flugrichtung begleitet.
- **Herauszoomen im Demo**:
  - Genau wie im Flugmodus.
  - Damit das Shuttle dabei nicht rückwärts fliegt, wendet es in einer Kurve und fliegt auf die Kamera zu.
- **Heimflug**:
  - Das Shuttle bleibt beim Wechsel der Ebenen an derselben Stelle im Bild.
  - Nur der Hintergrund verschwimmt; das Shuttle liegt in einer eigenen Bildebene darüber und bleibt scharf.
  - Beim Landeanflug zieht es geradeaus davon, statt auszublenden.
  - Kein Stillstand mehr zwischen den Ebenen.
- **Alien**:
  - Der Flug hält nicht mehr an, sondern wird weich auf etwa die Hälfte gebremst.
  - Danach geht es ohne Pause zur Erde und in den Landeanflug.
- **Landung**:
  - Die Landebahn reicht jetzt von den Feldern an der Ems bis zur Kreuzung Anton-Führer-Straße/Salzbergener Straße. Sie folgt dem Gelände.
  - Das Shuttle setzt nördlich vom Dio auf, rollt am Dio vorbei und bleibt an der Kreuzung stehen.
  - Die Kamera folgt dem Shuttle die ganze Zeit in festem Abstand von schräg hinten, auch beim Übergang aus dem Anflug.
  - Das Shuttle gleitet ohne Pause aus dem Anflug in die Landung.
- **Bremsschirm**:
  - Er öffnet sich etwas früher, gleich nach dem Aufsetzen des Hauptfahrwerks und noch vor dem Bugrad.
  - Ablauf wie beim echten Shuttle: Der Hilfsschirm zieht den Hauptschirm heraus. Der Hauptschirm öffnet sich erst gerefft (halb offen) und nach gut 2 s ganz, mit kurzem Überschwingen.
  - Danach „atmet“ er leicht und wird gegen Ende des Ausrollens abgeworfen.

## Neu in Version 13.30
- **Schwarzer Bildschirm im Sonnensystem (Demo)**:
  - Seit 13.25 kreist die Kamera im Demo nicht mehr seitlich. Dadurch blieb in der Übersicht der Drehwinkel unbelegt („undefined“). Daraus wurden ungültige Kamerawerte, und das Bild war schwarz.
  - Jetzt gleitet die Kamera dort langsam vorwärts.
  - Im Test läuft die Demo einmal komplett durch alle Ebenen, ohne einen einzigen ungültigen Wert.
- **Wolken**: blenden schon aus etwa 6500 km Entfernung und sehr langsam ein.
- **Dio-Ansicht**: noch einmal 30 m näher.
- **Start**: Die Begleitkamera zeigt jetzt die Seite mit dem Shuttle, nicht die Rückseite des Tanks.
- **Tankabwurf**: Der Tank treibt sichtbar weg. Erst wenn er mehr als 700 m entfernt ist, geht es weiter zum schnellen Flug.
- **Flugweg**:
  - Beim Aufstieg in die Umlaufbahn zeigt die Nase in die Bewegungsrichtung.
  - Der Flug zum Mond führt in einem Bogen außen an der Erde vorbei, nie hindurch.
  - Im Test kam die Kamera der Erde nie näher als bis auf ISS-Höhe.

## Neu in Version 13.29 (Fehlersuche)
- **Flackern beim Start (Rakete und Shuttle springen zwischen zwei Positionen)**: Ursache war ein Programmierfehler aus 13.27. Eine eingeschobene Zeile hat die normale Kamerasteuerung an eine falsche Bedingung gehängt. Dadurch setzten in jedem Bild zwei Kameras das Bild: zuerst die Mitflug-Kamera, dann die normale Kamera. Das ist behoben. Jetzt steuert immer nur eine Kamera.
- **90°-Kippen bei der Ankunft (z. B. ISS)**: Wenn die Kamera einem sich drehenden Objekt folgt (Dio mit der Erde, ISS auf ihrer Bahn), dreht sie in jedem Bild um dessen Drehung seit dem letzten Bild mit. Dafür merkte sie sich die letzte Lage, aber nicht, zu welchem Objekt sie gehörte. Nach einem Anflug verglich sie die Lage der ISS mit einer alten Lage eines anderen Objekts (z. B. des Dio von vor Minuten). Das gab eine große Drehung in einem einzigen Bild. Jetzt wird nur dieselbe Objektlage verglichen, und nach jedem Anflug neu begonnen. Im Test bleibt der Horizont an der ISS gerade (0°).
- **Übergang zum fliegenden Shuttle**: wieder wie in 13.27 (Begleitkamera bis kurz vor Schluss, dann hinter das Shuttle), mit der 3-s-Überblendung.
- Die kleinen Änderungen aus 13.28 bleiben: Start langsamer, Wolken früher, Dio-Kreisbahn schneller, dunkler Himmel in großer Höhe.

## Neu in Version 13.28
- **Ruckeln und Flackern nach dem Start (Demo)**: Die Verfolgerkamera aus dem vorigen Demo-Durchlauf war noch aktiv und kämpfte mit der Mitflug-Kamera. Dabei blitzte auch das Flugmodell auf. Sie wird jetzt beim Start ganz ausgeschaltet.
- **Kamera bleibt bei der Rakete**: Der Wechsel hinter das Shuttle beginnt nach dem Tankabwurf. Er läuft auf einem Bogen um die Rakete, dauert 9 s und hält den Blick auf dem Orbiter. Durchgerechnet: Der Orbiter bleibt die ganze Zeit im Bild.
- **Höhen**: Booster-Trennung in 45 km, Tankabwurf in rund 107 km (wie beim echten Shuttle). Der Himmel wird jetzt mit der Höhe realistisch dunkel, in 40 km Höhe ist er fast schwarz.
- **Start**: Nach dem Abheben noch einmal halb so schnell (insgesamt ein Drittel des ursprünglichen Tempos). Die Demo wartet entsprechend länger.
- **Wolken**: Sie beginnen schon in größerer Höhe sichtbar zu werden und blenden langsamer ein.
- **Dio-Kreisbahn**: doppelt so schnell.

## Neu in Version 13.27
- **Anflug aufs Dio**: wieder wie in Version 13.25 (die Änderung aus 13.26 ist zurückgenommen).
- **Überblendung beim Shuttle-Start**: Der Übergang vom echten Orbiter zum Flugmodell blendet jetzt wirklich weich über, 3 Sekunden lang. In 13.25 und 13.26 brach die Überblendung im ersten Bild ab, weil das Flugmodell in diesem Moment noch als unsichtbar galt.

## Neu in Version 13.26
- **Anflug aufs Dio (Demo)**: eine einzige, gleichmäßige Bewegung. Bogen über die Erde, Abstieg und Neigen laufen zusammen mit dem Heranzoomen (nicht erst schräg, dann senkrecht).
- **Wolken**:
  - Die Fläche der Wolkendecke ist viermal so groß, über Rheine geschlossen bis etwa 40 km.
  - Darum liegen gröbere Felder bis 200 km und große, weiche Felder bis etwa 520 km.
  - Sie blenden schon ab etwa 3000 km Höhe ein. Die Wolken der Weltkarte bleiben bis etwa 250 km sichtbar, so verschmelzen beide.
- **Dio-Ansicht**: weitere 30 m näher, Kreisbahn 1,5-mal so schnell.
- **Start**: Nach dem Abheben ein Drittel langsamer. Das Höhenprofil ist weicher, damit es beim Brennschluss und Tankabwurf nicht mehr ruckelt.
- **Auf dem Weg zur ISS**: Der Halt an einem Parkpunkt über Rheine ist entfernt; dort stand das Bild still. Nach dem Start geht es direkt vorwärts zur ISS.

## Neu in Version 13.25
- **Kippen an der ISS**: Die Ursache war dieselbe Art Fehler wie am Dio. Die „Oben“-Richtung für die Ansicht an der ISS wurde schon zu Beginn des Anflugs festgelegt. Während des Anflugs fliegt die ISS aber ein großes Stück weiter um die Erde. Bei der Ankunft zeigte das alte „oben“ deshalb zur Seite, und die Kamera drehte sich bis zu 90° dorthin. Jetzt wird „oben“ erst bei der Ankunft festgelegt, aus der tatsächlichen Blickrichtung. Im Test bleibt der Horizont gerade.
- **Nur noch vorwärts**: Die Regel „beim Mond die Erde im Blick“ ist gelöscht.
  - Alle Ziele werden geradeaus angeflogen.
  - An den Zielen kreist die Kamera im Demo nicht mehr seitlich, sondern gleitet langsam weiter vorwärts.
  - Beim Wechsel in eine größere Ebene wird nicht mehr rückwärts herausgezoomt; das Bild verschwimmt kurz.
- **Dio-Ansicht**: 50 m näher, die Kreisbahn ist doppelt so schnell.
- **Shuttle-Start**: Die Kamera bleibt bis zum Tankabwurf bei der Rakete (kein Kamerawechsel nach der Booster-Trennung). Danach blenden der Orbiter und das Flugmodell 2,5 s ineinander über.
- **Wolken**: Um die Wolkendecke über Rheine liegen bis etwa 260 km große, weiche Wolkenfelder. Die Wolken der Weltkarte bleiben bis etwa 400 km Höhe sichtbar, so gehen beide weich ineinander über.
- **3D-Mesh**: Es blendet schon oberhalb der Wolken ein (unter etwa 6 km Höhe).
- **Landung**:
  - Echte Landebahn (30 m breit, rund 640 m lang, Kennziffern 16/34) auf der Schneise nördlich des Dio.
  - Das Shuttle setzt 140 m später auf und rollt bis etwa 300 m vor die Schule.
  - Beim Anflug ist das Shuttle schon im Gleitflug, die Kamera holt es ein.

## Neu in Version 13.24
- **Kein Kippen am Dio mehr**: Die Demo springt zu Beginn auf Tageslicht, dabei dreht sich die Erde ein Stück weiter. Die Drehachse der Kreisbahn ums Dio blieb aber in der alten Lage stehen, so lag der Horizont bis zu 45° schief. Jetzt dreht die Erde sofort mit und die Kreisbahn ebenso. Im Test bleibt der Horizont gerade (0°).
- **Am Dio**: Die Kamera kreist gleichmäßig um Dio und Rampe, mit Blick aufs Dio, bis die Rakete abhebt. Es gibt keinen zweiten Anflug zur Rakete mehr.
- **Wolkendecke**: 1,7-mal größer (geschlossen bis etwa 20 km um Rheine, Felder bis etwa 95 km). Sie ist schon aus etwa 1100 km Höhe zu sehen.
- **Mesh vorgeladen**: Sobald alles geladen ist, wird das 3D-Mesh einmal unsichtbar gezeichnet. Nach dem Durchfliegen der Wolken ist es sofort vollständig da.
- **Raketenstufen und Tank**: Sie fallen wieder sichtbar ab. Erst bleiben sie neben dem Shuttle, dann treiben sie langsam ab und fallen zurück. Vorher waren sie durch den Zeitraffer schlagartig verschwunden.
- **Demo-Shuttle**: Es fliegt nicht mehr weg und taucht neu auf. Es bleibt immer vor der Kamera, mit der Nase nach vorn, und legt sich in die Kurven. Nur beim Landeanflug zieht es davon, damit es nicht zwei Shuttles gibt.

## Neu in Version 13.23
- **100-km-Karte** (`umgebung-100km.jpg`, bitte mit hochladen): ein Satellitenbild von 200 × 200 km um Rheine mit etwa 50 m pro Bildpunkt. Es reicht über NRW hinaus nach Niedersachsen und in die Niederlande.
  - Quelle: Sentinel-2 cloudless 2024 von EOX, Lizenz CC BY-NC-SA 4.0 (nicht kommerziell), mit veränderten Copernicus-Sentinel-Daten.
  - Die Farben sind an die Luftbilder angeglichen. Nach außen läuft die Karte kreisrund weich aus.
  - Die Quellenangabe erscheint unten rechts, sobald die Karte zu sehen ist.

## Neu in Version 13.22
- **Detailkarte der Erde**: Die Farben kommen jetzt aus der Weltkarte, die Kacheln liefern nur noch die feinen Einzelheiten. Damit gibt es um Europa keine farblich abweichende Fläche mehr. Am Rand läuft die Detailkarte breit und weich in die Weltkarte aus.
- **Demo-Modus**: Das Shuttle fliegt nur noch vorwärts. Fliegt die Kamera seitlich um ein Objekt oder zurück, zieht das Shuttle geradeaus davon. Geht die Kamera wieder vorwärts, kommt es von hinten wieder ins Bild.
- **Wolkendecke**: Sie ist nicht mehr kreisrund. Über Rheine ist sie geschlossen, nach außen hat sie einen unregelmäßigen Rand und einzelne Wolkenfelder bis etwa 50 km.
- **Shuttle-Start**: Die Flughöhe folgt echten Werten (im Zeitraffer). Nach etwa 7 s geht es durch die Wolken. Die Booster werden in 45 km Höhe abgetrennt, der Außentank in rund 110 km.
- **An den Zielen**: Nach dem Einfangen fliegt das Shuttle langsam einmal ganz um das Objekt herum (eine Runde in gut einer Minute), dabei etwas höher und tiefer.
- **Heimflug**:
  - In der Lokalen Gruppe geht es direkt auf unsere Sonne bzw. die Erde zu, nicht zum Zentrum der Milchstraße.
  - Im Sonnensystem hält die Kamera vor der Erde (14 Erdradien), dort begegnet uns das UFO, nicht mehr im Inneren der Erde.
- **Landung**:
  - Neuer Landeplatz: Anflug von Norden über die Felder an der Ems, Aufsetzen am Feldrand, Ausrollen nach Süden auf das Dio zu. Die Schneise ist breit genug, die Flügel schneiden keine Gebäude. Bäume und Gartenhütten in der Schneise sind eingeebnet.
  - Der Gleitpfad bleibt über den Baumreihen, erst kurz vor dem Aufsetzen wird abgefangen.
  - Die Kamera fliegt hinter dem Shuttle auf der Linie Dio–Shuttle, rund 50 m weiter weg als bisher. So liegt das Dio immer im Hintergrund.
  - Fahrwerk, Aufsetzen auf den Hinterrädern und mehr Reifenqualm.
  - Beim Übergang ist nur noch ein Shuttle zu sehen: Das Heimflug-Shuttle zieht davon, das Landeshuttle wartet unter den Wolken.

## Neu in Version 13.21
- **3D-Mesh ohne Lücken**: Das Mesh ist neu aus den Originaldaten aufbereitet. Die grauen Keile, die grünen Löcher und die Löcher in den Fassaden kamen von der alten Aufbereitung und sind weg. Überlappende Kacheln werden nicht mehr ausgeschnitten, sondern bekommen eine feste Reihenfolge: Die feinere liegt immer vorne.
- **Kein Flackern**: Die Tiefengenauigkeit richtet sich jetzt nach der Flughöhe. Luftbilder, Erdkacheln und Mesh liegen in fester Reihenfolge übereinander und können sich nicht mehr gegenseitig überdecken.
- **Wolkenschleier über Rheine**: Über Rheine liegt eine Wolkendecke (1,5–2,3 km hoch), die nach außen aufreißt. Beim Durchfliegen wird es kurz weiß, darunter erscheinen Mesh und Luftbilder. Aus großer Höhe sieht man das Mesh gar nicht mehr.
- **Weiche Übergänge**: Erdkacheln blenden über, statt umzuschalten. Der Nebel klingt nach dem Durchfliegen langsam ab, das Mesh läuft am Datenrand durchsichtig aus.
- **100-km-Karte**: Die App lädt `umgebung-100km.jpg`, falls die Datei vorhanden ist.
- Die Mesh-Dateien heißen jetzt `rheine-3d-1.bin` und `rheine-3d-2.bin`. Der neue Name sorgt dafür, dass der Offline-Speicher keine alte Fassung mehr ausliefert.

## Neu in Version 13.20
- **3D-Mesh neu, bis 10 km um das Dio:** zwei neue Dateien `dio-3d-1.bin` und `dio-3d-2.bin` (je 22 MB). **Bitte hochladen und die alten Dateien `dio-mesh-1.bin` bis `dio-mesh-4.bin` löschen.** Die Daten sind frisch und vollständig geladen. Wo sich Kacheln überlappten (das war das Flackern), hat jetzt immer die feinere Kachel Vorrang. Löcher gibt es keine mehr; das große grüne Quadrat war fehlende Mesh-Daten.
- **Landesgrenze:** Die 3D-Daten von Geobasis NRW enden an der Grenze zu Niedersachsen (nordwestlich von Rheine). Dort und am 10-km-Rand sinkt das Mesh sanft unter das Luftbild, der Übergang folgt dem Datenrand statt einer Kreislinie.
- **Anflug:** Mesh und Luftbilder erscheinen erst ab etwa 120 km Abstand und blenden bis 70 km weich ein. Vorher sieht man nur die Erdkarte, ohne Flackern.
- **Detailkarte der Erde:** Sie bleibt in der Ebene Erde & Mond stehen und verschwindet beim Herauszoomen nicht mehr.
- **Demo-Modus:** Das Shuttle zeigt immer in seine Flugrichtung. Fliegt die Kamera seitwärts oder rückwärts, wird es ausgeblendet. Beim Anflug aufs Dio dreht sich die Erde früher und ruhiger unter der Kamera.
- **Heimflug:** Das Shuttle fliegt vor der Kamera her. In der Lokalen Gruppe geht es direkt auf das Sonnensystem zu statt auf das Zentrum der Milchstraße, die Überblendung passt jetzt. Der Außerirdische begegnet uns im Sonnensystem.
- **Landung, deutlich realistischer:** Anflug von Süden über die Stadt auf einem steilen Gleitpfad (18°), Abfangen, Fahrwerk fährt bei 90 m Höhe aus, Aufsetzen auf dem Hauptfahrwerk mit Reifenqualm, Bugrad senkt sich, Luftbremse und Bremsschirm öffnen sich. Unter etwa 60 km/h wird der Schirm abgeworfen und fällt hinter dem Shuttle zusammen auf die Straße. Die Kamera fliegt seitlich mit, ohne Schnitt, und am Ende ist das Dio im Bild.


## Neu in Version 13.19
- **Neue Datei `dio-mesh-4.bin` (8 MB):** Bitte zusätzlich hochladen. Das 3D-Gebiet reicht jetzt kreisrund bis 5 km um das Dio. Nach außen werden die Daten gröber, damit das iPad flüssig bleibt. Am Rand sinkt das Mesh sanft unter das Luftbild, der Übergang folgt dem Gelände.
- **Kein Flackern mehr:** Die Teilstücke des Meshs überlappen sich nicht mehr, die gepunktete Randblende ist entfernt, und die Luftbilder liegen sicher hinter dem Mesh.
- **Kippen beim Start behoben:** Die Begleitkamera und die Kamera beim Tankabwurf richteten sich bisher nach der Raketenachse. Sobald sich die Rakete neigte, lag der Horizont bis zu etwa 45° schief. Jetzt bleibt er gerade.
- **Kippen beim Fliegen behoben:** Im Flugmodus richtet sich das Shuttle von selbst wieder waagerecht aus. Nach Kurven und Steigflügen liegt die Ansicht nicht mehr schief.
- **Landung:** Die Kamera behält beim Landeanflug ihre Himmelsrichtung, statt um die Senkrechte herumzuschwenken.


## Neu in Version 13.18
- **Neue Datei `dio-mesh-3.bin` (19,5 MB):** Bitte zusätzlich hochladen. Damit reicht das 3D-Gebiet kreisrund bis 2,2 km um das Dio (vorher 1,15 km). Am Rand löst sich das Mesh fein gepunktet in das Luftbild auf, es gibt keine sichtbare Kante. Fehlt die Datei, endet das 3D-Gebiet wie bisher bei 1,15 km.
- **Kein Kippen mehr:** Die Kamera kippt nicht mehr um 90° zur Seite, weder vor dem Dio noch bei der Ankunft an der ISS. Beim Anflug von oben neigt sich die Kamera in die Richtung, die gerade oben im Bild ist. Auf Bögen um die Erde bleibt der Horizont waagerecht.
- **ISS-Anflug ohne Bruch:** Der Blick springt zu Beginn nicht mehr senkrecht nach unten.
- **Ziel gefunden:** Die alte Cockpit-Ansicht kommt nicht mehr. Die Ansicht bleibt, wie sie ist, das Shuttle bleibt sichtbar neben dem Ziel und fliegt mit ihm mit.
- **Demo-Modus:** Nach dem Start fliegt das Shuttle immer vor der Kamera her. Das Triebwerk ist zu hören, sobald einmal auf den Bildschirm getippt wurde (Browser erlauben Ton erst nach einer Berührung). Die Demo bleibt kürzer bei den Objekten.
- **Hindernisse:** Weltraumschrott gibt es als Satellit, ausgebrannte Raketenstufe, Trümmerwolke oder alten Kugelsatelliten. Asteroiden sind glatter und detailreicher, auch als Doppel-Asteroid, kantiger Metall-Brocken oder Geröllhaufen. Dazu kommen verschiedene Staubwolken, alte und junge Sternhaufen sowie Schwarze Löcher mit Photonenring und teils mit Jets.
- **Autopilot:** Der Autopilot weicht den Hindernissen aus.
- **Seitenleitwerk:** Bemalt statt aus übereinanderliegenden Teilen, deshalb flackert die schwarze Vorderkante nicht mehr. Weiße Kacheln, dunkle Hitzeschutzkante, Ruder mit Scharnierlinie.
- **„Wie weit ist das?“:** Unter der Entfernung steht ein Vergleich für Kinder, z. B. „etwa 300-mal von Rheine nach München“, „etwa 9-mal bis zum Mond“ oder „das Licht braucht etwa 2,5 Millionen Jahre bis dorthin“.


## Neu in Version 13.17
- **Start → Flug:** Beim Abtrennen des Außentanks ist die Kamera schon schräg über dem Shuttle. Danach gleitet sie langsam hinter das Shuttle in die Flugperspektive. Die Übergabe an die Steuerung geschieht ohne Schnitt, das Shuttle bleibt im Bild und steigt sanft in die Umlaufbahn.
- **Demo-Modus:** Er läuft genauso ab: Start, Tankabwurf von oben, dann einige Sekunden hinter dem Shuttle her. Danach fliegt das Shuttle davon, statt zu verschwinden.
- **Countdown:** „2 – 1 – Zero“ passt jetzt zum eingeblendeten Text.
- **Kamera ruhiger:** Beim Start eines Anflugs rollt die Kamera nicht mehr ruckartig zur Seite (z. B. bei Erde-&-Mond-Zielen). Beim Anflug auf das Dio kippt die Kamera früher in die Schrägansicht und kreist dann nur noch.
- **ISS → Mond (Demo):** Die Kamera schwenkt an der ISS herum und gleitet mit Blick zurück auf ISS und Erde zum Mond, in einem Bogen am Mond vorbei.
- **Heimflug:** Die Erde wird nur noch einmal herangezoomt, beim Wechsel vom Sonnensystem bleibt ihre Größe im Bild gleich. In der Milchstraße geht es direkt Richtung Sonnensystem.
- **Landung:** Das Shuttle wird beim Anflug gleichmäßig langsamer und rollt ohne Ruck aus. Die Kamera blendet weich in die Landeansicht über. Am Ende gibt es kein Abblenden mehr, die Kamera kreist langsam um das gelandete Shuttle.
- **Bremsschirm:** 20 rot-weiße Bahnen mit Nähten, Scheitelöffnung und Saumring. Er öffnet sich erst gerefft, dann ganz; die Fangleinen laufen zu einem Gurt zusammen.
- **Seitenleitwerk:** Gepfeilte Flosse mit dunkler Vorderkante, zweigeteiltes Seitenruder als Luftbremse (spreizt sich beim Ausrollen auf) und das Gehäuse des Bremsschirms.
- **Sonnensystem:** In der Mission sind nur noch die Bahnen der Planeten und Missionsziele zu sehen, Kometenschweife sind ausgeblendet.
- **3D-Umgebung:** Die Erweiterung um 500–1000 m steht noch aus. Der Server von Geobasis NRW hat das Laden gedrosselt, ein zweiter Versuch folgt.


## Neu in Version 13.16
- **Start:** Der Countdown beginnt erst, wenn die Kamera an der Startrampe angekommen ist. So gibt es keinen Start mehr, während man noch beim Jupiter ist.
- **Gescheiterte Mission** (drei Treffer): Rückflug und Landung, aber ohne Alien, Quiz und Planetenpass. Danach kommt eine Werkstatt-Meldung.
- **Hindernisse:** In der Milchstraße sind es Staubwolken, in der Lokalen Gruppe Kugelsternhaufen, im Universum kleine Schwarze Löcher. Treffer sind mit einem dumpfen Schlag zu hören, Kurven mit einem leisen Rauschen.
- **Neue Bonusziele:** Voyager 1 und 2, New Horizons, der Halleysche Komet und Ceres.
- **Abspann:** Nach dem Planetenpass läuft ein kurzer Abspann.
- **Bahnen:** In der Mission werden nur noch die Bahnen der Missionsziele angezeigt, im Sonnensystem zusätzlich die der Planeten.
- **Ebenenwechsel:** Das Bild verschwimmt kurz, statt eine Tafel zu zeigen.
