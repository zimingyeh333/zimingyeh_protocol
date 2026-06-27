# sgRNA

sgRNA（single-guide RNA，单导向 RNA）是把天然 CRISPR-Cas9 系统中的 crRNA（CRISPR RNA，CRISPR RNA）与 tracrRNA（trans-activating CRISPR RNA，反式激活 CRISPR RNA）工程化融合成的一条 RNA，用于同时提供靶序列识别信息和 Cas 蛋白结合骨架。

![sgRNA 与 PAM 靶向识别关系](../../z_asset/番外/补充知识/CRISPR调控/sgrna-pam-target-recognition-v2.png)

图：常用 SpCas9 sgRNA 包含可变的 spacer（间隔区/靶向区）与相对保守的 scaffold（骨架区）。spacer 与 DNA protospacer（原间隔序列）互补，而 [PAM序列](PAM序列.md) 位于靶 DNA 上，不属于 sgRNA。本图由 Image2 / image-generation model 生成，用于个人学习示意。

## 名称关系

| 名称 | 英文全称 | 含义 |
| --- | --- | --- |
| gRNA | guide RNA，引导 RNA | 泛称，可指 sgRNA，也可笼统指 CRISPR 引导 RNA |
| crRNA | CRISPR RNA | 携带靶序列互补信息的天然 RNA 组分 |
| tracrRNA | trans-activating CRISPR RNA | 与 crRNA 配对并帮助 Cas9 装配的天然 RNA 组分 |
| sgRNA | single-guide RNA | 将 crRNA 与 tracrRNA 功能融合到单条工程化 RNA |
| crRNA:tracrRNA | 双 RNA 系统 | 两条独立 RNA 退火后共同引导 Cas9 |

