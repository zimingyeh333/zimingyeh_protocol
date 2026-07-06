# BARD1

BARD1（BRCA1-associated RING domain protein 1，BRCA1 相关 RING 结构域蛋白 1）是 [BRCA1](BRCA1.md) 的稳定结合伙伴，也是受损染色质的多价识别器。二者通过 N 端 RING domain（RING 结构域）形成异二聚体，共同参与泛素化、[DNA 末端切除](DNA末端切除.md)许可、[homologous recombination（HR，同源重组）](同源重组.md)和复制叉保护。

BARD1 不是只负责“扶稳 BRCA1”的辅助蛋白：它能够同时读取 DNA 损伤产生的 H2AK15ub 和复制后染色质的 H4K20me0，从而帮助 BRCA1–BARD1 在合适的细胞周期与染色质环境中进入 HR。BARD1 本身不是切割 DNA 的核酸酶。

![BARD1 与 53BP1 读取染色质并影响修复路径](../../z_asset/番外/补充知识/BARD1与53BP1/bard1-53bp1-chromatin-pathway-choice.png)

图：[RNF168](RNF168.md) 在断裂附近产生 histone H2A lysine 15 ubiquitination（H2AK15ub，组蛋白 H2A 第 15 位赖氨酸泛素化）。在复制后染色质中，BARD1 同时读取 H2AK15ub 与 [H4K20me0](组蛋白H4K20甲基化.md)，帮助 BRCA1–BARD1 许可末端切除并建立 [RPA（replication protein A，复制蛋白 A）](RPA.md)→[RAD51 recombinase（RAD51 重组酶）](RAD51.md)的 HR 环境；53BP1 则偏好 H2AK15ub 与 H4K20me2 的组合，并通过 RIF1–Shieldin–CST/Pol α 轴保护或回填 DNA 末端。两条路径受细胞周期和染色质共同偏置，不是绝对开关。本图由 Image2 / image-generation model 生成，用于个人学习示意。

## 为什么 BRCA1 与 BARD1 要组成异二聚体

BRCA1 与 BARD1 的 N-terminal RING domains（N 端 RING 结构域）形成紧密异二聚体，并共同构成 RING-type ubiquitin E3 ligase（RING 型泛素 E3 连接酶）。这个组合具有三层意义：

- **结构稳定**：两者相互稳定；失去一方可能降低另一方蛋白量、折叠或核内功能。
- **催化组织**：复合物结合 ubiquitin-conjugating enzyme（E2，泛素结合酶），促进泛素从 E2 转移到底物。
- **空间定位**：BARD1 的染色质读取区域把 BRCA1 的调控与 E3 活性带到合适的核小体环境。

