# DNA 末端切除

DNA end resection（DNA 末端切除）是对 DNA 双链断裂 5′ 端链进行受控核酸酶加工，形成带有 3′ single-stranded DNA（3′ 单链 DNA，3′ ssDNA）突出端的过程。它是 [homologous recombination（HR，同源重组）](同源重组.md)的必要入口，也是 DSB repair pathway choice（DNA 双链断裂修复途径选择）的关键控制点。

![DNA 末端切除后的 HR 与 SSA 分流](../../z_asset/番外/补充知识/同源重组与单链退火/hr-vs-ssa-end-resection.png)

> 图：DSB 经 MRN–CtIP、EXO1/DNA2 完成 5′ 端切除后形成 [RPA](RPA.md) 包被的 3′ ssDNA；其后可进入 BRCA2–RAD51 依赖的 HR，也可能在存在直接重复序列时进入 SSA。该图由 Image2 / image-generation model 生成，用于个人学习示意。切除不是“已经选择 HR”的绝对证明，因为 SSA、MMEJ/TMEJ 等也可利用不同程度的 ssDNA。

## 切除的方向为什么容易写错

“5′ 端切除”指含 5′ 末端的 DNA 链被优先降解，最终留下 3′ ssDNA 尾。它不等于所有相关核酸酶都以同一个方向从断口向外移动：MRE11 可先在受阻断端内侧进行内切，再以 3′→5′ 外切方式向断口回切；EXO1 则可从形成的入口沿 5′→3′ 方向长程降解。

因此，正确描述应包含“被降解的是哪条链、切口在哪里形成、核酸酶实际移动方向”三个维度，不能只写一个箭头。

## 两阶段模型

### 起始切除

[MRN complex（MRN 复合物）](MRN复合物.md)结合断端并组织 [CtIP](CtIP.md)。CtIP 促进 MRE11 内切活性，使含 5′ 末端的链在距离断口一定位置产生切口，尤其适合处理被蛋白占据、化学损伤或其他“脏断端”。MRE11 随后可向断口方向回切，帮助移除末端障碍。

起始切除通常较短，但具有决定性意义：一旦产生足够 ssDNA 并削弱 Ku 占位，断端便不再是最适合直接 c-NHEJ 的底物。

### 长程切除

长程切除主要由两条可部分替代的路线扩展：

- **EXO1 路线**：EXO1（exonuclease 1，外切核酸酶 1）沿 5′→3′ 方向降解双链 DNA 的 5′ 端链。
- **BLM–DNA2 路线**：BLM（Bloom syndrome protein，Bloom 综合征蛋白）解旋酶打开双链，DNA2 nuclease/helicase（DNA2 核酸酶/解旋酶）在 RPA 调控下优先切割 5′ 端链。

