# PALB2

PALB2（partner and localizer of BRCA2，BRCA2 伙伴与定位蛋白）是 [homologous recombination（HR，同源重组）](同源重组.md)与复制叉保护中的支架/介质蛋白，也是 Fanconi anemia complementation group N（FANCN，范可尼贫血互补组 N）蛋白。它通过连接 [BRCA1](BRCA1.md) 与 [BRCA2](BRCA2.md)，帮助 BRCA2–[RAD51](RAD51.md) 到达正确的染色质和单链 DNA 底物。

PALB2 不应只被画成一条被动“连接线”：纯化蛋白研究显示它能够结合 DNA、直接结合 RAD51、减轻 [RPA](RPA.md) 对 RAD51 成丝的动力学抑制，并促进链侵入。参考：[Buisson et al., Nature Structural & Molecular Biology, 2010](https://doi.org/10.1038/nsmb.1915)。

![BRCA1-PALB2-BRCA2 同源重组轴](../../z_asset/番外/补充知识/BRCA1与PALB2/brca1-palb2-brca2-axis.png)

图：经典路径中，BRCA1–BARD1 允许末端切除并通过 PALB2 招募 BRCA2；BRCA2 促进 RAD51 取代 RPA，形成用于同源搜索和链侵入的核蛋白丝。PALB2 还存在依情境而定的 BRCA1 非依赖募集，并参与停滞复制叉恢复。图中将 PALB2 标为“bridge + DNA/RAD51 mediator”，是为了避免把它误解为没有自身生化功能的接头。本图由 Image2 / image-generation model 生成，用于个人学习示意。

## 关键结构与相互作用

| PALB2 区域 | 主要伙伴或作用 | 实验意义 |
| --- | --- | --- |
| N-terminal coiled-coil domain（N 端卷曲螺旋结构域） | 结合 BRCA1；也可参与 PALB2 自身寡聚 | 破坏 BRCA1 界面不一定使 PALB2 完全不能募集，因为仍有其他染色质入口 |
| chromatin-association motif（ChAM，染色质结合基序）及 DNA-binding regions（DNA 结合区域） | 接触核小体、ssDNA/dsDNA 和重组中间体 | PALB2 并非只依赖蛋白伙伴定位 |
| MRG15（mortality factor 4-like protein 1，死亡因子 4 样蛋白 1）interacting region（MRG15 相互作用区） | 将 PALB2 与特定活跃染色质环境连接 | 可能影响基因组区域选择，不宜只用全核平均焦点解释 |
| C-terminal WD40 β-propeller（C 端 WD40 β 螺旋桨结构域） | 结合 BRCA2 N 端，并与 RAD51/RAD51C 网络连接 | C 端截短常同时破坏 BRCA2 募集、结构稳定性和核内功能 |

PALB2 C 端 WD40 β-propeller 与 BRCA2 N 端短肽形成明确结构界面，解释了为什么部分 PALB2 截短或 BRCA2 N 端变异会破坏复合物。参考：[Oliver et al., EMBO Reports, 2009](https://doi.org/10.1038/embor.2009.126)。

## 经典桥梁：BRCA1–PALB2–BRCA2

DNA 末端切除后会形成 RPA 包被的 3′ single-stranded DNA（3′ 单链 DNA）。经典路径中：

- BRCA1 的 coiled-coil region 与 PALB2 N 端结合。
- PALB2 C 端 WD40 结构域结合 BRCA2 N 端。
- BRCA2 将 RAD51 定位到 RPA 包被 ssDNA，促进连续核蛋白丝形成。
- RAD51 执行 homology search（同源搜索）与 strand invasion（链侵入）。

细胞实验表明，BRCA1–PALB2 相互作用受损会降低 HR，而 PALB2 是 BRCA 复合网络中的功能性组成部分。参考：[Sy et al., Proceedings of the National Academy of Sciences, 2009](https://doi.org/10.1073/pnas.0811159106)；[Zhang et al., Molecular Cancer Research, 2009](https://doi.org/10.1158/1541-7786.MCR-09-0123)。

## PALB2 不是只能从 BRCA1 进入

PALB2 的损伤募集具有 hierarchical and context-dependent recruitment（分层且依情境的募集）特征。除 BRCA1 直接结合外，RNF168（RING finger protein 168，RING 指蛋白 168）产生的泛素环境、PALB2 自身染色质结合区域、MRG15 相关染色质锚定等均可贡献定位。

这在解释 BRCA1 缺陷肿瘤时尤其重要：当 [53BP1](53BP1.md) 相关末端保护被削弱时，PALB2–BRCA2–RAD51 可部分重新进入损伤区域并恢复 HR，从而影响 [PARP 抑制剂](PARP抑制剂.md) 反应。参考：[Foo and Xia, Cancer Research, 2022](https://doi.org/10.1158/0008-5472.CAN-22-1535)。

因此：

- “BRCA1 缺失”不等于“PALB2 在所有条件下完全无法定位”。
- “PALB2 focus 恢复”也不等于 HR 的效率、准确性和复制叉保护全部恢复。
- 研究招募机制时应同时报告 BRCA1、53BP1/RNF168 状态、细胞周期和损伤类型。

## PALB2 自身的 DNA 与 RAD51 活性

PALB2 可结合 ssDNA、dsDNA 及 D-loop（displacement loop，置换环）等底物，并直接与 RAD51 相互作用。在体外，它能稳定 RAD51 filament（RAD51 核蛋白丝）、减轻 RPA 竞争并促进 RAD51 介导的 strand invasion；与 BRCA2 片段协同时作用更强。

这些结果说明：

- PALB2 是 mediator（介质蛋白），不是执行切割或主要链交换的酶。
- PALB2 与 BRCA2 功能有协同，但不能互相等同。
- 仅证明 PALB2 与 BRCA1/BRCA2 共沉淀，尚不足以证明其 DNA/RAD51 调控功能完整。

## 复制叉恢复与保护

在 [复制压力](复制压力.md) 下，phosphorylated RPA（磷酸化 RPA）可促进 PALB2 和 BRCA2 在受压复制叉附近募集，从而帮助复制叉恢复并限制持续 DNA 损伤。参考：[Murphy et al., Journal of Cell Biology, 2014](https://doi.org/10.1083/jcb.201404111)。

复制叉功能与经典 DSB-HR 共享 PALB2–BRCA2–RAD51 轴，却不应当视为同一个读数：

- direct-repeat green fluorescent protein（DR-GFP，直接重复绿色荧光蛋白）等 HR reporter 主要回答指定断裂能否通过 HR 修复。
- DNA fiber 主要观察复制叉速度、停滞后重启或新生链降解。
- 克隆形成/药物敏感性整合了修复、复制、检查点和死亡等多种因素。

## PALB2、BRCA1 与 BRCA2 的显著区别

| 比较轴 | BRCA1 | PALB2 | BRCA2 |
| --- | --- | --- | --- |
| 核心定位 | 损伤染色质识别、末端切除许可、路径选择 | 桥接并组织复合物，同时结合 DNA/RAD51 | RAD51 装载、成丝与复制叉保护 |
| 典型直接界面 | BARD1、PALB2、磷酸化伙伴 | BRCA1、BRCA2、RAD51、染色质 | PALB2、RAD51、DSS1、DNA |
| 是否主要链交换酶 | 否 | 否 | 否；RAD51 才是核心重组酶 |
| 缺陷时常见模式 | 切除与 PALB2/RAD51 募集异常 | BRCA2/RAD51 定位、HR 和叉恢复异常 | RAD51 装载及叉保护异常 |
| 重要解释陷阱 | 不能把 BRCA1 当作切除核酸酶 | 不能把 PALB2 当作被动连接线 | 不能把 BRCA2 当作 RAD51 本身 |

## 遗传病与肿瘤易感性

- 单等位基因 PALB2 pathogenic germline variant（致病性胚系变异）可增加乳腺癌等肿瘤易感性；PALB2 也与胰腺癌易感相关。最初的乳腺癌易感证据见 [Rahman et al., Nature Genetics, 2007](https://doi.org/10.1038/ng1959)，胰腺癌易感证据见 [Jones et al., Science, 2009](https://doi.org/10.1126/science.1171202)。
- 双等位基因 PALB2 致病变异可导致 Fanconi anemia subtype N（FA-N，范可尼贫血 N 亚型）并增加儿童肿瘤风险。参考：[Reid et al., Nature Genetics, 2007](https://doi.org/10.1038/ng1947)。
- 肿瘤中 PALB2 功能丢失可产生 [同源重组缺陷](同源重组缺陷.md)，但是否形成双等位基因失活、是否存在回复变异以及当前 HR 功能状态都会影响治疗反应。

不能根据“检测到一个 PALB2 变异”直接判定致病、HRD 或药物敏感；临床判断需要规范变异分级、家系证据、等位基因状态和肿瘤功能证据。

## 实验中如何观察 PALB2 功能

| 问题 | 推荐读数 | 能回答什么 | 关键限制 |
| --- | --- | --- | --- |
| 蛋白是否表达 | [Western blot](<../../用(实验流程内容篇)/Western blot.md>) | 全长/截短和总量 | 约 130 kDa；抗体表位与截短位置会影响结果 |
| 是否到达损伤区域 | [免疫荧光](<../../用(实验流程内容篇)/免疫荧光.md>)、激光微照射 | PALB2 focus 与募集动力学 | 过表达 GFP-PALB2 可能改变定位和寡聚状态 |
| 是否连接 BRCA 网络 | [免疫共沉淀](<../../用(实验流程内容篇)/免疫共沉淀.md>) | BRCA1–PALB2、PALB2–BRCA2 或 RAD51 相互作用 | 相互作用存在不等于功能完整；需结合突变体和功能读数 |
| RAD51 是否成功装载 | RAD51 focus、染色质结合 RAD51 | PALB2 下游装载能力 | 必须控制 S/G2 比例和 DNA 损伤负荷 |
| HR 是否完成 | DR-GFP 等 [报告基因实验](<../../用(实验流程内容篇)/报告基因实验.md>) | 指定体系中的功能性 HR | 受切割效率、位点和细胞周期影响 |
| 复制叉是否恢复/受保护 | [DNA 纤维实验](<../../用(实验流程内容篇)/DNA纤维实验.md>) | 叉重启、速度和新生链降解 | 不能用单一 fiber 指标替代全部 HR 功能 |
| 变异是否功能异常 | 缺失背景回补、焦点、HR reporter、存活和 fiber 组合 | 变异的功能分层 | 单一过表达实验容易受表达量和定位伪影影响 |

### 推荐的证据组合

- 同时确认 PALB2 全长表达、核定位以及 BRCA1/BRCA2 相互作用。
- 以 S/G2 细胞为主，观察 RPA→PALB2/BRCA2→RAD51 的时间序列。
- 使用 PALB2 缺失细胞、野生型回补、BRCA1-binding-defective 与 BRCA2-binding-defective 分离突变体。
- 将 RAD51 focus 与 HR reporter 配对；涉及复制压力时另做 DNA fiber。
- 研究耐药时加入 BRCA1、53BP1/RNF168、回复变异和克隆形成证据。

## 常见误读与 troubleshooting

| 观察 | 不应立即得出的结论 | 优先排查 |
| --- | --- | --- |
| PALB2 总量正常 | PALB2 通路一定正常 | 核定位、BRCA1/BRCA2 界面、染色质结合和 RAD51 focus |
| PALB2 focus 少 | BRCA1 一定缺失 | 细胞周期、损伤时点、RNF168/53BP1 状态、抗体和预抽提 |
| BRCA1–PALB2 共沉淀正常 | PALB2 的全部功能正常 | BRCA2/RAD51 结合、HR reporter 和复制叉恢复 |
| RAD51 focus 恢复 | 精确 HR 和药物反应已恢复 | 修复产物、基因组稳定性、叉保护和长期存活 |
| 某个 PALB2 变异降低表达 | 已证明该变异直接破坏某相互作用 | mRNA、蛋白稳定性、核定位和界面特异回补 |

## 小结

PALB2 是 BRCA1 与 BRCA2 之间的核心组织者，同时也是具有 DNA/RAD51 调控能力的重组介质。它的募集既有经典 BRCA1 依赖路径，也有依染色质和通路背景而变化的替代入口；实验上应把蛋白表达、伙伴界面、损伤募集、RAD51 装载、HR 完成和复制叉功能分层验证。

## 参考来源

- [Rahman et al., PALB2, which encodes a BRCA2-interacting protein, is a breast cancer susceptibility gene, Nature Genetics, 2007](https://doi.org/10.1038/ng1959)
- [Reid et al., Biallelic mutations in PALB2 cause Fanconi anemia subtype FA-N and predispose to childhood cancer, Nature Genetics, 2007](https://doi.org/10.1038/ng1947)
- [Oliver et al., Structural basis for recruitment of BRCA2 by PALB2, EMBO Reports, 2009](https://doi.org/10.1038/embor.2009.126)
- [Sy et al., PALB2 is an integral component of the BRCA complex required for homologous recombination repair, Proceedings of the National Academy of Sciences, 2009](https://doi.org/10.1073/pnas.0811159106)
- [Zhang et al., PALB2 functionally connects the breast cancer susceptibility proteins BRCA1 and BRCA2, Molecular Cancer Research, 2009](https://doi.org/10.1158/1541-7786.MCR-09-0123)
- [Buisson et al., Cooperation of breast cancer proteins PALB2 and piccolo BRCA2 in stimulating homologous recombination, Nature Structural & Molecular Biology, 2010](https://doi.org/10.1038/nsmb.1915)
- [Murphy et al., Phosphorylated RPA recruits PALB2 to stalled DNA replication forks to facilitate fork recovery, Journal of Cell Biology, 2014](https://doi.org/10.1083/jcb.201404111)
- [Foo and Xia, BRCA1-Dependent and Independent Recruitment of PALB2-BRCA2-RAD51 in the DNA Damage Response and Cancer, Cancer Research, 2022](https://doi.org/10.1158/0008-5472.CAN-22-1535)
