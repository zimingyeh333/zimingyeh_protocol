# Orbitrap

Orbitrap（轨道阱质量分析器）是一类 high-resolution accurate-mass（[高分辨质谱](<../番外/补充知识/高分辨质谱.md>) / [准确质量](<../番外/补充知识/准确质量.md>)，HRAM）质量分析器，广泛用于 [蛋白质谱](<../用(实验流程内容篇)/蛋白质谱.md>)、修饰鉴定、TMT 定量、非靶向代谢物筛查和复杂样本解析。它常以 Quadrupole-Orbitrap（四极杆-Orbitrap）或 Tribrid（混合多分析器）形式出现。

![蛋白质组学常用质谱仪类型概览](../z_asset/材/质谱仪器/mass-spectrometry-instrument-types-reference.png)

图源：Image2 生成的质谱仪器类型参考图。左上角 Orbitrap 模块强调高分辨率和准确质量。

## 核心原理

Thermo Fisher 的 Orbitrap 页面说明，Orbitrap 系统提供 high-resolution accurate-mass（HRAM）性能，可与液相色谱联用以增强未知和已知化合物分离，并支持高通量 workflow；页面还描述 Orbitrap 由中央电极和外电极构成，离子进入后围绕中央电极振荡，不同离子的振荡频率不同，仪器通过 image current detection（镜像电流检测）获取质谱。参考：[Thermo Fisher Orbitrap LC-MS](https://www.thermofisher.com/us/en/home/industrial/mass-spectrometry/liquid-chromatography-mass-spectrometry-lc-ms/lc-ms-systems/orbitrap-lc-ms.html)

简单说，Orbitrap 的优势来自“用频率测质量”。这让它在复杂样本中可以更好地区分非常接近的 m/z 峰，减少同量异位或背景干扰造成的误判。

## 适合什么实验

| 场景 | 为什么适合 |
| --- | --- |
| DDA 蛋白组学 | 高质量 MS1/MS2 有利于肽段鉴定 |
| DIA 蛋白组学 | 高分辨数据有助于复杂窗口解析 |
| TMT 定量 | 需要兼顾分辨率、MS/MS 和 reporter ion 定量 |
| PTM 鉴定 | 修饰肽段低丰度且易受干扰 |
| 非靶向小分子/代谢组 | 准确质量和全扫描数据利于未知物推断 |
| 完整蛋白/蛋白复合物 | 高分辨质量信息有助于分子量解析 |

## Orbitrap vs Q-TOF vs 三重四极杆

| 项目 | Orbitrap | [Q-TOF](Q-TOF.md) | [三重四极杆质谱仪](三重四极杆质谱仪.md) |
| --- | --- | --- | --- |
| 主要优势 | 高分辨、准确质量、全扫描深度 | 高速、准确质量、结构碎片 | 高灵敏靶向定量 |
| 最适合 | 发现型实验、复杂样本解析 | 高速 MS/MS、DIA、未知筛查 | 已知目标的绝对/相对定量 |
| 数据特点 | HRAM 全扫描和 MS/MS | TOF 全谱和快速碎裂 | SRM/MRM transition |
| 限制 | 方法和数据处理复杂，维护成本高 | 分辨率通常低于高端 Orbitrap | 不适合无目标发现 |

如果目标是“尽可能多发现”，Orbitrap 常是强选择；如果目标是“固定几十到几百个目标稳定定量”，三重四极杆通常更经济、更稳健。

## 使用要点

**怎么做**：在方法里平衡分辨率、扫描速度、AGC/最大注入时间、碎裂能量和动态排除等参数。复杂蛋白组学项目应先用 QC 样本评估鉴定数、保留时间、质量误差和重复性。

**为什么重要**：分辨率越高不一定越好，因为高分辨通常意味着扫描更慢。对于窄峰 nanoLC 数据，扫描速度不足会降低每个色谱峰上的采样点数。

**注意事项**：

- 高分辨方法要和 LC 峰宽匹配。
- 质量校准和锁质量策略会影响 ppm 误差。
- TMT、DIA、PTM 等方法不能直接套用普通 DDA 参数。
- 高盐和污染会让高端仪器也失去优势。
- 数据处理参数要与实际酶切、修饰和采集方式一致。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 鉴定数低 | 分辨率/扫描速度不匹配、动态排除不合理 | 用标准 QC 优化方法 |
| 质量误差变大 | 校准过期、温度/真空/仪器状态变化 | 重新校准，检查仪器日志 |
| TMT 定量干扰 | 共碎裂干扰或 MS2 分辨不足 | 考虑 SPS-MS3 或优化隔离窗口 |
| DIA 数据复杂 | 窗口过宽、谱库/软件不合适 | 优化 DIA window 和分析流程 |
| 低丰度目标缺失 | 动态范围不够或采集策略偏向高丰度 | 分级、富集或改用靶向方法 |

## 购买和平台建议

Orbitrap 适合对深度、准确质量和复杂数据解析有较高要求的平台。购买前建议明确：

- 主要做 DDA、DIA、TMT、PTM 还是小分子 HRAM。
- 是否需要 ETD/EThcD、UVPD、ion mobility 等附加能力。
- 数据处理软件和算力是否匹配。
- 是否有稳定维护和方法开发人员。

常见 Orbitrap 产品线主要来自 [Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>)。比较不同型号时，不要只看最高分辨率，还要看扫描速度、离子传输、碎裂方式、软件生态和实际 demo 数据。

## 推荐记录

### 中文记录

```text
Orbitrap型号：
LC系统：
采集模式：DDA / DIA / PRM / TMT / PTM
MS1分辨率：
MS2分辨率：
隔离窗口：
碎裂方式：
碰撞能量：
质量校准日期：
QC鉴定数：
质量误差：
异常观察：
```

### English record

```text
Orbitrap model:
LC system:
Acquisition mode: DDA / DIA / PRM / TMT / PTM
MS1 resolution:
MS2 resolution:
Isolation window:
Fragmentation mode:
Collision energy:
Calibration date:
QC identification count:
Mass error:
Abnormal observations:
```

## 小结

Orbitrap 的核心价值是高分辨、准确质量和复杂样本解析能力。它不是所有定量问题的最优解，但在发现型蛋白组学、修饰鉴定和高可信未知物分析中非常强。使用时最重要的是把分辨率、扫描速度、LC 峰宽和数据分析策略匹配起来。

## 参考来源

- [Thermo Fisher Orbitrap LC-MS](https://www.thermofisher.com/us/en/home/industrial/mass-spectrometry/liquid-chromatography-mass-spectrometry-lc-ms/lc-ms-systems/orbitrap-lc-ms.html)
