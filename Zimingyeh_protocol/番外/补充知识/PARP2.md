# PARP2

PARP2（poly(ADP-ribose) polymerase 2，聚 ADP-核糖聚合酶 2）是 PARP 家族中与 DNA 损伤修复关系最紧密的成员之一。它与 [PARP1](PARP1.md)共享部分底物、修复因子和药物敏感性，但 PARP2 不是“可有可无的小 PARP1”：在基因组稳定性、复制压力、红细胞生成、免疫和代谢背景中都有独立贡献。

一句话理解：PARP2 与 PARP1 有重叠，但它更像一个偏细分场景的修复和染色质调节因子；研究 PARP 抑制剂时不能只测 PARP1 后就默认 PARP2 无关。

![PARP2 与 HRD/PARP 抑制剂背景](../../z_asset/番外/补充知识/PARP2/parp2-hrd-context.jpg)

> 图源：[van der Wiel et al., Homologous Recombination Deficiency Scar: Mutations and Beyond—Implications for Precision Oncology, *Cancers*, 2022](https://doi.org/10.3390/cancers14174157)，Figure 1，CC BY 4.0。该图用于说明 PARP1/2 靶向药物常与 HRD 背景共同讨论；它不是 PARP2 结构或专属功能图。

## 名称与基本定位

PARP2 与 PARP1 都能利用 [NAD+](NAD.md)催化 ADP-ribosylation（ADP-核糖基化），但 PARP2 的结构更小，缺少 PARP1 那种多锌指 DNA 识别模块。它仍可被 DNA 损伤激活，并参与 [聚ADP核糖基化](聚ADP核糖基化.md)、修复因子组织和染色质调节。

PARP1/PARP2 双缺失导致染色体稳定性和胚胎发育严重异常，说明二者存在功能交叉且共同维持基因组完整性。参考：[Ménissier de Murcia et al., *EMBO Journal*, 2003](https://doi.org/10.1093/emboj/cdg096)。

## PARP2 的核心功能

### 与 PARP1 协同处理 DNA 损伤

PARP2 可参与 [碱基切除修复](碱基切除修复.md)、单链断裂修复和复制相关损伤反应。它与 [XRCC1](XRCC1.md)、DNA polymerase β、DNA ligase III 等修复网络存在功能联系。很多情况下，PARP1 承担更快速、更强的早期 PARylation，PARP2 则在部分损伤结构、修复阶段或染色质环境中提供补充。

### 影响复制压力和基因组稳定性

PARP2 对复制相关 DNA 损伤、复制叉稳定和染色体完整性也有贡献。PARP1 与 PARP2 同时受抑制时，细胞对复制压力的承受能力可明显下降，这也是临床 PARP 抑制剂通常不能简单视作“只打 PARP1”的原因之一。

### 参与非修复背景

PARP2 还被报道参与转录、代谢、线粒体相关调控和造血。对于基础实验而言，这意味着 PARP2 敲低/敲除后的生长、分化或代谢表型不一定都来自 DNA 修复改变。

## PARP1 与 PARP2 的直接对比

| 比较轴 | PARP1 | PARP2 |
| --- | --- | --- |
| DNA 损伤诱导 PARylation | 通常贡献最大 | 贡献较小但不可忽视 |
| DNA 结构识别 | 多锌指结构域，快速响应断裂 | 识别模块不同，偏特定 DNA/蛋白环境 |
| 抑制剂靶向 | 临床 PARPi 的主要靶点之一 | 多数临床 PARPi 也会抑制 |
| trapping | 重要毒性来源 | 也可发生，强度和背景依赖不同 |
| 单独缺失表型 | 损伤修复、复制和染色质异常 | 常较温和但有特定组织/发育功能 |
| 双缺失/双抑制 | 严重基因组不稳定和生长缺陷 | 与 PARP1 协同放大表型 |

## 与 PARP 抑制剂的关系

多数常用 [PARP抑制剂](PARP抑制剂.md)同时抑制 PARP1 和 PARP2，因此药物实验中的结果很难天然归因于其中某一个。若要区分 PARP1 与 PARP2，需要使用：

- 单独 PARP1 或 PARP2 敲低/敲除；
- 双敲/双抑制与单敲比较；
- PARP1-selective 或 PARP2-sparing 工具化合物，如果实验条件允许；
- 野生型和催化失活突变体回补；
- PARP1/PARP2 染色质滞留和 PAR 信号的分层读数。

尤其在解释 [PARP捕获](PARP捕获.md)时，要注意“药物造成 PARP1 trapping”不等于 PARP2 完全不参与毒性；只是多数机制图会把 PARP1 画在中心。

## 实验中如何观察 PARP2

| 问题 | 推荐读数 | 能回答什么 | 关键限制 |
| --- | --- | --- | --- |
| PARP2 是否存在 | PARP2 Western blot | 总蛋白、敲低或回补 | 抗体特异性需验证 |
| 是否影响总 PAR | PAR signal、PARylation assay | PARP1/2 综合催化输出 | 总 PAR 常被 PARP1 主导，PARP2 贡献可能被遮盖 |
| 是否参与修复 | XRCC1、γH2AX、复制压力标志 | 修复后果 | 需与 PARP1 分离验证 |
| 是否发生 trapping | 染色质分级、PARP2 chromatin retention | 药物下 PARP2 是否滞留 | 技术难度高，信号可能弱 |
| 是否有特定生物学表型 | 生长、分化、造血/代谢读数 | 非 DNA 修复功能 | 不要自动归因于 HRD 或 SSBR |

## 常见误读与 troubleshooting

| 观察 | 不应立即得出的结论 | 优先排查 |
| --- | --- | --- |
| PARP2 敲低影响很小 | PARP2 没功能 | PARP1 补偿、细胞背景、损伤类型 |
| PARP 抑制剂有效 | 一定由 PARP1 驱动 | PARP2 抑制、trapping、HRD 与复制压力 |
| PAR 信号几乎看不出 PARP2 贡献 | PARP2 不参与修复 | 总 PAR 读数被 PARP1 主导；需分离实验 |
| PARP2 缺失细胞生长慢 | 一定是 DNA 修复缺陷 | 代谢、转录、组织特异功能和克隆适应 |
| PARP1/PARP2 双敲很毒 | 可直接等同临床 PARPi | 遗传缺失与药物抑制/trapping 不完全等价 |

## 小结

PARP2 是 PARP1 的功能伙伴，但不是简单备份。它在 DNA 损伤修复、复制压力和非修复生物学中有独立贡献；解释 PARP 抑制剂实验时，应明确是“PARP1 主导”“PARP1/2 共同贡献”，还是尚未区分靶点来源。

## 参考来源

- [Ménissier de Murcia et al., Functional interaction between PARP-1 and PARP-2 in chromosome stability and embryonic development, *EMBO Journal*, 2003](https://doi.org/10.1093/emboj/cdg096)
- [Gibson and Kraus, New insights into the molecular and cellular functions of poly(ADP-ribose) and PARPs, *Nature Reviews Molecular Cell Biology*, 2012](https://doi.org/10.1038/nrm3376)
- [Murai et al., Trapping of PARP1 and PARP2 by clinical PARP inhibitors, *Cancer Research*, 2012](https://doi.org/10.1158/0008-5472.CAN-12-2753)
- [Lord and Ashworth, PARP inhibitors: Synthetic lethality in the clinic, *Science*, 2017](https://doi.org/10.1126/science.aam7344)
