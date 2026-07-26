# Annexin V-PI染色

Annexin V-PI staining（Annexin V-PI 染色）是一种常用于 [流式细胞术](流式细胞术.md) 或荧光成像的细胞死亡阶段分析方法。它利用 Annexin V（膜联蛋白 V）识别细胞凋亡早期外翻到细胞膜外侧的 [phosphatidylserine](../番外/补充知识/磷脂酰丝氨酸.md)（PS，磷脂酰丝氨酸），同时用 [PI](<../材(实验耗材工具篇)/PI.md>)（propidium iodide，碘化丙啶）标记细胞膜完整性受损的细胞，从而区分活细胞、早期凋亡细胞、晚期凋亡/继发性坏死细胞和坏死样死亡细胞。

一句话理解：Annexin V-PI 不是单纯问“死了多少”，而是问“细胞膜外侧有没有 PS 暴露，以及细胞膜是否已经破到 PI 能进去”。

![Annexin V-PI染色原理与流程](<../z_asset/用/Annexin V-PI染色/annexin-v-pi-summary-zh.png>)

图：Annexin V-PI 染色的核心逻辑。活细胞通常 Annexin V 阴性、PI 阴性；早期凋亡细胞 PS 外翻但膜仍完整，Annexin V 阳性、PI 阴性；晚期凋亡或膜破损细胞 PI 可进入细胞核。图源：Image2 生成。

## 方法历史与背景

