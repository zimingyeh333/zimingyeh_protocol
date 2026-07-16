# NAD

NAD+（nicotinamide adenine dinucleotide，烟酰胺腺嘌呤二核苷酸；氧化型）是细胞内重要的氧化还原辅酶和信号底物。它既参与糖酵解、三羧酸循环、氧化磷酸化等代谢反应，也被 [PARP1](PARP1.md)、sirtuins（去乙酰化酶家族）和 CD38 等酶消耗，用于 DNA 损伤应答、染色质调控、衰老和免疫代谢。

一句话理解：NAD+ 不只是“能量代谢里的辅酶”，在 DNA 损伤修复语境中，它还是 PARP 生成 PAR 链的原料。

![NAD 与 PARP/HRD 背景](../../z_asset/番外/补充知识/NAD/nad-parp-hrd-context.jpg)

> 图源：[van der Wiel et al., Homologous Recombination Deficiency Scar: Mutations and Beyond—Implications for Precision Oncology, *Cancers*, 2022](https://doi.org/10.3390/cancers14174157)，Figure 1，CC BY 4.0。该图用于提示 NAD+-PARP 反应常在 PARP 抑制剂和 HRD 背景下讨论；它不是 NAD+ 化学结构图。

## NAD+、NADH、NADP+ 和 NADPH

| 名称 | 中文 | 主要理解 |
| --- | --- | --- |
| NAD+ | 氧化型烟酰胺腺嘌呤二核苷酸 | 接受电子，参与氧化反应；也是 PARP/sirtuin 底物 |
| NADH | 还原型 NAD | 携带电子，进入线粒体呼吸链等过程 |
| NADP+ | 氧化型烟酰胺腺嘌呤二核苷酸磷酸 | 与 NAD+ 相似但多一个磷酸，偏合成代谢/抗氧化系统 |
| NADPH | 还原型 NADP | 脂质合成、谷胱甘肽/硫氧还蛋白系统和 ROS 缓冲 |

实验记录中要注意：NAD+ 和 NADH 是一对，NADP+ 和 NADPH 是另一对；不要把 NAD+ 水平下降直接等同于 NADPH 抗氧化能力下降。

## NAD+ 在 PARP 反应中的作用

[聚ADP核糖基化](聚ADP核糖基化.md)过程中，PARP1/2 使用 NAD+ 提供 ADP-ribose 单元，形成 poly(ADP-ribose)（PAR，聚 ADP-核糖）链，同时释放 nicotinamide（烟酰胺）。当 DNA 损伤很强、PARP1 大量激活时，NAD+ 可快速下降，并牵连 ATP 代谢和细胞死亡方式。

这也是为什么在 PARP 实验中，NAD+ 不是一个无关背景变量：

- NAD+ 太低会限制 PAR 生成；
- PARP 过度激活可消耗 NAD+；
- PARP 抑制剂可降低损伤诱导的 NAD+ 消耗；
- NAD+ 代谢改变可能影响 PARP 抑制剂敏感性解释。

NAD+ 代谢与信号功能综述可参考 [Cantó et al., *Cell Metabolism*, 2015](https://doi.org/10.1016/j.cmet.2015.05.023)。

## NAD+ 的主要来源

| 路径 | 核心原料 | 特点 |
| --- | --- | --- |
| de novo synthesis（从头合成） | tryptophan（色氨酸） | 路径长，与犬尿氨酸代谢相连 |
| Preiss-Handler pathway | nicotinic acid（烟酸） | 依赖 NAPRT 等酶 |
| salvage pathway（补救合成） | nicotinamide、NR、NMN 等 | 许多哺乳动物细胞维持 NAD+ 的主要方式 |

多数培养细胞依赖培养基中的烟酰胺、烟酸或相关前体维持 NAD+ 池。因此不同培养基、血清和补充物可能改变 NAD+ 背景。

## 实验中如何观察 NAD+

| 问题 | 推荐读数 | 能回答什么 | 关键限制 |
| --- | --- | --- | --- |
| 总 NAD 是否改变 | NAD+/NADH assay kit、LC-MS | 总量或氧化还原对变化 | 提取和稳定性要求高 |
| PARP 是否消耗 NAD+ | DNA 损伤前后 NAD+、PAR signal | PARP 激活是否牵动代谢池 | 其他 NADase 也会消耗 NAD+ |
| NAD+ 是否影响 PARP 读数 | NAD+、PAR、PARP1 trapping 并行检测 | 底物供应与药物效应关系 | 不能只凭 NAD+ 推断修复能力 |
| 代谢状态是否混淆药敏 | ATP、细胞活性、线粒体读数 | 一般代谢毒性 | 与 DNA 修复特异性要分开 |

## 常见误读与 troubleshooting

| 观察 | 不应立即得出的结论 | 优先排查 |
| --- | --- | --- |
| NAD+ 下降 | 一定是 PARP1 过度激活 | CD38、sirtuins、细胞死亡和提取损失 |
| PAR 信号低 | PARP 抑制剂一定有效 | NAD+ 底物不足、PARG 活性、取样时间 |
| NAD+ 补充后细胞更活 | DNA 修复被特异性增强 | 代谢、线粒体和增殖状态 |
| PARP 抑制剂降低 NAD+ 消耗 | 药物一定保护细胞 | trapping 毒性和长期存活仍需检测 |

## 小结

NAD+ 是把细胞代谢与 DNA 损伤应答接起来的关键分子。理解 PARP1/2、PARylation 和 PARP 抑制剂时，NAD+ 既是反应底物，也是可能影响实验解释的代谢变量。

## 参考来源

- [Cantó et al., NAD+ metabolism and the control of energy homeostasis: a balancing act between mitochondria and the nucleus, *Cell Metabolism*, 2015](https://doi.org/10.1016/j.cmet.2015.05.023)
- [Gibson and Kraus, New insights into the molecular and cellular functions of poly(ADP-ribose) and PARPs, *Nature Reviews Molecular Cell Biology*, 2012](https://doi.org/10.1038/nrm3376)
- [Bai, Biology of poly(ADP-ribose) polymerases: the factotums of cell maintenance, *Molecular Cell*, 2015](https://doi.org/10.1016/j.molcel.2015.01.034)
