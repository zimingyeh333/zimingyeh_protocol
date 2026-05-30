# L-谷氨酰胺

L-谷氨酰胺（L-glutamine，L-谷氨酰胺）是细胞培养中最常见的 amino acid supplement（氨基酸补充剂）之一，常作为 [DMEM](DMEM.md)、[RPMI 1640](<RPMI 1640.md>) 等培养基的额外氮源、能量相关底物和生物合成原料。

![基础细胞培养基组件参考图](../z_asset/材/基础细胞培养基组件/cell-culture-medium-components-reference.png)

图源：Image2 生成的基础细胞培养基组件示意图；L-glutamine 是快速增殖细胞常需要关注的补充成分。

## 核心作用

L-glutamine 参与多种细胞代谢过程，包括核苷酸、氨基糖、谷胱甘肽、谷氨酸和其他氨基酸的形成，也参与蛋白合成和葡萄糖相关代谢。Gibco L-Glutamine 200 mM 产品页面说明，L-glutamine 是细胞培养所需氨基酸，常见工作浓度依细胞和培养基而定，一般约 2-6 mM；该页面也提醒 L-glutamine 在溶液中不稳定，降解速度与时间、温度和 pH 有关。参考：[Gibco L-Glutamine 200 mM](https://www.thermofisher.com/order/catalog/product/25030081)。

## 为什么要单独关注

很多培养基已经含 L-glutamine，但它不是“放进去就永远稳定”。如果培养基储存时间长、反复温浴或开封时间久，L-glutamine 可能下降，并伴随 ammonia（氨）积累，影响细胞状态。

| 变量 | 影响 |
| --- | --- |
| 是否已含 L-glutamine | 决定是否需要额外补加 |
| 开封和保存时间 | 影响有效浓度和降解产物 |
| 37°C 暴露时间 | 加速降解 |
| 细胞增殖速度 | 快速增殖细胞消耗更高 |
| 替代物选择 | 影响长期培养稳定性 |

## L-glutamine vs GlutaMAX

| 项目 | L-glutamine | [GlutaMAX](GlutaMAX.md) |
| --- | --- | --- |
| 本质 | 游离 L-谷氨酰胺 | 稳定二肽形式的谷氨酰胺来源 |
| 优点 | 经典、便宜、兼容性广 | 更稳定，氨积累更少 |
| 局限 | 溶液中不稳定 | 成本较高，仍需确认细胞适配 |
| 适合 | 常规短周期培养 | 长周期、敏感细胞或希望降低批间漂移 |

Thermo Fisher 的 DMEM 页面提到，含 GlutaMAX 的 DMEM 可提供稳定的 L-glutamine 来源，并减少有毒 ammonia 的积累。参考：[Thermo Fisher Gibco DMEM](https://www.thermofisher.com/us/en/home/life-science/cell-culture/mammalian-cell-culture/cell-culture-media/dmem.html)。

## 使用 protocol

### 判断是否需要补加

**怎么做**：先查看培养基标签和说明书，确认是否已经含 L-glutamine 或 GlutaMAX。若已含，一般不要无记录重复补加。

**为什么**：重复补加会改变代谢环境，可能增加氨积累或影响实验。

### 配制完全培养基

**怎么做**：如果基础培养基不含 L-glutamine，常用 200 mM 储液按 1:100 加入，使终浓度约 2 mM。具体浓度以细胞说明书为准。

**为什么**：2 mM 是很多常规细胞系起点，但部分细胞需要更高或更低。

**注意事项**：

- 200 mM 储液低温时可能析出，Gibco FAQ 建议温和 37°C 加热并轻轻混匀，完全溶解后再使用。
- 不要反复长时间温浴。
- 小分装保存，减少冻融和污染。
- 更换 L-glutamine/GlutaMAX 体系时，先做小规模适应和对照。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 细胞增殖变慢 | L-glutamine 降解或未补加 | 核对培养基版本和补加记录 |
| 细胞状态逐渐变差 | 培养基反复温浴，氨积累 | 使用新鲜培养基或 GlutaMAX |
| 储液有沉淀 | 冷却导致浓缩 L-glutamine 析出 | 温和加热至完全溶解 |
| 不同批实验差异大 | 谷氨酰胺版本不同 | 固定配方并记录 |

## 购买与记录建议

常见供应商包括 [Gibco](<../番外/试剂厂商/Gibco.md>)、[Sigma](<../番外/试剂厂商/Sigma.md>)/[Merck](<../番外/试剂厂商/Merck.md>)、[HyClone](<../番外/试剂厂商/HyClone.md>)。优先选择无菌、细胞培养级 200 mM 储液或已经验证的稳定替代物。

推荐记录模板（中文）：

```text
L-glutamine品牌：
货号：
批号：
储液浓度：
终浓度：
是否使用GlutaMAX：
培养基是否已含谷氨酰胺：
开封日期：
分装/冻融次数：
使用细胞：
异常现象：
```

Recommended record template (English):

```text
L-glutamine brand:
Catalog number:
Lot number:
Stock concentration:
Final concentration:
GlutaMAX used: yes/no
Base medium already contains glutamine: yes/no
Open date:
Aliquot/freeze-thaw history:
Cell type:
Abnormal observation:
```

## 小结

L-谷氨酰胺是细胞培养的关键营养变量。它常被培养基标签一笔带过，但稳定性、补加浓度和替代物选择都会影响细胞状态。

## 参考来源

- [Gibco L-Glutamine 200 mM](https://www.thermofisher.com/order/catalog/product/25030081)
- [Thermo Fisher Gibco DMEM](https://www.thermofisher.com/us/en/home/life-science/cell-culture/mammalian-cell-culture/cell-culture-media/dmem.html)
- [ATCC Animal Cell Culture Guide](https://www.atcc.org/resources/culture-guides/animal-cell-culture-guide)
