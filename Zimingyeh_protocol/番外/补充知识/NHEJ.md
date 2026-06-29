# NHEJ

NHEJ（non-homologous end joining，非同源末端连接）是一类不需要长同源供体、直接处理并连接 [DNA双链断裂](DNA双链断裂.md)（DNA double-strand break，DSB）两端的修复方式。在 [CRISPR-Cas9](CRISPR-Cas9.md) 实验中，它是产生许多 [indel](indel.md)（insertion/deletion，插入/缺失）和 [knockout（基因敲除）](基因敲除.md) 等位基因的主要来源之一。

![CRISPR-Cas9 双链断裂修复分流](../../z_asset/番外/补充知识/DNA双链断裂修复/crispr-dsb-repair-pathways.png)

图：Cas9 双链断裂后可进入 classical NHEJ（经典 NHEJ，c-NHEJ）、[MMEJ](MMEJ.md)（microhomology-mediated end joining，微同源介导末端连接）/ TMEJ（theta-mediated end joining，θ 聚合酶介导末端连接）或 [HDR](HDR.md)（homology-directed repair，同源定向修复）。c-NHEJ 既可能精准重连，也可能产生小 indel；MMEJ 倾向形成带微同源特征的缺失；HDR 依赖同源模板。本图由 Image2 / image-generation model 生成，用于个人学习示意。

## 最重要的概念纠正

NHEJ 常被简单称为“易错修复”，但这不等于每次都会制造突变。若断端结构兼容，c-NHEJ 可以直接、精准地重新连接；若切口被精准重连而 Cas9/sgRNA 仍存在，Cas9 可能再次切割，直到产生阻断再次识别的变化、Cas9 活性下降或系统被清除。

