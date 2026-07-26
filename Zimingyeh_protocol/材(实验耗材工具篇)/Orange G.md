# Orange G

Orange G（橙黄 G，也常叫 Acid Orange 10）是一种 tracking dye（迁移追踪染料），在核酸 [Loading Dye](<Loading Dye.md>) 中常用于提示小片段附近的迁移前沿。它本身不是 [核酸染料](核酸染料.md)，不能替代 SYBR Safe、GelRed 或 EB 来显示 DNA/RNA 条带。

![Tracking dyes reference](<../z_asset/材/Orange G/tracking-dyes-reference.png>)

图源：Image2 生成的 tracking dyes 示意图；Orange G 迁移最快，常用于提示很小片段是否接近跑出凝胶。

## 核心作用

| 作用 | 解释 |
| --- | --- |
| 快速前沿提示 | Orange G 通常比溴酚蓝和二甲苯青迁移更快 |
| 小片段实验提醒 | 适合提醒引物二聚体、短 PCR 片段或小 DNA 是否接近胶底 |
| 辅助上样观察 | 给样本带颜色，便于判断是否沉入孔内 |

NEB 的 TriDye Ultra Low Range DNA Ladder 页面说明，该 ladder 含有 Orange G、bromophenol blue 和 xylene cyanol FF 三种 tracking dyes；其中 Orange G 大致与较小片段一起迁移，用于帮助判断小片段前沿。参考：[NEB TriDye Ultra Low Range DNA Ladder](https://www.neb.com/en/products/n0558-tridye-ultra-low-range-dna-ladder)。

## 与溴酚蓝和二甲苯青对比

| Tracking dye | 中文名 | 迁移速度 | 常见意义 |
| --- | --- | --- | --- |
| Orange G | 橙黄 G | 最快 | 小片段前沿 |
| Bromophenol blue | 溴酚蓝 | 中等 | 常规前沿 |
| Xylene cyanol FF | 二甲苯青 FF | 较慢 | 中大片段前沿 |

这些迁移位置只能作为近似参考。实际速度受胶浓度、缓冲液、样本盐浓度、电压和 loading dye 配方影响，不能用 tracking dye 代替 [DNA Ladder](<DNA Ladder.md>) 估算条带大小。

## 什么时候特别有用

- 检查 50-200 bp 小片段 PCR。
- 判断 primer dimer（引物二聚体）是否已经接近跑出。
- 做 PAGE 或高浓度琼脂糖胶时观察很快的前沿。
- 需要避免小片段跑丢时，Orange G 比二甲苯青更敏感。

## 注意事项

- Orange G 的颜色可能比较浅，上样量低或胶厚时不如溴酚蓝显眼。
- 小片段实验不能只盯着慢速染料，否则目标可能已经跑出。
- 含 Orange G 的 ready-to-load ladder 或 loading dye 不代表已经完成核酸染色。
- 若后续要做非常低背景成像，应确认 Orange G 不干扰目标检测。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 小片段看不到 | 电泳时间太久，目标随前沿跑出 | 观察 Orange G 前沿，缩短时间 |
| 前沿太快难判断 | 胶浓度低、电压高 | 提高胶浓度或降低电压 |
| 颜色太淡 | dye 浓度低或样本量少 | 换合适 loading dye |
| 把 Orange G 当成 DNA | 概念混淆 | 用核酸染料和 DNA ladder 判断条带 |

## 购买与记录建议

Orange G 常作为商品 loading dye 或 DNA ladder 的组成成分出现。记录时不一定需要单独写 Orange G 批号，但应写清 loading dye 或 ladder 的完整产品名、货号、批号、是否含 Orange G，以及目标片段大小。

## 小结

Orange G 是“小片段提醒灯”。它迁移快，特别适合短片段跑胶时防止目标跑出，但它不提供荧光信号，也不能作为分子量标准。

## 参考来源

- [NEB TriDye Ultra Low Range DNA Ladder](https://www.neb.com/en/products/n0558-tridye-ultra-low-range-dna-ladder)
- [Sigma-Aldrich Nucleic Acid Electrophoresis Protocol](https://www.sigmaaldrich.cn/CN/en/technical-documents/protocol/genomics/nucleic-acid-gel-electrophoresis/nucleic-acid-electrophoresis)
