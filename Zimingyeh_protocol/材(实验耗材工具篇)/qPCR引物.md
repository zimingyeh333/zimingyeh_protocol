# qPCR引物

qPCR primers（qPCR 引物）是用于 qPCR 或 [RT-qPCR](<../用(实验流程内容篇)/RT-qPCR.md>) 的一对 short oligonucleotides（短寡核苷酸），通常包括 forward primer（正向引物）和 reverse primer（反向引物）。它们决定扩增片段的位置、长度、特异性和扩增效率，是 qPCR 实验质量最核心的变量之一。

![qPCR核心材料参考图](../z_asset/材/qPCR核心材料/qPCR-core-materials-reference.png)

图源：Image2 生成的 qPCR 核心材料参考图；右侧两个白色小管代表正向/反向 qPCR 引物。

## qPCR引物为什么重要

qPCR 的 Cq 值只有在扩增特异且效率合理时才有意义。引物设计不佳会导致非特异扩增、[引物二聚体](<../番外/补充知识/引物二聚体.md>)、效率偏低、重复孔差异大和结果不可重复。

MIQE 指南要求 qPCR 实验报告 primer sequence（引物序列）、amplicon length（扩增片段长度）、扩增效率和特异性验证等信息；这说明引物不是“附属材料”，而是 qPCR 方法的一部分。[参考：MIQE Guidelines](https://academic.oup.com/clinchem/article/55/4/611/5631762)

## 基本设计原则

| 参数 | 常用范围/原则 | 为什么重要 |
| --- | --- | --- |
| Primer length | 常见 18-25 nt | 太短特异性差，太长退火效率可能下降 |
| GC content | 常见 40%-60% | 影响 Tm 和结合稳定性 |
| Tm | 正反向尽量接近 | 避免一条引物效率明显偏低 |
| Amplicon length | RT-qPCR 常见 70-200 bp | 短片段更适合快速高效扩增 |
| 3' end | 避免互补和连续 G/C 过多 | 降低引物二聚体和非特异延伸 |
| Exon junction | 基因表达实验常跨外显子连接 | 降低基因组 DNA 干扰 |
| Specificity | BLAST 或设计工具验证 | 避免扩增同源基因或伪基因 |

IDT 的 qPCR primer design 资料和 Thermo Fisher 的 real-time PCR primer/probe 设计建议都强调，引物特异性、扩增片段长度、Tm 匹配和二聚体风险是设计 qPCR 引物的核心。[参考：IDT qPCR Primer Design](https://www.idtdna.com/pages/education/decoded/article/designing-qpcr-assays)；[参考：Thermo Fisher Real-Time PCR Assay Design](https://www.thermofisher.com/us/en/home/life-science/pcr/real-time-pcr/real-time-pcr-learning-center/real-time-pcr-basics/real-time-pcr-assay-design.html)

## SYBR 与 TaqMan 对引物的不同要求

| 体系 | 引物压力 | 额外要求 |
| --- | --- | --- |
| [SYBR Green qPCR Master Mix](<SYBR Green qPCR Master Mix.md>) | 很高，因为任何双链 DNA 都会发光 | 必须看 [熔解曲线](<../番外/补充知识/熔解曲线.md>) 和产物特异性 |
| [TaqMan探针](TaqMan探针.md) | 高，但探针增加一层特异性 | 引物、探针和 amplicon 必须共同设计 |

SYBR 体系中，引物二聚体也会产生荧光；TaqMan 体系中，非目标产物不一定产生探针信号，但引物竞争仍会影响效率。

## 订购与复溶

### 订购

**怎么做**：确定序列后，选择合适 synthesis scale（合成规模）和 purification（纯化方式）。普通 qPCR 引物通常脱盐或标准纯化即可；特殊低丰度、探针配套或高要求实验可考虑更高纯化等级。

**为什么**：普通引物成本低，但设计版本和序列错误会造成后续大量重复实验浪费。

**注意事项**：

- 记录 target gene、transcript ID、版本和扩增片段。
- 不要只保存引物名字，必须保存序列。
- 订购前检查是否有 SNP、剪接异构体或伪基因问题。

### 复溶和保存

**怎么做**：收到干粉后短暂离心，按供应商给出的 nmol 量用 [nuclease-free water（无核酸酶水）](无核酸酶水.md) 或 TE buffer 配成 stock，例如 100 μM；再稀释工作液，例如 10 μM。

**为什么**：高浓度 stock 减少冻融损耗，工作液便于日常使用。

**注意事项**：

- 使用无核酸酶水和低吸附管。
- stock 和 working solution 分开保存。
- 避免频繁冻融。

### 实验前验证

**怎么做**：用梯度退火温度或标准曲线验证引物效率，检查 NTC、熔解曲线、扩增产物大小或测序确认。

**为什么**：软件设计通过不代表实验一定通过。引物必须在实际样本和实际体系中验证。

**合格目标**：很多 qPCR 实验希望扩增效率在约 90%-110% 范围内，但具体接受标准应按项目和指南设定。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| NTC 有扩增 | 引物二聚体或污染 | 重设计引物，降低引物浓度，清洁分区 |
| 熔解曲线多峰 | 非特异扩增 | 提高退火温度，缩短 amplicon，重设计 |
| 效率低 | 片段太长、二级结构、引物 Tm 不合适 | 重新设计或优化 Mg2+/退火温度 |
| 重复孔差异大 | 加样误差、模板质量差、引物工作液混匀差 | 使用低吸附滤芯吸头，重新稀释工作液 |
| gDNA 干扰 | 引物未跨外显子、RNA 未 DNase 处理 | 设计跨 exon junction，引入 no-RT control |

## 购买与记录建议

常见供应商包括 [IDT](<../番外/试剂厂商/IDT.md>)、[Applied Biosystems](<../番外/试剂厂商/Applied Biosystems.md>)、[Bio-Rad](<../番外/试剂厂商/Bio-Rad.md>)、国内寡核苷酸合成公司等。对个人 protocol 来说，最重要的是记录序列和设计版本，而不是只记供应商。

推荐记录：

```text
Target gene:
Species:
Transcript/reference sequence:
Forward primer name:
Forward primer sequence:
Reverse primer name:
Reverse primer sequence:
Amplicon length:
Exon/exon junction: yes/no
Supplier:
Order ID:
Lot number:
Stock concentration:
Working concentration:
Validated efficiency:
Melt curve result:
```

## 小结

qPCR 引物决定了 qPCR 是否真的在检测目标。SYBR 体系对引物特异性尤其严格；TaqMan 体系也离不开合理引物。任何正式 qPCR 记录都应保存引物序列、扩增片段、效率和特异性验证。

## 参考来源

- [MIQE Guidelines, Clinical Chemistry 2009](https://academic.oup.com/clinchem/article/55/4/611/5631762)
- [IDT Designing qPCR Assays](https://www.idtdna.com/pages/education/decoded/article/designing-qpcr-assays)
- [Thermo Fisher Real-Time PCR Assay Design](https://www.thermofisher.com/us/en/home/life-science/pcr/real-time-pcr/real-time-pcr-learning-center/real-time-pcr-basics/real-time-pcr-assay-design.html)
