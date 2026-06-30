# Holliday连接体

Holliday junction（霍利迪连接体，HJ）是由四条 DNA 链在同源重组或复制相关处理中形成的四路分支 DNA 结构。它是 DNA 分子中间体，不是蛋白质、酶或永久染色体结构；若未被及时处理，连接的姐妹染色单体可能妨碍染色体正确分离。

![同源重组修复的三种结局](../../z_asset/番外/补充知识/同源重组结局/sdsa-dhj-bir-outcomes.png)

图：RAD51 链侵入后，第二断端捕获可形成 dHJ（double Holliday junction，双霍利迪连接体）。dHJ 可被 GEN1 或 SLX–MUS81 相关核酸酶切解，产生 crossover 或 noncrossover；也可由 BLM–TOP3A–RMI 复合物汇聚两连接体并解除链缠结，在标准模型中只形成 noncrossover。本图由 Image2 / image-generation model 生成，用于个人学习示意。

## 名称与结构

HJ 的核心是四条 DNA 臂在一个 branch point（分支点）连接。分支点可在同源序列中移动，这一过程称为 branch migration（分支迁移），会改变 heteroduplex DNA（异源双链 DNA）区域的长度和位置。

| 名称 | 结构 | 常见语境 |
| --- | --- | --- |
| single HJ（单 Holliday 连接体） | 一个四路 DNA 分支 | 重组、复制叉逆转或某些修复中间体 |
| dHJ（double Holliday junction，双 Holliday 连接体） | 两个相互连接的四路分支 | 经典双链断裂修复模型中的第二断端捕获产物 |
| nicked HJ（带缺口 HJ） | 某条 DNA 链在连接体附近已有切口 | MUS81–EME1 等结构特异核酸酶更适合的底物之一 |

实验中观察到四路或分支 DNA，并不自动证明它来自经典 dHJ；复制叉逆转、模板切换和未完成复制也可形成相似结构。

## 历史来源

