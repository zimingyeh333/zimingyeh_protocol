# IL-7

IL-7（Interleukin-7，白细胞介素-7）是一种对 T cell development and homeostasis（T 细胞发育和稳态）非常重要的 cytokine（细胞因子），常用于 T 细胞长期维持、naive/memory T cell（初始/记忆 T 细胞）培养和免疫细胞状态控制。

![专用培养支持因子参考图](../z_asset/材/专用培养支持因子/specialized-culture-support-factors-reference.png)

图源：Image2 生成的专用培养支持因子参考图；IL-7 位于免疫细胞培养模块，用于支持 T cell survival。

## 核心定位

R&D Systems 的 Recombinant Human IL-7 页面说明，IL-7 是影响 lymphocyte development（淋巴细胞发育）的 cytokine，并可支持 T cell 和 B cell 前体相关过程。参考：[R&D Systems Recombinant Human IL-7](https://www.rndsystems.com/products/recombinant-human-il-7-protein_207-il)。

在培养体系里，IL-7 常被用来支持 T 细胞 survival（存活）和 homeostatic maintenance（稳态维持），而不是像 IL-2 那样默认强促扩增。它常和 IL-15、IL-2 或抗原/抗 CD3/CD28 激活体系共同出现。

## 常见用途

| 场景 | IL-7的作用 |
| --- | --- |
| 初始T细胞维持 | 支持 survival 和低分化状态 |
| 记忆T细胞培养 | 帮助维持 memory-like phenotype |
| T细胞长期培养 | 降低纯 IL-2 强扩增带来的状态压力 |
| 免疫细胞分化模型 | 模拟 lymphoid cytokine niche |
| CAR-T/TCR-T研究 | 与 IL-15、IL-2 等比较或联用 |

## IL-7 vs IL-2

| 项目 | IL-7 | IL-2 |
| --- | --- | --- |
| 常见逻辑 | survival/homeostasis | activation/expansion |
| 适合亚群 | naive、memory-like T cells 常见 | activated effector T cells 常见 |
| 风险点 | 扩增不一定强，需配合激活 | 可能推动强激活、耗竭或表型漂移 |
| 记录重点 | 细胞亚群和长期状态 | 激活方式和补加频率 |

## 使用 protocol

### 重构和保存

**怎么做**：按厂家说明重构，低温小分装，避免反复冻融。若使用 carrier-free 版本，要特别注意低浓度吸附损失。

**为什么**：IL-7 对免疫细胞状态影响强，批次和有效剂量变化会转化成表型差异。

### 加入培养

**怎么做**：按 T 细胞或 lymphoid cell protocol 设置终浓度和补加频率，记录是否与 IL-2、IL-15、抗 CD3/CD28 或抗原刺激联用。

**为什么**：IL-7 的效果与细胞初始状态、受体表达和其他 cytokine 组合密切相关。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 细胞不扩增 | IL-7更偏存活，不是强扩增信号 | 加入激活体系或比较 IL-2/IL-15 |
| 表型不稳定 | cytokine组合或补加频率变化 | 固定 IL-7/IL-2/IL-15 条件 |
| 存活改善不明显 | IL-7失活、受体低或细胞已严重受损 | 换新分装并检测状态 |
| 批间差异 | 活性单位或表达系统不同 | 记录 lot 和比活 |

## 购买与记录建议

常见供应商包括 [PeproTech](<../番外/试剂厂商/PeproTech.md>)、[R&D Systems](<../番外/试剂厂商/R&D Systems.md>)、[BioLegend](<../番外/试剂厂商/BioLegend.md>)、[Sino Biological](<../番外/试剂厂商/Sino Biological.md>)、[Gibco](<../番外/试剂厂商/Gibco.md>)。免疫细胞培养中，最好记录活性单位、重构液、内毒素和质量等级。

推荐记录模板（中文）：

```text
IL-7产品全名：
品牌：
货号：
批号：
物种来源：
表达系统：
活性单位：
重构液：
储液浓度：
终浓度：
补加频率：
是否联用IL-2/IL-15：
细胞类型/亚群：
激活方式：
冻融次数：
异常现象：
```

Recommended record template (English):

```text
IL-7 product full name:
Brand:
Catalog number:
Lot number:
Species source:
Expression system:
Activity units:
Reconstitution buffer:
Stock concentration:
Final concentration:
Supplementation frequency:
IL-2/IL-15 combined: yes/no
Cell type/subset:
Activation method:
Freeze-thaw cycles:
Abnormal observation:
```

## 小结

IL-7 是偏 T 细胞生存和稳态维持的细胞因子。它和 IL-2 的实验意义不同：IL-2 常用于强扩增，IL-7 更常用于长期维持、记忆样状态和较温和的 survival support。

## 参考来源

- [R&D Systems Recombinant Human IL-7](https://www.rndsystems.com/products/recombinant-human-il-7-protein_207-il)
- [Thermo Fisher PeproTech Proteins](https://www.thermofisher.com/tr/en/home/brands/peprotech.html)

