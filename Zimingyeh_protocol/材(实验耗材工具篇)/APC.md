# APC

## 一句话定义

APC（Allophycocyanin，别藻蓝蛋白/异藻蓝蛋白）是一种来自藻类的 phycobiliprotein（藻胆蛋白）类远红荧光标记，常用于 [流式细胞术](<../用(实验流程内容篇)/流式细胞术.md>) 中 633/640 nm 红光激光激发的通道。

APC 通常发射在约 660 nm 附近，远红区域背景相对较低，亮度较高，因此常用于重要 marker 或低表达 marker。BioLegend、BD 和 Thermo Fisher 的流式荧光资料都将 APC 作为流式 panel 中常用的高亮度远红染料。[参考：BioLegend Fluorophore Guide](https://www.biolegend.com/en-us/fluorophore-guide)；[参考：Thermo Fisher Fluorescence SpectraViewer](https://www.thermofisher.com/order/fluorescence-spectraviewer)

## 核心特点

| 特点 | 说明 |
| --- | --- |
| 颜色区域 | 远红 |
| 常见激发 | 633/640 nm 红光激光 |
| 常见发射 | 660 nm 附近 |
| 亮度 | 高，适合低表达 marker |
| 背景 | 远红通道常较低 |
| 局限 | 分子大，串联 APC 染料稳定性需注意 |

APC 的价值在于亮且远红，能避开很多绿色/橙色通道的背景和拥挤。

## 常见用途

- 流式细胞术抗体标记。
- 低表达细胞表面 marker 检测。
- 与 FITC、PE、PerCP、BV 系列构成多色 panel。
- 作为串联染料 donor，例如 APC-Cy7。

## APC vs PE

| 维度 | APC | [PE](PE.md) |
| --- | --- | --- |
| 常见激光 | 633/640 nm | 488/561 nm |
| 发射区域 | 远红 | 橙红 |
| 背景 | 通常较低 | 取决于样本和通道 |
| 亮度 | 高 | 很高 |
| Panel 价值 | 适合低表达或关键 marker | 适合最低表达或最关键 marker |
| 常见串联 | APC-Cy7 | PE-Cy7、PE-CF594 |

如果仪器有红光激光，APC 是非常宝贵的通道。设计 panel 时通常把 PE/APC 留给关键 marker，而不是随便分配给高表达抗原。

## 使用 protocol

1. 确认流式仪有红光激光和 APC 检测通道。
2. 根据 marker 表达量选择 APC 标记抗体。
3. 做抗体滴定，确定最佳 staining index。
4. 避光染色和洗涤。
5. 使用 APC 单染补偿对照。
6. 上机时固定电压/增益和门控策略。

APC 与 APC-Cy7 不是同一个通道。含 APC 的串联染料需要单独补偿和稳定性评估。

## 注意事项

- APC 标记抗体避光保存。
- APC 是大分子荧光蛋白，不适合所有需要小标签的应用。
- APC-Cy7 等串联染料可能受固定、光照和时间影响。
- 多色流式中要设置单染对照和 FMO 对照。
- 红光通道如果仪器配置不同，APC 表现会不同。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| APC 无信号 | 仪器无红光激光或通道设置错误 | 检查仪器配置 |
| 背景高 | 抗体过量、死细胞多、Fc 结合 | 滴定抗体，加入活死染和 Fc block |
| APC-Cy7 补偿异常 | 串联染料降解 | 避光，使用新鲜单染对照 |
| 弱阳性不清 | marker 表达低或抗体不合适 | 用 APC/PE 等高亮通道并优化克隆 |
| 批次不可比 | 仪器 PMT/增益或抗体 lot 变化 | 固定设置并记录批号 |

## 记录模板

中文模板：

```text
APC 标记抗体/试剂：
品牌：
货号：
批号：
靶标：
克隆号：
抗体用量：
细胞数：
孵育时间：
激光/检测通道：
补偿对照：
是否滴定：
备注：
```

English record template:

```text
APC-conjugated antibody / reagent:
Brand:
Catalog number:
Lot number:
Target:
Clone:
Antibody amount:
Cell number:
Incubation time:
Laser / detection channel:
Compensation control:
Titrated: yes / no
Notes:
```

## 小结

APC 是流式细胞术中非常重要的远红高亮染料，适合低表达或关键 marker。它需要红光激光支持，并且在多色 panel 中必须配合单染补偿、抗体滴定和清晰的仪器参数记录。

## 参考来源

- [BioLegend Fluorophore Guide](https://www.biolegend.com/en-us/fluorophore-guide)
- [Thermo Fisher Fluorescence SpectraViewer](https://www.thermofisher.com/order/fluorescence-spectraviewer)
