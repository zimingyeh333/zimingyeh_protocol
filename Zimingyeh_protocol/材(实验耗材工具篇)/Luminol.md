# Luminol

## 一句话定义

Luminol（鲁米诺，化学名 5-amino-2,3-dihydro-1,4-phthalazinedione）是一种经典化学发光底物，能在氧化反应中产生光信号，是许多 [ECL发光液](<ECL发光液.md>) 的核心底物逻辑之一。

在 [Western blot](<../用(实验流程内容篇)/Western blot.md>) 中，luminol 类底物被 [辣根过氧化物酶](辣根过氧化物酶.md)（HRP）催化氧化后发光，成像仪记录发光位置，从而显示目标蛋白条带。PubChem 收录了 luminol 的基本化学信息；Thermo Fisher 和 CST 的 WB protocol 则展示了 HRP-ECL 在 WB 检测中的实际使用。[参考：PubChem Luminol](https://pubchem.ncbi.nlm.nih.gov/compound/Luminol)；[参考：Thermo Fisher Western Blot Protocols](https://www.thermofisher.com/uk/en/home/life-science/protein-biology/protein-biology-learning-center/protein-gel-electrophoresis-information/western-blot-protocols.html)

## 在ECL中的作用

Luminol 类 ECL 反应可以简化理解为：

```text
HRP + 过氧化物 + luminol类底物 + 增强剂
→ 氧化反应
→ 发光
→ 成像仪记录条带
```

真正的商业 ECL 发光液通常不是“单纯 luminol 溶液”，还会加入 peroxide（过氧化物）、enhancer（增强剂）、稳定剂和缓冲体系。不同产品之间灵敏度、发光持续时间和背景差异，很多就来自这些配方差异。

## 为什么不建议实验者随意自配ECL

理论上可以用 luminol、过氧化物和增强剂自配化学发光体系，但日常 WB 不推荐把它当作默认方案。

| 问题 | 影响 |
| --- | --- |
| 配方稳定性 | 发光强度和持续时间不稳定 |
| 背景控制 | 自配体系更容易出现整膜背景或斑点 |
| 批间一致性 | 不利于长期项目比较 |
| 安全和废液 | 需要处理氧化剂、有机小分子和碱性体系 |
| 时间成本 | 省下试剂钱，可能花掉大量优化时间 |

因此对一般 WB，推荐使用经过验证的商业 ECL 发光液；只有在教学、方法开发或特殊成本控制场景下，才考虑自配。

## 与ECL产品选择的关系

| ECL 产品类型 | Luminol 相关理解 |
| --- | --- |
| 标准型 ECL | 发光较温和，适合高丰度蛋白 |
| 高灵敏 ECL | 增强体系更强，低丰度信号更容易出现 |
| 超高灵敏 ECL | 容易过曝，尤其是内参和高丰度目标 |
| 长效 ECL | 配方强调发光稳定性，适合多次曝光 |

如果同一张膜用标准 ECL 没有信号，换高灵敏 ECL 可能有帮助；但如果问题来自转膜失败、抗体错误或 HRP 被抑制，换更灵敏的 luminol 体系也救不回来。

## 注意事项

- Luminol 相关商业试剂应按说明书避光、低温或室温保存，不同产品要求不同。
- ECL A/B 液混合后有效时间有限，混好后应及时覆盖膜并成像。
- 不要把 ECL 信号强度直接等同于蛋白量，必须避免曝光饱和。
- 若要比较不同样本表达量，应保留线性范围内的曝光图。
- 处理自配 luminol 或含氧化剂体系时，按 [化学品安全](<../实验室安全/化学品安全.md>) 和 [实验室废弃物处理](<../实验室安全/实验室废弃物处理.md>) 规范操作。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 发光很弱 | ECL 过期、HRP 信号弱、抗体浓度低 | 检查 ECL 批号和阳性对照，优化抗体 |
| 发光太强 | 高灵敏底物配合高丰度目标 | 缩短曝光，降低抗体浓度或换标准 ECL |
| 信号不稳定 | 混合后放置过久、膜局部干燥 | 现混现用，保持膜面均匀覆盖 |
| 背景高 | 增强体系过强、洗膜不足 | 增加 [TBST](TBST.md) 洗膜，降低二抗或换底物 |

## 记录模板

中文模板：

```text
ECL/luminol 体系产品：
品牌：
货号：
批号：
类型：
A/B 混合比例：
混合后等待时间：
膜上孵育时间：
曝光时间：
是否过曝：
备注：
```

English record template:

```text
ECL / luminol-based substrate:
Brand:
Catalog number:
Lot number:
Type:
A/B mixing ratio:
Delay after mixing:
Membrane incubation time:
Exposure time:
Overexposure: yes / no
Notes:
```

## 小结

Luminol 是 ECL 发光体系背后的核心化学逻辑，但 WB 实操中更重要的是选择稳定、适合目标丰度的商业 ECL 产品，并用正确曝光保存未饱和图像。

## 参考来源

- [PubChem Luminol](https://pubchem.ncbi.nlm.nih.gov/compound/Luminol)
- [Thermo Fisher Western Blot Protocols](https://www.thermofisher.com/uk/en/home/life-science/protein-biology/protein-biology-learning-center/protein-gel-electrophoresis-information/western-blot-protocols.html)
- [CST Western Blot Protocol](https://www.cellsignal.com/learn-and-support/protocols/protocol-western)