两条路线共同产生更长的 3′ ssDNA，使 RPA 大量结合，并为 ATR 信号和后续 RAD51 装载创造底物。经典两阶段模型可参考：[Symington, *Critical Reviews in Biochemistry and Molecular Biology*, 2016](https://doi.org/10.3109/10409238.2016.1172559)。

## RPA 不是终点

RPA（replication protein A，复制蛋白 A）迅速包被 ssDNA，抑制二级结构和非特异退火，并帮助激活 [ATR](ATR通路.md) 相关信号。若断裂进入经典 HR，[BRCA2](BRCA2.md) 会帮助 [RAD51](RAD51.md) 取代 RPA，形成执行同源搜索和链侵入的核蛋白丝。

因此：

- RPA focus 增加支持 ssDNA 暴露，但不证明 RAD51 已成功装载；
- RAD51 focus 减少可能源于切除不足，也可能源于 RPA→RAD51 交换缺陷；
- RPA 阳性、RAD51 阴性可表示“切除发生但 HR 在后续被阻断”。

## 末端切除如何影响修复分流

| 末端状态 | 更可能支持的路径 | 说明 |
|---|---|---|
| 几乎未切除、末端被 Ku/DNA-PK 保护 | [c-NHEJ](NHEJ.md) | 可直接连接或先做有限加工 |
| 短切除并暴露微同源 | [MMEJ/TMEJ](MMEJ.md) | 常伴微同源和局部缺失 |
| 广泛切除并有可用同源模板 | HR | 仍需 BRCA2–RAD51 装载与同源搜索 |
| 广泛切除并暴露断裂两侧直接重复 | [SSA](单链退火.md) | 可删除两重复之间的区段 |

切除更像不可逆程度逐渐增加的“底物重塑”，而不是按一下就只剩 HR 的二元开关。

## 细胞周期调控

S/G2 期存在姐妹染色单体，并且 CDK（cyclin-dependent kinase，细胞周期蛋白依赖性激酶）可磷酸化 CtIP 等因子，从而提高切除许可。人 CtIP 对 S/G2 期切除和 HR 的作用可参考：[Huertas and Jackson, *Journal of Biological Chemistry*, 2009](https://doi.org/10.1074/jbc.M808906200)。

G1 期通常由 Ku–[DNA-PK](DNA-PK.md) 与 53BP1–RIF1–Shieldin 网络限制长程切除，但这不是绝对禁止：特定复杂断端、屏障缺陷或异常调控仍可出现短程切除，并可能转入替代末端连接，而非完整 HR。

## 促进与限制切除的主要网络

| 方向 | 代表因子 | 核心作用 |
|---|---|---|
| 促进起始 | MRN、CtIP | 在断端内侧建立核酸酶入口并移除障碍 |
| 促进延伸 | EXO1、BLM–DNA2 | 扩展 3′ ssDNA 区域 |
| 许可与协调 | [BRCA1–BARD1](BRCA1.md)、CDK | 对抗末端保护屏障并连接细胞周期状态 |
| 限制切除 | [53BP1](53BP1.md)–[RIF1](RIF1.md)–[Shieldin](Shieldin复合物.md) | 保护末端、限制 EXO1/DNA2，并可通过 CST–Pol α 回填 |
| 直接竞争断端 | Ku70/80–DNA-PK | 优先占据未切除末端并支持 c-NHEJ |

BRCA1 与 CtIP 有功能联系，但“CtIP 所有切除功能都依赖与 BRCA1 结合”并不准确；CtIP 的关键 CDK 调控和切除功能可在某些系统中与 BRCA1 结合分离。参考：[Polato et al., *Journal of Experimental Medicine*, 2014](https://doi.org/10.1084/jem.20131939)。

## 常用检测方法

| 方法 | 主要读数 | 关键限制 |
|---|---|---|
| RPA/RPA32 焦点 | ssDNA 被 RPA 包被 | 复制压力也会产生 RPA，不是 DSB 切除专属 |
| p-RPA32 | RPA 相关损伤信号 | 位点可受 ATR、ATM、DNA-PK 和时间共同影响 |
| native BrdU/EdU | 非变性条件下暴露的 ssDNA | 需要预标记 DNA；染色和变性控制很关键 |
| [END-seq](<../../用(实验流程内容篇)/END-seq.md>) | 断端位置、结构和切除范围 | 建库复杂；不同端结构的捕获效率需校准 |
| RPA ChIP-seq | 全基因组 RPA 占据 | 同时捕获复制相关 ssDNA，需要损伤位点与细胞周期信息 |
| HR/NHEJ reporter | 指定断裂的最终通路输出 | 不能直接给出全基因组切除长度 |

### 推荐的层级证据

研究“某因子促进末端切除”时，至少区分：

- 上游 DSB 是否相当，例如 γH2AX 或断裂量；
- ssDNA 是否产生，例如 native BrdU 或 RPA；
- 长程切除是否扩展，例如 END-seq 或定量轨迹；
- RAD51 是否装载；
- HR、SSA 或 MMEJ 的最终产物如何变化；
- 细胞周期分布和死亡率是否改变。

## 常见结果误读

| 观察 | 常见过度结论 | 更稳妥的解释 |
|---|---|---|
| RPA 焦点增加 | HR 一定增强 | ssDNA 增加；HR 也可能停在 RAD51 装载之前 |
| RAD51 焦点下降 | 切除一定不足 | 也可能是 BRCA2、PALB2 或 RAD51 本身异常 |
| 53BP1 缺失恢复 RPA | BRCA1 功能完全恢复 | 末端屏障解除，但 BRCA1 的后续与复制叉功能仍可能缺失 |
| EXO1 敲低无效 | 没有长程切除 | BLM–DNA2 路线可能代偿 |
| 抑制 DNA-PK 后 HR 比例升高 | 总体修复改善 | 可能只是路径重新分配，且伴随毒性或异常重排 |

## Troubleshooting

| 问题 | 可能原因 | 处理策略 |
|---|---|---|
| 未处理组 RPA 背景高 | 细胞过密、复制压力、培养状态差 | 优化培养状态；按 EdU/Cyclin A 分层；加入复制压力对照 |
| native BrdU 信号很弱 | 标记不足、抗体进入不足或不慎变性 | 优化预标记和通透；设置明确的变性阳性对照 |
| RPA 增加但 END-seq 切除不明显 | RPA 来源于复制叉而非目标 DSB | 使用位点特异断裂并结合细胞周期或定位信息 |
| 切除读数批次差异大 | 损伤输入、细胞周期或取样时间漂移 | 统一损伤剂量；同步记录周期；使用完整时间序列 |

## 关键结论

DNA 末端切除是把可直接连接的双链断端改造成重组型 3′ ssDNA 底物的分阶段过程。起始切除由 MRN–CtIP 建立入口，EXO1 或 BLM–DNA2 执行长程扩展，RPA 保护 ssDNA；但只有继续完成 RAD51 装载和同源模板修复，才能证明 HR 真正发生。

## 参考来源

- [Symington, Mechanism and regulation of DNA end resection in eukaryotes, *Critical Reviews in Biochemistry and Molecular Biology*, 2016](https://doi.org/10.3109/10409238.2016.1172559)
- [Cejka, DNA End Resection: Nucleases Team Up with the Right Partners to Initiate Homologous Recombination, *Journal of Biological Chemistry*, 2015](https://doi.org/10.1074/jbc.R115.675942)
- [Huertas and Jackson, Human CtIP mediates cell cycle control of DNA end resection and double strand break repair, *Journal of Biological Chemistry*, 2009](https://doi.org/10.1074/jbc.M808906200)
- [Escribano-Díaz et al., A cell cycle-dependent regulatory circuit composed of 53BP1–RIF1 and BRCA1–CtIP controls DNA repair pathway choice, *Molecular Cell*, 2013](https://doi.org/10.1016/j.molcel.2013.01.001)
- [Paiano et al., Role of 53BP1 in end protection and DNA synthesis at DNA breaks, *Genes & Development*, 2021](https://doi.org/10.1101/gad.348667.121)
