# XRCC1

XRCC1（X-ray repair cross-complementing protein 1，X 射线修复交叉互补蛋白 1）是 [DNA单链断裂](DNA单链断裂.md)修复和 [碱基切除修复](碱基切除修复.md)中的核心支架蛋白。它本身通常不被视为主要催化酶，而是把 PARP1/2、[DNA polymerase β（DNA 聚合酶 β）](DNA聚合酶β.md)、[PNKP](PNKP.md)、[APTX](APTX.md)、[DNA ligase III（DNA 连接酶 III）](DNA连接酶III.md) 等修复因子组织到同一损伤现场。

一句话理解：XRCC1 像 SSBR/BER 的“施工协调员”，它不一定亲自切、补、连 DNA，但缺少它时许多步骤接不上。

![XRCC1 与 PARP/HRD 背景](../../z_asset/番外/补充知识/XRCC1/xrcc1-parp-hrd-context.jpg)

> 图源：[van der Wiel et al., Homologous Recombination Deficiency Scar: Mutations and Beyond—Implications for Precision Oncology, *Cancers*, 2022](https://doi.org/10.3390/cancers14174157)，Figure 1，CC BY 4.0。该图用于提示 XRCC1-SSBR/PARP 轴与 PARP 抑制剂、HRD 背景的联系；它不是 XRCC1 结构图。

## XRCC1 为什么是支架蛋白

XRCC1 含有多个蛋白互作结构域，可连接不同修复因子：

| 互作对象 | 主要意义 |
| --- | --- |
| PARP1/PARP2 | 损伤早期招募和 PAR 信号连接 |
| DNA polymerase β | 缺口填补 |
| PNKP | 3′/5′ 末端加工 |
| APTX | 处理异常连接中间体 |
| DNA ligase III | 最终连接 |

XRCC1 作为 SSBR/BER 支架的功能综述见 [Caldecott, *Nature Reviews Genetics*, 2008](https://doi.org/10.1038/nrg2380)。

## 在 SSBR 中的位置

SSB 出现后，[PARP1](PARP1.md)快速结合并催化 [聚ADP核糖基化](聚ADP核糖基化.md)。XRCC1 可被招募到损伤区域，并整合末端加工、填补和连接因子。这个过程尤其重要，因为 SSB 末端常不是干净的 3′-OH/5′-phosphate。

如果 XRCC1 功能不足，SSB 和 BER 中间体更容易滞留；复制叉遇到这些中间体时，可产生复制压力、γH2AX 增加甚至 DSB。

## 在 BER 中的位置

BER 去除损伤碱基后会形成 AP site、nick 或 gap。XRCC1 帮助把 short-patch BER 中的 DNA polymerase β 与 ligase III 等因子组织起来，使缺口填补和连接连续发生。

因此 XRCC1 缺陷不一定表现为“第一步识别不到损伤”，更常见的是中间体清除变慢。

## XRCC1 不是 γH2AX 或 DSB 标志

XRCC1 focus 主要提示 SSBR/BER 平台建立或滞留。它和 γH2AX、53BP1、RAD51 的解释层级不同：

| 读数 | 更接近的问题 |
| --- | --- |
| XRCC1 focus | SSB/BER 中间体和修复平台 |
| PAR signal | PARP 活化和 PAR 周转 |
| γH2AX | DSB、复制压力或广泛损伤信号 |
| RAD51 focus | HR 相关装载 |

看到 XRCC1 focus 增多不能直接说 DSB 增多，也不能说 HR 正在发生。

## 实验中如何观察 XRCC1

| 问题 | 推荐读数 | 能回答什么 | 关键限制 |
| --- | --- | --- | --- |
| XRCC1 是否存在 | Western blot | 总量、敲低、降解 | 总量不代表招募 |
| 是否进入损伤位点 | XRCC1 免疫荧光、激光微照射 | SSBR/BER 平台形成 | 需控制损伤剂和时间窗 |
| 是否依赖 PARP | PARP 抑制剂前后 XRCC1 招募 | PAR 信号对招募的贡献 | PARP 抑制也会改变 trapping |
| 是否修复完成 | comet assay、SSB/BER 动力学 | 中间体是否清除 | 不特异，需要配合损伤类型 |
| 是否影响存活 | 克隆形成、药敏 | 长期后果 | 可能混入复制压力和细胞周期 |

## 常见误读与 troubleshooting

| 观察 | 不应立即得出的结论 | 优先排查 |
| --- | --- | --- |
| XRCC1 focus 多 | 修复效率高 | 可能是损伤多或修复滞留 |
| XRCC1 敲低后 γH2AX 增加 | XRCC1 直接修 DSB | SSB 在复制中转化为 DSB |
| PARP 抑制剂减少 XRCC1 招募 | BER 完全停止 | PARP-independent 部分和后续步骤 |
| XRCC1 总量正常 | SSBR 正常 | 定位、互作和修饰状态 |

## 小结

XRCC1 是 SSBR/BER 的支架核心。它把 PARP 早期损伤识别、末端加工、缺口填补和连接步骤串起来；解释 XRCC1 实验时要把“焦点形成”“中间体清除”和“长期细胞存活”分层。

## 参考来源

- [Caldecott, Single-strand break repair and genetic disease, *Nature Reviews Genetics*, 2008](https://doi.org/10.1038/nrg2380)
- [Caldecott, XRCC1 and DNA strand break repair, *DNA Repair*, 2003](https://doi.org/10.1016/S1568-7864(03)00051-3)
- [Krokan and Bjørås, Base excision repair, *Cold Spring Harbor Perspectives in Biology*, 2013](https://doi.org/10.1101/cshperspect.a012583)
