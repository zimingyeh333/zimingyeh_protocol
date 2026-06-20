# CHAPS

CHAPS（3-[(3-cholamidopropyl)dimethylammonio]-1-propanesulfonate，3-[(3-胆酰胺丙基)二甲基铵基]-1-丙磺酸盐）是一种 zwitterionic detergent（两性离子去污剂/表面活性剂），常用于温和 solubilization（溶解）膜蛋白、受体和部分蛋白复合物。它比 [SDS](SDS.md) 温和得多，通常被归为 non-denaturing detergent（非变性去污剂），但仍然能改变膜结构和蛋白复合物环境，不能简单理解成“完全无扰动”。

![裂解去污剂与甘油参考图](../z_asset/材/裂解去污剂与甘油/lysis-detergents-glycerol-reference.png)

图源：Image2 生成的裂解去污剂与甘油参考图。CHAPS 位于右下方，代表较温和的两性离子去污剂，常在膜蛋白提取、非变性裂解和部分蛋白组学前处理中作为候选条件。

## 命名与化学特点

CHAPS 的全称来自它的 cholamidopropyl（胆酰胺丙基）骨架和 sulfobetaine（磺基甜菜碱）结构。它同时带有正电荷和负电荷，因此属于 zwitterionic detergent。Thermo Fisher 的 CHAPS 产品资料也将其定义为 zwitterionic detergent，并说明它特别适合在希望保持 protein native state（蛋白天然状态）时使用。参考：[Thermo Scientific CHAPS Detergent](https://www.thermofisher.com/order/catalog/product/28300)。

CHAPS 是 cholic acid（胆酸）衍生物，兼具胆汁酸样疏水骨架和亲水离子头基。它的 critical micelle concentration（CMC，临界胶束浓度）较高，Thermo Fisher 产品资料给出的 CMC 为 8-10 mM，也说明它可通过 dialysis（透析）从溶液中去除。

## 核心作用

| 作用 | 为什么有用 | 注意点 |
| --- | --- | --- |
| 溶解膜蛋白 | 帮助把疏水膜蛋白从膜环境转入水相 | 不一定适合所有膜蛋白，仍需优化 |
| 保持相对非变性状态 | 比 SDS 等离子型去污剂更温和 | 不能保证保留所有蛋白互作 |
| 适合部分 IEF/2D 电泳 | 中性净电荷和去聚集能力可减少某些拖尾 | 需按蛋白组学 SOP 控制浓度和盐 |
| 可与其他去污剂组合 | 可与 NP-40 等非离子去污剂共同优化 | 混合体系会改变下游兼容性 |

Thermo Fisher 资料中也提到，CHAPS 常用于 membrane protein solubilization（膜蛋白溶解），在保持蛋白活性时尤其有用，并常用于 IEF（isoelectric focusing，等电聚焦）和 2D electrophoresis（二维电泳）。

## CHAPS vs Triton X-100 / NP-40 / SDS / 脱氧胆酸钠

| 试剂 | 类型 | 裂解强度 | 常见用途 | 主要风险 |
| --- | --- | --- | --- | --- |
| CHAPS | 两性离子去污剂 | 温和到中等 | 膜蛋白、受体、非变性体系、IEF/2D | 溶解能力需优化，价格较高 |
| [Triton X-100](<Triton X-100.md>) | 非离子去污剂 | 温和到中等 | 细胞裂解、通透、IP | 某些膜蛋白提取不足 |
| [NP-40](NP-40.md) | 非离子去污剂 | 温和到中等 | 温和裂解、IP、RIPA 组分 | 替代品和配方差异明显 |
| [脱氧胆酸钠](脱氧胆酸钠.md) | 胆汁酸盐/离子型去污剂 | 中等到强 | RIPA 组分，增强膜蛋白提取 | 更容易破坏互作 |
| SDS | 阴离子去污剂 | 强变性 | SDS-PAGE、强裂解 | 破坏构象和互作，干扰许多下游 |

一句话判断：如果目标是“尽可能强地把蛋白全部拉出来”，CHAPS 通常不是第一默认；如果目标是“溶解膜蛋白，同时尽量比 SDS 温和”，CHAPS 才更值得进入优化矩阵。

## 常见用途

### 膜蛋白和受体溶解

**怎么用**：把 CHAPS 加入裂解或提取缓冲液中，按目标蛋白、膜组分和下游实验优化浓度。

**为什么**：膜蛋白疏水区域容易在水相中聚集，CHAPS 可以通过胶束环境帮助其保持可溶。

**注意事项**：不同膜蛋白对去污剂非常挑剔。一个蛋白适合 CHAPS，不代表同类膜蛋白都适合。

**替代策略**：可比较 Triton X-100、NP-40、digitonin（洋地黄皂苷）、脱氧胆酸钠或专用膜蛋白提取试剂。

### 非变性裂解和蛋白互作保护

**怎么用**：在 [细胞裂解](<../用(实验流程内容篇)/细胞裂解.md>) 或 [免疫共沉淀](<../用(实验流程内容篇)/免疫共沉淀.md>) 预实验中，把 CHAPS 作为温和裂解条件之一。

**为什么**：CHAPS 比 SDS 更少破坏蛋白构象和功能，适合想在裂解与保互作之间寻找平衡的场景。

**注意事项**：CHAPS 仍然是去污剂，可能改变弱互作或膜相关复合物。IP 之前必须用 input、IP 产物和阴性对照判断。

### IEF 和二维电泳

**怎么用**：在 IEF/2D electrophoresis 样本溶解液中作为去污剂组分之一，具体浓度按蛋白组学 SOP。

**为什么**：CHAPS 净电荷特性和溶解能力适合部分等电聚焦体系。Thermo Fisher 资料提到 CHAPS 常用于 IEF 和 2D electrophoresis，并在一些 pH 范围内帮助减少 streaking（拖尾）。

**注意事项**：IEF 对盐、离子强度和去污剂背景很敏感，不能直接把 WB 裂解液搬过去。

## 配制和使用注意事项

- CHAPS 通常以白色粉末形式购买，按产品说明书储存；Thermo Fisher 页面标注为 room temperature（室温）储存。
- 配制水溶液时应充分溶解，必要时轻微温和混匀，避免剧烈起泡。
- 用于蛋白裂解时，仍需根据目标加入 [蛋白酶抑制剂](蛋白酶抑制剂.md)；检测磷酸化蛋白时还需要 [磷酸酶抑制剂](磷酸酶抑制剂.md)。
- 用于蛋白定量、ELISA、酶活或质谱前，要确认 CHAPS 与具体试剂盒或仪器流程兼容。
- 不要把 CHAPS 和 [CHAPSO](CHAPSO.md) 混为一谈；CHAPSO 结构类似但多一个羟基，溶解和应用表现可能不同。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 膜蛋白仍不溶 | CHAPS 浓度或体系不合适，目标蛋白本身难溶 | 比较不同去污剂和盐浓度，检测 pellet |
| IP 信号下降 | 去污剂浓度过高或互作本身较弱 | 降低 CHAPS，换 NP-40/Triton 或更温和体系 |
| 蛋白定量异常 | 去污剂背景干扰或空白不匹配 | 用同背景空白，查试剂盒兼容表 |
| 样本泡沫多 | 混匀过猛或浓度较高 | 轻柔混匀，短暂离心去泡 |
| 2D 电泳拖尾 | 盐、核酸、还原剂或去污剂体系不合适 | 按蛋白组学 SOP 重新处理样本 |

## 购买建议

购买 CHAPS 时优先确认：

- purity（纯度）和 grade（等级）是否适合蛋白实验。
- 是否适合 membrane protein（膜蛋白）、IEF/2D 或目标 SOP。
- 是否有 COA（Certificate of Analysis，分析证书）和 lot number（批号）。
- 粉末是否易吸湿，开封后是否需要分装和防潮。

常见供应商包括 [Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>)、[Merck](<../番外/试剂厂商/Merck.md>)/[Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>)、[Bio-Rad](<../番外/试剂厂商/Bio-Rad.md>) 等。若用于蛋白组学或关键膜蛋白项目，尽量保持同一品牌、同一等级和稳定批次，避免去污剂背景变化引入新的变量。

## 推荐记录

### 中文记录

```text
CHAPS品牌：
公司：
货号：
批号：
纯度/等级：
配制浓度：
工作浓度：
缓冲体系：
下游用途：WB / IP / 膜蛋白提取 / IEF / 2D / 其他
是否加入蛋白酶抑制剂：
是否加入磷酸酶抑制剂：
开封日期：
储存条件：
异常观察：
```

### English record

```text
CHAPS brand:
Company:
Catalog number:
Lot number:
Purity / grade:
Stock concentration:
Working concentration:
Buffer system:
Downstream application: WB / IP / membrane protein extraction / IEF / 2D / other
Protease inhibitor added:
Phosphatase inhibitor added:
Opening date:
Storage condition:
Abnormal observations:
```

## 小结

CHAPS 是温和、两性离子、偏膜蛋白和非变性体系的去污剂选择。它的价值不在于“比 RIPA 更强”，而在于在溶解膜相关蛋白的同时尽量减少对蛋白天然状态的破坏。实际使用时应把 CHAPS 当作优化矩阵中的一个条件，而不是所有裂解问题的万能答案。

## 参考来源

- [Thermo Scientific CHAPS Detergent](https://www.thermofisher.com/order/catalog/product/28300)
- Hjelmeland LM. A nondenaturing zwitterionic detergent for membrane biochemistry: design and synthesis. PNAS, 1980. DOI: [10.1073/pnas.77.11.6368](https://doi.org/10.1073/pnas.77.11.6368)
