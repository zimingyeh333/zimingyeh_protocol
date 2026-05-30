# BioLegend

BioLegend（中文通常直接写 BioLegend；现为 [Revvity](Revvity.md) 旗下品牌）是免疫学、flow cytometry（流式细胞术）、抗体、荧光染料偶联抗体和细胞因子相关试剂中非常常见的供应商。它最强的识别点不是“某个单一试剂”，而是 antibody clone（抗体克隆）、fluorophore（荧光染料）和 panel design（多色 panel 设计）组合能力。

![重组蛋白与免疫试剂供应商定位图](../../z_asset/番外/试剂厂商/重组蛋白与免疫试剂供应商/recombinant-protein-immunology-supplier-map.png)

图源：Image2 生成的供应商定位图；这张图只表达常见使用倾向，不代表完整产品线。

## 品牌关系与核心定位

BioLegend 是免疫学和流式抗体领域常见品牌，产品覆盖 antibodies（抗体）、proteins（蛋白）、ELISA kits（ELISA 试剂盒）、buffers（缓冲液）、cell separation（细胞分选/富集）和相关免疫学试剂。BioLegend 官网的 about 页面将其定位为 antibody and reagent company（抗体和试剂公司），并强调面向 biomedical research（生物医学研究）的产品。参考：[BioLegend About Us](https://www.biolegend.com/en-us/about-us)。

现在 BioLegend 属于 [Revvity](Revvity.md) 体系。对使用者而言，实际采购和记录时最重要的仍然是 BioLegend 品牌、货号、克隆号、荧光标记、批号和应用验证。

## 核心优势

| 优势 | 对实验的意义 |
| --- | --- |
| 流式抗体选择多 | 同一 marker 常有多个 clone 和多种 fluorophore 可选 |
| 多色 panel 资料丰富 | 适合免疫表型分析、细胞亚群区分和复杂 panel 搭建 |
| 染料/抗体组合经验强 | 和 [荧光补偿](<../补充知识/荧光补偿.md>)、[光谱重叠](<../补充知识/光谱重叠.md>) 高度相关 |
| 免疫学 reagent 覆盖广 | 细胞因子、ELISA、buffer、blocking reagent 等可配套使用 |

BioLegend 的 Fluorophore Guide（荧光染料指南）可以帮助查询 excitation/emission（激发/发射）、brightness（亮度）和多色搭配思路，是设计流式 panel 时很实用的资料入口。参考：[BioLegend Fluorophore Guide](https://www.biolegend.com/en-us/fluorophore-guide)。

## 适合优先考虑 BioLegend 的情况

- 做 [流式细胞术](<../../用(实验流程内容篇)/流式细胞术.md>)，尤其是免疫细胞表型、T cell/NK cell/B cell/myeloid cell panel。
- 需要选择具体 antibody clone（抗体克隆）和 fluorophore（荧光染料）组合。
- 需要同一抗体靶点在多个荧光通道之间做选择，以降低补偿压力。
- 做细胞因子 intracellular staining（胞内染色）、surface marker staining（表面标志物染色）或 viability dye（活死染）组合。
- 需要参考流式 panel 设计、光谱重叠和补偿控制。

## 不要过度迷信的地方

- BioLegend 不是所有抗体应用的默认最优选择。用于 Western blot（蛋白免疫印迹）或免疫荧光时，要看该 clone 是否明确验证了对应应用。
- 同一 marker 的不同 clone 可能识别不同 epitope（表位），不能只按 CD 名称替换。
- 同一个 clone 换成不同 fluorophore 后，背景、亮度、补偿和抗原检测能力都可能改变。
- 多色 panel 不是把“每个单色都好用”的抗体简单相加；染料亮度、抗原丰度、激光/滤光片、补偿和 FMO control（Fluorescence Minus One，对应通道缺一控制）都要一起设计。

## 与相近供应商对比

| 供应商 | 更强的典型场景 | 与 BioLegend 的区别 |
| --- | --- | --- |
| [R&D Systems](<R&D Systems.md>) | 重组蛋白、ELISA/immunoassays、部分抗体 | R&D 更偏蛋白靶点资料和免疫检测体系 |
| [PeproTech](PeproTech.md) | cytokine/growth factor 添加剂 | PeproTech 更偏培养用重组蛋白 |
| [Sino Biological](<Sino Biological.md>) | 哺乳动物表达蛋白、病毒抗原、定制蛋白/抗体 | Sino 更偏靶点蛋白和 custom service |
| [BD Biosciences](<BD Biosciences.md>) | 流式仪器、流式抗体和 clinical flow 生态 | BD 更像流式平台和抗体共同生态 |
| [Cell Signaling Technology](<Cell Signaling Technology.md>) | WB/IF 信号通路抗体 | CST 更偏信号通路和磷酸化抗体 |

## Protocol 中如何记录

推荐记录模板（中文）：

```text
抗体名称：
品牌：BioLegend
母公司：Revvity
货号：
批号：
克隆号：
靶点/marker：
物种反应性：
荧光染料：
应用：flow/IF/WB/ELISA/其他
稀释比例或用量：
染色体积：
细胞数：
补偿控制：
FMO控制：
异常现象：
```

Recommended record template (English):

```text
Antibody name:
Brand: BioLegend
Parent company: Revvity
Catalog number:
Lot number:
Clone:
Target/marker:
Species reactivity:
Fluorophore:
Application: flow/IF/WB/ELISA/other
Dilution or amount:
Staining volume:
Cell number:
Compensation control:
FMO control:
Abnormal observation:
```

## 小结

BioLegend 最适合被理解为“免疫学和流式抗体 panel 供应商”。它的关键记录点不是只写品牌，而是 clone、fluorophore、marker、应用验证、补偿控制和 FMO 控制。对于多色流式实验，这些信息往往比“是哪家公司”更决定结果是否可解释。

## 参考来源

- [BioLegend About Us](https://www.biolegend.com/en-us/about-us)
- [BioLegend Quality](https://www.biolegend.com/en-us/quality)
- [BioLegend Fluorophore Guide](https://www.biolegend.com/en-us/fluorophore-guide)
