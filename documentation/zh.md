<!-- ELUCENIA technical documentation · gold-dpoc · zh · no clinical/professional/rights approval -->

# GOLD 2026 分级

[条件、来源与许可](https://elucenia.org/zh/tools/gold-dpoc)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 支气管舒张后 FEV₁/FVC 比值

`rel`

范围: 0.2–1.2

### 支气管舒张后 FEV₁

`vef1`

%预计值 · 范围: 5–150

### 此前已评估的 mMRC 等级

`mmrc`

- `0` — 0
- `1` — 1
- `2` — 2
- `3` — 3
- `4` — 4

### 过去一年中度急性加重（使用皮质激素和/或抗生素）

`exac`

范围: 0–20

### 过去一年重度急性加重（急诊或住院）

`intern`

范围: 0–10

### CAT/CAAT 评分（如有）

`caat`

分 · 选填 · 范围: 0–40

### COPD 临床确诊、支气管舒张后肺量计检查有效，且为维持治疗前初评？

`contexto`

- `0` — 否
- `1` — 是

## 方法版本

GOLD 2026 v1.3；肺功能分级及初始ABE评估

## 已记录的公式

FEV₁/FVC \< 0.70为肺功能条件，不是独立诊断。GOLD 1：FEV₁ ≥ 80%；2：≥ 50%；3：≥ 30%；4：\< 30%。GOLD 2026：最近一年≥1次中度或重度急性加重为E组；否则，mMRC ≥ 2或CAT/CAAT ≥ 10为B组，其余为A组。未输入CAT/CAAT时使用mMRC。

## 限制与适用人群

此版本用于初始评估分类，不代表随访算法，也不开具药物。临界值和检查质量需要临床核对。

## 参考文献

- [GOLD · 2026年报告 v1.3](https://goldcopd.org/wp-content/uploads/2026/01/GOLD-REPORT-2026-v1.3-8Dec2025_WMV2.pdf)

- [Agustí A et al. Global Initiative for Chronic Obstructive Lung Disease 2023 Report: GOLD Executive Summary. Eur Respir J, 2023.](https://doi.org/10.1183/13993003.00239-2023)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026


仅输入已在单独评估中确定的 mMRC 等级，取值为 0 至 4。本工具接收此前已评估的等级，不实施 mMRC 问卷。
