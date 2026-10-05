<!-- ELUCENIA technical documentation · gold-dpoc · de · no clinical/professional/rights approval -->

# GOLD-2026-Klassifikation

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/gold-dpoc)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### FEV₁/FVC-Verhältnis nach Bronchodilatation

`rel`

Bereich: 0,2–1,2

### FEV₁ nach Bronchodilatation

`vef1`

% des Sollwerts · Bereich: 5–150

### Bereits beurteilter mMRC-Grad

`mmrc`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Moderate Exazerbationen im letzten Jahr (Kortikosteroid und/oder Antibiotikum)

`exac`

Bereich: 0–20

### Schwere Exazerbationen im letzten Jahr (Notfallbehandlung oder Krankenhausaufnahme)

`intern`

Bereich: 0–10

### CAT/CAAT-Score (falls vorhanden)

`caat`

Punkte · optional · Bereich: 0–40

### COPD klinisch bestätigt, gültige Spirometrie nach Bronchodilatation und Erstbeurteilung vor Erhaltungstherapie?

`contexto`

- `0` — Nein
- `1` — Ja

## Fassung der Methode

GOLD 2026 v1.3; spirometrische Klassifikation und initiale ABE-Beurteilung

## Dokumentierte Formel

FEV₁/FVC \< 0,70 ist eine spirometrische Voraussetzung, keine alleinige Diagnose. GOLD 1: FEV₁ ≥ 80%; 2: ≥ 50%; 3: ≥ 30%; 4: \< 30%. GOLD 2026: Gruppe E bei ≥ 1 moderater oder schwerer Exazerbation im letzten Jahr; andernfalls B bei mMRC ≥ 2 oder CAT/CAAT ≥ 10, sonst A. Ohne CAT/CAAT-Eingabe wird mMRC verwendet.

## Grenzen und Population

Diese Ausgabe klassifiziert die Erstbeurteilung. Sie bildet weder den Nachsorgealgorithmus ab noch verordnet sie Medikamente. Grenzwerte und Untersuchungsqualität erfordern eine klinische Prüfung.

## Referenzen

- [GOLD · Bericht 2026 v1.3](https://goldcopd.org/wp-content/uploads/2026/01/GOLD-REPORT-2026-v1.3-8Dec2025_WMV2.pdf)

- [Agustí A et al. Global Initiative for Chronic Obstructive Lung Disease 2023 Report: GOLD Executive Summary. Eur Respir J, 2023.](https://doi.org/10.1183/13993003.00239-2023)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026


Geben Sie ausschließlich den mMRC-Grad von 0 bis 4 ein, der bereits in einer gesonderten Beurteilung ermittelt wurde. Dieses Werkzeug übernimmt einen bereits ermittelten Grad und führt den mMRC-Fragebogen nicht durch.
