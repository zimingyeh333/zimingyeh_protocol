# BD Biosciences

BD Biosciences（Becton, Dickinson and Company Biosciences，BD 生命科学业务）是 flow cytometry（流式细胞术）仪器、流式抗体、细胞分析和相关 reagent（试剂）中非常常见的供应商。它的特点是“仪器平台 + 抗体/染料 + 分析资源”结合得比较紧。

## 核心定位

BD Biosciences 在本知识库中主要作为流式生态供应商理解：流式细胞仪、cell sorter（细胞分选仪）、fluorochrome-conjugated antibodies（荧光染料偶联抗体）、compensation beads（补偿微珠）、buffer、single-cell multiomics（单细胞多组学）相关系统等。BD 官方提供 BD Spectrum Viewer，用于查看荧光染料的 excitation/emission（激发/发射）和多色搭配，是理解 [光谱重叠](<../补充知识/光谱重叠.md>) 与 [荧光补偿](<../补充知识/荧光补偿.md>) 的实用工具。参考：[BD Spectrum Viewer](https://www.bdbiosciences.com/en-us/resources/bd-spectrum-viewer)。

在 protocol 中，BD 更常出现在 [流式细胞术](<../../用(实验流程内容篇)/流式细胞术.md>)、[流式抗体](<../../材(实验耗材工具篇)/流式抗体.md>)、panel design（多色面板设计）和仪器记录里，而不是作为普通细胞培养试剂供应商。

## 核心优势

| 优势 | 对实验的意义 |
| --- | --- |
| 流式仪器和试剂生态完整 | 仪器、抗体、染料、补偿和分析资源可以配套 |
| 临床和标准化流式基础强 | 适合免疫表型、临床相关 flow panel 和长期 SOP |
| Spectrum Viewer 等工具 | 便于预估光谱重叠和设计补偿 |
| 流式抗体选择丰富 | 可与 [BioLegend](BioLegend.md)、Thermo Fisher/Invitrogen 等比较 clone 和 dye |

## 什么时候优先考虑 BD Biosciences

- 实验室主要使用 BD FACSCanto、LSRFortessa、FACSymphony、FACSAria 等 BD 流式仪器。
- protocol 或临床/转化体系指定 BD antibody clone、BD buffer 或 BD beads。
- 需要结合仪器激光/滤光片配置设计多色 panel。
- 做免疫表型、细胞分选、补偿控制和标准化 flow cytometry SOP。

## 不要过度迷信的地方

- BD 抗体并不自动优于 BioLegend、Thermo Fisher/Invitrogen、Miltenyi 或其他品牌；关键仍是 clone、fluorophore、验证应用和批号。
- 仪器是 BD，不代表所有抗体都必须用 BD。多色 panel 常常需要跨品牌组合。
- 只写“BD CD3 antibody”不够，必须记录 clone、fluorophore、货号、批号、用量、细胞数和染色体积。
- 对 spectral flow（光谱流式），传统补偿经验需要结合 unmixing（光谱拆分）重新设计。

## 与 BioLegend 的区别

| 项目 | BD Biosciences | [BioLegend](BioLegend.md) |
| --- | --- | --- |
| 强项 | 流式仪器平台 + 抗体/试剂生态 | 免疫学抗体、多色 panel、clone/dye 选择 |
| 常见记录 | 仪器型号、laser/filter、抗体货号、补偿微珠 | clone、fluorophore、抗体 panel、FMO 控制 |
| 适合场景 | 仪器和 SOP 绑定强的 flow 项目 | 灵活搭建免疫 panel 和比较抗体组合 |
| 共同风险 | 不能只写品牌；必须写 clone、dye、lot、用量和控制 |

## Protocol 中如何记录

推荐记录模板（中文）：

```text
产品类型：仪器/抗体/补偿微珠/buffer/其他
品牌：BD Biosciences
产品名称：
货号：
批号：
抗体clone：
荧光染料：
仪器型号：
激光/滤光片配置：
细胞数：
染色体积：
补偿控制：
FMO控制：
异常现象：
```

Recommended record template (English):

```text
Product type: instrument/antibody/compensation bead/buffer/other
Brand: BD Biosciences
Product name:
Catalog number:
Lot number:
Antibody clone:
Fluorophore:
Instrument model:
Laser/filter configuration:
Cell number:
Staining volume:
Compensation control:
FMO control:
Abnormal observation:
```

## 小结

BD Biosciences 最适合被理解为“流式平台生态供应商”。它的价值在于仪器、抗体、染料、补偿和分析资源之间衔接紧密；但任何流式实验最终都要落到 clone、fluorophore、lot、instrument configuration 和 controls 上，品牌名本身不够。

## 参考来源

- [BD Biosciences](https://www.bdbiosciences.com/en-us)
- [BD Spectrum Viewer](https://www.bdbiosciences.com/en-us/resources/bd-spectrum-viewer)
- [BD Flow Cytometry Reagents](https://www.bdbiosciences.com/en-us/products/reagents/flow-cytometry-reagents)
