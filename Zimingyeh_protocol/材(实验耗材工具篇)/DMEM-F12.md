# DMEM-F12

DMEM-F12（DMEM/F-12，Dulbecco's Modified Eagle Medium/Nutrient Mixture F-12，Dulbecco 改良 Eagle 培养基/Ham F-12 营养混合培养基）是把 [DMEM](DMEM.md) 与 [Ham F-12](<Ham F-12.md>) 组合起来的基础培养基体系，常用于神经、上皮、干细胞、类器官、低血清和 [无血清培养基](无血清培养基.md) 相关配方。

![专用细胞培养基参考图](../z_asset/材/专用细胞培养基/specialized-cell-culture-media-reference.png)

图源：Image2 生成的专用细胞培养基参考图；DMEM/F-12 位于专用基础培养基选择层，常和定义补充剂、生长因子、血清替代物共同使用。

## 核心定位

DMEM/F-12 的价值在于把 DMEM 的高营养基础和 F-12 的复杂微量成分结合起来。Gibco DMEM/F-12 产品页面说明，DMEM/F-12 可用于多种哺乳动物细胞，包括 MDCK、glial cells、fibroblasts、human endothelial cells 和 rat fibroblasts，并可作为无血清配方的基础培养基。参考：[Gibco DMEM/F-12](https://www.thermofisher.com/order/catalog/product/11330032)。

在实际培养中，DMEM/F-12 很少只是“一个瓶子直接用”。它常作为 base medium（基础培养基），再加入 [FBS](FBS.md)、[GlutaMAX](GlutaMAX.md)、[ITS补充剂](ITS补充剂.md)、[B27补充剂](B27补充剂.md)、[N2补充剂](N2补充剂.md)、[生长因子](生长因子.md) 或其他专用 supplement。

## 为什么不是简单DMEM加F-12

虽然名字像 1:1 混合，但实验记录中不能只写“DMEM + F12”。商业 DMEM/F-12 的具体 formulation（配方版本）会定义 glucose、HEPES、L-glutamine、phenol red、sodium pyruvate、buffer 和盐体系。不同货号可能差异很大。

| 记录项 | 为什么重要 |
| --- | --- |
| 是否含 HEPES | 影响开放操作和 pH 稳定性 |
| 是否含 L-glutamine/GlutaMAX | 影响谷氨酰胺来源和氨积累 |
| 是否含 phenol red | 影响 pH 指示、荧光和激素敏感实验 |
| 是否含 sodium pyruvate | 影响代谢背景 |
| 是否含 protein/growth factors | 多数基础 DMEM/F-12 不含，需要额外补充 |

## 常见用途

| 场景 | 为什么常见 |
| --- | --- |
| Neural culture（神经细胞培养） | 常与 N2/B27、生长因子组合 |
| Epithelial culture（上皮细胞培养） | F-12 微量成分对某些上皮体系有用 |
| Organoid culture（类器官培养） | 常作为复杂 cocktail 的基础液之一 |
| Serum-free culture（无血清培养） | 适合承载定义补充剂 |
| Stem cell related systems（干细胞相关体系） | 配方可调空间大 |

## DMEM-F12 vs DMEM/Ham F-12

| 项目 | DMEM | Ham F-12 | DMEM-F12 |
| --- | --- | --- | --- |
| 定位 | 高营养通用基础培养基 | 复杂微量组分、低血清历史 | 两者结合的专用基础体系 |
| 常见细胞 | 贴壁细胞、HEK293、HeLa | CHO、上皮、低血清体系 | 神经、上皮、干细胞、类器官 |
| 是否适合无血清 | 可作为基础，但常需优化 | 历史上与无血清相关 | 更常被用作无血清/定义体系底座 |
| 记录重点 | 糖、pyruvate、glutamine | F-12/F-12K/补充剂 | HEPES、glutamine、phenol red、supplement cocktail |

## 使用 protocol

### 配制DMEM/F12完全培养基

常规含血清起点：

```text
DMEM/F-12：500 mL
FBS：5%-10% v/v，按细胞需要
GlutaMAX或L-glutamine：按基础培养基版本决定
Penicillin-Streptomycin：1% v/v（可选）
```

无血清或专用体系起点：

```text
DMEM/F-12：基础液
ITS、N2、B27或其他定义补充剂：按protocol
Growth factors：按细胞/类器官体系
Matrix/coating：按细胞贴壁或三维培养需求
```

### 关键注意事项

- 先看细胞 datasheet（说明书）或 protocol，不要用常规 DMEM + 10% FBS 逻辑套用。
- 从含血清切换到无血清 DMEM/F-12 体系时，通常需要 gradual adaptation（逐步适应）。
- 类器官、原代和干细胞体系中，DMEM/F-12 只是底座，真正决定表型的是补充剂、基质和传代方式。
- 做荧光或激素敏感实验时，考虑 phenol red-free DMEM/F-12。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 细胞换到DMEM/F12后死亡 | 缺少原体系中的血清/生长因子/基质 | 核对完整 cocktail |
| 无血清培养失败 | 只换基础液，没有补定义因子 | 加入 ITS、B27/N2 或细胞特异补充剂 |
| 结果批间差异大 | 生长因子、基质胶或补充剂批号变化 | 记录并固定关键批号 |
| pH 颜色异常 | HEPES/碳酸氢盐/CO2 条件不匹配 | 检查版本和培养箱 |

## 购买与记录建议

常见供应商包括 [Gibco](<../番外/试剂厂商/Gibco.md>)、[HyClone](<../番外/试剂厂商/HyClone.md>)、[Corning](<../番外/试剂厂商/Corning.md>)、[Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>)/[Merck](<../番外/试剂厂商/Merck.md>)。购买时优先按细胞 protocol 的货号或等效配方选择，不要只凭“DMEM/F12”四个字替换。

推荐记录模板（中文）：

```text
DMEM/F-12品牌：
货号：
批号：
是否含HEPES：
是否含L-glutamine或GlutaMAX：
是否含酚红：
是否含丙酮酸钠：
血清/无血清体系：
补充剂清单及批号：
生长因子清单及批号：
基质/包被条件：
使用细胞：
异常现象：
```

Recommended record template (English):

```text
DMEM/F-12 brand:
Catalog number:
Lot number:
Contains HEPES:
Contains L-glutamine or GlutaMAX:
Contains phenol red:
Contains sodium pyruvate:
Serum or serum-free system:
Supplement list and lots:
Growth factor list and lots:
Matrix/coating condition:
Cell type:
Abnormal observation:
```

## 小结

DMEM/F-12 是很多专用培养体系的“底座”。它比普通 DMEM 更常用于低血清、无血清、神经、上皮、干细胞和类器官相关配方，但真正决定细胞状态的是完整补充剂、基质和操作体系。

## 参考来源

- [Gibco DMEM/F-12](https://www.thermofisher.com/order/catalog/product/11330032)
- [ATCC Animal Cell Culture Guide](https://www.atcc.org/resources/culture-guides/animal-cell-culture-guide)