Annexin V 检测凋亡的经典基础来自 Vermes 等人在 1995 年提出的 flow cytometric detection of phosphatidylserine expression（通过流式细胞术检测磷脂酰丝氨酸暴露）。该研究指出，早期 [apoptosis](../番外/补充知识/凋亡.md)（凋亡）过程中 PS 会从质膜内侧转位到外侧，而 Annexin V 是 calcium-dependent phospholipid-binding protein（钙依赖性磷脂结合蛋白），可作为 PS 暴露的敏感探针。参考：[Vermes et al., Journal of Immunological Methods, 1995](https://pubmed.ncbi.nlm.nih.gov/7622868/)。

后来，Annexin V 与 PI、7-AAD 或 SYTOX 等膜不通透核酸染料组合，成为细胞死亡分析中非常常用的双参数方法。Thermo Fisher 对 Annexin V staining 的说明也强调，正常健康细胞中 PS 位于质膜内侧，而凋亡时 PS 会转位到细胞外侧；同时，Annexin V 染色依赖含 Ca2+ 的 binding buffer，并且需要联合膜不通透染料减少假阳性解释。参考：[Thermo Fisher Annexin V Staining](https://www.thermofisher.com/us/en/home/life-science/cell-analysis/cell-viability-and-regulation/apoptosis/annexin-v-staining.html)。

## 应用场景

| 场景 | 适合程度 | 主要价值 |
| --- | --- | --- |
| 药物诱导凋亡检测 | 很适合 | 区分早期凋亡和膜破损死亡阶段 |
| [细胞毒性检测](细胞毒性检测.md) 的机制补充 | 很适合 | 弥补 CCK-8/ATP 只反映活性或能量状态的不足 |
| 转染、病毒、基因编辑后毒性评估 | 适合 | 判断处理是否造成非特异死亡 |
| 免疫细胞杀伤或共培养后死亡分析 | 适合，但需分群 | 需要先区分靶细胞与效应细胞 |
| 贴壁细胞药物处理 | 适合，但操作敏感 | 必须同时收集漂浮细胞和贴壁细胞 |
| 组织样本或复杂原代样本 | 可用但需优化 | 解离损伤、碎片和自发死亡会显著影响结果 |
| 固定后样本回顾分析 | 不优先 | Annexin V 通常要求活细胞/未固定细胞染色，固定条件很受限 |

如果只想快速知道处理是否降低短期活性，[CCK-8实验](CCK-8实验.md)、[ATP细胞活性检测](ATP细胞活性检测.md) 或 [MTT实验](MTT实验.md) 更简单；如果想知道细胞膜是否破裂，[LDH释放实验](LDH释放实验.md) 更直接；如果想证明 DNA fragmentation（DNA 片段化），可考虑 [TUNEL](TUNEL.md)；如果要验证凋亡执行通路，可结合 [Caspase活性检测](Caspase活性检测.md)、cleaved caspase-3 或 PARP cleavage。

## 实验目的

Annexin V-PI 染色常用于：

- 评估处理是否诱导细胞凋亡；
- 区分 early apoptosis（早期凋亡）和 late apoptosis / secondary necrosis（晚期凋亡 / 继发性坏死）；
- 解释细胞活性下降是更偏向凋亡、膜损伤还是非死亡性代谢抑制；
- 为 [Western blot](<Western blot.md>)、[免疫荧光](免疫荧光.md)、LDH、TUNEL 或 [线粒体膜电位检测](线粒体膜电位检测.md) 提供死亡机制证据；
- 选择后续机制实验的处理浓度和时间点；
- 比较不同细胞系、基因操作或药物组合的死亡模式差异。

## 简要实验原理

### Annexin V 识别 PS 外翻

健康细胞的 PS 主要位于 plasma membrane（质膜）内侧。凋亡早期，膜结构发生改变，PS 暴露到细胞外侧。Annexin V 对 PS 具有高亲和力，但这种结合依赖 Ca2+，所以必须使用 [Annexin V Binding Buffer](<../材(实验耗材工具篇)/Annexin V Binding Buffer.md>)（Annexin V 结合缓冲液）或试剂盒提供的等效含钙缓冲液。含 EDTA（ethylenediaminetetraacetic acid，乙二胺四乙酸）的缓冲体系会螯合 Ca2+，可能削弱 Annexin V-PS 结合。

### PI 标记膜完整性丧失

PI 是 membrane-impermeant nucleic acid dye（膜不通透核酸染料）。在膜完整的活细胞或早期凋亡细胞中，PI 通常不能进入细胞；当细胞膜受损时，PI 进入细胞并与 DNA/RNA 结合，产生红色荧光。PI 常用 488 nm 激发，发射在红色通道附近，但具体检测通道要按仪器滤光片设置。

### 四象限解释

| Annexin V | PI | 常见解释 | 解释边界 |
| --- | --- | --- | --- |
| 阴性 | 阴性 | 活细胞或未进入可检测死亡阶段 | 不代表细胞绝对健康，可能已有应激或代谢下降 |
| 阳性 | 阴性 | 早期凋亡倾向 | PS 外翻并非 100% 特异于凋亡，需要结合时间点和对照 |
| 阳性 | 阳性 | 晚期凋亡、继发性坏死或膜破损死亡 | 不能单独区分晚期凋亡和原发坏死 |
| 阴性 | 阳性 | 坏死样死亡、机械损伤、碎片或染色/门控问题 | 常需要形态、FSC/SSC 和重复实验判断 |

Thermo Fisher 特别提醒：膜受损细胞中 Annexin V 也可能进入细胞内部并结合内侧 PS，因此 Annexin V/PI 双阳性并不一定能可靠地单独定义为凋亡，只能说明已经进入膜完整性受损阶段。参考：[Thermo Fisher Annexin V Staining](https://www.thermofisher.com/us/en/home/life-science/cell-analysis/cell-viability-and-regulation/apoptosis/annexin-v-staining.html)。

## Annexin V-PI vs LDH/Live-Dead/TUNEL/Caspase

| 方法 | 核心读数 | 优点 | 局限 | 什么时候优先选 |
| --- | --- | --- | --- | --- |
| Annexin V-PI | PS 外翻 + 膜完整性 | 能区分早期凋亡和膜破损阶段 | 对操作损伤和门控敏感 | 想看死亡阶段分布 |
| [LDH释放实验](LDH释放实验.md) | 上清 LDH | 直接反映膜破裂/泄漏 | 对早期凋亡不敏感 | 想看膜损伤毒性 |
| [Live-Dead染色](Live-Dead染色.md) | 活死染料或酯酶活性 | 可成像、直观 | 通常不能细分凋亡阶段 | 想快速看活死比例和形态 |
| [TUNEL](TUNEL.md) | DNA 断裂 | 更接近凋亡后期 DNA fragmentation | 不是早期事件，可能受 DNA 损伤干扰 | 想验证 DNA 片段化 |
| [Caspase活性检测](Caspase活性检测.md) | caspase 激活 | 更接近凋亡执行通路 | 不覆盖所有细胞死亡类型 | 想证明 caspase-dependent apoptosis |
| [线粒体膜电位检测](线粒体膜电位检测.md) | mitochondrial membrane potential（线粒体膜电位） | 可提示线粒体通路 | 染料和代谢状态影响大 | 想看线粒体通路早期变化 |

一句话：Annexin V-PI 很适合回答“细胞处于哪个死亡阶段”，但不应该单独承担“证明凋亡机制”的全部证据。

## 实验所需试剂、耗材和设备

| 类别 | 内容 | 作用 |
| --- | --- | --- |
| 细胞样本 | 处理后贴壁细胞、悬浮细胞、原代细胞或共培养细胞 | 分析对象 |
| 洗涤液 | [PBS](<../材(实验耗材工具篇)/PBS.md>)、[DPBS](<../材(实验耗材工具篇)/DPBS.md>) 或 [Cell Staining Buffer](<../材(实验耗材工具篇)/Cell Staining Buffer.md>) | 去除培养基和血清背景 |
| Annexin V 试剂 | [Annexin V](<../材(实验耗材工具篇)/Annexin V.md>)-FITC、Annexin V-APC、Annexin V-PE 等 | 标记 PS 外翻 |
| 死细胞染料 | PI 或 [7-AAD](<../材(实验耗材工具篇)/7-AAD.md>) | 判断膜完整性 |
| 结合缓冲液 | Annexin V Binding Buffer | 提供 Ca2+，保证 Annexin V 与 PS 结合 |
| 解离试剂 | [EDTA-free胰蛋白酶](<../材(实验耗材工具篇)/EDTA-free胰蛋白酶.md>) 或温和解离液 | 收集贴壁细胞时减少 Ca2+ 螯合和膜损伤 |
| 过滤耗材 | [细胞筛网](<../材(实验耗材工具篇)/细胞筛网.md>) | 去除团块，降低堵管和假事件 |
| 上机耗材 | [流式管](<../材(实验耗材工具篇)/流式管.md>) 或流式上样板 | 样本上机 |
| 设备 | 流式细胞仪、离心机、移液枪、避光盒 | 染色和数据采集 |
| 分析软件 | FlowJo、FCS Express、Cytobank 或仪器软件 | 门控、补偿和统计 |

BioLegend 的 Annexin V kit 说明中常见流程是：将细胞重悬在 Annexin V Binding Buffer 中，取 100 µL 细胞悬液，加入 5 µL 荧光标记 Annexin V，可加入 PI、7-AAD 等 viability dye，室温避光孵育 15 min，再补加 binding buffer 后上机分析。参考：[BioLegend APC Annexin V Apoptosis Detection Kit with PI](https://www.biolegend.com/nl-nl/products/apc-annexin-v-apoptosis-detection-kit-with-pi-9788?GroupID=BLG6046)。

## 实验设计

### 选择时间点和处理强度

**怎么做**：根据药物或处理机制设置多个时间点。常见药物诱导凋亡可先尝试 6 h、12 h、24 h、48 h；细胞毒性较慢的处理可延长到 72 h。浓度最好参考 CCK-8、ATP 或预实验结果，选择低、中、高剂量。

**为什么重要**：Annexin V-PI 是动态读数。早期凋亡可能短暂出现，随后转为双阳性或碎片化。如果只看一个时间点，可能把“已经错过早期窗口”的样本误判为没有凋亡。

**注意事项**：处理太强会让大部分细胞直接进入双阳性或碎片区域，反而难以看早期凋亡；处理太弱则可能只有轻微变化。

**替代方案**：如果目标是找机制实验条件，可先用 CCK-8/ATP 做浓度范围，再用 Annexin V-PI 做关键浓度和时间点。

### 设计对照

| 对照 | 作用 | 不设置的后果 |
| --- | --- | --- |
| Unstained control（未染对照） | 确定自发荧光和阴性区域 | 无法判断背景 |
| Annexin V only（Annexin V 单染） | 做 [流式补偿](../番外/补充知识/流式补偿.md) 和阳性门参考 | FITC/PE/APC 溢出影响 PI 通道 |
| PI only（PI 单染） | 做补偿和死细胞门参考 | PI 溢出或背景无法扣除 |
| Vehicle control（溶剂对照） | 排除溶剂毒性 | 药物效应与溶剂效应混淆 |
| Positive apoptosis control（凋亡阳性对照） | 证明体系能检测到凋亡 | 阴性结果难以解释 |
| Viability/death positive control（死细胞阳性对照） | 确认 PI 通道和膜破损门 | PI 染色失败不易发现 |
| [FMO对照](<../番外/补充知识/FMO对照.md>) | 多色流式时辅助设门 | 多色面板中假阳性增加 |

阳性诱导可选 staurosporine、camptothecin、etoposide、UV 或热刺激等，但必须根据细胞类型和实验目的优化。阳性对照不是论文结论本身，而是证明 staining 和 gating 体系工作正常。

## 实验操作

### 收集全部细胞

**怎么做**：悬浮细胞直接收集培养液中的全部细胞。贴壁细胞需要同时收集培养上清中的漂浮细胞和贴壁细胞；先把上清保留，再用温和方式解离贴壁细胞，最后合并。

**为什么重要**：凋亡或死亡细胞常会变圆、脱落、漂浮。如果只收集贴壁细胞，最容易把死亡细胞丢掉，导致凋亡比例被严重低估。

**注意事项**：贴壁细胞尽量避免强烈吹打和长时间胰酶消化。若使用 trypsin-EDTA，EDTA 可能影响后续 Ca2+ 依赖的 Annexin V 结合，因此更推荐 EDTA-free trypsin 或非酶解离液，并在染色前充分换到 binding buffer。

**替代方案**：对特别容易脱落或膜脆弱的细胞，可用 accutase、cell dissociation buffer 或刮取法，但刮取可能增加机械损伤，需要预实验比较。

**可能出错的结果**：未处理对照 PI 阳性很高，可能来自收集过程过粗暴、离心过强、消化时间过长或细胞状态本身不好。

### 洗涤并重悬于 Binding Buffer

**怎么做**：用冷 PBS 或细胞染色缓冲液轻柔洗涤细胞，低速离心后弃上清，再重悬于 1× Annexin V Binding Buffer。常见目标浓度可参考 0.25-1.0 × 10^7 cells/mL，或按试剂盒说明调整。

**为什么重要**：Annexin V 与 PS 结合需要 Ca2+。普通 PBS 不一定含 Ca2+，而 EDTA、过多血清、残留培养基或不合适缓冲液都可能影响染色表现。

**注意事项**：不要用含固定剂或去污剂的缓冲液做常规 Annexin V-PI 染色。Thermo Fisher 说明中也强调 Annexin V 染色通常用于活细胞/组织，若染后固定，需要避免酒精固定、保留 Ca2+ 并避免表面活性剂。参考：[Thermo Fisher Annexin V Staining](https://www.thermofisher.com/us/en/home/life-science/cell-analysis/cell-viability-and-regulation/apoptosis/annexin-v-staining.html)。

**替代方案**：如果后续还要做表面 marker 多色流式，可先优化表面抗体染色和 Annexin V 染色顺序；一些指南建议全程保持 Annexin V binding buffer 条件，具体按抗体和试剂盒说明确认。

**可能出错的结果**：Annexin V 阳性整体偏低，常见原因是 binding buffer 配错、Ca2+ 不足、样本残留 EDTA 或试剂失效。

### Annexin V 和 PI 避光染色

**怎么做**：常见操作是取 100 µL 细胞悬液，加入 5 µL 荧光标记 Annexin V，再加入 PI 或 7-AAD，轻柔混匀，室温避光孵育约 15 min。孵育后加入 300-400 µL binding buffer，并尽快上机。具体体积以所用试剂盒说明书为准。

**为什么重要**：染色时间和细胞浓度决定信噪比。时间太短信号不足，时间太长可能增加非特异结合或细胞状态变化。

**注意事项**：PI 有潜在毒性和致突变风险，操作时戴手套并按实验室化学品/生物样本废弃物规范处理。所有荧光染料都要避光，尤其是染色后等待上机期间。

**替代方案**：如果 Annexin V-FITC 与已有 GFP 信号冲突，可选 Annexin V-APC、Annexin V-PE 或其他通道；如果 PI 与多色面板冲突，可改用 7-AAD、DRAQ7、SYTOX 或 fixable viability dye，但解释和通道设置要相应调整。

**可能出错的结果**：所有样本双阳性偏高，可能是操作损伤、染色时间过长、样本放置过久或细胞本身已大量死亡。

### 流式上机与门控

**怎么做**：上机前轻柔混匀并过滤明显团块。先用 FSC/SSC 排除碎片，再用 singlet gate（单细胞门）排除 doublets（双细胞/聚团），再在目标细胞群中分析 Annexin V 与 PI 双参数图。每个样本尽量采集足够事件数，常见至少 10,000 个目标细胞事件，复杂样本需要更多。

**为什么重要**：Annexin V-PI 的结果不是机器自动给出的真相，而是依赖 [门控策略](../番外/补充知识/门控策略.md)。碎片、细胞团、死细胞碎核和补偿错误都会改变四象限比例。

**注意事项**：补偿必须用单染对照或补偿珠完成。不能直接用未处理样本设所有门，因为药物处理会改变自发荧光、细胞大小和散射特性。

**替代方案**：如果没有流式细胞仪，可用荧光显微镜观察 Annexin V/PI 染色，但定量能力和分群能力明显弱于流式。

**可能出错的结果**：早期凋亡比例异常高但 PI 几乎没有变化，可能是真实早期凋亡，也可能是 Annexin V 阈值设得太低、补偿错误或样本自发荧光改变。

### 数据导出与统计

**怎么做**：记录每个样本的 live、early apoptotic、late apoptotic/necrotic、PI-only population 比例。导出 FCS 文件、门控图、补偿矩阵、事件数和统计表。

**为什么重要**：只汇报 total apoptosis（总凋亡比例）会丢失阶段信息。早期和晚期比例的变化，常比一个总数更有解释力。

**注意事项**：不同批次实验要使用一致门控逻辑，但不能机械复制门线。若细胞大小或背景变化明显，应结合对照重新检查门控。

**替代方案**：若想减少主观门控，可在 FlowJo 模板基础上保留统一流程，并导出原始 FCS 供复核。

**可能出错的结果**：重复实验趋势不一致，常来自细胞状态、处理时间点、收集漂浮细胞比例、染色等待时间和仪器设置差异。

## 结果解析

### 常见统计方式

```text
Viable cells (%) = Annexin V- / PI- population
Early apoptosis (%) = Annexin V+ / PI- population
Late apoptosis or membrane-compromised death (%) = Annexin V+ / PI+ population
PI-only death or damage (%) = Annexin V- / PI+ population
Total Annexin V-positive (%) = Annexin V+ / PI- + Annexin V+ / PI+
```

写论文或记录时，建议同时报告早期凋亡、晚期凋亡/膜破损死亡和总 Annexin V 阳性比例，而不是只写“apoptosis rate increased”。如果 PI-only 群体明显增加，需要单独解释是否可能为坏死、机械损伤、强毒性或门控问题。

### 时间动态比单点更重要

典型药物诱导凋亡可能出现：

```text
早期：Annexin V+/PI- 增加
中后期：Annexin V+/PI+ 增加
强毒性或晚期：碎片、PI+、双阳性进一步增加
```

如果 24 h 时双阳性很高，而 6 h 或 12 h 早期凋亡明显升高，这更支持“凋亡进程推进”；如果所有时间点都主要是 PI-only 或碎片增加，则要考虑坏死样损伤、物理损伤或处理过强。

### 与其他实验交叉解释

| 组合结果 | 可能解释 |
| --- | --- |
| CCK-8 下降，Annexin V-PI 变化小 | 代谢下降、增殖抑制或检测时间点不合适 |
| Annexin V+/PI- 增加，LDH 不高 | 早期凋亡，膜仍相对完整 |
| LDH 高，Annexin V/PI 双阳性高 | 膜破裂明显，可能晚期凋亡或坏死 |
| Cleaved caspase-3/PARP 增加，Annexin V+ 增加 | 更支持 caspase-dependent apoptosis |
| TUNEL 阳性增加但 Annexin V 早期群不明显 | 可能检测到更晚期 DNA 片段化，或时间点错开 |

## 异常结果与 troubleshooting

| 异常现象 | 可能原因 | 处理策略 |
| --- | --- | --- |
| 阴性对照死亡率高 | 细胞状态差、传代过久、污染、收集太粗暴 | 先换健康细胞，优化收集和离心条件 |
| Annexin V 信号很弱 | binding buffer 无 Ca2+、EDTA 残留、试剂失效 | 使用新鲜 1× binding buffer，减少 EDTA 残留 |
| PI 阳性普遍偏高 | 操作损伤、放置太久、离心过强、染色过久 | 缩短流程，降低离心力，染后尽快上机 |
| 四象限边界不清 | 补偿错误、自发荧光高、单染对照不足 | 重新做单染补偿和未染对照 |
| 贴壁细胞凋亡率很低 | 漂浮死亡细胞被丢弃 | 必须合并培养上清和贴壁细胞 |
| 处理组碎片很多 | 强毒性、样本过度吹打、细胞已经裂解 | 降低剂量或提前时间点，并优化门控 |
| 重复差异大 | 细胞密度、处理时间、收集比例或上机等待时间不一致 | 标准化接种密度、处理时间和染后等待时间 |
| Annexin V+/PI+ 被过度解释为凋亡 | 双阳性也可能来自膜破损后内侧 PS 结合 | 结合早期时间点、caspase、LDH 和形态学证据 |

## 记录模板

中文记录模板：

```text
实验名称：
细胞系/样本来源：
传代数/处理前状态：
接种密度：
处理因素：
处理浓度和时间：
是否收集漂浮细胞：
解离方法：
洗涤缓冲液：
Annexin V 颜色/品牌/货号/批号：
PI 或其他死细胞染料品牌/货号/批号：
Binding buffer 品牌/货号/批号：
细胞浓度：
染色体积：
染色时间和温度：
上机等待时间：
流式仪器和激光/滤光片：
补偿对照：
门控策略：
采集事件数：
活细胞比例：
早期凋亡比例：
晚期凋亡/膜破损比例：
PI-only 比例：
异常现象：
下一步验证：
```

English record template:

```text
Experiment name:
Cell line/sample source:
Passage number/pre-treatment status:
Seeding density:
Treatment:
Dose and duration:
Floating cells collected:
Detachment method:
Wash buffer:
Annexin V fluorophore/brand/catalog no./lot no.:
PI or alternative dead-cell dye brand/catalog no./lot no.:
Binding buffer brand/catalog no./lot no.:
Cell concentration:
Staining volume:
Staining time and temperature:
Time from staining to acquisition:
Flow cytometer and laser/filter settings:
Compensation controls:
Gating strategy:
Events acquired:
Viable cell percentage:
Early apoptotic percentage:
Late apoptotic/membrane-compromised percentage:
PI-only percentage:
Unexpected observations:
Next validation experiment:
```

## 小结

Annexin V-PI 染色的强项是把细胞死亡拆成阶段：PS 外翻但膜完整的早期凋亡、PS 阳性且膜破损的晚期凋亡/继发性坏死，以及 PI-only 的膜损伤群体。它的关键变量不是某个固定体积，而是样本完整收集、含 Ca2+ 的 binding buffer、温和操作、避光短时间染色、及时上机、补偿和门控。解释结果时要记住：Annexin V 阳性提示 PS 暴露，PI 阳性提示膜完整性丧失；是否真正构成凋亡机制证据，还需要时间动态和其他实验共同支持。

## 参考来源

- Vermes I, Haanen C, Steffens-Nakken H, Reutelingsperger C. A novel assay for apoptosis: flow cytometric detection of phosphatidylserine expression on early apoptotic cells using fluorescein labelled Annexin V. *Journal of Immunological Methods*. 1995. [PubMed](https://pubmed.ncbi.nlm.nih.gov/7622868/)
- Thermo Fisher Scientific. Annexin V Staining. [Thermo Fisher](https://www.thermofisher.com/us/en/home/life-science/cell-analysis/cell-viability-and-regulation/apoptosis/annexin-v-staining.html)
- BioLegend. APC Annexin V Apoptosis Detection Kit with PI, application notes. [BioLegend](https://www.biolegend.com/nl-nl/products/apc-annexin-v-apoptosis-detection-kit-with-pi-9788?GroupID=BLG6046)
- Bio-protocol. Annexin V-FITC/PI staining examples extracted from published studies. [Bio-protocol](https://bio-protocol.org/exchange/minidetail?id=2518719&type=30)
- Cossarizza A, et al. Guidelines for the use of flow cytometry and cell sorting in immunological studies. *European Journal of Immunology*. 2019/2020 update. [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC7350392/)