Robin Holliday 在 1964 年提出通过 DNA 链交换和异源双链解释真菌 gene conversion（[基因转换](基因转换.md)）的模型，后来四路连接结构以其名字命名。参考：[Holliday, Genetical Research, 1964](https://doi.org/10.1017/S0016672300001233)。

1983 年的 double-strand-break repair model（双链断裂修复模型）进一步把 [DNA双链断裂](DNA双链断裂.md)、末端切除、链侵入、第二断端捕获和 dHJ 连接成一个统一框架。参考：[Szostak et al., Cell, 1983](https://doi.org/10.1016/0092-8674(83)90331-8)。

## dHJ 如何形成

### 末端切除和首次链侵入

断裂两端产生 3′ single-stranded DNA（3′ 单链 DNA），其中一个 RAD51 包被的末端侵入完整同源双链，形成 D-loop（置换环）并启动 DNA 合成。

### 第二断端捕获

供体双链中被置换的单链或新合成区域与另一断端配对，随后经过 DNA 合成和连接形成两个相互连接的 HJ。这一步与 [SDSA](SDSA.md) 的关键区别是：SDSA 让新生链退出后回到第二断端，不稳定捕获第二端形成 dHJ。

### 分支迁移

两个分支点可沿同源序列移动，扩大或缩小异源双链区域。细菌 RuvAB 的单分子实验直接观察到 ATP 驱动的 DNA 旋转与 HJ 分支迁移。参考：[Han et al., PNAS, 2006](https://doi.org/10.1073/pnas.0600753103)。真核细胞使用的蛋白体系不同，但“分支点可迁移”这一结构概念相通。

## Resolution 与 dissolution 必须分清

### Resolution：通过核酸酶切解

resolution（切解）由 structure-selective endonuclease（结构选择性内切核酸酶）切开连接体中的两条链，再连接切口。不同切割方向可形成 crossover（交换型）或 noncrossover（非交换型）结果。

人细胞中主要处理网络包括：

- GEN1：具有经典 HJ resolvase（HJ 解离酶）活性，可在 HJ 上二聚并完成成对切割。
- SLX1–SLX4 与 MUS81–EME1：在 SLX4 支架和细胞周期调控下协同处理 HJ、带缺口 HJ 及其他分支 DNA。
- SMX complex（SMX 复合物）：由 SLX1–SLX4、MUS81–EME1 和 XPF–ERCC1 组成的协调核酸酶体系，可处理多种复制/重组中间体。

GEN1 与 SLX4 相关核酸酶在人体细胞中具有不能完全互相替代的连接体处理功能；同时破坏相关备份路径会造成未处理 HJ 和有丝分裂失败。参考：[Garner et al., Cell Reports, 2013](https://doi.org/10.1016/j.celrep.2013.08.041)。

### Dissolution：不切开连接体的溶解

dissolution（溶解）由 BTRR complex 完成，即 BLM helicase（BLM 解旋酶）、TOP3A（DNA topoisomerase III alpha，DNA 拓扑异构酶 IIIα）、RMI1 和 RMI2。

BLM 促进两个 HJ 向彼此方向 convergent branch migration（汇聚式分支迁移），形成 hemicatenane（半链环连）结构；TOP3A 随后通过链通过反应解除缠结。由于没有按不同方向切开染色体臂，标准 dHJ dissolution 只产生 noncrossover。BLM HRDC 结构域参与 dHJ dissolution 的实验见 [Wu et al., EMBO Journal, 2005](https://doi.org/10.1038/sj.emboj.7600740)。

## Resolution 与 dissolution 对比

| 维度 | Resolution | Dissolution |
| --- | --- | --- |
| 核心动作 | 核酸酶切开并重新连接 DNA | 分支迁移后由拓扑异构酶解除链缠结 |
| 代表因子 | GEN1、SLX1–SLX4、MUS81–EME1 等 | BLM–TOP3A–RMI1–RMI2 |
| 是否切 DNA | 是 | 不以 HJ 核酸酶切割为核心 |
| 标准结果 | crossover 或 noncrossover | noncrossover only |
| 失效风险 | 未解连接体、染色体桥、分离错误 | crossover 增加、姐妹染色单体连接残留 |

## HJ 与 crossover、LOH 的关系

crossover 会交换同源 DNA 两侧的染色体臂。在减数分裂中，受控 crossover 有助于同源染色体正确分离；在体细胞中，crossover 可能使着丝粒远端发生 [杂合性丢失](杂合性丢失.md)（loss of heterozygosity，LOH），暴露隐性突变或改变等位基因组合。

因此体细胞倾向通过 SDSA 或 dHJ dissolution 限制 crossover，但“倾向”不等于绝对不会发生。修复蛋白缺陷、复制压力和异常连接体处理都可能改变结果比例。

## HJ 不只来自经典同源重组

- reversed replication fork（逆转复制叉）在结构上也呈四路分支，但它是复制叉重塑产物，不应未经证据直接称为重组 dHJ。
- replication termination（复制终止）和模板切换可产生其他分支 DNA。
- [BIR](BIR.md) 的迁移 D-loop 通常不需要形成经典 dHJ。
- [单链退火](单链退火.md)和 MMEJ 不通过 Holliday 连接体完成修复。

## 如何研究 Holliday 连接体

| 方法 | 可观察内容 | 主要局限 |
| --- | --- | --- |
| synthetic HJ cleavage assay（合成 HJ 切割实验） | 纯化蛋白对定义连接体的结合和切割 | 体外底物不包含染色质与完整竞争路径 |
| 2D gel electrophoresis（二维凝胶电泳） | X-shaped DNA 分子和复制/重组中间体 | X 形信号不一定都是经典 HJ |
| electron microscopy / AFM（电子显微镜/原子力显微镜） | 分支 DNA 的直接形态 | 样品制备可能改变动态构象，通量较低 |
| crossover reporter | 最终交换与非交换结果 | 不能直接确定是否形成过 dHJ |
| sister chromatid exchange assay | 染色体层面的交换频率 | 不是所有 HJ 处理都产生可见 SCE |
| anaphase bridge / ultrafine bridge analysis | 未处理连接导致的染色体桥 | 连接来源不唯一，需结合蛋白标志和遗传扰动 |

GEN1 单分子研究表明，其在第一次切割后仍紧密结合连接体并促进完成第二次切割，体现了解析反应的协调性。参考：[Sobhy et al., Nucleic Acids Research, 2019](https://doi.org/10.1093/nar/gky1280)。

## 常见误读与 troubleshooting

| 观察 | 容易产生的误读 | 优先检查 |
| --- | --- | --- |
| reporter 出现 crossover | 所有修复都经过 dHJ | reporter 是否也允许非等位重组或其他结构变化 |
| X-shaped DNA 信号增加 | HJ 数量一定增加 | 逆转复制叉、未完成复制和其他分支结构 |
| GEN1 缺失表型较弱 | GEN1 不重要 | SLX4–MUS81 路径和 BTRR dissolution 的功能补偿 |
| BLM 缺失后 SCE 增加 | 只是复制速度变化 | dHJ dissolution 缺陷、复制压力与染色体桥 |
| resolving enzyme 体外能切 HJ | 它在细胞内只切 HJ | 底物特异性、时相定位和复合物伙伴 |

## 小结

Holliday 连接体是动态四路 DNA 中间体。dHJ 可通过核酸酶 resolution 形成 crossover 或 noncrossover，也可由 BLM–TOP3A–RMI dissolution 无切割地形成 noncrossover。实验中必须把“观察到分支 DNA”“形成过经典 dHJ”和“最终发生 crossover”分成三个不同层级判断。

## 参考来源

- [Holliday, A mechanism for gene conversion in fungi, Genetical Research, 1964](https://doi.org/10.1017/S0016672300001233)
- [Szostak et al., The double-strand-break repair model for recombination, Cell, 1983](https://doi.org/10.1016/0092-8674(83)90331-8)
- [Wu et al., The HRDC domain of BLM is required for the dissolution of double Holliday junctions, EMBO Journal, 2005](https://doi.org/10.1038/sj.emboj.7600740)
- [Han et al., Direct observation of DNA rotation during branch migration of Holliday junction DNA by Escherichia coli RuvA–RuvB protein complex, PNAS, 2006](https://doi.org/10.1073/pnas.0600753103)
- [Garner et al., Human GEN1 and the SLX4-associated nucleases MUS81 and SLX1 are essential for the resolution of replication-induced Holliday junctions, Cell Reports, 2013](https://doi.org/10.1016/j.celrep.2013.08.041)
- [Sobhy et al., Resolution of the Holliday junction recombination intermediate by human GEN1 at the single-molecule level, Nucleic Acids Research, 2019](https://doi.org/10.1093/nar/gky1280)
