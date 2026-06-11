# PCR抑制剂

PCR inhibitor（PCR 抑制剂）是指会降低或阻断 DNA polymerase（DNA 聚合酶）扩增能力的物质；在 qPCR 和 [RT-qPCR](<../../用(实验流程内容篇)/RT-qPCR.md>) 中，PCR 抑制剂会导致 [Cq值](Cq值.md) 偏高、[扩增效率](扩增效率.md) 下降、复孔波动增大，甚至完全无扩增。

## 一句话理解

PCR 抑制剂让“模板明明存在，但聚合酶跑不动”。

MIQE 指南强调 qPCR 实验需要报告样本处理、核酸质量、反应条件和对照，因为样本制备残留物和样本基质会影响扩增结果。参考：[MIQE guidelines, Clinical Chemistry 2009](https://academic.oup.com/clinchem/article/55/4/611/5631762)。

## 常见来源

| 来源 | 常见抑制物 | 典型场景 |
| --- | --- | --- |
| RNA/DNA 提取残留 | 酚、氯仿、乙醇、胍盐、高盐 | TRIzol、柱式提取清洗不充分 |
| 生物样本基质 | 血红素、肝素、胆汁盐、多糖、腐殖酸 | 血液、粪便、土壤、植物样本 |
| 组织成分 | 脂质、胶原、多酚、多糖 | 脂肪组织、植物、纤维化组织 |
| 反应条件 | EDTA 过量、pH 异常、Mg2+ 不合适 | 缓冲体系不兼容 |
| 下游操作 | 过量模板、盐残留、冻融降解物 | 未稀释 cDNA 或样本过载 |

PCR 抑制剂不一定完全阻断反应。更常见的是让 Cq 整体偏高、低丰度目标丢失、标准曲线低效率或复孔差异变大。

## 如何判断存在抑制

| 证据 | 解释 |
| --- | --- |
| 样本稀释后 Cq 变化反而更合理 | 抑制物被稀释 |
| 标准曲线效率偏低 | PCR 反应不充分 |
| 内参基因也整体偏高 | 不是单一目标基因问题 |
| 加入外源 spike-in 后回收差 | 样本基质抑制扩增 |
| 纯水或标准品体系正常，样本体系异常 | 问题更可能来自样本 |
| A260/A230 很低 | 可能有酚、盐或有机物残留 |

Thermo Fisher 的核酸定量资料把 A260/A280 和 A260/A230 作为判断核酸纯度的常用指标；A260/A230 偏低常提示有机物、盐或胍盐等污染残留。参考：[Thermo Fisher nucleic acid quantitation](https://www.thermofisher.com/cn/zh/home/references/ambion-tech-support/rna-tools-and-calculators/nucleic-acid-quantitation.html)。

## 常见排查策略

| 策略 | 目的 | 注意 |
| --- | --- | --- |
| 稀释模板 | 稀释抑制物 | 目标太低时可能同时稀释掉模板 |
| 重新纯化 RNA/cDNA | 去除盐、酚、乙醇等残留 | 可能损失样本 |
| 延长柱洗涤或充分干膜 | 减少乙醇和盐残留 | 不要过度干燥导致洗脱差 |
| 更换提取方法 | 适配特殊样本 | 脂肪、植物、粪便等需专门方案 |
| 使用 spike-in control | 判断样本是否抑制扩增 | 需要提前设计 |
| 优化反应体系 | 提高体系耐受性 | 不应掩盖严重污染 |

## PCR 抑制 vs 模板少

| 项目 | PCR 抑制 | 模板少 |
| --- | --- | --- |
| 内参 Cq | 也常偏高 | 取决于总 RNA/cDNA 输入 |
| 稀释样本 | 有时 Cq 改善或效率改善 | Cq 通常按稀释倍数变晚 |
| 标准曲线 | 效率可能异常 | 标准曲线可能正常 |
| A260/A230 | 可能偏低 | 不一定异常 |
| 解决方向 | 去除抑制物 | 增加输入或提高检测灵敏度 |

## 常见错误与 troubleshooting

| 异常 | 可能原因 | 调整方向 |
| --- | --- | --- |
| 所有基因 Cq 偏高 | RNA 纯度差或逆转录/PCR 抑制 | 检查 A260/A230，稀释模板或重新纯化 |
| 高浓度模板反而扩增差 | 抑制物随模板一起加入过多 | 稀释 cDNA 后重测 |
| 复孔差异大 | 抑制物分布不均或移液误差 | 充分混匀，重新配反应 |
| 低丰度目标无扩增 | 轻度抑制影响低模板目标 | 优化提取和提高体系灵敏度 |
| 标准曲线效率低 | 抑制物或引物效率差 | 用干净标准品区分问题来源 |

## 记录模板

中文记录：

```text
样本类型：
提取方法：
A260/A280：
A260/A230：
是否 DNase 处理：
模板加入量：
稀释倍数测试：
内参 Cq：
目标 Cq：
扩增效率：
是否怀疑抑制：
处理方式：
处理后结果：
```

English record:

```text
Sample type:
Extraction method:
A260/A280:
A260/A230:
DNase treatment: yes / no
Template input:
Dilution test:
Reference gene Cq:
Target Cq:
Amplification efficiency:
PCR inhibition suspected: yes / no
Action taken:
Result after treatment:
```

## 小结

PCR 抑制剂会让真实模板被低估，尤其容易影响低丰度目标和复杂样本。排查时不要只看目标基因，要同时看内参、稀释测试、标准曲线效率和核酸纯度。

## 参考来源

- [MIQE guidelines, Clinical Chemistry 2009](https://academic.oup.com/clinchem/article/55/4/611/5631762)
- [Thermo Fisher nucleic acid quantitation](https://www.thermofisher.com/cn/zh/home/references/ambion-tech-support/rna-tools-and-calculators/nucleic-acid-quantitation.html)
- [Bio-Rad Real-Time PCR Applications Guide](https://www.bio-rad.com/en-us/applications-technologies/real-time-pcr-applications-guide)
