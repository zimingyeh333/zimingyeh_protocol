# EThcD

EThcD（electron-transfer/higher-energy collision dissociation，电子转移/高能碰撞组合解离）是一种把 [ETD](ETD.md) 和 [HCD](HCD.md) 组合起来的 MS/MS 碎裂方式。它先通过电子转移产生 c/z 离子，再加入高能碰撞产生更多 b/y 离子和其他碎片，从而获得互补的序列与修饰信息。

![MS/MS 碎裂原理与方法概览](../../z_asset/番外/补充知识/质谱碎裂方式/msms-fragmentation-concepts-zh.png)

图源：Image2 生成的 MS/MS 碎裂方式示意图。图中 HCD 和 ETD 分别展示 b/y、c/z 离子逻辑；EThcD 可以理解为把两类信息组合到同一类谱图解释中。

## 为什么需要 EThcD

单独 HCD/CID 对常规肽段很强，但对某些易碎 PTM（post-translational modification，翻译后修饰）或糖肽，可能出现修饰丢失、定位信息不足。单独 ETD 更保留易碎修饰，但对低电荷、短肽段或某些样本可能碎片覆盖不够。EThcD 的目标是结合二者优势。

Frese 等在 Analytical Chemistry 中提出将 electron-transfer 和 higher-energy collision dissociation 组合，以获得更完整的 peptide sequence coverage（肽段序列覆盖）。参考：[Frese et al., Analytical Chemistry, 2012](https://doi.org/10.1021/ac3025366)

## EThcD 适合什么

| 场景 | 为什么适合 |
| --- | --- |
| 糖肽分析 | 同时保留糖基信息并获得肽段主链碎片 |
| 磷酸化等 PTM 定位 | c/z 与 b/y 信息互补 |
| 长肽段或高电荷肽段 | ETD 成分有优势 |
| 位点定位证据不足 | HCD 与 ETD 可补充缺失区域 |
| 复杂修饰组合 | 多种碎片类型有助于解释 |

## EThcD vs HCD vs ETD

| 方式 | 主要信息 | 优点 | 主要限制 |
| --- | --- | --- | --- |
| HCD | b/y 离子、reporter ion | 常规蛋白组和 TMT 友好 | 易碎修饰可能丢失 |
| ETD | c/z 离子 | 保留某些易碎修饰 | 低电荷肽段效果可能差 |
| EThcD | c/z + b/y 互补 | 覆盖更完整，适合修饰定位 | 方法更复杂，采集速度和数据分析压力更高 |

## 使用 EThcD 的注意事项

- 不是所有样本都需要 EThcD；常规蛋白组学通常 HCD 已经足够。
- EThcD 方法更慢，可能减少单位时间内可采集的谱图数。
- 搜索软件需要支持 EThcD 或正确设置离子类型。
- 对糖肽和 PTM 项目，EThcD 的价值更明显。
- 需要用标准样本或已知修饰样本验证方法表现。

## 常见误解

| 误解 | 更准确的理解 |
| --- | --- |
| EThcD 一定比 HCD 好 | 只在特定修饰/糖肽/长肽段场景更有优势 |
| EThcD 可以解决所有定位问题 | 仍依赖前体选择、碎片覆盖、算法和样本质量 |
| EThcD 数据可以按普通 HCD 搜索 | 需要设置正确碎裂方式和离子类型 |
| 采集 EThcD 不影响通量 | 组合碎裂可能降低采集速度 |

## 小结

EThcD 是 HCD 和 ETD 的组合策略，适合需要更完整碎片覆盖和更可靠修饰定位的质谱项目。它不是常规项目的默认选择，但在糖肽、PTM 位点定位和复杂修饰解析中非常有价值。

## 参考来源

- [Frese et al., Toward full peptide sequence coverage by dual fragmentation combining electron-transfer and higher-energy collision dissociation tandem mass spectrometry, Analytical Chemistry, 2012](https://doi.org/10.1021/ac3025366)
- [Syka et al., Peptide and protein sequence analysis by electron transfer dissociation mass spectrometry, PNAS, 2004](https://doi.org/10.1073/pnas.0402700101)
- [Olsen et al., Higher-energy C-trap dissociation for peptide modification analysis, Nature Methods, 2007](https://doi.org/10.1038/nmeth1060)
