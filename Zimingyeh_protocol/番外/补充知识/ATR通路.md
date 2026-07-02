# ATR通路

ATR（ataxia telangiectasia and Rad3-related，共济失调-毛细血管扩张症与 Rad3 相关蛋白）是 PIKK（phosphatidylinositol 3-kinase-related kinase，磷脂酰肌醇 3-激酶相关激酶）家族的丝氨酸/苏氨酸蛋白激酶。它是 [DNA 损伤反应](DNA损伤反应.md) 和 [复制压力](复制压力.md) 应答的核心节点，主要识别“DNA 代谢失去同步后形成的大段 RPA 包被单链 DNA”，从而保护复制叉、限制新复制起点启动并延迟细胞进入有丝分裂。

![ATM 与 ATR 信号通路对比](../../z_asset/番外/补充知识/ATM与ATR/atm-vs-atr-signaling.png)

图：ATR 通路偏向由停滞复制叉和 RPA–ssDNA 启动，经 ATR–ATRIP、TOPBP1/ETAA1 与 [CHK1](CHK1与CHK2.md) 协调复制叉保护、复制起点控制和 S/G2 检查点；[ATM 通路](ATM通路.md) 偏向双链断裂。断端切除与复制叉崩溃可使两条通路先后或同时激活。本图由 Image2 / image-generation model 生成，用于个人学习示意。

## ATR 通路在回答什么问题

DNA 解旋与 DNA 合成一旦失去同步，复制叉附近会暴露单链 DNA。细胞需要判断：

- 当前复制叉能否稳定、修复和重新启动。
- 是否应抑制额外复制起点，避免更多复制叉消耗有限资源。
- 是否需要延长 S/G2 期，为完成复制和修复争取时间。
- 压力是否已转化为断裂、染色体异常或细胞死亡。

