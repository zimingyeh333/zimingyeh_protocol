# PARP抑制剂

PARP inhibitors（poly(ADP-ribose) polymerase inhibitors，聚 ADP-核糖聚合酶抑制剂；PARP 抑制剂，常写 PARPi）是一类靶向 PARP1/PARP2 等 DNA 损伤应答酶的小分子药物。它们最经典的生物学逻辑是：在 [同源重组缺陷](同源重组缺陷.md)细胞中进一步削弱单链损伤修复和复制叉处理，形成 [synthetic lethality（合成致死）](合成致死.md)。

一句话理解：PARP 抑制剂不是“直接杀所有癌细胞”的毒药，而是利用肿瘤修复短板，让原本可以被补救的复制相关 DNA 损伤积累到无法承受。

![PARP 抑制剂与 HRD 背景](../../z_asset/番外/补充知识/PARP抑制剂/parp-inhibitor-hrd-context.jpg)

> 图源：[van der Wiel et al., Homologous Recombination Deficiency Scar: Mutations and Beyond—Implications for Precision Oncology, *Cancers*, 2022](https://doi.org/10.3390/cancers14174157)，Figure 1，CC BY 4.0。该图展示 HRD 相关基因组瘢痕，包括 LOH、TAI 和 LST。这里用于说明 PARP 抑制剂敏感性常与 HRD 背景相关，但它不是 PARP 抑制剂药物作用机制的完整图。

## 名称与靶点

PARP 是 poly(ADP-ribose) polymerase（聚 ADP-核糖聚合酶）家族。DNA 修复语境中最常讨论的是 [PARP1](PARP1.md)和 [PARP2](PARP2.md)，尤其是 PARP1。

PARP1 可在 DNA 单链断裂、碱基损伤或复制压力相关结构附近被激活，利用 NAD+（nicotinamide adenine dinucleotide，烟酰胺腺嘌呤二核苷酸）合成 poly(ADP-ribose)（PAR，聚 ADP-核糖）链，招募或调节 XRCC1 等修复因子。PARP 抑制剂阻断这一催化过程，并且部分药物还能产生不同强度的 [PARP trapping（PARP 捕获）](PARP捕获.md)。

## 两层作用机制

### 抑制 PARylation

PARylation（聚 ADP-核糖基化）是 PARP 把 ADP-ribose 单元加到自身或底物上的翻译后修饰。PARP 抑制剂占据催化口袋后，PAR 链形成下降，损伤位点的修复因子招募和解离动力学会改变。

这层作用常被简写成“抑制单链断裂修复”，但实际更复杂：PARP1/2 参与 base excision repair（BER，碱基切除修复）、复制叉稳定、染色质调节和多种损伤背景下的信号组织。

### PARP trapping

PARP trapping（PARP 捕获）指 PARP1/2 被药物稳定地困在 DNA 损伤或复制相关结构上，形成物理障碍。不同 PARP 抑制剂的 trapping 强度并不相同；这解释了为什么“催化抑制强度类似”的药物，细胞毒性可能相差明显。

临床 PARP 抑制剂 trapping 差异和细胞毒性的系统比较可参考 [Murai et al., *Cancer Research*, 2012](https://doi.org/10.1158/0008-5472.CAN-12-2753)。因此，不能把所有 PARP 抑制剂简单看成同一个药。

## 为什么 HRD 细胞更敏感

BRCA1/2 或其他 HR 关键因子缺陷时，细胞处理复制相关断裂和复制叉障碍的能力下降。PARP 抑制剂增加未能妥善修复的单链损伤、复制叉阻滞和断裂压力；当这些损伤在 S 期转化为 DSB 或复制叉崩溃时，HRD 细胞缺乏高保真修复能力，存活率明显下降。

PARP 抑制剂与 BRCA 缺陷合成致死的经典发现来自 2005 年两篇 Nature 研究：[Bryant et al., *Nature*, 2005](https://doi.org/10.1038/nature03443)；[Farmer et al., *Nature*, 2005](https://doi.org/10.1038/nature03445)。从基础机制进入临床应用的整体逻辑可参考 [Lord and Ashworth, *Science*, 2017](https://doi.org/10.1126/science.aam7344)。

## 常见代表药物

| 通用名 | 英文名 | 常见特点 |
| --- | --- | --- |
| 奥拉帕利 | olaparib | 最早进入临床的一线代表之一，常用于 BRCA/HRD 相关治疗场景 |
| 尼拉帕利 | niraparib | 妇科肿瘤维护治疗语境中常见，血液学毒性管理重要 |
| 卢卡帕利 | rucaparib | BRCA/HRD 相关实体瘤语境常见 |
| 他拉唑帕利 | talazoparib | PARP trapping 强，剂量和毒性管理尤其重要 |

这张表只用于帮助读者识别常见药名，不等于当前批准适应证清单。PARP 抑制剂的具体适应证、组合方案、线次和 biomarker 要求会更新，临床或转化研究必须以最新说明书、监管数据库和指南为准。

## PARP 抑制剂、铂类与 HRD 的区别

| 比较轴 | PARP 抑制剂 | 铂类药物 |
| --- | --- | --- |
| 典型损伤压力 | PARP catalytic inhibition、PARP trapping、复制相关障碍 | DNA 加合物、链内/链间交联 |
| 与 HRD 的关系 | HRD 常增加敏感性，但受 trapping、复制叉和耐药机制影响 | HRD 常增加敏感性，但也受药物摄取、解毒和修复通路影响 |
| 读数重点 | PAR 水平、PARP1 trapping、复制压力、克隆形成 | DNA 交联修复、γH2AX、存活和细胞死亡 |
| 误区 | HRD 阳性必然敏感 | 铂敏感必然等于 HRD |

[顺铂](<../../材(实验耗材工具篇)/顺铂.md>)等铂类和 PARP 抑制剂都可与 HRD 相关，但它们施加的损伤压力不同。一个模型对 PARPi 敏感，不代表一定对所有铂类同等敏感；反之亦然。

## 敏感性和耐药机制

PARP 抑制剂敏感性常受以下层级共同影响：

- 原因层：BRCA1/2、PALB2、RAD51C/D 等 HRR 基因是否双等位失活。
- 当前功能层：损伤后是否能形成 RAD51 foci。
- 复制叉层：停滞复制叉是否被保护，是否发生 MRE11 依赖性降解。
- 药物层：PARP trapping 强度、药物暴露、外排泵和细胞周期分布。
- 细胞死亡层：凋亡、衰老、有丝分裂灾难等下游响应是否有效。

常见获得性耐药机制包括：

| 耐药机制 | 逻辑 |
| --- | --- |
| BRCA1/2 reversion mutation（回复突变） | 恢复开放阅读框或部分蛋白功能，HR 能力回升 |
| 53BP1–RIF1–Shieldin 轴缺失 | 在 BRCA1 缺陷背景中解除切除屏障，部分恢复 RAD51 装载 |
| 复制叉保护恢复 | 即使 HR 未完全恢复，也能降低复制叉崩溃 |
| PARP1 改变 | 降低 trapping 或药物依赖毒性 |
| 药物外排或细胞周期改变 | 降低有效药物压力或避开 S 期损伤 |

PARP 抑制剂耐药综述可参考 [Noordermeer and van Attikum, *Trends in Cell Biology*, 2019](https://doi.org/10.1016/j.tcb.2019.03.004)。

## 实验中如何使用和解释 PARP 抑制剂

| 问题 | 推荐读数 | 能回答什么 | 关键限制 |
| --- | --- | --- | --- |
| 药物是否打到靶点 | PAR 或 PARylation 水平 | 催化抑制是否发生 | 不等于 trapping 或杀伤 |
| 细胞是否敏感 | 短期活性、长期 [克隆形成实验](<../../用(实验流程内容篇)/克隆形成实验.md>) | 生长抑制或长期存活 | 短期活性容易混入增殖速度差异 |
| 是否 HRD 相关 | RAD51 focus、BRCA1/2/PALB2 状态、HR reporter | 是否符合合成致死逻辑 | 需确认 S/G2 和损伤输入 |
| 是否产生复制压力 | γH2AX、p-RPA、p-CHK1、DNA fiber | S 期压力和复制叉状态 | 复制压力不是 PARPi 独有 |
| 是否 trapping 相关 | PARP1 染色质滞留、药物对比 | 物理阻滞贡献 | 技术要求高，药物浓度窗口重要 |
| 是否为耐药 | 剂量反应、回复突变、RAD51 恢复、叉保护 | 耐药层级 | 需要亲本/耐药株配对和回补验证 |

### 设计建议

- 用低密度、足够长时间的克隆形成验证长期存活，不只依赖 48–72 h 活性。
- 同时做 HR 功能读数，例如 RAD51 foci 或 HR reporter，避免把一般细胞毒性误认为 HRD 特异性。
- 药物浓度记录要包含通用名、厂家、货号、批号、溶剂、储存、冻融和最终 DMSO 比例。
- 比较不同 PARP 抑制剂时，不要只按摩尔浓度对齐；要考虑 trapping 强度、细胞系背景和暴露时间。
- 临床相关解释必须区分“机制研究药敏”和“真实患者治疗适应证”。

## 常见错误与 troubleshooting

| 观察 | 常见原因 | 调整策略 |
| --- | --- | --- |
| HRD 模型不敏感 | 克隆适应、RAD51 功能恢复、药物失效或暴露不足 | 检查药物库存、PAR 水平、RAD51、回复突变和克隆形成 |
| 野生型细胞也很敏感 | 浓度过高、细胞增殖快、trapping 毒性或一般压力 | 降低剂量、延长梯度、加入多细胞系和溶剂对照 |
| 短期活性很强但克隆形成不明显 | 代谢活性下降不等于长期死亡 | 增加长期存活、细胞周期和死亡方式检测 |
| RAD51 焦点低但药物不敏感 | 细胞未进入 S/G2、损伤输入不足或耐药机制 | 加入 Cyclin A/EdU、γH2AX 和复制叉读数 |
| 不同 PARPi 结果不一致 | trapping 强度、药代/细胞内暴露或靶点滞留不同 | 做 PAR、染色质 PARP1 和多药物并行比较 |

## 小结

PARP 抑制剂的核心不是单纯“抑制单链断裂修复”，而是催化抑制、PARP trapping、复制压力和 HRD 背景共同形成的选择性脆弱性。实验上要把靶点占用、HR 功能、长期存活和耐药机制分层检测；临床上则必须回到具体药物、癌种、biomarker 和最新适应证。

## 参考来源

- [Bryant et al., Specific killing of BRCA2-deficient tumours with inhibitors of poly(ADP-ribose) polymerase, *Nature*, 2005](https://doi.org/10.1038/nature03443)
- [Farmer et al., Targeting the DNA repair defect in BRCA mutant cells as a therapeutic strategy, *Nature*, 2005](https://doi.org/10.1038/nature03445)
- [Murai et al., Trapping of PARP1 and PARP2 by clinical PARP inhibitors, *Cancer Research*, 2012](https://doi.org/10.1158/0008-5472.CAN-12-2753)
- [Lord and Ashworth, PARP inhibitors: Synthetic lethality in the clinic, *Science*, 2017](https://doi.org/10.1126/science.aam7344)
- [Noordermeer and van Attikum, PARP inhibitor resistance: A tug-of-war in BRCA-mutated cells, *Trends in Cell Biology*, 2019](https://doi.org/10.1016/j.tcb.2019.03.004)
- [van der Wiel et al., Homologous Recombination Deficiency Scar: Mutations and Beyond—Implications for Precision Oncology, *Cancers*, 2022](https://doi.org/10.3390/cancers14174157)
