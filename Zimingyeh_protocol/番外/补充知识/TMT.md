# TMT

TMT（tandem mass tag，串联质量标签）是一类用于定量蛋白质组学的 isobaric labeling（[同重异位标签](同重异位标签.md)）试剂。它把不同样本的肽段分别用不同通道标签标记，再混合上机；这些标记肽段在 MS1 中质量相同，但在 MS/MS 或 MS3 中释放不同 m/z 的 [报告离子](报告离子.md)，用于计算样本间相对丰度。

![MS/MS 碎裂原理与方法概览](../../z_asset/番外/补充知识/质谱碎裂方式/msms-fragmentation-concepts-zh.png)

图源：Image2 生成的 MS/MS 碎裂方式示意图。HCD 模块中 reporter ion 代表 TMT/iTRAQ 等同重异位标签定量的核心读数。

## TMT 的基本逻辑

```text
样本 A/B/C...
-> 蛋白提取和酶切
-> 每个样本用不同 TMT 通道标记
-> 混合所有样本
-> LC-MS/MS 或 SPS-MS3
-> 读取 reporter ions
-> 计算样本间相对丰度
```

Thompson 等在 2003 年提出 tandem mass tags，用于通过 MS/MS 对复杂蛋白混合物进行比较定量。参考：[Thompson et al., Analytical Chemistry, 2003](https://doi.org/10.1021/ac0262560)

## TMT 标签由什么组成

| 部分 | 作用 |
| --- | --- |
| Reporter group（报告基团） | MS/MS 中释放不同 m/z 的报告离子 |
| Balance group（平衡基团） | 调整总质量，使不同通道在 MS1 中等质量 |
| Reactive group（反应基团） | 与肽段 N 端和 Lys 等胺基反应 |

所以 TMT 的巧妙之处是：MS1 中“看起来一样”，MS2/MS3 中“拆开后能区分样本来源”。

## 适合什么实验

| 场景 | TMT 的优势 |
| --- | --- |
| 多样本相对定量 | 多个样本混合后一起上机，减少批间差异 |
| 大队列分批桥接 | 可加入 pooled reference channel（混合参考通道） |
| 低样本量项目 | 混合后提高整体肽段复杂度和上机效率 |
| 磷酸化/泛素化等富集项目 | 多样本富集后统一分析 |
| 时间序列或处理组比较 | 多通道设计适合复杂实验设计 |

Thermo Fisher 的 TMTpro 产品页面展示了 TMTpro 16plex 等多重标签产品，说明 TMT 已发展为高通道数的多重相对定量体系。参考：[Thermo Fisher TMTpro 16plex Label Reagent Set](https://www.thermofisher.com/order/catalog/product/A44520)

## TMT vs label-free vs SILAC

| 方法 | 核心逻辑 | 优势 | 限制 |
| --- | --- | --- | --- |
| TMT | 同重异位标签，报告离子定量 | 多样本混合，通量高 | 成本高，易受比例压缩影响 |
| [label-free定量](label-free定量.md) | 不标记，比较峰面积或谱图计数 | 成本低，流程简单 | 批间效应和缺失值更多 |
| [SILAC](SILAC.md) | 代谢掺入稳定同位素 | 细胞模型定量准确 | 不适合多数组织/临床样本 |
| [iTRAQ](iTRAQ.md) | 另一类同重异位标签 | 类似 TMT | 试剂和通道体系不同 |

## 关键风险

| 风险 | 原因 | 结果 |
| --- | --- | --- |
| Ratio compression（比例压缩） | 共隔离肽段一起碎裂 | 差异被低估 |
| 标记不完全 | 反应条件、pH、样本杂质问题 | 未标记肽段影响定量 |
| 通道上样量不一致 | 混样前肽段定量不准 | 通道整体偏高或偏低 |
| 批次桥接差 | 不同 TMT plex 缺乏共同参考 | 大队列难比较 |
| 缺失值和低信号 | 样本量低或 reporter ion 弱 | 定量不稳定 |

## 使用要点

- 标记前需要尽量保证肽段量准确、盐和胺类缓冲物低。
- 混样前可先小比例 test mix（测试混样）检查通道是否均衡。
- 大项目建议设置 pooled reference channel。
- 如果比例压缩严重，可考虑更窄 isolation window、分级、SPS-MS3 或优化 LC 分离。
- 数据分析时需要做 isotopic impurity correction（同位素杂质校正）。

## 常见错误

| 错误 | 后果 |
| --- | --- |
| 用含胺缓冲液影响标记 | TMT 反应效率下降 |
| 混样前不做定量 | 通道偏差不可控 |
| 不检查标记效率 | 未标记肽段导致结果偏差 |
| 忽略共隔离干扰 | 结果看起来稳定但差异被压缩 |
| 不设置参考通道 | 多批 TMT 数据整合困难 |

## 小结

TMT 是多样本相对定量蛋白质组学的强工具。它的核心是同重异位标签和报告离子读数，优势是通量和批间一致性，风险是成本、标记效率、共隔离干扰和比例压缩。做 TMT 时，实验设计和 QC 往往比“上机参数”更早决定结果质量。

## 参考来源

- [Thompson et al., Tandem mass tags: a novel quantification strategy for comparative analysis of complex protein mixtures by MS/MS, Analytical Chemistry, 2003](https://doi.org/10.1021/ac0262560)
- [Thermo Fisher TMTpro 16plex Label Reagent Set](https://www.thermofisher.com/order/catalog/product/A44520)
- [Olsen et al., Higher-energy C-trap dissociation for peptide modification analysis, Nature Methods, 2007](https://doi.org/10.1038/nmeth1060)
