# Cq值

Cq value（quantification cycle value，定量循环数）是 qPCR 或 [RT-qPCR](<../../用(实验流程内容篇)/RT-qPCR.md>) 中荧光信号越过设定阈值时对应的 PCR 循环数；在模板、体系和分析参数合理的前提下，Cq 越低通常表示初始目标模板量越高。

## 一句话理解

Cq 值不是“表达量本身”，而是荧光扩增曲线跨过阈值线的时间点。

MIQE（Minimum Information for Publication of Quantitative Real-Time PCR Experiments，定量实时 PCR 实验发表最低信息标准）建议使用 Cq（quantification cycle）这个术语，而不是只使用不同仪器软件中的 Ct、Cp 或 crossing point 等叫法。参考：[MIQE guidelines, Clinical Chemistry 2009](https://academic.oup.com/clinchem/article/55/4/611/5631762)。

## Cq、Ct、Cp 的关系

| 术语 | 英文全称 | 中文理解 | 备注 |
| --- | --- | --- | --- |
| Cq | Quantification cycle | 定量循环数 | MIQE 推荐通用术语 |
| Ct | Threshold cycle | 阈值循环数 | 很多仪器和论文仍常用 |
| Cp | Crossing point | 交叉点 | 部分软件使用 |
| Cq/Ct/Cp | 共同含义 | 扩增曲线达到阈值的循环数 | 具体算法可能因软件不同而不同 |

日常交流里 Ct 和 Cq 常被混用，但正式记录时最好写清楚仪器软件显示的是哪个术语、阈值如何设定、是否做了自动基线校正。

## Cq 是怎么来的

qPCR 仪在每个循环读取荧光信号，得到 [扩增曲线](扩增曲线.md)。软件会先处理 [基线校正](基线校正.md)，再设置 [阈值线](阈值线.md)。扩增曲线第一次越过阈值线的位置就是 Cq。

| 环节 | 对 Cq 的影响 |
| --- | --- |
| 模板初始量 | 初始模板越多，通常越早越过阈值 |
| 扩增效率 | 效率越高，曲线上升越快 |
| 阈值线设置 | 阈值线不同，Cq 可能改变 |
| 基线校正 | 基线漂移会影响软件判定 |
| 背景荧光 | 背景高会压缩可解释范围 |
| 非特异扩增 | 也可能贡献荧光，尤其是 SYBR 体系 |

Thermo Fisher 对 Ct 的说明也强调，Ct/Cq 是实时 PCR 中荧光信号超过阈值时的循环数，常用于比较样本起始模板量。参考：[Thermo Fisher: Understanding Ct values](https://www.thermofisher.com/us/en/home/life-science/pcr/real-time-pcr/real-time-pcr-learning-center/real-time-pcr-basics/real-time-pcr-understanding-ct.html)。

## Cq 怎么解释

| 观察 | 常见解释 | 注意 |
| --- | --- | --- |
| Cq 低 | 初始模板量较高 | 也可能是污染或基因组 DNA |
| Cq 高 | 初始模板量较低 | 也可能是 RNA 降解、逆转录差或 PCR 抑制 |
| 无 Cq | 未检测到扩增 | 也可能是阈值设置、体系失败或模板太低 |
| 复孔 Cq 差异大 | 移液误差、气泡、低模板随机性 | 低拷贝样本更容易波动 |
| NTC 有 Cq | 污染或 [引物二聚体](引物二聚体.md) | 需要结合 [熔解曲线](熔解曲线.md) 判断 |

Cq 只能在扩增特异、扩增效率合理、对照合格时用于定量。单个 Cq 数字本身不能证明表达量变化。

## Cq 和表达量的关系

理想 PCR 中，每个循环产物约翻倍，因此理论上 1 个 Cq 差异约对应 2 倍模板差异。但实际分析要考虑 [扩增效率](扩增效率.md)、参考基因、样本质量和统计设计。

常见相对定量流程：

```text
目标基因 Cq - 内参基因 Cq = ΔCq
实验组 ΔCq - 对照组 ΔCq = ΔΔCq
相对表达量 ≈ 2^-ΔΔCq
```

这个方法默认目标基因和参考基因扩增效率接近，并且 [内参基因](内参基因.md) 在实验条件下稳定。若扩增效率差异明显，应使用效率校正方法，而不是机械套用 2^-ΔΔCq。

## 什么时候 Cq 不可靠

| 情况 | 为什么不可靠 |
| --- | --- |
| [无模板对照](无模板对照.md) 有扩增 | 可能存在污染或引物二聚体 |
| [无逆转录对照](无逆转录对照.md) 有扩增 | 可能存在基因组 DNA 污染 |
| 熔解曲线多峰 | SYBR 信号可能来自多个产物 |
| 扩增效率太低或太高 | Cq 和模板量不再按预期对应 |
| Cq 非常高 | 低拷贝随机性、背景和非特异扩增影响更大 |
| 复孔差异过大 | 技术误差或样本问题超过真实差异 |
| 阈值线被手动随意调整 | 不同孔/板之间不可比 |

## 常见错误与 troubleshooting

| 异常 | 可能原因 | 调整方向 |
| --- | --- | --- |
| 所有样本 Cq 偏高 | RNA 降解、逆转录效率低、PCR 抑制剂残留 | 检查 RNA 质量、cDNA 稀释和 [PCR抑制剂](PCR抑制剂.md) |
| 目标基因 Cq 正常但内参波动大 | 内参不稳定或样本输入差异 | 更换或增加参考基因 |
| NTC 出现晚 Cq | 引物二聚体或低水平污染 | 看熔解曲线，重配体系，优化引物 |
| 复孔差异大 | 移液误差、气泡、低模板随机性 | 检查板图，短暂离心，增加重复 |
| Cq 很低但结果不合理 | 污染、基因组 DNA 或非特异扩增 | 检查 no-RT、NTC 和产物特异性 |

## 记录模板

中文记录：

```text
实验名称：
仪器软件术语：Cq / Ct / Cp
阈值设置：自动 / 手动
基线校正：自动 / 手动
目标基因：
内参基因：
样本 Cq：
技术重复 Cq 差异：
NTC 结果：
no-RT 结果：
熔解曲线：
扩增效率：
是否纳入分析：
备注：
```

English record:

```text
Experiment name:
Instrument/software term: Cq / Ct / Cp
Threshold setting: automatic / manual
Baseline correction: automatic / manual
Target gene:
Reference gene:
Sample Cq:
Technical replicate Cq difference:
NTC result:
No-RT result:
Melt curve:
Amplification efficiency:
Included in analysis: yes / no
Notes:
```

## 小结

Cq 是 RT-qPCR 定量的入口，但不是孤立结论。可靠的 Cq 必须同时满足特异扩增、合理效率、阴性对照干净、参考基因稳定和分析参数一致。

## 参考来源

- [MIQE guidelines, Clinical Chemistry 2009](https://academic.oup.com/clinchem/article/55/4/611/5631762)
- [Thermo Fisher: Understanding Ct values](https://www.thermofisher.com/us/en/home/life-science/pcr/real-time-pcr/real-time-pcr-learning-center/real-time-pcr-basics/real-time-pcr-understanding-ct.html)
- [Bio-Rad Real-Time PCR Applications Guide](https://www.bio-rad.com/en-us/applications-technologies/real-time-pcr-applications-guide)
