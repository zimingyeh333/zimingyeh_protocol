# ETD

ETD（electron-transfer dissociation，电子转移解离）是一种 MS/MS 碎裂方式，通过电子转移使带多电荷的 [前体离子](前体离子.md) 发生主链断裂，常产生 c/z 类型 [碎片离子](碎片离子.md)。它的突出价值是相对保留某些易碎修饰，因此常用于修饰肽段、糖肽和高电荷肽段分析。

![MS/MS 碎裂原理与方法概览](../../z_asset/番外/补充知识/质谱碎裂方式/msms-fragmentation-concepts-zh.png)

图源：Image2 生成的 MS/MS 碎裂方式示意图。ETD 模块展示了电子转移后主要产生 c/z 离子，并保留易碎修饰的逻辑。

## ETD 的核心特点

Syka 等在 PNAS 的经典论文中提出 electron transfer dissociation 可用于 peptide and protein sequence analysis（肽段和蛋白序列分析），ETD 对带多电荷肽段尤其有用，并能产生与 CID/HCD 不同的碎片类型。参考：[Syka et al., PNAS, 2004](https://doi.org/10.1073/pnas.0402700101)

| 特点 | 意义 |
| --- | --- |
| 主要产生 c/z 离子 | 与 CID/HCD 的 b/y 离子互补 |
| 对易碎修饰更友好 | 修饰不容易在碎裂时丢失 |
| 偏好高电荷前体 | 低电荷肽段 ETD 效率可能较差 |
| 常与 HCD 组合 | EThcD 可提供互补碎片信息 |

## ETD 适合什么

| 场景 | 为什么适合 |
| --- | --- |
| 磷酸化位点定位 | 可减少某些中性丢失干扰 |
| 糖肽分析 | 有助于保留糖基化相关信息 |
| 带多电荷长肽段 | ETD 对高电荷前体更有效 |
| top-down proteomics | 完整蛋白或大肽段碎裂 |
| 与 HCD 互补 | c/z 与 b/y 离子共同提高覆盖 |

## ETD vs HCD/CID

| 项目 | ETD | HCD/CID |
| --- | --- | --- |
| 激活方式 | 电子转移 | 碰撞能量 |
| 常见碎片 | c/z 离子 | b/y 离子 |
| 修饰保留 | 对部分易碎修饰更友好 | 某些修饰可能中性丢失 |
| 适合前体 | 高电荷肽段更好 | 常规肽段广泛适用 |
| 常见用途 | PTM、糖肽、长肽段 | 常规蛋白组、TMT、DIA |

## 常见问题

| 问题 | 可能原因 | 处理思路 |
| --- | --- | --- |
| ETD 碎片少 | 前体电荷低或反应条件不合适 | 选择高电荷前体，优化反应时间 |
| 鉴定数低 | 常规肽段不一定适合 ETD | 与 HCD/CID 组合使用 |
| 谱图复杂 | c/z 离子解释和算法设置不熟 | 使用支持 ETD 的搜索参数 |
| 修饰定位仍不清楚 | 关键位点没有碎片覆盖 | 尝试 EThcD 或不同酶切策略 |

## 常见误解

| 误解 | 更准确的理解 |
| --- | --- |
| ETD 比 HCD 更高级 | 它们解决的问题不同，常互补 |
| ETD 适合所有肽段 | 高电荷、较长或修饰肽段更适合 |
| ETD 一定能保留所有修饰 | 仍受前体、仪器、反应条件和样本影响 |
| ETD 数据可以按 HCD 参数搜索 | 搜索软件需要设置正确碎裂类型和离子系列 |

## 小结

ETD 是理解修饰肽段和复杂蛋白质谱的重要碎裂方式。它通过电子转移产生 c/z 离子，与 HCD/CID 的 b/y 离子互补。ETD 的优势不是“通用更强”，而是在易碎修饰、高电荷肽段和需要互补碎片证据的场景中很有价值。

## 参考来源

- [Syka et al., Peptide and protein sequence analysis by electron transfer dissociation mass spectrometry, PNAS, 2004](https://doi.org/10.1073/pnas.0402700101)
- [Thermo Fisher Mass Spectrometry Technology Overview](https://www.thermofisher.com/us/en/home/industrial/mass-spectrometry/mass-spectrometry-learning-center/mass-spectrometry-technology-overview.html)
