# PARG

PARG（poly(ADP-ribose) glycohydrolase，聚 ADP-核糖糖苷水解酶）是细胞中降解 poly(ADP-ribose)（PAR，聚 ADP-核糖）链的主要酶。它与 [PARP1](PARP1.md)/PARP2 共同决定 [聚ADP核糖基化](聚ADP核糖基化.md)信号的强度、持续时间和空间范围。

一句话理解：PARP 负责“写入”PAR 链，PARG 负责“擦除”PAR 链；只看 PARP 不看 PARG，很容易误读 PAR 信号。

![PARG 与 PARP/HRD 背景](../../z_asset/番外/补充知识/PARG/parg-parp-hrd-context.jpg)

> 图源：[van der Wiel et al., Homologous Recombination Deficiency Scar: Mutations and Beyond—Implications for Precision Oncology, *Cancers*, 2022](https://doi.org/10.3390/cancers14174157)，Figure 1，CC BY 4.0。该图用于提示 PAR 周转与 PARP 抑制剂、HRD 背景的关系；它不是 PARG 结构图。

## PARG 做什么

PARP1/2 使用 [NAD+](NAD.md)合成 PAR 链后，PARG 主要水解 PAR 链内部的 ribose-ribose glycosidic bond（核糖-核糖糖苷键），使 PAR 信号快速消退。PARG 对 PAR 链主体降解非常关键，但残留在蛋白上的 terminal ADP-ribose（末端 ADP-核糖）还可能需要其他水解酶处理。

因此 PAR 信号强弱取决于：

- PARP 写入速度；
- NAD+ 底物供应；
- PARG 降解速度；
- 其他 ADP-ribose hydrolase（ADP-核糖水解酶）参与；
- 损伤输入和取样时间。

PARG/PAR 周转综述可参考 [Rack et al., *Genes & Development*, 2020](https://doi.org/10.1101/gad.334631.119)。

## 为什么 PARG 重要

### 控制 DNA 损伤信号持续时间

PAR 链如果持续太久，可能让修复因子招募、染色质松散和 PARP1 动态释放失去时序。PARG 通过清除 PAR，使损伤应答从“快速招募阶段”进入后续修复和恢复阶段。

### 影响复制压力和 PARP 抑制剂反应

PARG 抑制或缺失可造成 PAR 信号持续、复制压力改变和 DNA 修复异常。在一些背景中，PARG 抑制被研究为与 PARP 抑制不同的治疗策略；但 PARG 缺失并不简单等于“PARP 更活跃”，因为它主要改变的是 PAR 周转和信号持续性。

### 帮助解释 PAR 信号

实验中 PAR signal 增加可能有两种相反解释：

- PARP 写入增加；
- PARG 降解下降。

因此，如果实验核心结论依赖 PAR 信号强弱，最好同时检测 PARP1/2、PARG、NAD+ 和损伤输入。

## PARP 与 PARG 的区别

| 比较轴 | PARP1/2 | PARG |
| --- | --- | --- |
| 功能 | 写入 PAR 链 | 降解 PAR 链 |
| 底物/对象 | NAD+、底物蛋白 | PAR 链 |
| 损伤后变化 | 快速活化并合成 PAR | 参与 PAR 信号消退 |
| 抑制后常见结果 | PAR 下降、trapping 可能增加 | PAR 持续或累积 |
| 误区 | PARP 高就等于 PAR 高 | PARG 低也可导致 PAR 高 |

## 实验中如何观察 PARG

| 问题 | 推荐读数 | 能回答什么 | 关键限制 |
| --- | --- | --- | --- |
| PARG 是否存在 | PARG Western blot | 总量、敲低/敲除 | isoform 和抗体特异性需注意 |
| PAR 降解是否变慢 | 损伤后 PAR signal 时间梯度 | PAR 周转速度 | 取样必须密集 |
| 是否影响修复 | XRCC1、γH2AX、复制压力标志 | PAR 周转后果 | 不特异区分直接和间接效应 |
| 是否影响药敏 | PARP/PARG 抑制剂、克隆形成 | 长期存活影响 | 药物毒性和复制压力需分层 |

## 常见误读与 troubleshooting

| 观察 | 不应立即得出的结论 | 优先排查 |
| --- | --- | --- |
| PAR 信号升高 | PARP 活性一定升高 | PARG 是否下降或被抑制 |
| PARG 敲低后细胞死亡 | 只由 DNA 修复失败造成 | PAR 过量、复制压力、转录和细胞死亡方式 |
| PARP 抑制剂后 PAR 仍高 | 药物无效 | PARG 抑制、取样时间、抗体背景 |
| PARG 抑制与 PARP 抑制都毒 | 机制相同 | 一个影响写入，一个影响降解 |

## 小结

PARG 是 PAR 信号的主要擦除器。理解 PARP/PARylation 不能只看 PARP 写入端，还要看 PARG 介导的降解端；尤其在解释 PAR 信号、PARP 抑制剂和复制压力时，PARG 是必须考虑的变量。

## 参考来源

- [Rack et al., (ADP-ribosyl)hydrolases: structure, function, and biology, *Genes & Development*, 2020](https://doi.org/10.1101/gad.334631.119)
- [Gibson and Kraus, New insights into the molecular and cellular functions of poly(ADP-ribose) and PARPs, *Nature Reviews Molecular Cell Biology*, 2012](https://doi.org/10.1038/nrm3376)
- [Barkauskaite et al., Visualization of poly(ADP-ribose) bound to PARG reveals inherent balance between exo- and endo-glycohydrolase activities, *Nature Communications*, 2013](https://doi.org/10.1038/ncomms3164)
