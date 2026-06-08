# HEPES

HEPES（4-(2-hydroxyethyl)-1-piperazineethanesulfonic acid，4-(2-羟乙基)-1-哌嗪乙磺酸）是一种 zwitterionic（两性离子）有机缓冲剂，常用于细胞培养和生化实验中增强 pH 稳定性。它属于 Good's buffers（Good 缓冲液）的一类，常用于 pH 7.2-7.6 附近。

## 核心用途

| 用途 | 作用 | 注意事项 |
| --- | --- | --- |
| 细胞培养基补充缓冲 | 增强培养基在 CO2 培养箱外的 pH 稳定性 | 没有营养作用，不能替代培养基配方优化 |
| 活细胞操作 | 换液、显微成像、分选或短时间室外操作时减少 pH 波动 | 长时间光照下要注意潜在光毒性 |
| 生化缓冲液 | 维持蛋白、酶反应或细胞裂解体系 pH | 与下游检测兼容性要验证 |
| 无 CO2 或低 CO2 短时处理 | 让培养基离开 CO2 培养箱时不迅速碱化 | 不等于长期无 CO2 培养方案 |

Thermo Fisher 的培养基补充剂页面说明，HEPES 没有细胞营养作用，但可在 pH 7.2-7.6 之间增强培养基缓冲能力，常用于细胞需要在 CO2 培养箱外较长时间操作的场景；常见浓度可在 10-25 mM，25 mM 很常用。[参考：Thermo Fisher Cell Culture Media Supplements](https://www.thermofisher.com/us/en/home/life-science/cell-culture/mammalian-cell-culture/media-supplements.html)

## HEPES 与碳酸氢盐缓冲

多数哺乳动物细胞培养基主要依赖 bicarbonate / CO2 system（碳酸氢盐/二氧化碳缓冲系统）。[碳酸氢钠](碳酸氢钠.md) 在 CO2 培养箱中既参与缓冲，也和培养基配方、CO2 浓度匹配。HEPES 则提供额外的化学缓冲能力，尤其在培养基离开 CO2 环境后有帮助。

| 缓冲系统 | 优点 | 局限 | 典型场景 |
| --- | --- | --- | --- |
| 碳酸氢盐 / CO2 | 细胞培养最常见，和 CO2 培养箱匹配 | 离开 CO2 后 pH 容易漂移 | 常规培养 |
| HEPES | CO2 外操作时 pH 更稳 | 无营养作用，光照下可能有副作用 | 活细胞成像、短时室外操作 |
| [PBS](PBS.md) / [DPBS](DPBS.md) | 简单盐缓冲体系 | 不能长期支持细胞生长 | 洗涤、短时处理 |

Thermo Fisher 还指出，碳酸氢钠浓度和 CO2 浓度需要匹配；不同 NaHCO3 水平对应不同推荐 CO2 条件。[参考：Thermo Fisher sodium bicarbonate in cell culture](https://www.thermofisher.com/us/en/home/life-science/cell-culture/mammalian-cell-culture/media-supplements.html)

## 什么时候需要加 HEPES

适合考虑 HEPES 的情况：

- 活细胞显微镜观察时，细胞要离开 CO2 培养箱。
- 流式分选、细胞处理或转运时间较长。
- 在普通空气中配制或处理细胞培养体系。
- 实验中 pH 波动明显影响结果。

不一定需要 HEPES 的情况：

- 细胞一直在稳定 CO2 培养箱中常规培养。
- 培养基配方本来已经含 HEPES。
- 下游实验对 HEPES、光照或离子环境敏感。

## 注意事项

### 浓度

常见细胞培养终浓度约 10-25 mM，很多商业含 HEPES 培养基在 15-25 mM 范围。不要把 HEPES 当成越多越稳；高浓度可能改变渗透压和细胞状态。

### 光照与活细胞实验

HEPES 在某些含核黄素的培养基和光照条件下可能促进过氧化氢等活性产物生成。Lepe-Zuniga 等人报道，含 HEPES 的培养基在可见光暴露下可产生细胞毒性产物，H2O2 是主要相关因素之一；另有 UVA 相关研究提醒，研究光照信号时应避免 HEPES/tryptophan 和 riboflavin 造成的人为 H2O2 生成。[参考：Lepe-Zuniga et al., 1987](https://pubmed.ncbi.nlm.nih.gov/2015762/)；[参考：Tyrrell group UVA medium effect](https://pubmed.ncbi.nlm.nih.gov/12747733/)

这不代表 HEPES 不能用，而是说明：长时间强光、荧光显微成像或光毒性实验中，HEPES 本身可能成为变量。

### 和 CO2 培养箱的关系

HEPES 是额外缓冲，不是随便取消 CO2 的理由。常规碳酸氢盐培养基仍然需要匹配 CO2 浓度。

## 使用策略

**怎么做**：如果培养基不含 HEPES，可用无菌 HEPES stock 或购买含 HEPES 的商业培养基。加入后确认 pH、渗透压和细胞状态。

**为什么**：HEPES 的价值在于降低 CO2 外操作时 pH 漂移，而不是提供营养。

**注意事项**：

- 确认培养基是否已经含 HEPES。
- 光照实验、ROS 实验和长时间成像要小心。
- 改变 HEPES 条件时要保持对照组一致。

**替代方案**：

- 短时间洗涤可用 PBS/DPBS。
- 常规培养优先依赖培养基自带碳酸氢盐/CO2 系统。
- 长时间活细胞成像可使用专门的 imaging medium（成像培养基）。

**出错后果**：pH 波动、细胞应激、光照实验假阳性、培养基渗透压改变。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理策略 |
| --- | --- | --- |
| 离开培养箱后培养基变紫 | 碳酸氢盐体系失去 CO2 平衡 | 缩短室外时间，使用 HEPES 或成像培养基 |
| 加 HEPES 后细胞状态变差 | 浓度过高、渗透压变化、细胞不适配 | 降低浓度，做对照，检查培养基配方 |
| 光照实验背景信号高 | HEPES/核黄素光反应产生 ROS | 避光，换无 HEPES/低核黄素体系，设置 medium-only control |
| 不同批实验 pH 不一致 | HEPES、NaHCO3、CO2 浓度或开盖时间不同 | 记录配方和 CO2，统一操作时间 |
| 培养基已有 HEPES 又额外添加 | 没看清配方 | 检查标签和说明书，避免重复添加 |

## 购买建议

可以购买 HEPES powder（粉末）自行配制，也可以购买无菌 HEPES solution（溶液）或含 HEPES 的商业培养基。细胞培养中优先选择 cell culture grade、sterile、endotoxin-controlled 的产品。常见供应商包括 [Gibco](<../番外/试剂厂商/Gibco.md>)、[Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>)、[Merck](<../番外/试剂厂商/Merck.md>)、[Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>)。

## 推荐记录模板

中文模板：

```text
试剂：HEPES
中文名：4-(2-羟乙基)-1-哌嗪乙磺酸
用途：培养基缓冲 / 活细胞成像 / 生化缓冲液
品牌：
货号：
批号：
形式：粉末 / 溶液 / 培养基内含
stock 浓度：
终浓度：
pH：
是否避光：
使用场景：
操作者：
备注：
```

English template:

```text
Reagent: HEPES
Full name: 4-(2-hydroxyethyl)-1-piperazineethanesulfonic acid
Use: medium buffering / live-cell imaging / biochemical buffer
Brand:
Catalog number:
Lot number:
Form: powder / solution / included in medium
Stock concentration:
Final concentration:
pH:
Light protection:
Application:
Operator:
Notes:
```

## 小结

HEPES 的定位是额外 pH 缓冲剂，尤其适合细胞离开 CO2 培养箱时使用。它不是营养成分，也不是越多越好。活细胞成像、ROS、光照和光毒性实验中，要把 HEPES 和光照产生的潜在副作用作为实验变量考虑。

## 主要参考来源

- [Thermo Fisher: Cell Culture Media Supplements - HEPES](https://www.thermofisher.com/us/en/home/life-science/cell-culture/mammalian-cell-culture/media-supplements.html)
- [Lepe-Zuniga et al., 1987, cytotoxic effects of light-exposed HEPES-containing medium](https://pubmed.ncbi.nlm.nih.gov/2015762/)
- [Irradiation of cells in culture medium and extracellular H2O2 generation](https://pubmed.ncbi.nlm.nih.gov/12747733/)

