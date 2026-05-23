# HRP标记二抗

## 一句话定义

HRP-conjugated secondary antibody（HRP 标记二抗，辣根过氧化物酶标记二抗）是连接了 [辣根过氧化物酶](辣根过氧化物酶.md) 的 [二抗](二抗.md)，用于识别 [一抗](一抗.md)，并通过 HRP 底物产生化学发光或显色信号。

在 [Western blot](<../用(实验流程内容篇)/Western blot.md>) 中，HRP 标记二抗最常与 [ECL发光液](<ECL发光液.md>) 配合使用；在 [ELISA](<../用(实验流程内容篇)/ELISA.md>) 中，也常与 [TMB](TMB.md) 等显色底物配合。Thermo Fisher、CST、Bio-Rad 和 Abcam 的 WB protocol 都采用 HRP-secondary antibody + ECL 的常规检测逻辑。[参考：Thermo Fisher Western Blot Protocols](https://www.thermofisher.com/uk/en/home/life-science/protein-biology/protein-biology-learning-center/protein-gel-electrophoresis-information/western-blot-protocols.html)；[参考：CST Western Blot Protocol](https://www.cellsignal.com/learn-and-support/protocols/protocol-western)

## 命名怎么读

例如：

```text
Goat anti-rabbit IgG-HRP
山羊抗兔 IgG-HRP 二抗
```

含义是：

| 字段 | 意义 |
| --- | --- |
| Goat | 二抗由山羊产生 |
| anti-rabbit | 识别兔源一抗 |
| IgG | 识别兔 IgG |
| HRP | 连接辣根过氧化物酶，可用 ECL/TMB 等底物检测 |

最常见错误是把二抗匹配到样本物种，而不是一抗宿主。二抗要匹配的是一抗来源，例如 rabbit primary antibody 配 anti-rabbit secondary antibody。

## 核心用途

- WB 化学发光检测。
- ELISA 显色或发光检测。
- 免疫组化中的 HRP-DAB 显色体系。
- Dot blot 或 slot blot 检测。

HRP 标记二抗的优势是成熟、便宜、灵敏、兼容产品多；局限是容易过曝，动态范围通常不如高质量荧光检测体系。

## HRP二抗 vs 荧光二抗

| 维度 | HRP标记二抗 | [荧光二抗](荧光二抗.md) |
| --- | --- | --- |
| 检测方式 | ECL 化学发光或显色 | 荧光成像 |
| 常见仪器 | 化学发光成像仪、胶片、酶标仪 | 荧光成像仪、荧光显微镜 |
| 多重检测 | 受限，常需切膜或剥离 | 更适合多通道 |
| 动态范围 | 易受曝光和底物影响 | 通常更宽 |
| 成本门槛 | 较低 | 抗体和设备成本较高 |
| 常见问题 | 高背景、过曝、信号衰减 | 串色、自发荧光、避光要求 |

常规 WB 选择 HRP 二抗非常合理；需要多目标定量、避免 stripping 或做荧光显微成像时，荧光二抗更合适。

## 使用 protocol

### WB二抗孵育

1. 一抗孵育结束后，用 [TBST](TBST.md) 洗膜。
2. 用 [抗体稀释液](抗体稀释液.md) 稀释 HRP 标记二抗。
3. 室温轻摇孵育 30-60 min。
4. 用 TBST 洗膜 5-10 min × 3-5 次。
5. 加入 ECL 发光液并用 [化学发光成像仪](化学发光成像仪.md) 成像。

二抗后洗膜通常比一抗后洗膜更影响背景，因为任何残留 HRP 都可能被 ECL 放大为整膜亮背景。

## 稀释比例选择

| 情况 | 调整方向 |
| --- | --- |
| 目标丰度高或内参很强 | 降低二抗浓度，缩短曝光 |
| 低丰度目标 | 可适当提高二抗浓度或换高灵敏 ECL |
| 整膜背景高 | 降低二抗浓度，增加洗膜 |
| 非特异条带多 | 换 cross-adsorbed 二抗，优化一抗 |

常见起始范围可能是 1:2000 到 1:10000，但必须以产品说明书和实验结果为准。

## 注意事项

- HRP 二抗不能与 AP 底物或荧光成像逻辑混用。
- [叠氮钠](叠氮钠.md) 会抑制 HRP，避免在 HRP 反应阶段使用。
- 二抗应避光、低温或按说明书保存，避免反复冻融。
- 记录二抗宿主、识别对象、是否 cross-adsorbed、货号和批号。
- 定量 WB 中不能使用过曝图像，即使条带看起来更清楚。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 无信号 | 二抗不匹配一抗宿主、不是 HRP 标记、ECL 失效 | 检查二抗命名和阳性对照 |
| 整膜高背景 | 二抗过浓、洗膜不足、封闭不合适 | 降低二抗，增加 TBST 洗膜 |
| 条带过曝 | 二抗过浓或 ECL 太灵敏 | 降低二抗、缩短曝光、换标准 ECL |
| 非特异条带多 | 交叉反应或一抗问题 | 使用交叉吸附二抗，优化一抗 |
| 斑点状背景 | 膜面污染、ECL 液滴、二抗聚集 | 离心抗体稀释液，保持膜面洁净 |

## 记录模板

中文模板：

```text
HRP 标记二抗名称：
品牌：
货号：
批号：
二抗宿主：
识别对象：
是否交叉吸附：
稀释比例：
抗体稀释液：
孵育时间和温度：
洗膜条件：
ECL 产品：
曝光时间：
备注：
```

English record template:

```text
HRP-conjugated secondary antibody:
Brand:
Catalog number:
Lot number:
Host species:
Target species / specificity:
Cross-adsorbed: yes / no
Dilution:
Antibody diluent:
Incubation time and temperature:
Wash condition:
ECL product:
Exposure time:
Notes:
```

## 小结

HRP 标记二抗是常规 WB 的核心检测放大试剂。它的关键不是“有没有 HRP”，而是宿主匹配、稀释度、洗膜、ECL 类型和曝光是否共同合适。高背景或过曝时，二抗浓度通常是优先调整项。

## 参考来源

- [Thermo Fisher Western Blot Protocols](https://www.thermofisher.com/uk/en/home/life-science/protein-biology/protein-biology-learning-center/protein-gel-electrophoresis-information/western-blot-protocols.html)
- [CST Western Blot Protocol](https://www.cellsignal.com/learn-and-support/protocols/protocol-western)
- [Abcam Western Blot Protocol](https://www.abcam.com/en-us/technical-resources/protocols/western-blot)
- [Thermo Fisher Secondary Antibody Selection Guide](https://www.thermofisher.com/us/en/home/life-science/antibodies/secondary-antibodies/secondary-antibody-selection-guide.html)
