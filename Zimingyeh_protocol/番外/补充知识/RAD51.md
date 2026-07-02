# RAD51

RAD51（RAD51 recombinase，RAD51 重组酶）是真核 RecA-family recombinase（RecA 家族重组酶）的核心成员。它在单链 DNA 上聚合成 ATP 调控的 nucleoprotein filament（核蛋白丝），执行 [同源重组](同源重组.md) 的 homology search（同源搜索）和 strand invasion（链侵入）。

![BRCA2 介导 RAD51 成丝与同源搜索](../../z_asset/番外/补充知识/BRCA2与RAD51/brca2-rad51-handoff.png)

图：[RPA](RPA.md) 首先保护切除形成的 3′ ssDNA；[PALB2](PALB2.md)–[BRCA2](BRCA2.md) 轴帮助 RAD51 取代 RPA 并形成连续核蛋白丝。RAD51 filament 搜索同源双链并形成 D-loop；BRCA2–RAD51 还参与复制叉保护。图中 BRCA2 是介质，真正执行同源配对和链交换的是 RAD51。本图由 Image2 / image-generation model 生成，用于个人学习示意。

## RAD51 工作的三个阶段

### Presynapsis：形成突触前核蛋白丝

[DNA 末端切除](DNA末端切除.md) 产生 RPA 包被的 3′ ssDNA。由于 RPA 对 ssDNA 亲和力高，RAD51 不能仅靠自身高效、选择性地完成置换；BRCA2、PALB2 和 [RAD51 旁系同源蛋白](RAD51旁系同源蛋白.md) 等 mediator（介质蛋白）帮助 RAD51 在正确底物上成核、延伸并稳定。

RAD51 filament 必须足够连续和动态：缺口、错误装载到 dsDNA、过早拆解或过度稳定都可能损害后续步骤。因此“RAD51 结合 DNA 越多越好”并不成立。

### Synapsis：同源搜索与链侵入

