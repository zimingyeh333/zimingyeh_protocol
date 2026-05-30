# BDNF

BDNF（Brain-Derived Neurotrophic Factor，脑源性神经营养因子）是一种 neurotrophin（神经营养因子），常用于神经元培养、神经分化成熟、突起生长和神经存活支持体系。

![培养支持分子参考图](../z_asset/材/培养支持分子/culture-support-molecules-reference.png)

图源：Image2 生成的培养支持分子参考图；BDNF 位于 neurotrophic support 模块，主要支持 neuronal survival。

## 核心定位

BDNF 主要通过 TrkB receptor（Tropomyosin receptor kinase B，原肌球蛋白受体激酶 B）及相关下游信号支持神经元存活、突触成熟和神经突起发育。R&D Systems 的 Recombinant Human BDNF 产品资料说明，BDNF 是 neurotrophin family 成员，对 peripheral nervous system 和 central nervous system 神经元的 survival and differentiation（存活和分化）有作用。参考：[R&D Systems Recombinant Human BDNF](https://www.rndsystems.com/products/recombinant-human-bdnf-protein_248-bd)。

在培养体系中，BDNF 常作为 [Neurobasal培养基](Neurobasal培养基.md) + [B27补充剂](B27补充剂.md) / [N2补充剂](N2补充剂.md) 之外的 stage-specific trophic factor（阶段特异性营养因子）。

## 常见用途

| 场景 | BDNF的角色 |
| --- | --- |
| 原代神经元培养 | 支持存活和突起维持 |
| iPSC来源神经元成熟 | 促进成熟、突触和功能状态 |
| 神经分化后期 | 作为成熟和维持因子 |
| 神经损伤/应激模型 | 提供 trophic support |
| 与其他因子联用 | 常与 GDNF、NT-3、CNTF、cAMP 等组合 |

## BDNF vs GDNF

| 项目 | BDNF | GDNF |
| --- | --- | --- |
| 家族 | Neurotrophin family | GDNF ligand family |
| 常见受体逻辑 | TrkB/p75NTR | GFRα1/RET 相关 |
| 常见用途 | 神经元存活、成熟、突触和突起 | 多巴胺能神经元、运动神经元、特定神经群支持 |
| 是否可互换 | 不建议 | 不建议 |

BDNF 和 GDNF 都是“神经营养因子”，但受体和目标神经元类型不同。

## 使用 protocol

### 重构和分装

**怎么做**：按厂家说明重构，小分装低温保存，避免反复冻融。低浓度使用时可用低吸附管或含 carrier protein 的 buffer。

**为什么**：神经营养因子浓度低、蛋白稳定性和吸附损失会明显影响有效剂量。

### 加入培养

**怎么做**：按神经分化或神经元维护 protocol 加入，记录终浓度、加入起始天数、补加频率和是否与 GDNF、NT-3、CNTF 等联用。

**为什么**：BDNF 的作用常依赖神经元成熟阶段。过早或过晚加入可能得到不同结果。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 神经元死亡 | BDNF缺失/失活、接种密度低或包被差 | 换新分装并优化基质和密度 |
| 突起发育差 | BDNF不足或成熟阶段不合适 | 调整加入时间和组合因子 |
| 批间差异 | BDNF活性或重构方式不同 | 固定品牌货号并记录 lot |
| readout解释混乱 | BDNF直接改变生存/成熟状态 | 设置 no-BDNF 或时间梯度对照 |

## 购买与记录建议

常见供应商包括 [PeproTech](<../番外/试剂厂商/PeproTech.md>)、[R&D Systems](<../番外/试剂厂商/R&D Systems.md>)、[STEMCELL Technologies](<../番外/试剂厂商/STEMCELL Technologies.md>)、[Sino Biological](<../番外/试剂厂商/Sino Biological.md>)。神经分化项目中建议固定品牌、货号和批号，并记录活性单位和重构液。

推荐记录模板（中文）：

```text
BDNF产品全名：
品牌：
货号：
批号：
物种来源：
表达系统：
重构液：
储液浓度：
终浓度：
加入阶段/天数：
补加频率：
联用因子：
使用细胞/分化阶段：
冻融次数：
异常现象：
```

Recommended record template (English):

```text
BDNF product full name:
Brand:
Catalog number:
Lot number:
Species source:
Expression system:
Reconstitution buffer:
Stock concentration:
Final concentration:
Treatment stage/days:
Supplementation frequency:
Combined factors:
Cell type/differentiation stage:
Freeze-thaw cycles:
Abnormal observation:
```

## 小结

BDNF 是神经元存活和成熟中非常常见的营养因子。它不是普通培养基营养成分，而是能改变神经元状态、突起和功能成熟的信号输入。

## 参考来源

- [R&D Systems Recombinant Human BDNF](https://www.rndsystems.com/products/recombinant-human-bdnf-protein_248-bd)
- [Thermo Fisher Primary Neural and Neuronal Culture Supplements](https://www.thermofisher.com/ca/en/home/life-science/cell-culture/primary-cell-culture/neuronal-cell-culture/neuronal-cell-culture-supplement.html)

