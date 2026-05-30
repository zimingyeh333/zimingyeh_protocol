# IL-2

IL-2（Interleukin-2，白细胞介素-2）是一种 T cell growth factor（T 细胞生长因子/细胞因子），常用于 T 细胞扩增、活化后维持、免疫细胞培养和免疫治疗相关体外体系。

![专用培养支持因子参考图](../z_asset/材/专用培养支持因子/specialized-culture-support-factors-reference.png)

图源：Image2 生成的专用培养支持因子参考图；IL-2 位于免疫细胞培养模块，用于支持 T cell expansion/survival。

## 核心定位

IL-2 不是普通营养补充剂，而是强免疫信号输入。R&D Systems 的 Recombinant Human IL-2 页面说明，IL-2 是 T cell growth factor，可刺激 T cells 和 natural killer cells（NK 细胞）增殖，并参与免疫调节。参考：[R&D Systems Recombinant Human IL-2](https://www.rndsystems.com/products/recombinant-human-il-2-protein_202-il)。

IL-2 主要通过 IL-2 receptor（IL-2 受体）和 [JAK-STAT通路](<../番外/补充知识/JAK-STAT通路.md>) 等信号模块影响 T 细胞扩增、存活、效应状态和部分调节性 T 细胞相关过程。

## 常见用途

| 场景 | IL-2的作用 |
| --- | --- |
| T细胞体外扩增 | 支持活化 T 细胞增殖 |
| CAR-T或TCR-T相关研究 | 维持或扩增工程化 T 细胞 |
| NK细胞培养 | 与其他因子联用支持扩增/活化 |
| Treg相关体系 | IL-2 对 Treg 生存和功能重要 |
| 免疫刺激实验 | 作为 cytokine stimulation（细胞因子刺激）输入 |

## IL-2 vs IL-7

| 项目 | IL-2 | IL-7 |
| --- | --- | --- |
| 常见用途 | 活化 T 细胞扩增、效应状态维持 | 初始/记忆 T 细胞存活、长期维持 |
| 信号强度 | 常更偏扩增和激活 | 更偏生存和 homeostasis |
| 常见风险 | 过强刺激导致表型漂移或耗竭相关变化 | 扩增能力不一定像 IL-2 强 |
| 记录重点 | 浓度、刺激时间、细胞激活状态 | 浓度、细胞亚群、长期培养状态 |

## 使用 protocol

### 重构和保存

**怎么做**：按厂家说明重构，小分装，避免反复冻融。低浓度 cytokine 可考虑含 carrier protein 的重构液，以减少吸附损失。

**为什么**：IL-2 使用浓度低，且免疫细胞对剂量和时间非常敏感。

### 加入培养

**怎么做**：按 T 细胞或 NK 细胞 protocol 设置终浓度和补加频率。记录起始细胞状态、激活方式、培养密度和换液节奏。

**为什么**：IL-2 效果取决于细胞是否已被抗 CD3/CD28、抗原、PHA 或其他方式激活；未激活细胞和活化细胞对 IL-2 的响应不同。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| T细胞不扩增 | 未充分激活、IL-2失活或密度不合适 | 检查激活体系和新鲜 IL-2 |
| 细胞死亡增加 | 刺激过强、密度过高或营养不足 | 优化 IL-2 浓度和换液 |
| 表型漂移 | IL-2浓度/时间过强 | 加入 IL-7/IL-15 等替代或组合策略 |
| 批间差异 | 活性单位、品牌或重构液不同 | 记录 IU/ng 对照和 lot |

## 购买与记录建议

常见供应商包括 [PeproTech](<../番外/试剂厂商/PeproTech.md>)、[R&D Systems](<../番外/试剂厂商/R&D Systems.md>)、[BioLegend](<../番外/试剂厂商/BioLegend.md>)、[Sino Biological](<../番外/试剂厂商/Sino Biological.md>)、[Gibco](<../番外/试剂厂商/Gibco.md>)。免疫细胞实验中建议同时记录质量等级、活性单位、内毒素和是否 GMP/animal-free。

推荐记录模板（中文）：

```text
IL-2产品全名：
品牌：
货号：
批号：
物种来源：
表达系统：
活性单位：IU或比活
重构液：
储液浓度：
终浓度：
补加频率：
细胞类型/亚群：
激活方式：
培养密度：
冻融次数：
异常现象：
```

Recommended record template (English):

```text
IL-2 product full name:
Brand:
Catalog number:
Lot number:
Species source:
Expression system:
Activity units: IU or specific activity
Reconstitution buffer:
Stock concentration:
Final concentration:
Supplementation frequency:
Cell type/subset:
Activation method:
Culture density:
Freeze-thaw cycles:
Abnormal observation:
```

## 小结

IL-2 是 T 细胞培养中最常用的扩增型细胞因子之一。它能强烈改变免疫细胞状态，因此记录时不能只写“加 IL-2”，而要写清浓度、活性单位、补加频率、激活方式和细胞亚群。

## 参考来源

- [R&D Systems Recombinant Human IL-2](https://www.rndsystems.com/products/recombinant-human-il-2-protein_202-il)
- [Thermo Fisher PeproTech Proteins](https://www.thermofisher.com/tr/en/home/brands/peprotech.html)

