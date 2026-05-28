# SDS-PAGE凝胶

SDS-PAGE gel（sodium dodecyl sulfate-polyacrylamide gel electrophoresis gel，十二烷基硫酸钠-聚丙烯酰胺凝胶电泳凝胶）是用于按分子量分离蛋白的聚丙烯酰胺凝胶。它是 [SDS-PAGE](<../用(实验流程内容篇)/SDS-PAGE.md>) 和 [Western blot](<../用(实验流程内容篇)/Western blot.md>) 的核心耗材之一。

![WB与BCA核心材料参考图](../z_asset/材/WB与BCA核心材料/wb-bca-core-materials-reference.png)

图源：Image2 生成的 Western blot 与 BCA 核心材料参考图；左侧为预制 SDS-PAGE 凝胶卡夹，中间为湿转转膜槽，前方为 BCA 显色板。

## 工作原理

[SDS](十二烷基硫酸钠.md)（sodium dodecyl sulfate，十二烷基硫酸钠）会与蛋白结合，使多数蛋白带有近似与长度相关的负电荷，并破坏天然构象。蛋白在聚丙烯酰胺凝胶网孔中迁移，小蛋白更容易通过凝胶，大蛋白迁移更慢，从而实现按 apparent molecular weight（表观分子量）分离。

