# SPR

SPR（surface plasmon resonance，表面等离子体共振）是一种 label-free（无标记）、real-time（实时）的分子相互作用检测技术，常用于测量抗体和抗原之间的 association（结合）、dissociation（解离）以及 [解离常数](解离常数.md) Kd。

## 一句话理解

SPR 用传感芯片表面附近折射率的变化，实时读出“分子有没有结合、结合多快、松开多快”。

Surface plasmon resonance 的基本原理是：光在金属薄膜表面激发表面等离子体，表面附近分子结合会改变局部折射率，从而改变光学响应；SPR 免疫分析可无标记、实时监测结合过程，并用于计算 Kd。参考：[Wikipedia: Surface plasmon resonance](https://en.wikipedia.org/wiki/Surface_plasmon_resonance)。

## 基本实验逻辑

| 步骤 | 做什么 | 读到什么 |
| --- | --- | --- |
| 固定 ligand | 将抗原或抗体固定到 [SPR芯片](<../../材(实验耗材工具篇)/SPR芯片.md>) 表面 | 建立可检测表面 |
| 注入 analyte | 让另一个分子流过芯片 | association phase，上升曲线 |
| 缓冲液冲洗 | 停止 analyte 输入 | dissociation phase，下降曲线 |
| 再生表面 | 去除已结合 analyte | 准备下一浓度或下一样本 |
| 曲线拟合 | 用动力学模型拟合 | kon、koff、Kd |

SPR 输出常见为 sensorgram（传感曲线），纵轴通常是 response unit（RU），横轴是时间。

## SPR 适合回答什么问题

| 问题 | SPR 是否适合 |
| --- | --- |
| 抗体和抗原亲和力是多少 | 很适合 |
| 结合和解离速度分别如何 | 很适合 |
| 两个抗体是否竞争同一表位 | 适合，可做 epitope binning |
| 样本里目标浓度是多少 | 可以，但需要标准化方法 |
| 复杂细胞裂解液里目标是否存在 | 不总是适合，非特异吸附会复杂 |
| 抗体在 ELISA 中一定表现好吗 | 不能直接保证，需要应用验证 |

## 常见数据解读

| 曲线表现 | 可能含义 |
| --- | --- |
| 上升快、下降慢 | kon 快、koff 慢，通常亲和力较好 |
| 上升慢、下降慢 | 结合慢但复合物稳定，延长孵育可能有帮助 |
| 上升快、下降快 | 快速结合也快速解离，强洗涤实验可能信号差 |
| 曲线不回落 | 解离非常慢或表面再生困难 |
| 曲线形状不符合 1:1 | 多价结合、异质抗原、质量传递限制或表面问题 |

## SPR vs BLI

| 项目 | SPR | [BLI](BLI.md) |
| --- | --- | --- |
| 检测原理 | 金属表面等离子体和折射率变化 | 光纤传感器末端生物层厚度变化 |
| 流体系统 | 多为微流控连续流 | 常见 dip-and-read 板式格式 |
| 通量 | 传统上较低到中等 | 通常更适合中高通量筛选 |
| 灵敏度 | 通常较高 | 具体取决于平台和样本 |
| 样本消耗 | 依平台而定 | 板式体系较灵活 |
| 常见风险 | 芯片表面、质量传递、再生条件 | 传感器选择、蒸发、非特异吸附 |

## 常见错误与 troubleshooting

| 异常 | 可能原因 | 调整方向 |
| --- | --- | --- |
| 拟合很差 | 1:1 模型不适合、多价结合或异质样本 | 尝试不同模型，降低固定量 |
| association 受限 | 质量传递限制 | 降低 ligand 密度，提高流速 |
| 再生后信号下降 | 再生条件损伤 ligand | 温和再生或换固定方向 |
| blank 也有信号 | 非特异吸附或缓冲液折射率差异 | 做 reference subtraction，优化缓冲液 |
| Kd 与 ELISA 不一致 | 平台和抗原形式不同 | 不直接替代应用验证 |

## 记录模板

中文记录：

```text
仪器平台：
芯片类型：
固定分子：
流动相分子：
固定量：
浓度梯度：
缓冲液：
温度：
流速：
再生条件：
拟合模型：
kon：
koff：
Kd：
异常观察：
```

English record:

```text
Instrument platform:
Chip type:
Immobilized molecule:
Analyte:
Immobilization level:
Concentration series:
Buffer:
Temperature:
Flow rate:
Regeneration condition:
Fitting model:
kon:
koff:
Kd:
Abnormal observations:
```

## 小结

SPR 是理解抗体-抗原动力学的强工具，尤其适合看 kon、koff 和 Kd。但 SPR 数据高度依赖抗原形式、固定方式、表面密度、缓冲液和拟合模型，不能脱离实验应用场景孤立解读。

## 参考来源

- [Wikipedia: Surface plasmon resonance](https://en.wikipedia.org/wiki/Surface_plasmon_resonance)
- [NCBI Bookshelf: Antigen recognition by B-cell and T-cell receptors](https://www.ncbi.nlm.nih.gov/books/NBK27160/)
