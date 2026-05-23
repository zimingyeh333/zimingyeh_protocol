# PE

## 一句话定义

PE（Phycoerythrin，藻红蛋白）是一种来自藻类的 phycobiliprotein（藻胆蛋白）类强荧光蛋白，常作为 [流式细胞术](<../用(实验流程内容篇)/流式细胞术.md>) 中非常明亮的橙色/红橙色荧光标记。

PE 通常由 488 nm 或 561 nm 激光激发，发射在 575 nm 左右，常用 PE 通道检测。BioLegend、BD 和 Thermo Fisher 的流式荧光染料资料都将 PE 作为流式中高亮度、常用的荧光标记之一。[参考：BioLegend Fluorophore Guide](https://www.biolegend.com/en-us/fluorophore-guide)；[参考：Thermo Fisher Fluorescence SpectraViewer](https://www.thermofisher.com/order/fluorescence-spectraviewer)

## 核心特点

| 特点 | 说明 |
| --- | --- |
| 亮度 | 很亮，适合低表达抗原 |
| 激发 | 488 nm 可用，561 nm 通常更理想 |
| 发射 | 橙色/红橙色区域 |
| 常见应用 | 流式细胞术、少数成像应用 |
| 局限 | 分子大，不适合所有标记；与相邻通道有串色 |

PE 的优势是亮，特别适合低丰度标志物；但正因为亮，它也容易造成通道溢出和补偿压力。

## 常见用途

- 流式抗体标记。
- 低表达细胞表面 marker 检测。
- 与 FITC、APC、PerCP 等组成多色 panel。
- 作为串联染料 donor，例如 PE-Cy7、PE-CF594。

## PE vs FITC vs APC

| 维度 | PE | [FITC](FITC.md) | [APC](APC.md) |
| --- | --- | --- | --- |
| 常见亮度 | 高 | 中低 | 高 |
| 常见激发 | 488/561 nm | 488 nm | 633/640 nm |
| 常见用途 | 低表达 marker | 常规绿色通道 | 远红通道低背景检测 |
| 串色压力 | 对相邻通道明显 | 常见但可控 | 与 APC-Cy7 等需注意 |
| 是否蛋白染料 | 是，藻胆蛋白 | 小分子染料 | 是，藻胆蛋白 |

流式 panel 设计中，PE 和 APC 通常留给更低表达或更重要的 marker，FITC 可用于较高表达 marker。

## 使用 protocol

1. 根据抗原表达量和 panel 设计选择 PE 标记抗体。
2. 按说明书或滴定结果设置抗体用量。
3. 避光孵育细胞。
4. 洗涤后避光上机。
5. 使用单染 PE compensation control 设置 [荧光补偿](../番外/补充知识/荧光补偿.md)。

抗体滴定很重要。PE 很亮，过量抗体会增加背景和 spreading error（扩散误差）。

## 注意事项

- PE 标记抗体需要避光保存。
- PE 是较大的荧光蛋白，某些小分子标记或空间受限抗原可能受影响。
- PE 串联染料不等于 PE，稳定性和补偿要求更复杂。
- 固定/通透条件可能影响 PE 或串联 PE 染料表现。
- 低表达 marker 优先考虑 PE，但必须做 FMO 和单染对照。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| PE 背景高 | 抗体过量、Fc 结合、死细胞多 | 抗体滴定，Fc block，加入活死染 |
| 相邻通道变宽 | PE 信号太强或补偿不准 | 降低抗体量，重新补偿 |
| PE-Cy7 信号异常 | 串联染料降解 | 避光，使用新鲜补偿对照 |
| 弱阳性分不清 | marker 表达低或 panel 分配不合理 | 把 PE 留给关键低表达 marker |
| 批次变化 | 抗体 lot 或仪器设置不同 | 固定批号并记录 PMT/增益 |

## 记录模板

中文模板：

```text
PE 标记抗体/试剂：
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
PE-conjugated antibody / reagent:
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

PE 是流式细胞术中非常明亮、非常常用的染料，尤其适合低表达 marker。它的关键不是“越亮越好”，而是合理分配给重要或弱表达指标，并通过抗体滴定、单染补偿和 FMO 对照控制背景与串色。

## 参考来源

- [BioLegend Fluorophore Guide](https://www.biolegend.com/en-us/fluorophore-guide)
- [Thermo Fisher Fluorescence SpectraViewer](https://www.thermofisher.com/order/fluorescence-spectraviewer)
