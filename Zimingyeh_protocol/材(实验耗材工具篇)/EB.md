# EB

EB 在核酸电泳语境中通常指 ethidium bromide（溴化乙锭，也常写 EtBr），是一种经典 [核酸染料](核酸染料.md)。它能插入 DNA/RNA 碱基之间并在 UV 下产生橙红色荧光，长期用于 [琼脂糖凝胶电泳](<../用(实验流程内容篇)/琼脂糖凝胶电泳.md>) 和 PAGE 的核酸条带可视化。

![核酸电泳试剂组参考图](../z_asset/材/EB/nucleic-acid-gel-reagents-reference.png)

图源：Image2 生成的核酸跑胶试剂组参考图；EtBr 区域用 UV 和警示符号强调它是经典但需要严格安全管理的核酸染料。

## 核心特点

| 特点 | 实验意义 |
| --- | --- |
| DNA/RNA intercalator | 作为 [核酸嵌入剂](<../番外/补充知识/核酸嵌入剂.md>) 插入双链核酸后荧光增强 |
| UV 激发、橙红发射 | 与老式 UV transilluminator 和 EtBr filter 兼容 |
| 成本低、历史久 | 很多老 SOP 和设备围绕 EB 建立 |
| 可预染或后染 | 可加入胶中，也可跑完后染 |
| 潜在致突变风险 | 需要严格防护、污染控制和废弃物处理 |

Thermo Fisher 的 Ethidium Bromide 页面说明，EtBr 是 fluorescent dye，用于可视化 gel 中的 DNA/RNA；它作为 DNA intercalator 插入双螺旋碱基之间，UV 吸收峰约 300/520 nm，发射峰约 590 nm，并提醒 EtBr 是 potent mutagen，需要极其谨慎处理。参考：[Thermo Fisher Ethidium Bromide Stain](https://www.thermofisher.cn/cn/en/home/life-science/dna-rna-purification-analysis/nucleic-acid-gel-electrophoresis/dna-stains/etbr.html)。

Sigma-Aldrich 的 ethidium bromide solution 页面也说明，EtBr 是 PAGE 或 agarose gel electrophoresis 中常用核酸染料，结合双链 RNA/DNA 后荧光增强，并且能作为 frameshift mutagen（移码突变原）。参考：[Sigma-Aldrich Ethidium Bromide Solution](https://www.sigmaaldrich.com/PF/en/product/sigma/e1385)。

## 使用方式

| 用法 | 典型逻辑 | 优点 | 局限 |
| --- | --- | --- | --- |
| In-gel staining（胶内预染） | 配胶时加入 EtBr | 跑完即可成像，省时间 | 可降低 DNA 迁移速率，产生 EtBr 废胶 |
| Post-staining（后染） | 跑完后在 EtBr 溶液中染色 | 迁移影响较小 | 多一步，染液和废液需要管理 |
| Running buffer 中加入 | 某些老 SOP 会用 | 信号均一 | 增加污染范围，不推荐随意使用 |

Thermo Fisher FAQ 示例给出 EtBr 常见工作浓度约 0.5 µg/mL，可加入熔化琼脂糖或跑后染色；同时说明加入胶中可能降低核酸迁移速率。参考：[Invitrogen UltraPure Ethidium Bromide](https://www.thermofisher.com/order/catalog/product/15585011?ICID=cvc-dna-stains-c1b1)。

## EB vs SYBR Safe / GelRed

| 项目 | EB | [SYBR Safe](<SYBR Safe.md>) | [GelRed](GelRed.md) |
| --- | --- | --- | --- |
| 主要优势 | 便宜、经典、设备兼容广 | 蓝光友好、低危替代 | 红色信号强，适合 EtBr 系统替代 |
| 安全压力 | 高，需要危险品管理 | 低于 EB，但仍需防护 | 低于 EB，但仍需防护 |
| 下游克隆 | UV 暴露可能损伤 DNA | 蓝光条件更友好 | 可用于克隆/测序，按说明验证 |
| 废弃物 | 废胶/废液需专门处理 | 管理压力较小 | 厂家声称处理更简单，按机构规定执行 |

如果实验室刚建立 SOP，通常不建议把 EB 作为默认首选；除非已有成熟 UV 成像系统、废弃物制度和成本压力，否则更推荐从 SYBR Safe、GelRed/[GelGreen](GelGreen.md) 等替代方案开始。

## 安全注意事项

- 戴实验服、一次性手套和护目镜；接触 EB 后不要触摸门把手、键盘、冰箱把手和显微镜。
- EB 原液、染色盒、废胶、废液和污染枪头要按实验室制度单独处理。
- UV 成像会带来眼睛/皮肤损伤风险，需使用防护屏或护目镜；相关背景见 [紫外成像](<../番外/补充知识/紫外成像.md>) 和 [光毒性](<../番外/补充知识/光毒性.md>)。
- 不要用含 EB 的胶反复微波加热。
- 如果发生污染或泼洒，按机构 SDS 和 EHS 流程处理，不要凭经验随意擦拭后继续使用。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 背景很高 | EtBr 过量或后染时间太长 | 降低浓度，脱色或缩短染色 |
| 条带迁移偏慢 | 胶内预染影响迁移 | 改为后染或统一体系 |
| 胶回收效率低 | UV 暴露造成 DNA 损伤 | 缩短 UV，改用蓝光染料 |
| 污染范围扩大 | 在 buffer 槽、微波炉、桌面扩散 | 固定专用区域和容器 |
| 和安全染料结果不同 | 染料灵敏度和滤光片不同 | 不跨染料直接比较强度 |

## 购买与记录建议

如果使用 EB，优先购买低暴露风险的 ready-to-use 溶液或滴加设计，而不是粉末；记录浓度、品牌、货号、批号、开封日期和废弃物处理方式。常见供应商包括 [Invitrogen](<../番外/试剂厂商/Invitrogen.md>)、[Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>)、[Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>) 等。

推荐记录字段：

```text
中文：EtBr 浓度 / 品牌 / 货号 / 批号 / 胶内预染或后染 / 成像 UV 波长 / 曝光时间 / 废液处理 / 污染事件
English: EtBr concentration / brand / catalog number / lot number / in-gel or post-stain / UV wavelength / exposure time / waste handling / contamination event
```

## 小结

EB 是经典核酸染料，但它的“便宜和好用”伴随明确的安全和废弃物成本。现在写 protocol 时应把 EB 作为需要理由和管理制度的选项，而不是默认答案。

## 参考来源

- [Thermo Fisher Ethidium Bromide Stain](https://www.thermofisher.cn/cn/en/home/life-science/dna-rna-purification-analysis/nucleic-acid-gel-electrophoresis/dna-stains/etbr.html)
- [Invitrogen UltraPure Ethidium Bromide](https://www.thermofisher.com/order/catalog/product/15585011?ICID=cvc-dna-stains-c1b1)
- [Sigma-Aldrich Ethidium Bromide Solution](https://www.sigmaaldrich.com/PF/en/product/sigma/e1385)
