# Q-TOF

Q-TOF（quadrupole time-of-flight mass spectrometer，四极杆-飞行时间质谱仪）是把 quadrupole（[四极杆](<../番外/补充知识/四极杆.md>)）和 time-of-flight（[飞行时间质量分析器](<../番外/补充知识/飞行时间质量分析器.md>)，TOF）组合起来的混合型质谱仪。它通常用于高速度 MS/MS、准确质量分析、DDA/DIA 采集、未知物筛查、肽图和结构解析。

![蛋白质组学常用质谱仪类型概览](../z_asset/材/质谱仪器/mass-spectrometry-instrument-types-reference.png)

图源：Image2 生成的质谱仪器类型参考图。右上角 Q-TOF 模块展示了 Q 选择离子、TOF 测量质量的基本逻辑。

## 核心原理

Q-TOF 的前端四极杆可以选择或过滤前体离子，碰撞池让离子碎裂，后端 TOF 根据离子飞行时间测定 m/z。SCIEX 的 QTOF systems 页面将 QTOF 定位为支持定性和定量方法的准确质量平台，并强调 QTOF 技术具备高采集速度、宽质量范围和不牺牲仪器分辨率的优势。参考：[SCIEX QTOF Systems](https://sciex.com/products/mass-spectrometers/qtof-systems)

简化理解：

```text
Q1 选择前体离子
-> collision cell 碎裂
-> TOF 快速测量碎片离子准确质量
-> 生成 MS/MS 谱图
```

## 适合什么实验

| 场景 | 为什么适合 |
| --- | --- |
| DDA 蛋白组学 | 快速 MS/MS 有助于更多前体离子被碎裂 |
| DIA / SWATH | 高速全碎裂数据适合大窗口采集 |
| 肽图和生物药表征 | 准确质量和碎片信息有助于确认序列 |
| 小分子未知物筛查 | 全扫描准确质量和 MS/MS 碎片可用于推断 |
| 法医、食品、环境筛查 | 兼顾定性确认和一定定量能力 |

## Q-TOF vs Orbitrap

| 项目 | Q-TOF | [Orbitrap](Orbitrap.md) |
| --- | --- | --- |
| 强项 | 扫描速度快、MS/MS 灵活、全谱采集稳定 | 更高分辨和准确质量能力 |
| 常见采集 | DDA、DIA、SWATH、未知物筛查 | DDA、DIA、PRM、TMT、PTM |
| 数据风格 | TOF 全谱、碎片谱速度优势明显 | HRAM 全扫描解析能力强 |
| 典型选择 | 需要高速和工作流灵活性 | 需要更深解析和高分辨质量 |

二者不是简单“谁更好”。如果实验重点是高速采集、DIA/SWATH 或常规准确质量筛查，Q-TOF 很有价值；如果重点是极高分辨、复杂干扰区分或高深度发现，Orbitrap 通常更强。

## 使用要点

**怎么做**：根据目标选择 DDA、DIA/SWATH 或 targeted acquisition。方法中重点控制隔离窗口、碰撞能量、扫描速度、质量校准和 LC 峰宽匹配。

**为什么重要**：Q-TOF 的速度优势只有在 LC 分离、采集窗口和软件解析配合良好时才会转化为可靠数据。

**注意事项**：

- DIA 窗口过宽会增加谱图复杂度。
- 碰撞能量不合适会造成碎片信息不足或过度碎裂。
- 准确质量依赖校准和仪器状态。
- 对复杂蛋白组学，数据分析软件和谱库策略非常关键。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| MS/MS 谱图质量差 | 碰撞能量不合适或前体选择错误 | 优化 CE 和采集窗口 |
| 定性不确定 | 准确质量偏移或碎片不充分 | 重新校准，检查质量误差和碎片匹配 |
| DIA 解析困难 | 窗口太宽、样本复杂、谱库不足 | 使用可变窗口或优化软件流程 |
| 低丰度目标缺失 | 动态范围不足或上样量低 | 增加样本量、分级或改用靶向方法 |
| 保留时间不稳定 | nanoLC 状态不稳 | 检查 [纳升液相色谱仪](纳升液相色谱仪.md) 和流动相 |

## 购买和平台建议

Q-TOF 平台需要关注：

- MS/MS 速度和质量准确度。
- DIA/SWATH 生态和软件支持。
- 适合蛋白组、小分子、药物分析还是综合平台。
- LC 联用稳定性和服务支持。
- 数据处理软件是否适合实验室人员能力。

常见供应商包括 [SCIEX](<../番外/试剂厂商/SCIEX.md>)、[Bruker](<../番外/试剂厂商/Bruker.md>)、[Waters](<../番外/试剂厂商/Waters.md>)、[Agilent](<../番外/试剂厂商/Agilent.md>) 和 [Shimadzu](<../番外/试剂厂商/Shimadzu.md>) 等。

## 推荐记录

### 中文记录

```text
Q-TOF型号：
LC系统：
采集模式：DDA / DIA / SWATH / targeted
质量校准日期：
MS1扫描范围：
MS/MS扫描范围：
隔离窗口：
碰撞能量：
采集速度：
软件版本：
QC结果：
异常观察：
```

### English record

```text
Q-TOF model:
LC system:
Acquisition mode: DDA / DIA / SWATH / targeted
Calibration date:
MS1 scan range:
MS/MS scan range:
Isolation window:
Collision energy:
Acquisition speed:
Software version:
QC result:
Abnormal observations:
```

## 小结

Q-TOF 的关键词是“四极杆选择 + TOF 快速准确质量”。它适合需要高速 MS/MS、准确质量和灵活采集策略的场景，尤其适合 DDA/DIA、未知物筛查和多类型样本平台。它和 Orbitrap 的区别不只是品牌，而是分辨率、速度、数据结构和应用重心的区别。

## 参考来源

- [SCIEX QTOF Systems](https://sciex.com/products/mass-spectrometers/qtof-systems)
- [Bruker Mass Spectrometry Technologies](https://www.bruker.com/en/products-and-solutions/mass-spectrometry.html)
