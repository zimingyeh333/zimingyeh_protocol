# GDNF

GDNF（Glial Cell Line-Derived Neurotrophic Factor，胶质细胞源性神经营养因子）是一种 neurotrophic factor（神经营养因子），常用于支持特定神经元群体的 survival（存活）、neurite outgrowth（神经突起生长）和 maturation（成熟），尤其常见于多巴胺能神经元和运动神经元相关体系。

![培养支持分子参考图](../z_asset/材/培养支持分子/culture-support-molecules-reference.png)

图源：Image2 生成的培养支持分子参考图；GDNF 位于 neurotrophic support 模块，主要代表 neurite support。

## 核心定位

GDNF 属于 GDNF ligand family（GDNF 配体家族），常通过 GFRα1（GDNF family receptor alpha 1，GDNF 家族受体 α1）和 RET receptor tyrosine kinase（RET 受体酪氨酸激酶）相关机制发挥作用。R&D Systems 的 Recombinant Human GDNF 产品资料说明，GDNF 支持 dopaminergic neurons（多巴胺能神经元）和 motor neurons（运动神经元）等神经元存活，并参与肾脏和神经系统发育相关过程。参考：[R&D Systems Recombinant Human GDNF](https://www.rndsystems.com/products/recombinant-human-gdnf-protein_212-gd)。

在神经培养中，GDNF 常与 [BDNF](BDNF.md)、Neurotrophin-3（NT-3，神经营养因子 3）、CNTF（Ciliary Neurotrophic Factor，睫状神经营养因子）等因子组合使用。

## 常见用途

| 场景 | GDNF的角色 |
| --- | --- |
| 多巴胺能神经元培养 | 支持存活和成熟 |
| 运动神经元培养 | 支持存活和突起维持 |
| iPSC来源神经元分化 | 常作为成熟/维护 cocktail 的一部分 |
| 神经退行性疾病模型 | 模拟 trophic support |
| 神经突起实验 | 支持 neurite outgrowth |

## GDNF vs BDNF

| 项目 | GDNF | BDNF |
| --- | --- | --- |
| 家族 | GDNF ligand family | Neurotrophin family |
| 典型受体 | GFRα1/RET | TrkB/p75NTR |
| 常见神经类型 | 多巴胺能、运动神经元等 | 多种中枢/外周神经元 |
| 主要实验含义 | 特定神经群体存活和突起支持 | 神经元存活、成熟、突触相关 |

## 使用 protocol

### 重构和保存

**怎么做**：按厂家说明重构，小分装后低温保存，避免反复冻融。

**为什么**：GDNF 使用浓度低，活性受储存、冻融和吸附影响。

### 加入培养

**怎么做**：按神经分化或神经元维护 protocol 加入，记录终浓度、加入阶段、补加频率和联用因子。

**为什么**：GDNF 多用于特定神经元阶段或群体；随意加入可能改变成熟状态和 readout。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 多巴胺能神经元存活差 | GDNF失活、缺少BDNF/其他因子或基质问题 | 换新分装并补齐 cocktail |
| 突起生长不足 | GDNF剂量或阶段不合适 | 做时间和剂量优化 |
| 批间差异 | 活性、表达系统或重构方式变化 | 记录 lot 和活性 |
| 结果解释困难 | GDNF直接影响成熟/存活 | 设置 no-GDNF 对照 |

## 购买与记录建议

常见供应商包括 [PeproTech](<../番外/试剂厂商/PeproTech.md>)、[R&D Systems](<../番外/试剂厂商/R&D Systems.md>)、[STEMCELL Technologies](<../番外/试剂厂商/STEMCELL Technologies.md>)、[Sino Biological](<../番外/试剂厂商/Sino Biological.md>)。神经分化体系建议固定品牌、货号、批号和重构方式。

推荐记录模板（中文）：

```text
GDNF产品全名：
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
GDNF product full name:
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

GDNF 是特定神经元培养和分化中常用的营养因子，尤其和多巴胺能神经元、运动神经元及神经突起支持相关。它和 BDNF 都是神经营养支持，但受体和适用神经群体不同。

## 参考来源

- [R&D Systems Recombinant Human GDNF](https://www.rndsystems.com/products/recombinant-human-gdnf-protein_212-gd)
- [Thermo Fisher Primary Neural and Neuronal Culture Supplements](https://www.thermofisher.com/ca/en/home/life-science/cell-culture/primary-cell-culture/neuronal-cell-culture/neuronal-cell-culture-supplement.html)

