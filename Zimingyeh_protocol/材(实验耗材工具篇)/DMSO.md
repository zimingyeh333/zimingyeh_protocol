# DMSO

DMSO（Dimethyl sulfoxide，二甲基亚砜）是一种极性非质子溶剂，在生命科学实验中常用作 cryoprotectant（冻存保护剂）和小分子药物溶剂。它在 [细胞冻存](<../用(实验流程内容篇)/细胞冻存.md>) 中非常常见，也常作为难溶化合物的母液溶剂。

## 核心用途

| 用途 | 作用 | 注意事项 |
| --- | --- | --- |
| 细胞冻存 | 降低冰晶损伤，提高冻存后复苏率 | 常见终浓度约 5%-10%，具体按细胞和冻存液说明 |
| 药物溶剂 | 溶解疏水性小分子、抑制剂、化合物库 | 需要设置 vehicle control（溶剂对照） |
| 细胞融合 | 某些融合体系中作为辅助试剂 | 需要专门 protocol，不是常规细胞培养用途 |
| PCR/分子实验添加剂 | 改善部分 GC-rich 或二级结构模板扩增 | 需单独优化，不等同于细胞培养级 DMSO |

Thermo Fisher 的细胞冻存介质页面说明，冻存介质通常需要 DMSO 或 glycerol（甘油）等冻存保护剂，它们能降低培养基冻结点并降低冰晶形成风险；Gibco 多种即用型冻存液也含 10% DMSO。[参考：Thermo Fisher Cell Freezing Media](https://www.thermofisher.com/us/en/home/life-science/cell-culture/mammalian-cell-culture/reagents/cell-freezing-media.html)

## 为什么 DMSO 能保护冻存细胞

细胞冷冻时，水结冰会造成细胞内外渗透压改变和冰晶机械损伤。DMSO 能进入细胞并改变水的冻结行为，从而降低冰晶损伤。但它不是“无害保护剂”：在室温或 37°C 下，DMSO 对很多细胞有毒性，且暴露时间越长风险越高。

因此 DMSO 的使用逻辑是：

- 冻存时：需要它保护细胞。
- 复苏后：尽快稀释或去除它。
- 药物实验中：必须让各组 DMSO 终浓度一致。

## 常见版本

| 版本 | 适合用途 | 不建议 |
| --- | --- | --- |
| Cell culture grade DMSO（细胞培养级） | 细胞冻存、细胞实验溶剂 | 不要用低纯度或未知级别产品冻存细胞 |
| Sterile-filtered DMSO（无菌过滤 DMSO） | 无菌细胞操作 | 开封后仍需防水、防污染 |
| Molecular biology grade DMSO（分子生物学级） | PCR、测序文库等分子实验 | 不一定经过细胞毒性或内毒素测试 |
| Anhydrous DMSO（无水 DMSO） | 对水分敏感的化学反应 | 日常细胞冻存未必需要 |
| Ready-to-use freezing medium（即用型冻存液） | 标准化冻存，减少配制误差 | 配方固定，成本较高 |

Sigma-Aldrich 的 DMSO Hybri-Max 产品问答指出，DMSO 具有 hygroscopic（吸湿）和 light-sensitive（光敏）特性，储存容器应防光、防潮，并且长期储存时要注意材料兼容性。[参考：Sigma-Aldrich DMSO Hybri-Max](https://www.sigmaaldrich.com/US/en/product/sigma/d2650)

## DMSO vs 甘油 vs 商业冻存液

| 方案 | 优点 | 局限 | 常见场景 |
| --- | --- | --- | --- |
| DMSO | 细胞冻存最常见，渗透能力强，经验丰富 | 复苏后有毒性，吸湿、穿透皮肤 | 哺乳动物细胞冻存 |
| [甘油](甘油.md) | 对部分微生物和特殊体系常见 | 对多数哺乳动物细胞不如 DMSO 常用 | 细菌、酵母、部分特殊冻存 |
| [细胞冻存液](细胞冻存液.md) | 配方稳定，减少人为配制差异 | 成本较高，配方不可完全自定义 | 细胞系、原代细胞、干细胞 |
| [无血清冻存液](无血清冻存液.md) | 避免血清批次和动物源成分 | 不同产品适配范围不同 | 原代细胞、干细胞、转化研究 |

## 使用策略

### 冻存时

**怎么做**：先收集健康细胞并计数，配好预冷冻存液。含 DMSO 的冻存液通常最后加入细胞，轻柔混匀后尽快分装到冻存管，再进入控制降温流程。

**为什么**：DMSO 加入细胞后就开始产生潜在毒性，拖延越久越容易降低复苏率。

**注意事项**：

- 不要用状态差、污染可疑或过度传代的细胞冻存。
- 含 DMSO 的冻存液不要让细胞在室温放太久。
- 冻存时要记录 DMSO 浓度和冻存液配方。

**替代方案**：对敏感细胞，使用商业冻存液或无血清冻存液，并做复苏验证。

**出错后果**：复苏率低、贴壁差、恢复慢。

### 复苏时

**怎么做**：快速解冻后把细胞逐滴加入预温培养基，按细胞类型决定是否离心去除 DMSO，或次日轻柔换液。

**为什么**：冻存状态下 DMSO 是保护剂；解冻后它会变成需要尽快稀释的压力源。

**注意事项**：

- 不要把冻存细胞融化后放在室温等待。
- 对 DMSO 敏感细胞，优先去除或快速稀释。
- 对离心敏感细胞，不要为了去 DMSO 而过度离心。

**替代方案**：参照 [细胞复苏](<../用(实验流程内容篇)/细胞复苏.md>)，在离心去除和直接接种之间按细胞敏感性取舍。

**出错后果**：细胞大量死亡、复苏后生长慢。

### 药物处理时

**怎么做**：所有处理组和对照组保持相同 DMSO 终浓度。小分子母液通常用 DMSO 配高浓度 stock，再稀释到培养基中。

**为什么**：DMSO 本身可以影响细胞膜、代谢和存活。没有溶剂对照时，无法区分药物作用和 DMSO 作用。

**注意事项**：

- DMSO 终浓度越低越好，常见细胞实验尽量控制在 0.1% 或更低，但需要按细胞和实验验证。
- 不同细胞对 DMSO 耐受不同。
- 化合物母液冻融次数要记录。

**替代方案**：如果化合物允许，可使用水、乙醇或专用溶剂；但所有溶剂都需要 vehicle control。

**出错后果**：把 DMSO 毒性误认为药物效应，或者不同组溶剂浓度不一致导致假阳性。

## 储存与安全

- DMSO 吸湿，开封后要拧紧并减少反复开盖。
- DMSO 可促进部分化学物质穿透皮肤，操作时戴合适手套，避免接触皮肤。
- 长期储存优先使用合适的密封避光容器。
- 不同塑料对 DMSO 兼容性不同，长期分装前确认容器材料。
- 细胞用 DMSO 不能随便用工业级或未知级别产品替代。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理策略 |
| --- | --- | --- |
| 冻存后复苏率低 | DMSO 暴露过久、降温不受控、DMSO 级别或保存不佳 | 使用新鲜细胞培养级 DMSO，缩短操作时间，控制降温 |
| 复苏后细胞大量死亡 | DMSO 未及时稀释/去除、复苏过慢 | 快速解冻，逐滴稀释，按细胞类型去除 DMSO |
| 药物实验对照也死亡 | DMSO 终浓度太高 | 降低 stock 加入体积，设置溶剂梯度 |
| 化合物析出 | DMSO stock 稀释到水相后溶解度不足 | 降低终浓度，改变加样方式或重新选择溶剂 |
| 不同批结果差异大 | DMSO 批次、开封时间、含水量或化合物冻融差异 | 记录批号和开封日期，分装保存，减少冻融 |

## 购买建议

细胞实验优先购买 cell culture grade、sterile-filtered、低内毒素或有细胞毒性测试说明的产品。常见可选品牌包括 [Sigma](<../番外/试剂厂商/Sigma.md>)、[Merck](<../番外/试剂厂商/Merck.md>)、[Gibco](<../番外/试剂厂商/Gibco.md>)、[Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>) 等。用于 PCR 的 DMSO 可以按分子生物学级选择，但不要反过来把普通分子级 DMSO 默认用于细胞冻存。

## 推荐记录模板

中文模板：

```text
试剂：DMSO（二甲基亚砜）
用途：冻存 / 药物溶剂 / PCR 添加剂
级别：细胞培养级 / 分子生物学级 / 无水 / 其他
品牌：
货号：
批号：
开封日期：
储存条件：
DMSO 终浓度：
配方或溶剂体系：
使用细胞或实验：
操作者：
备注：
```

English template:

```text
Reagent: DMSO, dimethyl sulfoxide
Use: cryopreservation / compound solvent / PCR additive
Grade: cell culture grade / molecular biology grade / anhydrous / other
Brand:
Catalog number:
Lot number:
Open date:
Storage condition:
Final DMSO concentration:
Formulation or solvent system:
Cell type or experiment:
Operator:
Notes:
```

## 小结

DMSO 是细胞冻存和药物处理中的高频试剂。它的关键矛盾是：冻存时保护细胞，解冻后又会伤害细胞；溶解药物很方便，但本身也是实验变量。使用 DMSO 时要记录级别、批号、开封日期、终浓度和暴露时间。

## 主要参考来源

- [Thermo Fisher: Cell Freezing Media](https://www.thermofisher.com/us/en/home/life-science/cell-culture/mammalian-cell-culture/reagents/cell-freezing-media.html)
- [Sigma-Aldrich: DMSO Hybri-Max](https://www.sigmaaldrich.com/US/en/product/sigma/d2650)
- [Thermo Fisher / Gibco: Cell Freezing Protocols](https://www.thermofisher.com/us/en/home/references/gibco-cell-culture-basics/cell-culture-protocols/freezing-cells.html)

