# GelGreen

GelGreen（GelGreen Nucleic Acid Gel Stain，GelGreen 核酸凝胶染料）是 [Biotium](<../番外/试剂厂商/Biotium.md>) 推出的绿色荧光核酸凝胶染料，常用于 [琼脂糖凝胶电泳](<../用(实验流程内容篇)/琼脂糖凝胶电泳.md>) 中可视化 DNA/RNA 条带。它和 [GelRed](GelRed.md) 属于同一类常见 [EB](EB.md) 替代染料，但 GelGreen 更常和 [蓝光成像](<../番外/补充知识/蓝光成像.md>)、绿色荧光滤光片和胶回收场景一起考虑。

![核酸电泳试剂组参考图](../z_asset/材/GelGreen/nucleic-acid-gel-reagents-reference.png)

图源：Image2 生成的核酸跑胶试剂组参考图；GelGreen 与 SYBR Safe 同属蓝光/绿色荧光体系，而 GelRed 更接近 EtBr-like 红色成像体系。

## 核心特点

| 特点 | 实验意义 |
| --- | --- |
| 绿色荧光 | 需要匹配绿色通道或合适滤光片 |
| 蓝光兼容 | 胶回收和克隆前更友好 |
| EB 替代物 | 用于降低传统 EtBr 安全和废弃物压力 |
| 可预染或后染 | 可根据准确 sizing 或速度需求选择 |
| 可用于 DNA/RNA | 具体灵敏度和用法以产品说明书为准 |

Biotium 官方资料将 GelRed/GelGreen 定位为 safer ethidium bromide alternatives，并说明可用于 precast gel staining 或 post-electrophoresis staining。参考：[Biotium GelRed and GelGreen DNA Gel Stains](https://biotium.com/technology/nucleic-acid-gel-stains/gelred-gelgreen-dna-gel-stains/)。

## GelGreen vs GelRed vs SYBR Safe

| 项目 | GelGreen | GelRed | [SYBR Safe](<SYBR Safe.md>) |
| --- | --- | --- | --- |
| 主要颜色 | 绿色荧光 | 红色荧光 | 绿色荧光 |
| 常见光源 | 蓝光或 UV | UV 更常见 | 蓝光或 UV |
| 滤光片 | 绿色/SYBR 类滤片 | EtBr 类滤片 | 绿色/SYBR 类滤片 |
| 适合场景 | 蓝光成像、胶回收 | 从 EtBr/UV 系统迁移 | Thermo/Invitrogen 生态、蓝光胶回收 |
| 迁移影响 | 预染和样本预染需验证 | 预染和样本预染需验证 | 预染需验证 |

Biotium FAQ 指出 GelRed 与 GelGreen 的主要差异是 excitation/emission wavelength（激发/发射波长）；GelGreen 可用蓝光系统，避免 UV 暴露。参考：[Biotium GelRed and GelGreen FAQ](https://biotium.com/technology/nucleic-acid-gel-stains/gelred-gelgreen-dna-gel-stains/)。

## 使用方式

| 用法 | 优点 | 注意事项 |
| --- | --- | --- |
| 胶内预染 | 跑完即可成像 | 可能影响迁移和大小判断 |
| 跑后染色 | sizing 更稳，背景可控 | 多一步染色，耗时 |
| 蓝光成像 | 减少 DNA 损伤 | 需要蓝光台和 amber/green filter |
| UV 成像 | 可兼容部分老设备 | 胶回收前应尽量避免或缩短 UV 暴露 |

如果要切胶回收目标 DNA 用于克隆、连接或测序，GelGreen 的优势主要来自“绿色染料 + 蓝光成像”的组合，而不只是染料名字本身。

## 注意事项

- 不要把 GelGreen、GelRed 和 SYBR Safe 当成完全相同的“安全染料”互换。
- 预染胶、后染和 prestain loading buffer 对迁移影响不同。
- 绿色染料需要匹配成像系统滤光片；EtBr 滤光片未必适合。
- 做条带强度比较时，固定染料、成像光源、滤光片和曝光参数。
- 虽然厂家强调更安全，仍需戴手套、避光和按实验室制度处理废液/废胶。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 条带看不清 | 滤光片不匹配、染料浓度不合适、DNA 量低 | 检查成像系统和染料稀释 |
| 条带大小偏移 | 预染或样本预染影响迁移 | 改为后染或统一条件 |
| 背景高 | 染料过量、后染过久、胶污染 | 降低染料或缩短染色 |
| 胶回收效率低 | 仍然用了长时间 UV | 改用蓝光并缩短暴露 |
| 与 GelRed 图不可比 | 光谱和滤光片不同 | 不跨染料直接比较条带强度 |

## 购买与记录建议

购买时确认具体版本，例如 10,000x in water、3x in water、prestain loading buffer 或其他专用形式。记录时不要只写“GelGreen”，而要写完整产品名、货号、批号、稀释倍数、预染/后染方式、成像光源和滤光片。

推荐记录字段：

```text
中文：GelGreen 版本 / 品牌 / 货号 / 批号 / 稀释倍数 / 预染或后染 / 光源 / 滤光片 / 曝光参数 / 是否胶回收
English: GelGreen format / brand / catalog number / lot number / dilution / precast or post-stain / excitation source / filter / exposure settings / gel extraction yes or no
```

## 小结

GelGreen 是偏蓝光和绿色荧光体系的核酸凝胶染料。它特别适合希望替代 EB、减少 UV 暴露并保留胶回收友好性的流程；真正使用时要把染料、滤光片、光源和染色方式一起记录。

## 参考来源

- [Biotium GelRed and GelGreen DNA Gel Stains](https://biotium.com/technology/nucleic-acid-gel-stains/gelred-gelgreen-dna-gel-stains/)
