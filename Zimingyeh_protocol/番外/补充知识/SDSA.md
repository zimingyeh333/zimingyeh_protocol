# SDSA

SDSA（synthesis-dependent strand annealing，合成依赖性链退火）是 [同源重组](同源重组.md) 中常见的非交换型修复路径：经过末端切除的 3′ DNA 侵入同源双链模板并启动修复合成，随后新生链从模板退出，与原断裂的另一端退火，最终完成补缺和连接。

![同源重组修复的三种结局](../../z_asset/番外/补充知识/同源重组结局/sdsa-dhj-bir-outcomes.png)

图：RAD51 介导链侵入并形成 D-loop 后，可以进入 SDSA、双 Holliday 连接体相关修复或 BIR。SDSA 的标志是新生链在第二断端捕获前退出供体，与另一断端退火，因此标准模型形成 noncrossover gene conversion（非交换型基因转换）。本图由 Image2 / image-generation model 生成，用于个人学习示意。

## 名称最容易与什么混淆

| 缩写 | 英文全称 | 中文名称 | 是否链侵入同源双链模板 | 典型结局 |
| --- | --- | --- | --- | --- |
| SDSA | synthesis-dependent strand annealing | 合成依赖性链退火 | 是 | 非交换型基因转换 |
| [SSA](单链退火.md) | single-strand annealing | 单链退火 | 否 | 删除两侧重复序列之间的区段 |
| [SSTR](SSTR.md) | single-strand template repair | 单链模板修复 | 通常使用 ssODN，机制不等同经典 RAD51-HR | 小范围模板指导编辑 |

SDSA 中的 annealing 指“已经从供体复制信息的新生链”与原断裂另一端退火；SSA 则是断裂两侧原有重复序列直接退火。两者底物和遗传结果完全不同。

## 概念是如何提出的

经典 double-strand-break repair model（双链断裂修复模型）强调第二断端捕获和双 Holliday 连接体，但许多体细胞修复事件形成 gene conversion（[基因转换](基因转换.md)）而不伴随 crossover（交换）。

