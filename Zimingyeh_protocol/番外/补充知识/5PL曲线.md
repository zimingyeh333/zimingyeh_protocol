# 5PL曲线

5PL curve（five-parameter logistic curve，五参数逻辑曲线）是在 [4PL曲线](4PL曲线.md) 基础上加入 asymmetry parameter（不对称参数）的 S 形曲线模型，常用于拟合明显不对称的 ELISA 或免疫检测标准曲线。

![ELISA curve and matrix validation](../../z_asset/番外/ELISA曲线与基质验证/elisa-curve-matrix-validation.png)

图：ELISA 曲线拟合与基质验证。5PL 的重点是不强迫曲线左右对称，但参数更多，对标准点质量更敏感。本图由 Image2 / image-generation model 生成，用于个人学习笔记示意。

## 一句话理解

5PL 是“允许 S 形曲线不对称”的标准曲线模型。

在 [ELISA](<../../用(实验流程内容篇)/ELISA.md>) 中，有些标准曲线低端和高端并不镜像对称。如果强行用 4PL，低端或高端可能系统性偏差。5PL 可以改善这种偏差，但也更容易过拟合。

ICH Q2(R2) 对非线性响应方法强调应使用合适的校准模型和范围；ICH M10 也要求 calibration curve 能支持样本分析范围。模型选择应该服务于回算准确度、质控表现和样本解释，而不是单纯追求更复杂。参考：[ICH Q2(R2) Validation of Analytical Procedures](https://database.ich.org/sites/default/files/ICH_Q2%28R2%29_Guideline_2023_1130.pdf)；[ICH M10 Bioanalytical Method Validation](https://database.ich.org/sites/default/files/M10_Guideline_Step4_2022_0524.pdf)。

## 5PL 多了什么

5PL 比 4PL 多一个不对称参数。这个参数允许曲线一侧更陡、另一侧更缓。

| 模型 | 参数数量 | 曲线假设 |
| --- | --- | --- |
| 4PL | 4 | 上下平台之间相对对称 |
| 5PL | 5 | 允许 S 形曲线不对称 |

如果标准点数量少、复孔不稳或平台不清楚，多一个参数不一定是优点，反而可能让曲线被个别异常点拉偏。

## 何时考虑 5PL

可以考虑 5PL 的情况：

- 4PL 回算在低端或高端持续有系统偏差。
- 残差图显示一侧偏离明显。
- 标准点数量足够并覆盖完整曲线。
- 低、中、高质控样本在 5PL 下表现更好。
- 厂家说明书或软件推荐该检测项目使用 5PL。

不建议直接使用 5PL 的情况：

- 标准点很少。
- 曲线平台不完整。
- 只是为了提高 R²。
- 单板数据质量差，想用更复杂模型“救”曲线。
- 高端点已经受 Hook effect 或饱和异常影响。

## 5PL vs 4PL

| 问题 | 优先 4PL | 可考虑 5PL |
| --- | --- | --- |
| 曲线左右大致对称 | 是 | 不必要 |
| 低端/高端一侧系统偏差 | 可能不够 | 是 |
| 标准点数量有限 | 更稳 | 风险高 |
| 需要跨板长期一致性 | 更容易管理 | 需要更严格 QC |
| 软件默认模型 | 很常见 | 需确认参数和权重 |

实际选择可以用同一批数据比较 4PL 和 5PL 的标准点回算、QC 样本和样本复测表现，而不是只看曲线图。

## 权重和过拟合

5PL 对权重和异常点更敏感。一个低端标准点偏高，或一个高端标准点因为饱和偏低，都可能改变不对称参数。

因此用 5PL 时建议：

- 保留原始 OD 和板图。
- 查看标准点复孔 CV。
- 查看回算浓度，而不是只看图形。
- 比较 4PL 与 5PL 对低、中、高 QC 的影响。
- 不要随意删除“不好看”的标准点。

## 常见错误与 troubleshooting

| 异常 | 可能原因 | 调整方向 |
| --- | --- | --- |
| 5PL 曲线形状怪 | 标准点太少或异常点影响 | 检查原始 OD 和板图 |
| 低端变好但高端变差 | 权重或不对称参数过度补偿 | 比较 QC 表现 |
| 不同板 5PL 参数波动大 | 数据质量或范围不足 | 固定标准曲线范围和操作条件 |
| 软件收敛失败 | 初始参数或数据不支持模型 | 改用 4PL 或减少异常点影响 |
| 结果比 4PL 差异很大 | 模型选择影响报告值 | 用质控样本和稀释线性决定 |

## 记录模板

中文记录：

```text
检测项目：
标准曲线模型：5PL
软件：
权重方式：
标准点数量：
是否覆盖上下平台：
不对称参数：
和 4PL 比较结果：
低/中/高 QC 回算：
异常标准点：
是否最终采用 5PL：
备注：
```

English record:

```text
Target analyte:
Curve model: 5PL
Software:
Weighting:
Number of standards:
Both plateaus covered: yes / no
Asymmetry parameter:
Comparison with 4PL:
Low/mid/high QC back-calculation:
Abnormal standard points:
Final model selected: 5PL / other
Notes:
```

## 小结

5PL 适合明显不对称的标准曲线，但它不是更高级就更正确。只有当 5PL 改善回算、质控和样本解释时，才值得采用。

## 参考来源

- [ICH Q2(R2) Validation of Analytical Procedures](https://database.ich.org/sites/default/files/ICH_Q2%28R2%29_Guideline_2023_1130.pdf)
- [ICH M10 Bioanalytical Method Validation and Study Sample Analysis](https://database.ich.org/sites/default/files/M10_Guideline_Step4_2022_0524.pdf)
- [GraphPad Prism dose-response model](https://www.graphpad.com/guides/prism/latest/curve-fitting/reg_dr_stim_variable.htm)
