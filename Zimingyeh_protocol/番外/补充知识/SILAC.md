# SILAC

SILAC（Stable Isotope Labeling by Amino acids in Cell culture，细胞培养稳定同位素氨基酸标记）是一种通过细胞代谢把稳定同位素氨基酸掺入蛋白中的定量蛋白质组学方法。它常用于细胞模型中比较两个或多个条件下的蛋白丰度变化。

![LC-MS 定量策略概览](../../z_asset/番外/补充知识/LC-MS定量策略/lcms-quantification-strategies-zh.png)

图源：Image2 生成的 LC-MS 定量策略示意图。SILAC 对应图中的“轻 L / 重 H”峰对路线。

## 基本原理

SILAC 的核心是把细胞分别培养在 light（轻）和 heavy（重）氨基酸培养基中。heavy 培养基常使用含稳定同位素的赖氨酸或精氨酸。细胞经过多代传代后，新合成蛋白会掺入对应同位素氨基酸。样本混合后，同一肽段在质谱中表现为轻、重两个峰，峰面积比代表相对丰度。

Ong 等在 2002 年系统展示了 SILAC 可用于准确比较细胞蛋白表达。参考：[Ong et al., 2002](https://doi.org/10.1074/mcp.M200025-MCP200)。

## 典型流程

```text
轻培养基培养对照细胞
重培养基培养处理细胞
-> 传代至标记充分
-> 处理或收样
-> 早期混合样本
-> 蛋白提取、酶切
-> LC-MS/MS
-> 计算 H/L 峰面积比
```

SILAC 的优势在于样本可以很早混合，后续裂解、沉淀、酶切、脱盐和上机过程中产生的技术误差会同时影响轻重肽段，因此对相对定量的影响较小。

## 适合什么实验

| 场景 | 为什么适合 |
| --- | --- |
| 细胞处理组 vs 对照组 | 细胞可直接代谢标记 |
| 蛋白互作或免疫沉淀质谱 | 混合后一起富集，减少 pull-down 误差 |
| 脉冲 SILAC | 观察新生蛋白合成或周转 |
| 定量细胞器/亚细胞组分 | 分离前可混合，减少后处理偏差 |

## 不适合什么情况

| 情况 | 原因 |
| --- | --- |
| 临床血浆、组织样本 | 无法在体外长期稳定代谢标记 |
| 原代细胞短期培养 | 传代有限，标记可能不完全 |
| 对培养条件极敏感的细胞 | 特殊培养基可能改变细胞状态 |
| 极大样本队列 | 通道数有限，不如 TMT/iTRAQ 或 label-free 灵活 |

## SILAC vs TMT/iTRAQ vs label-free

| 方法 | 混合发生在什么时候 | 主要优势 | 主要限制 |
| --- | --- | --- | --- |
| SILAC | 通常在细胞收样或裂解早期 | 技术误差小，细胞模型定量稳定 | 依赖代谢标记 |
| [TMT](TMT.md) / [iTRAQ](iTRAQ.md) | 酶切和化学标记后 | 多通道高通量 | 试剂贵，比例压缩风险 |
| [label-free定量](label-free定量.md) | 不混合，各样本独立上机 | 成本低，样本数灵活 | 批间差异和缺失值更明显 |

## 关键注意事项

| 问题 | 后果 | 处理 |
| --- | --- | --- |
| 标记不完全 | 轻重峰解释混乱 | 传代足够代数并检查掺入率 |
| arginine-to-proline conversion（精氨酸转脯氨酸） | 产生额外峰，影响定量 | 调整精氨酸浓度或分析时校正 |
| 细胞生长状态不同 | 定量差异混入培养基效应 | 先确认轻/重培养基本身不改变表型 |
| 混合比例不准 | 全局 H/L 偏移 | 混合前做蛋白定量并设置反向标记 |
| 只做单向标记 | 难排除标签本身偏差 | 关键实验可做 label-swap（标签互换） |

## 小结

SILAC 是细胞模型中非常干净的相对定量策略。它的优势不是通道数，而是早期混合和代谢标记带来的误差控制；它的限制也很明确：必须能在细胞培养条件下稳定掺入同位素氨基酸。

## 参考来源

- [Ong et al., Stable isotope labeling by amino acids in cell culture, SILAC, as a simple and accurate approach to expression proteomics, Molecular & Cellular Proteomics, 2002](https://doi.org/10.1074/mcp.M200025-MCP200)
- [Mann, Functional and quantitative proteomics using SILAC, Nature Reviews Molecular Cell Biology, 2006](https://doi.org/10.1038/nrm2023)
