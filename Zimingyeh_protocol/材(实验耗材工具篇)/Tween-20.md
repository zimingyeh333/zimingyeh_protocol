# Tween-20

Tween-20（polysorbate 20，聚山梨酯 20）是一种非离子表面活性剂，在 [Western blot](<../用(实验流程内容篇)/Western blot.md>)、ELISA（enzyme-linked immunosorbent assay，酶联免疫吸附实验）和免疫染色中常用于 wash buffer（洗涤缓冲液），帮助降低非特异吸附和背景。

![WB缓冲体系基础试剂参考图](../z_asset/材/WB缓冲体系基础试剂/wb-buffer-core-reagents-reference.png)

图源：Image2 生成的 WB/SDS-PAGE 缓冲体系基础试剂参考图；Tween-20 位于上排第五瓶，底部示意其主要进入 wash buffer（洗膜/洗涤缓冲液）。

## 核心作用

Tween-20 能降低液体表面张力，并减少抗体、蛋白或膜表面的非特异疏水吸附。WB 中常见的 [TBST](TBST.md) 和 [PBST](PBST.md) 就是在 [TBS](TBS.md) 或 [PBS](PBS.md) 中加入少量 Tween-20。

Sigma-Aldrich 的 TBST 配方页面将含 0.1% Tween-20 的 Tris-buffered saline 描述为许多 immunoassays（免疫测定）中有效的 wash buffer，并给出 1 L TBST 可由 100 mL 10x TBS、1 mL Tween-20 和 900 mL 水配制。参考：[Sigma-Aldrich TBST](https://www.sigmaaldrich.cn/CN/en/support/calculators-and-apps/1x-tris-buffered-saline-tween-20)。

## 常见使用浓度

| 场景 | 常见 Tween-20 浓度 | 说明 |
| --- | --- | --- |
| WB 洗膜 | 0.05%-0.1% | 最常见范围 |
| 抗体稀释液 | 0.05%-0.1% | 可降低非特异结合 |
| ELISA 洗板 | 0.05% 左右 | 视 kit/protocol 而定 |
| 免疫染色洗涤 | 0.05%-0.3% | 需兼顾 permeabilization（透化）和背景 |

Bio-Rad 的 Western blot detergent 页面提到 10% Tween-20 可让移液更准确且更方便，并列入 WB 洗膜相关试剂。参考：[Bio-Rad Western Blotting Detergents](https://www.bio-rad.com/en-uk/product/western-blotting-detergents?ID=4e7b38d0-dfb3-4b9d-850c-f1de630f8eb7)。

## Tween-20 vs Triton X-100 vs SDS

| 试剂 | 类型 | 强度 | 常见用途 |
| --- | --- | --- | --- |
| Tween-20 | 非离子表面活性剂 | 温和 | WB/ELISA 洗涤、降低背景 |
| [Triton X-100](Triton X-100.md) | 非离子去污剂 | 较强 | 细胞膜透化、温和裂解 |
| [NP-40](NP-40.md) | 非离子去污剂 | 温和到中等 | 细胞裂解、免疫沉淀 |
| [SDS](十二烷基硫酸钠.md) | 阴离子去污剂 | 强变性 | SDS-PAGE、强裂解 |

不要把 Tween-20 当成 SDS 的替代品。Tween-20 适合洗涤和降低背景，但不能让蛋白在电泳中获得统一负电荷。

## 使用 protocol

### 配TBST/PBST

**怎么做**：常见做法是在 1x TBS 或 PBS 中加入 0.05%-0.1% Tween-20，充分混匀但避免产生大量泡沫。

**为什么**：Tween-20 黏稠，直接吸取小体积容易挂壁；预先配成 10% Tween-20 储液或剪去吸头尖端可提高准确性。

**注意事项**：

- 记录到底是 TBST 还是 PBST。
- 记录 Tween-20 的终浓度。
- 使用前轻轻混匀，避免局部浓度不均。

### 洗膜

**怎么做**：按 protocol 用 TBST/PBST 多次洗膜，控制每次洗涤时间、体积和摇床速度。

**为什么**：洗涤不足会导致背景高；过强洗涤或 Tween-20 过高可能降低弱相互作用信号。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| WB 背景高 | Tween-20 太低、洗涤不足、封闭不合适 | 增加洗涤次数或优化封闭 |
| 信号变弱 | Tween-20 太高或洗涤过强 | 降低 Tween-20 或缩短洗涤 |
| 重复性差 | Tween-20 黏稠导致加量不准 | 使用 10% 储液或反向移液 |
| 泡沫多 | 剧烈涡旋 | 轻轻颠倒混匀 |
| 抗体不兼容 | 某些抗体对 detergent 敏感 | 查抗体说明书，比较 TBS/TBST/PBS/PBST |

## 购买与记录建议

常见供应商包括 [Merck](<../番外/试剂厂商/Merck.md>)/[Sigma](<../番外/试剂厂商/Sigma.md>)、[Bio-Rad](<../番外/试剂厂商/Bio-Rad.md>)、[Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>)、[Cell Signaling Technology](<../番外/试剂厂商/Cell Signaling Technology.md>)。如果只是 WB 洗膜，普通 molecular biology grade 通常足够；如果用于细胞或特殊成像体系，需关注纯度、防腐剂和批间差异。

推荐记录模板（中文）：

```text
Tween-20品牌：
货号：
批号：
等级：
储液浓度：
终浓度：
缓冲体系：TBS/PBS/其他
用途：洗膜/抗体稀释/ELISA/免疫染色
配制日期：
储存条件：
异常现象：
```

Recommended record template (English):

```text
Tween-20 brand:
Catalog number:
Lot number:
Grade:
Stock concentration:
Final concentration:
Buffer system: TBS/PBS/other
Use: blot wash/antibody diluent/ELISA/immunostaining
Preparation date:
Storage condition:
Abnormal observation:
```

## 小结

Tween-20 是 WB 洗膜体系中的“背景控制旋钮”。它少了可能洗不干净，多了又可能把弱信号洗掉；因此每次记录 TBST/PBST 时，Tween-20 终浓度必须写清楚。

## 参考来源

- [Sigma-Aldrich TBST](https://www.sigmaaldrich.cn/CN/en/support/calculators-and-apps/1x-tris-buffered-saline-tween-20)
- [Sigma-Aldrich Tween 20 P9416](https://www.sigmaaldrich.com/US/en/product/sigma/p9416)
- [Bio-Rad Western Blotting Detergents](https://www.bio-rad.com/en-uk/product/western-blotting-detergents?ID=4e7b38d0-dfb3-4b9d-850c-f1de630f8eb7)
