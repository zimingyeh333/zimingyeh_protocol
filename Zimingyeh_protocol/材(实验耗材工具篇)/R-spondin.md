# R-spondin

R-spondin（R-spondin protein，R-脊椎蛋白；常写作 RSPO）是一类能增强 canonical Wnt signaling（经典 Wnt 信号）的分泌蛋白。在细胞培养里，R-spondin 尤其常用于类器官培养，与 [Wnt3A](Wnt3A.md)、[Noggin](Noggin.md)、EGF 和基质共同构成 niche-like signaling（类生态位信号）。

![专用培养支持因子参考图](../z_asset/材/专用培养支持因子/specialized-culture-support-factors-reference.png)

图源：Image2 生成的专用培养支持因子参考图；R-spondin 位于类器官生态位模块，用于增强 Wnt 信号。

## 核心定位

R-spondin 不是 Wnt 配体本身，而是 Wnt 信号增强因子。R&D Systems 的 Recombinant Human R-Spondin 1 页面说明，R-Spondin 1 可调控 Wnt/β-catenin signaling，并可在 Wnt-3a 存在时增强 beta-catenin reporter 活性；该页面也展示了 R-Spondin 1 与 Wnt-3a、EGF 和 Noggin 共同用于人肠道类器官培养的示例。参考：[R&D Systems Recombinant Human R-Spondin 1](https://www.rndsystems.com/products/recombinant-human-r-spondin-1-protein_4645-rs)。

在类器官体系中，R-spondin 常被理解为维持 stem/progenitor compartment（干/祖细胞区室）的关键输入之一，尤其与 LGR receptor（Leucine-rich repeat-containing G-protein coupled receptor，富含亮氨酸重复序列的 G 蛋白偶联受体）相关 Wnt 增强机制有关。

## R-spondin家族

| 成员 | 常见写法 | 说明 |
| --- | --- | --- |
| R-spondin 1 | RSPO1 | 类器官培养中最常见 |
| R-spondin 2 | RSPO2 | 也可增强 Wnt 信号，使用较少 |
| R-spondin 3 | RSPO3 | 某些组织和类器官体系会用 |
| R-spondin 4 | RSPO4 | 更少见，需看具体体系 |

日常 protocol 中最常见的是 R-spondin 1，但不要把所有 RSPO 成员默认等同。

## R-spondin vs Wnt3A/Noggin

| 因子 | 角色 | 类器官培养中的逻辑 |
| --- | --- | --- |
| [Wnt3A](Wnt3A.md) | Wnt 配体 | 直接提供 Wnt 信号输入 |
| R-spondin | Wnt 信号增强因子 | 放大 Wnt/LGR 轴，支持干性和扩增 |
| [Noggin](Noggin.md) | BMP 拮抗剂 | 抑制 BMP 信号，帮助维持特定上皮状态 |

三者经常同时出现，但功能完全不同：Wnt3A 是“给信号”，R-spondin 是“放大信号”，Noggin 是“解除 BMP 抑制/改变命运压力”。

## 常见用途

| 场景 | R-spondin的作用 |
| --- | --- |
| 肠道类器官 | 维持 LGR5+ stem-like 状态和扩增 |
| 胃、肝胆、胰腺、肺等上皮类器官 | 常作为 Wnt niche 组件之一 |
| Wnt信号刺激实验 | 与 Wnt3A 共同增强 β-catenin readout |
| 条件培养基体系 | R-spondin conditioned medium 是历史常用方案 |

## 使用 protocol

### 重组蛋白使用

**怎么做**：按厂家说明重构，通常小分装后低温保存，避免反复冻融。使用时按类器官 protocol 加入培养基，并记录终浓度、批号和是否与 Wnt3A/Noggin 同时加入。

**为什么**：R-spondin 的作用依赖 Wnt 背景和细胞受体状态；单独加 R-spondin 不一定产生明显效果。

### 条件培养基使用

**怎么做**：如果使用 R-spondin conditioned medium（R-spondin 条件培养基），记录生产细胞、收集批次、过滤方式、保存条件、加入比例和活性验证。

**为什么**：条件培养基含有未知背景成分，批间差异往往大于重组蛋白。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 类器官不扩增 | R-spondin失活、Wnt不足或基质问题 | 换新分装，检查 Wnt3A 和基质胶 |
| 条件培养基批间差异大 | 生产细胞状态或收集批次不同 | 做活性桥接或改用重组蛋白 |
| 分化过强/干性下降 | Wnt/R-spondin 信号不足 | 提高有效信号或缩短传代间隔 |
| 背景不清楚 | 条件培养基成分复杂 | 记录生产流程并设置对照 |

## 购买与记录建议

常见供应商包括 [R&D Systems](<../番外/试剂厂商/R&D Systems.md>)、[PeproTech](<../番外/试剂厂商/PeproTech.md>)、[STEMCELL Technologies](<../番外/试剂厂商/STEMCELL Technologies.md>)、[Sino Biological](<../番外/试剂厂商/Sino Biological.md>)。类器官长期项目建议尽量固定来源，并记录活性、表达系统和是否 carrier-free。

推荐记录模板（中文）：

```text
R-spondin类型：RSPO1 / RSPO2 / RSPO3 / 条件培养基
品牌或生产细胞：
货号：
批号：
物种来源：
表达系统：
重构液：
储液浓度：
终浓度或加入比例：
是否同时加入Wnt3A：
是否同时加入Noggin：
基质条件：
使用类器官/细胞：
冻融次数：
异常现象：
```

Recommended record template (English):

```text
R-spondin type: RSPO1 / RSPO2 / RSPO3 / conditioned medium
Brand or producer cell line:
Catalog number:
Lot number:
Species source:
Expression system:
Reconstitution buffer:
Stock concentration:
Final concentration or dilution ratio:
Wnt3A also added: yes/no
Noggin also added: yes/no
Matrix condition:
Organoid/cell type:
Freeze-thaw cycles:
Abnormal observation:
```

## 小结

R-spondin 是类器官培养中非常核心的 Wnt 增强因子。它最容易被误解成“另一个 Wnt”，但实际记录时要把 Wnt3A、R-spondin、Noggin、基质和条件培养基批次作为一组变量一起看。

## 参考来源

- [R&D Systems Recombinant Human R-Spondin 1](https://www.rndsystems.com/products/recombinant-human-r-spondin-1-protein_4645-rs)
- [R&D Systems Organoid Growth Factors Application Note](https://resources.rndsystems.com/pdfs/appnotes/rndsytems-an_optimizing-organoid_STRY0110888-final.pdf)