Bio-Rad 的 Mini-PROTEAN TGX 预制胶资料说明，这类 precast polyacrylamide gel（预制聚丙烯酰胺凝胶）用于 1-D polyacrylamide gel electrophoresis（单向聚丙烯酰胺凝胶电泳）和分子量估算，并可配合标准 Tris-glycine buffer 体系。[参考：Bio-Rad Mini-PROTEAN TGX Precast Gels](https://www.bio-rad.com/en-se/product/mini-protean-tgx-precast-gels?ID=N3GRW04VY)

## 常见类型

| 类型 | 特点 | 适合场景 |
| --- | --- | --- |
| 固定浓度胶 | 例如 8%、10%、12% | 目标蛋白分子量范围较集中 |
| 梯度胶 | 例如 4-12%、4-15%、4-20% | 同时观察宽分子量范围蛋白 |
| Tris-Glycine 胶 | 经典 Laemmli 系统 | 常规 WB 和教学实验 |
| Bis-Tris 胶 | pH 更温和，常见于 NuPAGE/Bolt 等系统 | 分辨率和保存稳定性较好 |
| Tris-Tricine 胶 | 更适合小分子量蛋白/肽 | 小蛋白、短肽 |
| Stain-free 胶 | 可快速总蛋白成像 | 总蛋白归一化或转膜前检查 |

Thermo Fisher 的 NuPAGE Bis-Tris 和 Bolt Bis-Tris Plus 资料也把 Bis-Tris 预制胶作为常见蛋白电泳胶体系之一，强调不同胶浓度和缓冲系统适配不同蛋白大小范围。[参考：Thermo Fisher NuPAGE/Bolt Bis-Tris gels](https://www.thermofisher.com/pm/en/home/life-science/protein-biology/protein-gel-electrophoresis/protein-gels/nupage-bis-tris-gels.html)

## 胶浓度怎么选

| 目标蛋白大小 | 常见选择 | 说明 |
| --- | --- | --- |
| 大蛋白 >150 kDa | 6%-8% 或低浓度梯度胶 | 大孔径利于进入和分离 |
| 中等蛋白 30-150 kDa | 8%-12% 或 4-15% 梯度胶 | 最常见范围 |
| 小蛋白 <30 kDa | 12%-15% 或 Tris-Tricine | 防止小蛋白跑出或分辨率差 |
| 多个目标差异很大 | 梯度胶 | 一张胶覆盖更宽范围 |

胶浓度不是越高越好。高浓度胶对小蛋白友好，但大蛋白进入困难；低浓度胶对大蛋白友好，但小蛋白分辨率差。

## 预制胶 vs 手灌胶

| 方案 | 优点 | 局限 |
| --- | --- | --- |
| 预制胶 | 批间一致、方便、节省时间 | 成本高，依赖厂商体系 |
| 手灌胶 | 成本低、浓度和胶型灵活 | 丙烯酰胺有毒，操作变异大 |
| 梯度预制胶 | 适合多分子量目标 | 价格更高，条件需固定 |

如果项目需要长期可重复的 WB 数据，预制胶的稳定性很有价值；如果只是探索条件或预算有限，手灌胶更灵活。

## 使用 protocol

### 上样前检查

**怎么做**：确认凝胶类型、浓度、孔数、厚度、有效期和兼容电泳槽。预制胶使用前去掉底部胶条，冲洗泳道。

**为什么**：胶型和电泳槽不兼容会漏液或跑歪；忘记去底部胶条是预制胶新手常见错误。

**注意事项**：

- 不同品牌胶卡夹尺寸可能不同。
- 选择与样本体积匹配的孔容量。
- 有沉淀或干裂的胶不要用于正式实验。

### 电泳运行

**怎么做**：装入电泳槽，加入正确 running buffer（运行缓冲液），上样 [Laemmli上样缓冲液](Laemmli上样缓冲液.md) 处理后的样本和 [蛋白Marker](蛋白Marker.md)，按推荐电压运行。

**为什么**：缓冲体系、电压和发热决定分离质量。错误 buffer 会导致迁移异常。

**注意事项**：

- 不要把 Tris-Glycine、Bis-Tris、Tris-Tricine 体系随意混用。
- 样本盐分过高会造成条带弯曲或拖尾。
- 运行过久会让小蛋白跑出胶。

### 转膜前处理

**怎么做**：电泳结束后根据目标蛋白大小和胶体系选择是否平衡凝胶，再进入 [转膜槽](转膜槽.md) 或半干/快速转膜系统。

**为什么**：凝胶厚度、浓度和缓冲体系都会影响转膜效率。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 条带笑脸 | 电压过高、发热、盐分高 | 降低电压，换新 buffer，降低盐 |
| 条带拖尾 | 样本降解、上样过量、盐/去污剂干扰 | 减少上样量，优化裂解液 |
| 大蛋白不进胶 | 胶浓度太高或样本处理不足 | 换低浓度胶，优化变性 |
| 小蛋白跑出 | 胶浓度太低或跑太久 | 换高浓度胶，缩短运行 |
| 转膜差 | 胶太厚、浓度不合适、转膜条件不匹配 | 优化转膜时间、电流和膜类型 |

## 购买与记录建议

常见供应商包括 [Bio-Rad](<../番外/试剂厂商/Bio-Rad.md>)、[Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>)、[Cytiva](<../番外/试剂厂商/Cytiva.md>) 等。记录时不要只写“SDS-PAGE 胶”，应写清浓度、梯度、厚度、孔数和品牌。

推荐记录模板（中文）：

```text
凝胶体系：
凝胶浓度/梯度：
孔数：
厚度：
品牌：
货号：
批号：
运行缓冲液：
电压/电流/时间：
目标蛋白大小：
异常现象：
```

Recommended record template (English):

```text
Gel system:
Gel percentage/gradient:
Well number:
Thickness:
Brand:
Catalog number:
Lot number:
Running buffer:
Voltage/current/time:
Target protein size:
Abnormal observation:
```

## 小结

SDS-PAGE 凝胶决定蛋白分离窗口。选胶时看目标蛋白大小、样本复杂度、是否需要后续转膜、预算和重复性要求；不要把所有 WB 都默认塞进同一种 10% 胶里。

## 参考来源

- [Bio-Rad Mini-PROTEAN TGX Precast Gels](https://www.bio-rad.com/en-se/product/mini-protean-tgx-precast-gels?ID=N3GRW04VY)
- [Thermo Fisher NuPAGE/Bolt Bis-Tris gels](https://www.thermofisher.com/pm/en/home/life-science/protein-biology/protein-gel-electrophoresis/protein-gels/nupage-bis-tris-gels.html)
