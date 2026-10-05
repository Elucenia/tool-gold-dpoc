<!-- ELUCENIA technical documentation · gold-dpoc · it · no clinical/professional/rights approval -->

# Classificazione GOLD 2026

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/gold-dpoc)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Rapporto FEV₁/FVC post-broncodilatatore

`rel`

intervallo: 0,2–1,2

### FEV₁ post-broncodilatatore

`vef1`

% del valore previsto · intervallo: 5–150

### Grado mMRC valutato in precedenza

`mmrc`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Riacutizzazioni moderate nell’ultimo anno (corticosteroide e/o antibiotico)

`exac`

intervallo: 0–20

### Riacutizzazioni gravi nell’ultimo anno (pronto soccorso o ricovero)

`intern`

intervallo: 0–10

### Punteggio CAT/CAAT (se disponibile)

`caat`

punti · facoltativo · intervallo: 0–40

### BPCO confermata clinicamente, spirometria post-broncodilatatore valida e valutazione iniziale prima della terapia di mantenimento?

`contexto`

- `0` — No
- `1` — Sì

## Edizione del metodo

GOLD 2026 v1.3; classificazione spirometrica e valutazione ABE iniziale

## Formula documentata

FEV₁/FVC \< 0,70 è un requisito spirometrico, non una diagnosi isolata. GOLD 1: FEV₁ ≥ 80%; 2: ≥ 50%; 3: ≥ 30%; 4: \< 30%. GOLD 2026: gruppo E se ≥ 1 riacutizzazione moderata o grave nell’ultimo anno; altrimenti B se mMRC ≥ 2 o CAT/CAAT ≥ 10, A negli altri casi. Se CAT/CAAT non è inserito, si usa mMRC.

## Limiti e popolazione

Questa edizione classifica la valutazione iniziale. Non rappresenta l’algoritmo di follow-up né prescrive farmaci. I valori borderline e la qualità dell’esame richiedono verifica clinica.

## Riferimenti

- [GOLD · rapporto 2026 v1.3](https://goldcopd.org/wp-content/uploads/2026/01/GOLD-REPORT-2026-v1.3-8Dec2025_WMV2.pdf)

- [Agustí A et al. Global Initiative for Chronic Obstructive Lung Disease 2023 Report: GOLD Executive Summary. Eur Respir J, 2023.](https://doi.org/10.1183/13993003.00239-2023)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026


Inserire soltanto il grado mMRC da 0 a 4 già determinato in una valutazione separata. Questo strumento riceve un grado già valutato e non somministra il questionario mMRC.
