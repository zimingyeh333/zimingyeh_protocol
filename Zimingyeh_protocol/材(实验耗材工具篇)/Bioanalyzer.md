# Bioanalyzer

Bioanalyzer（常指 Agilent 2100 Bioanalyzer，生物分析仪）是一类基于 microfluidic electrophoresis（微流控电泳）的核酸和蛋白分析仪器。RNA 实验中，它常用于判断 RNA 片段分布、rRNA 峰形和 [RNA完整性](<../番外/补充知识/RNA完整性.md>)，并可给出 RIN（RNA integrity number，RNA 完整性数值）。

![核酸质控仪器参考图](../z_asset/材/核酸质控仪器/nucleic-acid-qc-instruments-reference.png)

图源：Image2 生成的核酸质控仪器参考图；从左到右第 3 台为微流控芯片电泳分析仪示意，前方为芯片和样本管。

## 工作原理

Bioanalyzer 使用带微通道的芯片进行电泳分离，并通过荧光检测得到 electropherogram（电泳峰图）和虚拟 gel-like image（凝胶样图）。RNA 样本中 18S/28S rRNA 峰、基线和低分子片段分布可反映降解程度。

Agilent 2100 Bioanalyzer 官方资料将其定位为用于 RNA、DNA 和蛋白质样本 QC 的微流控分析平台；Agilent 的 RNA integrity number（RIN）算法用于客观评估总 RNA 完整性。[参考：Agilent 2100 Bioanalyzer](https://www.agilent.com/en/product/automated-electrophoresis/bioanalyzer-systems/bioanalyzer-instrument/2100-bioanalyzer-instrument-228250)；[参考：Agilent RNA Integrity Number](https://www.agilent.com/cs/library/applications/5989-1165EN.pdf)

## 能回答什么

| 问题 | Bioanalyzer 是否适合 |
| --- | --- |
| RNA 是否降解 | 适合 |
| RNA 片段大小分布 | 适合 |
| RNA 浓度是否准确 | 可估算，但不如专门定量稳定 |
| 样本是否有蛋白/酚污染 | 不直接回答 |
| 文库片段大小分布 | 适合，需对应 DNA kit |

## RIN 怎么理解

RIN 是 Agilent 提出的 RNA integrity number，通常从 1 到 10，数值越高代表 RNA 越完整。RIN 不是绝对“好/坏”标签，而要结合样本类型和下游实验判断。

| RIN 情况 | 常见理解 |
| --- | --- |
| 高 RIN | RNA 完整性好，适合高要求下游 |
| 中等 RIN | 可能适合 RT-qPCR，但 RNA-seq 要谨慎 |
| 低 RIN | 明显降解，长片段或全转录本分析风险高 |
| 特殊样本 | FFPE、血浆等样本不能简单用普通 RIN 标准判断 |

## Bioanalyzer vs TapeStation vs Qubit

| 工具 | 主要价值 | 局限 |
| --- | --- | --- |
| Bioanalyzer | 微流控电泳，峰图清晰，历史经典 | 芯片操作较精细，通量有限 |
| [TapeStation](TapeStation.md) | ScreenTape 系统，通量更灵活 | 耗材体系不同，结果指标不完全等同 |
| [Qubit荧光计](Qubit荧光计.md) | 特异浓度定量 | 不看片段完整性 |
| [微量紫外分光光度计](微量紫外分光光度计.md) | 快速浓度和纯度比值 | 不可靠判断完整性 |

## 使用 protocol

### 选择芯片和试剂

**怎么做**：根据样本类型选择 RNA 6000 Nano、RNA 6000 Pico、Small RNA、DNA High Sensitivity 等 kit。

**为什么**：不同 kit 的浓度范围和片段范围不同。低浓度 RNA 用错 kit 会没有可靠峰图。

**注意事项**：

- 样本浓度要在 kit 线性范围内。
- RNA 样本应避免 RNase 污染。
- 芯片和试剂按说明平衡到合适温度。

### 上样和运行

**怎么做**：按 kit protocol 装 gel-dye mix、marker、ladder 和样本，避免气泡，放入仪器运行。

**为什么**：微流控芯片对气泡和上样体积敏感，操作偏差会影响峰形。

**注意事项**：

- 不要触碰芯片微孔内部。
- 使用专用 vortex/priming 步骤。
- 样本上机前短暂离心。

### 解读结果

**怎么做**：看 electropherogram、gel-like image、RIN 或片段分布，而不是只看浓度。

**为什么**：完整性判断依赖峰形和降解片段分布。浓度正常不代表 RNA 完整。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 峰图异常 | 气泡、芯片污染、样本盐/酚残留 | 重做芯片，重新纯化样本 |
| RIN 很低 | RNA 降解 | 检查样本保存和提取流程 |
| ladder 失败 | 试剂或芯片操作问题 | 检查 kit 有效期和上样步骤 |
| 浓度与 Qubit 不一致 | 检测原理和线性范围不同 | 用 Qubit 做定量，Bioanalyzer 看完整性 |

## 购买与记录建议

常见厂商为 [Agilent](<../番外/试剂厂商/Agilent.md>)。购买和记录时要区分仪器、芯片 kit、reagent lot、ladder lot 和软件版本。

推荐记录：

```text
Instrument:
Kit/chip:
Catalog number:
Lot number:
Sample type:
Input concentration:
RIN:
Electropherogram checked: yes/no
Software version:
Operator/date:
```

## 小结

Bioanalyzer 是 RNA 完整性质控的经典工具。它不只是“测浓度”，更重要的是看 RNA 是否降解、峰形是否正常、片段分布是否适合下游 RT-qPCR、RNA-seq 或文库构建。

## 参考来源

- [Agilent 2100 Bioanalyzer Instrument](https://www.agilent.com/en/product/automated-electrophoresis/bioanalyzer-systems/bioanalyzer-instrument/2100-bioanalyzer-instrument-228250)
- [Agilent RNA Integrity Number Application Note](https://www.agilent.com/cs/library/applications/5989-1165EN.pdf)
