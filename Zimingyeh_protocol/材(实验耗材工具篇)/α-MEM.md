# α-MEM

α-MEM（Minimum Essential Medium Eagle Alpha Modification，Eagle 最低必需培养基 α 改良型；也写作 alpha-MEM 或 MEM Alpha）是 [MEM](MEM.md) 的改良版本，常用于原代细胞、干细胞、骨/软骨相关细胞、杂交瘤和某些要求更高的哺乳动物细胞培养。

![专用细胞培养基参考图](../z_asset/材/专用细胞培养基/specialized-cell-culture-media-reference.png)

图源：Image2 生成的专用细胞培养基参考图；alpha-MEM 位于专用基础培养基选择层，常和血清、核苷、抗坏血酸或其他细胞特异补充剂共同使用。

## 核心定位

α-MEM 不是简单把 MEM 换个名字，而是对 MEM 的营养和组分做了扩展。Gibco MEM α 页面说明，MEM α 是 MEM 的改良形式，可用于多种哺乳动物细胞，包括 CHO、BHK-21、HEK293、HeLa、MRC-5、primary rat astrocytes 和 human keratinocytes；不同产品版本可含或不含 nucleosides（核苷）。参考：[Gibco MEM α](https://www.thermofisher.com/order/catalog/product/12571063)。

α-MEM 常出现在对营养和生长环境更敏感的细胞体系里，例如 MSC（mesenchymal stromal/stem cells，间充质基质/干细胞）、osteoblast（成骨细胞）、osteoclast（破骨细胞）、hematopoietic 或 hybridoma（杂交瘤）相关培养。

## 常见版本变量

| 变量 | 为什么重要 |
| --- | --- |
| With nucleosides | 核苷可支持核酸合成相关需求 |
| Without nucleosides | 适合需要自行控制核苷背景的体系 |
| With L-glutamine | 方便，但稳定性受时间影响 |
| Without L-glutamine | 便于自行加入 [GlutaMAX](GlutaMAX.md) 或新鲜 L-glutamine |
| With ribonucleosides/deoxyribonucleosides | 与细胞增殖和代谢背景相关 |
| Phenol red-free | 适合成像或激素敏感实验 |

记录时不要只写“α-MEM”，必须写清是否含 nucleosides、glutamine、phenol red 和其他补充剂。

## α-MEM vs MEM/DMEM

| 项目 | MEM | α-MEM | DMEM |
| --- | --- | --- | --- |
| 基本定位 | 经典基础培养基 | MEM 的营养扩展版本 | 更高营养通用培养基 |
| 常见用途 | 历史 SOP、部分常规细胞 | 原代、干细胞、骨相关、杂交瘤 | 常规贴壁细胞、HEK293/HeLa 等 |
| 关键变量 | 盐体系、NEAA、glutamine | nucleosides、glutamine、血清/补充剂 | glucose、pyruvate、glutamine |
| 是否可互换 | 不建议 | 不建议 | 不建议 |

## 使用场景

| 场景 | α-MEM的价值 |
| --- | --- |
| MSC 培养 | 很多历史 protocol 使用 α-MEM + FBS |
| 骨/软骨相关细胞 | 细胞外基质和分化体系常与 α-MEM 搭配 |
| 杂交瘤培养 | 传统杂交瘤体系中常见 |
| 原代细胞扩增 | 营养更丰富，可能更有利于恢复 |
| 分化诱导 | 作为基础培养基承载诱导补充剂 |

## 使用 protocol

### 配制α-MEM完全培养基

常见起点：

```text
α-MEM：500 mL
FBS：10%-20% v/v，按细胞类型
L-glutamine或GlutaMAX：按培养基版本决定
Penicillin-Streptomycin：1% v/v（可选）
细胞特异补充剂：按protocol
```

**注意事项**：

- MSC、原代和骨相关细胞对 FBS 批号、接种密度和包被条件可能很敏感。
- 分化实验中，α-MEM 版本改变可能影响诱导效率和 marker 表达。
- 如果 protocol 指定 “α-MEM with nucleosides”，不要用 no nucleosides 版本替代，除非重新验证。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 细胞扩增慢 | FBS 批号、nucleoside 版本或 glutamine 来源不同 | 核对完整配方 |
| 分化结果不稳定 | α-MEM 版本或诱导补充剂批号改变 | 固定货号并记录 |
| 与 MEM 混用 | 把 α-MEM 当作普通 MEM | 查看货号和 formulation |
| 原代细胞死亡 | 接种密度、包被、血清或生长因子不匹配 | 按细胞说明书优化 |

## 购买与记录建议

常见供应商包括 [Gibco](<../番外/试剂厂商/Gibco.md>)、[HyClone](<../番外/试剂厂商/HyClone.md>)、[Corning](<../番外/试剂厂商/Corning.md>)、[Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>)/[Merck](<../番外/试剂厂商/Merck.md>)。优先按细胞/分化 protocol 的指定版本购买，尤其注意 with/without nucleosides。

推荐记录模板（中文）：

```text
α-MEM品牌：
货号：
批号：
是否含nucleosides：
是否含L-glutamine：
是否含酚红：
FBS品牌/批号/比例：
是否加入GlutaMAX或其他补充剂：
使用细胞：
分化/诱导条件：
包被条件：
异常现象：
```

Recommended record template (English):

```text
alpha-MEM brand:
Catalog number:
Lot number:
Contains nucleosides:
Contains L-glutamine:
Contains phenol red:
FBS brand/lot/percentage:
GlutaMAX or other supplements added:
Cell type:
Differentiation/induction condition:
Coating condition:
Abnormal observation:
```

## 小结

α-MEM 是比 MEM 更“营养扩展”的基础培养基，在原代、MSC、骨相关和分化体系中很常见。它最容易被误用的地方，是忽略 nucleosides、glutamine、血清批号和诱导补充剂这些版本变量。

## 参考来源

- [Gibco MEM α](https://www.thermofisher.com/order/catalog/product/12571063)
- [ATCC Animal Cell Culture Guide](https://www.atcc.org/resources/culture-guides/animal-cell-culture-guide)

