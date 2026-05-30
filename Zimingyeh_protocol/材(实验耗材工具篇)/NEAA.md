# NEAA

NEAA（Non-Essential Amino Acids，非必需氨基酸）是细胞培养中常见的 amino acid supplement（氨基酸补充剂），用于补充细胞可自行合成、但额外提供后可能改善生长和活率的一组氨基酸。

![基础培养基与补充剂参考图](../z_asset/材/基础培养基与补充剂/basal-media-supplements-reference.png)

图源：Image2 生成的基础培养基与补充剂参考图；NEAA 位于补充剂层，常和基础培养基、血清及 glutamine 来源共同构成优化完全培养基。

## 核心作用

Gibco MEM Non-Essential Amino Acids Solution 页面说明，该 100X 溶液用于补充细胞培养基，以增加 cell growth and viability（细胞生长和活率）；其包含标准 MEM 中存在的同一组 non-essential amino acids，浓度为 100X。参考：[Gibco MEM Non-Essential Amino Acids Solution](https://www.thermofisher.com/order/catalog/product/11140050)。

“非必需”不等于“没用”。它的意思是细胞原则上能合成这些氨基酸，但额外补充可以降低细胞合成负担，尤其在快速增殖、胚胎干细胞、iPSC、原代细胞或应激条件下可能有帮助。

## 常见成分

常见 100X MEM NEAA 溶液通常包含：

| 氨基酸 | 英文 | 常见理解 |
| --- | --- | --- |
| L-alanine | L-丙氨酸 | 氮/碳代谢相关 |
| L-asparagine | L-天冬酰胺 | 蛋白合成和氮代谢 |
| L-aspartic acid | L-天冬氨酸 | 氨基酸和核苷酸代谢 |
| L-glutamic acid | L-谷氨酸 | 氮代谢、谷氨酰胺相关 |
| Glycine | 甘氨酸 | 蛋白、核苷酸、谷胱甘肽相关 |
| L-proline | L-脯氨酸 | 胶原/细胞应激和增殖相关 |
| L-serine | L-丝氨酸 | 一碳代谢、脂质和核苷酸相关 |

具体成分和浓度以所用产品 formulation（配方表）为准。

## 什么时候需要补NEAA

| 场景 | 理由 |
| --- | --- |
| MEM 或其他较基础培养基 | 历史上常作为补充剂组合使用 |
| 胚胎干细胞/iPSC | 常见配方变量之一 |
| 原代细胞或敏感细胞 | 可能提高存活和恢复 |
| 细胞恢复慢或应激强 | 降低合成负担可能有帮助 |
| 代谢实验 | 需要明确是否加入，避免背景变量 |

## NEAA vs L-glutamine/GlutaMAX

| 项目 | NEAA | L-glutamine / GlutaMAX |
| --- | --- | --- |
| 成分 | 多种非必需氨基酸混合物 | 单一 glutamine 来源 |
| 主要作用 | 降低氨基酸合成负担，支持生长 | 支持氮代谢、核苷酸和能量相关代谢 |
| 是否可互相替代 | 不可以 | 不可以 |
| 记录重点 | 是否补加、浓度、产品配方 | glutamine 来源和稳定性 |

不要因为加了 NEAA 就不加 L-glutamine；也不要因为培养基含 L-glutamine 就默认不需要 NEAA。它们是不同层级的补充剂。

## 使用 protocol

### 补加到培养基

**怎么做**：常见 100X NEAA 溶液按 1:100 加入基础培养基，得到 1X 终浓度。

**为什么**：这是多数商业 NEAA 溶液的标准用法，便于和 MEM/DMEM/F12 等基础培养基组合。

**注意事项**：

- 查看基础培养基本身是否已含足量相关氨基酸。
- 做代谢实验时，NEAA 会改变氨基酸背景，必须作为变量记录。
- 不同品牌配方可能略有差异，严肃项目不要随意换品牌/货号。
- 按说明 2-8°C、避光保存。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 补加后细胞无明显变化 | 细胞本身不依赖额外 NEAA | 不要过度解释为失败 |
| 代谢组/氨基酸实验背景变化 | NEAA 改变培养基氨基酸组成 | 统一配方或设置对照 |
| 干细胞状态漂移 | NEAA、glutamine、血清/替代物等变量变动 | 固定完整培养基配方 |
| 记录不可复现 | 只写“加 supplement” | 写清 NEAA 品牌、货号、浓度 |

## 购买与记录建议

常见供应商包括 [Gibco](<../番外/试剂厂商/Gibco.md>)、[Sigma](<../番外/试剂厂商/Sigma.md>)/[Merck](<../番外/试剂厂商/Merck.md>)、[HyClone](<../番外/试剂厂商/HyClone.md>)。选择无菌、细胞培养级 100X 溶液即可；关键是不要把 NEAA 和 “amino acid supplement” 泛称混在一起。

推荐记录模板（中文）：

```text
NEAA品牌：
货号：
批号：
储液浓度：
终浓度：
基础培养基：
是否同时加入L-glutamine/GlutaMAX：
FBS或无血清补充剂：
使用细胞：
开封日期：
异常现象：
```

Recommended record template (English):

```text
NEAA brand:
Catalog number:
Lot number:
Stock concentration:
Final concentration:
Basal medium:
L-glutamine/GlutaMAX also added:
FBS or serum-free supplements:
Cell type:
Open date:
Abnormal observation:
```

## 小结

NEAA 是“降低细胞自建成本”的培养基补充剂。它不是必加，也不能替代 glutamine，但在敏感细胞、干细胞、原代细胞或需要优化恢复状态的体系中，经常值得作为明确变量记录和测试。

## 参考来源

- [Gibco MEM Non-Essential Amino Acids Solution](https://www.thermofisher.com/order/catalog/product/11140050)
- [ATCC Animal Cell Culture Guide](https://www.atcc.org/resources/culture-guides/animal-cell-culture-guide)

