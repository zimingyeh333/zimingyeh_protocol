# MIQE

MIQE（Minimum Information for Publication of Quantitative Real-Time PCR Experiments，定量实时 PCR 实验发表最低信息标准）是一套用于规范 [qPCR](<../../用(实验流程内容篇)/qPCR.md>) 和 [RT-qPCR](<../../用(实验流程内容篇)/RT-qPCR.md>) 实验设计、数据分析和论文报告的指南。

## 一句话理解

MIQE 不是一个实验步骤，而是一份“qPCR 结果能不能被别人判断和复现”的最低信息清单。

2009 年 MIQE 指南指出，qPCR 实验报道不充分会影响结果解释和重复性，因此建议系统披露样本、核酸质量、逆转录、引物/探针、反应条件、扩增效率、数据分析和对照信息。参考：[MIQE guidelines, 2009](https://academic.oup.com/clinchem/article/55/4/611/5631762)。

MIQE 2.0 于 2025 年发表，进一步更新了对 assay design（实验设计）、sample storage（样本保存）、nucleic acid preparation（核酸制备）、PCR efficiency（PCR 效率）、melting curve analysis（熔解曲线分析）、data processing（数据处理）和 controls（对照）的建议。参考：[MIQE 2.0, 2025](https://academic.oup.com/clinchem/article/71/6/634/8119148)。

## MIQE 关注什么

| 模块 | 需要记录什么 | 为什么重要 |
| --- | --- | --- |
| 样本来源 | 物种、组织、细胞系、处理条件、取样时间 | 判断样本是否可比 |
| 样本保存 | 保存温度、时间、冻融次数、稳定剂 | RNA/DNA 降解会影响 Cq |
| 核酸提取 | 提取方法、DNase 处理、浓度、纯度、完整性 | 模板质量是 qPCR 地基 |
| 逆转录 | 酶、引物类型、输入 RNA、反应条件 | RT 步骤会显著影响表达分析 |
| 引物/探针 | 序列、扩增子长度、特异性验证 | 决定扩增对象是否正确 |
| 反应体系 | master mix、体积、引物浓度、仪器型号 | 决定体系可复现性 |
| 扩增效率 | 标准曲线、效率、线性范围 | 决定 Cq 能否可靠换算 |
| 熔解曲线 | SYBR 体系的熔解峰或产物验证 | 判断非特异扩增和引物二聚体 |
| 对照 | NTC、no-RT、阳性/阴性对照 | 判断污染、gDNA 和体系失败 |
| 数据处理 | Cq 算法、阈值、基线、归一化、统计方法 | 避免软件黑箱和选择性分析 |

## 它和普通 protocol 的关系

普通 protocol 关注“怎么做”；MIQE 关注“做完以后别人能不能判断这个结果可信不可信”。所以在写实验记录时，MIQE 更像一层质控框架：

- protocol 说清步骤。
- MIQE 要求说清样本、试剂、仪器、参数和数据处理。
- 原始数据保留 [Cq值](Cq值.md)、[扩增曲线](扩增曲线.md)、[熔解曲线](熔解曲线.md)、阈值和异常孔处理，而不只保留最终柱状图。

## 对个人实验记录最有用的部分

如果不是正式投稿，也不一定每天完整填一张 MIQE 表。但至少建议把下面信息写进实验记录：

| 最低记录项 | 示例 |
| --- | --- |
| 样本 | 细胞系、处理条件、处理时间、生物学重复数 |
| 核酸 | RNA/DNA 提取方法、浓度、A260/A280、A260/A230、RIN 或胶图 |
| 逆转录 | 输入 RNA 量、逆转录试剂盒、引物类型、批号 |
| assay | 目标基因、内参基因、引物/探针序列或 assay ID |
| qPCR | 仪器、软件版本、master mix、反应体积、程序、ROX 设置 |
| 质量控制 | NTC、no-RT、熔解曲线、扩增效率、复孔差异 |
| 分析 | ΔCq、ΔΔCq、标准曲线、异常孔排除标准、统计方法 |

## 常见误区

| 误区 | 问题 | 更好的做法 |
| --- | --- | --- |
| 只写“按说明书操作” | 别人不知道实际输入量、程序和分析参数 | 说明书之外记录关键变量 |
| 只报告 2^-ΔΔCq | 看不到原始 Cq 和质量控制 | 同时保留 raw Cq、ΔCq、扩增曲线 |
| 内参不验证 | 处理条件可能改变内参表达 | 至少预实验比较候选内参 |
| NTC 有扩增但继续分析 | 污染或引物二聚体会影响结论 | 先排查阴性对照 |
| 阈值随意手动调整 | 容易人为改变 Cq | 使用一致规则并记录软件设置 |

## 和 dMIQE 的区别

[数字PCR](<../../用(实验流程内容篇)/数字PCR.md>) 和 [ddPCR](<../../用(实验流程内容篇)/ddPCR.md>) 不依赖实时扩增曲线，而是依赖 partition（分区）、阳性/阴性判读和泊松校正。因此 digital PCR 有对应的 dMIQE（digital MIQE，数字 PCR 最低信息标准）。dMIQE 2020 特别强调分区数、阈值设置、accepted partitions、阳性/阴性判读、置信区间和数据分析细节。参考：[dMIQE 2020 Guidelines](https://pubmed.ncbi.nlm.nih.gov/32746458/)。

## 小结

MIQE 的核心价值是把 qPCR 从“我得到一个漂亮 fold change”拉回到“别人能不能检查我的样本、assay、效率、对照和分析”。对于个人 protocol 来说，它不需要变成繁琐表格，但应该成为 qPCR 记录和论文方法部分的底层检查清单。

## 参考来源

- [Bustin et al., The MIQE guidelines, Clinical Chemistry, 2009](https://academic.oup.com/clinchem/article/55/4/611/5631762)
- [MIQE 2.0, Clinical Chemistry, 2025](https://academic.oup.com/clinchem/article/71/6/634/8119148)
- [dMIQE 2020 Guidelines, Clinical Chemistry, 2020](https://pubmed.ncbi.nlm.nih.gov/32746458/)
