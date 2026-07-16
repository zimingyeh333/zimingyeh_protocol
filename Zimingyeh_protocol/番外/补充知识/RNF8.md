# RNF8

RNF8（RING finger protein 8，RING 指蛋白 8）是 DNA 双链断裂染色质应答中的 E3 泛素连接酶。它通过 FHA 结构域读取被 ATM 磷酸化的 [MDC1](MDC1.md)，再通过 RING 结构域与 E2 泛素结合酶协作，把上游磷酸化信号转换为非降解型泛素信号。

RNF8 与 [RNF168](RNF168.md) 是串联但不等同的两级 E3：RNF8 主要建立 RNF168 的募集支架，RNF168 则负责写入和放大关键的 H2A/H2AX K13/K15 泛素化标记。

![H2AX-MDC1-RNF8 信号轴参考图](../../z_asset/番外/补充知识/H2AX-MDC1-RNF8信号轴/H2AX-MDC1-RNF8信号轴参考图.png)

> 图源：[MDC1 PST-repeat region promotes histone H2AX-independent chromatin association and DNA damage tolerance](https://doi.org/10.1038/s41467-019-12929-5)，Figure 1，开放获取。图 a 的步骤 5–7 展示 RNF8 到 RNF168 再到 53BP1/Shieldin 的信号传递。图把 RNF8 底物写作“另一种蛋白”，当前证据支持组蛋白 H1 和 L3MBTL2 等可作为 RNF168 招募支架；H2A/H2AX K13/K15 的关键写入主要由 RNF168 完成。

## 核心结构与分工

| 结构 | 主要作用 | 典型突变后果 |
|---|---|---|
| N 端 FHA（forkhead-associated，叉头相关）结构域 | 识别 MDC1 上 ATM 依赖的磷酸化 TQXF 基序 | RNF8 难以募集到损伤焦点 |
| C 端 RING（really interesting new gene）指结构域 | 结合 E2 酶并催化泛素转移 | RNF8 可被定位但不能建立有效下游泛素信号 |

这种模块化使“定位”和“催化”可以被实验上拆开：FHA 突变回答 RNF8 是否能到达损伤位点，RING 突变回答到达后能否执行泛素连接酶功能。

## RNF8 如何被招募

[DNA 双链断裂](DNA双链断裂.md)发生后，[MRN 复合物](MRN复合物.md)促进 [ATM](ATM通路.md) 活化，ATM 磷酸化 [H2AX](H2AX与γH2AX.md) 并形成 γH2AX。MDC1 的串联 BRCT 结构域结合 γH2AX，同时其 TQXF 基序被 ATM 磷酸化。RNF8 的 FHA 结构域读取这些磷酸化 TQXF 位点，使 RNF8 在损伤染色质富集。

因此，在典型层级实验中：

- H2AX 或 MDC1 缺失通常削弱 RNF8 焦点；
- RNF8 缺失通常不阻止最早期 γH2AX/MDC1 平台形成；
- RNF8 缺失会显著影响 RNF168、53BP1 和部分 BRCA1 相关复合物的后续聚集。

## RNF8–UBC13 建立 K63 泛素支架

RNF8 常与 UBC13/UBE2N（ubiquitin-conjugating enzyme E2 N，泛素结合酶 E2 N）协作，促进 K63-linked polyubiquitin（K63 连接型多聚泛素链）形成。

K63 泛素链通常更偏向信号组装，而不是把底物送入蛋白酶体降解。在 DSB 周围，RNF8 可促进 linker histone H1（连接组蛋白 H1）及其他染色质蛋白的泛素化，构成 RNF168 能读取的上游停靠平台。

这也是为什么“RNF8 是 E3”不能简单翻译为“RNF8 使蛋白降解”：泛素链连接方式、底物和读取蛋白共同决定生物学结果。

## RNF8 如何把信号交给 RNF168

RNF168 的 UDM1（ubiquitin-dependent DSB recruitment module 1，泛素依赖性 DSB 募集模块 1）可识别损伤区域的泛素化支架。RNF168 到达后，主要催化 H2A/H2AX 第 13/15 位赖氨酸泛素化，即 H2AK13/15ub。

该标记随后与既存的 H4K20me2 共同构成下游读取平台：

- [53BP1](53BP1.md) 同时读取 H2AK15ub 与 H4K20me2，促进断端保护和修复途径调控；
- [BARD1](BARD1.md)–BRCA1 相关复合体在合适细胞周期和染色质背景中参与同源重组方向的调控；
- RNF168 还可通过识别自身产物形成信号放大，但必须受到去泛素化酶和竞争性读取蛋白限制。

## RNF8 与 RNF168 的直接对比

| 比较维度 | RNF8 | RNF168 |
|---|---|---|
| 上游定位信号 | 磷酸化 MDC1 的 TQXF 基序 | RNF8 建立的泛素化支架 |
| 关键读取模块 | FHA | UDM1/泛素结合模块 |
| 主要写入重点 | H1 等底物上的 K63 泛素信号 | H2A/H2AX K13/K15 泛素化 |
| 通路位置 | 磷酸化到泛素化的转换器 | 组蛋白泛素标记的写入和放大器 |
| 共同结果 | 支持 53BP1、BRCA1 相关因子等损伤组装 | 支持 53BP1、BRCA1 相关因子等损伤组装 |
| 能否互相替代 | 不能 | 不能 |

只检测 H2AK15ub 下降不能直接区分 RNF8 催化缺陷还是 RNF168 缺失，因为 RNF8 位于 RNF168 招募的上游。需要同时观察 RNF8 和 RNF168 的定位。

## 实验研究策略

### 免疫荧光和激光微照射

[免疫荧光](<../../用(实验流程内容篇)/免疫荧光.md>)可检测 RNF8、RNF168、53BP1 和 K63-Ub/FK2 信号的焦点；[激光微照射](<../../用(实验流程内容篇)/激光微照射.md>)适合分析募集顺序和动力学。

推荐的层级读数：

- 上游：γH2AX、MDC1；
- 当前节点：RNF8；
- 直接下游：K63-Ub、RNF168、H2AK15ub；
- 效应层：53BP1、BRCA1/BARD1 相关焦点；
- 功能层：辐射敏感性、修复报告系统或染色体异常。

### 结构域互补

在 RNF8 缺失背景中比较野生型、FHA 缺陷和 RING 缺陷 RNF8，可把定位问题与催化问题分开：

- FHA 缺陷：RNF8 本身通常不能正常形成损伤焦点；
- RING 缺陷：RNF8 可能仍能定位，但 RNF168 和 53BP1 等下游信号恢复失败；
- 野生型回补：应尽量接近内源表达水平，避免过表达导致非生理性泛素化。

### Western blot 与泛素化检测

[Western blot](<../../用(实验流程内容篇)/Western blot.md>)适合验证 RNF8 表达和敲除，但全细胞裂解物中的泛素涂抹信号通常难以归因到特定损伤位点。若研究底物泛素化，应结合染色质分级、变性免疫沉淀或位点特异抗体，并设置无损伤和 E3 催化缺陷对照。

### 免疫共沉淀

[免疫共沉淀](<../../用(实验流程内容篇)/免疫共沉淀.md>)可验证 RNF8–MDC1 或 RNF8–E2 关联。损伤后复合体可能依赖染色质桥接，应比较有/无核酸酶、不同盐浓度及 FHA/TQXF 突变条件。

## 结果判读层级

| 结果 | 较合理的定位 | 下一步 |
|---|---|---|
| γH2AX、MDC1 正常，RNF8 焦点减少 | RNF8 表达/FHA 识别或 MDC1 TQXF 磷酸化异常 | 检查 RNF8 表达及 FHA/TQXF 互补 |
| RNF8 焦点正常，RNF168 焦点减少 | RNF8 催化、E2、底物支架或 RNF168 读取异常 | 检查 RING、UBE2N、K63-Ub 和 RNF168 UDM1 |
| RNF168 正常，53BP1 减少 | H2AK15ub 写入、H4K20me2 暴露或 53BP1 读取异常 | 检测 H2AK15ub、H4K20me2 和 53BP1 结构域 |
| RNF8 缺失后焦点缺陷但存活影响轻 | 通路冗余、损伤剂量或功能读数不敏感 | 增加剂量梯度、克隆形成和修复途径报告 |

## 常见错误与 troubleshooting

| 问题 | 常见原因 | 调整策略 |
|---|---|---|
| 把 RNF8 直接写成 H2AK15ub 写入者 | 混淆早期模型与当前分工 | 明确 RNF8 建支架、RNF168 写 H2AK13/15ub |
| RNF8 抗体出现多个条带 | 抗体特异性不足或蛋白修饰/降解 | 使用 RNF8 KO 作为特异性对照；更换识别区域不同的抗体 |
| 过表达 RNF8 产生强泛素背景 | E3 表达远高于内源水平 | 降低表达量；使用稳定低表达或内源标记 |
| 只看 53BP1 焦点就判断 RNF8 活性 | 53BP1 还受细胞周期和染色质标记影响 | 同时检测 RNF8、RNF168、H2AK15ub 及细胞周期 |
| FK2/K63-Ub 信号弱 | 固定、预提取或去泛素化酶活性影响 | 优化预提取；快速处理；必要时加入去泛素化酶抑制条件 |

## 关键结论

RNF8 最准确的定位不是“直接把 H2A 泛素化的酶”，而是“把 MDC1 的磷酸化平台转换为 RNF168 可读取的泛素支架的上游 E3”。将 RNF8 与 RNF168 分层检测，是避免错误解释 DSB 染色质泛素信号的关键。

## 参考来源

- Kolas NK, et al. Orchestration of the DNA-damage response by the RNF8 ubiquitin ligase. *Science*. 2007. [DOI](https://doi.org/10.1126/science.1150034)
- Huen MSY, et al. RNF8 transduces the DNA-damage signal via histone ubiquitylation and checkpoint protein assembly. *Cell*. 2007. [DOI](https://doi.org/10.1016/j.cell.2007.09.041)
- Mailand N, et al. RNF8 ubiquitylates histones at DNA double-strand breaks and promotes assembly of repair proteins. *Cell*. 2007. [DOI](https://doi.org/10.1016/j.cell.2007.09.040)
- Wang B, Elledge SJ. Ubc13/Rnf8 ubiquitin ligases control foci formation of the Rap80/Abraxas/Brca1/Brcc36 complex in response to DNA damage. *PNAS*. 2007. [DOI](https://doi.org/10.1073/pnas.0710061104)
- Thorslund T, et al. Histone H1 couples initiation and amplification of ubiquitin signalling after DNA damage. *Nature*. 2015. [DOI](https://doi.org/10.1038/nature15401)
- Salguero I, et al. MDC1 PST-repeat region promotes histone H2AX-independent chromatin association and DNA damage tolerance. *Nat Commun*. 2019. [DOI](https://doi.org/10.1038/s41467-019-12929-5)
