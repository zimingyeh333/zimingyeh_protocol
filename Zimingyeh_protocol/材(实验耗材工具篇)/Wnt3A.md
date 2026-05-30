# Wnt3A

Wnt3A（Wnt family member 3A，Wnt 家族成员 3A）是经典 canonical Wnt signaling（经典 Wnt 信号）配体之一，常用于激活 [Wnt-β-catenin通路](<../番外/补充知识/Wnt-β-catenin通路.md>)，在干细胞、类器官、发育模型和某些上皮培养体系中非常重要。

![生长因子信号模块参考图](../z_asset/材/生长因子模块/growth-factor-signaling-modules-reference.png)

图源：Image2 生成的生长因子信号模块参考图；Wnt3A 通过 Frizzled + LRP 受体模块激活 beta-catenin，R-spondin 可增强 Wnt 信号，Noggin 常用于抑制 BMP。

## 核心定位

Wnt3A 常通过 Frizzled（卷曲受体）和 LRP5/6（low-density lipoprotein receptor-related protein 5/6，低密度脂蛋白受体相关蛋白 5/6）激活 β-catenin（β-连环蛋白）依赖的转录程序。R&D Systems 的 recombinant Wnt-3a 产品资料说明，Wnt-3a 是 Wnt 家族成员，可激活 canonical Wnt/β-catenin signaling，并参与细胞命运、增殖和发育相关调控。参考：[R&D Systems Recombinant Wnt-3a](https://www.rndsystems.com/products/recombinant-mouse-wnt-3a-protein_1324-wn)。

在类器官培养中，Wnt3A 往往不是单独使用，而是与 [R-spondin](R-spondin.md)、[Noggin](Noggin.md)、EGF 等共同构成 niche-like signaling（类生态位信号）。R&D Systems 的 organoid growth factors 资料也将 Wnt-3a、R-Spondin 和 Noggin 作为优化类器官生长的重要因子组合讨论。参考：[R&D Systems Organoid Growth Factors Application Note](https://resources.rndsystems.com/pdfs/appnotes/rndsytems-an_optimizing-organoid_STRY0110888-final.pdf)。

## 常见用途

| 场景 | Wnt3A的角色 |
| --- | --- |
| 肠道/上皮类器官 | 维持 stem/progenitor 状态和扩增 |
| 干细胞分化 | 调控胚层和谱系模式化 |
| 发育模型 | 模拟 Wnt 轴信号 |
| Wnt通路刺激 | 作为经典 Wnt 激活阳性刺激 |
| 共培养/条件培养基体系 | L-Wnt3A conditioned medium 常见于历史 protocol |

## Wnt3A vs R-spondin/Noggin

| 因子 | 角色 | 类器官培养中的常见逻辑 |
| --- | --- | --- |
| Wnt3A | Wnt配体，直接激活 Wnt通路 | 提供 Wnt 信号输入 |
| [R-spondin](R-spondin.md) | 增强 Wnt 信号 | 放大 Wnt/LGR 轴 |
| [Noggin](Noggin.md) | BMP 拮抗剂 | 抑制 BMP，帮助维持特定上皮/干性状态 |

这三个名字经常一起出现，但功能完全不同：Wnt3A 是“给 Wnt 信号”，R-spondin 是“增强 Wnt 信号”，Noggin 是“压 BMP 信号”。

## 使用 protocol

### 重构和保存

**怎么做**：严格按厂家说明重构和保存；Wnt 蛋白相对难处理，常需要 carrier protein、低吸附管和小分装。

**为什么**：Wnt 蛋白具有脂质修饰，容易出现溶解、吸附和活性损失问题。实际有效浓度常受处理方式影响。

### 加入培养体系

**怎么做**：按类器官或分化 protocol 加入 Wnt3A，并记录是否使用 recombinant Wnt3A、conditioned medium（条件培养基）或 Wnt surrogate（Wnt 替代激动剂）。

**为什么**：不同 Wnt 来源的活性、一致性和背景成分差异很大，不能只写“加 Wnt”。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 类器官长不起来 | Wnt3A失活、R-spondin不足或基质问题 | 换新 Wnt/R-spondin 并检查基质胶 |
| 批间差异大 | conditioned medium 批次差异或 Wnt活性漂移 | 使用重组蛋白或做活性桥接 |
| 分化方向异常 | Wnt时序或剂量错误 | 重新检查分化时间线 |
| Wnt刺激无响应 | 细胞受体/下游状态不匹配 | 设置阳性对照和 β-catenin readout |

## 购买与记录建议

常见供应商包括 [R&D Systems](<../番外/试剂厂商/R&D Systems.md>)、[PeproTech](<../番外/试剂厂商/PeproTech.md>)、[STEMCELL Technologies](<../番外/试剂厂商/STEMCELL Technologies.md>)、[Sino Biological](<../番外/试剂厂商/Sino Biological.md>)。Wnt3A 成本高且活性敏感，建议记录活性、来源、重构液、冻融和是否使用条件培养基。

推荐记录模板（中文）：

```text
Wnt3A来源：重组蛋白/条件培养基/其他
品牌或细胞来源：
货号：
批号：
物种来源：
重构液：
储液浓度：
终浓度或加入比例：
是否同时加入R-spondin：
是否同时加入Noggin：
基质条件：
使用细胞/类器官：
冻融次数：
异常现象：
```

Recommended record template (English):

```text
Wnt3A source: recombinant protein/conditioned medium/other
Brand or cell source:
Catalog number:
Lot number:
Species source:
Reconstitution buffer:
Stock concentration:
Final concentration or dilution ratio:
R-spondin also added: yes/no
Noggin also added: yes/no
Matrix condition:
Cell/organoid type:
Freeze-thaw cycles:
Abnormal observation:
```

## 小结

Wnt3A 是类器官和干细胞分化体系中的关键 Wnt 配体。它最需要关注来源、活性、重构保存、是否与 R-spondin/Noggin 联用，以及是否用条件培养基替代重组蛋白。

## 参考来源

- [R&D Systems Recombinant Wnt-3a](https://www.rndsystems.com/products/recombinant-mouse-wnt-3a-protein_1324-wn)
- [R&D Systems Organoid Growth Factors Application Note](https://resources.rndsystems.com/pdfs/appnotes/rndsytems-an_optimizing-organoid_STRY0110888-final.pdf)

