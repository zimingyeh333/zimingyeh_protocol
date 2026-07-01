# TRAP assay

TRAP assay（telomeric repeat amplification protocol，端粒重复扩增实验）是检测 [端粒酶](../番外/补充知识/端粒酶.md)活性的经典方法。它先让样本中的端粒酶在体外延长人工底物引物，再用 [PCR](PCR.md) 把延长产物扩增出来，因此读到的是“样本中可检测的端粒酶活性”，不是 [端粒](../番外/补充知识/端粒.md)长度本身。

![TRAP assay workflow](<../z_asset/用/TRAP assay/trap-assay-workflow.png>)

图：TRAP assay 的核心是 cell extract（细胞提取物）中的端粒酶先延长 TS primer（TS 引物），随后 PCR 扩增产生 6 bp 间隔的 ladder（梯状条带）或 qPCR fluorescence（qPCR 荧光读数）。热灭活对照、阴性对照、阳性对照和 internal control（内扩增对照）决定结果是否可信。本图由 Image2 / image-generation model 生成，用于个人学习示意。

## 实验发明历史

Kim 等在 1994 年报道 TRAP，用 PCR 放大端粒酶延长产物，使端粒酶活性检测从低通量放射性延长实验变成灵敏、适合肿瘤和细胞样本筛查的方法。参考：[Kim et al., Science, 1994](https://doi.org/10.1126/science.7605428)。

Piatyszek 等随后把 TRAP 方法系统化，强调提取物质量、PCR 抑制和内部对照对判读的重要性。参考：[Piatyszek et al., Methods in Cell Science, 1995](https://doi.org/10.1007/BF00962867)。

## 应用场景

- 判断细胞系、肿瘤样本或处理组是否有可检测端粒酶活性。
- 比较 TERT/TERC 操作、药物处理、分化状态或应激条件对端粒酶活性的影响。
- 与 [端粒长度检测](../番外/补充知识/端粒长度检测.md)、C-circle assay 和 APB 检测结合，区分端粒酶维持、[ALT](../番外/补充知识/ALT.md) 维持或混合机制。
- 在永生化、干细胞、肿瘤生物学和端粒维护研究中作为功能读出。

TRAP 不适合单独回答“端粒长度是多少”“细胞是否已经永生化”“端粒酶在每个端粒上是否正在工作”。这些问题需要长期传代、端粒长度和细胞功能读出共同判断。

## 实验目的

TRAP assay 的目的通常是检测或比较样本中的 telomerase enzymatic activity（端粒酶酶活）。如果实验设计合理，它可以回答：

- 处理是否降低或提高端粒酶活性。
- 端粒酶活性变化是否与 TERT/TERC 表达一致。
- 样本中是否存在 PCR inhibitor（PCR 抑制剂）导致假阴性。
- 端粒酶阳性样本是否仍可能同时具有 ALT 标志。

## 简要实验原理

TRAP 包含两个连续反应。

第一步是 telomerase extension（端粒酶延长反应）：活性端粒酶识别 TS primer（telomerase substrate primer，端粒酶底物引物），利用自身 TERC RNA template（TERC RNA 模板）在引物 3′ 端添加 TTAGGG 重复序列。

第二步是 PCR amplification（PCR 扩增）：用 TS primer 和反向引物扩增被端粒酶延长的产物。因为端粒酶每次添加 6 bp 重复单元，传统凝胶读数会出现 6 bp 间隔 ladder；qTRAP 则用实时荧光 PCR 将活性转换为 Ct/Cq 或相对活性。

关键点是：TRAP 同时依赖“端粒酶延长”和“PCR 扩增”。任一环节失败，都会影响最终信号。

## 实验所需试剂和器材

| 类别 | 常见内容 | 作用 |
| --- | --- | --- |
| 样本 | 细胞、组织裂解液或纯化蛋白提取物 | 提供端粒酶活性来源 |
| 裂解体系 | [CHAPS](<../材(实验耗材工具篇)/CHAPS.md>) 裂解液、RNase-free 水、蛋白酶抑制剂 | 温和提取端粒酶复合体并减少降解 |
| 引物 | TS primer、反向引物、internal control 引物 | 提供端粒酶底物和 PCR 扩增体系 |
| PCR 组分 | [Taq DNA聚合酶](<../材(实验耗材工具篇)/Taq DNA聚合酶.md>)、[dNTP](<../材(实验耗材工具篇)/dNTP.md>)、MgCl2、PCR buffer | 扩增端粒酶延长产物 |
| 对照样本 | 热灭活样本、阳性细胞提取物、阴性裂解液 | 判断信号是否来自端粒酶 |
| 读数设备 | [PCR仪](<../材(实验耗材工具篇)/PCR仪.md>)、凝胶电泳系统、[qPCR仪](<../材(实验耗材工具篇)/qPCR仪.md>) | 进行扩增和读数 |

商业试剂盒通常已经包含标准化 TS primer、反向引物、内扩增对照和阳性对照。自配体系时，必须特别注意 [PCR引物](<../材(实验耗材工具篇)/PCR引物.md>)设计和引物二聚体背景。

## 实验操作

### 样本收集与低温处理

**怎么做**：收集细胞或组织后尽快置于冰上，使用温和裂解条件提取总蛋白，避免反复冻融。样本量可按细胞数或总蛋白量标准化。

**为什么重要**：端粒酶是含 RNA 的核糖核蛋白复合体，活性可能受蛋白降解、RNA 降解和盐浓度影响。样本处理越粗暴，越容易出现假阴性。

**注意事项**：全程低温；使用洁净、RNase-free 条件；记录细胞数、裂解体积、蛋白浓度和冻融次数。

**替代方案**：样本量有限时可用试剂盒推荐的最小输入量；组织样本可先机械匀浆再温和裂解，但要控制血红素、脂质和组织碎片带来的 PCR 抑制。

**出错后果**：提取物降解会导致阳性样本变弱；样本中抑制物残留会让端粒酶延长正常但 PCR 不出信号。

### 蛋白提取和定量

**怎么做**：使用 CHAPS-based lysis buffer（CHAPS 裂解缓冲液）裂解细胞，离心去除碎片，取上清。必要时用 [蛋白定量](蛋白定量.md) 方法估算输入量。

**为什么重要**：TRAP 结果需要按蛋白量或细胞数归一化，否则“信号强”可能只是样本输入更多。

**注意事项**：避免 SDS、强去污剂、高盐或酚类污染，因为它们可能抑制端粒酶或 PCR。蛋白定量方法也要确认与裂解液兼容。

**替代方案**：如果试剂盒直接按细胞数输入，也应在记录中保留细胞数和裂解体积，方便后续比较。

**出错后果**：输入过高会带入 PCR 抑制剂；输入过低会接近检测下限。

### 端粒酶延长反应

**怎么做**：将提取物与 TS primer 和反应缓冲液混合，在试剂盒或文献建议温度下孵育，使端粒酶先延长引物。常见设置会包含同一样本的 heat-inactivated control（热灭活对照）。

**为什么重要**：这是 TRAP 的特异性来源。只有端粒酶先添加 TTAGGG 重复序列，后续 PCR 才会产生典型 ladder。

**注意事项**：孵育温度和时间不要随意更改；延长反应和 PCR 如果在同管完成，要避免上样污染和非特异扩增。

**替代方案**：某些 qTRAP 体系把延长和 PCR 放在连续程序里完成；传统 TRAP 可先延长再扩增，便于加入 RNase 或热灭活对照。

**出错后果**：延长时间不足会降低信号；温度过高或样本被热损伤会灭活端粒酶。

### PCR 扩增

**怎么做**：加入反向引物、PCR buffer、dNTP、Taq DNA polymerase 等组分，进行 PCR 或 qPCR 扩增。传统 TRAP 常用凝胶或毛细管检测；qTRAP 用实时荧光读数。

**为什么重要**：PCR 决定最终读数的灵敏度和线性范围。TRAP 的高灵敏度来自 PCR，但假阳性和平台期失真也主要来自 PCR。

**注意事项**：循环数过多会放大背景；引物二聚体可造成低分子条带；内部扩增对照可帮助判断 PCR 是否被抑制。MIQE 对 qPCR 实验报告的原则也适用于 qTRAP 的透明记录。参考：[Bustin et al., Clinical Chemistry, 2009](https://doi.org/10.1373/clinchem.2008.112797)。

**替代方案**：如果只需要判断阳性/阴性，传统 ladder 足够直观；如果要比较处理组活性，qTRAP 或荧光定量 TRAP 更适合。

**出错后果**：PCR 污染会导致阴性对照阳性；PCR 抑制会造成所有样本变弱甚至假阴性。

### 读数与归一化

**怎么做**：传统 TRAP 看 6 bp 间隔 ladder；qTRAP 看 Cq/Ct 或标准曲线换算的相对活性。结果应按输入蛋白量、细胞数或标准曲线归一化。

**为什么重要**：TRAP 信号不是绝对端粒酶分子数。只有放在同批对照和线性范围内，处理组差异才有意义。

**注意事项**：热灭活对照应显著降低或消除 TRAP ladder；阴性对照不能有明显特异 ladder；阳性对照必须稳定；internal control 失败时不能把阴性结果当作端粒酶阴性。

**替代方案**：对于非常低活性样本，可增加输入量或使用更灵敏读数，但必须确认没有 PCR 抑制和背景扩增。

**出错后果**：只看有无条带、不看对照，最容易把 PCR 背景误判为端粒酶活性。

## 结果解析

| 结果 | 可能解释 | 下一步 |
| --- | --- | --- |
| 阳性样本出现 6 bp 间隔 ladder | 存在可检测端粒酶活性 | 与热灭活和阴性对照比较 |
| qTRAP Cq 低于对照 | 相对端粒酶活性较高 | 确认输入量、标准曲线和内参 |
| 热灭活样本仍有强信号 | PCR 污染、引物二聚体或非特异扩增 | 更换试剂、降低循环数、检查无模板对照 |
| internal control 弱或消失 | PCR 被抑制或体系失败 | 稀释提取物、清理样本、重配 PCR |
| TRAP 阳性但端粒不变长 | 活性不足、端粒招募受限或观察时间太短 | 联合端粒长度和 TERT/TERC 表达 |
| TRAP 阴性但细胞持续增殖 | 可能为 ALT 或检测失败 | 查 C-circle、APB、端粒长度异质性和 PCR 抑制 |

## 可能出现异常结果及原因

| 异常 | 常见原因 | 处理策略 |
| --- | --- | --- |
| 所有样本无信号，阳性对照也无信号 | PCR 体系失败、酶失活、程序错误 | 先用阳性对照和普通 PCR 验证体系 |
| 样本无信号但 internal control 正常 | 端粒酶确实低、样本降解或输入不足 | 增加输入、检查 TERT/TERC、改善提取 |
| 样本无信号且 internal control 弱 | PCR 抑制剂存在 | 稀释提取物、换提取方法、纯化样本 |
| 阴性对照出现条带 | 污染或引物二聚体 | 分区操作、换水和引物、降低循环数 |
| ladder 模糊成 smear | 输入过多、循环过多或非特异扩增 | 降低输入量和循环数，优化 Mg2+ |
| 重复间差异大 | 提取不稳定、蛋白量不准、冻融差异 | 统一裂解时间，按蛋白或细胞数归一化 |
| qTRAP 标准曲线不线性 | 输入超出线性范围或抑制物干扰 | 做阳性样本梯度稀释，选择线性区间 |

## 推荐对照

| 对照 | 目的 | 合格表现 |
| --- | --- | --- |
| 阳性对照 | 证明体系能检出端粒酶 | 稳定 ladder 或稳定 qPCR 信号 |
| 阴性裂解液/端粒酶阴性细胞 | 评估背景 | 无特异 ladder 或信号很低 |
| 热灭活样本 | 证明信号依赖活性酶 | 信号明显降低或消失 |
| 无模板对照 | 发现 PCR 污染 | 无扩增或无特异条带 |
| internal amplification control | 判断 PCR 抑制 | 各样本均应可扩增 |
| 样本梯度稀释 | 确认线性范围 | 信号随输入量规律变化 |

## 建议记录要点

中文记录：

```text
样本：细胞系/组织、处理条件、收集时间、传代数
提取：细胞数或组织量、裂解液配方、裂解体积、蛋白浓度、冻融次数
TRAP：输入蛋白量、延长温度/时间、PCR/qPCR 程序、循环数、试剂盒或自配体系
对照：阳性对照、阴性对照、热灭活对照、无模板对照、internal control
读数：ladder 图像或 Cq/Ct、归一化方式、是否在线性范围
```

English record:

```text
Sample: cell line/tissue, treatment, collection time, passage number
Extraction: cell number or tissue input, lysis buffer, lysis volume, protein concentration, freeze-thaw cycles
TRAP setup: protein input, extension temperature/time, PCR/qPCR program, cycle number, kit or in-house system
Controls: positive control, negative control, heat-inactivated control, no-template control, internal control
Readout: ladder image or Cq/Ct, normalization method, linear range confirmation
```

## 小结

TRAP assay 是端粒酶活性检测，而不是端粒长度检测。它的优势是灵敏、适合比较端粒酶活性变化；主要风险是 PCR 污染、PCR 抑制、输入量不在线性范围和对照不足。一个可靠 TRAP 结果必须同时看样本信号、热灭活对照、阳性/阴性对照和内部扩增对照，并与端粒长度、TERT/TERC 表达或 ALT 标志共同解释。

## 参考来源

- [Kim et al., Specific association of human telomerase activity with immortal cells and cancer, Science, 1994](https://doi.org/10.1126/science.7605428)
- [Piatyszek et al., Detection of telomerase activity in human cells and tumors by a telomeric repeat amplification protocol, Methods in Cell Science, 1995](https://doi.org/10.1007/BF00962867)
- [Herbert et al., Nonradioactive detection of telomerase activity using the telomeric repeat amplification protocol, Nature Protocols, 2006](https://doi.org/10.1038/nprot.2006.409)
- [Bustin et al., The MIQE Guidelines: Minimum Information for Publication of Quantitative Real-Time PCR Experiments, Clinical Chemistry, 2009](https://doi.org/10.1373/clinchem.2008.112797)
