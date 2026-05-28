# SYBR Green qPCR Master Mix

SYBR Green qPCR Master Mix（SYBR Green 实时荧光定量 PCR 预混液）是一种用于 [RT-qPCR](<../用(实验流程内容篇)/RT-qPCR.md>) 或 qPCR 的即用型反应混合液。它通常包含 DNA polymerase（DNA 聚合酶）、[dNTP](dNTP.md)（deoxynucleotide triphosphate，脱氧核苷三磷酸）、Mg2+、缓冲体系、SYBR Green 荧光染料和稳定剂，有些版本还含 [ROX参比染料](ROX参比染料.md)。

![qPCR核心材料参考图](../z_asset/材/qPCR核心材料/qPCR-core-materials-reference.png)

图源：Image2 生成的 qPCR 核心材料参考图；右侧棕色小管代表避光保存的 SYBR Green qPCR master mix。

## 工作原理

SYBR Green 是一种与 double-stranded DNA（双链 DNA）结合后荧光增强的染料。qPCR 过程中扩增产物越多，双链 DNA 越多，荧光信号越强。[qPCR仪](qPCR仪.md) 在每个循环读取荧光并计算 [Cq值](<../番外/补充知识/Cq值.md>)。

Thermo Fisher 的 PowerUp SYBR Green Master Mix 和 Bio-Rad 的 iTaq Universal SYBR Green Supermix 都将其定位为用于 real-time PCR 的 2× SYBR Green 预混液，核心优势是把聚合酶、缓冲液、dNTP、MgCl2 和荧光染料预先优化在一起。[参考：Thermo Fisher PowerUp SYBR Green Master Mix](https://www.thermofisher.com/order/catalog/product/A25742)；[参考：Bio-Rad iTaq Universal SYBR Green Supermix](https://www.bio-rad.com/en-us/sku/1725121-itaq-universal-sybr-green-supermix)

## 核心成分

| 成分 | 作用 |
| --- | --- |
| DNA polymerase | 复制模板 DNA，生成扩增产物 |
| SYBR Green dye | 与双链 DNA 结合后发出荧光 |
| dNTP | DNA 合成原料 |
| Mg2+ / buffer | 维持聚合酶活性和反应环境 |
| Stabilizers | 提高运输、冻融和反应稳定性 |
| ROX optional | 在部分仪器中作为 passive reference（被动参比） |

## 优点和限制

| 优点 | 限制 |
| --- | --- |
| 成本通常低于探针法 | 任何双链 DNA 都会发光，包括非特异产物 |
| 引物设计简单，不需要探针 | 需要 [熔解曲线](<../番外/补充知识/熔解曲线.md>) 判断特异性 |
| 适合普通基因表达筛查 | 多重检测能力有限 |
| 体系搭建快，通用性强 | 对 [引物二聚体](<../番外/补充知识/引物二聚体.md>) 更敏感 |

MIQE 指南强调 qPCR 实验需要报告引物序列、扩增效率、特异性验证和反应条件；SYBR 体系尤其不能只报告 Cq，需要证明扩增产物合理。[参考：MIQE Guidelines](https://academic.oup.com/clinchem/article/55/4/611/5631762)

## SYBR vs TaqMan

| 方案 | 检测对象 | 适合场景 | 风险点 |
| --- | --- | --- | --- |
| SYBR Green | 所有双链 DNA | 成本敏感、常规表达分析、引物筛选 | 非特异扩增也会发光 |
| [TaqMan探针](TaqMan探针.md) | 特定探针结合区域 | 高特异性、低丰度、临床/验证型检测、多重检测 | 设计和合成成本高 |

如果只是筛查多个基因表达，SYBR 往往更经济；如果需要更高特异性、检测相似序列或做 multiplex，TaqMan 更稳。

## 使用 protocol

### 解冻和混匀

**怎么做**：在冰上或按说明解冻 master mix，避光，轻轻颠倒混匀，短暂离心收集液体。

**为什么**：SYBR 染料怕光，master mix 中成分高浓度，混匀不充分会造成孔间差异。

**注意事项**：

- 避免反复冻融，建议分装。
- 不要 vortex 过猛造成气泡。
- 使用前确认是否已含 ROX。

### 配反应体系

**怎么做**：按 master mix 终浓度通常 1× 配制，加入 [qPCR引物](qPCR引物.md)、模板和 [无核酸酶水](无核酸酶水.md)。使用 [滤芯吸头](滤芯吸头.md) 和 [低吸附吸头](低吸附吸头.md) 更稳。

**为什么**：qPCR 对小体积误差和污染非常敏感；master mix 预混能减少移液步骤和孔间差异。

**注意事项**：

- 设置 NTC（no-template control，无模板对照）。
- 每个引物对都要验证效率和特异性。
- 不要把不同 ROX 需求的 master mix 混用。

### 上机和熔解曲线

**怎么做**：加样到 [qPCR板](qPCR板.md)，用 [光学封板膜](光学封板膜.md) 封板，离心后上机。SYBR 体系通常要加入 melt curve（熔解曲线）步骤。

**为什么**：SYBR 无法区分目标产物和非特异产物，熔解曲线是基本质控。

**注意事项**：

- 单一熔解峰通常更可信，但仍需结合扩增效率和产物大小。
- NTC 若有低 Cq 扩增，需判断污染还是引物二聚体。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| NTC 有峰 | 污染或引物二聚体 | 重配体系，优化引物，检查洁净区 |
| 熔解曲线多峰 | 非特异扩增 | 提高退火温度，重设计引物 |
| 重复孔差异大 | 混匀不充分、气泡、封板差 | 充分混匀，离心，检查封板 |
| 无扩增 | 模板质量差、引物失败、mix 失活 | 做阳性对照，检查冻融和程序 |
| 信号异常 | ROX 版本不匹配或通道设置错 | 匹配仪器和 master mix 版本 |

## 购买与记录建议

常见供应商包括 [Applied Biosystems](<../番外/试剂厂商/Applied Biosystems.md>)、[Bio-Rad](<../番外/试剂厂商/Bio-Rad.md>)、[Merck](<../番外/试剂厂商/Merck.md>)、[Promega](<../番外/试剂厂商/Promega.md>)、[Takara](<../番外/试剂厂商/Takara.md>) 等。购买时确认是否 hot-start、是否含 ROX、ROX 浓度类型、适配仪器、反应速度和样本类型。

推荐记录：

```text
SYBR Green qPCR Master Mix:
Brand:
Catalog number:
Lot number:
ROX status:
Reaction volume:
Primer concentration:
Template amount:
Cycling program:
Melt curve: yes/no
Storage/open date:
```

## 小结

SYBR Green qPCR Master Mix 是最常用、最经济的 qPCR 检测体系之一。它的关键风险是非特异扩增，因此必须配合好引物设计、NTC、扩增效率和熔解曲线来判断结果。

## 参考来源

- [Thermo Fisher PowerUp SYBR Green Master Mix](https://www.thermofisher.com/order/catalog/product/A25742)
- [Bio-Rad iTaq Universal SYBR Green Supermix](https://www.bio-rad.com/en-us/sku/1725121-itaq-universal-sybr-green-supermix)
- [MIQE Guidelines, Clinical Chemistry 2009](https://academic.oup.com/clinchem/article/55/4/611/5631762)
