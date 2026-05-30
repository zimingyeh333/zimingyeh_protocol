# JAK-STAT通路

JAK-STAT pathway（Janus Kinase-Signal Transducer and Activator of Transcription pathway，Janus 激酶-信号转导与转录激活因子通路）是 cytokine（细胞因子）把免疫、造血、炎症和生存信号快速传入细胞核的核心通路。

![核心培养信号通路总览](../../z_asset/番外/补充知识/核心培养信号通路/core-culture-signaling-pathways-reference.png)

图源：Image2 生成的核心培养信号通路总览；JAK-STAT 位于 Cytokines -> JAK -> STAT 模块。

## 核心逻辑

许多 cytokine receptor（细胞因子受体）本身没有典型 RTK 那样的内源性酪氨酸激酶结构域，而是依赖 JAK（Janus Kinase，Janus 激酶）家族蛋白。细胞因子结合受体后，JAK 被激活并磷酸化受体和 STAT（Signal Transducer and Activator of Transcription，信号转导与转录激活因子）；STAT 二聚化后进入细胞核调控目标基因。Reactome 将 cytokine signaling in immune system（免疫系统中的细胞因子信号）作为免疫细胞状态调节的重要通路集合整理。参考：[Reactome Cytokine Signaling in Immune system](https://reactome.org/content/detail/R-HSA-1280215)。

在细胞培养里，JAK-STAT 最常见于免疫细胞、造血细胞和部分干细胞/上皮系统的细胞因子刺激。它的输出不是单纯“让细胞活”，而是强烈影响 activation（活化）、survival（存活）、differentiation（分化）、effector state（效应状态）和长期表型。

## 在本知识库中的连接

| 上游试剂/因子 | 常见连接方式 | 实验解释重点 |
| --- | --- | --- |
| [IL-2](<../../材(实验耗材工具篇)/IL-2.md>) | IL-2 receptor -> JAK1/JAK3 -> STAT5 等 | 活化 T 细胞扩增、效应状态和 Treg 相关过程 |
| [IL-7](<../../材(实验耗材工具篇)/IL-7.md>) | IL-7 receptor -> JAK-STAT | T 细胞 homeostasis（稳态）和长期存活支持 |
| [IL-15](<../../材(实验耗材工具篇)/IL-15.md>) | IL-15 receptor -> JAK-STAT | NK 细胞和记忆 T 细胞存活/扩增 |
| 其他细胞因子 | IFN、IL-6 family、GM-CSF 等常连接 JAK-STAT | 不同 STAT 成员对应不同免疫/炎症输出 |

## 常见 STAT 分支

| 分支 | 常见上游 | 常见实验含义 |
| --- | --- | --- |
| STAT1 | IFN相关刺激 | 抗病毒、炎症和干扰素响应 |
| STAT3 | IL-6 family、部分生长/炎症信号 | 炎症、存活、肿瘤和分化状态 |
| STAT5 | IL-2、IL-7、IL-15 等 common gamma chain cytokines | T/NK 细胞存活、扩增和免疫细胞培养 |
| STAT6 | IL-4、IL-13 | Th2 相关免疫响应和过敏/炎症模型 |

## 常见 readout

| Readout | 代表含义 | 注意事项 |
| --- | --- | --- |
| p-STAT1/3/5/6 | 特定 STAT 激活 | 必须写清 STAT 成员和磷酸化位点 |
| STAT核定位 | STAT 进入细胞核 | 适合免疫染色/成像验证 |
| 下游基因 | SOCS、IRF、BCL2 family 等 | marker 必须匹配细胞类型和刺激因子 |
| 细胞扩增/存活 | T/NK 细胞计数、活率、表型 | 是综合结果，不能单独证明 JAK-STAT 激活 |

## IL-2、IL-7、IL-15 的区别

| 因子 | 共同点 | 更常见的使用倾向 |
| --- | --- | --- |
| IL-2 | common gamma chain cytokine，可通过 JAK-STAT 支持免疫细胞 | 活化 T 细胞扩增和效应状态维持 |
| IL-7 | common gamma chain cytokine | 初始/记忆 T 细胞生存和 homeostasis |
| IL-15 | common gamma chain cytokine | NK 细胞、记忆 CD8 T 细胞和长期存活/扩增 |

三者都可能让免疫细胞“状态变好”，但生物学倾向不一样。实验记录不能只写“加 cytokine”，而要写清具体细胞因子、浓度、补加频率、激活状态和细胞亚群。

## 实验记录建议

推荐记录模板（中文）：

```text
细胞因子：
品牌/货号/批号：
终浓度：
补加频率：
细胞类型/亚群：
激活方式：
刺激时间：
检测STAT成员和位点：
是否检测表面marker：
异常现象：
```

Recommended record template (English):

```text
Cytokine:
Brand/catalog/lot:
Final concentration:
Supplementation frequency:
Cell type/subset:
Activation method:
Stimulation time:
STAT member and phosphorylation site measured:
Surface markers measured:
Abnormal observation:
```

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| p-STAT信号弱 | cytokine失活、受体表达低、取样时间不对 | 做 5-60 min 时间梯度并换新分装 |
| 细胞扩增但表型漂移 | cytokine浓度或刺激时间过强 | 降低浓度、改变组合或缩短培养 |
| IL-2/IL-7/IL-15效果混淆 | 只看活率，没有看细胞亚群和表型 | 加入 flow cytometry marker 或转录 readout |
| 背景 p-STAT 高 | 血清、残留 cytokine、细胞密度或炎症刺激 | 严格洗涤/饥饿并设置 unstimulated control |

## 小结

JAK-STAT 是理解 IL-2、IL-7、IL-15 等免疫培养因子的核心通路。它特别适合解释免疫细胞扩增、生存和活化状态，但记录时必须细到“哪个 cytokine、哪个 STAT、哪个细胞亚群、哪个时间点”。

## 参考来源

- [Reactome Cytokine Signaling in Immune system](https://reactome.org/content/detail/R-HSA-1280215)
