# MAPK-ERK通路

MAPK-ERK pathway（Mitogen-Activated Protein Kinase-Extracellular signal-Regulated Kinase pathway，丝裂原活化蛋白激酶-细胞外信号调节激酶通路）是细胞把外界 growth factor（生长因子）刺激转化为 proliferation（增殖）、differentiation（分化）和 stress response（应激反应）的核心信号模块之一。

![核心培养信号通路总览](../../z_asset/番外/补充知识/核心培养信号通路/core-culture-signaling-pathways-reference.png)

图源：Image2 生成的核心培养信号通路总览；MAPK-ERK 位于左侧 RTK -> RAS -> RAF -> MEK -> ERK 模块。

## 核心逻辑

MAPK-ERK 通路最常见的培养场景入口是 receptor tyrosine kinase（RTK，受体酪氨酸激酶）。例如 [EGF](<../../材(实验耗材工具篇)/EGF.md>) 结合 EGFR 后，常可通过 RAS、RAF、MEK、ERK 形成逐级磷酸化级联，最后影响转录程序、细胞周期和分化状态。Reactome 将 MAPK family signaling cascades（MAPK 家族信号级联）作为一组连接细胞外刺激与下游细胞反应的通路进行整理。参考：[Reactome MAPK family signaling cascades](https://reactome.org/content/detail/R-HSA-5683057)。

这条通路的关键不是“有生长因子就一定增殖”，而是刺激强度、刺激时间、受体表达、细胞本来所处状态和其他通路共同决定最终输出。短暂 ERK 激活可能偏向促增殖信号，持续 ERK 激活在某些细胞中反而可能推动分化或负反馈。

## 在本知识库中的连接

| 上游试剂/因子 | 常见连接方式 | 实验解释重点 |
| --- | --- | --- |
| [EGF](<../../材(实验耗材工具篇)/EGF.md>) | EGFR -> RAS/RAF/MEK/ERK | 上皮、类器官和部分神经前体体系中的促增殖输入 |
| [FGF2](<../../材(实验耗材工具篇)/FGF2.md>) | FGFR -> MAPK-ERK，也可联动 PI3K-AKT | 干细胞维持、神经前体增殖和分化时序 |
| [BDNF](<../../材(实验耗材工具篇)/BDNF.md>) | TrkB -> MAPK-ERK/PI3K-AKT | 神经元存活、神经突起和可塑性相关解释 |
| [GDNF](<../../材(实验耗材工具篇)/GDNF.md>) | RET/GFRα 相关模块 -> MAPK-ERK/PI3K-AKT | 特定神经元和肾脏/发育模型中的支持信号 |

## 常见 readout

| Readout | 代表含义 | 注意事项 |
| --- | --- | --- |
| p-ERK1/2 Western blot | ERK 激活的常用短时 readout | 需要时间梯度；10 min、30 min、1 h 的结论可能不同 |
| p-MEK 或 p-RAF | 上游级联活性 | 抗体质量和取样时间很关键 |
| immediate early genes | FOS、JUN、EGR1 等早期转录响应 | 受血清、应激、细胞密度影响明显 |
| 增殖指标 | EdU、Ki-67、细胞计数等 | 增殖是下游结果，不能单独证明 MAPK-ERK 被激活 |

## 和 PI3K-AKT 的区别

MAPK-ERK 和 [PI3K-AKT通路](PI3K-AKT通路.md) 经常由同一类 RTK 同时激活，但实验含义不同。

| 项目 | MAPK-ERK | PI3K-AKT |
| --- | --- | --- |
| 直观输出 | 增殖、分化、早期基因响应 | 存活、代谢、抗凋亡、蛋白合成 |
| 常见 readout | p-ERK1/2 | p-AKT、p-S6、p-4EBP1 |
| 时间特点 | 常出现快速、脉冲式激活 | 可与代谢和营养状态长期耦合 |
| 解释风险 | 把 ERK 激活直接等同于增殖 | 把 AKT 激活直接等同于细胞“更健康” |

## 实验记录建议

记录 MAPK-ERK 相关刺激时，至少写清：

```text
上游刺激因子：
品牌/货号/批号：
终浓度：
血清饥饿或预处理条件：
刺激时间：
细胞密度：
取样方式：
检测 readout：
是否设置抑制剂或阴性对照：
```

Recommended record template (English):

```text
Stimulus:
Brand/catalog/lot:
Final concentration:
Serum-starvation or pretreatment condition:
Stimulation time:
Cell density:
Sampling method:
Readout:
Inhibitor or negative control:
```

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| p-ERK很弱 | 细胞受体表达低、刺激因子失活、取样时间错过峰值 | 做短时间梯度并检查阳性刺激 |
| p-ERK背景很高 | 血清残留、细胞过密、换液/刮取造成应激 | 优化饥饿、密度和取样方式 |
| 增殖没有增加 | ERK 激活不等于细胞周期推进，可能缺少营养或其他因子 | 同时看 EdU/Ki-67 和细胞死亡 |
| 批间差异明显 | 生长因子活性、重构液或冻融不同 | 记录 lot，做桥接实验 |

## 小结

MAPK-ERK 是理解 EGF、FGF2、BDNF、GDNF 等培养添加剂时最常见的“增殖/分化信号”入口。实际实验中要把上游刺激、时间梯度、p-ERK readout 和最终增殖/分化结果分开记录，避免把一个磷酸化信号直接等同于最终表型。

## 参考来源

- [Reactome MAPK family signaling cascades](https://reactome.org/content/detail/R-HSA-5683057)
