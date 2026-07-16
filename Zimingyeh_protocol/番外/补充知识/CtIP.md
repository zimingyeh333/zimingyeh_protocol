# CtIP

CtIP（C-terminal binding protein-interacting protein，C 末端结合蛋白相互作用蛋白；基因名 `RBBP8`）是 [DNA末端切除](DNA末端切除.md)起始阶段的关键调控因子。它与 [MRN复合物](MRN复合物.md)、BRCA1–BARD1、CDK/ATM 依赖性磷酸化网络共同决定 DSB 末端是否从“可直接连接的双链末端”转向“可进入同源重组的 3′ ssDNA 底物”。

一句话理解：CtIP 不是长距离切除的主力核酸酶，而是帮助 MRN 在合适时间、合适断端上打开切除入口的许可因子。

![CtIP 参与末端切除后的 HR 与 SSA 分流](../../z_asset/番外/补充知识/CtIP/ctip-end-resection-context.png)

> 图：MRN–CtIP 启动 5′ end resection（5′ 端切除）后产生 RPA 包被的 3′ ssDNA，后续可进入 BRCA2–RAD51 依赖的 HR，也可能在存在直接重复序列时进入 SSA。该图由 Image2 / image-generation model 生成，用于个人学习示意。CtIP 的出现说明“切除入口被打开”，但不等于修复已经选择并完成 HR。

## 名称与定位

CtIP 最早因与 CtBP（C-terminal binding protein，C 末端结合蛋白）互作而得名；在人类基因组中由 `RBBP8` 编码。文献中常见写法包括：

- CtIP：人和哺乳动物文献最常见。
- Sae2：budding yeast（芽殖酵母）功能类似因子。
- Ctp1：fission yeast（裂殖酵母）功能类似因子。

这些名称不能完全互换。Sae2、Ctp1 与人 CtIP 在“促进 MRE11 依赖切除起始”上有功能同源性，但结构域、调控位点和细胞周期控制并不完全相同。

## CtIP 在 DSB 修复中的核心任务

### 与 MRN 一起启动切除

MRN 结合 DNA 断端后，CtIP 帮助 MRE11 在断端内侧进行 endonucleolytic incision（内切性切口），尤其适合处理被蛋白或化学基团阻断的复杂断端。随后 MRE11 可向断端方向回切，EXO1 或 BLM–DNA2 等系统再继续长距离切除。

