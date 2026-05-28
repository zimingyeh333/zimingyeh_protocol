# TaqMan探针

TaqMan probe（TaqMan 探针）是一类 hydrolysis probe（水解探针），用于 probe-based qPCR（探针法 qPCR）。它通常是一段与目标扩增区域内部互补的寡核苷酸，一端带 reporter dye（报告荧光基团），另一端带 quencher（淬灭基团）。扩增过程中探针被 DNA polymerase 的 5' nuclease activity（5' 核酸酶活性）切解，reporter 与 quencher 分离，荧光信号增加。

![qPCR核心材料参考图](../z_asset/材/qPCR核心材料/qPCR-core-materials-reference.png)

图源：Image2 生成的 qPCR 核心材料参考图；右侧带绿色帽的小管代表荧光探针/报告染料相关试剂。

## 工作原理

TaqMan 探针位于 forward primer（正向引物）和 reverse primer（反向引物）之间。退火时，探针与目标序列结合；延伸时，聚合酶遇到探针并将其切解，释放 reporter fluorescence（报告荧光）。因此只有“引物扩增 + 探针正确结合 + 聚合酶延伸”同时发生，信号才有效累积。

Thermo Fisher 对 TaqMan Assays 的说明将其定位为基于荧光探针的 real-time PCR 检测体系，利用探针提高检测特异性；IDT 的 qPCR probe 资料也强调 reporter、quencher 和 probe design 是探针法 qPCR 的核心。[参考：Thermo Fisher TaqMan Assays](https://www.thermofisher.com/us/en/home/life-science/pcr/real-time-pcr/real-time-pcr-assays/taqman-assays.html)；[参考：IDT qPCR Probes](https://www.idtdna.com/pages/products/pcr-qpcr/qpcr-probes)

## 核心组成

| 组成 | 作用 |
| --- | --- |
| Probe sequence（探针序列） | 决定目标特异性 |
| Reporter dye（报告荧光） | 被激发后产生检测信号，例如 FAM、HEX、VIC |
| Quencher（淬灭基团） | 探针完整时抑制 reporter 荧光 |
| MGB / LNA optional | 提高短探针结合稳定性和特异性 |
| Primer pair（引物对） | 扩增探针所在的目标片段 |

## TaqMan vs SYBR

| 项目 | TaqMan 探针法 | SYBR Green 法 |
| --- | --- | --- |
| 特异性 | 引物 + 探针双重特异性 | 主要依赖引物特异性 |
| 成本 | 高 | 低 |
| 设计复杂度 | 高，需要探针 | 低，只需引物 |
| 多重检测 | 更适合 multiplex | 受限较多 |
| 结果质控 | 主要看扩增曲线和对照 | 还必须看熔解曲线 |

如果目标序列相似度高、表达量低、样本珍贵或需要临床/验证型检测，TaqMan 通常比 [SYBR Green qPCR Master Mix](<SYBR Green qPCR Master Mix.md>) 更稳。如果只是早期筛查多个候选基因，SYBR 更经济。

## 设计要点

| 要点 | 为什么重要 |
| --- | --- |
| 探针位于扩增片段内部 | 确保信号来自目标扩增产物 |
| 避免 SNP 或剪接变异关键位点误放 | 防止样本间序列差异影响结合 |
| reporter 与仪器通道匹配 | qPCR 仪必须能激发和读取该荧光 |
| quencher 选择合适 | 降低背景，提高信噪比 |
| amplicon 短而特异 | RT-qPCR 常用短片段以提高效率 |

MIQE 指南要求 qPCR 报告引物/探针序列或 assay ID、扩增效率、特异性验证和反应条件；使用商业预设计 assay 时也应记录 assay ID 和版本。[参考：MIQE Guidelines](https://academic.oup.com/clinchem/article/55/4/611/5631762)

## 使用 protocol

### 收到探针后

**怎么做**：短暂离心，按说明用 [nuclease-free water（无核酸酶水）](无核酸酶水.md) 或 TE buffer 复溶，避光保存，分装减少冻融。

**为什么**：探针带荧光基团，怕光、怕反复冻融，也容易因为低浓度吸附造成损失。

**注意事项**：

- 记录 reporter、quencher、纯化方式和浓度。
- 不要长时间暴露在强光下。
- 低浓度工作液建议小体积分装。

### 配反应体系

**怎么做**：将 TaqMan master mix、[qPCR引物](qPCR引物.md)、探针、模板和无核酸酶水按优化浓度混合。使用 [滤芯吸头](滤芯吸头.md) 和 [低吸附吸头](低吸附吸头.md)。

**为什么**：探针法 qPCR 成本高且对污染敏感；小体积误差会直接影响 Cq。

**注意事项**：

- 不同 reporter dye 不能随意用同一通道。
- multiplex 时要避免光谱串扰和扩增竞争。
- 使用含 [ROX参比染料](ROX参比染料.md) 的 master mix 时确认仪器是否需要。

### 上机和分析

**怎么做**：在 qPCR 仪中选择正确 reporter、quencher/passive reference 设置和 cycling program。运行后检查扩增曲线、重复孔、NTC 和阳性对照。

**为什么**：探针法通常不依赖熔解曲线判断特异性，但仍可能出现污染、设计失败或荧光通道设置错误。

**出错后果**：通道设置错可能导致无信号；探针设计不佳可能导致 Cq 偏高或非特异背景。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 无扩增 | 通道设置错、探针降解、引物/探针不匹配 | 检查 dye 设置、阳性模板和 assay ID |
| 背景高 | quencher 不合适、探针降解、光照或冻融过多 | 换新探针，避光分装 |
| multiplex 某一路弱 | 引物/探针竞争、染料串扰、模板丰度差异 | 单plex 验证后再 multiplex 优化 |
| NTC 有信号 | 模板污染或探针/引物污染 | 重配体系，分区操作 |

## 购买与记录建议

常见来源包括 [Applied Biosystems](<../番外/试剂厂商/Applied Biosystems.md>) TaqMan Assays、[IDT](<../番外/试剂厂商/IDT.md>) PrimeTime qPCR probes、Bio-Rad 等。购买时要确认 reporter、quencher、是否 MGB/LNA、纯化等级、干粉/溶液形式、设计物种和转录本版本。

推荐记录：

```text
Probe name:
Target gene/transcript:
Sequence or assay ID:
Reporter dye:
Quencher:
Modification:
Supplier:
Catalog/order ID:
Lot number:
Stock concentration:
Working concentration:
Storage/open date:
```

## 小结

TaqMan 探针用更高成本换更高特异性。它特别适合低丰度、相似序列、多重检测和验证型实验，但必须认真记录 reporter/quencher、assay ID、仪器通道和设计版本。

## 参考来源

- [Thermo Fisher TaqMan Assays](https://www.thermofisher.com/us/en/home/life-science/pcr/real-time-pcr/real-time-pcr-assays/taqman-assays.html)
- [IDT qPCR Probes](https://www.idtdna.com/pages/products/pcr-qpcr/qpcr-probes)
- [MIQE Guidelines, Clinical Chemistry 2009](https://academic.oup.com/clinchem/article/55/4/611/5631762)
