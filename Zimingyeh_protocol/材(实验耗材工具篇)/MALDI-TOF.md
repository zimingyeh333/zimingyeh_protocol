# MALDI-TOF

MALDI-TOF（matrix-assisted laser desorption/ionization time-of-flight mass spectrometry，基质辅助激光解吸电离-飞行时间质谱）是把 [MALDI](<../番外/补充知识/MALDI.md>) 离子源和 TOF（time-of-flight，[飞行时间质量分析器](<../番外/补充知识/飞行时间质量分析器.md>)）结合的质谱平台。它的典型特点是板上点样、激光电离、速度快、通量高。

![蛋白质组学常用质谱仪类型概览](../z_asset/材/质谱仪器/mass-spectrometry-instrument-types-reference.png)

图源：Image2 生成的质谱仪器类型参考图。右下角 MALDI-TOF 模块展示了靶板点样、激光激发和 TOF 分析。

## 核心原理

Bruker 的 MALDI-TOF 页面说明，MALDI-TOF MS 的样本通常与能量吸收 matrix（基质）混合或包被，干燥后共同结晶；激光束使基质离子化并把电荷转移给分析物，形成多为单电荷的离子；随后离子按 m/z 在 TOF 分析器中分离、检测。该页面还强调 MALDI-TOF 的速度、高通量、低样本量需求和对多种样本内容的适应性。参考：[Bruker MALDI-TOF/TOF](https://www.bruker.com/en/products-and-solutions/mass-spectrometry/maldi-tof.html)

## 适合什么实验

| 场景 | 为什么适合 |
| --- | --- |
| 微生物快速鉴定 | 指纹谱速度快，数据库成熟 |
| 肽质量指纹 | 可快速获得肽段质量分布 |
| 聚合物/寡核苷酸/糖类分析 | 对某些大分子和重复结构友好 |
| MALDI imaging | 可保留组织空间信息 |
| 高通量筛选 | 板上多点样本适合自动化 |

## 和 LC-ESI-MS 的区别

| 项目 | MALDI-TOF | LC-ESI-MS/MS |
| --- | --- | --- |
| 进样方式 | [MALDI靶板](MALDI靶板.md) 上点样 | LC 在线进样 |
| 离子化 | 激光 + [MALDI基质](MALDI基质.md) | [ESI](<../番外/补充知识/ESI.md>) 连续喷雾 |
| 常见电荷 | 多为单电荷 | 肽段常多电荷 |
| 通量 | 很高 | 受 LC 梯度时间限制 |
| 分离能力 | 依赖样本前处理和靶板位置 | LC 分离能力强 |
| 典型应用 | 指纹、微生物、成像、高通量 | 深度蛋白组、定量、复杂肽段解析 |

MALDI-TOF 不应被理解成“落后的质谱”。它和 LC-ESI-MS/MS 是不同入口逻辑：MALDI 强在快速和空间/板式工作流，LC-ESI 强在复杂混合物的深度分离和连续采集。

## 使用要点

**怎么做**：将样本与合适 MALDI matrix 混合或覆盖到靶板上，形成均匀结晶；选择合适激光能量、采集模式和校准策略；根据任务使用指纹数据库、质量列表或 imaging 软件解析。

**为什么重要**：MALDI 的结果很大程度取决于样本-基质共结晶质量。结晶不均匀会造成同一样本不同点信号差异很大。

**注意事项**：

- 基质选择要匹配目标分子类别。
- 盐、去污剂和缓冲液会影响结晶和离子化。
- 靶板清洁度影响背景和重复性。
- 微生物鉴定依赖数据库质量和样本制备一致性。
- 成像实验需要同时考虑空间分辨率、基质喷涂和组织保存。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 无信号或弱信号 | 基质不合适、结晶差、激光能量低 | 更换基质，优化点样和激光 |
| 重复性差 | 结晶不均匀或靶板污染 | 改善混合/喷涂，清洁靶板 |
| 背景峰多 | 盐、缓冲液、基质污染 | 脱盐或换新基质 |
| 微生物鉴定分数低 | 菌落状态、提取方法或数据库不匹配 | 标准化样本制备，检查数据库 |
| 成像空间信息差 | 基质晶体大或喷涂不均 | 优化喷涂、晶体大小和组织处理 |

## 购买和平台建议

MALDI-TOF 平台选择要看实际任务：

- 微生物鉴定：数据库、样本制备 kit 和临床/科研边界最关键。
- 成像：激光扫描速度、空间分辨率、基质喷涂和 imaging 软件最关键。
- 生物药或聚合物：质量范围、分辨率和校准策略更重要。
- 高通量筛选：自动化点样、靶板格式和软件批处理能力更重要。

常见供应商包括 [Bruker](<../番外/试剂厂商/Bruker.md>)、[Shimadzu](<../番外/试剂厂商/Shimadzu.md>)、[SCIEX](<../番外/试剂厂商/SCIEX.md>) 等。

## 推荐记录

### 中文记录

```text
MALDI-TOF型号：
靶板类型：
基质：
样本类型：
点样方式：
校准品：
采集模式：
激光能量：
质量范围：
数据库/软件：
结果分数或主要峰：
异常观察：
```

### English record

```text
MALDI-TOF model:
Target plate type:
Matrix:
Sample type:
Spotting method:
Calibrant:
Acquisition mode:
Laser energy:
Mass range:
Database/software:
Score or major peaks:
Abnormal observations:
```

## 小结

MALDI-TOF 的关键词是“板上点样、基质辅助、激光、TOF、快速高通量”。它不擅长替代 nanoLC-MS/MS 做深度复杂蛋白组，但在微生物鉴定、MALDI imaging、指纹谱和高通量分析中有独特价值。它的成败常常不在仪器参数，而在基质、点样、靶板和数据库。

## 参考来源

- [Bruker MALDI-TOF/TOF](https://www.bruker.com/en/products-and-solutions/mass-spectrometry/maldi-tof.html)
