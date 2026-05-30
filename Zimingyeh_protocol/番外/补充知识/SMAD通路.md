# SMAD通路

SMAD pathway（SMAD signal transduction pathway，SMAD 信号转导通路）是 TGF-β superfamily（Transforming Growth Factor beta superfamily，转化生长因子 β 超家族）把外界细胞因子信号传入细胞核、调控 fate decision（命运决定）、differentiation（分化）、EMT（Epithelial-Mesenchymal Transition，上皮-间质转化）和免疫/纤维化相关基因表达的核心通路。

![核心培养信号通路总览](../../z_asset/番外/补充知识/核心培养信号通路/core-culture-signaling-pathways-reference.png)

图源：Image2 生成的核心培养信号通路总览；SMAD 位于 TGF-beta / BMP / Activin -> SMAD 模块。

## 核心逻辑

TGF-β、BMP（Bone Morphogenetic Protein，骨形态发生蛋白）和 Activin（激活素）这类配体通常通过 type II receptor（II 型受体）和 type I receptor（I 型受体）形成受体复合物，随后磷酸化 receptor-regulated SMAD（受体调节型 SMAD），再与 SMAD4 形成复合物进入细胞核调控转录。Reactome 的 Signaling by TGF-beta receptor complex 页面整理了 TGF-β 受体复合物与 SMAD 相关信号事件。参考：[Reactome Signaling by TGF-beta receptor complex](https://reactome.org/content/detail/R-HSA-170834)。

实验中经常把 SMAD 通路写成一条线，但它至少要区分两个常见分支：TGF-β/Activin/Nodal 更常连接 SMAD2/3，BMP 更常连接 SMAD1/5/8。不同分支会导致完全不同的分化和命运输出。

## 在本知识库中的连接

| 上游试剂/因子 | 常见连接方式 | 实验解释重点 |
| --- | --- | --- |
| [TGF-β](<../../材(实验耗材工具篇)/TGF-β.md>) | TGF-β receptor -> SMAD2/3 | EMT、免疫抑制、纤维化、分化状态改变 |
| [Activin A](<../../材(实验耗材工具篇)/Activin A.md>) | Activin receptor -> SMAD2/3 | 胚层诱导、干细胞分化和内胚层相关程序 |
| [BMP4](<../../材(实验耗材工具篇)/BMP4.md>) | BMP receptor -> SMAD1/5/8 | 发育模式化、骨/中胚层相关诱导、分化推进 |
| [Noggin](<../../材(实验耗材工具篇)/Noggin.md>) | BMP antagonist（BMP 拮抗剂） | 不是激活 SMAD，而是抑制 BMP-SMAD 输入 |

## SMAD2/3 vs SMAD1/5/8

| 分支 | 常见上游 | 常见 readout | 实验含义 |
| --- | --- | --- | --- |
| SMAD2/3 | TGF-β、Activin、Nodal | p-SMAD2、p-SMAD3 | EMT、免疫调节、内胚层/命运诱导 |
| SMAD1/5/8 | BMP2/4/7 等 BMP | p-SMAD1/5/8 | BMP 轴激活、发育模式化、特定分化推进 |
| SMAD4 | 两类分支共享的共 SMAD | 核定位、复合物形成 | 通用转录复合物组件，不代表某一上游独有 |

## 常见 readout

| Readout | 代表含义 | 注意事项 |
| --- | --- | --- |
| p-SMAD2/3 | TGF-β/Activin/Nodal 分支激活 | 要区分 p-SMAD2 和 p-SMAD3 抗体 |
| p-SMAD1/5/8 | BMP 分支激活 | 适合验证 BMP4 或 BMP 抑制剂效果 |
| SMAD核定位 | SMAD 复合物进入细胞核 | 需要和细胞形态、核分割质量一起看 |
| 下游基因表达 | ID genes、SERPINE1、SNAI1 等 | 基因选择必须匹配细胞类型和分支 |

## 和 Wnt-β-catenin 的区别

[Wnt-β-catenin通路](Wnt-β-catenin通路.md) 和 SMAD 通路都常用于发育、干细胞和类器官体系，但它们不是同一种“分化信号”。

| 项目 | SMAD通路 | Wnt-β-catenin通路 |
| --- | --- | --- |
| 常见入口 | TGF-β、Activin、BMP | Wnt3A、Wnt surrogate、R-spondin增强 |
| 核心转录因子/复合物 | SMAD2/3、SMAD1/5/8、SMAD4 | β-catenin + TCF/LEF |
| 常见用途 | 分化诱导、EMT、BMP抑制/激活判断 | 干性维持、类器官扩增、发育模式化 |
| 常见错误 | 不区分 SMAD2/3 与 SMAD1/5/8 | 不区分 Wnt 配体和 R-spondin 增强 |

## 实验记录建议

推荐记录模板（中文）：

```text
上游因子：TGF-β/Activin/BMP/Noggin/其他
品牌/货号/批号：
终浓度：
刺激或处理时间：
细胞密度和分化阶段：
检测分支：SMAD2/3 或 SMAD1/5/8
readout：
是否有抑制剂或拮抗剂：
异常现象：
```

Recommended record template (English):

```text
Upstream factor: TGF-beta/Activin/BMP/Noggin/other
Brand/catalog/lot:
Final concentration:
Stimulation or treatment time:
Cell density and differentiation stage:
Branch measured: SMAD2/3 or SMAD1/5/8
Readout:
Inhibitor or antagonist included:
Abnormal observation:
```

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| p-SMAD信号弱 | 因子失活、受体表达低、取样时间不合适 | 做时间梯度并换新分装 |
| 分化方向不稳定 | SMAD 分支、剂量、时序不匹配 | 明确 SMAD2/3 还是 SMAD1/5/8，并优化阶段 |
| Noggin效果不明显 | BMP背景低或 Noggin 活性不足 | 设置 BMP4 刺激 + Noggin 拮抗验证 |
| EMT/纤维化标志混乱 | 细胞密度、血清、TGF-β时长影响大 | 统一密度和处理时长，增加 marker panel |

## 小结

SMAD 通路是 TGF-β、Activin、BMP 和 Noggin 这些因子背后的主要解释框架。写实验记录时一定要区分 SMAD2/3 与 SMAD1/5/8，否则很容易把完全不同的分化和抑制逻辑混在一起。

## 参考来源

- [Reactome Signaling by TGF-beta receptor complex](https://reactome.org/content/detail/R-HSA-170834)
