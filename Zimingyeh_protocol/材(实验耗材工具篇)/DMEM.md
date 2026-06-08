# DMEM

DMEM（Dulbecco's Modified Eagle Medium，Dulbecco 改良 Eagle 培养基）是哺乳动物 [细胞培养](<../用(实验流程内容篇)/细胞培养.md>) 中最常见的 basal medium（基础培养基）之一，提供无机盐、氨基酸、维生素、葡萄糖和缓冲体系，但通常还需要加入 [FBS](FBS.md)、[L-谷氨酰胺](L-谷氨酰胺.md) 或其他补充剂才成为 complete medium（完全培养基）。

![基础细胞培养基组件参考图](../z_asset/材/基础细胞培养基组件/cell-culture-medium-components-reference.png)

图源：Image2 生成的基础细胞培养基组件示意图；DMEM 是基础营养框架，FBS、L-glutamine、NaHCO3/CO2 缓冲和 phenol red 共同决定完全培养基的可用状态。

## 核心定位

DMEM 的角色不是“万能培养液”，而是一个营养骨架。Thermo Fisher 的 Gibco DMEM 页面说明，DMEM 可支持多种哺乳动物细胞，包括原代成纤维细胞、神经元、胶质细胞、HUVEC，以及 HeLa、293、Cos-7、PC-12 等细胞系；该页面也说明 DMEM 相比原始 Eagle's Minimum Essential Medium 含有更高的氨基酸和维生素浓度，并有低糖、高糖、含或不含 sodium pyruvate（丙酮酸钠）等多种版本。参考：[Thermo Fisher Gibco DMEM](https://www.thermofisher.com/us/en/home/life-science/cell-culture/mammalian-cell-culture/cell-culture-media/dmem.html)。

## 常见版本

| 版本变量 | 英文 | 常见含义 | 选择逻辑 |
| --- | --- | --- | --- |
| 低糖 DMEM | Low glucose DMEM | 常见 1 g/L glucose | 更接近部分低糖培养需求 |
| 高糖 DMEM | High glucose DMEM | 常见 4.5 g/L glucose | HEK293、HeLa 等常见细胞常用 |
| 含丙酮酸钠 | With sodium pyruvate | 额外能量/代谢底物 | 某些细胞说明书指定 |
| 不含丙酮酸钠 | Without sodium pyruvate | 配方更简洁 | 便于自行控制代谢变量 |
| 含 L-glutamine | With L-glutamine | 已加入谷氨酰胺 | 方便，但稳定性受时间影响 |
| 含 GlutaMAX | With GlutaMAX | 稳定谷氨酰胺替代物 | 更适合减少氨积累和批间漂移 |
| 无酚红 | Phenol red-free | 不含 pH 指示染料 | 荧光、激素敏感或成像实验更常用 |

同样写着“DMEM”的瓶子可能差别很大。记录时必须写清 glucose、pyruvate、glutamine、phenol red、HEPES 和 sodium bicarbonate 情况。

## DMEM vs RPMI 1640/MEM/Ham F-12

| 培养基 | 常见用途 | 最需要注意的区别 |
| --- | --- | --- |
| DMEM | 贴壁细胞、肿瘤细胞系、HEK293/HeLa 等 | 糖浓度和补充剂版本很多 |
| [RPMI 1640](<RPMI 1640.md>) | 免疫细胞、淋巴细胞、悬浮细胞常见 | 不要把 DMEM 条件直接套给 RPMI 细胞 |
| [MEM](MEM.md) | 经典基础培养基，部分细胞系使用 | 营养复杂度通常低于 DMEM |
| [Ham F-12](<Ham F-12.md>) | 上皮、内皮、CHO、无血清/低血清体系常见 | 微量元素和复杂补充体系更突出 |

选择培养基优先看细胞来源说明书、ATCC/Gibco/ECACC 等细胞资料和本实验室验证记录，而不是只看“别人也这么养”。

## 现配完全培养基思路

