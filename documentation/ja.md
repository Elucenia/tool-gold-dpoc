<!-- ELUCENIA technical documentation · gold-dpoc · ja · no clinical/professional/rights approval -->

# GOLD 2026 分類

[条件・出典・許諾](https://elucenia.org/ja/tools/gold-dpoc)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 気管支拡張薬後のFEV₁/FVC比

`rel`

範囲: 0.2–1.2

### 気管支拡張薬後のFEV₁

`vef1`

%予測値 · 範囲: 5–150

### 事前に評価済みの mMRC グレード

`mmrc`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### 過去1年の中等度増悪（ステロイドおよび／または抗菌薬）

`exac`

範囲: 0–20

### 過去1年の重度増悪（救急受診または入院）

`intern`

範囲: 0–10

### CAT/CAATスコア（利用可能な場合）

`caat`

点 · 任意 · 範囲: 0–40

### COPDの臨床確認、有効な気管支拡張薬後スパイロメトリー、維持治療前の初期評価ですか？

`contexto`

- `0` — いいえ
- `1` — はい

## 方法の版

GOLD 2026 v1.3；スパイロメトリー分類と初期ABE評価

## 記載された計算式

FEV₁/FVC \< 0.70はスパイロメトリーの条件であり、単独の診断ではありません。GOLD 1：FEV₁ ≥ 80%；2：≥ 50%；3：≥ 30%；4：\< 30%。GOLD 2026：過去1年の中等度または重度増悪が≥1回ならE群、それ以外でmMRC ≥ 2またはCAT/CAAT ≥ 10ならB群、残りはA群。CAT/CAAT未入力時はmMRCを使用します。

## 限界・対象集団

この版は初回評価を分類します。経過観察のアルゴリズムを示したり薬剤を処方したりしません。境界値と検査の質は臨床的に確認する必要があります。

## 参考文献

- [GOLD · 2026年報告書 v1.3](https://goldcopd.org/wp-content/uploads/2026/01/GOLD-REPORT-2026-v1.3-8Dec2025_WMV2.pdf)

- [Agustí A et al. Global Initiative for Chronic Obstructive Lung Disease 2023 Report: GOLD Executive Summary. Eur Respir J, 2023.](https://doi.org/10.1183/13993003.00239-2023)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026


別の評価で事前に判定された 0～4 の mMRC グレードのみを入力してください。このツールは評価済みのグレードを受け取り、mMRC 質問票を実施しません。
