# ALT

ALT（alternative lengthening of telomeres，端粒替代延长）是一类不依赖活性 [端粒酶](端粒酶.md)、主要通过同源模板复制和重组相关 DNA 合成维持 [端粒](端粒.md)的状态。它常见于部分肿瘤和永生化细胞，典型特点包括高度不均一的端粒长度、端粒重组、ALT-associated PML bodies（ALT 相关 PML 核体，APB）和 C-circle（C 环）等，但没有任何单一标志能覆盖所有 ALT 状态。

![MiDAS 与 ALT 的 BIR 样 DNA 合成对比](../../z_asset/番外/补充知识/MiDAS与ALT/midas-vs-alt-bir-like-synthesis.png)

图：ALT 可在 APB 中聚集多个端粒和修复因子，通过 BLM、RAD52、RFC–PCNA–POLD3 等不同组合进行 BIR-like telomere synthesis（BIR 样端粒合成）。ALT 与 MiDAS 共享部分复制压力和修复合成因子，但 ALT 是持续的端粒维持状态，MiDAS 则是有丝分裂期急性补救过程。本图由 Image2 / image-generation model 生成，用于个人学习示意。

## ALT 为什么会被发现

大多数无限增殖肿瘤细胞通过 telomerase（端粒酶）补充端粒重复序列，但 Bryan 等发现一部分永生化人细胞在检测不到端粒酶活性时仍能维持极长且高度不均一的端粒，提示存在另一种维持机制。参考：[Bryan et al., EMBO Journal, 1995](https://doi.org/10.1002/j.1460-2075.1995.tb00098.x)。

ALT 并不是“所有端粒酶阴性细胞”的同义词。没有端粒酶的普通体细胞通常会随分裂发生端粒缩短并进入衰老；只有建立了可持续模板复制和端粒保护的细胞才属于 ALT 维持状态。

## 端粒为什么需要特殊处理

端粒由 TTAGGG 重复 DNA、3′ G-rich overhang（富 G 3′ 突出端）和 shelterin complex（端粒保护蛋白复合物）组成。它既要被复制，又必须避免被细胞误识别为普通 [DNA双链断裂](DNA双链断裂.md)。

端粒重复序列容易形成 G-quadruplex（G 四链体）、R-loop 和其他二级结构，复制叉还要应对染色体末端几何限制。ALT 细胞将这种复制压力与重组修复转化为端粒延长机会，但也因此持续处于高端粒损伤和重排状态。

## ALT 可能如何延长端粒

### 端粒损伤与模板接近

短端粒、复制障碍或端粒 DNA 损伤可暴露可进行模板复制的 3′ 末端。受体端粒可使用 sister telomere（姐妹端粒）、另一条染色体端粒或 extrachromosomal telomeric repeat DNA（染色体外端粒重复 DNA）作为模板。

### APB 中的端粒聚集

[APB](APB.md)（ALT-associated PML body，ALT 相关 PML 核体）包含 PML protein、端粒 DNA、shelterin 和多种 DNA 修复/复制因子。多个端粒在同一 APB 中接近，有利于同源模板搜索和 DNA 合成。

APB 最初在端粒酶阴性永生化细胞中被描述。参考：[Yeager et al., Cancer Research, 1999](https://pubmed.ncbi.nlm.nih.gov/10485449/)。但 APB 是动态结构：并非每个 APB 都正在延长端粒，也不是所有 ALT 细胞在每个时间点都产生大量 APB。

### BIR 样端粒合成

break-induced telomere synthesis（断裂诱导端粒合成）可由端粒末端侵入同源端粒模板并建立长距离 DNA 合成。Dilley 等证明，端粒 DSB 可启动依赖 RFC–PCNA–Pol δ/POLD3 的单向长距离合成，而不依赖 RAD51。参考：[Dilley et al., Nature, 2016](https://doi.org/10.1038/nature20099)。

因此 ALT 与 [BIR](BIR.md)密切相关，但 ALT 不是只有一条固定路径。不同细胞或同一细胞不同阶段可采用 RAD52-dependent（RAD52 依赖）或 RAD52-independent（RAD52 非依赖）的 BIR 路径，BLM 和 POLD3/POLD4 的需求也会变化。参考：[Zhang et al., Cell Reports, 2019](https://doi.org/10.1016/j.celrep.2018.12.102)。

### 端粒合成也会制造新的复制压力

APB 中多个端粒之间的长距离复制会形成复杂 DNA 连接和 inter-telomere BIR intermediates（端粒间 BIR 中间体）。BLM 可促进合成和中间体处理；其缺失既可降低端粒合成，也可能导致端粒染色体桥。ALT 因而是自我维持但并不稳定的过程。参考：[Zhang et al., Molecular Cell, 2021](https://doi.org/10.1016/j.molcel.2020.12.030)。

## ALT 的常见标志及其局限

| 标志 | 常见表现 | 为什么不能单独下结论 |
| --- | --- | --- |
| 端粒长度高度异质 | 同一细胞群从很短到极长端粒并存 | 某些端粒酶阳性或混合群体也可不均一 |
| APB | PML、端粒 DNA 和修复因子共定位 | APB 数量受细胞周期和实验条件影响，并非每个 APB 都活跃 |
| C-circle | 富 C 链单链环状端粒 DNA | 不同 ALT 亚型信号强度不同，样品质量和扩增条件影响明显 |
| T-SCE | telomere sister chromatid exchange（端粒姐妹染色单体交换）升高 | 端粒重组增加并非 ALT 独有，也不直接等于净端粒延长 |
| ATRX/DAXX 缺失 | 多种 ALT 肿瘤或细胞系中常见 | 缺失可促进 ALT 条件，但并非充分或必要标志 |
| 端粒 DNA 损伤 | 端粒与 γH2AX/53BP1 等共定位 | 可由普通端粒去保护或复制毒性产生 |

## C-circle assay

C-circle 是以富 C 链端粒重复序列构成的部分单链环状 DNA，可作为 ALT 活性的常用标志。[C-circle assay](<../../用(实验流程内容篇)/C-circle assay.md>) 通常利用 phi29 DNA polymerase（phi29 DNA 聚合酶）进行 rolling-circle amplification（滚环扩增），再检测扩增的端粒 DNA。

Henson 等建立了可量化的 C-circle assay，并在多种 ALT 阳性样本中验证其区分能力。参考：[Henson et al., Nature Biotechnology, 2009](https://doi.org/10.1038/nbt.1587)。

但实验上必须注意：

- 高分子量 DNA 完整性和提取方法会影响环状模板保留。
- phi29 反应条件、DNA 输入量和端粒探针检测需要标准化。
- 应设置无聚合酶对照、ALT 阳性/阴性细胞对照和输入 DNA 归一化。
- RAD52 缺失等条件可改变 ALT 路径比例，而 C-circle 仍可能保持或升高，因此阴性或阳性信号都应与其他标志联合解释。

## APB 检测

APB 通常通过 PML immunofluorescence（PML 免疫荧光）与 telomere FISH（端粒荧光原位杂交）共定位检测。可靠分析应明确：

- 共定位判定阈值和显微镜 z-stack（Z 轴堆栈）。
- APB 大小与端粒信号强度。
- 每个细胞的 APB 数量及阳性细胞比例。
- 细胞周期，因为 APB 和端粒合成在 G2/有丝分裂附近常更活跃。

二维投影中的信号重叠可能只是空间偶合，最好使用三维成像和随机共定位对照。

## ATRX/DAXX 与 ALT

ATRX–DAXX chromatin-remodeling complex（ATRX–DAXX 染色质重塑复合物）负责在端粒等重复区域沉积 histone H3.3（组蛋白 H3.3）。ATRX 或 DAXX 缺失常与 ALT 相关，可增加端粒复制障碍和重组环境。

但 ATRX loss（ATRX 缺失）不是 ALT 的独立诊断。细胞模型显示，ATRX 缺失可促进或加速 ALT 建立，却需要其他遗传/表观遗传改变协同。参考：[Napier et al., Oncotarget, 2015](https://doi.org/10.18632/oncotarget.3846)。

## ALT 与端粒酶并非逻辑上绝对互斥

ALT 通常被定义为端粒酶非依赖维持，但实验细胞可同时具有端粒酶活性和持续 ALT 表型。向 ALT 细胞表达 hTERT 后，端粒酶可延长较短端粒，而端粒长度快速变化和 APB 仍存在。参考：[Perrem et al., Molecular and Cellular Biology, 2001](https://doi.org/10.1128/MCB.21.12.3862-3875.2001)。

因此，TRAP assay（telomeric repeat amplification protocol，端粒重复扩增实验）阳性不应自动排除 ALT；应判断两种端粒维持机制是否并存，以及哪一种对长期增殖更重要。

## ALT 与端粒酶维持对比

| 特征 | ALT | 端粒酶维持 |
| --- | --- | --- |
| 核心机制 | 同源模板复制和重组相关合成 | TERT/TERC 核糖核蛋白添加端粒重复序列 |
| 端粒长度分布 | 常高度不均一，极短与极长并存 | 通常相对集中，但依细胞而异 |
| 典型标志 | C-circle、APB、T-SCE、端粒重组 | 端粒酶活性、TERT/TERC 表达 |
| 主要复制因子 | POLD3/4、BLM、RAD52 等不同组合 | TERT、TERC 及端粒酶装配因子 |
| 主要风险 | 端粒复制压力、重排和染色体桥 | 端粒酶再激活支持持续增殖，但端粒本身较稳定 |
| 是否可并存 | 可以，取决于细胞背景 | 可以与 ALT 表型并存 |

## ALT 与 MiDAS 的关系

[MiDAS](MiDAS.md)是早期有丝分裂中处理未完成复制的急性合成；ALT 是持续端粒维持状态。ALT 端粒在 G2/有丝分裂可发生 POLD3、RAD52 或 BLM 相关合成，其中一部分符合 telomeric MiDAS（端粒 MiDAS）或 BIR-like 过程。

因此可写成：

- ALT 可利用 MiDAS/BIR-like DNA synthesis。
- 端粒 MiDAS 可支持 ALT 细胞维持端粒。
- 但一次端粒 MiDAS 信号不能单独证明细胞已建立稳定 ALT 状态。

## 建议的 ALT 判定组合

不要使用单一标志。更可靠的组合是：

- 端粒长度与异质性：TRF Southern blot、qFISH 或 telomere FISH。
- C-circle assay：检测 ALT 相关染色体外端粒环。
- APB：PML 与端粒 DNA 三维共定位。
- 端粒重组：T-SCE 或相关 reporter。
- 端粒酶状态：TRAP、TERT/TERC 表达。
- ATRX/DAXX：蛋白表达和基因状态，仅作支持证据。
- 长期功能：连续传代中是否持续维持端粒和增殖。

## 常见异常与 troubleshooting

| 结果 | 可能原因 | 优先检查 |
| --- | --- | --- |
| C-circle 阳性但 APB 很少 | ALT 路径异质、细胞周期差异或 APB 检测灵敏度不足 | PML/telomere 三维成像、细胞周期和独立标志 |
| APB 多但 C-circle 阴性 | 非活跃 PML–端粒聚集、DNA 质量差或 ALT 亚型差异 | 无聚合酶对照、DNA 完整性和端粒异质性 |
| ATRX 缺失但无其他 ALT 标志 | ATRX 缺失尚不足以启动 ALT | C-circle、APB、TRF 和长期端粒维持 |
| TRAP 阳性且有 ALT 标志 | 端粒酶与 ALT 共存或样本混合 | 单细胞/克隆分析和长期机制依赖 |
| 端粒非常长但分布均一 | 端粒酶过表达或其他长度调节 | 端粒酶活性、C-circle 和 APB |
| 抑制 BLM 后端粒合成下降但桥增加 | 合成受阻且中间体处理失败 | APB、端粒桥、存活和结构变异，而非只看合成量 |

## 小结

ALT 是端粒酶非依赖、重组和模板复制驱动的持续端粒维持状态，而不是“端粒很长”或“ATRX 缺失”的单一表型。可靠判断需要联合端粒长度异质性、C-circle、APB、端粒重组和端粒酶状态，并认识到 ALT 内部存在 RAD52 依赖与非依赖等多条 BIR-like 路径。

## 参考来源

- [Bryan et al., Telomere elongation in immortal human cells without detectable telomerase activity, EMBO Journal, 1995](https://doi.org/10.1002/j.1460-2075.1995.tb00098.x)
- [Yeager et al., Telomerase-negative immortalized human cells contain a novel type of promyelocytic leukemia body, Cancer Research, 1999](https://pubmed.ncbi.nlm.nih.gov/10485449/)
- [Perrem et al., Coexistence of alternative lengthening of telomeres and telomerase in hTERT-transfected GM847 cells, Molecular and Cellular Biology, 2001](https://doi.org/10.1128/MCB.21.12.3862-3875.2001)
- [Henson et al., DNA C-circles are specific and quantifiable markers of alternative-lengthening-of-telomeres activity, Nature Biotechnology, 2009](https://doi.org/10.1038/nbt.1587)
- [Napier et al., ATRX represses alternative lengthening of telomeres, Oncotarget, 2015](https://doi.org/10.18632/oncotarget.3846)
- [Dilley et al., Break-induced telomere synthesis underlies alternative telomere maintenance, Nature, 2016](https://doi.org/10.1038/nature20099)
- [Zhang et al., Alternative Lengthening of Telomeres through Two Distinct Break-Induced Replication Pathways, Cell Reports, 2019](https://doi.org/10.1016/j.celrep.2018.12.102)
- [Zhang et al., Alternative lengthening of telomeres is a self-perpetuating process in ALT-associated PML bodies, Molecular Cell, 2021](https://doi.org/10.1016/j.molcel.2020.12.030)
