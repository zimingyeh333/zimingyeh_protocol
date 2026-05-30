# FGF2

FGF2（Fibroblast Growth Factor 2，成纤维细胞生长因子 2；也称 basic FGF，bFGF，碱性成纤维细胞生长因子）是常用 [生长因子](生长因子.md) 之一，广泛用于干细胞维持、神经前体培养、内皮/成纤维相关培养和多种低血清/无血清体系。

![生长因子信号模块参考图](../z_asset/材/生长因子模块/growth-factor-signaling-modules-reference.png)

图源：Image2 生成的生长因子信号模块参考图；FGF2 与 EGF 同属 RTK 相关促增殖/存活模块，常通过 MAPK-ERK 和 PI3K-AKT 影响细胞状态。

## 核心定位

FGF2 主要通过 FGFR（Fibroblast Growth Factor Receptor，成纤维细胞生长因子受体）家族发挥作用，常依赖 heparan sulfate（硫酸乙酰肝素）或 heparin（肝素）辅助形成稳定配体-受体复合物。R&D Systems 的 recombinant human FGF basic/FGF2 产品资料说明，FGF basic 是广泛的 mitogenic factor（促有丝分裂因子），可作用于 mesodermal、neuroectodermal 和 endothelial lineage 等细胞。参考：[R&D Systems Recombinant Human FGF basic/FGF2](https://www.rndsystems.com/products/recombinant-human-fgf-basic-protein_233-fb)。

FGF2 是培养体系里非常常见、但也很容易被“加一点 bFGF”轻描淡写带过的因子。它的稳定性、批号和换液节奏会明显影响培养结果。

## 常见用途

| 场景 | FGF2的角色 |
| --- | --- |
| hESC/hiPSC 培养 | 支持多能性维持，常与定义培养基配套 |
| Neural stem/progenitor cells | 常与 [EGF](EGF.md) 共同维持增殖 |
| MSC/成纤维相关体系 | 促进扩增或维持状态，需看具体 protocol |
| 内皮细胞培养 | 常作为促增殖因子之一 |
| 分化体系 | 可在特定阶段促进或抑制分化方向 |

## FGF2 vs EGF

| 项目 | FGF2 | EGF |
| --- | --- | --- |
| 受体 | FGFR family | EGFR/ErbB family |
| 常见别名 | bFGF | EGF |
| 常见敏感点 | 稳定性、heparin/heparan sulfate、换液频率 | EGFR表达、剂量和刺激时间 |
| 常见组合 | EGF + FGF2，或 FGF2 + 多能性培养体系 | EGF + FGF2，或 EGF + 类器官 cocktail |

## 使用 protocol

### 重构与保存

**怎么做**：按厂家说明重构，小分装后低温保存。部分 FGF2 产品可建议用含 carrier protein 或 heparin 的体系提高稳定性，具体以说明书为准。

**为什么**：FGF2 在培养条件下可能降解或失活，长期培养中“实际暴露剂量”可能比标称终浓度更重要。

**注意事项**：

- 不要反复冻融。
- 记录是否加 heparin 或使用 stabilized FGF2。
- FGF2 对干细胞和神经前体状态影响大，不能随意换批号。
- 如果换液频率改变，FGF2 信号暴露也会改变。

### 加入培养基

**怎么做**：按细胞 protocol 设置终浓度，通常随培养基新鲜加入；长期培养时固定换液频率和加入时间。

**为什么**：FGF2 的时间维度很重要，持续高信号和短暂脉冲可能得到不同状态。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 干细胞分化或状态下降 | FGF2失活、漏加或换液间隔太长 | 换新分装，缩短换液周期 |
| 神经前体增殖差 | 缺少EGF协同或接种密度低 | 补齐EGF/FGF2组合并优化密度 |
| 批间差异 | FGF2活性、表达系统或载体不同 | 固定品牌货号并做批号桥接 |
| 通路实验背景高 | FGF2激活 MAPK/AKT | 设置 no-FGF2 和时间梯度 |

## 购买与记录建议

常见供应商包括 [PeproTech](<../番外/试剂厂商/PeproTech.md>)、[R&D Systems](<../番外/试剂厂商/R&D Systems.md>)、[Gibco](<../番外/试剂厂商/Gibco.md>)、[STEMCELL Technologies](<../番外/试剂厂商/STEMCELL Technologies.md>)、[Sino Biological](<../番外/试剂厂商/Sino Biological.md>) 等。若用于干细胞长期培养，可关注 stabilized FGF2 或 GMP/animal-free 等级是否必要。

推荐记录模板（中文）：

```text
FGF2/bFGF产品全名：
品牌：
货号：
批号：
物种来源：
表达系统：
是否稳定化版本：
是否carrier-free：
重构液：
储液浓度：
终浓度：
是否加heparin：
冻融次数：
换液频率：
使用细胞/阶段：
异常现象：
```

Recommended record template (English):

```text
FGF2/bFGF product full name:
Brand:
Catalog number:
Lot number:
Species source:
Expression system:
Stabilized version: yes/no
Carrier-free: yes/no
Reconstitution buffer:
Stock concentration:
Final concentration:
Heparin added: yes/no
Freeze-thaw cycles:
Media change frequency:
Cell type/stage:
Abnormal observation:
```

## 小结

FGF2 是干细胞、神经前体和多种无血清体系的核心生长因子。它最需要关注的是稳定性、换液节奏、是否需要协同因子，以及它对 MAPK/AKT 信号背景的直接影响。

## 参考来源

- [R&D Systems Recombinant Human FGF basic/FGF2](https://www.rndsystems.com/products/recombinant-human-fgf-basic-protein_233-fb)
- [Thermo Fisher PeproTech Proteins](https://www.thermofisher.com/tr/en/home/brands/peprotech.html)

