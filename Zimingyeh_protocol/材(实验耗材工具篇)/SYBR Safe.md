# SYBR Safe

SYBR Safe DNA Gel Stain（SYBR Safe DNA 凝胶染料）是 [Invitrogen](<../番外/试剂厂商/Invitrogen.md>) / Thermo Fisher 推出的核酸凝胶染料，用于在琼脂糖胶或丙烯酰胺胶中可视化 DNA，也可用于 RNA 凝胶染色。它常被用作 [EB](EB.md)（ethidium bromide，溴化乙锭）的低危替代方案，尤其适合需要蓝光成像和后续胶回收克隆的实验。

![核酸电泳试剂组参考图](<../z_asset/材/SYBR Safe/nucleic-acid-gel-reagents-reference.png>)

图源：Image2 生成的核酸跑胶试剂组参考图；SYBR Safe/GelRed 区域强调安全替代染料、蓝光成像和胶回收友好性。

## 核心特点

| 特点 | 实验意义 |
| --- | --- |
| 可用于 DNA 和 RNA 凝胶 | 适合常规核酸电泳可视化 |
| 可用蓝光或 UV 激发 | 蓝光对 DNA 和操作者更友好 |
| 作为 EtBr 低危替代物 | 降低危险化学品和废弃物管理压力 |
| 可预染或后染 | 适配不同实验室 SOP |
| 与常见凝胶成像系统兼容 | 需要匹配滤光片和曝光参数 |

Thermo Fisher 将 SYBR Safe 定位为 highly sensitive dye，可用于 agarose 或 acrylamide gels 中 DNA 可视化，并明确描述为 ethidium bromide 的 less hazardous alternative，可用 blue-light 或 UV excitation 查看。参考：[Thermo Fisher SYBR Safe DNA Gel Stain](https://www.thermofisher.com/us/en/home/life-science/dna-rna-purification-analysis/nucleic-acid-gel-electrophoresis/dna-stains/sybr-safe.html)。

## 使用方式

| 用法 | 操作思路 | 适合 |
| --- | --- | --- |
| 预染胶 | 将 10,000x 浓缩液按说明稀释到胶缓冲液中再配胶 | 跑完直接成像 |
| 后染 | 跑完胶后浸泡在 1x 染液中 | 减少迁移影响，背景更可控 |
| 蓝光成像 | 用蓝光透射仪或蓝光底座观察 | 胶回收、克隆、降低 UV 暴露 |
| UV 成像 | 用 UV 透射仪观察 | 老设备兼容，但应减少暴露 |

Thermo Fisher FAQ 中说明，若使用 10,000x SYBR Safe concentrate，可按 1:10,000 稀释到 TAE 或 TBE 中用于配胶；DNA 可以用蓝光或 UV 查看，但若计划克隆，应避免 UV 暴露。参考：[Thermo Fisher SYBR Safe FAQ](https://www.thermofisher.com/us/en/home/life-science/dna-rna-purification-analysis/nucleic-acid-gel-electrophoresis/dna-stains/sybr-safe.html)。

## SYBR Safe vs EB vs GelRed

| 项目 | SYBR Safe | [EB](EB.md) | [GelRed](GelRed.md) |
| --- | --- | --- | --- |
| 安全定位 | EtBr 低危替代物 | 经典但潜在致突变风险高 | EtBr 替代物，Biotium 强调非突变性和环境友好 |
| 成像 | 蓝光或 UV | UV | 主要 UV + EtBr filter |
| 下游克隆 | 蓝光下更友好 | UV 暴露会损伤 DNA | 可用于克隆/测序，但需看具体用法 |
| 成本 | 通常高于 EB | 便宜 | 通常高于 EB |
| 迁移影响 | 预染时可能有轻微影响 | 预染可降低迁移率 | 预染/预混时需注意迁移影响 |

选择逻辑：如果你的实验室已经有蓝光成像系统，而且经常切胶回收，SYBR Safe 是很自然的选择；如果只有老式 UV GelDoc 和 EtBr 滤光片，GelRed 或 EB 的兼容性可能更直接。

## 注意事项

- SYBR Safe 不是“完全无风险”，仍应戴手套、避光、按说明处理。
- 使用蓝光时通常需要 amber filter（琥珀色滤片）来提高观察效果并保护眼睛。
- 相机滤光片要匹配绿色发射信号；某些 EtBr 深橙/红色滤片可能不适合 SYBR Safe。
- 需要比较条带强度时，固定染料、染色方式、曝光时间和成像设备。
- 后染液不建议反复使用；Thermo Fisher FAQ 说明重复使用会显著降低灵敏度。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 条带发黄/发白、图像洗掉 | 没有合适滤光片或激发光进入相机 | 更换滤光片，调整曝光 |
| 条带很弱 | 染料稀释错误、后染不足、DNA 量低 | 按说明配 1x，延长后染或增加 DNA |
| 背景高 | 染料过量、胶粉/灰尘污染、曝光过长 | 降低曝光，保持制胶洁净 |
| 胶回收克隆效率低 | 使用 UV 暴露过久 | 使用蓝光，缩短观察和切胶时间 |
| 与 EtBr 图像不可比 | 激发/发射和滤光片不同 | 不跨染料直接比较强度 |

## 购买与记录建议

购买时注意是 10,000x concentrate、ready-to-use solution、TAE/TBE 预配液，还是预制胶体系。记录时不要只写“SYBR”，因为 SYBR Safe、SYBR Green、SYBR Gold 和 qPCR 用 SYBR 染料不是同一个实验语境。

推荐记录字段：

```text
中文：SYBR Safe 形式 / 品牌 / 货号 / 批号 / 稀释倍数 / 预染或后染 / 蓝光或 UV / 滤光片 / 曝光参数 / 是否胶回收
English: SYBR Safe format / brand / catalog number / lot number / dilution / precast or post-stain / blue light or UV / filter / exposure settings / gel extraction yes or no
```

## 小结

SYBR Safe 的价值不只是“更安全”，而是把核酸染色和蓝光成像结合起来，降低 UV 对 DNA 和操作者的影响。它特别适合需要切胶回收、克隆和长期规范化记录的核酸电泳流程。

## 参考来源

- [Thermo Fisher SYBR Safe DNA Gel Stain](https://www.thermofisher.com/us/en/home/life-science/dna-rna-purification-analysis/nucleic-acid-gel-electrophoresis/dna-stains/sybr-safe.html)
- [Fisher Scientific SYBR Safe DNA Gel Stain FAQs](https://www.fishersci.com/shop/products/sybr-safe-dna-gel-stain/s33102)
