# DTT

DTT（dithiothreitol，二硫苏糖醇；也称 Cleland's reagent，克莱兰试剂）是一种常用 reducing agent（还原剂），在 [Western blot](<../用(实验流程内容篇)/Western blot.md>) 和 [SDS-PAGE](<../用(实验流程内容篇)/SDS-PAGE.md>) 样本处理中主要用于还原蛋白 disulfide bond（二硫键），帮助蛋白充分变性。

![WB缓冲体系基础试剂参考图](../z_asset/材/WB缓冲体系基础试剂/wb-buffer-core-reagents-reference.png)

图源：Image2 生成的 WB/SDS-PAGE 缓冲体系基础试剂参考图；DTT 位于上排小管，表示其常作为少量高浓度还原剂加入 sample buffer（样本缓冲液）。

## 核心作用

[SDS](十二烷基硫酸钠.md) 主要破坏蛋白非共价相互作用并赋予负电荷，但不能充分断开二硫键。DTT 通过还原二硫键，让由二硫键连接的蛋白结构或亚基分开，使 SDS-PAGE 结果更接近单条多肽链的表观分子量。

Thermo Fisher 的 protein reducing agents 页面把 DTT、TCEP 和 β-mercaptoethanol 列为常见 protein disulfide reducing agents（蛋白二硫键还原剂）。参考：[Thermo Fisher Protein Denaturing and Reducing Agents](https://www.thermofisher.com/us/en/home/life-science/protein-biology/protein-labeling-crosslinking/protein-modification/reducing-agents-protein-disulfides.html)。

## 常见使用场景

| 场景 | 作用 | 注意点 |
| --- | --- | --- |
| 还原性 SDS-PAGE | 打开二硫键 | 结果可能不同于非还原胶 |
| [Laemmli上样缓冲液](Laemmli上样缓冲液.md) | 与 SDS、加热共同变性样本 | 通常现加或用稳定配方 |
| 蛋白纯化 buffer | 保护半胱氨酸不被氧化 | 可能影响金属柱、标记反应 |
| 酶保存/反应体系 | 维持还原环境 | 浓度过高可能抑制某些反应 |
| BCA 蛋白定量 | 干扰铜还原体系 | 高浓度 DTT 会影响 [BCA蛋白定量试剂盒](BCA蛋白定量试剂盒.md) |

## DTT vs β-巯基乙醇 vs TCEP

| 还原剂 | 优点 | 局限 | 常见选择 |
| --- | --- | --- | --- |
| DTT | 还原能力强，气味小于 β-ME | 易氧化，水溶液稳定性有限 | SDS-PAGE 样本还原 |
| [β-巯基乙醇](β-巯基乙醇.md) | 便宜，经典 Laemmli 体系常用 | 气味强、挥发性和毒性更烦 | 传统 WB sample buffer |
| [TCEP](TCEP.md) | 无硫醇气味，较稳定 | 价格较高，某些化学反应不兼容 | 蛋白质组学、特殊还原体系 |

Invitrogen NuPAGE Sample Reducing Agent 的产品资料显示其为含 500 mM DTT 的 10x stabilized liquid form（稳定化液体形式），用于 NuPAGE 样本体系。参考：[Fisher Scientific NuPAGE Sample Reducing Agent](https://www.fishersci.com/shop/products/novex-nupage-sample-reducing-agent-10x-2/np0009)。

## 使用 protocol

### 加入样本缓冲液

**怎么做**：按 protocol 将 DTT 加入 2x/4x sample buffer，混合蛋白样本后按目标体系加热变性。

**为什么**：DTT 需要和 SDS、热变性配合，才能让很多含二硫键蛋白充分展开。

**注意事项**：

- DTT 常建议现加或使用小分装冻存。
- 不同商业 sample buffer 的还原剂浓度不同，不能只写“加 loading buffer”。
- 需要做 non-reducing SDS-PAGE（非还原 SDS-PAGE）时不要加 DTT/β-ME/TCEP。

### 储存和分装

**怎么做**：固体按说明书低温干燥保存；水溶液分装，避免反复冻融和长时间暴露空气。

**为什么**：DTT 会被氧气氧化，氧化后的还原能力下降。

Sigma-Aldrich 的 DTT 产品问答中也提示 DTT 溶液稳定性依赖密封、低温和隔绝氧气等条件。参考：[Sigma-Aldrich DL-Dithiothreitol D0632](https://www.sigmaaldrich.com/SB/en/product/sial/d0632)。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 非预期高分子条带 | DTT 漏加或失效，二硫键未还原 | 换新 DTT，重新变性 |
| 目标蛋白在还原后消失/改变 | 目标依赖二硫键构象或抗体识别构象 | 比较还原/非还原条件 |
| BCA 定量异常偏高 | DTT 干扰铜还原反应 | 用兼容试剂盒或先去除还原剂 |
| 蛋白标记反应失败 | DTT 与马来酰亚胺等巯基反应冲突 | 反应前脱盐或换 TCEP/其他策略 |
| 同一抗体结果不稳定 | sample buffer 中 DTT 老化 | 固定分装和开封日期 |

## 安全与废液

DTT 应按具体产品 [SDS与GHS标签](<../实验室安全/SDS与GHS标签.md>) 处理，避免吸入粉末或直接接触皮肤。含 DTT 的样本废液通常还含 SDS、蛋白样本和其他裂解液成分，按实验室样本来源和化学成分综合处理。

## 购买与记录建议

常见供应商包括 [Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>)、[Merck](<../番外/试剂厂商/Merck.md>)/[Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>)、[Bio-Rad](<../番外/试剂厂商/Bio-Rad.md>)、[NEB](<../番外/试剂厂商/NEB.md>)。日常 WB 可买粉末自配或购买稳定化 10x reducing agent；若批量做样本，稳定化液体更省心。

推荐记录模板（中文）：

```text
DTT形式：粉末/储液/商业reducing agent
浓度：
品牌：
货号：
批号：
开封日期：
分装日期：
终浓度：
是否加热变性：
是否还原条件：
异常现象：
```

Recommended record template (English):

```text
DTT form: powder/stock solution/commercial reducing agent
Concentration:
Brand:
Catalog number:
Lot number:
Open date:
Aliquot date:
Final concentration:
Heat denaturation: yes/no
Reducing condition: yes/no
Abnormal observation:
```

## 小结

DTT 负责处理 SDS 不能解决的二硫键问题。做 WB 时，它决定的是“样本是否真正处于还原变性状态”；做定量或下游化学反应时，它又可能成为强干扰物。

## 参考来源

- [Thermo Fisher Protein Denaturing and Reducing Agents](https://www.thermofisher.com/us/en/home/life-science/protein-biology/protein-labeling-crosslinking/protein-modification/reducing-agents-protein-disulfides.html)
- [Fisher Scientific NuPAGE Sample Reducing Agent](https://www.fishersci.com/shop/products/novex-nupage-sample-reducing-agent-10x-2/np0009)
- [Sigma-Aldrich DL-Dithiothreitol D0632](https://www.sigmaaldrich.com/SB/en/product/sial/d0632)
