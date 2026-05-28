# Pepstatin A

Pepstatin A（胃酶抑素 A）是一种 aspartic protease inhibitor（天冬氨酸蛋白酶抑制剂），常用于抑制 pepsin（胃蛋白酶）、renin（肾素）和 cathepsin D/E（组织蛋白酶 D/E）等天冬氨酸蛋白酶，在 [Western blot](<../用(实验流程内容篇)/Western blot.md>) 样本制备中常作为广谱 [蛋白酶抑制剂](蛋白酶抑制剂.md) cocktail 的组成之一。

![蛋白酶抑制剂成分参考图](../z_asset/材/蛋白酶抑制剂成分/protease-inhibitor-components-reference.png)

图源：Image2 生成的蛋白酶抑制剂成分参考图；Pepstatin A 位于右下方，主要对应 aspartic proteases（天冬氨酸蛋白酶）。

## 核心作用

Pepstatin A 是一类强效天冬氨酸蛋白酶抑制剂，尤其常用于保护可能被 cathepsin D/E 或酸性蛋白酶剪切的目标蛋白。它不抑制大多数丝氨酸蛋白酶和半胱氨酸蛋白酶，因此常与 [PMSF](PMSF.md)、[Aprotinin](Aprotinin.md)、[Leupeptin](Leupeptin.md)、[E-64](E-64.md) 联合使用。

Sigma-Aldrich 的 Pepstatin A 产品资料将其列为 aspartic protease inhibitor，并说明其可抑制 pepsin、renin 和 cathepsin D 等酶。参考：[Sigma-Aldrich Pepstatin A P5318](https://www.sigmaaldrich.com/US/en/product/sigma/p5318)。

## 什么时候特别需要关注

| 样本/目标 | 原因 |
| --- | --- |
| 溶酶体相关蛋白 | cathepsin D/E 参与酸性蛋白降解 |
| 组织样本 | 蛋白酶组成复杂，单靠 PMSF 不够 |
| 分泌蛋白/酸性环境相关样本 | 天冬氨酸蛋白酶可能参与剪切 |
| 目标蛋白反复出现低分子片段 | 可能需要补足 aspartic protease 抑制 |

## 溶解性与储存

Pepstatin A 水溶性较差，常用 DMSO、methanol（甲醇）或 ethanol（乙醇）配制储液，具体以产品说明书为准。由于加入体积通常很小，储液溶剂的终浓度一般不高，但仍应记录，特别是对酶活、细胞处理或蛋白互作实验。

| 变量 | 影响 |
| --- | --- |
| 储液溶剂 | 影响溶解和下游兼容性 |
| 分装 | 降低反复冻融 |
| 避光/低温 | 维持长期稳定性 |
| 终浓度 | 过低保护不足，过高可能带来溶剂或非特异影响 |

## Pepstatin A vs 其他抑制剂

| 抑制剂 | 主要靶点 | 是否可替代 Pepstatin A |
| --- | --- | --- |
| [PMSF](PMSF.md) | 丝氨酸蛋白酶 | 不能替代 |
| [Aprotinin](Aprotinin.md) | 丝氨酸蛋白酶 | 不能替代 |
| [Leupeptin](Leupeptin.md) | 半胱氨酸/部分丝氨酸蛋白酶 | 不能完全替代 |
| [E-64](E-64.md) | 半胱氨酸蛋白酶 | 不能替代 |
| Pepstatin A | 天冬氨酸蛋白酶 | 负责补足 aspartic protease 覆盖 |

## 使用 protocol

### 配储液

**怎么做**：按说明书选择合适有机溶剂配制 stock solution，小分装低温保存。

**为什么**：Pepstatin A 水溶性差，直接加入水相 buffer 可能溶解不充分，导致有效浓度偏低。

**注意事项**：

- 记录 DMSO/甲醇/乙醇等储液溶剂。
- 加入裂解液后确认没有可见沉淀。
- 若样本用于后续功能实验，做溶剂对照。

### 加入裂解液

**怎么做**：裂解前加入预冷裂解液，通常和其他 protease inhibitor cocktail 成分同时加入。

**为什么**：Pepstatin A 只覆盖天冬氨酸蛋白酶，单独使用很少能提供广谱保护。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 加了 PMSF 仍有降解 | 天冬氨酸蛋白酶未覆盖 | 加入 Pepstatin A 或广谱 cocktail |
| 储液有沉淀 | 溶剂不合适或浓度太高 | 按说明书换溶剂/降低浓度 |
| 样本中出现溶剂影响 | 储液加入体积过大 | 提高储液浓度或设置溶剂对照 |
| 质谱前处理受影响 | 抑制剂残留 | 评估脱盐/去除步骤 |

## 购买与记录建议

常见供应商包括 [Merck](<../番外/试剂厂商/Merck.md>)/[Sigma](<../番外/试剂厂商/Sigma.md>)、[Roche](<../番外/试剂厂商/Roche.md>)、[Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>) 等。多数常规 WB 不需要单独购买大包装 Pepstatin A；使用成熟 cocktail 更方便，单独购买适合做机制性优化或自配 cocktail。

推荐记录模板（中文）：

```text
Pepstatin A品牌：
货号：
批号：
储液浓度：
储液溶剂：
分装日期：
终浓度：
裂解液：
样本类型：
是否与其他抑制剂合用：
是否观察到沉淀：
异常现象：
```

Recommended record template (English):

```text
Pepstatin A brand:
Catalog number:
Lot number:
Stock concentration:
Stock solvent:
Aliquot date:
Final concentration:
Lysis buffer:
Sample type:
Combined with other inhibitors: yes/no
Precipitate observed: yes/no
Abnormal observation:
```

## 小结

Pepstatin A 的价值在于覆盖 PMSF/Aprotinin/Leupeptin/E-64 不擅长的天冬氨酸蛋白酶。它尤其适合出现在广谱 cocktail 里，用来减少样本制备时的“漏网降解”。

## 参考来源

- [Sigma-Aldrich Pepstatin A P5318](https://www.sigmaaldrich.com/US/en/product/sigma/p5318)
- [Roche cOmplete Protease Inhibitor Cocktail Tablets](https://www.sigmaaldrich.com/US/en/product/roche/11836170001)
- [CST Western Blot Protocol](https://www.cellsignal.com/learn-and-support/protocols/protocol-western)
