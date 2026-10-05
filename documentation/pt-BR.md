<!-- ELUCENIA technical documentation · gold-dpoc · pt-BR · no clinical/professional/rights approval -->

# Classificação GOLD 2026

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/gold-dpoc)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Relação VEF₁/CVF pós-broncodilatador

`rel`

intervalo: 0,2–1,2

### VEF₁ pós-broncodilatador

`vef1`

% do previsto · intervalo: 5–150

### Grau mMRC previamente avaliado

`mmrc`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Exacerbações moderadas no último ano (corticoide e/ou antibiótico)

`exac`

intervalo: 0–20

### Exacerbações graves no último ano (atendimento de emergência ou internação)

`intern`

intervalo: 0–10

### Pontuação CAT/CAAT (se disponível)

`caat`

pontos · opcional · intervalo: 0–40

### DPOC confirmada clinicamente, espirometria pós-broncodilatador válida e avaliação inicial antes de terapia de manutenção?

`contexto`

- `0` — Não
- `1` — Sim

## Edição do método

GOLD 2026 v1.3; classificação espirométrica e ABE inicial

## Fórmula documentada

VEF₁/CVF \< 0,70 é requisito espirométrico, não diagnóstico isolado. GOLD 1: VEF₁ ≥ 80%; 2: ≥ 50%; 3: ≥ 30%; 4: \< 30%. GOLD 2026: grupo E se ≥ 1 exacerbação moderada ou grave no último ano; sem isso, B se mMRC ≥ 2 ou CAT/CAAT ≥ 10, A nos demais. Se CAT/CAAT não for informado, usa-se mMRC.

## Limites e população

Esta edição classifica avaliação inicial. Não representa o algoritmo de seguimento nem prescreve medicamentos. Valores limítrofes e qualidade do exame exigem conferência clínica.

## Referências

- [GOLD · relatório 2026 v1.3](https://goldcopd.org/wp-content/uploads/2026/01/GOLD-REPORT-2026-v1.3-8Dec2025_WMV2.pdf)

- [Agustí A et al. Global Initiative for Chronic Obstructive Lung Disease 2023 Report: GOLD Executive Summary. Eur Respir J, 2023.](https://doi.org/10.1183/13993003.00239-2023)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026


Informe somente o grau mMRC de 0 a 4 previamente aferido em avaliação separada. Esta ferramenta recebe o grau já avaliado e não administra o questionário mMRC.
