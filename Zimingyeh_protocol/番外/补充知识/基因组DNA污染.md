# 基因组DNA污染

Genomic DNA contamination（基因组 DNA 污染，常写作 gDNA contamination）是指 RNA 样本中残留了基因组 DNA，导致 [RT-qPCR](<../../用(实验流程内容篇)/RT-qPCR.md>) 可能检测到 DNA 模板而不是 RNA 逆转录得到的 cDNA。

## 一句话理解

基因组 DNA 污染会让“RNA 表达检测”混进“DNA 模板扩增”。

MIQE 指南强调 RT-qPCR 需要报告 RNA 质量、DNase 处理、引物设计和阴性对照，因为 gDNA 污染会直接影响表达定量。参考：[MIQE guidelines, Clinical Chemistry 2009](https://academic.oup.com/clinchem/article/55/4/611/5631762)。

## 为什么会有 gDNA 污染

| 来源 | 说明 |
| --- | --- |
| RNA 提取时 DNA 未充分去除 | 裂解液中同时释放 RNA 和 DNA |
| 柱式提取未做 DNase | 柱膜可能保留部分 DNA |
| 样本量过多 | 柱膜或试剂容量超载 |
| 组织裂解不充分 | DNA/RNA 分离不彻底 |
| DNase 处理不足 | 酶量、时间或 buffer 不合适 |

RNA 提取并不天然等于 DNA 完全消失。尤其是高细胞量、组织样本、无内含子基因或假基因丰富目标，更需要关注 gDNA。

## 如何发现 gDNA 污染

| 方法 | 判断逻辑 |
| --- | --- |
| [无逆转录对照](无逆转录对照.md) | 没有逆转录酶仍扩增，提示 DNA 模板 |
| 引物跨内含子 | gDNA 产物更长或不扩增 |
| 熔解曲线 | gDNA 产物可能有不同 Tm |
| 胶图 | gDNA 产物可能大小不同 |
| DNase 前后比较 | DNase 后 Cq 变化提示 DNA 干扰 |

如果 no-RT 的 Cq 与正常 RT 样本很接近，说明 DNA 污染已经足以严重影响表达解释。

## 哪些目标更容易受影响

| 目标类型 | 风险 |
| --- | --- |
| 无内含子基因 | 引物容易同样扩增 gDNA |
| 假基因丰富基因 | 可能扩增假基因 DNA |
| 低表达目标 | 少量 gDNA 就能造成假阳性 |
| 内参基因 | 常高表达，容易忽略 no-RT 信号 |
| 病毒或质粒相关实验 | DNA 残留可能与目标模板混淆 |

## 预防策略

| 策略 | 说明 |
| --- | --- |
| [DNase I](<../../材(实验耗材工具篇)/DNase I.md>) 处理 | 直接降解残留 DNA |
| on-column DNase digestion | 柱上 DNase 消化，流程稳定 |
| 设计跨 exon-exon junction 的 [qPCR引物](<../../材(实验耗材工具篇)/qPCR引物.md>) | 优先扩增剪接 cDNA |
| 设计跨长 intron 的扩增子 | gDNA 产物过长，不易扩增 |
| 设置 no-RT | 每批 RNA 判断 DNA 残留 |
| 控制样本输入量 | 避免提取体系过载 |

DNase 处理后要按说明书灭活或纯化，否则残留 DNase buffer、盐或 EDTA 可能影响后续逆转录和 qPCR。

## no-RT 结果怎么解释

| no-RT 表现 | 解释 |
| --- | --- |
| 无 Cq | 未见明显 DNA 扩增 |
| 很晚 Cq | 少量 DNA 或非特异信号，需看目标重要性 |
| 与 RT 样本差距小 | DNA 污染严重，结果不可靠 |
| NTC 同时阳性 | 还可能存在 qPCR 配液污染 |
| 熔解峰与目标一致 | 更需要怀疑 gDNA 或目标污染 |

## 常见错误与 troubleshooting

| 异常 | 可能原因 | 调整方向 |
| --- | --- | --- |
| no-RT 阳性 | gDNA 残留 | DNase 处理或重新提取 |
| DNase 后目标 Cq 明显变晚 | 原结果部分来自 gDNA | 重新分析，不直接比较前后混合数据 |
| DNase 后 RNA 降解 | 处理条件不当或 RNase 污染 | 使用 RNase-free 条件和合适试剂盒 |
| 引物无法避开 gDNA | 目标无内含子或设计受限 | 使用 probe、设计特异区域或加强 no-RT 判断 |
| 低表达目标假阳性 | gDNA 少量残留 | 提高 RNA 纯化质量并设置严格 cutoff |

## 记录模板

中文记录：

```text
样本名称：
RNA 提取方法：
样本输入量：
是否 DNase 处理：
DNase 方式：柱上 / 溶液中 / 无
目标基因：
引物是否跨 exon-exon junction：
正常 RT Cq：
no-RT Cq：
NTC Cq：
熔解曲线：
是否判定 gDNA 污染：
处理方式：
备注：
```

English record:

```text
Sample name:
RNA extraction method:
Sample input:
DNase treatment: yes / no
DNase mode: on-column / in-solution / none
Target gene:
Primer spans exon-exon junction: yes / no
RT Cq:
No-RT Cq:
NTC Cq:
Melt curve:
gDNA contamination suspected: yes / no
Action taken:
Notes:
```

## 小结

基因组 DNA 污染会把 RT-qPCR 的 RNA 表达结果变成混合模板结果。可靠的表达实验应同时使用合理引物设计、DNase 处理策略和 no-RT 对照。

## 参考来源

- [MIQE guidelines, Clinical Chemistry 2009](https://academic.oup.com/clinchem/article/55/4/611/5631762)
- [Thermo Fisher qPCR assay design](https://www.thermofisher.com/us/en/home/life-science/pcr/real-time-pcr/real-time-pcr-learning-center/real-time-pcr-basics/real-time-pcr-assay-design.html)
- [IDT qPCR Primer Design](https://www.idtdna.com/pages/education/decoded/article/designing-qpcr-assays)
