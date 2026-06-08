# Triton X-100

Triton X-100（聚乙二醇叔辛基苯基醚，常写作 octylphenol ethoxylate）是一种 nonionic detergent（非离子去污剂/表面活性剂），常用于细胞裂解、膜蛋白温和溶解、免疫染色透化和蛋白样本制备。在 [RIPA裂解液](RIPA裂解液.md) 中，它常可作为 [NP-40](NP-40.md) 的替代或同类非离子去污剂选择。

![裂解去污剂与甘油参考图](../z_asset/材/裂解去污剂与甘油/lysis-detergents-glycerol-reference.png)

图源：Image2 生成的裂解去污剂与甘油参考图；Triton X-100 位于左上方，图中把它归为 mild nonionic detergents（温和非离子去污剂）。

## 核心作用

Triton X-100 的主要用途是破坏脂质膜并溶解膜相关蛋白，同时相对温和地保留部分蛋白构象和蛋白互作。Sigma-Aldrich 的 Triton X-100 T8787 产品资料将其描述为常见 non-ionic surfactant（非离子表面活性剂），常用于 biochemical applications（生化应用）中 solubilize proteins（溶解蛋白），并可用于 protein purification、protein quantification 和 western blot。参考：[Sigma-Aldrich Triton X-100 T8787](https://www.sigmaaldrich.com/US/en/product/sigma/t8787)。

## 常见用途

| 场景 | 作用 | 注意点 |
| --- | --- | --- |
| 温和细胞裂解 | 破坏细胞膜，保留部分蛋白复合物 | 不一定能充分裂解核或强膜蛋白 |
| [RIPA裂解液](RIPA裂解液.md) | 非离子去污剂组分 | 与 [SDS](十二烷基硫酸钠.md)、[脱氧胆酸钠](脱氧胆酸钠.md) 合用后裂解更强 |
| [免疫共沉淀](<../用(实验流程内容篇)/免疫共沉淀.md>) | 比 RIPA 更温和，适合保护互作 | 浓度过高仍可能破坏弱互作 |
| 免疫染色/透化 | 增加抗体进入细胞的能力 | 浓度和时间影响细胞结构 |
| 膜蛋白提取 | 溶解部分膜相关蛋白 | 对多跨膜蛋白不一定足够 |

## Triton X-100 vs NP-40 vs SDS

| 试剂 | 类型 | 强度 | 常见用途 |
| --- | --- | --- | --- |
| Triton X-100 | 非离子去污剂 | 温和到中等 | 细胞裂解、透化、IP |
| [NP-40](NP-40.md) | 非离子去污剂 | 温和到中等 | 温和裂解、IP、RIPA 替代组分 |
| [脱氧胆酸钠](脱氧胆酸钠.md) | 离子型胆汁酸盐去污剂 | 中等到强 | RIPA 组分，膜相关蛋白溶解 |
| [SDS](十二烷基硫酸钠.md) | 阴离子去污剂 | 强变性 | SDS-PAGE、强裂解、蛋白变性 |
| [Tween-20](Tween-20.md) | 非离子表面活性剂 | 温和 | WB/ELISA 洗涤，降低背景 |

Triton X-100 和 NP-40 常被放在同一类讨论，但不能默认所有配方可 1:1 替换。不同批次、不同替代品和不同实验目标会影响结果。

## 使用 protocol

### 配裂解液

**怎么做**：按目标配方加入 Triton X-100，常见工作浓度为 0.1%-1%。用于蛋白裂解时，通常现用前加入 [蛋白酶抑制剂](蛋白酶抑制剂.md) 和需要的 [磷酸酶抑制剂](磷酸酶抑制剂.md)。

**为什么**：Triton X-100 负责破膜和蛋白溶解，抑制剂负责保护蛋白完整性和修饰状态，两者不是同一件事。

**注意事项**：

- Triton X-100 黏稠，移液容易挂壁，建议预润湿吸头或用正置换移液器。
- 低温时黏度更高，配制前可恢复到室温。
- 配好后要充分混匀，但避免大量泡沫。

### 用于IP或蛋白互作

**怎么做**：从较温和条件开始，例如低盐、0.1%-1% Triton X-100，再根据裂解效率和互作保留情况优化。

**为什么**：去污剂越强，裂解越充分，但越可能破坏弱互作或构象表位。

**替代策略**：若目标互作很弱，可比较 Triton X-100、NP-40、[洋地黄皂苷](洋地黄皂苷.md)（digitonin）或 [CHAPS](CHAPS.md)（3-[(3-cholamidopropyl)dimethylammonio]-1-propanesulfonate）体系，但这些属于独立优化主题。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 裂解不充分 | Triton 浓度低、时间短、样本量大 | 增加裂解时间或换 RIPA |
| IP 互作丢失 | 去污剂浓度太高或盐太高 | 降低 Triton/盐浓度，改温和裂解 |
| BCA 定量异常 | 去污剂浓度超出兼容范围 | 查 [BCA蛋白定量试剂盒](BCA蛋白定量试剂盒.md) 兼容表 |
| 移液误差大 | 液体黏稠挂壁 | 预润湿吸头，慢吸慢打 |
| 背景高 | 裂解液残留或洗涤不足 | 优化洗涤和澄清步骤 |

## 购买与记录建议

常见供应商包括 [Merck](<../番外/试剂厂商/Merck.md>)/[Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>)、[Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>)、[Bio-Rad](<../番外/试剂厂商/Bio-Rad.md>) 等。购买时注意 grade（等级）、是否适合 molecular biology/protein work，以及是否是 Triton X-100 本体或替代品。

推荐记录模板（中文）：

```text
Triton X-100品牌：
货号：
批号：
等级：
储存条件：
终浓度：
裂解液配方：
样本类型：
裂解时间/温度：
是否用于IP：
是否做BCA兼容性确认：
异常现象：
```

Recommended record template (English):

```text
Triton X-100 brand:
Catalog number:
Lot number:
Grade:
Storage condition:
Final concentration:
Lysis buffer formulation:
Sample type:
Lysis time/temperature:
Used for IP: yes/no
BCA compatibility checked: yes/no
Abnormal observation:
```

## 小结

Triton X-100 是温和裂解和透化中的常用工具。它的核心价值是“够温和地破膜”，但它不是万能裂解液；做 WB 全蛋白、IP、膜蛋白或免疫染色时，需要根据目标在裂解强度和结构保留之间取舍。

## 参考来源

- [Sigma-Aldrich Triton X-100 T8787](https://www.sigmaaldrich.com/US/en/product/sigma/t8787)
- [Sigma-Aldrich Triton X-100 product information sheet](https://b2b.sigmaaldrich.com/US/en/deepweb/assets/sigmaaldrich/product/documents/160/855/t8532pis.pdf)
- [Thermo Fisher RIPA Buffer](https://www.thermofisher.com/order/catalog/product/89900)
