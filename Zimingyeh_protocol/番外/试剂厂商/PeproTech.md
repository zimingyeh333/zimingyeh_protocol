# PeproTech

PeproTech（中文常称 PeproTech/派普泰克）是以 recombinant cytokines（重组细胞因子）、growth factors（生长因子）和 chemokines（趋化因子）为核心的蛋白试剂品牌，目前属于 [Thermo Fisher Scientific（赛默飞世尔科技）](赛默飞.md) / [Gibco](Gibco.md) 体系。它在细胞培养、免疫细胞扩增、干细胞分化、类器官和细胞治疗相关研发中经常出现。

![重组蛋白与免疫试剂供应商定位图](../../z_asset/番外/试剂厂商/重组蛋白与免疫试剂供应商/recombinant-protein-immunology-supplier-map.png)

图源：Image2 生成的供应商定位图；这张图只表达常见使用倾向，不代表完整产品线。

## 品牌关系与核心定位

PeproTech 原本是独立的重组蛋白供应商，后被 Thermo Fisher Scientific 收购并整合进其生命科学和细胞培养产品体系。Thermo Fisher 的 PeproTech 品牌页面将其定位为 recombinant proteins（重组蛋白）供应来源，覆盖 cytokines、growth factors、chemokines、neurotrophins（神经营养因子）和其他细胞培养/研究用蛋白。参考：[Thermo Fisher PeproTech Proteins](https://www.thermofisher.com/us/en/home/brands/peprotech.html)。

在这个知识库里，PeproTech 最适合作为“需要稳定、可追溯、活性明确的重组蛋白添加剂”时的供应商候选，而不是作为普通培养基或常规耗材供应商。

## 核心优势

| 优势 | 对实验的意义 |
| --- | --- |
| 蛋白/细胞因子产品线完整 | 适合搭建免疫细胞、干细胞、神经分化和类器官 cocktail |
| 资料相对规范 | 货号、批号、活性、来源和重构建议更容易写进 protocol |
| 与 Thermo Fisher/Gibco 体系衔接 | 对已经使用 Gibco 培养基、补充剂和 CTS 产品线的实验室比较方便 |
| 有面向更高质量要求的版本 | 某些课题从 research use（研究用途）向 GMP/clinical transition（GMP/临床转化）思考时更容易衔接 |

PeproTech 的价值不是“某一个蛋白一定最好”，而是当实验需要很多细胞因子和生长因子组合时，它能提供比较完整的选择空间。

## 适合优先考虑 PeproTech 的情况

- 免疫细胞培养：例如 [IL-2](<../../材(实验耗材工具篇)/IL-2.md>)、[IL-7](<../../材(实验耗材工具篇)/IL-7.md>)、[IL-15](<../../材(实验耗材工具篇)/IL-15.md>) 等 cytokine。
- 干细胞和分化体系：例如 [FGF2](<../../材(实验耗材工具篇)/FGF2.md>)、[Activin A](<../../材(实验耗材工具篇)/Activin A.md>)、[BMP4](<../../材(实验耗材工具篇)/BMP4.md>)。
- 神经细胞/神经分化：例如 [BDNF](<../../材(实验耗材工具篇)/BDNF.md>)、[GDNF](<../../材(实验耗材工具篇)/GDNF.md>)。
- 上皮和类器官体系：例如 [EGF](<../../材(实验耗材工具篇)/EGF.md>)、部分 Wnt/BMP/TGF-β 相关因子。
- 长期课题中需要固定品牌、货号和批号，减少重组蛋白来源变化带来的不确定性。

## 不要过度迷信的地方

PeproTech 仍然不能替代实验验证。重组蛋白效果强烈依赖：

- species（物种来源）：human、mouse、rat 等不一定可互换。
- expression system（表达系统）：E. coli、mammalian、insect 等会影响折叠、修饰、内毒素和活性。
- tag（标签）和 carrier protein（载体蛋白）：可能影响低浓度吸附、检测背景或功能实验。
- activity unit（活性单位）：不同厂商的 ng/mL 和 IU/mL 换算不能凭直觉替换。
- endotoxin（内毒素）：免疫细胞实验尤其敏感。

如果一个 protocol 原文指定了 [R&D Systems](<R&D Systems.md>)、[Sino Biological](<Sino Biological.md>) 或其他品牌，不建议只按“同名蛋白”直接替换；至少要比较物种、成熟片段、表达系统、活性测试、内毒素和重构说明。

## 与相近供应商对比

| 供应商 | 更强的典型场景 | 与 PeproTech 的区别 |
| --- | --- | --- |
| [R&D Systems](<R&D Systems.md>) | 重组蛋白、抗体、ELISA/immunoassays | R&D Systems 更像“蛋白 + 检测体系”供应商 |
| [BioLegend](BioLegend.md) | 流式抗体、多色 panel、免疫表型 | BioLegend 更适合 flow cytometry（流式细胞术）和抗体组合 |
| [Sino Biological](<Sino Biological.md>) | 哺乳动物表达重组蛋白、病毒抗原、定制服务 | Sino 更适合某些靶点蛋白、Fc 融合蛋白和定制表达 |
| [Gibco](Gibco.md) | 细胞培养基、FBS、PBS/DPBS、解离试剂 | Gibco 是培养体系主干，PeproTech 更偏功能蛋白添加剂 |

## Protocol 中如何记录

推荐记录模板（中文）：

```text
蛋白名称：
品牌：PeproTech
母公司/体系：Thermo Fisher Scientific / Gibco
货号：
批号：
物种来源：
表达系统：
是否carrier-free：
内毒素水平：
比活或活性单位：
重构液：
储液浓度：
工作终浓度：
冻融次数：
使用体系：
异常现象：
```

Recommended record template (English):

```text
Protein name:
Brand: PeproTech
Parent ecosystem: Thermo Fisher Scientific / Gibco
Catalog number:
Lot number:
Species source:
Expression system:
Carrier-free: yes/no
Endotoxin level:
Specific activity or activity unit:
Reconstitution buffer:
Stock concentration:
Working concentration:
Freeze-thaw cycles:
Experimental system:
Abnormal observation:
```

## 小结

PeproTech 最适合被理解为“重组细胞因子和生长因子供应商”。当实验依赖多个低浓度、高活性的蛋白信号输入时，它的优势是产品线完整、资料清楚、适合做长期项目记录。但实际替换时仍然要看活性、表达系统、内毒素、载体蛋白和批号，而不是只看蛋白名字。

## 参考来源

- [Thermo Fisher PeproTech Proteins](https://www.thermofisher.com/us/en/home/brands/peprotech.html)
