# PARP1

PARP1（poly(ADP-ribose) polymerase 1，聚 ADP-核糖聚合酶 1）是 DNA 损伤应答中最重要的 PARP 家族成员之一，尤其参与 [DNA单链断裂](DNA单链断裂.md)、碱基损伤、复制压力和染色质结构调节。它通过识别 DNA 断裂结构并利用 [NAD+](NAD.md) 合成 poly(ADP-ribose)（PAR，聚 ADP-核糖）链，快速改变损伤位点附近的蛋白互作和染色质环境。

一句话理解：PARP1 像一个很敏感的 DNA 损伤“报警器和临时脚手架”，但在 [PARP抑制剂](PARP抑制剂.md)存在时，它也可能变成被困在 DNA 上的障碍物。

![PARP1 与 HRD/PARP 抑制剂背景](../../z_asset/番外/补充知识/PARP1/parp1-hrd-context.jpg)

> 图源：[van der Wiel et al., Homologous Recombination Deficiency Scar: Mutations and Beyond—Implications for Precision Oncology, *Cancers*, 2022](https://doi.org/10.3390/cancers14174157)，Figure 1，CC BY 4.0。该图展示 HRD 相关基因组瘢痕，用于提示 PARP1/PARP 抑制剂常被放在 HRD 背景下理解；它不是 PARP1 结构图。

## 名称与基本结构

PARP1 属于 ADP-ribosyltransferase（ADP-核糖基转移酶）超家族。它的典型结构模块包括：

| 模块 | 主要功能 | 备注 |
| --- | --- | --- |
| N 端 zinc finger（锌指）结构域 | 识别 DNA 断裂或异常 DNA 结构 | 决定 PARP1 对 DNA 损伤的快速响应 |
| automodification domain（自修饰结构域） | 接受 PAR 链并调节蛋白解离 | 使 PARP1 可通过自 PARylation 从 DNA 上释放 |
| catalytic domain（催化结构域） | 使用 NAD+ 合成 PAR 链 | 是多数 PARP 抑制剂结合的核心区域 |

PARP1 被 DNA 损伤激活的结构基础可参考 [Langelier et al., *Science*, 2012](https://doi.org/10.1126/science.1216338)。

## PARP1 激活后做什么

### 识别 DNA 损伤并快速 PARylation

PARP1 结合 DNA 单链断裂、双链断裂末端、缺口或部分异常 DNA 结构后，催化活性迅速升高。它把 NAD+ 分解并转移 ADP-ribose 单元，形成 PAR 链，这个过程称为 [PARylation（聚 ADP-核糖基化）](聚ADP核糖基化.md)。

PAR 链带有强负电荷，可以：

- 招募含 PAR-binding motif（PAR 结合基序）的修复因子；
- 改变 PARP1 与 DNA 的亲和力；
- 影响局部染色质松散程度；
- 为后续修复、检查点和蛋白降解提供临时平台。

PAR 信号本身也必须被及时清除，PARG（poly(ADP-ribose) glycohydrolase，聚 ADP-核糖糖苷水解酶）等酶会降解 PAR 链。因此，实验中看到 PAR 信号变化时，要同时考虑 PARP1 合成和 [PARG](PARG.md)降解两个方向。

### 帮助单链损伤修复

在 [base excision repair（BER，碱基切除修复）](碱基切除修复.md)和 single-strand break repair（SSBR，单链断裂修复）中，PARP1 可帮助组织 [XRCC1](XRCC1.md)、[DNA ligase III（DNA 连接酶 III）](DNA连接酶III.md)、[PNKP](PNKP.md)、[APTX](APTX.md) 等因子。它不是每一步的催化酶，却能把损伤识别、修复因子聚集和染色质调节接在一起。

### 参与复制压力和双链断裂背景

PARP1 不只处理“简单单链断裂”。在复制叉遇到未修复损伤、缺口、R-loop 或复杂 DNA 结构时，PARP1 也会影响复制叉稳定、重启和断裂处理。这解释了为什么 PARP1 抑制在 S 期细胞和 HRD 背景中尤其容易放大毒性。

## PARP1 与 PARP2 的区别

| 比较轴 | PARP1 | [PARP2](PARP2.md) |
| --- | --- | --- |
| 总体贡献 | DNA 损伤诱导 PARylation 的主力 | 与 PARP1 有重叠，也有部分特异功能 |
| DNA 结合方式 | 通过多个锌指结构域快速识别断裂 | DNA 结合和结构偏好不同，更依赖特定 DNA/蛋白环境 |
| 药物相关性 | 多数 PARP 抑制剂毒性和 trapping 讨论的中心 | 也可被临床 PARP 抑制剂抑制和捕获 |
| 实验读数 | PARP1 总量、PAR 水平、染色质滞留 | PARP2 总量、互补功能、双敲/双抑制表型 |

PARP1 与 PARP2 有功能冗余，但不能把 PARP2 简单写成“弱版 PARP1”。双缺失会造成更严重的基因组稳定性和发育问题，说明二者在细胞内不是完全可替换的。

## 与 PARP 抑制剂的关系

PARP 抑制剂通常结合 PARP1/2 的 NAD+ 口袋，抑制催化活性。对 PARP1 来说，药物作用至少有两层：

- 抑制 PARylation，使修复因子招募和 PARP1 自释放受阻；
- 产生 [PARP捕获](PARP捕获.md)，让 PARP1 更稳定地停留在 DNA 上，成为复制叉前进的物理障碍。

因此，实验中看到 PAR 水平下降只说明催化抑制发生，不能直接说明 trapping 强弱，也不能直接等于细胞死亡。

## 实验中如何观察 PARP1

| 问题 | 推荐读数 | 能回答什么 | 关键限制 |
| --- | --- | --- | --- |
| PARP1 是否存在 | PARP1 [Western blot](<../../用(实验流程内容篇)/Western blot.md>) | 总蛋白、裂解片段、敲低效率 | 总量不代表活性 |
| 是否被激活 | PAR signal、PARP1 automodification | DNA 损伤诱导 PARylation | PAR 信号很动态，取样时间很关键 |
| 是否被药物抑制 | PAR 下降、NAD+ 消耗减少 | 催化抑制是否发生 | 不能代表 trapping |
| 是否发生 trapping | 染色质分级、PARP1 chromatin retention | PARP1 是否滞留 DNA/染色质 | 裂解条件和药物时间窗影响大 |
| 是否影响修复 | XRCC1 招募、γH2AX、RAD51、克隆形成 | 损伤后果和细胞存活 | 需区分一般毒性与 HRD 特异性 |

### 设计建议

- PARP1 总蛋白、PAR 信号和染色质结合 PARP1 最好分层检测。
- 做 PARP 抑制剂实验时，至少记录药物名、厂家、货号、批号、溶剂、冻融次数、终浓度和处理时间。
- 若解释 HRD 相关敏感性，应配合 RAD51 foci、BRCA1/2/PALB2 状态和长期克隆形成，而不是只用短期细胞活性。

## 常见误读与 troubleshooting

| 观察 | 不应立即得出的结论 | 优先排查 |
| --- | --- | --- |
| PARP1 总量高 | PARP 活性一定高 | DNA 损伤输入、NAD+、PAR 信号和染色质结合 |
| PAR 信号下降 | 细胞一定会死亡 | trapping、HRD 背景、剂量和长期存活 |
| PARP1 裂解条带出现 | PARP1 功能性抑制成功 | 细胞凋亡标志和取样时间 |
| PARP1 敲低比药物毒性弱 | 实验矛盾 | 药物 trapping 与单纯蛋白减少不是同一机制 |
| PARP1 抑制后 γH2AX 上升 | 一定是 DSB 直接增多 | 复制压力、S 期比例和未修复缺口转化 |

## 小结

PARP1 是 DNA 损伤诱导 PARylation 的核心酶和 PARP 抑制剂生物学的主轴。理解 PARP1 时要分清三件事：损伤识别、催化 PARylation、自身/药物导致的 DNA 滞留。实验上也要分别检测 PARP1 总量、PAR 信号、trapping 和长期细胞命运。

## 参考来源

- [Langelier et al., Structural basis for DNA damage-dependent poly(ADP-ribosyl)ation by human PARP-1, *Science*, 2012](https://doi.org/10.1126/science.1216338)
- [Gibson and Kraus, New insights into the molecular and cellular functions of poly(ADP-ribose) and PARPs, *Nature Reviews Molecular Cell Biology*, 2012](https://doi.org/10.1038/nrm3376)
- [Murai et al., Trapping of PARP1 and PARP2 by clinical PARP inhibitors, *Cancer Research*, 2012](https://doi.org/10.1158/0008-5472.CAN-12-2753)
- [Lord and Ashworth, PARP inhibitors: Synthetic lethality in the clinic, *Science*, 2017](https://doi.org/10.1126/science.aam7344)
