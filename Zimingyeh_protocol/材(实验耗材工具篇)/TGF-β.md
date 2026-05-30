# TGF-β

TGF-β（Transforming Growth Factor beta，转化生长因子 β）是一类通过 TGF-β receptor（TGF-β 受体）和 [SMAD通路](<../番外/补充知识/SMAD通路.md>) 调控细胞分化、免疫调节、上皮-间质转化、纤维化和细胞命运的 [生长因子](生长因子.md) 家族成员。实验中最常见的是 TGF-β1。

![生长因子信号模块参考图](../z_asset/材/生长因子模块/growth-factor-signaling-modules-reference.png)

图源：Image2 生成的生长因子信号模块参考图；TGF-beta 位于 TGF-β/BMP/Activin-SMAD 模块，主要通过 SMAD2/3 影响分化和命运。

## 核心定位

TGF-β 通常通过 type I/type II serine-threonine kinase receptors（I/II 型丝氨酸/苏氨酸激酶受体）激活 SMAD2/3。R&D Systems 的 recombinant human TGF-β1 产品资料说明，TGF-β1 是多功能 cytokine，可调控 proliferation、differentiation、adhesion、migration 和 immune function。参考：[R&D Systems Recombinant Human TGF-β1](https://www.rndsystems.com/products/recombinant-human-tgf-beta-1-protein_240-b)。

在培养体系里，TGF-β 不只是“促生长”。很多情况下它更像细胞命运和状态调控因子，可能促进分化、抑制增殖、诱导 EMT 或改变免疫相关表型。

## 常见用途

| 场景 | TGF-β的角色 |
| --- | --- |
| EMT模型 | 诱导 epithelial-mesenchymal transition（上皮-间质转化） |
| 纤维化模型 | 激活成纤维细胞、胶原和 ECM 相关表达 |
| 免疫调节 | 调控 T cell、巨噬细胞和炎症相关状态 |
| 干细胞分化 | 与 Activin/Nodal/BMP 等共同决定谱系方向 |
| 肿瘤微环境 | 模拟免疫抑制、迁移或侵袭相关信号 |

## TGF-β vs Activin A/BMP4

| 因子 | 主要SMAD模块 | 常见培养含义 |
| --- | --- | --- |
| TGF-β | SMAD2/3 | EMT、免疫调节、纤维化、状态改变 |
| [Activin A](<Activin A.md>) | SMAD2/3 | 内胚层诱导、干细胞分化、发育模型 |
| [BMP4](BMP4.md) | SMAD1/5/8 | BMP信号、分化、骨/胚层相关诱导 |

三者都属于 TGF-β superfamily（TGF-β 超家族）相关信号，但不能互相替代。

## 使用 protocol

### 重构和活化注意

**怎么做**：按厂家说明重构。部分 TGF-β 产品和生物样本中的 TGF-β 可能涉及 latent form（潜伏形式）与 active form（活性形式）的区别，实验时要看清产品是否为 active recombinant protein。

**为什么**：TGF-β 活性状态直接决定是否能刺激细胞；如果研究内源 TGF-β，还要特别区分总量和活性量。

**注意事项**：

- TGF-β 用量低，避免反复冻融和吸附损失。
- 做 pSMAD2/3、EMT、纤维化 marker 检测时，要记录刺激时间。
- TGF-β 常常改变细胞生长速度，不能只用细胞数解释结果。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| pSMAD2/3无响应 | 因子失活、浓度不足或受体表达低 | 换新分装并设置时间梯度 |
| 细胞增殖下降 | TGF-β本身可抑制某些细胞增殖 | 不要误判为毒性 |
| EMT结果不稳定 | 细胞密度、血清、时间、批号不同 | 固定密度和刺激方案 |
| 批间差异 | 活性单位或重构方式变化 | 记录 ED50/活性和 lot |

## 购买与记录建议

常见供应商包括 [PeproTech](<../番外/试剂厂商/PeproTech.md>)、[R&D Systems](<../番外/试剂厂商/R&D Systems.md>)、[BioLegend](<../番外/试剂厂商/BioLegend.md>)、[Sino Biological](<../番外/试剂厂商/Sino Biological.md>)、[Sigma](<../番外/试剂厂商/Sigma.md>)/[Merck](<../番外/试剂厂商/Merck.md>)。购买时要区分 TGF-β1、TGF-β2、TGF-β3，记录 active/latent 状态和生物活性。

推荐记录模板（中文）：

```text
TGF-β亚型：
品牌：
货号：
批号：
物种来源：
active/latent：
表达系统：
重构液：
储液浓度：
终浓度：
刺激时间：
检测指标：
冻融次数：
使用细胞：
异常现象：
```

Recommended record template (English):

```text
TGF-beta isoform:
Brand:
Catalog number:
Lot number:
Species source:
Active/latent:
Expression system:
Reconstitution buffer:
Stock concentration:
Final concentration:
Stimulation time:
Readouts:
Freeze-thaw cycles:
Cell type:
Abnormal observation:
```

## 小结

TGF-β 是强状态调控因子，不应只按“促生长因子”理解。它经常用于 EMT、纤维化、免疫调节和分化实验，关键记录是亚型、活性状态、浓度、刺激时间和 readout。

## 参考来源

- [R&D Systems Recombinant Human TGF-β1](https://www.rndsystems.com/products/recombinant-human-tgf-beta-1-protein_240-b)
- [Thermo Fisher PeproTech Proteins](https://www.thermofisher.com/tr/en/home/brands/peprotech.html)