2012 年，Jinek 等证明 crRNA:tracrRNA 可被工程化为一条 chimeric single-guide RNA（嵌合单导向 RNA），并通过改变其靶向序列重新编程 Cas9。参考：[Jinek et al., Science, 2012](https://doi.org/10.1126/science.1225829)。

## 核心结构

### Spacer：决定“去哪里”

spacer 是 sgRNA 中与目标 DNA protospacer 互补的可变序列。对常用 SpCas9，设计工具通常围绕约 20 nt 的 spacer 工作，但实际构建长度、启动子要求和具体 Cas 变体必须按所用系统确认。

spacer 不包含 PAM。PAM 是目标 DNA 的组成部分，由 Cas 蛋白识别；将 PAM 碱基误写入 spacer 是常见设计错误。

### Scaffold：决定“能否正确装配”

scaffold 来源于 crRNA/tracrRNA 的结构功能区域，形成 Cas9 识别所需的茎环。它不是无关的“尾巴”：骨架版本、截短、突变、RNA aptamer（RNA 适配体）插入和表达方式都可能改变 Cas9 结合或效应器招募。

例如 [CRISPRa](CRISPRa.md) SAM 系统使用带 MS2 RNA stem-loop（MS2 RNA 茎环）的特定 sgRNA scaffold 招募额外激活蛋白，不能把普通 Cas9 sgRNA 骨架直接视为等价组件。

## sgRNA 在不同应用中的设计目标

| 应用 | 优先靶区 | 主要成功标准 |
| --- | --- | --- |
| [CRISPR-Cas9](CRISPR-Cas9.md) knockout | 共同外显子、早期编码区或关键结构域 | 产生足以破坏功能的 indel |
| knock-in / 精准编辑 | 靠近预定修改位点 | 切口与供体策略配合 |
| [CRISPRi](CRISPRi.md) | 与系统匹配的 TSS 邻近区域 | 降低目标转录和蛋白 |
| CRISPRa | 与系统匹配的启动子/TSS 邻近区域 | 提高内源转录和蛋白 |
| [pooled screen（混池筛选）](<../../用(实验流程内容篇)/CRISPR筛选.md>) | 按文库和读出统一设计 | 多条 guide 稳定覆盖目标并可测序追踪 |

同一条 sgRNA 不能仅凭序列匹配就被认为适合所有用途。核酸酶编辑看重切割位置和修复结果，CRISPRi/a 更依赖相对 TSS 的位置及染色质环境。

## 设计时需要检查什么

### Cas 蛋白和 PAM 必须一致

先确认使用的是 SpCas9、SaCas9、Cas12a 还是工程化变体，再按对应 PAM、spacer 长度和方向选靶点。使用错误 nuclease profile（核酸酶配置）会让看似正确的序列完全失效。

### 覆盖目标转录本或功能区域

基因可能存在多个 transcript（转录本）和 isoform（转录异构体）。knockout guide 应确认目标外显子是否被关键转录本共同使用；CRISPRi/a guide 应确认所用 TSS 在目标细胞中真实活跃。

### 同时评估活性和特异性

on-target score（在靶活性评分）与 off-target score（脱靶风险评分）解决的是不同问题。高活性不等于高特异性，低预测脱靶也不保证高活性。重要实验应设计多条独立 sgRNA，并结合 [脱靶效应](脱靶效应.md) 页面中的验证思路。

### 注意表达系统的序列限制

U6 promoter（U6 启动子）等 RNA polymerase III promoter（RNA 聚合酶 III 启动子）对转录起始碱基和连续 T 序列可能存在限制。克隆前应按载体说明确认是否需要在 5' 端添加 G、是否允许 spacer 中出现连续 T，以及添加碱基是否参与靶向配对。

## 常见形式

| 形式 | 优点 | 局限 | 常见用途 |
| --- | --- | --- | --- |
| 质粒表达 sgRNA | 成本低、便于克隆和扩增 | 表达持续，依赖细胞转录 | 常规细胞系、稳定系统 |
| 病毒载体表达 sgRNA | 适合难转染细胞和 pooled screen | 涉及整合、病毒安全与文库覆盖 | 稳定筛选、规模化实验 |
| 体外转录 sgRNA | 不依赖细胞内转录 | RNA 质量和末端异质性需控制 | RNP 或短期实验 |
| 化学合成 sgRNA | 批间清晰，可做化学修饰 | 成本较高 | [CRISPR RNP](<CRISPR RNP.md>)、原代细胞 |
| crRNA + tracrRNA | 模块化，crRNA 易更换 | 需要正确退火和配比 | 合成 RNA/RNP 工作流 |

## 最小验证逻辑

- 至少准备多个独立 sgRNA，不把单条 guide 结果直接等同于基因效应。
- 设置 non-targeting sgRNA 和适合系统的 positive-control sgRNA。
- 先验证递送和 Cas 组件，再检测目标位点或目标表达。
- 编辑实验检测基因型；CRISPRi/a 检测 RNA、蛋白和功能，不能混用成功标准。
- 记录 spacer、完整载体/骨架版本、PAM、目标基因组版本、设计工具及版本。

## 常见错误与 troubleshooting

| 问题 | 常见原因 | 修正方向 |
| --- | --- | --- |
| sgRNA 完全无效 | PAM/Cas 不匹配、方向错误、递送失败、guide 活性低 | 复核 nuclease 与序列方向，使用阳性对照 |
| 载体克隆后序列异常 | oligo 方向、黏性末端或骨架克隆规则错误 | 按载体图谱复核并做 Sanger 测序 |
| U6 表达弱或提前终止 | 5' 起始要求或连续 T 序列影响 Pol III 转录 | 使用兼容设计或替代表达策略 |
| 只有一条 guide 有表型 | guide 活性差异或脱靶 | 增加独立 guide 和正交验证 |
| CRISPRi/a guide 用于另一架构后失效 | TSS 窗口或 scaffold/效应器不兼容 | 按具体系统重新设计 |

## 小结

sgRNA 不是一串“20 个碱基”这么简单，而是 spacer、scaffold、Cas/PAM 兼容性、表达方式和实验目的共同组成的功能组件。可靠设计必须同时回答：靶向哪个生物学对象、使用哪种 Cas/效应器、如何递送，以及用什么读出证明它真的工作。

## 参考来源

- [Jinek et al., A programmable dual-RNA-guided DNA endonuclease in adaptive bacterial immunity, Science, 2012](https://doi.org/10.1126/science.1225829)
- [Hsu et al., DNA targeting specificity of RNA-guided Cas9 nucleases, Nature Biotechnology, 2013](https://doi.org/10.1038/nbt.2647)
- [Doench et al., Optimized sgRNA design to maximize activity and minimize off-target effects of CRISPR-Cas9, Nature Biotechnology, 2016](https://doi.org/10.1038/nbt.3437)
- [Horlbeck et al., Compact and highly active next-generation libraries for CRISPR-mediated gene repression and activation, eLife, 2016](https://doi.org/10.7554/eLife.19760)
