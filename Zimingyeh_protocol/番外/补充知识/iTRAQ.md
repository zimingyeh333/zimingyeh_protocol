# iTRAQ

iTRAQ（isobaric Tags for Relative and Absolute Quantitation，同重异位相对与绝对定量标签）是一类用于 [蛋白质谱](<../../用(实验流程内容篇)/蛋白质谱.md>) 的胺反应性 [同重异位标签](同重异位标签.md)。它把不同样本的肽段分别标记为不同通道，混合后一起进行 LC-MS/MS，通过报告离子强度比较样本间丰度。

![LC-MS 定量策略概览](../../z_asset/番外/补充知识/LC-MS定量策略/lcms-quantification-strategies-zh.png)

图源：Image2 生成的 LC-MS 定量策略示意图。iTRAQ 和 TMT 都属于同重异位标签路线，区别主要在标签体系、通道设计和历史生态。

## 发明与定位

Ross 等在 2004 年报道了 iTRAQ，用于在酵母蛋白质组中进行多重蛋白定量。参考：[Ross et al., 2004](https://doi.org/10.1074/mcp.M400129-MCP200)。

虽然 iTRAQ 名字里有 relative and absolute quantitation（相对与绝对定量），但在实际蛋白质组项目中，它最常见的用途仍然是相对定量。若要做严格 [绝对定量](绝对定量.md)，通常还需要已知浓度标准品、同位素标记肽段或其他校准体系。

## 基本流程

```text
样本分组
-> 蛋白提取和定量
-> 胰蛋白酶酶切
-> 不同样本分别 iTRAQ 标记
-> 混合
-> LC-MS/MS
-> 读取 reporter ions
-> 数据归一化和统计
```

iTRAQ 的反应基团主要标记肽段 N 端和赖氨酸侧链氨基。标记后，不同通道的肽段在 MS1 中质量相同，碎裂后释放不同报告离子。

## 适合什么实验

| 场景 | 适合原因 |
| --- | --- |
| 处理组 vs 对照组 | 可直接比较通道间报告离子强度 |
| 小型多组蛋白质组 | 4plex 或 8plex 设计适合常规比较 |
| 富集后定量 | 磷酸化、泛素化等富集实验可减少批间差异 |
| 历史数据延续 | 旧项目或平台沿用 iTRAQ 时，方法连续性更好 |

## iTRAQ vs TMT

| 项目 | iTRAQ | [TMT](TMT.md) |
| --- | --- | --- |
| 英文全称 | isobaric Tags for Relative and Absolute Quantitation | tandem mass tag |
| 中文 | 同重异位相对与绝对定量标签 | 串联质量标签 |
| 核心原理 | 同重异位标签 + 报告离子 | 同重异位标签 + 报告离子 |
| 常见通道 | 4plex、8plex | 6plex、10/11plex、TMTpro 16/18plex 等 |
| 生态特点 | 早期经典体系，很多历史数据使用 | 当前商业生态和高通道产品更活跃 |
| 主要风险 | 标记效率、比例压缩、通道校正 | 同样存在，但高通道设计更复杂 |

两者不是“谁一定更准确”，而是同一类思想的不同产品体系。选择时应看平台是否成熟、数据分析流程是否支持、通道数是否满足实验设计、试剂是否容易采购。

## 关键注意事项

| 环节 | 注意事项 | 出错后果 |
| --- | --- | --- |
| 样本前处理 | 避免胺类缓冲液和高盐 | 标记效率下降 |
| 肽段定量 | 每个通道尽量等量 | 通道整体偏移 |
| 标记反应 | 控制 pH、时间、试剂比例 | 未标记肽段增加 |
| 混样 | 可先做小比例 test mix | 大批量混错难以补救 |
| 数据分析 | 需要通道校正和归一化 | 通道串扰或批次偏差 |

## 和 label-free/SILAC 的区别

| 方法 | 更适合 | 不适合 |
| --- | --- | --- |
| iTRAQ | 多组相对定量、同平台历史项目 | 极大样本数、预算受限项目 |
| [label-free定量](label-free定量.md) | 样本数灵活、低成本探索 | 批间漂移明显或缺失值敏感项目 |
| [SILAC](SILAC.md) | 细胞培养模型中的高精度比较 | 组织、血浆、临床样本 |

## 小结

iTRAQ 是同重异位标签定量的经典路线。理解它时不要只记“4plex/8plex”，更重要的是理解：它通过报告离子读数做相对定量，同时需要严控标记效率、通道平衡、共隔离干扰和数据校正。

## 参考来源

- [Ross et al., Multiplexed protein quantitation in Saccharomyces cerevisiae using amine-reactive isobaric tagging reagents, Molecular & Cellular Proteomics, 2004](https://doi.org/10.1074/mcp.M400129-MCP200)
- [Thompson et al., Tandem mass tags: a novel quantification strategy for comparative analysis of complex protein mixtures by MS/MS, Analytical Chemistry, 2003](https://doi.org/10.1021/ac0262560)
