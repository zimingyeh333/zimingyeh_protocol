# Laemmli上样缓冲液

## 一句话定义

Laemmli sample buffer（Laemmli 上样缓冲液）是 SDS-PAGE 和 [Western blot](<../用(实验流程内容篇)/Western blot.md>) 中最经典的蛋白样本缓冲液，用于让蛋白变性、带负电、增加样本密度并显示电泳前沿。

Laemmli 在 1970 年的经典论文中建立了 SDS-PAGE 蛋白分离体系，上样缓冲液也因此被称为 Laemmli sample buffer。[参考：Laemmli 1970](https://pubmed.ncbi.nlm.nih.gov/5432063/)

## 核心成分与作用

| 成分 | 常见作用 |
| --- | --- |
| [Tris](Tris.md)-HCl | 提供 pH 缓冲环境 |
| [十二烷基硫酸钠](十二烷基硫酸钠.md) | 变性蛋白并赋予负电荷 |
| [甘油](甘油.md) | 增加样本密度，使样本沉入上样孔 |
| [溴酚蓝](溴酚蓝.md) | tracking dye（示踪染料），显示电泳前沿 |
| [DTT](DTT.md) 或 [β-巯基乙醇](β-巯基乙醇.md) | 还原二硫键，使蛋白更充分变性 |

常见产品有 2×、4×、5× 等浓缩版本。使用时要按比例与蛋白样本混合，使最终浓度为 1×。

## 还原型 vs 非还原型

| 类型 | 是否含还原剂 | 适合 |
| --- | --- | --- |
| Reducing sample buffer（还原型上样缓冲液） | 含 DTT 或 β-ME | 常规 WB，检测单体蛋白和线性表位 |
| Non-reducing sample buffer（非还原型上样缓冲液） | 不含还原剂 | 保留二硫键相关多聚体或构象信息 |

大多数常规 WB 使用还原型上样缓冲液。但如果目标是抗体重链/轻链、二聚体、多聚体或二硫键依赖构象，非还原条件可能更合适。

## 使用 protocol

1. 根据蛋白浓度计算每个样本所需体积。
2. 加入浓缩 Laemmli 上样缓冲液，使最终为 1×。
3. 若缓冲液不含还原剂，现用前加入 DTT 或 β-ME。
4. 混匀后短暂离心。
5. 常规蛋白可 95°C 5 min 变性；膜蛋白或易聚集蛋白可尝试 70°C 10 min 或不煮。
6. 上样前再次短暂离心，避免气泡和样本残留。

Bio-Rad 和 Thermo Fisher 的 SDS-PAGE/WB protocol 都采用 sample buffer + reducing agent + heat denaturation 的基本逻辑。[参考：Bio-Rad Western Blotting Guide](https://www.bio-rad.com/applications-technologies/western-blotting-immunodetection-techniques?ID=PQEEPOBWLN4A)；[参考：Thermo Fisher Western Blot Protocols](https://www.thermofisher.com/uk/en/home/life-science/protein-biology/protein-biology-learning-center/protein-gel-electrophoresis-information/western-blot-protocols.html)

## 注意事项

- 定量应在加入 Laemmli 和还原剂之前完成，因为 SDS、DTT 或 β-ME 会干扰部分 [BCA蛋白定量试剂盒](BCA蛋白定量试剂盒.md)。
- 含 DTT 的样本反复冻融可能影响还原能力和样本质量。
- β-巯基乙醇气味强、刺激性高，需按 [化学品安全](<../实验室安全/化学品安全.md>) 要求处理。
- 高温煮样不总是更好，部分多跨膜蛋白会聚集。
- 溴酚蓝前沿接近胶底部时应停止电泳，避免小蛋白跑出胶。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 样本漂出上样孔 | 甘油不足、样本密度低、孔内残液多 | 使用正确浓度上样缓冲液，清理孔 |
| 条带异常偏高 | 还原或变性不足 | 加还原剂，优化加热条件 |
| 膜蛋白跑不进去 | 高温聚集 | 降低变性温度或缩短加热 |
| BCA 浓度异常 | 定量前已加还原剂/上样缓冲液 | 先定量再加样本缓冲液 |
| 电泳前沿异常 | 缓冲液过期或配比错误 | 使用新鲜/正确稀释的 sample buffer |

## 记录模板

中文模板：

```text
Laemmli 上样缓冲液名称：
品牌：
货号：
批号：
浓缩倍数：
是否含还原剂：
还原剂类型和终浓度：
样本:缓冲液比例：
变性温度和时间：
目标蛋白：
是否为膜蛋白/多聚体：
备注：
```

English template:

```text
Laemmli sample buffer name:
Brand:
Catalog number:
Lot number:
Concentration:
Reducing agent included: yes / no
Reducing agent type and final concentration:
Sample:buffer ratio:
Denaturation temperature and time:
Target protein:
Membrane protein / oligomer: yes / no
Notes:
```

## 小结

Laemmli 上样缓冲液决定了蛋白进入 SDS-PAGE 前的状态。常规 WB 通常需要 SDS、甘油、溴酚蓝和还原剂，但目标蛋白如果是膜蛋白、多聚体或构象敏感蛋白，就需要重新优化还原和加热条件。