RAD51–ssDNA filament 接触候选同源双链，检测序列互补性，并使 3′ ssDNA 侵入供体双链形成 D-loop（displacement loop，置换环）。人 RAD51 在体外可促进 ATP 依赖的同源配对和链转移，奠定了其作为人类核心重组酶的直接生化证据。参考：[Baumann et al., Cell, 1996](https://doi.org/10.1016/S0092-8674(00)81394-X)。

D-loop 只是中间体，不是最终修复产物。侵入的 3′-OH 为 DNA synthesis（DNA 合成）提供引物端，随后可进入 [SDSA](SDSA.md)、double Holliday junction（双 Holliday 连接体）相关路径或 [BIR](BIR.md) 等不同结果。

### Postsynapsis：拆除 RAD51 并完成后续反应

RAD51 必须在适当时间从 DNA 上移除，让聚合酶接近 3′ 端并使中间体迁移、退火或解离。[RAD54](RAD54.md) 等 DNA translocase（DNA 转位酶）既可促进早期同源搜索，也参与清除 dsDNA 上的 RAD51。若 RAD51 filament 形成后无法正常拆除，细胞仍可能出现大量 RAD51 focus，却不能高效完成 HR。

HR 的阶段性调控综述见 [Krejci et al., Nucleic Acids Research, 2012](https://doi.org/10.1093/nar/gks270)。

## ATP 在 RAD51 filament 中的作用

RAD51 是 DNA-dependent ATPase（DNA 依赖 ATP 酶）。ATP 结合、核苷酸水解与交换共同调节：

- RAD51 单体间界面和 filament 构象。
- filament 的成核、延伸、稳定与拆除。
- 同源配对、链交换和产物释放。

不宜把它简化为“ATP 只提供能量”。不同物种、突变体、辅因子和体外条件会改变 ATP hydrolysis（ATP 水解）对某一步骤的表观要求；ATPase 缺陷突变也可能形成看似稳定但功能异常的 filament。

## 谁在调控 RAD51

| 调控因子 | 主要作用 | 缺陷后的典型风险 |
| --- | --- | --- |
| BRCA2 | 把 RAD51 定位到 ssDNA、促进 RPA 置换并稳定 filament | RPA 高而 RAD51 focus 低、HR 与叉保护异常 |
| PALB2 | 连接上游 BRCA1 与 BRCA2，并参与 DNA/RAD51 环境组织 | BRCA2/RAD51 募集下降 |
| RAD51B/C/D、XRCC2、XRCC3 | 形成旁系同源复合物，帮助 filament 建立或稳定 | RAD51 focus 和 HR 效率降低 |
| RAD54 | 促进染色质环境中的同源配对、D-loop 处理和后续 RAD51 清除 | RAD51 滞留或后续反应受阻 |
| anti-recombinases（抗重组因子） | 拆除错误、过量或不合时机的 RAD51 filament | 过度重组、重复序列重排或中间体积累 |

这些调控因子说明 RAD51 既需要被促进，也需要被限制。RAD51 过表达可部分掩盖某些装载缺陷，却也可能增加非等位同源重组和基因组不稳定；表达量升高不能自动解释为“修复能力更强”。

## RAD51 在复制叉处的功能

RAD51 不只出现在已经形成 DSB 的位置。在 [复制压力](复制压力.md) 下，它可参与 fork reversal、reversed fork protection（逆转复制叉保护）、复制后 ssDNA gap（单链缺口）处理和复制恢复。

这些功能与经典 HR 共享 RAD51 filament 和多种调控因子，却不一定经过完整的同源模板链侵入—DNA 合成—中间体解析流程。RAD51 在 DNA 复制中的作用与潜在危害综述见 [Wassing and Esashi, Seminars in Cell & Developmental Biology, 2021](https://doi.org/10.1016/j.semcdb.2020.08.010)。

## RAD51、RecA、DMC1 和旁系同源蛋白的区别

| 蛋白/类别 | 主要场景 | 是否核心链交换酶 | 关键区别 |
| --- | --- | --- | --- |
| RAD51 | 真核有丝分裂细胞 HR 与复制相关过程 | 是 | 需要 BRCA2 等真核介质严格调控 |
| RecA | 细菌重组、修复和 SOS 相关过程 | 是 | 是同一家族的细菌成员，不能直接替代细胞实验中的 RAD51 |
| [DMC1](DMC1.md) | 真核减数分裂 | 是 | 偏向减数分裂同源染色体配对，表达和伙伴体系不同 |
| RAD51 paralogs | 真核 HR 辅助网络 | 通常不作为主要链交换催化核心 | 主要帮助 RAD51 filament 建立、稳定和后续处理 |

“RAD51-like”或“RAD51 paralog”不等于该蛋白具有与 RAD51 完全相同的体外链交换能力。

## RAD51 focus 应如何解释

RAD51 immunofluorescence focus（RAD51 免疫荧光焦点）是常用 HR 功能读数，但它代表 RAD51 在可见损伤区域的积累，而不是完成修复的计数器。

| 观察 | 可能解释 |
| --- | --- |
| RPA focus 高、RAD51 focus 低 | 已形成 ssDNA，但 BRCA2/PALB2/RAD51 装载受损 |
| RAD51 focus 正常出现后逐渐消失 | 可能完成装载和后续处理，也可能只是损伤信号解除 |
| RAD51 focus 持续很久 | 损伤持续、同源搜索/后续处理受阻或 filament 清除失败 |
| RAD51 focus 很少 | HRD、细胞不在 S/G2、损伤剂量/时间不合适或技术条件不佳 |
| RAD51 focus 很多 | HR 活跃、损伤负担高、RAD51 过表达或后续拆除异常 |

必须结合 [EdU](<../../材(实验耗材工具篇)/EdU.md>)/Cyclin A 等 S/G2 标记，因为 G1 细胞通常不会形成与 S/G2 相同的 RAD51-HR 反应。只比较“每个视野平均焦点数”而不控制细胞周期，容易把细胞群组成差异误写成 HR 差异。

## 实验中如何观察 RAD51

| 问题 | 推荐读数 | 能回答什么 | 关键限制 |
| --- | --- | --- | --- |
| RAD51 是否表达 | [Western blot](<../../用(实验流程内容篇)/Western blot.md>)、RNA 定量 | 总量和表达变化 | 总量正常不代表可装载或有活性 |
| 是否募集/成丝 | 预抽提后 [免疫荧光](<../../用(实验流程内容篇)/免疫荧光.md>)、染色质分级 | 损伤区域积累与结合池 | focus 不等于成功 HR |
| HR 是否完成 | DR-GFP 等 [报告基因实验](<../../用(实验流程内容篇)/报告基因实验.md>) | 指定断裂体系中的功能性 HR | reporter 对位点、切割和细胞周期敏感 |
| 链交换是否具有生化活性 | purified-protein strand-exchange assay（纯化蛋白链交换实验） | RAD51/辅因子的直接反应能力 | 体外离子、ATP 和蛋白比例不等于细胞环境 |
| 复制叉功能是否改变 | [DNA 纤维实验](<../../用(实验流程内容篇)/DNA纤维实验.md>) | 叉保护、重启与新生链降解 | 需与 HR readout 分开解释 |
| 最终遗传结果是什么 | [测序](<../../用(实验流程内容篇)/测序.md>)、LOH 与结构变异分析 | 修复产物和基因组后果 | 产物不能单独反推出全部中间步骤 |

### 推荐的最小验证组合

- 先确认 RAD51 总量、BRCA2/PALB2 状态和细胞周期组成。
- 以损伤后时间梯度观察 RPA→RAD51→焦点消退，而不是只测单一终点。
- 同时报告 RAD51-positive cells（RAD51 阳性细胞比例）与每个阳性核的焦点分布。
- 把 RAD51 focus 与 HR reporter 或编辑产物配对。
- 若关注复制叉，另加 DNA fiber 和 MRE11 依赖验证。

## 常见误读与 troubleshooting

| 观察 | 不应立即得出的结论 | 优先排查 |
| --- | --- | --- |
| RAD51 focus 增加 | HR 修复效率必然提高 | 损伤负荷、S/G2 比例、焦点持续时间与 reporter HR |
| RAD51 总量不变 | RAD51 通路正常 | 染色质装载、BRCA2、ATPase 状态和 filament 动力学 |
| RAD51 focus 很少 | 细胞没有 DNA 损伤 | γH2AX/RPA、细胞周期、预抽提、固定和抗体条件 |
| RAD51 focus 长期不消失 | HR 持续高效进行 | RAD54/后续合成、filament 清除和未修复损伤 |
| RAD51 过表达挽救存活 | 基因组修复恢复正常 | 错误重组、LOH、结构变异和长期克隆稳定性 |

## 小结

RAD51 是执行同源搜索与链侵入的核心重组酶，但其功能取决于正确时间、正确 DNA 底物和正确 filament 动力学。BRCA2/PALB2 负责装载与稳定，RAD54 和抗重组因子负责推进或拆除；实验上需要把总量、焦点、细胞周期、功能性 HR、复制叉和最终遗传产物分层验证。

## 参考来源

- [Baumann et al., Human Rad51 protein promotes ATP-dependent homologous pairing and strand transfer reactions in vitro, Cell, 1996](https://doi.org/10.1016/S0092-8674(00)81394-X)
- [San Filippo et al., Mechanism of eukaryotic homologous recombination, Annual Review of Biochemistry, 2008](https://doi.org/10.1146/annurev.biochem.77.061306.125255)
- [Jensen et al., Purified human BRCA2 stimulates RAD51-mediated recombination, Nature, 2010](https://doi.org/10.1038/nature09399)
- [Krejci et al., Homologous recombination and its regulation, Nucleic Acids Research, 2012](https://doi.org/10.1093/nar/gks270)
- [Wassing and Esashi, RAD51: beyond the break, Seminars in Cell & Developmental Biology, 2021](https://doi.org/10.1016/j.semcdb.2020.08.010)
