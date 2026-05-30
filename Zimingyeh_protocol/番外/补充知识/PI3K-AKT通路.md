# PI3K-AKT通路

PI3K-AKT pathway（Phosphoinositide 3-Kinase-Protein Kinase B pathway，磷脂酰肌醇 3-激酶-蛋白激酶 B 通路）是细胞将生长因子、胰岛素样信号和营养状态转化为 survival（存活）、metabolism（代谢）、growth（生长）和 anti-apoptosis（抗凋亡）的核心通路。

![核心培养信号通路总览](../../z_asset/番外/补充知识/核心培养信号通路/core-culture-signaling-pathways-reference.png)

图源：Image2 生成的核心培养信号通路总览；PI3K-AKT 位于第二个 RTK -> PI3K -> PIP3 -> AKT 模块。

## 核心逻辑

PI3K（Phosphoinositide 3-Kinase，磷脂酰肌醇 3-激酶）被 RTK、insulin receptor（胰岛素受体）或其他上游信号激活后，可促进 PIP3（phosphatidylinositol 3,4,5-trisphosphate，磷脂酰肌醇 3,4,5-三磷酸）形成，并招募/激活 AKT（Protein Kinase B，蛋白激酶 B）。Reactome 的 PIP3 activates AKT signaling 页面把 PIP3 生成、AKT 招募和下游调控作为该轴的核心事件整理。参考：[Reactome PIP3 activates AKT signaling](https://reactome.org/content/detail/R-HSA-1257604)。

在细胞培养里，PI3K-AKT 常是“细胞能不能活、能不能适应无血清或低血清条件”的解释入口。它也和 mTOR（mechanistic Target Of Rapamycin，雷帕霉素机制靶蛋白）相关蛋白合成、营养感知和细胞大小调控高度耦合。

## 在本知识库中的连接

| 上游试剂/因子 | 常见连接方式 | 实验解释重点 |
| --- | --- | --- |
| [胰岛素](<../../材(实验耗材工具篇)/胰岛素.md>) | insulin receptor -> PI3K-AKT | 无血清培养和代谢实验中非常关键 |
| [ITS补充剂](<../../材(实验耗材工具篇)/ITS补充剂.md>) | 胰岛素组分可提供 PI3K-AKT 相关生存/代谢输入 | 不能把 ITS 只理解成“营养补充” |
| [EGF](<../../材(实验耗材工具篇)/EGF.md>) | EGFR -> PI3K-AKT，也可并行 MAPK-ERK | 上皮/类器官体系中的存活与增殖耦合 |
| [FGF2](<../../材(实验耗材工具篇)/FGF2.md>) | FGFR -> PI3K-AKT/MAPK-ERK | 干细胞和神经前体培养中的状态维持 |
| [BDNF](<../../材(实验耗材工具篇)/BDNF.md>)、[GDNF](<../../材(实验耗材工具篇)/GDNF.md>) | 神经营养因子受体 -> PI3K-AKT | 神经元存活和应激耐受解释 |

## 常见 readout

| Readout | 代表含义 | 注意事项 |
| --- | --- | --- |
| p-AKT S473/T308 | AKT 激活的常用 readout | 两个位点意义不同，最好写清抗体位点 |
| p-S6、p-4EBP1 | mTORC1 下游蛋白合成相关输出 | 可受氨基酸、血清和细胞密度影响 |
| cleaved caspase-3、Annexin V | 凋亡/死亡 readout | 是下游表型，不是 PI3K-AKT 活性本身 |
| 细胞活力/ATP assay | 综合生存和代谢状态 | 易受细胞数、代谢速率和药物干扰 |

## 和 MAPK-ERK 的区别

PI3K-AKT 和 [MAPK-ERK通路](MAPK-ERK通路.md) 常被同一个生长因子同时打开，所以解释实验时不要把二者混成“生长信号”。

| 项目 | PI3K-AKT | MAPK-ERK |
| --- | --- | --- |
| 更偏向 | 生存、代谢、抗凋亡、蛋白合成 | 增殖、分化、早期转录响应 |
| 常见刺激 | 胰岛素、IGF、EGF、FGF、神经营养因子 | EGF、FGF、血清、生长因子 |
| 常见 readout | p-AKT、p-S6、p-4EBP1 | p-ERK1/2、p-MEK |
| 实验风险 | 活力升高不一定代表增殖升高 | ERK 激活不一定代表细胞更多 |

## 实验记录建议

推荐记录模板（中文）：

```text
上游刺激：
是否含血清：
胰岛素/IGF/生长因子终浓度：
刺激时间：
p-AKT检测位点：
是否同时检测p-S6或p-4EBP1：
细胞密度：
营养状态/换液时间：
抑制剂或阳性对照：
异常现象：
```

Recommended record template (English):

```text
Upstream stimulus:
Serum condition:
Insulin/IGF/growth factor final concentration:
Stimulation time:
p-AKT phosphorylation site:
p-S6 or p-4EBP1 measured:
Cell density:
Nutrient status/media-change timing:
Inhibitor or positive control:
Abnormal observation:
```

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| p-AKT不升高 | 上游受体低、刺激因子失活、时间点不合适 | 做时间梯度并设置已知阳性刺激 |
| p-S6很高但p-AKT不明显 | mTORC1 受营养/氨基酸或其他通路影响 | 同时记录培养基、血清和换液时间 |
| 细胞活力升高但增殖不变 | 代谢增强或死亡减少，而非细胞周期推进 | 同时检测 EdU/Ki-67 或细胞计数 |
| 药物实验背景不稳定 | 血清、胰岛素或 ITS 未严格控制 | 做 serum/insulin 定义条件 |

## 小结

PI3K-AKT 是理解无血清培养、胰岛素/ITS 添加、生长因子促存活和神经营养因子支持时的核心通路。它经常和 MAPK-ERK 并行，但实验结论要分清“存活/代谢变好”和“细胞真正增殖增加”。

## 参考来源

- [Reactome PIP3 activates AKT signaling](https://reactome.org/content/detail/R-HSA-1257604)
