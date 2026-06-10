# LOD

LOD（limit of detection，检出限）是指一个检测方法能可靠判断“目标物存在”的最低水平；它强调 detect（检出），不等于能准确 quantify（定量）。

![ELISA interpretation pitfalls](../../z_asset/番外/ELISA数据解析/elisa-interpretation-pitfalls.png)

图：ELISA 数据解析常见边界和异常。LOD 处在低信号区，LOQ 稍高并进入可定量区域；Hook effect 和 edge effect 则是会让读数偏离真实浓度的典型异常。本图由 Image2 / image-generation model 生成，用于个人学习笔记示意。

## 一句话理解

LOD 回答的问题是：“这个信号是否已经高到不像空白或噪音？”

在 [ELISA](<../../用(实验流程内容篇)/ELISA.md>) 中，如果某个样本浓度低于 LOD，不能可靠判断它是否真的含有目标物；如果高于 LOD 但低于 [LOQ](LOQ.md)，通常可以说“检测到”，但不应当严肃报告精确定量值。

ICH Q2(R2) 对 detection limit（检测限）的定义强调最低可检测量不一定能作为精确定量值；quantitation limit（定量限）才要求在合适 precision（精密度）和 accuracy（准确度）下定量。参考：[ICH Q2(R2) Validation of Analytical Procedures](https://database.ich.org/sites/default/files/ICH_Q2%28R2%29_Guideline_2023_1130.pdf)。

## LOD、blank 和背景的关系

LOD 通常依赖 blank（空白）和低浓度样本的信号分布。对于板式免疫检测，可以把它想成：

```text
空白孔平均信号 + 空白/低浓度噪音范围
→ 形成一个“超过噪音”的判断边界
→ 超过这个边界才比较可靠地说检测到
```

因此 LOD 不是试剂盒标签上一个永远固定的神奇数字。它会受到 [背景信号](背景信号.md)、板型、读板器、样本基质、洗板质量、操作人员和统计方法影响。

## LOD vs LOQ

| 项目 | LOD | LOQ |
| --- | --- | --- |
| 英文全称 | Limit of detection | Limit of quantitation |
| 中文 | 检出限 | 定量限 |
| 回答问题 | 是否能可靠检出 | 是否能可靠定量 |
| 对精密度/准确度要求 | 低于 LOQ | 更严格 |
| ELISA 报告方式 | 可写 detected / below LOD | 可报告浓度 |
| 常见位置 | 标准曲线低端附近 | 高于 LOD 的可定量低端 |

简单说：LOD 是“看得见”，LOQ 是“量得准”。

## 在 ELISA 中怎么用

在 ELISA 结果中，LOD 常用于判断低浓度样本是否应报告为 below detection limit（低于检出限）。如果读数低于 LOD，不建议把从曲线外推得到的数值当成真实浓度。

实际记录时要写清：

- LOD 是厂家说明书给出的，还是本实验室验证得到的。
- 使用的是 blank + 3SD、LoB + 统计方法，还是软件/kit 定义。
- LOD 是在 buffer 标准品里得到，还是在真实样本基质里得到。
- 读数是否经过背景扣除。
- 标准曲线模型是 [4PL曲线](4PL曲线.md)、[5PL曲线](5PL曲线.md) 还是线性拟合。

## 和标准曲线的关系

[标准曲线](标准曲线.md) 的最低点不一定等于 LOD。很多 kit 会设置一个最低标准品浓度，但 LOD 可能低于最低标准点，也可能因为背景高而高于最低标准点。

更稳妥的理解：

- 标准曲线最低点是实验设计点。
- LOD 是统计判定边界。
- LOQ 是可接受定量边界。
- 报告范围应该以验证过的定量范围为准。

## 常见误区

| 误区 | 为什么不对 |
| --- | --- |
| 把最低标准品浓度当 LOD | 最低标准点是配出来的浓度，不一定是统计检出边界 |
| 低于 LOD 还报具体数值 | 曲线外推会给数字，但数字没有可靠意义 |
| 只引用厂家 LOD 不看样本基质 | 血清、血浆、细胞上清的背景可能不同 |
| 用单次空白计算 LOD | 样本量太少，无法反映噪音分布 |
| 忽略板间差异 | 不同板、不同天、不同批号可能改变低端背景 |

## 异常和 troubleshooting

| 现象 | 可能原因 | 调整方向 |
| --- | --- | --- |
| LOD 变高 | 背景升高、洗板不足、读板器噪音高 | 优化 [洗涤缓冲液](<../../材(实验耗材工具篇)/洗涤缓冲液.md>)、封闭和读板设置 |
| 低浓度样本忽高忽低 | 低端噪音大、样本吸附损失 | 使用低吸附耗材，增加复孔 |
| 厂家 LOD 很低但自己做不到 | 样本基质更复杂或操作条件不同 | 做基质匹配验证 |
| 空白孔离散很大 | 加样、洗板、气泡或边缘效应 | 检查板图、移液和边缘孔 |

## 记录模板

中文记录：

```text
检测项目：
方法/试剂盒：
样本类型：
LOD 来源：厂家说明书 / 本实验室验证
LOD 数值：
单位：
计算方法：
空白孔数量：
低浓度样本数量：
背景扣除方式：
标准曲线模型：
验证日期：
备注：
```

English record:

```text
Target analyte:
Method/kit:
Sample type:
LOD source: manufacturer / in-house validation
LOD value:
Unit:
Calculation method:
Number of blank wells:
Number of low-level samples:
Background subtraction:
Standard curve model:
Validation date:
Notes:
```

## 小结

LOD 是“能不能可靠看见”的边界，不是“能不能可靠报告浓度”的边界。ELISA 中所有低于 LOD 或接近 LOD 的结果，都应该谨慎解释，并和样本基质、背景信号和标准曲线模型一起记录。

## 参考来源

- [ICH Q2(R2) Validation of Analytical Procedures](https://database.ich.org/sites/default/files/ICH_Q2%28R2%29_Guideline_2023_1130.pdf)
- [ICH M10 Bioanalytical Method Validation and Study Sample Analysis](https://database.ich.org/sites/default/files/M10_Guideline_Step4_2022_0524.pdf)
- [Thermo Fisher Overview of ELISA](https://www.thermofisher.com/us/en/home/life-science/protein-biology/protein-biology-learning-center/protein-biology-resource-library/pierce-protein-methods/overview-elisa.html)
