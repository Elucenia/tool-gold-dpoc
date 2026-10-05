<!-- ELUCENIA technical documentation · gold-dpoc · en · no clinical/professional/rights approval -->

# GOLD 2026 classification

[conditions, sources and permissions](https://elucenia.org/en/tools/gold-dpoc)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Postbronchodilator FEV₁/FVC ratio

`rel`

range: 0.2–1.2

### Postbronchodilator FEV₁

`vef1`

% of predicted · range: 5–150

### Previously assessed mMRC grade

`mmrc`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Moderate exacerbations in the last year (corticosteroid and/or antibiotic)

`exac`

range: 0–20

### Severe exacerbations in the last year (emergency care or hospitalization)

`intern`

range: 0–10

### CAT/CAAT score (if available)

`caat`

points · optional · range: 0–40

### Clinically confirmed COPD, valid postbronchodilator spirometry and initial assessment before maintenance therapy?

`contexto`

- `0` — No
- `1` — Yes

## Method edition

GOLD 2026 v1.3; spirometric classification and initial ABE assessment

## Documented formula

FEV₁/FVC \< 0.70 is a spirometric requirement, not a diagnosis on its own. GOLD 1: FEV₁ ≥ 80%; 2: ≥ 50%; 3: ≥ 30%; 4: \< 30%. GOLD 2026: group E if ≥ 1 moderate or severe exacerbation in the last year; otherwise B if mMRC ≥ 2 or CAT/CAAT ≥ 10, A in the remaining cases. If CAT/CAAT is not entered, mMRC is used.

## Limits and population

This edition classifies the initial assessment. It does not implement the follow-up algorithm or prescribe medicines. Borderline values and examination quality require clinical checking.

## References

- [GOLD · 2026 report v1.3](https://goldcopd.org/wp-content/uploads/2026/01/GOLD-REPORT-2026-v1.3-8Dec2025_WMV2.pdf)

- [Agustí A et al. Global Initiative for Chronic Obstructive Lung Disease 2023 Report: GOLD Executive Summary. Eur Respir J, 2023.](https://doi.org/10.1183/13993003.00239-2023)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026


Enter only the mMRC grade from 0 to 4 already determined in a separate assessment. This tool accepts a previously assessed grade and does not administer the mMRC questionnaire.