实验中观察到的 indel 谱也不是完全随机。大规模位点分析显示，局部 DNA 序列可显著影响主要插入/缺失类型，同一 guide 的修复谱在重复实验中往往具有可重现偏好。参考：[van Overbeek et al., Molecular Cell, 2016](https://doi.org/10.1016/j.molcel.2016.06.037)；[Allen et al., Nature Biotechnology, 2018](https://doi.org/10.1038/nbt.4317)。

## c-NHEJ 的基本步骤

### 识别和保护断端

Ku70/Ku80 heterodimer（Ku70/Ku80 异源二聚体）快速结合 DNA 断端，限制过度降解并为其他 NHEJ 因子提供装配平台。DNA-PKcs（DNA-dependent protein kinase catalytic subunit，DNA 依赖性蛋白激酶催化亚基）随后参与断端复合体和信号调节。

### 对齐和必要的断端加工

若两端可直接连接，系统可以尽量少加工；若存在不兼容突出端、受损碱基或缺口，则 Artemis、Pol μ、Pol λ 等因子可能参与切除、补平或填补。断端加工是产生小插入或缺失的重要来源。

### 最终连接

XRCC4、XLF 和 DNA ligase IV（DNA 连接酶 IV，LIG4）组织并连接断端。Ku 对 XRCC4-LIG4 的招募是经典 NHEJ 连接步骤的重要部分。参考：[Nick McElhinny et al., Molecular and Cellular Biology, 2000](https://doi.org/10.1128/MCB.20.9.2996-3003.2000)。

## c-NHEJ 与 MMEJ 不应混为一谈

| 特征 | c-NHEJ | MMEJ / TMEJ |
| --- | --- | --- |
| 英文全称 | classical non-homologous end joining，经典非同源末端连接 | microhomology-mediated end joining / theta-mediated end joining，微同源介导末端连接 / θ 聚合酶介导末端连接 |
| 是否需要末端切除 | 通常较少 | 需要暴露短微同源序列 |
| 代表因子 | Ku70/80、DNA-PKcs、XRCC4、XLF、LIG4 | POLQ（DNA polymerase theta，DNA 聚合酶 θ）等 |
| 常见结果 | 精准重连、小插入、小缺失 | 微同源两端之间的序列缺失 |
| 在 CRISPR 结果中的意义 | 贡献大量小 indel | 产生部分可预测缺失，也可能参与较大缺失 |

实验报告若只写“NHEJ 产生 indel”，会掩盖不同末端连接机制。分析 deletion junction（缺失连接点）附近是否存在 microhomology（微同源序列），有助于判断 MMEJ/TMEJ 的贡献，但不能只凭一条序列就绝对判定通路。

## NHEJ 如何形成基因敲除

Cas9 通常在编码区切割后，由末端连接产生不同 indel。若 indel 长度不是 3 的倍数，可能造成 frameshift mutation（移码突变），引入提前终止密码子并降低功能蛋白；若是 3 的倍数，则可能形成 in-frame indel（框内插入/缺失），保留部分蛋白功能。

因此“检测到 indel”不等于“完成基因敲除”：

- pooled population（混合细胞群）中可能同时存在野生型、不同 indel 和多等位基因组合。
- in-frame indel 可能不破坏关键结构域。
- mRNA 可能因 nonsense-mediated decay（无义介导的 mRNA 降解）下降，也可能保持不变。
- 蛋白抗体可能仍识别截短或残留片段。

可靠结论需要基因型、蛋白和功能层面的闭环验证。

## 结果为什么会受靶序列影响

Cas9 断端并非总是被细胞以完全相同方式处理。切口附近的重复碱基、短微同源序列、局部序列组成和断端结构会改变插入/缺失偏好。不同细胞类型和 DNA repair background（DNA 修复背景）也会改变各通路的相对贡献。

Brinkman 等测量了细胞内 Cas9 断裂修复动力学，发现不同位点的修复速度和精准度存在差异，且 c-NHEJ 与 MMEJ 都可贡献错误修复。参考：[Brinkman et al., Molecular Cell, 2018](https://doi.org/10.1016/j.molcel.2018.04.016)。

## 实验设计与验证逻辑

### 靶点选择不能只看切割评分

若目标是 knockout，应同时考虑外显子是否覆盖关键转录本、切口是否靠近关键结构域、预测 frameshift 比例以及可能的微同源缺失。重要项目应准备多个独立 sgRNA，而不是押注单一修复谱。

### 不要只使用短扩增子筛查

短 amplicon（扩增子）测序适合量化局部小 indel，但可能漏掉破坏 primer-binding site（引物结合位点）的大缺失、倒位或复杂重排。关键克隆可结合外侧引物、长片段 PCR、拷贝数检测或更高阶测序策略。

Cas9 断裂后出现 kilobase-scale deletion（千碱基级缺失）和复杂重排已有实验报道，因此“局部 Sanger 峰图正常”不能自动排除更大结构改变。参考：[Kosicki et al., Nature Biotechnology, 2018](https://doi.org/10.1038/nbt.4192)。

### 多克隆和救援实验减少误判

单克隆化会固定一个具体修复结果，但也会引入 clone-specific effect（克隆特异效应）。至少比较多个独立克隆、多个 sgRNA，并在关键结论中加入 rescue experiment（救援实验）或正交扰动方法。

## 常见异常与 troubleshooting

| 结果 | 可能原因 | 优先检查 |
| --- | --- | --- |
| 切割信号强但 knockout 弱 | 主要为框内 indel、单等位基因改变或蛋白半衰期长 | 等位基因组成、蛋白结构域和时间点 |
| Sanger 峰图非常混乱 | 混合细胞群包含多个 indel | amplicon NGS、单克隆或分解算法 |
| PCR 扩增失败 | 大缺失、引物位点破坏或 PCR 条件问题 | 更外侧引物、长片段 PCR、拷贝数检测 |
| 重复实验出现不同主要 indel | 细胞状态、递送、选择或测序深度不同 | 统一条件并增加生物学重复 |
| 只有一个克隆有表型 | 克隆效应、脱靶或复杂重排 | 多克隆、多 guide、救援实验 |
| 试图抑制 NHEJ 后细胞状态变差 | DNA 修复被扰动导致毒性或基因组不稳定 | 减少干预强度并重新评估风险收益 |

## NHEJ 与 HDR 对比

| 维度     | NHEJ / end joining  | HDR                      |
| ------ | ------------------- | ------------------------ |
| 外源供体   | 不要求                 | 精准编辑通常需要 [供体模板](供体模板.md) |
| 主要结果   | 精准重连、indel、缺失或复杂连接  | 按同源模板复制目标改变              |
| 细胞周期依赖 | 可在更广的细胞周期阶段发生       | 通常在 S/G2 更有利             |
| 常见用途   | knockout、删除、非模板插入策略 | 点突变、标签和定点 knock-in       |
| 主要风险   | 等位基因混杂、大缺失、重排       | 效率低、供体随机整合、假阳性           |

## 小结

NHEJ 是一个保护和重连 DNA 断端的修复系统，不是专门替实验制造随机突变的工具。CRISPR knockout 利用了它在反复切割和断端加工中产生的 indel，但最终结果由 c-NHEJ、MMEJ、局部序列和细胞背景共同决定。验证时必须从“小 indel”之外继续检查等位基因、蛋白功能和潜在结构变化。

## 参考来源

- [Nick McElhinny et al., Ku recruits the XRCC4-ligase IV complex to DNA ends, Molecular and Cellular Biology, 2000](https://doi.org/10.1128/MCB.20.9.2996-3003.2000)
- [van Overbeek et al., DNA Repair Profiling Reveals Nonrandom Outcomes at Cas9-Mediated Breaks, Molecular Cell, 2016](https://doi.org/10.1016/j.molcel.2016.06.037)
- [Brinkman et al., Kinetics and Fidelity of the Repair of Cas9-Induced Double-Strand DNA Breaks, Molecular Cell, 2018](https://doi.org/10.1016/j.molcel.2018.04.016)
- [Kosicki et al., Repair of double-strand breaks induced by CRISPR-Cas9 leads to large deletions and complex rearrangements, Nature Biotechnology, 2018](https://doi.org/10.1038/nbt.4192)
- [Allen et al., Predicting the mutations generated by repair of Cas9-induced double-strand breaks, Nature Biotechnology, 2018](https://doi.org/10.1038/nbt.4317)
- [Liu et al., Dynamic assemblies and coordinated reactions of non-homologous end joining, Nature, 2025](https://doi.org/10.1038/s41586-025-09078-9)
