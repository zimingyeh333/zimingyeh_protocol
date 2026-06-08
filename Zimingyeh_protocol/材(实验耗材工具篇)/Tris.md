# Tris

Tris（tris(hydroxymethyl)aminomethane，三羟甲基氨基甲烷）是生命科学实验中最常用的弱碱性缓冲剂之一，常用于 [SDS-PAGE](<../用(实验流程内容篇)/SDS-PAGE.md>)、[Western blot](<../用(实验流程内容篇)/Western blot.md>)、核酸电泳、蛋白纯化和免疫检测缓冲液。

![WB缓冲体系基础试剂参考图](../z_asset/材/WB缓冲体系基础试剂/wb-buffer-core-reagents-reference.png)

图源：Image2 生成的 WB/SDS-PAGE 缓冲体系基础试剂参考图；上方展示 Tris、Glycine、SDS、DTT、Tween-20 和 Methanol，底部示意它们在样本缓冲液、运行缓冲液、转膜缓冲液和洗膜缓冲液中的位置。

## 命名与常见形式

| 名称 | 英文 | 说明 |
| --- | --- | --- |
| Tris base | tris(hydroxymethyl)aminomethane | 未酸化的游离碱形式，常用于调 pH |
| Tris-HCl | tris hydrochloride，三羟甲基氨基甲烷盐酸盐 | 已经与盐酸成盐，配 buffer 更方便 |
| Tris buffer | Tris 缓冲液 | 可指不同 pH、不同浓度的 Tris 体系 |
| TBS | Tris-buffered saline，Tris 缓冲盐水 | Tris + [氯化钠](氯化钠.md)，常用于 WB 洗膜 |
| TBST | Tris-buffered saline with Tween-20，含 Tween-20 的 Tris 缓冲盐水 | TBS + [Tween-20](Tween-20.md)，常用于 WB 洗膜 |

Tris 的 pKa 在室温附近约为 8.1，因此常用于 pH 7-9 左右的缓冲体系。需要注意的是，Tris 的 pH 对温度较敏感，同一瓶 Tris buffer 在 4 摄氏度、室温和 37 摄氏度下 pH 可能不完全相同。

## 在WB/SDS-PAGE中的角色

| 位置 | 常见搭配 | 作用 |
| --- | --- | --- |
| [Laemmli上样缓冲液](Laemmli上样缓冲液.md) | Tris-HCl、[SDS](十二烷基硫酸钠.md)、[DTT](DTT.md)/β-ME、[甘油](甘油.md)、[溴酚蓝](溴酚蓝.md) | 提供样本变性和上样环境 |
| running buffer（运行缓冲液） | Tris + [甘氨酸](甘氨酸.md) + SDS | 维持电泳离子环境 |
| [转膜缓冲液](转膜缓冲液.md) | Tris + 甘氨酸 + [甲醇](甲醇.md) | 支持蛋白从胶转到膜 |
| [TBS](TBS.md)/[TBST](TBST.md) | Tris + NaCl ± Tween-20 | 抗体孵育和洗膜 |

Bio-Rad 的 10x Tris/Glycine Buffer 官方页面给出的 1x 工作液为 25 mM Tris、192 mM glycine，pH 8.3，并说明可用作 Western blot 转膜缓冲液或 native gel 运行缓冲液。参考：[Bio-Rad 10x Tris/Glycine Buffer](https://www.bio-rad.com/en-us/sku/1610734-10x-tris-glycine-buffer-for-western-blots-native-gels?ID=1610734)。

## Tris vs PBS/HEPES/磷酸盐

| 缓冲体系 | 优点 | 局限 | 常见场景 |
| --- | --- | --- | --- |
| Tris | 便宜、配方成熟、适合蛋白电泳和 WB | pH 受温度影响明显，可与某些金属/酶体系相互作用 | SDS-PAGE、WB、TBS |
| [PBS](PBS.md) | 等渗、生理兼容性好 | 磷酸盐可能与金属离子或钙镁形成沉淀 | 细胞洗涤、免疫染色 |
| [HEPES](HEPES.md) | 生理 pH 附近缓冲稳定，温度影响较小 | 成本较高，不是 WB 经典体系 | 细胞培养、酶反应 |
| 磷酸盐缓冲液 | 配方简单，pH 稳定 | 与某些检测/金属离子不兼容 | 生化缓冲、固定后洗涤 |

WB 中不是不能用 PBS/PBST，但很多抗体说明书和经典流程默认 TBS/TBST；如果目标蛋白、抗体或磷酸化检测对磷酸盐敏感，优先考虑 TBS/TBST。

## 配制要点

### 调pH

**怎么做**：Tris base 溶于水后用盐酸调 pH；Tris-HCl 则可和 Tris base 混合或少量调酸碱达到目标 pH。

**为什么**：Tris base 本身偏碱，直接称量加水不等于获得目标 pH 的 buffer。

**注意事项**：

- 标注 pH 时同时记录测定温度。
- pH 电极需要适合低离子或普通水相 buffer。
- 不要把“1 M Tris pH 6.8”和“1.5 M Tris pH 8.8”混用，它们在 SDS-PAGE 分离胶/浓缩胶中的作用不同。

### 过滤和储存

**怎么做**：常规 Tris 储液可室温或 4 摄氏度保存；若用于细胞或无菌体系，可过滤除菌。

**为什么**：Tris 本身较稳定，但污染和蒸发会改变 buffer 质量。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| SDS-PAGE 条带异常 | running buffer 配错 Tris/Glycine/SDS 比例 | 换新 1x buffer 或重新稀释 10x |
| 转膜效率异常 | 把 Tris-Glycine running buffer 当成 transfer buffer，或漏加甲醇 | 检查配方和甲醇比例 |
| WB 背景高 | TBS/TBST pH 或盐浓度不合适 | 固定配方并记录 pH |
| pH 每次不同 | 调 pH 温度不同、pH 计未校准 | 同温度测定，校准 pH 计 |

## 购买与记录建议

常见供应商包括 [Bio-Rad](<../番外/试剂厂商/Bio-Rad.md>)、[Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>)、[Merck](<../番外/试剂厂商/Merck.md>)/[Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>)、[Cytiva](<../番外/试剂厂商/Cytiva.md>)。如果用于蛋白电泳或分子生物学，优先选择 molecular biology grade（分子生物学级）或 electrophoresis grade（电泳级）。

推荐记录模板（中文）：

```text
试剂形式：Tris base / Tris-HCl
等级：
品牌：
货号：
批号：
储液浓度：
pH：
pH测定温度：
用途：
配制日期：
储存条件：
异常现象：
```

Recommended record template (English):

```text
Reagent form: Tris base / Tris-HCl
Grade:
Brand:
Catalog number:
Lot number:
Stock concentration:
pH:
pH measurement temperature:
Use:
Preparation date:
Storage condition:
Abnormal observation:
```

## 小结

Tris 是 WB/SDS-PAGE 里非常基础的“环境搭建者”。真正需要记住的是：它不是只负责“有个 pH”，还和甘氨酸、SDS、甲醇、盐浓度和温度共同决定电泳和转膜是否稳定。

## 参考来源

- [Bio-Rad 10x Tris/Glycine Buffer](https://www.bio-rad.com/en-us/sku/1610734-10x-tris-glycine-buffer-for-western-blots-native-gels?ID=1610734)
- [Bio-Rad Western Blot Buffers](https://www.bio-rad-antibodies.com/western-blot-buffers.html)
- [Bio-Rad Buffer Formulations PDF](https://www.bio-rad.com/webroot/web/pdf/lsr/literature/Bulletin_6199.pdf)
