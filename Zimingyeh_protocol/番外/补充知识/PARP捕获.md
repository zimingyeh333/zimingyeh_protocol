# PARP捕获

PARP trapping（PARP 捕获）指 [PARP1](PARP1.md) 或 [PARP2](PARP2.md) 在 PARP 抑制剂存在下更稳定地滞留在 DNA 损伤、缺口或复制相关 DNA 结构上，形成阻碍复制和修复的蛋白-DNA 障碍。它是理解 [PARP抑制剂](PARP抑制剂.md)细胞毒性时非常关键的一层机制。

一句话理解：PARP 抑制剂不只是“关掉 PARP 酶活”，有些药还会把 PARP 困在 DNA 上，像把修理工锁在故障现场一样，反而堵住后续修复和复制。

![PARP 捕获与 HRD 背景](../../z_asset/番外/补充知识/PARP捕获/parp-trapping-hrd-context.jpg)

> 图源：[van der Wiel et al., Homologous Recombination Deficiency Scar: Mutations and Beyond—Implications for Precision Oncology, *Cancers*, 2022](https://doi.org/10.3390/cancers14174157)，Figure 1，CC BY 4.0。该图展示 HRD 的基因组后果，用于说明 PARP trapping 造成的复制压力为何在 HRD 背景中更致命；它不是 trapping 分子结构图。

## 为什么会发生 trapping

正常情况下，PARP1 识别 DNA 损伤后被激活，进行 automodification（自我修饰）并生成带负电荷的 PAR 链。PAR 链会降低 PARP1 与 DNA 的亲和力，使 PARP1 从损伤位点释放，后续修复因子继续工作。

当 PARP 抑制剂占据催化口袋后：

- PARP1/2 的 [聚ADP核糖基化](聚ADP核糖基化.md)下降；
- PARP1 自释放能力减弱；
- PARP1/2 更容易停留在 DNA 或染色质上；
- 复制叉遇到这些蛋白-DNA 障碍时，可能停滞、崩溃或产生 DSB。

PARP trapping 强度被认为是不同 PARP 抑制剂毒性差异的重要来源之一。经典比较研究见 [Murai et al., *Cancer Research*, 2012](https://doi.org/10.1158/0008-5472.CAN-12-2753)。

## 催化抑制和 trapping 不是一回事

| 比较轴 | 催化抑制 | PARP 捕获 |
| --- | --- | --- |
| 直接含义 | PARylation 下降 | PARP1/2 滞留在 DNA/染色质上 |
| 常见读数 | PAR 信号下降 | 染色质分级 PARP1/2 增加 |
| 对细胞的压力 | 修复因子招募和信号改变 | 复制叉物理阻碍、DSB 增加 |
| 药物间差异 | 多数 PARPi 都能做到 | 强度差异明显 |
| 实验误区 | PAR 下降就等于强毒性 | trapping 强也受细胞背景影响 |

这就是为什么有些药物在体外酶活抑制很强，但细胞毒性未必与另一个药物完全一致。细胞毒性取决于催化抑制、trapping、药物进入细胞、靶点表达、复制状态和 DNA 修复背景的组合。

## 为什么 HRD 背景更容易被 trapping 放大

[同源重组缺陷](同源重组缺陷.md)细胞处理复制相关断裂和停滞复制叉的能力下降。PARP 捕获造成的蛋白-DNA 障碍会增加复制压力；当复制叉崩溃或缺口转化为 DSB 时，HRD 细胞难以用 RAD51 依赖的高保真通路修复，于是更容易死亡。

这和 [合成致死](合成致死.md)逻辑相连：单独 HRD 或单独 PARP 抑制可能还能被细胞补偿，但二者叠加后会把复制相关损伤推到不可恢复。

## 不同 PARP 抑制剂 trapping 强度不同

常见观点认为 talazoparib（他拉唑帕利）的 trapping 强度较强，olaparib（奥拉帕利）、niraparib（尼拉帕利）、rucaparib（卢卡帕利）等也有不同程度 trapping。需要注意：

- trapping 强弱不能只看体外 IC50；
- 不同细胞系、药物浓度、处理时间和检测方法会影响排序；
- 临床剂量、安全窗和组织暴露并不等同于细胞实验中“谁 trapping 更强”；
- trapping 强可能提高杀伤，也可能带来更明显毒性。

## 实验中如何检测 PARP trapping

| 问题 | 推荐读数 | 能回答什么 | 关键限制 |
| --- | --- | --- | --- |
| PARP1 是否滞留染色质 | chromatin fractionation 后 WB | PARP1 是否从可溶池转入染色质池 | 裂解强度和盐浓度影响很大 |
| PARP2 是否参与 | PARP2 染色质分级 | PARP2 trapping 是否发生 | 信号弱，抗体要求高 |
| 催化是否被抑制 | PAR signal 下降 | PARylation 是否下降 | 不等于 trapping |
| 复制压力是否增加 | p-RPA、p-CHK1、γH2AX、DNA fiber | 复制叉压力和损伤后果 | 这些标志不是 PARPi 独有 |
| 是否 HRD 依赖 | RAD51 foci、BRCA1/2 状态、克隆形成 | trapping 毒性是否被 HRD 放大 | 需配合 S/G2 分层 |

### 操作注意

- 染色质分级要固定裂解条件；轻微条件差异会显著改变 PARP1 可溶/染色质比例。
- 同时检测 histone H3 等染色质标志和 tubulin/GAPDH 等可溶池标志，确认分级质量。
- PARP 抑制剂处理时间不宜只取一个点；早期 trapping 和后期细胞死亡可能混在一起。
- 如果 PARP1 总量明显下降，trapping 读数要结合降解、裂解和凋亡标志解释。

## 常见误读与 troubleshooting

| 观察 | 不应立即得出的结论 | 优先排查 |
| --- | --- | --- |
| PAR 信号完全下降 | trapping 一定很强 | 染色质分级 PARP1/2 |
| PARP1 染色质增加 | 一定是药物 trapping | DNA 损伤输入、裂解条件、总 PARP1 变化 |
| trapping 强但细胞不死 | 机制错误 | HR 功能、复制速度、药物暴露和取样时间 |
| 药物 A 比药物 B 更毒 | A trapping 一定更强 | 细胞内浓度、脱靶、细胞周期和一般毒性 |
| PARP1 敲低能救药物毒性 | 所有毒性都来自 PARP1 | PARP2、药物背景和复制压力 |

## 小结

PARP 捕获是 PARP 抑制剂从“酶活抑制剂”变成“复制阻碍制造者”的关键机制。做 PARP 抑制剂实验时，PAR 信号、PARP1/2 染色质滞留、复制压力和长期存活需要分开检测，否则很容易把催化抑制、trapping 和一般细胞毒性混成一团。

## 参考来源

- [Murai et al., Trapping of PARP1 and PARP2 by clinical PARP inhibitors, *Cancer Research*, 2012](https://doi.org/10.1158/0008-5472.CAN-12-2753)
- [Murai et al., Stereospecific PARP trapping by BMN 673 and comparison with olaparib and rucaparib, *Molecular Cancer Therapeutics*, 2014](https://doi.org/10.1158/1535-7163.MCT-13-0803)
- [Lord and Ashworth, PARP inhibitors: Synthetic lethality in the clinic, *Science*, 2017](https://doi.org/10.1126/science.aam7344)
- [Noordermeer and van Attikum, PARP inhibitor resistance: A tug-of-war in BRCA-mutated cells, *Trends in Cell Biology*, 2019](https://doi.org/10.1016/j.tcb.2019.03.004)
