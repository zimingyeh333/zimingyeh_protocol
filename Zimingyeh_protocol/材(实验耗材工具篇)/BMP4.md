# BMP4

BMP4（Bone Morphogenetic Protein 4，骨形态发生蛋白 4）是 TGF-β superfamily（TGF-β 超家族）成员之一，常用于干细胞分化、胚层诱导、骨/软骨相关培养和发育生物学模型。

![生长因子信号模块参考图](../z_asset/材/生长因子模块/growth-factor-signaling-modules-reference.png)

图源：Image2 生成的生长因子信号模块参考图；BMP 位于 TGF-beta/BMP/Activin-SMAD 模块，常通过 SMAD1/5/8 影响分化和命运。

## 核心定位

BMP4 主要通过 BMP receptors（BMP 受体）激活 SMAD1/5/8。R&D Systems 的 recombinant human BMP-4 产品资料说明，BMP-4 属于 TGF-β superfamily，可参与骨和软骨形成、胚胎发育、细胞增殖、分化和凋亡等过程。参考：[R&D Systems Recombinant Human BMP-4](https://www.rndsystems.com/products/recombinant-human-bmp-4-protein_314-bp)。

培养体系中，BMP4 常作为分化方向的“推力”，而不是简单促增殖因子。它的效果高度依赖细胞类型、剂量、时间窗和是否同时存在 Activin、FGF、Wnt 或 BMP 抑制剂。

## 常见用途

| 场景 | BMP4的角色 |
| --- | --- |
| hESC/hiPSC分化 | 诱导特定胚层或谱系方向 |
| 骨/软骨相关培养 | 与成骨/软骨分化相关 |
| 胚胎发育模型 | 模拟 BMP 轴信号 |
| 类器官/组织模型 | 与 Wnt、FGF、Activin 等共同决定模式化 |
| 对照实验 | 用于激活 BMP-SMAD1/5/8 信号 |

## BMP4 vs Noggin

| 项目 | BMP4 | [Noggin](Noggin.md) |
| --- | --- | --- |
| 角色 | BMP信号配体 | BMP信号拮抗因子 |
| 常见效果 | 激活 SMAD1/5/8 | 阻断 BMP4/BMP相关信号 |
| 何时一起出现 | 分化或类器官体系中调控 BMP 强度 | 类器官 cocktail 常用 Noggin 抑制 BMP |

如果 protocol 写 “Noggin blocks BMP”，通常意味着体系需要抑制 BMP 信号来维持特定干性或上皮状态。

## BMP4 vs TGF-β/Activin A

| 因子 | 主要SMAD模块 | 常见含义 |
| --- | --- | --- |
| BMP4 | SMAD1/5/8 | BMP方向分化、骨/胚层相关 |
| [TGF-β](TGF-β.md) | SMAD2/3 | EMT、免疫、纤维化、状态改变 |
| [Activin A](<Activin A.md>) | SMAD2/3 | 内胚层诱导和发育分化 |

## 使用 protocol

### 重构和使用

**怎么做**：按厂家说明重构，小分装低温保存。使用时按分化 protocol 加入，记录终浓度、时间窗和是否与其他因子联用。

**为什么**：BMP4 的作用往往是阶段性的。错误时间加入，可能让细胞走向完全不同的分化命运。

**注意事项**：

- 分化实验中，BMP4 的浓度和加入天数要精确记录。
- 如果同时使用 Noggin、Wnt3A、Activin A 或 FGF2，要记录所有因子的相对时间。
- 观察 readout 不应只看增殖，还要看 lineage marker（谱系标志物）。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 分化方向不对 | BMP4加入时间或浓度错误 | 重新检查时间线 |
| pSMAD1/5/8弱 | BMP4失活或抑制剂残留 | 换新分装并设置阳性对照 |
| 细胞死亡 | 剂量过高或基础状态不适合诱导 | 降低剂量，优化起始密度 |
| 批间差异 | 活性单位或重构方式不同 | 记录批号和活性 |

## 购买与记录建议

常见供应商包括 [PeproTech](<../番外/试剂厂商/PeproTech.md>)、[R&D Systems](<../番外/试剂厂商/R&D Systems.md>)、[BioLegend](<../番外/试剂厂商/BioLegend.md>)、[Sino Biological](<../番外/试剂厂商/Sino Biological.md>) 等。分化实验优先选择有明确活性测试和低内毒素信息的产品。

推荐记录模板（中文）：

```text
BMP4产品全名：
品牌：
货号：
批号：
物种来源：
表达系统：
重构液：
储液浓度：
终浓度：
加入阶段/天数：
联用因子：
检测marker：
冻融次数：
异常现象：
```

Recommended record template (English):

```text
BMP4 product full name:
Brand:
Catalog number:
Lot number:
Species source:
Expression system:
Reconstitution buffer:
Stock concentration:
Final concentration:
Treatment stage/days:
Combined factors:
Markers measured:
Freeze-thaw cycles:
Abnormal observation:
```

## 小结

BMP4 是典型命运调控因子，尤其常见于分化、发育模型和类器官体系。它的关键变量是剂量、时间窗、是否被 Noggin 抑制，以及与 Wnt/FGF/Activin 等信号的组合关系。

## 参考来源

- [R&D Systems Recombinant Human BMP-4](https://www.rndsystems.com/products/recombinant-human-bmp-4-protein_314-bp)
- [Thermo Fisher PeproTech Proteins](https://www.thermofisher.com/tr/en/home/brands/peprotech.html)