Nassif 等利用果蝇 P 元件切除后的缺口修复发现，断裂两端可独立侵入模板、复制序列，再通过重叠新生链配对完成修复；他们据此提出 SDSA 模型。参考：[Nassif et al., Molecular and Cellular Biology, 1994](https://doi.org/10.1128/mcb.14.3.1613-1625.1994)。

## 基本机制

### 末端切除与 RAD51 核蛋白丝形成

[DNA双链断裂](DNA双链断裂.md)两端发生 5′ end resection（5′ 端切除），形成 RPA 包被的 3′ single-stranded DNA（3′ 单链 DNA）。BRCA2 随后促进 RAD51 取代 RPA，建立可进行 homology search（同源搜索）的 RAD51 nucleoprotein filament（RAD51 核蛋白丝）。

### 链侵入和 D-loop 形成

一个 3′ 末端侵入完整同源双链模板，形成 D-loop（displacement loop，置换环）。侵入端成为 DNA polymerase（DNA 聚合酶）的引物，复制模板序列。

### 新生链从模板退出

这是 SDSA 与 dHJ 路径的关键分界。延伸后的 nascent strand（新生链）从供体模板中被置换出来，不进行稳定的 second-end capture（第二断端捕获）。D-loop 解离可由不同 helicase（解旋酶）和调节因子促进，但具体依赖具有物种、细胞和 reporter 差异。

果蝇 BLM 缺失会降低 SDSA 修复合成并增加大缺失，支持 BLM 在该体系中促进 SDSA。参考：[Adams et al., Science, 2003](https://doi.org/10.1126/science.1077198)。然而人细胞 reporter 中，降低 BLM 或 RTEL1 反而可增加检测到的 SDSA，说明不能把某一模型生物的方向性结果写成普适规则。参考：[Zapotoczny and Sekelsky, G3, 2017](https://doi.org/10.1534/g3.116.037390)。

### 与第二断端退火

新生链中已经复制的序列与原断裂另一端的互补单链区域退火。若一次合成尚未产生足够重叠，断端可能经历多轮侵入、合成和退出，直到出现可退火序列。

### 补缺和连接

退火后仍存在的缺口被继续合成，非同源尾端被处理，DNA ligase（DNA 连接酶）恢复骨架连续性。供体只提供信息，不与受体染色体交换完整两侧染色体臂。

## 为什么标准 SDSA 不产生 crossover

SDSA 的侵入链在形成稳定双 Holliday 连接体前退出模板。由于没有需要按不同方向切解的双连接体，供体与受体两侧 marker（标记）不会发生互换，所以标准结局是 noncrossover gene conversion。

但“检测到非交换型基因转换”不能反向证明一定经过 SDSA：双 [Holliday连接体](Holliday连接体.md)经过 dissolution（溶解）或特定方向 resolution（切解）也可产生 noncrossover。最终 DNA 序列相同，不代表中间体相同。

## 基因转换区如何形成

若供体与受体在同源区域存在 sequence variant（序列差异），供体信息被复制并经 mismatch repair（错配修复）固定后，可形成 conversion tract（转换区）。转换区可能只覆盖切口附近，也可能延伸更远；其长度受修复合成距离、异源性、错配修复和中间体处理影响。

若使用完全相同的姐妹染色单体，SDSA 可恢复序列却不留下可见遗传标记。因此“没有检测到变化”既可能是没有修复，也可能是完成了不可区分的同源修复。

## SDSA 与其他 HR 结局对比

| 特征 | SDSA | dHJ repair | [BIR](BIR.md) |
| --- | --- | --- | --- |
| 常见底物 | 有两个可配对断端的 DSB | 有两个可捕获断端的 DSB | one-ended break（单端断裂）或只有一端能找到同源模板 |
| 第二断端处理 | 新生链退出后与第二端退火 | 捕获第二端并形成双连接体 | 不要求第二断端捕获 |
| 合成范围 | 通常局部到中等长度 | 通常围绕断裂区域 | 可进行长距离复制 |
| crossover | 标准模型不产生 | resolution 可产生；dissolution 不产生 | 通常为非互惠复制，可造成 LOH/CNV |
| 主要风险 | conversion tract、模板选择和局部错误 | crossover、未解连接体和染色体分离问题 | 高突变、模板切换和结构变异 |

## 与 CRISPR 精准编辑的关系

双链供体参与 [HDR](HDR.md) 时，某些精准敲入事件可能采用 SDSA-like（SDSA 样）过程：基因组断端侵入供体并复制目标序列，再回到另一基因组断端。但仅凭正确 knock-in 序列，不能区分 SDSA、dHJ 相关修复或其他模板指导机制。

供体设计仍应关注：

- 切口与目标改变距离。
- 同源臂是否匹配实际细胞基因型。
- 编辑后是否阻断 Cas9 再切割。
- conversion tract 是否能同时覆盖多个预定改变。
- 是否存在供体随机整合、部分整合或骨架整合。

## 如何研究或识别 SDSA

| 方法 | 可提供的信息 | 局限 |
| --- | --- | --- |
| gap-repair reporter（缺口修复报告系统） | 分离非交换型修复和未修复结果 | 人工底物的同源臂、染色质和选择压力与内源位点不同 |
| 双荧光 crossover reporter | 同时区分 gene conversion 与 crossover | 读出依赖 reporter 设计，不能直接看到每个分子中间体 |
| donor marker mapping（供体标记作图） | 测量转换区和共转换 | 需要预先布置可区分标记，错配修复会改变结果 |
| 2D gel / physical intermediate assay | 在合适体系中观察 D-loop 或连接体 | 中间体短暂、丰度低，且样品处理可能改变结构 |
| 长读长/单克隆测序 | 描述最终等位基因和复杂整合 | 终产物通常不能唯一反推出 SDSA 机制 |

## 常见误读与 troubleshooting

| 观察 | 容易产生的误读 | 优先检查 |
| --- | --- | --- |
| 非交换型修复占多数 | 所有事件都经过 SDSA | dHJ dissolution、reporter 分类规则和其他模板修复 |
| RAD51 焦点明显 | SDSA 已完成 | RAD51 只说明募集/成丝，不能证明新生链退出和退火 |
| 供体一个标记进入、另一个未进入 | 供体合成错误 | 转换区边界、标记间距和错配修复 |
| 抑制某解旋酶后 SDSA 上升 | 该蛋白普遍抑制 SDSA | 物种、细胞周期、reporter 底物及 crossover 分流 |
| 正确 junction 伴随异常表型 | SDSA 本身无误 | 另一等位基因、随机整合、LOH 和远端结构变化 |

## 小结

SDSA 通过“链侵入—修复合成—新生链退出—第二端退火”完成非交换型同源修复。它解释了大量不伴随 crossover 的基因转换，但相同终产物也可能由其他 HR 中间体处理产生，因此可靠机制结论需要 reporter、遗传依赖或物理中间体证据，而不能只看一条正确序列。

## 参考来源

- [Nassif et al., Efficient copying of nonhomologous sequences from ectopic sites via P-element-induced gap repair, Molecular and Cellular Biology, 1994](https://doi.org/10.1128/MCB.14.3.1613-1625.1994)
- [Adams et al., Drosophila BLM in double-strand break repair by synthesis-dependent strand annealing, Science, 2003](https://doi.org/10.1126/science.1077198)
- [Zapotoczny and Sekelsky, Human Cell Assays for Synthesis-Dependent Strand Annealing and Crossing over During Double-Strand Break Repair, G3, 2017](https://doi.org/10.1534/g3.116.037390)