常见起点：

```text
DMEM basal medium：500 mL
FBS：10% v/v
Penicillin-Streptomycin：1% v/v（可选）
L-glutamine：2 mM（若 DMEM 未含或需要补充）
```

这只是常见哺乳动物细胞系起点，不是所有细胞的标准配方。原代细胞、干细胞、免疫细胞、类器官或代谢实验应优先使用指定培养体系。

## 使用注意

- 从 4°C 取出的 DMEM 需要预温，但不要反复长时间 37°C 温浴整瓶培养基。
- 含碳酸氢盐的 DMEM 需要在合适 CO2 条件下达到 pH 平衡；离开 CO2 培养箱太久，颜色可能偏紫。
- 培养基变黄可能提示细胞过密、代谢酸化或污染；变紫可能提示 CO2 不足、瓶盖长期打开或碱化。
- 做荧光成像、流式、激素/雌激素敏感实验时，考虑使用无酚红版本。
- 做代谢相关实验时，不要无记录地更换高糖/低糖、丙酮酸钠或谷氨酰胺版本。

ATCC Animal Cell Culture Guide 也强调，培养基除营养外还维持 pH 和渗透压，CO2/碳酸氢盐、磷酸盐和 HEPES 是常见缓冲体系；phenol red 可用于颜色监测 pH。参考：[ATCC Animal Cell Culture Guide](https://www.atcc.org/resources/culture-guides/animal-cell-culture-guide)。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 同一细胞突然长得慢 | 换了 DMEM 版本、FBS 批号或谷氨酰胺状态变化 | 核对完整配方和批号 |
| 培养基很快变黄 | 细胞过密、污染、换液不足或 CO2/pH 失衡 | 显微镜检查，必要时做污染检测 |
| 培养基偏紫 | 暴露空气太久、CO2 不足、瓶盖未按要求使用 | 平衡培养基并检查培养箱 CO2 |
| 荧光背景高 | 酚红或血清背景干扰 | 使用无酚红/低荧光培养基 |
| 代谢实验结果不一致 | 糖浓度或丙酮酸钠版本不同 | 固定配方并记录版本 |

## 购买与记录建议

常见供应商包括 [Gibco](<../番外/试剂厂商/Gibco.md>)、[HyClone](<../番外/试剂厂商/HyClone.md>)、[Corning](<../番外/试剂厂商/Corning.md>)、[Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>)/[Merck](<../番外/试剂厂商/Merck.md>)。培养基不建议只记录“DMEM”，至少记录完整商品名、货号和关键添加/缺失项。

推荐记录模板（中文）：

```text
DMEM品牌：
货号：
批号：
高糖/低糖：
是否含L-glutamine：
是否含GlutaMAX：
是否含丙酮酸钠：
是否含酚红：
碳酸氢钠浓度/CO2条件：
FBS品牌/批号/比例：
抗生素/其他补充剂：
开封日期：
使用细胞：
异常现象：
```

Recommended record template (English):

```text
DMEM brand:
Catalog number:
Lot number:
High/low glucose:
Contains L-glutamine:
Contains GlutaMAX:
Contains sodium pyruvate:
Contains phenol red:
Sodium bicarbonate / CO2 condition:
FBS brand/lot/percentage:
Antibiotics/other supplements:
Open date:
Cell type:
Abnormal observation:
```

## 小结

DMEM 是细胞培养中最常用的基础培养基之一，但“DMEM”本身不是完整配方。真正影响细胞状态的是 DMEM 版本、血清、谷氨酰胺、缓冲体系、pH 指示剂、抗生素和细胞本身需求的组合。

## 参考来源

- [Thermo Fisher Gibco DMEM](https://www.thermofisher.com/us/en/home/life-science/cell-culture/mammalian-cell-culture/cell-culture-media/dmem.html)
- [ATCC Animal Cell Culture Guide](https://www.atcc.org/resources/culture-guides/animal-cell-culture-guide)
