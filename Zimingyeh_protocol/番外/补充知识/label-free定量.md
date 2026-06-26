# label-free定量

Label-free quantification（LFQ，无标记定量）是在不使用同位素、TMT、iTRAQ 或 SILAC 等标记试剂的情况下，通过 LC-MS 数据中的峰强度、峰面积或谱图数量比较不同样本之间蛋白或肽段丰度的方法。

![LC-MS 定量策略概览](../../z_asset/番外/补充知识/LC-MS定量策略/lcms-quantification-strategies-zh.png)

图源：Image2 生成的 LC-MS 定量策略示意图。label-free 定量对应图中“不标记 / 峰面积比较”的路线。

## 核心逻辑

label-free 定量的基本流程是：

```text
样本分别前处理
-> 分别 LC-MS 上机
-> 肽段鉴定和峰提取
-> 跨样本对齐
-> 归一化
-> 比较蛋白或肽段丰度
```

它不像 [TMT](TMT.md)、[iTRAQ](iTRAQ.md) 或 [SILAC](SILAC.md) 那样把样本混合后一起测，而是每个样本独立上机。因此它成本低、样本数灵活，但更依赖仪器稳定性、色谱重现性和数据归一化。

## 两种常见读数

| 读数 | 英文 | 含义 | 特点 |
| --- | --- | --- | --- |
| [峰面积](峰面积.md) / 峰强度 | peak area / intensity | 肽段色谱峰面积或强度 | 更接近连续定量，现代 LFQ 常用 |
| [谱图计数](谱图计数.md) | spectral counting | 某蛋白被采集到的 MS/MS 谱图数量 | 简单但动态范围和低丰度表现较弱 |

MaxLFQ 通过 delayed normalization（延迟归一化）和 maximal peptide ratio extraction（最大肽段比值提取）改善了大规模 label-free 蛋白质组定量的准确性。参考：[Cox et al., 2014](https://doi.org/10.1074/mcp.M113.031591)。

## 适合什么场景

| 场景 | 为什么适合 |
| --- | --- |
| 探索性蛋白质组学 | 不需要昂贵标记试剂，样本数灵活 |
| 大样本队列初筛 | 不受 TMT plex 通道数限制 |
| 预算有限项目 | 主要成本来自上机和数据分析 |
| DIA 数据定量 | [DIA](DIA.md) 通常天然适合跨样本一致提取 |
| 已有历史样本 | 不需要重新标记，只要前处理和上机可控 |

## 不适合什么情况

| 情况 | 原因 |
| --- | --- |
| 批间差异很大的项目 | 独立上机更容易受批次效应影响 |
| 样本量极低且缺失多 | 低丰度肽段容易在部分样本中检测不到 |
| 需要严格绝对浓度 | LFQ 通常给 [相对定量](相对定量.md)，不是实际浓度 |
| 样本处理无法统一 | 前处理差异会直接进入定量结果 |

## label-free vs TMT/SILAC

| 方法 | 优势 | 限制 |
| --- | --- | --- |
| label-free | 便宜、样本数灵活、流程简单 | 批次效应、[缺失值](缺失值.md) 和归一化压力更大 |
| TMT/iTRAQ | 多样本混合，批间差异小，通量高 | 试剂贵，比例压缩和通道设计复杂 |
| SILAC | 细胞模型中误差小，早期混合 | 依赖代谢标记，不适合多数组织和临床样本 |

## 数据处理关键点

| 环节 | 注意事项 |
| --- | --- |
| 样本随机化 | 避免组别和上机顺序完全重合 |
| QC 样本 | 用 pooled QC 监控仪器漂移 |
| 峰对齐 | 保留时间漂移会影响跨样本匹配 |
| 归一化 | 校正总信号、上样量和仪器响应差异 |
| 缺失值处理 | 区分随机缺失和低丰度缺失 |
| 统计分析 | 不只看 fold change，也要看重复性和 FDR |

## 常见错误与 troubleshooting

| 异常 | 可能原因 | 调整方向 |
| --- | --- | --- |
| 组间差异集中在某一批次 | 批次效应或上机顺序偏倚 | 随机化上机，加入 pooled QC |
| 低丰度蛋白缺失很多 | DDA 采集随机性或信号太低 | 考虑 DIA、分级或靶向验证 |
| 总体信号差异很大 | 上样量、喷雾或 LC 状态不同 | 检查 TIC、BPC 和归一化前后分布 |
| 蛋白定量由少数肽段驱动 | 肽段特异性或干扰峰 | 查看 peptide-level 证据 |
| 统计显著但生物意义弱 | 样本量大或技术偏差 | 结合效应量、通路和验证实验 |

## 小结

label-free 定量是蛋白质组学里最灵活、成本最低的相对定量路线之一。它的核心风险是独立上机带来的批次效应、缺失值和归一化问题；真正可靠的 LFQ 项目，往往胜在样本随机化、QC 设计和数据处理，而不只是“没有标记试剂”。

## 参考来源

- [Cox et al., Accurate proteome-wide label-free quantification by delayed normalization and maximal peptide ratio extraction, Molecular & Cellular Proteomics, 2014](https://doi.org/10.1074/mcp.M113.031591)
- [Aebersold and Mann, Mass-spectrometric exploration of proteome structure and function, Nature, 2016](https://doi.org/10.1038/nature19949)