因此，“BRCA1 表达正常”不能单独证明 BRCA1–BARD1 工作正常；还需要检查 BARD1、异二聚体形成、损伤募集和下游功能。BRCA1–BARD1 作为 E3 连接酶复合物的早期机制综述见 [Baer and Ludwig, Current Opinion in Genetics & Development, 2002](https://doi.org/10.1016/S0959-437X(01)00269-6)。

## 关键结构区域

| BARD1 区域 | 主要作用 | 实验解释 |
| --- | --- | --- |
| N-terminal RING domain（N 端 RING 结构域） | 与 BRCA1 形成异二聚体并参与 E3 连接酶反应 | RING 变异可能同时影响稳定性、界面和催化活性 |
| ankyrin repeat domain（ARD，锚蛋白重复结构域） | 识别 H4K20me0，偏向复制后的核小体 | ARD 突变可保留 BRCA1 结合，却损害染色质选择与 HR |
| BUDR motif（BARD1 ubiquitin-dependent recruitment motif，BARD1 泛素依赖募集基序） | 识别 H2AK15ub | BUDR 邻近串联 BRCT，但不能把二者粗略写成同一个结构域 |
| tandem BRCT domains（串联 BRCT 结构域） | 参与核小体结合、构象与伙伴组织 | C 端截短可能同时影响 BUDR 周边结构、染色质结合和蛋白稳定性 |

图中写作 `BUDR/BRCT` 是为了表示相邻的功能模块，而不是说经典 BRCT 磷酸肽结合口袋本身等同于 H2AK15ub 读取位点。

## 双重读取：损伤标记加复制标记

### H2AK15ub 提供“这里发生了损伤”

DNA double-strand break（DSB，DNA 双链断裂）附近会形成泛素信号。RNF168 催化 H2AK15ub；BARD1 的 BUDR 可读取这一标记，帮助 BRCA1–BARD1 在断裂邻近核小体停留。

H2AK15ub 并不是 BRCA1–BARD1 的专属信号，[53BP1](53BP1.md) 的 UDR motif（ubiquitination-dependent recruitment motif，泛素化依赖募集基序）也读取同一标记。因此，H2AK15ub 更像公共损伤地址，而不是已经决定 HR 或 NHEJ 的终点标签。

### H4K20me0 提供“染色质已经复制”

DNA 复制后，新沉积组蛋白 H4 的 lysine 20（K20，第 20 位赖氨酸）暂未甲基化，形成 H4K20me0。BARD1 的 ARD 识别 H4K20me0，使 BRCA1–BARD1 偏向存在姐妹染色单体的复制后染色质。参考：[Nakamura et al., Nature Cell Biology, 2019](https://doi.org/10.1038/s41556-019-0282-9)。

BARD1 同时接触 H2AK15ub、H4K20me0、核小体与 DNA，形成 multivalent recognition（多价识别）。破坏其中一个界面可能降低而不是绝对消除募集；不同损伤、细胞系和表达水平也会改变表型强度。结构与功能证据见 [Hu et al., Molecular Cell, 2021](https://doi.org/10.1016/j.molcel.2021.05.010)；[Becker et al., Nature, 2021](https://doi.org/10.1038/s41586-021-03776-w)。

## BARD1 如何影响 HR

BARD1 把 BRCA1–BARD1 定位到合适的损伤染色质后，复合物可：

- 对抗 53BP1 相关末端保护屏障，使 MRN–CtIP、EXO1、DNA2 等系统能够产生 3′ single-stranded DNA（3′ 单链 DNA）。
- 通过 BRCA1–[PALB2](PALB2.md)–[BRCA2](BRCA2.md) 轴促进 RPA 向 RAD51 的受控交接。
- 通过核小体泛素化、染色质重塑与伙伴蛋白组织参与 HDR 的切除阶段和较后期完成步骤。
- 在复制压力下参与停滞或逆转复制叉的稳定与恢复。

这里必须区分“定位与许可”和“直接催化”：BARD1 不切除 DNA、不把 DNA 断端连接起来，也不执行 RAD51 的同源搜索。BRCA1–BARD1 E3 活性对切除和 homology-directed repair（HDR，同源定向修复）完成的证据见 [Wang et al., Molecular Cell, 2023](https://doi.org/10.1016/j.molcel.2023.09.015)。

## BARD1、BRCA1 与 53BP1 的区别

| 比较轴 | BARD1 | BRCA1 | 53BP1 |
| --- | --- | --- | --- |
| 核心身份 | BRCA1 伙伴、E3 复合物成员、核小体读取器 | 损伤应答支架与路径调控平台 | 末端保护通路的染色质支架 |
| 关键染色质读取 | ARD 读 H4K20me0；BUDR 读 H2AK15ub | 主要借 BARD1 与其他复合物定位 | tandem Tudor 读 H4K20me2；UDR 读 H2AK15ub |
| 通路倾向 | 复制后染色质中的 HR | 末端切除、PALB2–BRCA2–RAD51 与叉保护 | 限制切除并支持经典 NHEJ 等末端连接环境 |
| 是否核酸酶/连接酶 | 都不是 | 都不是 | 都不是 |
| 典型误读 | 只是稳定 BRCA1 | 自己直接切除 DNA | 自己直接连接断端 |

## 变异与功能解释

BARD1 变异可能通过不同方式损害功能：

- 破坏 BRCA1–BARD1 RING 界面，导致异二聚体或 E3 活性异常。
- 破坏 ARD–H4K20me0 或 BUDR–H2AK15ub 接触，使损伤募集下降。
- 造成截短、核定位异常或蛋白不稳定。
- 保留可见焦点，却损害 HR reporter、RAD51 装载或药物反应。

“位于 BARD1”不等于已证明 pathogenic（致病）。临床变异解释需要群体频率、家系分离、功能实验、等位基因状态及规范数据库证据；单次过表达功能实验不能替代临床分级。

## 实验中如何观察 BARD1

| 问题 | 推荐读数 | 能回答什么 | 关键限制 |
| --- | --- | --- | --- |
| 蛋白是否存在 | [Western blot](<../../用(实验流程内容篇)/Western blot.md>) | 全长、截短与总量 | 人 BARD1 约 87 kDa；抗体表位与降解会影响条带 |
| 是否与 BRCA1 形成复合物 | [免疫共沉淀](<../../用(实验流程内容篇)/免疫共沉淀.md>) | RING 界面与复合物稳定性 | 共沉淀正常不等于染色质读取或 E3 活性正常 |
| 是否到达损伤染色质 | [免疫荧光](<../../用(实验流程内容篇)/免疫荧光.md>)、[laser microirradiation（激光微照射）](<../../用(实验流程内容篇)/激光微照射.md>) | BARD1/BRCA1 focus 与募集动力学 | 需控制 S/G2 比例、损伤剂量、预抽提和抗体质量 |
| 是否识别特定核小体 | 修饰核小体 pull-down、纯化蛋白结合、结构域突变 | H2AK15ub/H4K20me0 读取是否直接 | 游离组蛋白肽不能完整代表核小体表面 |
| 下游 RAD51 是否装载 | RPA 与 RAD51 focus 时间序列 | 切除后介质交接结果 | focus 不等于 HR 已完成 |
| HR 是否完成 | DR-GFP 等 [报告基因实验](<../../用(实验流程内容篇)/报告基因实验.md>) | 指定断裂体系中的功能性 HR | 受切割、细胞周期与 reporter 位点影响 |
| 是否影响存活 | [cisplatin（顺铂）](<../../材(实验耗材工具篇)/顺铂.md>)、[PARP inhibitor（PARP 抑制剂）](PARP抑制剂.md)克隆形成 | 整合性的损伤应答结果 | 药敏还受复制叉、药物摄取和细胞死亡通路影响 |

### 推荐的证据组合

- 先确认 BARD1 与 BRCA1 的全长表达和相互稳定。
- 在 [细胞周期](细胞周期.md)分层后观察 BARD1/BRCA1 focus，使用 [EdU](<../../材(实验耗材工具篇)/EdU.md>) 或 Cyclin A 标记复制期细胞。
- 对 ARD、BUDR 与 RING 分离突变体分别检查核小体结合、BRCA1 结合和 HR 功能。
- 将损伤募集与 RPA、RAD51、HR reporter 配对，避免把单一焦点当作完整通路。
- 做药物敏感性时同时加入野生型回补、表达量匹配和长期克隆形成。

## 常见误读与 troubleshooting

| 观察 | 不应立即得出的结论 | 优先排查 |
| --- | --- | --- |
| BARD1 条带减少 | 一定是转录下降 | BRCA1 状态、蛋白降解、截短、抗体表位和制样 |
| BARD1 focus 减少 | H4K20me0 识别一定损坏 | RNF168/H2AK15ub、细胞周期、损伤时点与预抽提 |
| BRCA1 共沉淀正常 | BARD1 功能完整 | ARD/BUDR 核小体读取、RAD51 focus 与 HR reporter |
| RAD51 focus 恢复 | BRCA1–BARD1 所有功能恢复 | HR 完成、复制叉保护、染色体稳定性与长期存活 |
| 过表达突变体有焦点 | 该变异为良性 | 表达量伪影、内源蛋白竞争和功能性回补结果 |

## 小结

BARD1 是 BRCA1–BARD1 复合物的结构伙伴、E3 连接酶成员和染色质读取器。它通过 H2AK15ub 加 H4K20me0 的多价识别，把 BRCA1–BARD1 导向适合 HR 的复制后染色质；实验上应把蛋白稳定、BRCA1 结合、核小体读取、损伤募集、RAD51 装载与 HR 完成分层验证。

## 参考来源

- [Baer and Ludwig, The BRCA1/BARD1 heterodimer, a tumor suppressor complex with ubiquitin E3 ligase activity, Current Opinion in Genetics & Development, 2002](https://doi.org/10.1016/S0959-437X(01)00269-6)
- [Nakamura et al., H4K20me0 recognition by BRCA1-BARD1 directs homologous recombination to sister chromatids, Nature Cell Biology, 2019](https://doi.org/10.1038/s41556-019-0282-9)
- [Hu et al., Structural insight into BRCA1-BARD1 complex recruitment to damaged chromatin, Molecular Cell, 2021](https://doi.org/10.1016/j.molcel.2021.05.010)
- [Becker et al., BARD1 reads H2A lysine 15 ubiquitination to direct homologous recombination, Nature, 2021](https://doi.org/10.1038/s41586-021-03776-w)
- [Wang et al., Crucial roles of the BRCA1-BARD1 E3 ubiquitin ligase activity in homology-directed DNA repair, Molecular Cell, 2023](https://doi.org/10.1016/j.molcel.2023.09.015)