人 CtIP 促进 DNA 末端切除和 HR 的经典证据见 [Sartori et al., *Nature*, 2007](https://doi.org/10.1038/nature06337)；MRN–CtIP 与切除机制的综述可参考 [Cejka, *Journal of Biological Chemistry*, 2015](https://doi.org/10.1074/jbc.R115.649350)。

### 把细胞周期信息传给修复路径

CtIP 活性受 CDK（cyclin-dependent kinase，细胞周期蛋白依赖性激酶）调控。S/G2 期有姐妹染色单体可作为模板，同时 CDK 依赖性磷酸化提高 CtIP 介导切除的能力，所以 CtIP 是“细胞周期允许 HR”的重要接口之一。

人 CtIP 的 CDK 位点与 S/G2 期切除控制见 [Huertas and Jackson, *Journal of Biological Chemistry*, 2009](https://doi.org/10.1074/jbc.M808906200)。这也解释了为什么同一个 DSB 在 G1 和 S/G2 期可能走向不同修复路径。

### 对抗 53BP1–RIF1–Shieldin 末端保护

在 DSB 后，[53BP1](53BP1.md)–[RIF1](RIF1.md)–[Shieldin复合物](Shieldin复合物.md)倾向保护断端并限制切除；BRCA1–CtIP 则有助于削弱这层屏障，使 MRN 和长距离切除系统进入。这个调控不是简单“谁多谁赢”，而是受细胞周期、染色质标记、断端复杂度和上游 ATM 信号共同影响。

BRCA1–CtIP 与 53BP1–RIF1 的细胞周期依赖性调控可参考 [Escribano-Díaz et al., *Molecular Cell*, 2013](https://doi.org/10.1016/j.molcel.2013.01.001)。

## CtIP 不是“HR 专用开关”

CtIP 促进切除，但切除后的路径仍可分流：

| 切除后状态 | 可能路径 | CtIP 的意义 |
| --- | --- | --- |
| 产生短至中等长度 ssDNA | MMEJ/TMEJ、部分 end joining 变体 | 提供微同源暴露机会 |
| 产生 RPA 包被 3′ ssDNA | HR 或 SSA 前体 | 为 RAD51 或重复序列退火建立底物 |
| RAD51 成功替换 RPA | [同源重组](同源重组.md) | CtIP 是上游必要条件之一，但不是 RAD51 装载因子 |
| 直接重复序列暴露 | SSA | 可能产生大片段缺失 |

因此，在实验中看到 CtIP focus、RPA 增加或 ssDNA 增加，只能说明末端被推向切除状态，不能单独证明高保真 HR 已经完成。

## 与 BRCA1 的关系

CtIP 与 [BRCA1](BRCA1.md)有功能联系，但不能把 CtIP 的全部功能都写成“BRCA1 的一个下游执行蛋白”。更准确的理解是：

- BRCA1–BARD1 有助于在 S/G2 期解除 53BP1 轴的末端保护。
- CtIP 与 MRN 共同建立切除入口。
- BRCA1 与 CtIP 的互作、CtIP 的 CDK 磷酸化和 MRN 功能可在不同实验系统中被部分分离。

Polato 等研究提示，CtIP 促进切除和 HR 的核心功能不应完全等同于 BRCA1 结合本身。参考：[Polato et al., *Journal of Experimental Medicine*, 2014](https://doi.org/10.1084/jem.20131939)。

## 与 Ku70–Ku80 的竞争

[Ku70-Ku80复合物](Ku70-Ku80复合物.md)快速占据未切除断端并偏向 c-NHEJ；CtIP–MRN 则推动断端从双链末端变为 ssDNA 中间体。二者竞争的不是同一个“按钮”，而是断端物理状态：

| 轴 | Ku70–Ku80 占优 | CtIP–MRN 占优 |
| --- | --- | --- |
| 断端状态 | 保持可连接的双链末端 | 产生 3′ ssDNA |
| 典型时期 | G0/G1 更常见 | S/G2 更有利 |
| 主要路径 | c-NHEJ | HR、SSA、MMEJ/TMEJ |
| 常见读数 | DNA-PKcs、XRCC4–LIG4、NHEJ reporter | RPA、RAD51、native BrdU、END-seq |
| 风险 | 错误连接或 indel | 过度切除、大片段缺失或复制压力混淆 |

## 实验中如何观察 CtIP

| 问题 | 推荐读数 | 能回答什么 | 关键限制 |
| --- | --- | --- | --- |
| 蛋白是否存在 | CtIP [Western blot](<../../用(实验流程内容篇)/Western blot.md>) | 总量、敲低或降解效率 | CtIP 条带和修饰状态可能复杂 |
| 是否被磷酸化调控 | p-CtIP 位点抗体、CDK/ATM 抑制 | 细胞周期和损伤信号输入 | 位点选择决定解释范围 |
| 是否进入损伤位点 | [免疫荧光](<../../用(实验流程内容篇)/免疫荧光.md>)、激光微照射 | 损伤募集 | focus 不等于切除长度 |
| 是否启动切除 | RPA、native BrdU、ssDNA mapping、END-seq | ssDNA 是否形成 | 复制压力也会产生 RPA/ssDNA |
| 是否进入 HR | RAD51 focus、DR-GFP、基因转换 | 是否完成下游 HR 步骤 | 需要 S/G2 分层和损伤输入控制 |
| 是否影响路径选择 | NHEJ/HR reporter、断端测序 | 路径输出变化 | reporter 位点可能不代表内源基因组 |

### 推荐的证据组合

- 同时检测 CtIP、RPA、RAD51，而不是只看一个焦点。
- 用 EdU、Cyclin A 或细胞周期同步把 G1 和 S/G2 分开。
- 配合 MRN、BRCA1、53BP1/RIF1/Shieldin 读数，判断是切除启动问题还是末端保护问题。
- 使用野生型 CtIP 回补和关键磷酸化/互作突变体，区分总蛋白缺失与调控位点功能。

## 常见误读与 troubleshooting

| 观察 | 不应立即得出的结论 | 优先排查 |
| --- | --- | --- |
| CtIP focus 明显 | HR 已经发生 | RPA、RAD51、HR reporter 和修复产物 |
| RPA 增加 | CtIP 一定过度活跃 | 复制压力、核苷酸缺乏、S 期比例 |
| CtIP 敲低后 RAD51 下降 | BRCA2 一定异常 | 切除不足、细胞周期变化、损伤输入 |
| CtIP 缺失后 NHEJ 增强 | 所有断端都更快修复 | 错误连接、复杂断端无法处理和长期染色体异常 |
| PARP 抑制剂敏感性变化 | 只由 HR 改变解释 | 复制叉、细胞周期、药物摄取和一般生长缺陷 |

## 小结

CtIP 是 DSB 末端切除的启动许可因子，把 MRN 核酸酶、细胞周期和 BRCA1/53BP1 路径选择网络连接起来。它的核心意义不是“代表 HR”，而是把断端推入可被 RPA 包被、可继续走向 HR/SSA/MMEJ 的 ssDNA 状态；判断下游路径必须继续观察 RAD51、修复产物和细胞周期背景。

## 参考来源

- [Sartori et al., Human CtIP promotes DNA end resection, *Nature*, 2007](https://doi.org/10.1038/nature06337)
- [Huertas and Jackson, Human CtIP mediates cell cycle control of DNA end resection and double strand break repair, *Journal of Biological Chemistry*, 2009](https://doi.org/10.1074/jbc.M808906200)
- [Escribano-Díaz et al., A cell cycle-dependent regulatory circuit composed of 53BP1-RIF1 and BRCA1-CtIP controls DNA repair pathway choice, *Molecular Cell*, 2013](https://doi.org/10.1016/j.molcel.2013.01.001)
- [Polato et al., CtIP-mediated resection is essential for viability and can operate independently of BRCA1, *Journal of Experimental Medicine*, 2014](https://doi.org/10.1084/jem.20131939)
- [Cejka, DNA end resection: nucleases team up with the right partners to initiate homologous recombination, *Journal of Biological Chemistry*, 2015](https://doi.org/10.1074/jbc.R115.649350)
