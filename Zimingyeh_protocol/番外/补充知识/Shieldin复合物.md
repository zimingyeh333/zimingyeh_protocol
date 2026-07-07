# Shieldin复合物

Shieldin complex（Shieldin 屏蔽蛋白复合物）是由 SHLD1、SHLD2、SHLD3 与 REV7/MAD2L2 组成的 single-stranded DNA-binding complex（单链 DNA 结合复合物）。它位于 [53BP1](53BP1.md)–[RIF1](RIF1.md) 轴下游，结合已经暴露的短 ssDNA，限制 [DNA 末端切除](DNA末端切除.md)继续扩展，并通过 [CST复合物](CST复合物.md)–DNA polymerase α（Pol α，DNA 聚合酶 α）回填使断端更适合末端连接。

Shieldin 不是一种 DNA 连接酶，也不是完全阻止任何切除的实体盖子。它在短 ssDNA 已经出现后组织保护与回填；最终连接仍由 classical non-homologous end joining（c-NHEJ，经典非同源末端连接）机器完成。

![RNF168-53BP1-RIF1-Shieldin末端保护级联](../../z_asset/番外/补充知识/RNF168-RIF1-Shieldin轴/rnf168-rif1-shieldin-end-protection.png)

图：RNF168 建立 H2AK13/15ub 后，53BP1–RIF1 招募 Shieldin。SHLD2 接触 3′ ssDNA；复合物一方面限制 EXO1/DNA2 继续切除，另一方面募集 CST–Pol α 回填，使断端趋向受保护或近钝端状态并进入 c-NHEJ。BRCA1 缺陷细胞丢失 Shieldin 时，切除和 RAD51 装载可能恢复并产生 PARP 抑制剂耐药，但这不等于 BRCA1 全部功能恢复。本图由 Image2 / image-generation model 生成，用于个人学习示意。

## Shieldin 的发现逻辑

Shieldin 并不是先由经典生化纯化发现的。2018 年多个团队通过 BRCA1 缺陷细胞的 PARP inhibitor resistance screen（PARP 抑制剂耐药筛选）、蛋白互作组学和 DNA 修复遗传学，几乎同时识别出这一复合物。

