# Spike-and-recovery

Spike-and-recovery（加标回收实验）是在真实样本基质中加入已知量目标物，观察检测结果能否回收预期浓度的验证方法，用来判断样本基质是否干扰检测。

![ELISA curve and matrix validation](../../z_asset/番外/ELISA曲线与基质验证/elisa-curve-matrix-validation.png)

图：ELISA 曲线拟合与基质验证。Spike-and-recovery 用已知加标量检查真实样本基质是否影响定量。本图由 Image2 / image-generation model 生成，用于个人学习笔记示意。

## 一句话理解

Spike-and-recovery 回答的问题是：“如果我往样本里加了已知量目标物，ELISA 能不能把它测回来？”

如果 [标准曲线](标准曲线.md) 在缓冲液中很好，但真实样本中加入的目标物回收率很差，就说明 [基质效应](基质效应.md) 可能影响抗原-抗体结合、酶反应、吸附或读数。

ICH M10 在 ligand binding assays（LBA，配体结合分析）中要求关注 selectivity、dilution linearity、parallelism 和 matrix effects 等与样本基质相关的表现；加标回收是理解这些问题的常用实验思路。参考：[ICH M10 Bioanalytical Method Validation](https://database.ich.org/sites/default/files/M10_Guideline_Step4_2022_0524.pdf)。

## 基本计算

常见思路：

```text
Recovery % =
(加标样本测得浓度 - 未加标样本原始浓度)
/ 加入的理论浓度
× 100%
```

如果回收率接近 100%，说明该样本基质下加入的目标物能被较好测回。若明显偏低，可能有抑制或吸附损失；若明显偏高，可能有非特异反应、交叉反应或基质增强。

## 什么时候需要做

| 场景 | 为什么需要 |
| --- | --- |
| 新样本类型 | 说明书可能只验证 serum/plasma，未验证组织匀浆或培养基 |
| 自建 ELISA | 需要证明样本基质可测 |
| 样本背景复杂 | 血清、血浆、裂解液、组织匀浆干扰多 |
| 低丰度目标物 | 低端更容易受背景影响 |
| 更换样本稀释液 | 稀释体系改变可能影响回收率 |
| 不同物种样本 | 基质蛋白和交叉反应风险不同 |

## 设计方法

推荐至少设置：

- 未加标样本。
- 低、中、高三个加标水平。
- 每个水平至少重复孔。
- 同时跑标准曲线。
- 加标浓度应落在 [LOQ](LOQ.md) 范围内。
- 尽量使用和标准品同源、同构建或厂家推荐的加标材料。

如果样本本底目标物很高，低水平加标会被本底波动淹没，应先稀释样本或选择更高加标水平。

## 回收率怎么解释

不同实验室和项目的可接受范围不同，不能把某个固定数字无脑套用。探索阶段可以用较宽范围筛查，正式验证要按项目要求设定 acceptance criteria（接受标准）。

常见解释：

| 结果 | 可能含义 |
| --- | --- |
| 回收率接近预期 | 基质影响较小 |
| 回收率偏低 | 抑制、吸附损失、目标物降解或抗体识别受阻 |
| 回收率偏高 | 基质增强、交叉反应、背景扣除错误 |
| 低水平差，高水平好 | 低端信噪比不足 |
| 不同样本差异大 | 个体基质差异明显 |

## 和稀释线性的区别

| 项目 | Spike-and-recovery | [稀释线性](稀释线性.md) |
| --- | --- | --- |
| 操作 | 向样本加入已知目标物 | 对样本做系列稀释 |
| 重点 | 加进去的能不能测回来 | 稀释后回算是否一致 |
| 主要发现 | 基质抑制或增强 | 基质效应、Hook effect、非线性 |
| 常用于 | 验证样本类型可测性 | 确定最佳稀释倍数 |

两者互补。只做标准曲线不做样本基质验证，容易得到“曲线很好但样本不可信”的结果。

## 常见错误与 troubleshooting

| 异常 | 可能原因 | 调整方向 |
| --- | --- | --- |
| 回收率低 | 基质抑制、目标物吸附或降解 | 增加样本稀释倍数，优化 [样本稀释液](<../../材(实验耗材工具篇)/样本稀释液.md>) |
| 回收率高 | 背景扣除错误、交叉反应 | 检查空白和未加标样本 |
| 低水平回收差 | 接近 LLOQ，噪音占比大 | 提高加标水平或增加复孔 |
| 不同样本差异大 | 个体基质不同 | 扩大样本数量并分样本类型验证 |
| 加标后曲线外 | 加标浓度太高 | 重新设置加标水平 |

## 记录模板

中文记录：

```text
检测项目：
方法/试剂盒：
样本类型：
样本编号：
加标材料：
加标材料批号：
未加标浓度：
加标水平：低 / 中 / 高
理论加标浓度：
测得浓度：
回收率：
样本稀释倍数：
接受标准：
结论：
备注：
```

English record:

```text
Target analyte:
Method/kit:
Sample type:
Sample ID:
Spike material:
Spike material lot:
Unspiked concentration:
Spike level: low / mid / high
Nominal spike concentration:
Measured concentration:
Recovery:
Sample dilution factor:
Acceptance criteria:
Conclusion:
Notes:
```

## 小结

Spike-and-recovery 是把标准曲线带回真实样本世界的检查。它告诉你“这个样本基质里，加进去的目标物能不能被测回来”，是判断 ELISA 是否适合某类样本的重要证据。

## 参考来源

- [ICH M10 Bioanalytical Method Validation and Study Sample Analysis](https://database.ich.org/sites/default/files/M10_Guideline_Step4_2022_0524.pdf)
- [ICH Q2(R2) Validation of Analytical Procedures](https://database.ich.org/sites/default/files/ICH_Q2%28R2%29_Guideline_2023_1130.pdf)
- [R&D Systems ELISA protocols](https://www.rndsystems.com/resources/protocols)
