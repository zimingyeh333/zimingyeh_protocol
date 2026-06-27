# CRISPRi

CRISPRi（CRISPR interference，CRISPR 干扰）是一种由 [sgRNA](sgRNA.md) 引导、利用 [dCas9](dCas9.md) 在特定 DNA 位点抑制转录的可编程基因沉默技术。它通常不切断 DNA，也不依赖 indel 改变基因序列。

![CRISPRi 与 CRISPRa 机制对比](../../z_asset/番外/补充知识/CRISPR调控/crispri-vs-crispra.png)

图：CRISPRi 与 [CRISPRa](CRISPRa.md) 都以 dCas9-sgRNA 为定位核心；CRISPRi 招募抑制效应器或直接阻碍转录，CRISPRa 则招募激活效应器。两者的 DNA 靶序列通常保持完整。本图由 Image2 / image-generation model 生成，用于个人学习示意。

## 发展简史

2013 年，Qi 等将 Cas9 的两个核酸酶结构域失活，获得仍能被 RNA 引导并结合 DNA、但不再切割 DNA 的 catalytically dead Cas9（催化失活 Cas9，dCas9），并把这种序列特异性转录抑制方式命名为 CRISPRi。参考：[Qi et al., Cell, 2013](https://doi.org/10.1016/j.cell.2013.02.022)。

随后，Gilbert 等将 dCas9 与转录抑制结构域组合，使 CRISPRi 能在哺乳动物细胞中产生更强、更稳定的抑制，并与 CRISPRa 一起扩展到全基因组功能筛选。参考：[Gilbert et al., Cell, 2014](https://doi.org/10.1016/j.cell.2014.09.029)。

## 适合解决什么问题

- 研究必需基因：完全 [knockout（基因敲除）](基因敲除.md) 可能使细胞死亡，而 CRISPRi 可提供部分、可调的表达降低。
- 做 [loss-of-function screen（功能缺失筛选）](<../../用(实验流程内容篇)/CRISPR筛选.md>)：在不制造 DNA 双链断裂的情况下系统性降低基因表达。
- 抑制蛋白编码基因或长链非编码 RNA 的转录。
- 比较不同表达剂量与表型之间的关系。
- 对怀疑存在 DNA damage response（DNA 损伤反应）干扰的实验，提供不依赖切割的正交策略。

CRISPRi 改变的是转录输出，不是基因序列。若实验问题要求永久破坏编码序列、建立稳定突变等位基因或分析 DNA 修复结果，应回到 [CRISPR-Cas9](CRISPR-Cas9.md) / [基因编辑](<../../用(实验流程内容篇)/基因编辑.md>) 路线。

## 核心原理

### dCas9 负责定位，不负责切割

以常用 Streptococcus pyogenes Cas9（酿脓链球菌 Cas9，SpCas9）为例，D10A 与 H840A 突变分别破坏 RuvC 和 HNH 核酸酶活性。dCas9 仍可在 sgRNA 引导下识别 [PAM序列](PAM序列.md) 邻近的靶 DNA，但不会形成典型 DNA double-strand break（DNA 双链断裂）。

### 抑制可以来自两层机制

| 模式 | 主要机制 | 常见场景 |
| --- | --- | --- |
| dCas9 单独结合 | 产生 steric hindrance（空间位阻），妨碍 RNA polymerase（RNA 聚合酶）起始或延伸 | 细菌、人工启动子、部分强结合位点 |
| dCas9-抑制效应器 | dCas9 将 KRAB 等抑制结构域带到启动子附近，改变局部染色质并降低转录 | 哺乳动物细胞中更常见 |

KRAB（Krüppel-associated box，Krüppel 相关盒）是常用转录抑制结构域。它并不是 sgRNA 的一部分，而是与 dCas9 融合或通过招募模块被带到靶位点。

## 系统组成

| 组成 | 作用 | 需要记录的变量 |
| --- | --- | --- |
| dCas9 或 dCas9-抑制融合蛋白 | 结合靶 DNA 并产生抑制 | 蛋白版本、效应器、载体、是否诱导表达 |
| sgRNA | 决定定位序列 | spacer 序列、靶向转录本、PAM、设计工具版本 |
| 递送系统 | 将调控组件送入细胞 | 质粒、病毒、稳定细胞系或其他方式 |
| 对照 | 区分特异抑制与系统背景 | non-targeting、阳性 sgRNA、多个独立 sgRNA |
| 读出 | 判断是否真的抑制及其后果 | RNA、蛋白、细胞表型和时间点 |

## sgRNA 设计逻辑

### 先确定真正的转录起始位点

CRISPRi 通常对 [转录起始位点](转录起始位点.md)（transcription start site，TSS）附近的靶向最敏感。一个基因可能具有多个启动子、多个 TSS 和细胞类型特异性转录本；如果使用错误 TSS，即使 sgRNA 与基因组完全匹配，也可能几乎没有抑制。

### 不把固定距离窗口当成普遍定律

经典筛选和后续文库研究表明，sgRNA 相对 TSS 的位置、局部染色质可及性和序列特征共同影响活性。不同 dCas9 效应器、物种、启动子结构和设计工具采用的经验窗口并不完全相同，因此应优先使用与所选系统匹配的设计模型，并准备多个候选 sgRNA。参考：[Horlbeck et al., eLife, 2016](https://doi.org/10.7554/eLife.19760)。

### 至少使用多个独立 sgRNA

一个 sgRNA 无效不能证明基因不影响表型；一个 sgRNA 有表型也不能排除脱靶或局部调控效应。关键结论应由多个独立 sgRNA、RNA/蛋白验证和必要的 rescue experiment（救援实验）共同支持。

## 实验工作流

### 明确问题和成功标准

先定义希望降低哪个转录本、预期降低到什么程度、何时检测，以及最终读出是 RNA、蛋白还是功能表型。若只定义“转入 CRISPRi 系统”，后续很难判断失败发生在递送、转录抑制还是表型层面。

### 选择 CRISPRi 架构

哺乳动物细胞通常优先考虑经过验证的 dCas9-KRAB 或升级版抑制系统；细菌中 dCas9 的空间阻挡本身可能已经足够。固定系统后再选文库、设计工具和 sgRNA，避免把不同架构的经验参数直接混用。

### 建立递送条件和对照

可先构建稳定表达 dCas9-效应器的细胞，再递送 sgRNA；也可同时递送全部组件。稳定系统适合重复实验和筛选，但需要确认 dCas9 表达均一性及其对细胞状态的影响。递送基础见 [细胞转染](<../../用(实验流程内容篇)/细胞转染.md>)。

最小对照应包括：

- non-targeting sgRNA（非靶向 sgRNA）：估计递送和 dCas9 系统本身的背景。
- 已知有效的 positive-control sgRNA（阳性对照 sgRNA）：确认 CRISPRi 系统可工作。
- 多个靶基因 sgRNA：区分序列特异效应与单条 guide 偶然效应。
- 未处理或载体对照：根据递送方式判断毒性和选择压力。

### 分层验证

先用 [RT-qPCR](<../../用(实验流程内容篇)/RT-qPCR.md>) 验证目标转录本是否下降，再用 [Western blot](<../../用(实验流程内容篇)/Western blot.md>)、[流式细胞术](<../../用(实验流程内容篇)/流式细胞术.md>) 或其他方法验证蛋白。最后才解释细胞表型。mRNA 下降而蛋白不变并不矛盾，可能来自蛋白半衰期长、抑制程度不足或检测时间太早。

## 结果解析与 troubleshooting

| 结果 | 可能原因 | 优先检查 |
| --- | --- | --- |
| 多条 sgRNA 均不抑制 | TSS 注释不适合该细胞、dCas9 未表达、递送失败 | dCas9 表达、阳性对照、转录本/TSS |
| 只有一条 sgRNA 有效 | guide 活性差异或单条 guide 脱靶 | 扩充 sgRNA、做正交验证 |
| mRNA 明显下降，蛋白变化小 | 蛋白稳定、检测过早、抗体读出不敏感 | 延长时间、换蛋白读出、检查半衰期 |
| 抑制成功但无表型 | 基因冗余、抑制程度不足、模型不依赖该基因 | 测蛋白、组合扰动、检查实验条件 |
| 所有 sgRNA 都影响细胞状态 | dCas9/载体负担、筛选压力或递送毒性 | non-targeting 对照、降低表达/筛选压力 |
| 撤去系统后表达未立即恢复 | 蛋白和表观状态恢复较慢，或系统仍在表达 | 检查组件清除时间并做时间梯度 |

## CRISPRi 与相近策略对比

| 策略 | 作用层级 | 是否改变 DNA 序列 | 典型优势 | 主要局限 |
| --- | --- | --- | --- | --- |
| CRISPRi | 转录起始/延伸 | 通常否 | 可编程、适合必需基因和筛选 | 依赖 TSS、染色质和 dCas9 系统 |
| [RNAi](RNAi.md) | mRNA 稳定性/翻译 | 否 | 递送成熟、适合短期 knockdown | seed-mediated off-target，抑制常不完全 |
| CRISPR-Cas9 knockout | DNA 序列 | 是 | 可获得永久遗传改变 | DNA 断裂、indel 混杂、必需基因可能致死 |
| CRISPRa | 转录激活 | 通常否 | 上调内源基因 | 不是 loss-of-function 工具 |

“可逆”应理解为依赖 dCas9/sgRNA/效应器持续存在，而不是保证撤除后立即完全恢复。某些强表观遗传效应器可能产生较长的恢复时间，因此可逆性也要通过实验验证。

## 小结

CRISPRi 的核心是“定位并压低转录”，不是“把基因剪坏”。它最适合需要可调 loss-of-function、必需基因研究和大规模筛选的场景。可靠结果依赖正确 TSS、匹配的效应器架构、多个 sgRNA、分层表达验证和恰当对照。

## 参考来源

- [Qi et al., Repurposing CRISPR as an RNA-guided platform for sequence-specific control of gene expression, Cell, 2013](https://doi.org/10.1016/j.cell.2013.02.022)
- [Gilbert et al., Genome-Scale CRISPR-Mediated Control of Gene Repression and Activation, Cell, 2014](https://doi.org/10.1016/j.cell.2014.09.029)
- [Horlbeck et al., Compact and highly active next-generation libraries for CRISPR-mediated gene repression and activation, eLife, 2016](https://doi.org/10.7554/eLife.19760)
- [Sanson et al., Optimized libraries for CRISPR-Cas9 genetic screens with multiple modalities, Nature Communications, 2018](https://doi.org/10.1038/s41467-018-07901-8)
