# Leupeptin

Leupeptin（亮肽素）是一种可逆 protease inhibitor（蛋白酶抑制剂），主要抑制 cysteine proteases（半胱氨酸蛋白酶）和部分 serine proteases（丝氨酸蛋白酶），常用于细胞裂解、组织匀浆、[Western blot](<../用(实验流程内容篇)/Western blot.md>) 样本制备和蛋白纯化保护。

![蛋白酶抑制剂成分参考图](../z_asset/材/蛋白酶抑制剂成分/protease-inhibitor-components-reference.png)

图源：Image2 生成的蛋白酶抑制剂成分参考图；Leupeptin 位于右上方，主要对应 cysteine proteases（半胱氨酸蛋白酶），也可覆盖部分 trypsin-like serine proteases。

## 核心作用

Leupeptin 常用于抑制 cathepsin B/L/H（组织蛋白酶 B/L/H）、calpain（钙蛋白酶）以及 trypsin/plasmin 等部分丝氨酸蛋白酶活性。它在 [蛋白酶抑制剂](蛋白酶抑制剂.md) cocktail 中经常和 [PMSF](PMSF.md)、[Aprotinin](Aprotinin.md)、[Pepstatin A](<Pepstatin A.md>)、[E-64](E-64.md) 搭配。

Sigma-Aldrich 的 Leupeptin hemisulfate 产品资料将其描述为可抑制 serine 和 cysteine proteases 的微生物来源抑制剂。参考：[Sigma-Aldrich Leupeptin hemisulfate L2884](https://www.sigmaaldrich.com/US/en/product/sigma/l2884)。

## 适合用途

| 场景 | 为什么有用 | 注意点 |
| --- | --- | --- |
| WB 全蛋白裂解 | 防止裂解后 cathepsin/calpain 相关降解 | 仍需低温和快速操作 |
| 组织样本 | 组织蛋白酶活性复杂 | 建议与广谱 cocktail 合用 |
| 溶酶体相关蛋白 | cathepsin 相关降解风险高 | 可能特别需要 Leupeptin/E-64 |
| 蛋白纯化 | 保护目标蛋白 | 需确认后续酶切/质谱兼容性 |

## Leupeptin vs E-64

| 项目 | Leupeptin | E-64 |
| --- | --- | --- |
| 抑制方式 | 多为可逆抑制 | 不可逆抑制 cysteine proteases |
| 靶点范围 | 半胱氨酸蛋白酶 + 部分丝氨酸蛋白酶 | 更偏半胱氨酸蛋白酶 |
| 常见用途 | 广谱 cocktail 成分 | cysteine protease 保护或机制实验 |
| 局限 | 不覆盖 aspartic proteases | 不覆盖 serine/aspartic proteases |

如果目标是常规样本保护，Leupeptin 更常作为 cocktail 的一部分；如果目标明确涉及 cysteine protease 活性，E-64 的靶向性更强。

## 使用 protocol

### 配储液

**怎么做**：按说明书用水或合适 buffer 配制 stock solution，小分装，低温保存。

**为什么**：Leupeptin 常用浓度较低，小分装能减少冻融误差和污染风险。

**注意事项**：

- 不同盐形式和水合状态会影响质量-摩尔浓度换算。
- 若使用 commercial cocktail，通常不需要额外补 Leupeptin，除非有明确优化理由。

### 加入裂解液

**怎么做**：裂解前加入预冷 [RIPA裂解液](RIPA裂解液.md) 或其他裂解液中，与其他抑制剂共同使用。

**为什么**：蛋白酶在裂解瞬间释放并开始作用，后加抑制剂不能完全补救已经发生的降解。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 目标蛋白仍被剪切 | Leupeptin 覆盖范围不足 | 加入 PMSF、Pepstatin A、E-64 或广谱 cocktail |
| 不同批次结果漂移 | 储液冻融或浓度换算错误 | 小分装，记录盐形式和终浓度 |
| 下游酶切效率低 | Leupeptin 残留抑制 protease digestion | 脱盐、换 buffer 或避开该抑制剂 |
| 样本处理后才加 | 降解已经发生 | 裂解前现加 |

## 购买与记录建议

常见供应商包括 [Merck](<../番外/试剂厂商/Merck.md>)/[Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>)、[Roche](<../番外/试剂厂商/Roche.md>)、[Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>)、[碧云天](<../番外/试剂厂商/碧云天.md>) 等。购买时注意是 leupeptin hemisulfate、leupeptin hydrochloride 还是其他形式。

推荐记录模板（中文）：

```text
Leupeptin形式：
品牌：
货号：
批号：
储液浓度：
储液溶剂：
分装日期：
终浓度：
裂解液：
样本类型：
是否与其他抑制剂合用：
异常现象：
```

Recommended record template (English):

```text
Leupeptin form:
Brand:
Catalog number:
Lot number:
Stock concentration:
Stock solvent:
Aliquot date:
Final concentration:
Lysis buffer:
Sample type:
Combined with other inhibitors: yes/no
Abnormal observation:
```

## 小结

Leupeptin 的优势是覆盖半胱氨酸蛋白酶并兼顾部分丝氨酸蛋白酶，是很多 cocktail 的“中间覆盖层”。但它不是全能保护伞，遇到严重降解时要从抑制剂组合、温度和裂解速度一起排查。

## 参考来源

- [Sigma-Aldrich Leupeptin hemisulfate L2884](https://www.sigmaaldrich.com/US/en/product/sigma/l2884)
- [Thermo Fisher Halt Protease Inhibitor Cocktail](https://www.thermofisher.com/order/catalog/product/78429)
- [CST Western Blot Protocol](https://www.cellsignal.com/learn-and-support/protocols/protocol-western)
