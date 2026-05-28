# TapeStation

TapeStation（常指 Agilent TapeStation 系列自动电泳系统）是一类基于 ScreenTape consumables（ScreenTape 耗材）的自动化电泳分析平台，用于 DNA、RNA 和文库片段大小分布分析。RNA 质控中，它常用于判断 [RNA完整性](<../番外/补充知识/RNA完整性.md>)，并可给出 RINe（RNA integrity number equivalent，RNA 完整性等效值）。

![核酸质控仪器参考图](../z_asset/材/核酸质控仪器/nucleic-acid-qc-instruments-reference.png)

图源：Image2 生成的核酸质控仪器参考图；最右侧为 TapeStation 类自动电泳仪器示意，前方为 ScreenTape 类耗材和上样管。

## 工作原理

TapeStation 使用预制 ScreenTape 通道和配套样本 buffer，对 RNA、DNA 或文库进行自动电泳分离，并输出 electropherogram（电泳峰图）、gel-like image（凝胶样图）和质量指标。Agilent 4200 TapeStation 官方资料将其定位为用于 DNA/RNA 样本 QC 的自动化电泳平台，可根据样本数量灵活运行。[参考：Agilent 4200 TapeStation System](https://www.agilent.com/en/product/automated-electrophoresis/tapestation-systems/tapestation-instruments/4200-tapestation-system-228263)

## 适合什么

| 场景 | TapeStation 的价值 |
| --- | --- |
| RNA 提取后完整性判断 | 查看降解情况和 RINe |
| RNA-seq 前 QC | 判断样本是否适合建库 |
| DNA 文库片段分布 | 检查文库大小和 adapter dimer |
| PCR 产物检查 | 看片段大小和副产物 |
| 多样本 QC | 自动化程度较高，通量灵活 |

## RINe 怎么理解

RINe 是 TapeStation 系统提供的 RNA integrity number equivalent。它与 Bioanalyzer 的 RIN 目标相似，都是帮助量化 RNA 完整性，但不同平台、算法和样本类型之间不能简单一比一替换。

| 情况 | 解释 |
| --- | --- |
| 高 RINe | RNA 完整性较好 |
| 低 RINe | RNA 降解明显 |
| 异常峰图 | 需要看电泳图，不只看 RINe 数字 |
| 特殊样本 | FFPE、小 RNA、降解样本要按项目标准判断 |

## TapeStation vs Bioanalyzer

| 项目 | TapeStation | [Bioanalyzer](Bioanalyzer.md) |
| --- | --- | --- |
| 耗材 | ScreenTape | Microfluidic chip |
| 通量 | 更灵活，适合批量 QC | 经典芯片流程，通量相对固定 |
| 指标 | RINe、DIN 等 | RIN、片段分布 |
| 操作 | 自动化更强 | 芯片制备更手工 |
| 结果用途 | RNA/DNA/文库 QC | RNA/DNA/蛋白 QC |

两者都适合 RNA 完整性判断，但实验室应固定平台和接受标准，避免把 RIN 与 RINe 直接混合比较。

## 使用 protocol

### 选择 ScreenTape

**怎么做**：根据样本类型选择 RNA ScreenTape、High Sensitivity RNA ScreenTape、D1000、High Sensitivity D1000 等耗材。

**为什么**：不同 ScreenTape 覆盖浓度范围和片段范围不同。

**注意事项**：

- RNA 和 DNA 用不同耗材。
- 低浓度样本选择 high sensitivity 版本。
- 确认样本 buffer 和 ladder 未过期。

### 配样和上机

**怎么做**：按 kit 说明混合样本和 sample buffer，短暂离心，放入仪器并选择对应 assay。

**为什么**：样本缓冲液和 assay 选择会影响迁移和峰图分析。

**注意事项**：

- 避免气泡。
- 样本浓度要在范围内。
- RNA 样本保持 RNase-free 操作。

### 解读结果

**怎么做**：同时查看 RINe、electropherogram 和 gel-like image。RNA 质控不要只看浓度或单个数字。

**为什么**：降解、污染、异常峰和样本过载都可能让自动指标失真。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| RINe 低 | RNA 降解或样本处理不当 | 检查提取、保存和冻融 |
| 峰图拖尾 | 盐、酚、胍盐或过载 | 重新纯化或稀释 |
| ladder 异常 | 耗材或上样问题 | 换耗材，检查 assay 设置 |
| 与 Bioanalyzer 不一致 | 平台算法不同 | 同一项目固定一个平台 |

## 购买与记录建议

常见厂商为 [Agilent](<../番外/试剂厂商/Agilent.md>)。记录时应写清仪器型号、ScreenTape 类型、reagent lot、sample buffer、software version 和 RINe/DIN 等指标。

推荐记录：

```text
Instrument:
ScreenTape type:
Reagent lot:
Sample type:
Input concentration:
RINe/DIN:
Electropherogram checked: yes/no
Gel-like image checked: yes/no
Software version:
Operator/date:
```

## 小结

TapeStation 是高通量、自动化程度较高的核酸片段分析平台。RNA 工作中，它最重要的价值是判断完整性和降解，而不是单纯测浓度；结果要结合峰图和下游用途解释。

## 参考来源

- [Agilent 4200 TapeStation System](https://www.agilent.com/en/product/automated-electrophoresis/tapestation-systems/tapestation-instruments/4200-tapestation-system-228263)
- [Agilent RNA ScreenTape Analysis](https://www.agilent.com/en/product/automated-electrophoresis/tapestation-systems/tapestation-dna-rna-screentape-reagents/rna-screentape-reagents-228258)
