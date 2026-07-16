# MDC1

MDC1（mediator of DNA damage checkpoint 1，DNA 损伤检查点介质蛋白 1）是 DNA 双链断裂应答中的大型染色质支架蛋白。它本身不是切割 DNA 的核酸酶，也不是写入磷酸化或泛素化的酶；它的核心作用是读取 [γH2AX](H2AX与γH2AX.md)，保留 MRN–ATM，并把磷酸化信号交给 [RNF8](RNF8.md) 泛素化级联。

![H2AX-MDC1-RNF8 信号轴参考图](../../z_asset/番外/补充知识/H2AX-MDC1-RNF8信号轴/H2AX-MDC1-RNF8信号轴参考图.png)

> 图源：[MDC1 PST-repeat region promotes histone H2AX-independent chromatin association and DNA damage tolerance](https://doi.org/10.1038/s41467-019-12929-5)，Figure 1，开放获取。图 a 中红色长条为 MDC1：C 端 BRCT 结合 γH2AX，SDTD 重复区联系 NBS1/MRN，ATM 磷酸化的 TQXF 基序招募 RNF8。图 b 显示 MDC1 缺失造成的辐射敏感性可强于 H2AX 缺失，提示 MDC1 还存在一定的 H2AX 非依赖功能。

## 一句话定位

如果把双链断裂应答看成一条信息链：

**MRN 识别断裂 → ATM 写入 γH2AX → MDC1 读取并搭建平台 → RNF8/RNF168 写入泛素信号 → 53BP1、BRCA1 等效应因子选择和执行后续反应。**

MDC1 位于“磷酸化信号放大”和“泛素信号启动”之间，是把上游传感器与下游染色质重塑连接起来的关键节点。

## 主要结构模块

MDC1 是高分子量、多结构域蛋白。不同物种和注释版本的残基编号可能略有差异，设计构建体时应以目标物种的 UniProt/NCBI 序列为准。

| 模块 | 主要结合对象或功能 | 实验破坏后的典型影响 |
|---|---|---|
| FHA（forkhead-associated，叉头相关）结构域 | 识别磷酸化蛋白，并参与 MDC1 复合体组织 | 可能削弱焦点形成、寡聚化及部分检查点功能 |
| SDTD 重复区 | 经 CK2 磷酸化后结合 NBS1 | MRN 在损伤染色质上的保留下降 |
| TQXF 基序簇 | 经 ATM 磷酸化后被 RNF8 的 FHA 结构域读取 | RNF8、RNF168 和 53BP1 下游焦点明显受损 |
| PST（proline-serine-threonine-rich，富脯氨酸-丝氨酸-苏氨酸）重复区 | 促进核小体/染色质结合，并支持部分 H2AX 非依赖功能 | 在特定遗传背景下降低损伤耐受和染色质驻留 |
| tandem BRCT（串联 BRCA1 C-terminal）结构域 | 识别 γH2AX 暴露的 C 端 pSQEY 尾部 | MDC1 难以在典型损伤染色质上有效富集 |

## γH2AX–MDC1 识别为什么要求“自由 C 端”

MDC1 的串联 BRCT 结构域不仅识别 Ser139 的磷酸基团，还识别 H2AX 尾部的末端构型。因此实验中使用磷酸化肽、荧光融合或人工标签时，若改变 γH2AX 的自由羧基末端，可能显著影响结合，不能只确认“Ser139 已被磷酸化”就默认互作完整。

## MDC1 如何放大 ATM 信号

[MRN 复合物](MRN复合物.md)首先帮助 [ATM](ATM通路.md) 在断裂附近活化。ATM 产生 γH2AX 后，MDC1 结合该标记；MDC1 的 SDTD 重复区又与 NBS1 结合，将更多 MRN–ATM 保留在损伤周围。

这形成正反馈：

- 更多 ATM 被保留；
- 更多邻近 H2AX 被磷酸化；
- 更多 MDC1 获得结合位点；
- 损伤信号从微小断口扩展为显微镜下可见的染色质结构域。

因此，MDC1 缺失不一定阻止最初的 ATM 活化，却会明显削弱信号的空间扩展、持续和下游组装。

## MDC1 如何招募 RNF8

DNA 损伤后，ATM 磷酸化 MDC1 上多个 TQXF 基序。RNF8 的 FHA 结构域偏好识别这类含磷酸化苏氨酸的序列，使 RNF8 定位到损伤染色质。

这里有两个常见误区：

- RNF8 不是直接靠结合 γH2AX 到达损伤位点，而是主要读取被磷酸化的 MDC1。
- MDC1 不是泛素连接酶；它只是提供 RNF8 的定位平台，泛素转移由 RNF8 的 RING 结构域及其 E2 酶完成。

## H2AX 非依赖功能

经典模型强调 BRCT–γH2AX 结合，但 MDC1 并非所有功能都严格依赖 H2AX。其 PST 重复区可促进 MDC1 与核小体及染色质结合；在 H2AX 缺失背景中，MDC1 仍可能支持部分 53BP1 聚集和损伤耐受。

这不否定 γH2AX–MDC1 轴的重要性，而是提醒：

- H2AX 缺失与 MDC1 缺失并非完全等价；
- 不能只凭 γH2AX 焦点变化推断 MDC1 所有功能；
- 基因敲除表型应结合结构域互补实验，而非只做单一全长蛋白回补。

## 与相邻节点的区别

| 因子 | 分子角色 | 主要“读取/写入”对象 | 缺失后的核心障碍 |
|---|---|---|---|
| H2AX/γH2AX | 组蛋白变体及其磷酸化状态 | 被 ATM 等激酶写入，被 MDC1 读取 | 损伤周围信号平台缩小，因子保留减弱 |
| MDC1 | 非酶性支架 | 读取 γH2AX；结合 MRN；招募 RNF8 | 磷酸化信号难以放大并转入泛素级联 |
| RNF8 | E3 泛素连接酶 | 读取磷酸化 MDC1，建立上游泛素支架 | RNF168 和下游 53BP1/BRCA1 相关因子难以有效聚集 |

## 实验研究策略

### 免疫荧光与激光微照射

[免疫荧光](<../../用(实验流程内容篇)/免疫荧光.md>)可比较 MDC1 与 γH2AX 的焦点共定位；[激光微照射](<../../用(实验流程内容篇)/激光微照射.md>)可观察 MDC1 在局部损伤轨迹上的募集动力学。

建议至少包含：

- 未损伤基线和损伤后时间梯度；
- γH2AX 与 MDC1 双标；
- MDC1 缺失或敲低验证；
- BRCT 缺失/突变、TQXF 突变或 SDTD 突变中的至少一种机制对照；
- 下游 RNF8、RNF168 或 53BP1 焦点读数。

### Western blot

[Western blot](<../../用(实验流程内容篇)/Western blot.md>)可验证 MDC1 蛋白表达、敲低和回补。MDC1 分子量较大，转膜效率、胶浓度和抗体识别区域均需预先优化。若检测磷酸化迁移变化，应使用磷酸酶抑制剂，并设置总 MDC1 作为参照。

### 免疫共沉淀

[免疫共沉淀](<../../用(实验流程内容篇)/免疫共沉淀.md>)适合验证 MDC1–NBS1、MDC1–RNF8 或结构域依赖互作。DNA 损伤复合体常受染色质和核酸桥接影响，因此需要考虑核酸酶处理、高盐洗涤与输入表达量对照。

### 功能读数

焦点缺陷证明的是“组装异常”，不等同于修复失败。若要支持 MDC1 影响损伤耐受，应加入克隆形成、检查点、染色体异常或修复报告系统等功能读数。

## 结果判读层级

| 观察 | 较稳妥的解释 | 仍需补充的证据 |
|---|---|---|
| γH2AX 正常，MDC1 焦点减少 | γH2AX 写入存在，但 MDC1 读取/保留异常 | MDC1 表达、BRCT 完整性、固定条件 |
| MDC1 焦点正常，RNF8 焦点减少 | TQXF 磷酸化或 RNF8 识别/表达异常 | pTQXF 依赖突变和 RNF8 FHA 对照 |
| MDC1 缺失后 53BP1 焦点下降 | 上游信号平台受损 | RNF8/RNF168、H2AK15ub 及细胞周期信息 |
| MDC1 回补恢复焦点但不恢复存活 | 结构域、表达剂量或焦点之外功能仍异常 | 接近内源水平回补及多结构域互补 |

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理思路 |
|---|---|---|
| MDC1 Western blot 条带弱或转移不全 | 蛋白分子量大、降解或转膜不足 | 低浓度胶/梯度胶；延长湿转；全程低温并加蛋白酶抑制剂 |
| γH2AX 焦点明显但 MDC1 不聚集 | BRCT 识别受损、抗体问题或提取过强 | 使用第二抗体；比较不同固定/预提取条件；做阳性细胞系 |
| MDC1 过表达形成异常核内结构 | 表达量远高于内源水平 | 降低质粒量；使用诱导表达；优先内源标记或低水平稳定株 |
| 共沉淀受核酸酶处理影响很大 | 互作可能由染色质桥接 | 同时报告有/无核酸酶条件，避免直接写成稳定蛋白–蛋白结合 |
| 敲低 MDC1 后 γH2AX 仍存在 | 初始写入与后续放大并非同一层级 | 做早晚时间点和信号面积/强度分析，不只判断阳性或阴性 |

## 关键结论

MDC1 是一个“读磷酸化、搭平台、接泛素化”的非酶性枢纽。研究它时，最有信息量的设计不是只比较一个焦点，而是按层级检查 γH2AX → MDC1 → RNF8/RNF168 → 53BP1/BRCA1，并用结构域突变确定哪一段信号连接发生了故障。

## 参考来源

- Stucki M, et al. MDC1 directly binds phosphorylated histone H2AX to regulate cellular responses to DNA double-strand breaks. *Cell*. 2005. [DOI](https://doi.org/10.1016/j.cell.2005.09.038)
- Lee MS, et al. Structure of the BRCT repeat domain of MDC1 and its specificity for the free COOH-terminal end of the γ-H2AX histone tail. *J Biol Chem*. 2005. [DOI](https://doi.org/10.1074/jbc.C500273200)
- Lou Z, et al. MDC1 maintains genomic stability by participating in the amplification of ATM-dependent DNA damage signals. *Mol Cell*. 2006. [DOI](https://doi.org/10.1016/j.molcel.2005.11.025)
- Melander F, et al. Phosphorylation of SDT repeats in the MDC1 N terminus triggers retention of NBS1 at the DNA damage-modified chromatin. *J Cell Biol*. 2008. [PubMed](https://pubmed.ncbi.nlm.nih.gov/18411307/)
- Wu L, et al. MDC1 regulates intra-S-phase checkpoint by targeting NBS1 to DNA double-strand breaks. *PNAS*. 2008. [DOI](https://doi.org/10.1073/pnas.0802885105)
- Salguero I, et al. MDC1 PST-repeat region promotes histone H2AX-independent chromatin association and DNA damage tolerance. *Nat Commun*. 2019. [DOI](https://doi.org/10.1038/s41467-019-12929-5)
