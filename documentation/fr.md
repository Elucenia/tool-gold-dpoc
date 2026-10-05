<!-- ELUCENIA technical documentation · gold-dpoc · fr · no clinical/professional/rights approval -->

# Classification GOLD 2026

[conditions, sources et autorisations](https://elucenia.org/fr/outils/gold-dpoc)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Rapport VEMS/CVF après bronchodilatateur

`rel`

intervalle: 0,2–1,2

### VEMS après bronchodilatateur

`vef1`

% de la valeur théorique · intervalle: 5–150

### Grade mMRC évalué au préalable

`mmrc`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### Exacerbations modérées dans la dernière année (corticoïde et/ou antibiotique)

`exac`

intervalle: 0–20

### Exacerbations sévères dans la dernière année (urgences ou hospitalisation)

`intern`

intervalle: 0–10

### Score CAT/CAAT (si disponible)

`caat`

points · facultatif · intervalle: 0–40

### BPCO confirmée cliniquement, spirométrie après bronchodilatateur valide et évaluation initiale avant traitement d’entretien ?

`contexto`

- `0` — Non
- `1` — Oui

## Édition de la méthode

GOLD 2026 v1.3 ; classification spirométrique et évaluation ABE initiale

## Formule documentée

VEMS/CVF \< 0,70 est une condition spirométrique, pas un diagnostic isolé. GOLD 1 : VEMS ≥ 80 % ; 2 : ≥ 50 % ; 3 : ≥ 30 % ; 4 : \< 30 %. GOLD 2026 : groupe E si ≥ 1 exacerbation modérée ou sévère dans la dernière année ; sinon B si mMRC ≥ 2 ou CAT/CAAT ≥ 10, A dans les autres cas. Sans CAT/CAAT renseigné, le mMRC est utilisé.

## Limites et population

Cette édition classe l’évaluation initiale. Elle ne représente pas l’algorithme de suivi et ne prescrit aucun médicament. Les valeurs limites et la qualité de l’examen nécessitent une vérification clinique.

## Références

- [GOLD · rapport 2026 v1.3](https://goldcopd.org/wp-content/uploads/2026/01/GOLD-REPORT-2026-v1.3-8Dec2025_WMV2.pdf)

- [Agustí A et al. Global Initiative for Chronic Obstructive Lung Disease 2023 Report: GOLD Executive Summary. Eur Respir J, 2023.](https://doi.org/10.1183/13993003.00239-2023)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026


Saisissez uniquement le grade mMRC de 0 à 4 déterminé lors d’une évaluation distincte. Cet outil reçoit un grade déjà évalué et n’administre pas le questionnaire mMRC.
