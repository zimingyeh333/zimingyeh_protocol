# GelRed

GelRed（GelRed Nucleic Acid Gel Stain，GelRed 核酸凝胶染料）是 [Biotium](<../番外/试剂厂商/Biotium.md>) 推出的红色荧光核酸染料，常用于 [琼脂糖凝胶电泳](<../用(实验流程内容篇)/琼脂糖凝胶电泳.md>) 中替代 [EB](EB.md)（ethidium bromide，溴化乙锭）。它主要用于 DNA/RNA 凝胶条带可视化，通常可在 UV 透射仪和 EtBr 滤光片条件下成像。

![核酸电泳试剂组参考图](../z_asset/材/GelRed/nucleic-acid-gel-reagents-reference.png)

图源：Image2 生成的核酸跑胶试剂组参考图；GelRed 被放在 SYBR Safe 旁边，强调它们都属于常见 EB 替代核酸染料，但成像颜色和光源/滤光片选择不同。

## 核心特点

| 特点 | 实验意义 |
| --- | --- |
| 红色荧光 | 图像风格和 EtBr 接近，便于老系统迁移 |
| 可预染或后染 | 可按实验室流程选择快速或更准确的方式 |
| 可用于 dsDNA、ssDNA 和 RNA | 但对不同核酸类型灵敏度不同 |
| 有 prestain loading buffer 版本 | 可把上样和染色合并 |
| Biotium 定位为 EB 替代物 | 降低突变性和废弃物处理压力 |

Biotium 官方资料说明，GelRed/GelGreen 是 safer ethidium bromide alternatives，并强调可用于 precast 或 post-electrophoresis staining，且兼容 cloning 和 sequencing。参考：[Biotium GelRed and GelGreen DNA Gel Stains](https://biotium.com/technology/nucleic-acid-gel-stains/gelred-gelgreen-dna-gel-stains/)。

## GelRed 与 GelGreen

| 项目 | GelRed | GelGreen |
| --- | --- | --- |
| 荧光颜色 | 红色，类似 EtBr | 绿色，类似 SYBR Safe/SYBR Green |
| 成像系统 | UV + EtBr filter 常见 | UV 或蓝光 + SYBR/green filter |
| 适合替代 | EtBr 体系 | SYBR Safe/绿色蓝光体系 |
| ssDNA/RNA | GelRed 通常更敏感 | 对 dsDNA 适合，绿色系统友好 |

Biotium FAQ 指出 GelRed 和 GelGreen 的主要差异是 excitation/emission wavelength（激发/发射波长）；GelGreen 可用蓝光系统，避免 UV 暴露。参考：[Biotium GelRed and GelGreen FAQ](https://biotium.com/technology/nucleic-acid-gel-stains/gelred-gelgreen-dna-gel-stains/)。

## 使用方式

| 用法 | 优点 | 注意事项 |
| --- | --- | --- |
| 预染胶 | 跑完即可成像，流程快 | 可能影响迁移，尤其是高 DNA 量或某些酶切样本 |
| 后染 | 条带大小判断更准确，背景可控 | 多一步染色，耗时 |
| Prestain loading buffer | 上样和染色一步完成 | 不推荐用于所有体系，需按产品说明 |
| PAGE GelRed | 用于聚丙烯酰胺胶 DNA 染色 | 与普通 GelRed 用途不同 |

Biotium 的选择表中提到，post-electrophoresis staining 往往能获得更准确 sizing 和更锐利条带；DNA prestaining/loading dye 方便但在上样 DNA 量较大时可能引起迁移问题。参考：[Biotium GelRed/GelGreen application guide](https://biotium.com/technology/nucleic-acid-gel-stains/gelred-gelgreen-dna-gel-stains/)。

## GelRed vs SYBR Safe vs EB

| 项目 | GelRed | [SYBR Safe](<SYBR Safe.md>) | EB |
| --- | --- | --- | --- |
| 颜色/滤光片 | 红色，常用 EtBr filter | 绿色，需 SYBR/FITC 类滤光片 | 橙红色，EtBr filter |
| 安全定位 | Biotium 称非突变性、低细胞通透性 | Thermo Fisher 称低危 EtBr 替代物 | 经典但高风险 |
| 设备迁移 | 对已有 EtBr 系统友好 | 对蓝光系统友好 | 老式 UV 系统友好 |
| 下游用途 | 可用于克隆和测序，按说明验证 | 蓝光下对克隆友好 | UV 暴露可能损伤 DNA |

GelRed 常适合“想替代 EB，但暂时仍使用 UV/EtBr 滤光片系统”的实验室；SYBR Safe 更适合“已经有蓝光成像，并且重视胶回收克隆”的流程。

## 注意事项

- 不要把 GelRed、GelGreen 和 SYBR Safe 当成完全一样的“安全染料”互换。
- 预染、后染和 prestain loading buffer 的迁移表现可能不同。
- 使用 EtBr filter 成像时，检查相机曝光是否饱和。
- 高 DNA 量、复杂酶切样本或需要准确 size calling 时，优先考虑后染。
- 虽然厂家强调低危，仍应戴手套、避光、按实验室制度处理。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 条带迁移变慢或大小偏移 | 预染或样本预染影响迁移 | 改为后染，降低上样量 |
| 背景偏高 | 染料浓度过高或染色时间过长 | 优化浓度和后染时间 |
| 蓝光下看不清 | GelRed 主要不是蓝光绿色体系 | 换 GelGreen 或 SYBR Safe |
| 图像过曝 | GelRed 信号强，曝光过长 | 降低曝光/增益 |
| 与 EB 结果不一致 | 染料结合和迁移影响不同 | 同一项目固定染料体系 |

## 购买与记录建议

购买时确认具体形式：10,000x in water、3x in water、prestain loading buffer、PAGE GelRed 或预涂琼脂糖。不同形式不能只写“GelRed”，因为用法和迁移影响不同。

推荐记录字段：

```text
中文：GelRed 版本 / 品牌 / 货号 / 批号 / 预染或后染 / 稀释倍数 / 上样 DNA 量 / 成像光源 / 滤光片 / 曝光参数
English: GelRed format / brand / catalog number / lot number / precast or post-stain / dilution / DNA amount per lane / excitation source / filter / exposure settings
```

## 小结

GelRed 是常见 EB 替代核酸染料，优势在于信号强、与红色/EtBr 成像系统衔接自然，并有多种使用形式。真正使用时要重视染色方式和上样量，因为这些因素会影响迁移和条带大小判断。

## 参考来源

- [Biotium GelRed and GelGreen DNA Gel Stains](https://biotium.com/technology/nucleic-acid-gel-stains/gelred-gelgreen-dna-gel-stains/)
