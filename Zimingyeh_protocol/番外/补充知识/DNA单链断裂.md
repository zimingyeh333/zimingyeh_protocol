# DNA单链断裂

DNA single-strand break（SSB，DNA 单链断裂）指 DNA 双链中只有一条链的磷酸二酯骨架发生断裂，而另一条链仍保持连续。SSB 是细胞中非常常见的 DNA 损伤形式，可来自氧化损伤、碱基切除修复中间体、拓扑异构酶反应失败、复制压力或外源损伤。

一句话理解：SSB 本身通常可被快速修复，但如果在复制时没有被处理，就可能转化为更危险的复制叉崩溃和 DSB。

![SSB 与 PARP/HRD 背景](../../z_asset/番外/补充知识/DNA单链断裂/ssb-parp-hrd-context.jpg)

> 图源：[van der Wiel et al., Homologous Recombination Deficiency Scar: Mutations and Beyond—Implications for Precision Oncology, *Cancers*, 2022](https://doi.org/10.3390/cancers14174157)，Figure 1，CC BY 4.0。该图用于提示 SSB/PARP 轴在 HRD 和 PARP 抑制剂敏感性中的背景意义；它不是 SSB 分子结构图。

## SSB 的基本结构

SSB 不是单一化学结构。断裂末端可能带有不同基团：

| 末端状态 | 对修复的影响 |
| --- | --- |
| 3′-OH 与 5′-phosphate | 相对容易被连接 |
| 3′-phosphate、3′-phosphoglycolate | 需要端处理酶 |
| 5′-OH | 需要磷酸化后才能连接 |
| 蛋白-DNA 加合物 | 需要去除蛋白或切开附近 DNA |

因此，“有 SSB”不等于“马上 ligation（连接）”。末端化学状态决定需要哪些加工因子。

## SSB 从哪里来

### 氧化和自发损伤

活性氧、脱嘌呤/脱嘧啶、碱基损伤和自发水解都可间接产生 SSB。许多 SSB 不是外源处理造成，而是日常代谢压力的一部分。

### BER 中间体

[碱基切除修复](碱基切除修复.md)过程中，DNA glycosylase（DNA 糖基化酶）去除异常碱基，AP endonuclease（AP 内切酶）切开骨架，形成带缺口或 nick（切口）的中间体。如果后续填补和连接受阻，这些中间体会表现为 SSB。

### 拓扑异构酶相关损伤

Topoisomerase I（拓扑异构酶 I）正常会形成瞬时单链切口并重新连接；如果反应被药物或 DNA 结构阻断，可形成 Top1-DNA adduct（Top1-DNA 加合物）和 SSB 样损伤。

## SSB 修复的核心流程

典型 single-strand break repair（SSBR，单链断裂修复）可概括为：

1. 损伤识别：[PARP1](PARP1.md)/PARP2 快速结合 SSB 或缺口结构。
2. 信号组织：PARP 催化 [聚ADP核糖基化](聚ADP核糖基化.md)，招募 [XRCC1](XRCC1.md)等支架因子。
3. 末端加工：[PNKP](PNKP.md)、[APTX](APTX.md) 等处理异常 3′/5′ 末端。
4. 缺口填补：[DNA聚合酶β](DNA聚合酶β.md)等补入核苷酸。
5. 连接：[DNA连接酶III](DNA连接酶III.md)等完成磷酸二酯键连接。

SSBR 机制综述可参考 [Caldecott, *Nature Reviews Genetics*, 2008](https://doi.org/10.1038/nrg2380)。

## 为什么 SSB 会和 DSB/HRD 联系起来

未修复 SSB 在非复制细胞中可能造成转录阻碍和持续损伤信号；在 S 期复制叉遇到 SSB 或缺口时，则可能形成 one-ended DSB（单端 DSB）或复制叉崩溃。此时细胞常需要 [同源重组](同源重组.md)相关机制处理。

这就是 PARP 抑制剂和 [同源重组缺陷](同源重组缺陷.md)之间的关键桥梁：PARP 抑制削弱 SSB/缺口处理并可造成 PARP trapping；HRD 细胞又无法高效处理复制相关断裂，二者叠加形成选择性脆弱性。

## 实验中如何观察 SSB

| 问题 | 推荐读数 | 能回答什么 | 关键限制 |
| --- | --- | --- | --- |
| DNA 是否有断裂 | alkaline comet assay | 对 SSB 和碱敏感位点敏感 | 不特异区分损伤来源 |
| PARP 是否响应 | PARP1 recruitment、PAR signal | SSB/缺口诱导 PARP 活化 | PAR 也可由其他结构触发 |
| SSBR 因子是否募集 | XRCC1 foci、PNKP/APTX 读数 | 修复平台是否建立 | focus 不等于修复完成 |
| 是否转化为复制压力 | p-RPA、p-CHK1、γH2AX | S 期后果 | 需配合 EdU/Cyclin A 分层 |
| 长期后果 | 克隆形成、突变/染色体异常 | 修复失败是否影响存活 | 多通路共同影响 |

## 常见误读与 troubleshooting

| 观察 | 不应立即得出的结论 | 优先排查 |
| --- | --- | --- |
| alkaline comet 增加 | 全部都是 SSB | AP site、碱敏感位点、DSB 和实验条件 |
| PARP1 快速募集 | 只存在简单 SSB | 缺口、DSB 末端和异常 DNA 结构 |
| γH2AX 增加 | 初始损伤一定是 DSB | SSB 在复制中转化为 DSB/复制压力 |
| XRCC1 focus 多 | 修复效率高 | 可能是损伤多或修复滞留 |

## 小结

SSB 是常见但不能轻视的 DNA 损伤。它的危险性取决于末端化学、修复速度和细胞周期：非复制状态下主要是局部修复问题，复制状态下则可能升级为复制叉崩溃和 DSB，成为 PARP 抑制剂与 HRD 合成致死逻辑的起点。

## 参考来源

- [Caldecott, Single-strand break repair and genetic disease, *Nature Reviews Genetics*, 2008](https://doi.org/10.1038/nrg2380)
- [Lindahl and Barnes, Repair of endogenous DNA damage, *Cold Spring Harbor Symposia on Quantitative Biology*, 2000](https://doi.org/10.1101/sqb.2000.65.127)
- [Lord and Ashworth, PARP inhibitors: Synthetic lethality in the clinic, *Science*, 2017](https://doi.org/10.1126/science.aam7344)
