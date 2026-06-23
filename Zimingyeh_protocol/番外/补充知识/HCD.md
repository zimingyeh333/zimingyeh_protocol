# HCD

HCD（higher-energy collisional dissociation，高能碰撞解离；早期也常指 higher-energy C-trap dissociation）是一种 MS/MS 碰撞碎裂方式，常见于 [Orbitrap](<../../材(实验耗材工具篇)/Orbitrap.md>) 等高分辨质谱平台。它通过较高能量碰撞产生丰富 [碎片离子](碎片离子.md)，尤其适合常规肽段鉴定和 TMT/iTRAQ reporter ion（报告离子）定量。

![MS/MS 碎裂原理与方法概览](../../z_asset/番外/补充知识/质谱碎裂方式/msms-fragmentation-concepts-zh.png)

图源：Image2 生成的 MS/MS 碎裂方式示意图。HCD 模块强调高能碰撞、丰富碎片和 reporter ion 友好。

## HCD 的核心特点

HCD 可以理解为一种高能碰撞碎裂。Olsen 等在 Nature Methods 的经典论文中介绍了 higher-energy C-trap dissociation 用于 peptide modification analysis（肽段修饰分析），并展示其能产生适合 Orbitrap 检测的碎片离子信息。参考：[Olsen et al., Nature Methods, 2007](https://doi.org/10.1038/nmeth1060)

| 特点 | 意义 |
| --- | --- |
| 产生丰富 b/y 离子 | 适合常规肽段数据库搜索 |
| reporter ion 友好 | 适合 TMT/iTRAQ 等同位素标签定量 |
| 常与 Orbitrap 高分辨检测结合 | MS/MS 质量精度较好 |
| 碰撞能量需要优化 | 能量过高或过低都会影响谱图 |

## HCD 适合什么

| 场景 | 原因 |
| --- | --- |
| DDA 蛋白组学 | 产生适合数据库搜索的 b/y 离子 |
| DIA 蛋白组学 | 高通量采集窗口内碎片离子 |
| TMT 定量 | reporter ion 需要在低 m/z 区域被检测 |
| PRM | 目标前体的高分辨 MS/MS 碎片全谱 |
| 常规 PTM 分析 | 与定位算法和高分辨数据兼容 |

## HCD vs CID vs ETD

| 方式 | 主要碎片 | 更适合 |
| --- | --- | --- |
| [碰撞诱导解离](碰撞诱导解离.md) | b/y 离子，依平台而定 | 常规 MS/MS、三重四极杆、Q-TOF |
| HCD | 丰富 b/y 离子和 reporter ion | Orbitrap、TMT、DDA/DIA/PRM |
| [ETD](ETD.md) | c/z 离子 | 易碎修饰、带多电荷肽段 |

## HCD 参数常见问题

| 问题 | 可能原因 | 处理思路 |
| --- | --- | --- |
| reporter ion 弱 | 碰撞能量不足或检测范围设置不合适 | 检查 NCE、MS2 范围和方法 |
| 肽段鉴定差 | 能量不合适、前体隔离差、样本污染 | 优化 NCE 和隔离窗口 |
| PTM 定位不稳定 | 关键位置碎片不足 | 尝试不同 NCE 或 ETD/EThcD |
| TMT ratio 受干扰 | 共隔离干扰 | 缩小 isolation window、使用 SPS-MS3 或优化分级 |

## 常见误解

| 误解 | 更准确的理解 |
| --- | --- |
| HCD 总是比 CID 好 | 它更适合某些 Orbitrap workflow，但不是所有仪器/目标都最优 |
| HCD 只用于 TMT | 常规 DDA、DIA、PRM 也常用 HCD |
| 碰撞能量越高越充分 | 过高会导致过度碎裂和关键信号下降 |
| HCD 能自动解决 PTM 定位 | 定位仍取决于碎片覆盖、算法和数据质量 |

## 小结

HCD 是现代高分辨蛋白质谱中非常常见的碎裂方式，尤其适合 Orbitrap 平台上的 DDA、DIA、PRM 和 TMT 定量。它的优势是碎片信息丰富、reporter ion 友好；核心风险是碰撞能量和共隔离干扰需要认真优化。

## 参考来源

- [Olsen et al., Higher-energy C-trap dissociation for peptide modification analysis, Nature Methods, 2007](https://doi.org/10.1038/nmeth1060)
- [Thermo Fisher Orbitrap LC-MS](https://www.thermofisher.com/us/en/home/industrial/mass-spectrometry/liquid-chromatography-mass-spectrometry-lc-ms/lc-ms-systems/orbitrap-lc-ms.html)
