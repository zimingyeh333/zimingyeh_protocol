# EasySep

EasySep（EasySep magnetic cell separation system，EasySep 磁性细胞分离系统）是 [STEMCELL Technologies](<../番外/试剂厂商/STEMCELL Technologies.md>) 的 magnetic cell separation（磁性细胞分离）产品族，常用于从 blood（血液）、PBMC（Peripheral Blood Mononuclear Cells，[外周血单个核细胞](<../番外/补充知识/外周血单个核细胞.md>)）、脾脏、骨髓或组织消化液中富集或去除特定细胞群。

![STEMCELL Technologies 专门细胞体系概要图](<../z_asset/番外/试剂厂商/STEMCELL Technologies/stemcell-technologies-summary-abstract-en.png>)

图源：Image2 生成的 STEMCELL Technologies 概要图；EasySep 位于 cell separation 模块。

## 核心定位

EasySep 是一类无柱式 immunomagnetic separation（免疫磁性分离）体系。STEMCELL Technologies 的 EasySep 页面将其定位为快速、无柱式的 magnetic cell isolation（磁性细胞分离）技术，可用于 positive selection（阳性选择）、negative selection（阴性选择）和 depletion（去除）等策略。参考：[STEMCELL Technologies EasySep](https://www.stemcell.com/products/brands/easysep.html)。

EasySep 不是一种“通用磁珠”这么简单，而是由 antibody cocktail（抗体混合物）、magnetic particles（磁性颗粒）、magnet（磁力架/磁体）和样本处理步骤共同决定结果。protocol 中只写“EasySep 分选”信息量不够。

## 主要用途

| 场景 | EasySep 的作用 | 记录重点 |
| --- | --- | --- |
| T细胞分离 | 从 PBMC 中富集 CD3+、CD4+、CD8+ 等细胞 | 阳性/阴性选择、起始 PBMC 数、纯度 |
| NK细胞分离 | 富集 CD56+ NK cells 或去除非目标细胞 | 目标定义、回收率、活率 |
| B细胞/单核细胞分离 | 免疫细胞亚群制备 | clone/cocktail、样本类型 |
| 稀有细胞富集 | 先富集再做流式或培养 | 纯度和回收率都要记录 |
| 去除特定细胞 | depletion strategy（去除策略） | 被去除细胞 marker 和残留比例 |

## 阳性选择 vs 阴性选择

| 策略 | 英文 | 做法逻辑 | 优点 | 风险 |
| --- | --- | --- | --- | --- |
| 阳性选择 | positive selection | 直接标记目标细胞并磁性保留 | 纯度通常较高，流程直观 | 目标细胞表面可能残留抗体/磁颗粒，可能影响活化或后续培养 |
| 阴性选择 | negative selection | 标记非目标细胞并去除，目标细胞保持未标记 | 对目标细胞更温和，适合功能实验 | 纯度受 marker panel 和样本组成影响 |
| 去除 | depletion | 选择性去掉不想要的细胞 | 适合减少干扰细胞 | 不能等同于目标细胞高纯度富集 |

如果后续要做 T cell activation（T 细胞活化）、cytokine stimulation（细胞因子刺激）或长期培养，阴性选择通常更值得优先考虑；如果只做快速检测或需要高纯度目标细胞，阳性选择可能更方便。

## 与其他分离方法对比

| 方法 | 优点 | 局限 | 适合场景 |
| --- | --- | --- | --- |
| EasySep/磁性分离 | 快、设备要求相对低、细胞活性较好 | 纯度和回收率受 kit 与样本影响 | 常规免疫细胞富集 |
| FACS sorting（流式分选） | 可按多 marker 精准分选 | 时间长、应激大、需要仪器和专业操作 | 复杂亚群、稀有细胞、高精度分选 |
| 密度梯度 | 成本较低，适合 PBMC 初步分离 | 不能分特定免疫亚群 | 血液样本初步处理 |
| 贴壁/差速法 | 简单 | 选择性粗糙、偏差大 | 粗略富集单核/贴壁细胞 |

EasySep 常常不是最终答案，而是和 [流式细胞术](<../用(实验流程内容篇)/流式细胞术.md>) 配合：先用 EasySep 富集，再用流式验证纯度、活率和亚群组成。

## 使用 protocol 要点

### 样本准备

**怎么做**：先获得单细胞悬液，去除 clumps（细胞团块）和过多红细胞/死亡细胞；按 kit 说明控制细胞浓度和体积。

**为什么**：细胞团块、血小板、红细胞残留和高死亡率都会降低磁性分离效果，并增加非特异结合。

**可能出错**：样本太脏会导致纯度低、回收率差、磁体分层不清，后续流式背景升高。

### 抗体 cocktail 和磁颗粒孵育

**怎么做**：严格按说明加入 cocktail 和 particles，混匀但不要剧烈吹打，控制孵育时间和温度。

**为什么**：抗体结合不足会降低纯度，过度孵育或粗暴混匀可能影响细胞活性。

**替代策略**：对敏感细胞可优化温度、缓冲液和孵育时间，但每次改动都要记录。

### 纯度和回收率验证

**怎么做**：分离后用 flow cytometry（流式细胞术）检测目标 marker、活率和污染细胞比例。

**为什么**：磁性分离不是“完成了就一定成功”。不同 donor（供体）、样本状态和 kit 批号会显著影响结果。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 纯度低 | 样本质量差、抗体 cocktail 不匹配、细胞数超载 | 降低起始细胞数，检查 marker 和 kit |
| 回收率低 | 细胞死亡多、离心损失、阳性选择过强 | 优化样本处理和离心条件 |
| 细胞活化异常 | 阳性选择标记了功能性受体 | 改用阴性选择或换 marker 策略 |
| 流式背景高 | 未充分洗涤、细胞团块或 Fc 受体非特异结合 | 过滤、加 Fc block，并优化洗涤 |

## 购买与记录建议

EasySep 产品非常依赖目标细胞和样本类型。购买时要确认 species（物种）、sample type（样本类型）、target cell（目标细胞）、positive/negative selection 策略、是否需要专用 magnet 和 compatible buffer。

推荐记录模板（中文）：

```text
产品名称：
品牌：STEMCELL Technologies
EasySep货号：
批号：
目标细胞：
物种：
样本类型：
阳性/阴性选择：
起始细胞数：
起始体积：
磁体型号：
分离后细胞数：
纯度检测marker：
活率：
异常现象：
```

Recommended record template (English):

```text
Product name:
Brand: STEMCELL Technologies
EasySep catalog number:
Lot number:
Target cell:
Species:
Sample type:
Positive/negative selection:
Starting cell number:
Starting volume:
Magnet model:
Recovered cell number:
Purity markers:
Viability:
Abnormal observation:
```

## 小结

EasySep 是免疫细胞和血液细胞处理中很实用的磁性细胞分离体系。最重要的记录点不是“用了 EasySep”，而是目标细胞、样本类型、阳性/阴性选择、起始细胞数、纯度、回收率和活率。

## 参考来源

- [STEMCELL Technologies EasySep](https://www.stemcell.com/products/brands/easysep.html)
