# Noggin

Noggin（Noggin protein，Noggin 蛋白）是一种 BMP antagonist（BMP 拮抗蛋白），能结合并抑制 BMP（Bone Morphogenetic Protein，骨形态发生蛋白）信号。在细胞培养中，Noggin 常用于类器官、干细胞分化和发育模型，尤其用于抑制 [BMP4](BMP4.md) 相关信号。

![专用培养支持因子参考图](../z_asset/材/专用培养支持因子/specialized-culture-support-factors-reference.png)

图源：Image2 生成的专用培养支持因子参考图；Noggin 位于类器官生态位模块，用于阻断 BMP 信号。

## 核心定位

Noggin 的核心功能不是提供营养，而是改变细胞所处的命运信号环境。R&D Systems 的 Recombinant Human Noggin 页面说明，Noggin 是 BMP antagonist，可结合 BMP-2、BMP-4 和 BMP-7 等 BMP 家族成员，阻断其与受体结合；该页面也在类器官培养示例中把 Noggin 与 R-Spondin 1、EGF 和 Wnt-3a 共同列为肠道类器官培养基组成。参考：[R&D Systems Recombinant Human Noggin](https://www.rndsystems.com/products/recombinant-human-noggin-protein_6057-ng)。

## 为什么类器官常加Noggin

许多上皮类器官体系需要维持 stem/progenitor 状态，同时避免过强 BMP 信号推动分化或抑制扩增。Noggin 的作用就是降低 BMP 压力，让 Wnt/R-spondin 等信号更容易维持特定生态位状态。

| 因子 | 方向 | 常见结果 |
| --- | --- | --- |
| BMP4 | 激活 BMP-SMAD1/5/8 | 促进某些分化/模式化信号 |
| Noggin | 抑制 BMP | 支持特定上皮类器官扩增或维持 |
| R-spondin | 增强 Wnt | 支持 Wnt 依赖 stemness |
| Wnt3A | 提供 Wnt 配体 | 激活 Wnt-β-catenin 信号 |

## Noggin vs BMP4/TGF-β

| 项目 | Noggin | BMP4 | TGF-β |
| --- | --- | --- | --- |
| 角色 | BMP 拮抗剂 | BMP 配体 | TGF-β 配体 |
| 主要影响 | 阻断 BMP 信号 | 激活 SMAD1/5/8 | 激活 SMAD2/3 |
| 常见用途 | 类器官、分化体系中抑制 BMP | 分化诱导、发育模型 | EMT、纤维化、免疫调节 |

Noggin 不能替代 TGF-β 抑制剂，也不能等同于所有 BMP 抑制策略。它主要针对 BMP 配体层面的拮抗。

## 使用 protocol

### 重构和加入

**怎么做**：按厂家说明重构，小分装低温保存，按类器官或分化 protocol 加入培养基。

**为什么**：Noggin 通常用量低、对活性敏感，冻融和吸附会改变实际有效浓度。

**注意事项**：

- 记录是否使用 recombinant Noggin 或 Noggin conditioned medium。
- 类器官体系中要同时记录 Wnt3A、R-spondin、EGF 和基质条件。
- 分化实验中，Noggin 的加入时间和撤除时间都可能影响命运走向。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 类器官分化过强或扩增差 | Noggin不足或失活，BMP信号过强 | 换新 Noggin，检查批号和储存 |
| BMP readout仍高 | Noggin剂量不足或 BMP 来源太强 | 设置剂量梯度和 pSMAD1/5/8 readout |
| 体系结果不可重复 | Noggin条件培养基批次差异 | 做活性验证或换重组蛋白 |
| 误判为营养不足 | 实际是 BMP/Wnt 平衡问题 | 同时检查 Wnt/R-spondin/Noggin |

## 购买与记录建议

常见供应商包括 [R&D Systems](<../番外/试剂厂商/R&D Systems.md>)、[PeproTech](<../番外/试剂厂商/PeproTech.md>)、[STEMCELL Technologies](<../番外/试剂厂商/STEMCELL Technologies.md>)、[Sino Biological](<../番外/试剂厂商/Sino Biological.md>)。购买时关注物种、表达系统、活性测试、carrier-free 版本和内毒素。

推荐记录模板（中文）：

```text
Noggin来源：重组蛋白/条件培养基
品牌或生产细胞：
货号：
批号：
物种来源：
表达系统：
重构液：
储液浓度：
终浓度或加入比例：
是否同时加入Wnt3A：
是否同时加入R-spondin：
目标BMP信号：
使用细胞/类器官：
冻融次数：
异常现象：
```

Recommended record template (English):

```text
Noggin source: recombinant protein/conditioned medium
Brand or producer cell line:
Catalog number:
Lot number:
Species source:
Expression system:
Reconstitution buffer:
Stock concentration:
Final concentration or dilution ratio:
Wnt3A also added: yes/no
R-spondin also added: yes/no
Target BMP signal:
Cell/organoid type:
Freeze-thaw cycles:
Abnormal observation:
```

## 小结

Noggin 是 BMP 信号的“刹车”，尤其常见于类器官和分化体系。它的核心作用是调节命运信号，而不是提供营养；因此记录时必须和 BMP、Wnt、R-spondin、EGF 以及基质条件一起看。

## 参考来源

- [R&D Systems Recombinant Human Noggin](https://www.rndsystems.com/products/recombinant-human-noggin-protein_6057-ng)
- [R&D Systems Organoid Growth Factors Application Note](https://resources.rndsystems.com/pdfs/appnotes/rndsytems-an_optimizing-organoid_STRY0110888-final.pdf)

