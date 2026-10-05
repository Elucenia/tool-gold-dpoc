# Classificação GOLD 2026

ELUCENIA · Felipe Guedes. Local publication candidate prepared from the current per-tool source. No publication or deployment has been performed.

## Documentation in ten languages

- [Português (Brasil)](documentation/pt-BR.md) · [ELUCENIA](https://elucenia.org/pt-br/ferramentas/gold-dpoc)
- [English](documentation/en.md) · [ELUCENIA](https://elucenia.org/en/tools/gold-dpoc)
- [Español](documentation/es.md) · [ELUCENIA](https://elucenia.org/es/herramientas/gold-dpoc)
- [Français](documentation/fr.md) · [ELUCENIA](https://elucenia.org/fr/outils/gold-dpoc)
- [Deutsch](documentation/de.md) · [ELUCENIA](https://elucenia.org/de/werkzeuge/gold-dpoc)
- [Italiano](documentation/it.md) · [ELUCENIA](https://elucenia.org/it/strumenti/gold-dpoc)
- [العربية](documentation/ar.md) · [ELUCENIA](https://elucenia.org/ar/tools/gold-dpoc)
- [中文](documentation/zh.md) · [ELUCENIA](https://elucenia.org/zh/tools/gold-dpoc)
- [日本語](documentation/ja.md) · [ELUCENIA](https://elucenia.org/ja/tools/gold-dpoc)
- [हिन्दी](documentation/hi.md) · [ELUCENIA](https://elucenia.org/hi/tools/gold-dpoc)

The README introduction is in English; the linked usage, field, method, limits, source and review documentation is available in each listed language. Bibliographic titles and schema identifiers retain their source identity.

## Run locally

Serve this directory with a static HTTP server and open index.html. The Node entry is calculator.js. Run node test.cjs to replay all 7 existing synthetic reference cases against the packaged current method. Calculation uses a fixed per-tool local module graph; it needs no API key, remote calculation service, app tree or database.

## Edition and evidence

GOLD 2026 v1.3; classificação espirométrica e ABE inicial

examples.json contains current documented inputs/expected values. results.json records fresh source Node and packaged browser VM parity. evidence/http-reference-replay.json retains the corresponding completed HTTP replay against r5 build RYDdJbZxqrM8sgoyKEQc-. This is arithmetic and transport evidence; it is not full method/population, clinical or professional-language approval. The full independent bank is not included.

## License and attribution

Existing payload notices and protected attribution references remain preserved. METHOD-CODE-LICENSE.txt and METHOD-CODE-NOTICE.md, when present, preserve the current integration package notices verbatim. publication-provenance.json identifies their exact sources and any historical Apache/current MIT declaration difference. No new instrument, questionnaire, table, translation, publication, data or trademark rights are granted. The candidate requires source-specific rights and fresh remote/protected-file review before distribution.


## Previously assessed mMRC grade

This package accepts only a grade already assessed elsewhere, using numeric options 0, 1, 2, 3 and 4. It does not administer the mMRC questionnaire, reproduce its five descriptors or provide an official scale translation. The input key remains `mmrc`; the independent GOLD classification arithmetic is unchanged. See [the presentation binding](GOLD-PRIOR-GRADE-PRESENTATION.json).