ATR 因而不是“复制叉修复酶”，而是把异常核酸结构转换成检查点和复制程序变化的信号激酶。ATR 对正常复制也很重要，完全缺失通常比 ATM 缺失更难被细胞耐受。ATR 对基因组复制的系统性作用见 [Saldivar et al., Nature Reviews Molecular Cell Biology, 2017](https://doi.org/10.1038/nrm.2017.67)。

## 经典触发：RPA–ssDNA–ATR

### RPA–ssDNA 是核心信号结构

[RPA](RPA.md)（replication protein A，复制蛋白 A）包被单链 DNA 后，一方面保护 ssDNA，另一方面为检查点蛋白提供平台。ATRIP（ATR-interacting protein，ATR 相互作用蛋白）帮助 ATR–ATRIP 复合物定位到 RPA–ssDNA；经典研究表明，RPA–ssDNA 对 ATR 招募和 CHK1 激活至关重要。参考：[Zou and Elledge, Science, 2003](https://doi.org/10.1126/science.1083430)。

RPA–ssDNA 可来自停滞复制叉、核苷酸缺乏、DNA 聚合酶受阻、UV 损伤处理、DNA 末端切除或某些修复中间体。因此“ATR 激活”并不自动等于“复制叉已经断裂”。

### ATR 被招募后还需要激活和底物组织

RAD17–RFC 复合物可在 ssDNA–dsDNA junction（单链–双链 DNA 交界）装载 RAD9–RAD1–HUS1，即 9–1–1 checkpoint clamp（9–1–1 检查点滑动夹）。TOPBP1（DNA topoisomerase II-binding protein 1，DNA 拓扑异构酶 II 结合蛋白 1）可连接该结构并刺激 ATR；ETAA1（ETAA1 activator of ATR kinase，ATR 激酶激活因子 ETAA1）则可通过 RPA 相关方式提供另一条 ATR 激活路径。TOPBP1 与 ETAA1 都含 ATR activation domain（ATR 激活结构域），但承担的生理情境并不完全相同。参考：[Thada and Cortez, Journal of Biological Chemistry, 2019](https://doi.org/10.1074/jbc.RA119.008154)。

### CLASPIN 帮助 ATR 磷酸化 CHK1

CLASPIN（claspin，检查点介质蛋白）帮助把 CHK1（checkpoint kinase 1，检查点激酶 1）组织到 ATR 信号环境中。ATR–CHK1 轴随后调控 CDC25、WEE1、CDK 和复制起点因子，使细胞放慢周期并限制新的起点启动。

## ATR 的主要输出

### 稳定和保护复制叉

ATR–CHK1 信号限制复制机器失控解偶联，帮助维持复制叉结构、调节核酸酶作用，并为修复或重启争取时间。“叉停了”与“叉已经塌了”应区分：前者可能可逆，后者往往伴随 [DNA 双链断裂](DNA双链断裂.md) 和 ATM 激活。

### 抑制晚期复制起点和协调资源

复制压力下若继续大量启动新起点，会进一步消耗 RPA、dNTP（deoxyribonucleoside triphosphate，脱氧核糖核苷三磷酸）和其他复制因子。ATR–CHK1 通过抑制整体 origin firing（复制起点起始）降低系统负担，但局部 dormant origin（休眠复制起点）仍可能被用于完成受影响区域复制。

### 控制 S/G2 检查点和有丝分裂进入

ATR–CHK1 通过 CDC25 和 WEE1–CDK1 轴延迟有丝分裂进入，使未复制或未修复 DNA 不至于直接带入 M 期。若 ATR 被抑制，细胞可能出现过量起点启动、复制叉损坏和 premature mitotic entry（过早进入有丝分裂）。

## 常见复制压力来源

| 来源 | 主要扰动 | 解释重点 |
| --- | --- | --- |
| [hydroxyurea（羟基脲，HU）](<../../材(实验耗材工具篇)/羟基脲.md>) | 抑制核糖核苷酸还原酶并降低 dNTP | 剂量和时间决定是可逆停滞还是叉崩溃 |
| [aphidicolin（阿非迪霉素）](<../../材(实验耗材工具篇)/阿非迪霉素.md>) | 抑制复制型 DNA 聚合酶 | 低剂量常用于诱导温和复制压力和常见脆性位点表达 |
| ultraviolet radiation（紫外线，UV） | 形成阻碍聚合酶的 DNA 光产物 | ATR 信号还受损伤处理和核苷酸切除修复影响 |
| oncogene activation（癌基因激活） | 复制起点、转录和代谢负荷异常 | 可形成慢性复制压力而非单次整齐刺激 |
| DNA 二级结构或转录–复制冲突 | 阻碍复制叉推进 | 常具有基因组位置和细胞状态特异性 |

复制压力的来源、标志与检测框架可参考 [Saxena and Zou, Molecular Cell, 2022](https://doi.org/10.1016/j.molcel.2022.05.004)。

## ATR 与 ATM 的区别和串扰

| 比较轴 | ATR 通路 | [ATM 通路](ATM通路.md) |
| --- | --- | --- |
| 偏好触发结构 | RPA–ssDNA、停滞复制叉和 ssDNA–dsDNA junction | 双链断裂、断端与染色质变化 |
| 典型上游 | RPA、ATRIP、9–1–1、TOPBP1、ETAA1 | MRN 复合物 |
| 经典下游 | CHK1、RPA、复制叉和起点调控因子 | CHK2、p53、γH2AX |
| 主要细胞周期语境 | S/G2 最突出，但修复产生 ssDNA 时也可在非复制细胞激活 | 各时期均可响应，G1 DSB 应答尤其典型 |
| 通路失活后常见后果 | 复制灾难、过早进入有丝分裂、染色体碎裂 | DSB 检查点和修复异常、辐射敏感性 |

DSB 经末端切除后产生 RPA–ssDNA，可在 ATM 之后激活 ATR；停滞复制叉若崩溃成断裂，则可从 ATR 信号延伸到 ATM。实验中后期同时出现 p-CHK1、p-CHK2 和 γH2AX 并不罕见，关键是用时间梯度和结构性读数判断事件顺序。

## 端粒与 ATR

正常端粒的单链 3′ overhang（3′ 突出端）不能被当作复制压力结构。[Shelterin](Shelterin.md) 中 POT1（protection of telomeres 1，端粒保护蛋白 1）覆盖端粒单链 DNA，减少 RPA 竞争和 ATR 激活；POT1 功能受损可产生端粒处 ATR 信号。TRF2 与 POT1 分别偏向抑制 ATM 和 ATR 的证据见 [Denchi and de Lange, Nature, 2007](https://doi.org/10.1038/nature06065)。

## 人类疾病与肿瘤脆弱性

ATR 低表达或功能缺陷可导致 ATR-Seckel syndrome（ATR 相关 Seckel 综合征），表现包括严重生长迟缓和小头畸形，说明 ATR 对增殖组织和发育尤其重要。参考：[O'Driscoll et al., Nature Genetics, 2003](https://doi.org/10.1038/ng1129)。

肿瘤细胞常承受癌基因驱动的高复制压力，并可能因 TP53 或 ATM 缺陷而更依赖 ATR–CHK1–WEE1 轴。因此 ATR 抑制具有合成致死和增敏潜力，但“高 γH2AX”或“ATM 缺失”本身通常不足以成为完整的药物敏感性证明。

## 实验中如何观察 ATR 通路

| 层级 | 常见读数 | 主要含义 | 关键限制 |
| --- | --- | --- | --- |
| 近端激酶 | p-ATR Thr1989 / total ATR | ATR 近端活化 | 抗体、物种和刺激条件会影响可用性 |
| 下游激酶 | p-CHK1 Ser345 或 Ser317 / total CHK1 | ATR–CHK1 轴输出 | 需要时间和抑制剂验证归因 |
| ssDNA/复制压力 | RPA focus、p-RPA32 Ser33、native BrdU | RPA–ssDNA 与复制压力 | RPA 其他位点可由 [DNA-PK](DNA-PK.md) 或 ATM 调节 |
| 复制叉行为 | [DNA fiber assay（DNA 纤维实验）](<../../用(实验流程内容篇)/DNA纤维实验.md>) | 叉速度、停滞和重启 | 标记方案和纤维测量偏差很关键 |
| 细胞周期输出 | [EdU](<../../材(实验耗材工具篇)/EdU.md>)、DNA 含量、p-H3、CDK1 状态 | S/G2 停顿或过早进入 M 期 | 群体平均会掩盖亚群差异 |

ATR Thr1989 磷酸化可作为近端活化标志，但仍应与下游 CHK1、RPA 和功能读数组合。参考：[Nam et al., Journal of Biological Chemistry, 2011](https://doi.org/10.1074/jbc.M111.248914)。[Western blot](<../../用(实验流程内容篇)/Western blot.md>)、[免疫荧光](<../../用(实验流程内容篇)/免疫荧光.md>) 和 [流式细胞术](<../../用(实验流程内容篇)/流式细胞术.md>) 分别适合群体磷酸化、单细胞焦点和细胞周期关联分析。

### 推荐的最小验证组合

- 设置未处理、溶剂和明确复制压力阳性对照。
- 同时检测 p-CHK1 与 total CHK1，并加入 p-RPA32 或 RPA focus 等上游结构读数。
- 进行早期和晚期时间梯度，区分叉停滞、恢复和崩溃。
- 使用 ATR 抑制剂或遗传干预验证归因，同时监测 ATM/DNA-PK 代偿和毒性。
- 把信号读数与 EdU、DNA fiber 或克隆形成等功能结局配对。

## 常见误读与 troubleshooting

| 观察 | 不应立刻得出的结论 | 优先排查 |
| --- | --- | --- |
| p-CHK1 升高 | 所有复制叉都已崩溃 | RPA–ssDNA、DSB 读数、处理时间和恢复能力 |
| γH2AX 升高 | ATR 是唯一上游激酶 | ATM、DNA-PK、凋亡和晚期叉崩溃 |
| ATR 抑制后 p-CHK1 下降但细胞死亡不变 | ATR 与存活无关 | 抑制时机、药物暴露、细胞背景和替代检查点 |
| HU 处理后不同批次结果差异大 | 通路本身不稳定 | 细胞密度、培养基核苷、处理剂量、恢复时间和细胞周期组成 |
| RPA32 某位点磷酸化升高 | ATR 活性可被该位点单独定量 | 位点特异激酶、总 RPA、染色质结合与其他通路贡献 |
| 晚期 p-ATM 与 p-CHK2 同时升高 | 初始刺激不是复制压力 | 检查复制叉崩溃和继发 DSB |

## 小结

ATR 是以 RPA–ssDNA 和复制压力为核心输入的检查点激酶，负责保护复制叉、限制起点启动并协调 S/G2 进程。理解 ATR 的关键不是背诵一条直线通路，而是区分停滞、恢复与崩溃，并用近端活化、CHK1/RPA、复制叉行为和细胞周期结局构成证据链；单一 p-CHK1 或 γH2AX 读数不能独立证明完整 ATR 机制。

## 参考来源

- [Zou and Elledge, Sensing DNA damage through ATRIP recognition of RPA-ssDNA complexes, Science, 2003](https://doi.org/10.1126/science.1083430)
- [O'Driscoll et al., A splicing mutation affecting expression of ATR results in Seckel syndrome, Nature Genetics, 2003](https://doi.org/10.1038/ng1129)
- [Nam et al., Thr-1989 phosphorylation is a marker of active ATR kinase, Journal of Biological Chemistry, 2011](https://doi.org/10.1074/jbc.M111.248914)
- [Saldivar et al., The essential kinase ATR: ensuring faithful duplication of a challenging genome, Nature Reviews Molecular Cell Biology, 2017](https://doi.org/10.1038/nrm.2017.67)
- [Thada and Cortez, Common motifs in ETAA1 and TOPBP1 required for ATR kinase activation, Journal of Biological Chemistry, 2019](https://doi.org/10.1074/jbc.RA119.008154)
- [Saxena and Zou, Hallmarks of DNA replication stress, Molecular Cell, 2022](https://doi.org/10.1016/j.molcel.2022.05.004)
