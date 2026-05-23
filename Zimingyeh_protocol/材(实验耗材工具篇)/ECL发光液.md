# ECL发光液

## 一句话定义

ECL substrate（Enhanced chemiluminescence substrate，增强化学发光底物，中文常叫 ECL 发光液）是 [Western blot](<../用(实验流程内容篇)/Western blot.md>) 中用于 [HRP](辣根过氧化物酶.md)（Horseradish peroxidase，辣根过氧化物酶）标记二抗检测的化学发光试剂。

ECL 的核心逻辑是：HRP 标记的 [二抗](二抗.md) 结合到目标蛋白对应的 [一抗](一抗.md) 后，ECL 发光液中的 [luminol](Luminol.md)（鲁米诺）类底物在 [过氧化氢](过氧化氢.md) 或类似过氧化物和增强剂存在下被 HRP 催化发光，再由 [化学发光成像仪](化学发光成像仪.md) 或 X-ray film（X 光胶片）记录。Thermo Fisher、Cytiva、Bio-Rad 和 CST 都有基于 HRP-ECL 的 WB 检测体系。[参考：Thermo Fisher Western Blot Protocols](https://www.thermofisher.com/uk/en/home/life-science/protein-biology/protein-biology-learning-center/protein-gel-electrophoresis-information/western-blot-protocols.html)；[参考：CST Western Blot Protocol](https://www.cellsignal.com/learn-and-support/protocols/protocol-western)

![Western blot膜、转膜缓冲液、Ponceau S与ECL示意图](<../z_asset/材/Western blot膜和检测/wb-membrane-transfer-detection-reference-zh.png>)

## 它在WB中的位置

ECL 发光液不是“让所有膜都变亮”的试剂，而是 HRP 抗体检测体系的最后一步。前面的转膜、封闭、抗体特异性和洗膜决定了信号是否可信；ECL 只负责把 HRP 所在位置转化为可记录的光信号。

如果转膜失败、抗体不结合或洗膜不足，ECL 可能表现为无信号、高背景、非特异条带或曝光饱和。换更贵的 ECL 只能解决灵敏度问题，不能自动修复前面步骤的错误。

## 核心组分与作用

| 组分 | 英文 | 作用 |
| --- | --- | --- |
| [Luminol](Luminol.md) 类底物 | Luminol-based substrate，鲁米诺类底物 | 被 HRP 催化后产生光信号 |
| [过氧化氢](过氧化氢.md) 或类似过氧化物 | Peroxide | 参与氧化发光反应 |
| 增强剂 | Enhancer | 提高信号强度和持续时间 |
| 缓冲体系 | Buffer system | 维持反应 pH 和稳定性 |

多数 ECL 产品为 A/B 两液体系，使用前等体积混合。混合后有效时间有限，应按说明书及时使用。

## 常见类型

| 类型 | 特点 | 适合场景 |
| --- | --- | --- |
| Standard ECL（标准型 ECL） | 成本较低，灵敏度中等 | 高丰度蛋白、常规内参 |
| High-sensitivity ECL（高灵敏 ECL） | 信号更强，曝光时间更短 | 中低丰度目标蛋白 |
| Femto / ultra-sensitive ECL（超高灵敏 ECL） | 极高灵敏度，容易饱和 | 极低丰度蛋白、珍贵样本 |
| Long-duration ECL（长效 ECL） | 发光持续时间较长 | 需要多次曝光或排队成像 |

高灵敏 ECL 不总是更好。目标蛋白丰度高、抗体很强时，超高灵敏底物可能导致条带过曝、背景升高和定量范围变窄。

## 使用 protocol

### 显色前准备

1. 完成抗体孵育和 [TBST](TBST.md) 洗膜。
2. 准备干净保鲜膜、膜盒或成像托盘。
3. 根据膜面积计算 ECL 用量，保证整张膜被均匀覆盖。
4. 打开成像仪并预设多组曝光时间。

### 加入ECL

1. 按说明书混合 A/B 液，轻轻混匀，避免剧烈起泡。
2. 将膜蛋白面朝上，加入足量 ECL 覆盖膜面。
3. 室温孵育常见为 1-5 min，具体以产品说明书为准。
4. 倒去多余 ECL，避免膜表面液滴造成斑点或反光。
5. 立即成像，建议先短曝光，再逐步延长曝光。

### 成像策略

同一张膜建议保留多个曝光时间：

```text
短曝光：判断强条带是否饱和
中曝光：用于主要定量
长曝光：观察弱信号或低丰度目标
```

用于定量的图像不能饱和。成像仪里显示“白成一片”的条带，即使看起来很漂亮，也通常不能用于可靠定量。

## ECL vs 荧光检测

| 维度 | ECL 化学发光 | Fluorescent Western blot（荧光 WB） |
| --- | --- | --- |
| 抗体 | HRP 标记二抗 | 荧光标记二抗 |
| 设备 | 化学发光成像仪或胶片 | 荧光成像仪 |
| 多重检测 | 有限，常需剥离或切膜 | 更适合多通道检测 |
| 动态范围 | 受底物和曝光影响较大 | 通常更宽 |
| 成本 | 试剂和设备门槛较低 | 抗体和设备要求更高 |
| 常见问题 | 曝光饱和、发光衰减、高背景 | 自发荧光、通道串扰 |

如果实验重点是多个蛋白的准确定量，荧光 WB 可能更适合；如果实验室已有成熟 HRP 抗体体系，ECL 仍然是非常通用和高性价比的选择。

## 注意事项

- ECL 只适用于 HRP 检测体系；[AP](碱性磷酸酶.md)（alkaline phosphatase，碱性磷酸酶）标记二抗需要对应底物。
- A/B 液混合后不要长期放置。
- 避免用手套或镊子污染膜面，局部污染会造成亮点。
- 曝光时保留未饱和图像，尤其是需要定量时。
- 高灵敏 ECL 配合过高二抗浓度，常见结果是整膜背景升高。
- 不同 ECL 产品的灵敏度差异很大，换产品后应重新优化抗体浓度和曝光时间。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 无信号 | 二抗不是 HRP 标记、ECL 失效、抗体漏加、转膜失败 | 检查抗体标签、阳性对照、[Ponceau S](<Ponceau S.md>) 记录 |
| 整膜背景高 | 抗体过浓、封闭不足、洗膜不足、ECL 太灵敏 | 降低抗体浓度，延长洗膜，换标准型 ECL |
| 条带过曝 | 曝光太久、ECL 太灵敏、样本太多 | 缩短曝光，降低上样量或抗体浓度 |
| 信号很快消失 | 长效性不足、成像太慢、膜干燥 | 加 ECL 后及时成像，选择长效底物 |
| 亮点或斑点 | ECL 液滴、膜面污染、粉尘 | 去除多余液体，保持托盘和膜面洁净 |
| 非特异条带多 | 抗体特异性差、二抗过浓、封闭条件不合适 | 优化抗体稀释，换封闭液或抗体 |

## 购买和记录建议

购买 ECL 时不只看“灵敏度最高”。更重要的是目标蛋白丰度、抗体强度、成像设备、是否需要定量、发光持续时间和预算。常规内参或高丰度蛋白用标准型 ECL 往往更可控；低丰度目标再考虑高灵敏或超高灵敏产品。

中文记录模板：

```text
ECL 产品名称：
品牌：
货号：
批号：
类型：
A/B 混合比例：
孵育时间：
膜面积和用量：
成像设备：
曝光时间：
是否有饱和：
一抗/二抗稀释度：
备注：
```

English record template:

```text
ECL product name:
Brand:
Catalog number:
Lot number:
Type:
A/B mixing ratio:
Incubation time:
Membrane area and volume:
Imaging system:
Exposure time:
Saturation: yes / no
Primary / secondary antibody dilution:
Notes:
```

## 小结

ECL 发光液是 HRP-WB 检测的读出步骤。它能提高检测灵敏度，但不能替代正确转膜、合适抗体和充分洗膜。真正可靠的 ECL 结果应该同时满足：有合适曝光、不过曝、有转膜质控、有阳性/阴性对照，并且记录产品批号和成像参数。

## 参考来源

- [Thermo Fisher Western Blot Protocols](https://www.thermofisher.com/uk/en/home/life-science/protein-biology/protein-biology-learning-center/protein-gel-electrophoresis-information/western-blot-protocols.html)
- [CST Western Blot Protocol](https://www.cellsignal.com/learn-and-support/protocols/protocol-western)
- [Bio-Rad Western Blotting Guide](https://www.bio-rad.com/applications-technologies/western-blotting-immunodetection-techniques?ID=PQEEPOBWLN4A)
