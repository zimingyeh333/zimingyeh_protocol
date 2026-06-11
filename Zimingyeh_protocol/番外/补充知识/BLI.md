# BLI

BLI（bio-layer interferometry，生物层干涉）是一种 label-free（无标记）、real-time（实时）的分子相互作用检测技术，常用于测量抗体、抗原、蛋白或核酸之间的结合动力学，并计算 [解离常数](解离常数.md) Kd。

## 一句话理解

BLI 用光纤传感器尖端表面“生物层厚度”的变化，实时读出分子结合和解离。

Bio-layer interferometry 的基本逻辑是：把 ligand 固定在生物传感器尖端，传感器浸入 analyte 溶液后，分子结合会改变生物层厚度，引起干涉光谱位移，从而实时监测 association 和 dissociation。参考：[Wikipedia: Bio-layer interferometry](https://en.wikipedia.org/wiki/Bio-layer_interferometry)。

## 基本实验逻辑

| 步骤 | 做什么 | 读到什么 |
| --- | --- | --- |
| 传感器水合 | 让 [BLI传感器](<../../材(实验耗材工具篇)/BLI传感器.md>) 稳定 | 降低初始漂移 |
| 固定 ligand | 例如用 [生物素](<../../材(实验耗材工具篇)/生物素.md>)-[链霉亲和素](<../../材(实验耗材工具篇)/链霉亲和素.md>) 系统固定抗原 | 建立检测表面 |
| baseline | 放入缓冲液 | 建立基线 |
| association | 放入 analyte 浓度梯度 | 观察结合曲线 |
| dissociation | 放回缓冲液 | 观察解离曲线 |
| fitting | 拟合模型 | kon、koff、Kd |

BLI 常见平台使用 dip-and-read 格式，也就是传感器在不同孔之间移动，不依赖传统微流控连续流系统。

## BLI 适合回答什么问题

| 问题 | BLI 是否适合 |
| --- | --- |
| 快速筛选抗体和抗原是否结合 | 很适合 |
| 比较多个克隆的相对亲和力 | 适合 |
| 测量 kon、koff、Kd | 适合，但依赖实验设计 |
| 做中高通量抗体筛选 | 通常适合 |
| 处理复杂基质样本 | 有时比微流控 SPR 更方便，但仍需背景控制 |
| 精细热力学分析 | 不如专门热力学方法 |

## BLI vs SPR

| 项目 | BLI | [SPR](SPR.md) |
| --- | --- | --- |
| 检测表面 | 光纤传感器尖端 | 金属芯片表面 |
| 样本输送 | 传感器浸入孔中 | 样本流过芯片 |
| 通量 | 常适合 96/384 孔筛选 | 依平台和芯片通道数而定 |
| 非特异问题 | 传感器表面和孔内基质影响 | 芯片表面和微流控系统影响 |
| 再生 | 有时可再生，有时一次性传感器更方便 | 再生条件很关键 |
| 数据比较 | 适合同平台相对比较 | 适合精细动力学测定 |

## 常见传感器选择

| 固定策略 | 常见传感器 | 适合对象 |
| --- | --- | --- |
| 生物素-链霉亲和素 | SA sensor | 生物素化蛋白、肽、抗原 |
| Anti-human Fc | AHC sensor | 人源 IgG 抗体 |
| Anti-mouse Fc | AMC sensor | 小鼠 IgG 抗体 |
| Ni-NTA | NTA sensor | His-tag 蛋白 |
| Amine coupling | AR2G 等 | 需要共价固定的蛋白 |

固定方式会影响分子取向。取向不合适时，目标表位可能被遮挡，导致看似亲和力差或无结合。

## 常见错误与 troubleshooting

| 异常 | 可能原因 | 调整方向 |
| --- | --- | --- |
| baseline 漂移 | 传感器水合不足或温度不稳 | 延长水合，平衡温度 |
| 空白孔也有信号 | 非特异吸附或基质效应 | 加 reference sensor 和 buffer control |
| 高浓度曲线异常 | 聚集、非特异结合或质量传递问题 | 降低浓度，检查样本纯度 |
| dissociation 不合理 | 再结合、孔内混合不足或传感器负载过高 | 降低 ligand loading，优化摇床速度 |
| 拟合 Kd 不可信 | 浓度点不足或模型不适合 | 增加浓度梯度，查看残差 |

## 记录模板

中文记录：

```text
仪器平台：
传感器类型：
固定分子：
流动相分子：
固定方式：
固定量：
浓度梯度：
缓冲液：
温度：
摇床速度：
association 时间：
dissociation 时间：
拟合模型：
kon：
koff：
Kd：
异常观察：
```

English record:

```text
Instrument platform:
Biosensor type:
Immobilized molecule:
Analyte:
Immobilization strategy:
Loading level:
Concentration series:
Buffer:
Temperature:
Shaking speed:
Association time:
Dissociation time:
Fitting model:
kon:
koff:
Kd:
Abnormal observations:
```

## 小结

BLI 的优势是实时、无标记、板式操作灵活，特别适合抗体克隆筛选和相互作用比较。它和 SPR 一样能给出动力学参数，但结果必须结合传感器类型、固定方向、样本基质和拟合质量来判断。

## 参考来源

- [Wikipedia: Bio-layer interferometry](https://en.wikipedia.org/wiki/Bio-layer_interferometry)
- [Wikipedia: Surface plasmon resonance](https://en.wikipedia.org/wiki/Surface_plasmon_resonance)
