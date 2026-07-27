# Delta-Delta Cq法

Delta-Delta Cq method（Delta-Delta Cq 法，也常写作 ΔΔCq 法、2^-ΔΔCt 法）是 [qPCR](<../../用(实验流程内容篇)/qPCR.md>) 和 [RT-qPCR](<../../用(实验流程内容篇)/RT-qPCR.md>) 中最常用的 relative quantification（[相对定量](相对定量.md)）方法之一，用来计算实验组相对于对照组的目标基因表达变化。

![Delta-Delta Cq 法示意图](<../../z_asset/番外/补充知识/Delta-Delta Cq法/delta-delta-cq-summary-zh.png>)

图：Delta-Delta Cq 法的核心计算链条。图中示例为实验组 ΔCq 高于对照组，因此 2^-ΔΔCq 小于 1，表示相对表达下降。本图由 Image2 / image-generation model 生成，用于个人学习笔记示意。

## 一句话理解

Delta-Delta Cq 法不是直接把两个 Cq 相减，而是先用 [内参基因](内参基因.md) 校正每个样本的输入量差异，再用对照组作为校准基准，最后把循环数差异转换成倍数变化。

```text
ΔCq = Cq(target gene) - Cq(reference gene)
ΔΔCq = ΔCq(experimental sample) - ΔCq(control sample)
Relative expression = 2^-ΔΔCq
```

Livak 和 Schmittgen 在 2001 年 Methods 论文中系统描述了 2^-ΔΔCt 方法，使它成为实时定量 PCR 相对表达分析的经典方法。参考：[Livak and Schmittgen, 2001](https://pubmed.ncbi.nlm.nih.gov/11846609/)。

## 每一步在校正什么

| 步骤 | 计算 | 意义 | 如果跳过会怎样 |
| --- | --- | --- | --- |
| 目标 Cq | Cq(target) | 目标基因原始扩增循环 | 只能说明扩增早晚，不能直接比较表达 |
| ΔCq | Cq(target) - Cq(reference) | 校正样本输入量、RNA 量和逆转录量差异 | 样本上样量差异会被误认为表达差异 |
| ΔΔCq | ΔCq(experiment) - ΔCq(control) | 把对照组设为基准 | 无法得到相对于对照的 fold change |
| 2^-ΔΔCq | 把循环差转换为倍数 | 得到直观的相对表达量 | 只剩循环数差，不容易解释生物幅度 |

## 结果怎么解释

| ΔΔCq | 2^-ΔΔCq | 常见解释 |
| --- | --- | --- |
| 0 | 1 | 实验组与对照组相对表达无明显变化 |
| 正数 | 小于 1 | 实验组表达低于对照组 |
| 负数 | 大于 1 | 实验组表达高于对照组 |

例如：

```text
对照组 ΔCq = 3.6
实验组 ΔCq = 6.2
ΔΔCq = 6.2 - 3.6 = 2.6
2^-ΔΔCq = 2^-2.6 ≈ 0.16
```

这表示实验组目标基因相对表达约为对照组的 16%，也就是下降到约 0.16 倍。日常表达时可以写“相对表达降低约 84%”或“约 6.25 倍下调”，但后者容易给人过度确定的感觉，最好结合误差线和统计检验表达。

## 使用前提

Delta-Delta Cq 法的漂亮之处在于简洁，危险也在于太容易被机械套用。

| 前提 | 为什么重要 | 怎么检查 |
| --- | --- | --- |
| 目标基因和内参基因 [扩增效率](扩增效率.md) 接近 | 2^-ΔΔCq 默认每个循环近似 2 倍扩增 | 做稀释梯度和标准曲线，比较效率 |
| 内参基因在实验条件下稳定 | 内参变化会直接扭曲归一化结果 | 预实验验证多个候选内参 |
| 阴性对照干净 | 污染会造成假低 Cq | 检查 [无模板对照](无模板对照.md) 和 no-RT |
| 扩增特异 | SYBR 体系非特异产物也会发光 | 检查 [熔解曲线](熔解曲线.md) 或产物大小 |
| Cq 位于可靠范围 | 极晚 Cq 受随机性和背景影响大 | 结合检测限、复孔一致性和对照 |

MIQE 指南强调 qPCR 报告中应披露实验设计、样本信息、引物/探针、扩增效率、数据分析方法和对照，而不是只报告最终 fold change。参考：[MIQE guidelines, 2009](https://academic.oup.com/clinchem/article/55/4/611/5631762)；[MIQE 2.0, 2025](https://academic.oup.com/clinchem/article/71/6/634/8119148)。

## 和其他定量方法的区别

| 方法 | 是否需要内参 | 是否需要对照组 | 是否需要标准曲线 | 常见用途 |
| --- | --- | --- | --- | --- |
| ΔCq | 需要 | 不一定 | 不一定 | 同一样本内目标相对内参的比较 |
| Delta-Delta Cq | 需要 | 需要 | 不一定 | 实验组相对对照组的表达变化 |
| 标准曲线法 | 不一定 | 不一定 | 需要 | 拷贝数或绝对浓度估算 |
| 效率校正模型 | 通常需要 | 通常需要 | 需要效率信息 | 目标和内参效率不完全一致时 |
| [绝对定量](绝对定量.md) | 不一定 | 不一定 | 通常需要 | copies/µL、copies/reaction 等实际数量 |

## 常见错误与 troubleshooting

| 异常 | 可能原因 | 调整方向 |
| --- | --- | --- |
| fold change 很大但复孔差异也很大 | 低表达、移液误差、气泡、阈值设置问题 | 先看原始 Cq 和扩增曲线，不急着解释 fold change |
| 内参 Cq 在处理组明显变化 | 内参受处理影响或样本质量不一致 | 更换或增加内参，必要时使用多个内参几何平均 |
| 目标基因和内参效率差异明显 | 引物设计或体系表现不同 | 不用 2^-ΔΔCq，改用效率校正模型或重设 assay |
| NTC 或 no-RT 有扩增 | 污染、引物二聚体、gDNA 污染 | 排查污染源，DNase 处理，重新设计引物 |
| 只报告柱状图，不报告 Cq | 隐藏了数据质量 | 保留 raw Cq、ΔCq、复孔和异常孔处理记录 |

## 小结

Delta-Delta Cq 法是 RT-qPCR 相对表达分析的主力方法。它真正比较的不是原始 Cq，而是“目标基因相对内参的变化，再相对对照组的变化”。只要扩增效率接近、内参稳定、对照干净，它非常好用；如果这些前提不成立，2^-ΔΔCq 的简洁会变成误导。

## 参考来源

- [Livak and Schmittgen, Analysis of relative gene expression data using real-time quantitative PCR and the 2^-ΔΔCt method, Methods, 2001](https://pubmed.ncbi.nlm.nih.gov/11846609/)
- [MIQE guidelines, Clinical Chemistry, 2009](https://academic.oup.com/clinchem/article/55/4/611/5631762)
- [MIQE 2.0, Clinical Chemistry, 2025](https://academic.oup.com/clinchem/article/71/6/634/8119148)
- [Vandesompele et al., Accurate normalization of real-time quantitative RT-PCR data, Genome Biology, 2002](https://pmc.ncbi.nlm.nih.gov/articles/PMC126239/)
