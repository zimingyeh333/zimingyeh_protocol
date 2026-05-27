# EDTA

EDTA（Ethylenediaminetetraacetic acid，乙二胺四乙酸）是一种常用 chelator（螯合剂），能结合 Ca2+、Mg2+ 等二价金属离子。在细胞培养中，它最常见的角色不是营养成分，而是通过螯合 Ca2+/Mg2+ 来削弱细胞黏附和细胞间连接，辅助 [细胞消化](<../用(实验流程内容篇)/细胞消化.md>) 与 [细胞传代](<../用(实验流程内容篇)/细胞传代.md>)。

Thermo Fisher 的 cell dissociation 资料说明，EDTA 可作为螯合剂结合 Ca2+ 和 Mg2+，从而增强 trypsin 对细胞黏附相关肽键的作用。[参考：Thermo Fisher Cell Dissociation and Trypsin](https://www.thermofisher.cn/gs/en/home/life-science/cell-culture/mammalian-cell-culture/reagents/cell-dissociation.html)

## 名称与常见形态

| 名称 | 中文 | 常见场景 |
| --- | --- | --- |
| EDTA | 乙二胺四乙酸 | 泛称，常见于缓冲液和解离体系 |
| Disodium EDTA | 乙二胺四乙酸二钠 | 生物实验常用盐型 |
| Tetrasodium EDTA | 乙二胺四乙酸四钠 | pH 更偏碱，配液时需注意 |
| Versene | EDTA-based cell dissociation solution，EDTA 细胞解离液 | 非酶或温和细胞解离 |
| Trypsin-EDTA | 胰蛋白酶-EDTA | 常规贴壁细胞消化 |

写实验记录时应写清楚是粉末 EDTA、EDTA stock、Versene，还是 Trypsin-EDTA 里的 EDTA。

## 核心作用

| 作用 | 为什么重要 |
| --- | --- |
| 螯合 Ca2+ 和 Mg2+ | 削弱 cadherin、integrin 等依赖二价阳离子的黏附/连接 |
| 辅助胰酶解离 | 让 trypsin 更容易切割贴附相关蛋白 |
| 非酶温和解离 | 可减少对表面蛋白的直接蛋白水解 |
| 抑制金属依赖过程 | 可能影响金属依赖酶、凝集、核酸酶和部分检测 |

EDTA 的强项是“去掉金属离子依赖的支撑”，不是直接切蛋白。单独 EDTA 通常比胰酶温和，但解离能力也更有限。

## 常见用途

- [Trypsin-EDTA](Trypsin-EDTA.md) 中作为辅助解离成分。
- EDTA-only 或 Versene 进行温和非酶细胞解离。
- 流式染色缓冲液中加入低浓度 EDTA，减少细胞团聚。
- 血液抗凝管中用于螯合钙离子，阻断凝血级联。
- 分子生物学缓冲液中保护核酸，降低部分金属依赖核酸酶活性。

## EDTA 与相近概念

| 项目 | 主要作用 | 适合场景 |
| --- | --- | --- |
| EDTA-only | 螯合二价阳离子，温和解离 | 表面 marker 敏感、弱贴壁细胞 |
| Trypsin-EDTA | 蛋白水解 + 螯合 | 常规贴壁细胞传代 |
| [TrypLE](TrypLE.md) | 胰酶样重组解离酶 | 无动物源胰酶替代 |
| [Accutase](Accutase.md) | 温和酶解离 | 流式、敏感细胞、干细胞 |
| 含 Ca2+/Mg2+ PBS/DPBS | 维持部分黏附和细胞状态 | 不适合消化前洗涤 |

PBS/DPBS 是否含 Ca2+/Mg2+ 会直接影响 EDTA 作用。如果消化前用含钙镁 PBS 洗细胞，EDTA 的螯合能力会被消耗，细胞可能更难脱落。

## 使用 protocol

### 配制或选择工作液

**怎么做**：根据用途选择 EDTA powder、EDTA stock、Versene 或商业 Trypsin-EDTA。粉末配液时注意 EDTA 溶解度受 pH 影响，通常需要调 pH 才能完全溶解。

**为什么**：不同盐型和 pH 会影响溶解、终浓度和细胞耐受性。

**注意事项**：

- 不要把 EDTA acid、disodium EDTA 和 tetrasodium EDTA 当成完全等价。
- 细胞培养用途应保证无菌和合适 pH/osmolality（渗透压）。
- 分子实验用途要考虑 nuclease-free（无核酸酶）等级。

### 细胞解离中的使用

**怎么做**：消化前用无 Ca2+/Mg2+ PBS/DPBS 洗细胞，再加入 EDTA-only、Versene 或 Trypsin-EDTA。观察细胞变圆和松动后及时进入终止、稀释或吹打步骤。

**为什么**：EDTA 需要先面对细胞-基质连接，而不是被血清或洗液中的金属离子大量消耗。

**注意事项**：

- EDTA-only 更温和，但不一定能处理强贴壁细胞。
- 低温会减慢解离。
- 长时间 EDTA 暴露可能影响细胞状态。

**替代方案**：解离不足可改用 Trypsin-EDTA、TrypLE 或 Accutase；表面蛋白极敏感时可先测试 EDTA-only。

### 流式缓冲液中的使用

**怎么做**：在流式染色或分选缓冲液中加入低浓度 EDTA，常用于减少细胞聚团。

**为什么**：EDTA 通过降低 Ca2+/Mg2+ 依赖的细胞间黏附，帮助维持单细胞悬液。

**注意事项**：

- 某些抗体、配体或细胞功能实验依赖二价阳离子，EDTA 可能干扰。
- 下游若需要金属离子依赖反应，应去除或降低 EDTA。

## 购买与记录建议

常见供应商包括 [Sigma](<../番外/试剂厂商/Sigma.md>) / [Merck](<../番外/试剂厂商/Merck.md>)、[Gibco](<../番外/试剂厂商/Gibco.md>)、[赛默飞](<../番外/试剂厂商/赛默飞.md>)、[Corning](<../番外/试剂厂商/Corning.md>) 等。细胞培养场景推荐直接购买无菌商业 EDTA/Versene 或 Trypsin-EDTA；普通缓冲液可用分析级或分子生物学级 EDTA 自配。

推荐记录：

```text
EDTA form:
Supplier:
Catalog number:
Lot number:
Stock concentration:
Working concentration:
pH:
Sterility:
Ca2+/Mg2+ status of wash buffer:
Application:
Exposure time:
```

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| EDTA 不溶 | pH 太低或盐型不合适 | 缓慢调 pH，确认盐型和配方 |
| 细胞不脱落 | 含钙镁洗液、血清残留、EDTA-only 强度不够 | 换无钙镁洗液，改 Trypsin-EDTA 或 Accutase |
| 细胞状态差 | 暴露过久、pH/渗透压不合适 | 缩短时间，使用商业无菌工作液 |
| 下游反应异常 | EDTA 螯合了反应所需金属离子 | 洗去 EDTA 或改用无 EDTA 缓冲液 |

## 小结

EDTA 是细胞解离中的“拆掉金属离子支撑”的工具。它能让胰酶更有效，也能作为温和非酶策略保护表面蛋白，但必须注意 Ca2+/Mg2+、pH、渗透压和下游金属依赖反应。

## 参考来源

- [Thermo Fisher Cell Dissociation and Trypsin](https://www.thermofisher.cn/gs/en/home/life-science/cell-culture/mammalian-cell-culture/reagents/cell-dissociation.html)
- [Thermo Fisher Versene Solution](https://www.thermofisher.com/order/catalog/product/15040066)
