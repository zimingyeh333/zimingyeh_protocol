# MMEJ

MMEJ（microhomology-mediated end joining，微同源介导末端连接）是 DNA 断端经过切除后，利用两端暴露的短 microhomology（微同源序列）进行退火、加工和连接的一类修复方式。它常在 [DNA双链断裂](DNA双链断裂.md) 后产生带微同源特征的缺失，是理解 [CRISPR-Cas9](CRISPR-Cas9.md) 修复谱和结构变异的重要概念。

![CRISPR-Cas9 双链断裂修复分流](../../z_asset/番外/补充知识/DNA双链断裂修复/crispr-dsb-repair-pathways.png)

图：c-NHEJ 可在较少切除的情况下连接断端；MMEJ/TMEJ 先暴露短微同源序列，退火后通常删除两段微同源之间的一段序列；HDR 则使用同源模板复制信息。本图由 Image2 / image-generation model 生成，用于个人学习示意。

## MMEJ 与 TMEJ：相关但不要完全画等号

TMEJ（theta-mediated end joining，DNA polymerase θ-mediated end joining，DNA 聚合酶 θ 介导末端连接）指依赖 POLQ 编码的 DNA polymerase theta（DNA 聚合酶 θ，Polθ）完成的末端连接机制。哺乳动物中许多被称为 MMEJ 的产物由 TMEJ 形成，因此两个名称经常并列出现。

但 MMEJ 也常被用于描述“连接点带短微同源”的机制或结果类别，而不是严格证明了 Polθ 依赖。仅凭一个修复产物存在微同源，不能自动断言它一定经过 TMEJ；反过来，TMEJ 的产物也不一定都呈现同样长度和形式的微同源。更严谨的写法是：

- 只有连接点序列：写“microhomology-associated deletion（微同源相关缺失）”或“MMEJ-like outcome（MMEJ 样产物）”。
- 结合 POLQ 遗传扰动、抑制或机制证据：再进一步归因于 TMEJ。