这些结果解释了一个长期问题：53BP1 与 RIF1 位于损伤染色质上，但如何把“染色质支架”转换为对 ssDNA 末端的直接保护？Shieldin 提供了靠近断端的执行层。关键发现见 [Noordermeer et al., Nature, 2018](https://doi.org/10.1038/s41586-018-0340-7)；[Dev et al., Nature Cell Biology, 2018](https://doi.org/10.1038/s41556-018-0140-1)。

## 四个亚基并不是四份相同功能

| 亚基 | 历史/其他名称 | 主要作用 | 解释边界 |
| --- | --- | --- | --- |
| SHLD1 | C20orf196 | 稳定 Shieldin 装配，并与 SHLD2 区域连接 | SHLD1 丢失常使整个复合物不稳定，不宜只解释为单一界面缺陷 |
| SHLD2 | FAM35A | C 端 oligonucleotide/oligosaccharide-binding folds（OB-folds，寡核苷酸/寡糖结合折叠）结合 ssDNA | 是直接 DNA 结合核心，但单独 SHLD2 不等于完整 Shieldin |
| SHLD3 | CTC-534A2.2/RINN1 | 连接 53BP1–RIF1 路径与 REV7，并组织复合物装配 | SHLD3 focus 不能证明 SHLD2 DNA 结合正常 |
| REV7 | MAD2L2 | HORMA-domain（HORMA 结构域）构象支架，与 SHLD3/SHLD2 形成装配核心 | REV7 还参与 Pol ζ 跨损伤合成等其他复合物，REV7 表型不全是 Shieldin 表型 |

结构研究显示 SHLD3 可组织不同构象的 REV7，并与 SHLD2 形成装配核心；破坏该界面会削弱 Shieldin 与 NHEJ。参考：[Liang et al., Nature Communications, 2020](https://doi.org/10.1038/s41467-020-15879-5)。

## Shieldin 如何到达断端

Shieldin 的经典募集顺序是：

- RNF168 写入 H2AK15ub，53BP1 在 H4K20me2 背景下读取损伤核小体。
- [ATM](ATM通路.md) 磷酸化 53BP1 N 端位点。
- RIF1 被募集到磷酸化 53BP1 平台。
- SHLD3–REV7–SHLD2–SHLD1 完成 Shieldin 装配。
- SHLD2 OB-folds 结合短 ssDNA，使复合物靠近已发生有限切除的断端。

这是层级依赖关系，不表示每一步都是唯一的直接一对一结合。实验上应通过 epistasis（上位性）与界面突变区分“上游因子缺失导致下游不来”和“下游复合物自身装配失败”。

## 两种限制切除的机制

### 结合 ssDNA 并限制进一步核酸酶处理

SHLD2 对 ssDNA 的直接结合可减少 EXO1、DNA2 等长程切除系统继续扩展。Shieldin 更适合在已经形成短 3′ overhang（3′ 突出端）后工作，而不是在完全未加工的双链钝端上充当物理帽。

SHLD2 OB-folds 直接结合 ssDNA 且该能力对 53BP1 依赖修复重要的证据见 [Noordermeer et al., Nature, 2018](https://doi.org/10.1038/s41586-018-0340-7)。

### 招募 CST–Pol α 进行回填合成

CST（CTC1–STN1–TEN1）可结合 Shieldin 相关末端并募集 Pol α–primase（DNA 聚合酶 α–引物酶）。局部 fill-in synthesis（回填合成）减少 3′ ssDNA 的长度，使断端更接近 c-NHEJ 可处理状态。参考：[Mirman et al., Nature, 2018](https://doi.org/10.1038/s41586-018-0324-7)。

“限制切除”和“回填已经切出的 ssDNA”在终点上都表现为 ssDNA 减少，但机制不同：

| 机制 | 直接动作 | 优先验证 |
| --- | --- | --- |
| 防止进一步切除 | 限制 EXO1/DNA2 等继续推进 | 核酸酶依赖、END-seq 切除长度、SHLD2 DNA 结合突变 |
| CST–Pol α 回填 | 在短 ssDNA 上合成 DNA | CST/Pol α 依赖、DNA synthesis mapping、末端序列产物 |

## 生理作用与有害作用取决于断裂场景

Shieldin 支持的末端保护可用于：

- immunoglobulin class switch recombination（CSR，免疫球蛋白类别转换重组）中的远端断端连接。
- dysfunctional telomeres（失去保护的端粒）发生 53BP1 依赖融合。
- 特定结构断端的 c-NHEJ 和染色体断裂修复。

但在 BRCA1 缺陷 S 期细胞中，同一轴可能阻断本应进入 HR 的断端，造成有毒 NHEJ、染色体畸变和细胞死亡。Shieldin 不是普遍“保护基因组”或普遍“制造错误”的因子，必须说明断端、细胞周期和遗传背景。

## BRCA1 缺陷与药物反应

BRCA1 缺陷细胞通常切除不足、RAD51 装载受阻，对 [PARP抑制剂](PARP抑制剂.md)敏感。失去 SHLD1/2/3 或 REV7 可：

- 增加 RPA 包被 ssDNA 与 RAD51 focus。
- 部分恢复 HR reporter。
- 降低 PARP 抑制剂敏感性，形成遗传性耐药。

然而药物反应并不统一。Shieldin 缺失可能恢复 PARP 抑制剂耐受，却在某些 BRCA1 缺陷模型中进一步增加 [cisplatin（顺铂）](<../../材(实验耗材工具篇)/顺铂.md>)敏感性。不同药物造成的损伤、复制叉负担和细胞死亡机制不同，不能把“HR 部分恢复”直接等同于对所有 DNA 损伤剂耐药。参考：[Dev et al., Nature Cell Biology, 2018](https://doi.org/10.1038/s41556-018-0140-1)。

## Shieldin、CST 与核心 NHEJ 的区别

| 因子/复合物 | 主要作用 | 是否直接连接 DNA |
| --- | --- | --- |
| Shieldin | 结合 ssDNA、限制切除、募集 CST | 否 |
| CST–Pol α | 回填短 ssDNA、改变断端结构 | 否；执行 DNA 合成 |
| Ku–DNA-PK | 识别、保护和桥接 DNA 断端 | 不完成最终共价连接 |
| XRCC4–LIG4 | 最终 DNA 末端连接复合物 | 是，由 LIG4 催化磷酸二酯键形成 |

## 实验中如何观察 Shieldin

| 问题 | 推荐读数 | 能回答什么 | 关键限制 |
| --- | --- | --- | --- |
| 亚基是否表达 | [Western blot](<../../用(实验流程内容篇)/Western blot.md>) | SHLD1/2/3、REV7 总量与稳定性 | 一个亚基缺失可能连带降低其他亚基 |
| 复合物是否装配 | [免疫共沉淀](<../../用(实验流程内容篇)/免疫共沉淀.md>)、内源标签、size-exclusion | 亚基间界面 | REV7 还存在于其他复合物，需验证 Shieldin 特异伙伴 |
| 是否到达 DSB | [免疫荧光](<../../用(实验流程内容篇)/免疫荧光.md>)、[激光微照射](<../../用(实验流程内容篇)/激光微照射.md>) | 53BP1/RIF1 依赖募集 | 低丰度、抗体质量和过表达标签可影响焦点 |
| ssDNA 结合是否正常 | purified-protein binding、SHLD2 OB-fold 突变 | 直接 DNA 结合能力 | 游离寡核苷酸不能完整代表染色质断端 |
| 切除/回填是否改变 | RPA、native BrdU、[END-seq](<../../用(实验流程内容篇)/END-seq.md>) | ssDNA 比例与切除长度 | 仅看 RPA 不能区分“少切除”和“多回填” |
| HR/NHEJ 是否改变 | DR-GFP/EJ5-GFP [报告基因实验](<../../用(实验流程内容篇)/报告基因实验.md>) | 指定断裂的通路输出 | 不能替代全基因组修复产物分析 |
| 是否产生耐药 | [CRISPR筛选](<../../用(实验流程内容篇)/CRISPR筛选.md>)、克隆形成 | BRCA1 背景下 PARP 抑制剂选择优势 | dropout/富集命中需单克隆回补验证 |
| 最终产物是什么 | amplicon/long-read [测序](<../../用(实验流程内容篇)/测序.md>) | indel、缺失、串联重复和易位 | 只测存活不能判断修复准确性 |

### 推荐的证据组合

- 同时检测四个亚基，不把 REV7 总量当作完整 Shieldin 的替代指标。
- 使用 SHLD2 DNA-binding mutant（DNA 结合突变体）与野生型回补区分装配和 ssDNA 结合。
- 配对观察 53BP1/RIF1 focus、Shieldin focus、RPA/RAD51 与 END-seq。
- 将 HR/NHEJ reporter、克隆形成和最终测序产物一起解释。
- 药物实验分别测 PARP 抑制剂、顺铂等，不从一种药物外推全部 DNA 损伤反应。

## 常见误读与 troubleshooting

| 观察 | 不应立即得出的结论 | 优先排查 |
| --- | --- | --- |
| REV7 蛋白正常 | Shieldin 一定完整 | SHLD1/2/3、REV7 构象和复合物装配 |
| Shieldin focus 减少 | 亚基一定不表达 | 53BP1、RIF1、ATM 磷酸化、抗体和标签位置 |
| RPA 增加 | HR 已完整恢复 | RAD51、PALB2/BRCA2、HR reporter 与产物准确性 |
| PARP 抑制剂耐药 | 对顺铂也会耐药 | 损伤类型、复制叉、细胞死亡和药物特异反应 |
| END-seq ssDNA 减少 | 核酸酶一定被直接抑制 | CST–Pol α 回填、细胞周期与断端回收时点 |

## 小结

Shieldin 是把 53BP1–RIF1 染色质信号转化为 ssDNA 末端保护的四亚基复合物。它通过 SHLD2 结合 ssDNA，并通过限制长程切除与募集 CST–Pol α 回填共同塑造可连接断端；实验上必须把亚基装配、DNA 结合、切除、回填、HR/NHEJ 产物和药物反应分层验证。

## 参考来源

- [Noordermeer et al., The Shieldin complex mediates 53BP1-dependent DNA repair, Nature, 2018](https://doi.org/10.1038/s41586-018-0340-7)
- [Dev et al., Shieldin complex promotes DNA end-joining and counters homologous recombination in BRCA1-null cells, Nature Cell Biology, 2018](https://doi.org/10.1038/s41556-018-0140-1)
- [Ghezraoui et al., 53BP1 cooperation with the REV7-shieldin complex underpins DNA structure-specific NHEJ, Nature, 2018](https://doi.org/10.1038/s41586-018-0362-1)
- [Mirman et al., 53BP1-RIF1-shieldin counteracts DSB resection through CST- and Polα-dependent fill-in, Nature, 2018](https://doi.org/10.1038/s41586-018-0324-7)
- [Gao et al., An OB-fold complex controls the repair pathways for DNA double-strand breaks, Nature Communications, 2018](https://doi.org/10.1038/s41467-018-06407-7)
- [Liang et al., Molecular basis for assembly of the shieldin complex and its implications for NHEJ, Nature Communications, 2020](https://doi.org/10.1038/s41467-020-15879-5)
