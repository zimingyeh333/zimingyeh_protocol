# Trypsin-EDTA

Trypsin-EDTA（胰蛋白酶-EDTA）是贴壁细胞传代和收集时最常用的细胞解离试剂之一。Trypsin（胰蛋白酶）是一种蛋白水解酶，可切割参与细胞贴附的蛋白；EDTA（Ethylenediaminetetraacetic acid，乙二胺四乙酸）通过螯合 Ca2+ 和 Mg2+，削弱细胞-细胞及细胞-基质黏附，从而增强胰酶解离效果。

## 核心用途

| 用途 | 作用 | 注意事项 |
| --- | --- | --- |
| 贴壁细胞传代 | 让细胞从培养表面脱落 | 需要控制时间，避免消化过度 |
| 贴壁细胞收集 | 为流式、计数、冻存或接种制备单细胞悬液 | 下游表面 marker 可能受影响 |
| 细胞团块解离 | 帮助分散部分细胞团 | 太强会降低活率 |
| 原代细胞或敏感细胞解离 | 可用低浓度版本 | 常需更温和替代品 |

Thermo Fisher 的细胞解离页面说明，trypsin 是解离贴壁细胞和单层细胞的标准方式；EDTA 作为螯合剂常用于增强 trypsin 让贴壁细胞脱落的能力。[参考：Thermo Fisher Cell Dissociation and Trypsin](https://www.thermofisher.com/us/en/home/life-science/cell-culture/mammalian-cell-culture/reagents/cell-dissociation.html)

## 常见版本

| 版本 | 适合场景 | 注意事项 |
| --- | --- | --- |
| 0.25% Trypsin-EDTA | 常规贴壁细胞系 | 对敏感细胞可能偏强 |
| 0.05% Trypsin-EDTA | 更温和，常用于部分原代或敏感细胞 | 解离时间可能更长 |
| Trypsin-EDTA with phenol red | 便于观察试剂覆盖和残留 | 酚红可能影响部分检测 |
| Trypsin-EDTA without phenol red | 避免酚红干扰 | 不易凭颜色观察 |
| Trypsin without EDTA | 更温和但解离力弱 | 强贴壁细胞可能不够 |
| EDTA-only | 非酶解离，保护部分表面蛋白 | 解离效率有限 |

ATCC 的动物细胞培养指南指出，许多单层细胞需要 trypsin/EDTA 等蛋白水解酶消化其贴附蛋白键；具体应按细胞类型调整试剂和温度。[参考：ATCC Animal Cell Culture Guide](https://www.atcc.org/resources/culture-guides/animal-cell-culture-guide)

## 工作原理

Trypsin 负责切割蛋白，EDTA 负责螯合 Ca2+ 和 Mg2+。很多细胞黏附分子和细胞连接依赖二价阳离子；EDTA 让这些连接变弱，trypsin 更容易接触并切割目标蛋白。

Thermo Fisher 说明，含 FBS 的培养基会影响 trypsin 功能，因此胰酶消化前需要用不含钙镁的 balanced salt solution（平衡盐溶液）洗去残余血清。[参考：Thermo Fisher Cell Dissociation and Trypsin](https://www.thermofisher.com/us/en/home/life-science/cell-culture/mammalian-cell-culture/reagents/cell-dissociation.html)

## 基本使用 protocol

### 准备

**怎么做**：预温 Trypsin-EDTA、PBS/DPBS 和完全培养基；显微镜下确认细胞汇合度和状态。

**为什么**：温度影响酶活性，细胞状态决定是否适合消化。状态差或污染可疑的细胞不应直接扩增。

**注意事项**：

- 不同细胞对胰酶敏感度不同。
- 不要把 Trypsin-EDTA 长时间放在 37°C。
- 开封后记录日期，避免污染。

**替代方案**：敏感细胞可使用 [TrypLE](TrypLE.md)、[Accutase](Accutase.md) 或 EDTA-only。

**出错后果**：消化不均、活率下降、传代后恢复慢。

### 洗去血清

**怎么做**：吸去旧培养基，用不含钙镁的 PBS/DPBS 轻洗细胞层。

**为什么**：血清含有蛋白和胰酶抑制成分，会降低 Trypsin-EDTA 的解离效果。

**注意事项**：

- 洗涤动作要轻，不要冲掉贴壁弱细胞。
- 洗后不要让细胞干燥。
- 有些极敏感细胞可减少洗涤强度。

**替代方案**：对贴壁弱细胞，可用更少体积和更温和的洗涤方式。

**出错后果**：消化很慢、细胞局部脱落、细胞层损伤。

### 加入 Trypsin-EDTA

**怎么做**：加入刚好覆盖细胞层的 Trypsin-EDTA，轻轻晃动使其均匀覆盖。放回培养箱或室温短时作用，具体按细胞类型和试剂说明。

**为什么**：过多试剂会增加终止难度，过少则覆盖不均。解离需要均匀接触细胞层。

**注意事项**：

- 不要机械等待固定时间，显微镜下看细胞变圆和松动。
- 贴壁弱细胞可能很快脱落。
- 强贴壁细胞可能需要更长时间或更强解离方案。

**替代方案**：先短暂润洗后吸掉，再加少量新胰酶，可减少残余血清影响；强贴壁细胞可考虑更高浓度、EDTA 或其他酶。

**出错后果**：消化不足形成团块；消化过度导致细胞死亡、marker 损伤和贴壁差。

### 终止消化

**怎么做**：当细胞大多变圆并松动后，加入含血清完全培养基终止胰酶，轻柔吹打成单细胞悬液。

**为什么**：继续暴露在 trypsin 中会造成非计划蛋白降解。Thermo Fisher 也说明，有机 trypsin 需要用 trypsin inhibitor（胰酶抑制剂）或含血清体系失活，而 TrypLE 可通过稀释失活。[参考：Thermo Fisher Cell Dissociation and Trypsin](https://www.thermofisher.com/us/en/home/life-science/cell-culture/mammalian-cell-culture/reagents/cell-dissociation.html)

**注意事项**：

- 吹打要足以分散细胞，但不要产生泡沫。
- 无血清培养体系可能需要专门的 trypsin inhibitor。
- 下游流式看表面蛋白时，消化时间要严格控制。

**替代方案**：使用 [胰酶抑制剂](胰酶抑制剂.md)、大豆胰酶抑制剂或专用 neutralizer。

**出错后果**：细胞表面蛋白受损、活率低、复苏慢。

### 计数、接种或冻存

**怎么做**：得到细胞悬液后进行细胞计数，按 [细胞接种](<../用(实验流程内容篇)/细胞接种.md>)、[细胞传代](<../用(实验流程内容篇)/细胞传代.md>) 或细胞冻存需求继续操作。

**为什么**：解离后的细胞处于受扰动状态，后续密度、恢复时间和培养基条件会影响实验结果。

**注意事项**：

- 细胞团块多时计数不可靠。
- 离心不要过猛。
- 关键实验前给细胞足够恢复时间。

**替代方案**：如果只是收 RNA/蛋白，很多情况下可以直接板上裂解，不需要 Trypsin-EDTA 收集。

**出错后果**：接种不均、冻存密度错误、实验输入量不一致。

## Trypsin-EDTA vs TrypLE vs Accutase

| 试剂 | 优点 | 局限 | 适合 |
| --- | --- | --- | --- |
| Trypsin-EDTA | 经典、便宜、效率高 | 动物源，可能损伤表面蛋白 | 常规贴壁细胞系 |
| TrypLE | 重组 trypsin-like enzyme，温和、稳定、动物源风险低 | 成本较高，仍需细胞验证 | 需要替代胰酶、无血清或更温和体系 |
| Accutase | 更温和，常用于干细胞、原代细胞、流式前处理 | 解离速度和效果依细胞而异 | 敏感细胞、表面 marker 保护 |
| EDTA-only | 非酶方式，保护蛋白 | 解离能力弱 | 贴壁弱细胞或特定表面蛋白检测 |
| [细胞刮刀](细胞刮刀.md) | 不依赖酶 | 机械损伤大，单细胞效果差 | 蛋白/RNA 收集或特殊贴壁细胞 |

Thermo Fisher 的比较表指出，TrypLE 试剂是重组、动物源风险更低的 trypsin-like 解离酶，可在许多情况下直接替代 trypsin，并且通过稀释失活。[参考：Thermo Fisher Cell Dissociation and Trypsin](https://www.thermofisher.com/us/en/home/life-science/cell-culture/mammalian-cell-culture/reagents/cell-dissociation.html)

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理策略 |
| --- | --- | --- |
| 细胞不脱落 | 残余血清、试剂失效、温度低、细胞贴壁强 | PBS/DPBS 洗净，检查试剂，延长时间或换方案 |
| 细胞成团 | 消化不足、DNA 黏连、吹打不足 | 优化消化，轻柔吹打，必要时过滤 |
| 消化后大量死亡 | 消化过度、离心过猛、细胞状态差 | 缩短时间，降低离心强度，改用温和试剂 |
| 传代后不贴壁 | 表面蛋白损伤、接种太低、培养表面不适 | 缩短消化，提高密度，使用包被 |
| 流式 marker 下降 | 胰酶切割表面蛋白 | 换 Accutase/EDTA-only，缩短消化 |
| 细胞边缘先脱落中间不脱落 | 试剂覆盖不均或细胞密度不均 | 均匀覆盖，轻轻晃动容器 |
| 胰酶污染 | 反复开盖、非无菌取用 | 分装，严格无菌，污染可疑即丢弃 |

## 购买建议

常规贴壁细胞系可选 0.25% Trypsin-EDTA 或 0.05% Trypsin-EDTA；敏感细胞、原代细胞、干细胞和表面 marker 相关实验要优先考虑更温和的替代方案。常见供应商包括 [Gibco](<../番外/试剂厂商/Gibco.md>)、[ATCC](<../番外/试剂厂商/ATCC.md>)、[Sigma](<../番外/试剂厂商/Sigma.md>)、[Corning](<../番外/试剂厂商/Corning.md>)、[碧云天](<../番外/试剂厂商/碧云天.md>)、[索莱宝](<../番外/试剂厂商/索莱宝.md>)。

购买时重点看：浓度、是否含 EDTA、是否含 phenol red、动物源信息、无菌测试、支原体检测、储存条件和是否适合原代/干细胞。

## 推荐记录模板

中文模板：

```text
试剂：Trypsin-EDTA（胰蛋白酶-EDTA）
品牌：
货号：
批号：
胰酶浓度：
EDTA 浓度：
是否含酚红：
储存条件：
开封日期：
使用细胞：
消化温度：
消化时间：
终止方式：
下游用途：
操作者：
备注：
```

English template:

```text
Reagent: Trypsin-EDTA
Brand:
Catalog number:
Lot number:
Trypsin concentration:
EDTA concentration:
Phenol red: yes / no
Storage condition:
Open date:
Cell type:
Dissociation temperature:
Dissociation time:
Neutralization method:
Downstream use:
Operator:
Notes:
```

## 小结

Trypsin-EDTA 是贴壁细胞培养的经典解离试剂。它的关键不是“加几分钟”，而是根据细胞贴壁强度、表面 marker、下游实验和细胞敏感性控制解离强度。消化不足会导致团块，消化过度会降低活率和改变细胞表面。

## 主要参考来源

- [Thermo Fisher: Cell Dissociation and Trypsin for Cell Culture](https://www.thermofisher.com/us/en/home/life-science/cell-culture/mammalian-cell-culture/reagents/cell-dissociation.html)
- [ATCC Animal Cell Culture Guide](https://www.atcc.org/resources/culture-guides/animal-cell-culture-guide)
- [ATCC Guide to Subculturing Cell Line Monolayers](https://www.atcc.org/resources/technical-documents/guide-to-subculturing-cell-line-monolayers)
- [ATCC Tips for Successful Subculturing: Dissociation Method](https://www.atcc.org/resources/application-notes/tips-for-successful-sub-culturing-dissociation-method)

