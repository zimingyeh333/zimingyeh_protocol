# Tm值

Tm value（melting temperature，熔解温度）是指一段双链核酸有约一半解链为单链时的温度；在 PCR/qPCR 中，Tm 常用于描述 primer（引物）结合稳定性、[退火温度](退火温度.md) 选择，以及 [熔解曲线](熔解曲线.md) 中 PCR 产物的熔解峰位置。

## 一句话理解

Tm 值表示“这段核酸双链在多高温度下开始明显分开”。

IDT 的 qPCR primer design 资料强调，引物长度、GC 含量、Tm 匹配、扩增片段长度和二聚体风险都是 qPCR 引物设计的关键参数。参考：[IDT qPCR Primer Design](https://www.idtdna.com/pages/education/decoded/article/designing-qpcr-assays)。

## Tm 在哪里会出现

| 场景 | Tm 指的是什么 | 用途 |
| --- | --- | --- |
| 引物设计 | 引物与模板结合的熔解温度 | 选择退火温度 |
| 探针设计 | 探针与目标序列结合的熔解温度 | 保证探针特异结合 |
| 熔解曲线 | PCR 产物的熔解峰温度 | 判断产物是否单一 |
| HRM 分析 | 扩增产物熔解差异 | 区分序列变异或甲基化等 |

同一个词 Tm 在不同场景下含义略有不同。引物 Tm 用于反应设计，产物 Tm 用于结果质控。

## 影响 Tm 的因素

| 因素 | 影响 |
| --- | --- |
| GC 含量 | GC 越高，Tm 通常越高 |
| 序列长度 | 较长序列通常 Tm 更高 |
| 盐离子浓度 | 盐浓度影响双链稳定性 |
| Mg2+ 浓度 | 会影响核酸结合和聚合酶反应 |
| 错配 | 错配会降低结合稳定性 |
| 染料和体系 | 熔解曲线峰值可能受体系影响 |

因此，不同软件计算得到的 Tm 可能略有差异。记录时最好同时记录设计工具、参数和反应体系，而不是只写一个数字。

## 正反向引物 Tm 为什么要接近

[qPCR引物](<../../材(实验耗材工具篇)/qPCR引物.md>) 通常需要 forward primer（正向引物）和 reverse primer（反向引物）一起工作。如果两条引物 Tm 差异太大，在同一个退火温度下可能出现：

- 一条引物结合充分，另一条结合不足。
- 非特异结合增加。
- 扩增效率下降。
- 复孔重复性变差。
- 更容易出现 [引物二聚体](引物二聚体.md)。

## Tm 和熔解曲线

在 SYBR Green 体系中，熔解曲线的主峰 Tm 代表主要 PCR 产物的熔解行为。

| 熔解曲线表现 | 常见解释 |
| --- | --- |
| 样本主峰 Tm 一致 | 产物可能一致 |
| 多个 Tm 峰 | 可能有非特异扩增 |
| 低 Tm 小峰 | 常见引物二聚体 |
| NTC 峰与目标 Tm 一样 | 更像污染 |
| Tm 轻微波动 | 可能来自仪器、盐浓度或产物差异 |

## 常见错误与 troubleshooting

| 异常 | 可能原因 | 调整方向 |
| --- | --- | --- |
| 正反向引物 Tm 差太大 | 设计不佳 | 重新设计引物 |
| 熔解曲线 Tm 多峰 | 非特异扩增或多个产物 | 提高退火温度，做胶图验证 |
| 低温峰明显 | 引物二聚体 | 降低引物浓度或重设计 3' 端 |
| 不同样本 Tm 差异大 | 产物不同或样本污染 | 检查扩增子和测序 |
| 软件 Tm 预测不一致 | 算法和盐条件不同 | 统一设计工具和参数 |

## 记录模板

中文记录：

```text
目标基因：
引物设计工具：
正向引物 Tm：
反向引物 Tm：
退火温度：
扩增子预测 Tm：
熔解曲线实测 Tm：
是否多峰：
NTC 是否有峰：
是否接受：
备注：
```

English record:

```text
Target gene:
Primer design tool:
Forward primer Tm:
Reverse primer Tm:
Annealing temperature:
Predicted amplicon Tm:
Observed melt peak Tm:
Multiple peaks: yes / no
NTC peak observed: yes / no
Accepted: yes / no
Notes:
```

## 小结

Tm 值连接了引物设计、退火温度选择和熔解曲线判读。看 qPCR 结果时要分清：引物 Tm 是设计参数，产物 Tm 是结果质控信号。

## 参考来源

- [IDT qPCR Primer Design](https://www.idtdna.com/pages/education/decoded/article/designing-qpcr-assays)
- [Bio-Rad Real-Time PCR Applications Guide](https://www.bio-rad.com/en-us/applications-technologies/real-time-pcr-applications-guide)
- [MIQE guidelines, Clinical Chemistry 2009](https://academic.oup.com/clinchem/article/55/4/611/5631762)
