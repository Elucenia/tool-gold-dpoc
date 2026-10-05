<!-- ELUCENIA technical documentation · gold-dpoc · es · no clinical/professional/rights approval -->

# Clasificación GOLD 2026

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/gold-dpoc)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Relación VEF₁/CVF posbroncodilatador

`rel`

intervalo: 0,2–1,2

### VEF₁ posbroncodilatador

`vef1`

% del valor previsto · intervalo: 5–150

### Grado mMRC evaluado previamente

`mmrc`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Exacerbaciones moderadas en el último año (corticoide y/o antibiótico)

`exac`

intervalo: 0–20

### Exacerbaciones graves en el último año (atención de urgencias u hospitalización)

`intern`

intervalo: 0–10

### Puntuación CAT/CAAT (si está disponible)

`caat`

puntos · opcional · intervalo: 0–40

### ¿EPOC confirmada clínicamente, espirometría posbroncodilatador válida y evaluación inicial antes del tratamiento de mantenimiento?

`contexto`

- `0` — No
- `1` — Sí

## Edición del método

GOLD 2026 v1.3; clasificación espirométrica y evaluación ABE inicial

## Fórmula documentada

VEF₁/CVF \< 0,70 es un requisito espirométrico, no un diagnóstico aislado. GOLD 1: VEF₁ ≥ 80%; 2: ≥ 50%; 3: ≥ 30%; 4: \< 30%. GOLD 2026: grupo E si ≥ 1 exacerbación moderada o grave en el último año; sin ello, B si mMRC ≥ 2 o CAT/CAAT ≥ 10, A en los demás. Si no se introduce CAT/CAAT, se usa mMRC.

## Límites y población

Esta edición clasifica la evaluación inicial. No representa el algoritmo de seguimiento ni prescribe medicamentos. Los valores limítrofes y la calidad del examen requieren comprobación clínica.

## Referencias

- [GOLD · informe 2026 v1.3](https://goldcopd.org/wp-content/uploads/2026/01/GOLD-REPORT-2026-v1.3-8Dec2025_WMV2.pdf)

- [Agustí A et al. Global Initiative for Chronic Obstructive Lung Disease 2023 Report: GOLD Executive Summary. Eur Respir J, 2023.](https://doi.org/10.1183/13993003.00239-2023)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026


Introduzca únicamente el grado mMRC de 0 a 4 determinado en una evaluación separada. Esta herramienta recibe un grado ya evaluado y no administra el cuestionario mMRC.