Polθ 促进替代性末端连接并抑制部分重组结果的证据见 [Mateos-Gomez et al., Nature, 2015](https://doi.org/10.1038/nature14157)；其处理经过切除断端的机制研究见 [Wyatt et al., Molecular Cell, 2016](https://doi.org/10.1016/j.molcel.2016.06.020)。

## 基本机制

### 断端切除

DSB 两端发生 5' end resection（5' 端切除），形成带 3' 单链尾的中间体。MMEJ 与 [HDR](HDR.md) 因而共享“先进入末端切除”的早期步骤，之后才在微同源退火和重组模板使用之间分流。相关实验见 [Truong et al., PNAS, 2013](https://doi.org/10.1073/pnas.1213431110)。

### 微同源搜索与退火

切除后暴露的短相同序列相互配对。微同源常只有数个碱基，但不存在适用于所有位点的固定长度阈值；局部序列、断端结构和可用修复因子都会改变被采用的微同源。

### 去除不配对尾端

退火后，微同源之外可能留下 non-homologous flap（非同源突出片段）。这些片段需要被切除，才能形成可继续合成和连接的中间体。

### DNA 合成与连接

Polθ 可稳定并延伸配对很少的 3' 末端，随后完成缺口填补和连接。由于两端之间的原始序列通常无法保留，最终产物常表现为 deletion（缺失），连接点附近保留一份微同源序列。

## 为什么它会留下“修复疤痕”

假设断裂两侧存在相同短序列：

```text
5' ... A C T [G T A] X X X X [G T A] C C ... 3'
                     DSB

MMEJ 后：
5' ... A C T [G T A] C C ... 3'
```

两段 `GTA` 退火后，中间的序列和其中一份重复序列被删除。因此最终 junction（连接点）常能观察到一份微同源。这种“微同源 + 介于两者之间的缺失”是典型线索，但不是单独证明通路的充分条件。

Polθ 缺失会改变线虫和哺乳动物中的修复痕迹，支持其在形成特征性小插入/缺失中的作用。参考：[van Schendel et al., PLoS Genetics, 2016](https://doi.org/10.1371/journal.pgen.1006368)。

## 在 CRISPR 编辑中的意义

### 解释可重复的缺失热点

Cas9 编辑产物并非完全随机。若切口附近存在位置合适的短重复序列，某个带微同源的缺失可能在重复实验中反复成为主要等位基因。大规模修复谱研究显示局部序列可预测相当一部分结果偏好。参考：[van Overbeek et al., Molecular Cell, 2016](https://doi.org/10.1016/j.molcel.2016.06.037)。

### 可用于设计性整合，但不是无风险捷径

PITCh（Precise Integration into Target Chromosome，靶染色体精准整合）等策略利用短微同源臂促进供体整合。其优势是同源臂短、供体构建相对灵活；局限是连接点可能产生 indel、不完整插入、方向错误或额外拷贝，因此不能把“检测到插入”直接当作精准整合。早期方法研究见 [Nakade et al., Nature Communications, 2014](https://doi.org/10.1038/ncomms6560)。

### 可能成为特定肿瘤背景的脆弱点

同源重组缺陷细胞可能更依赖 Polθ 处理有毒断裂中间体。这使 POLQ 成为合成致死研究靶点，但“抑制 TMEJ 可提高目标编辑”不能脱离细胞毒性和基因组稳定性单独判断。

## 与其他修复路径对比

| 特征 | [NHEJ](NHEJ.md) / c-NHEJ | MMEJ / TMEJ | [SSA](单链退火.md) | HDR / HR |
| --- | --- | --- | --- | --- |
| 末端切除 | 少或有限 | 需要 | 通常更广泛 | 需要 |
| 配对基础 | 断端兼容性 | 短微同源 | 较长直接重复序列 | 长同源模板 |
| 代表因子 | Ku70/80、DNA-PKcs、LIG4 | POLQ/Polθ 等 | RAD52 等 | RAD51、BRCA1/2 等 |
| 常见结果 | 精准重连、小 indel | 微同源相关缺失/插入 | 两重复序列间的大段缺失 | 模板指导修复或重组 |
| 实验归因难度 | 仅凭产物也可能难以绝对归因 | 微同源不是 Polθ 依赖的单独证明 | 需结合重复序列与机制 | 需区分经典 HR 与其他模板修复 |

## 如何分析 MMEJ 样结果

### 先定义连接点

对每个 deletion allele（缺失等位基因）准确定位缺失起止位置，再检查断裂前两端是否存在可对齐微同源。不要只看一个代表性克隆，应统计整个产物分布和重复间一致性。

### 同时报告分母

“MMEJ 产物占比”必须说明分母是所有 reads、所有编辑 reads，还是全部缺失 reads。不同分母会得到完全不同的数字。

### 机制结论需要正交证据

若研究目标是证明 TMEJ，优先结合 POLQ knockout/knockdown、药理扰动、互补恢复和 junction signature（连接点特征）。单一微同源富集只能支持，不能完成机制归因。

### 不要让短扩增子隐藏大事件

MMEJ/TMEJ 与其他末端连接都可能参与较大缺失或复杂重排。外侧引物、长片段扩增、拷贝数检测或长读长测序可补充常规 amplicon sequencing（扩增子测序）。

## 常见异常与 troubleshooting

| 观察 | 可能原因 | 优先检查 |
| --- | --- | --- |
| 某一微同源缺失占比很高 | 局部序列强烈偏好该连接方式 | 生物学重复、不同递送条件和原始 read 分布 |
| POLQ 抑制后总编辑率下降 | 断端未被其他通路有效接管或细胞受损 | 细胞存活、DSB 负担及其他修复产物 |
| 微同源减少但大缺失增加 | 修复通路重新分配或检测窗口偏差 | 扩大测序范围并检查结构变异 |
| 供体插入阳性但 junction 不整齐 | 供体被末端连接捕获、部分整合或多拷贝插入 | 双端 junction、外侧 PCR、全长与拷贝数 |
| 不同分析软件给出不同 MMEJ 比例 | 微同源定义、比对和分母不同 | 固定算法参数并保留逐等位基因表 |

## 小结

MMEJ 是以短微同源退火为核心的突变性末端修复概念，TMEJ 则强调 Polθ 依赖机制。它能解释许多 CRISPR 位点中可重复的缺失，也可被整合策略利用；但连接点出现微同源只是机制线索，可靠归因仍需遗传或生化证据，并且必须检查局部 indel 之外的结构变化。

## 参考来源

- [Truong et al., Microhomology-mediated End Joining and Homologous Recombination share the initial end resection step, PNAS, 2013](https://doi.org/10.1073/pnas.1213431110)
- [Nakade et al., Microhomology-mediated end-joining-dependent integration of donor DNA in cells and animals using TALENs and CRISPR/Cas9, Nature Communications, 2014](https://doi.org/10.1038/ncomms6560)
- [Mateos-Gomez et al., Mammalian polymerase θ promotes alternative NHEJ and suppresses recombination, Nature, 2015](https://doi.org/10.1038/nature14157)
- [Wyatt et al., Essential Roles for Polymerase θ-Mediated End Joining in the Repair of Chromosome Breaks, Molecular Cell, 2016](https://doi.org/10.1016/j.molcel.2016.06.020)
- [van Schendel et al., Polymerase Θ is a key driver of genome evolution and of CRISPR/Cas9-mediated mutagenesis, PLoS Genetics, 2016](https://doi.org/10.1371/journal.pgen.1006368)
- [van Overbeek et al., DNA Repair Profiling Reveals Nonrandom Outcomes at Cas9-Mediated Breaks, Molecular Cell, 2016](https://doi.org/10.1016/j.molcel.2016.06.037)
