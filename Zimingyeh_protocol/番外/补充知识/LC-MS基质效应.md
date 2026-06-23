# LC-MS 基质效应

LC-MS matrix effect（LC-MS 基质效应）是指样本中与目标物同时进入电离过程的背景成分改变目标物离子化效率，导致信号被抑制或增强。它是 LC-MS 定量里最常见、也最容易被低估的系统误差来源之一。

![LC-MS 定量策略概览](../../z_asset/番外/补充知识/LC-MS定量策略/lcms-quantification-strategies-zh.png)

图源：Image2 生成的 LC-MS 定量策略示意图。基质效应对应图中“离子抑制/增强、评估与校正”的模块。

## 和普通“基质效应”的关系

广义 [基质效应](基质效应.md) 指真实样本背景影响检测结果；在 ELISA 中，它常影响抗原-抗体结合或显色。在 LC-MS 中，基质效应更具体地表现为 ion suppression（离子抑制）或 ion enhancement（离子增强）：目标物量没有变，但离子源中产生的目标离子变少或变多。

Matuszewski 等提出了用 post-extraction spike、matrix factor 等方式系统评价 LC-MS/MS 定量中的基质效应。参考：[Matuszewski et al., 2003](https://doi.org/10.1021/ac020361s)。

## 常见来源

| 来源 | 例子 | 影响 |
| --- | --- | --- |
| 生物样本背景 | 血浆蛋白、磷脂、盐、胆汁酸 | 抑制电喷雾离子化 |
| 前处理残留 | 去污剂、PEG、塑化剂、盐 | 背景升高、峰形变差 |
| 色谱共流出物 | 内源性代谢物、杂质峰 | 只在特定保留时间影响目标物 |
| 进样系统污染 | carryover、针座残留 | 空白样本出现假峰 |
| 流动相和添加剂 | 不合适盐类、缓冲盐 | 离子源污染或信号下降 |

## 如何发现

| 表现 | 可能提示 |
| --- | --- |
| 标准曲线在溶剂中很好，真实样本回收差 | 基质抑制或增强 |
| 不同个体样本同浓度响应差异大 | 个体基质不同 |
| 目标峰保留时间附近总离子流异常 | 共流出干扰 |
| 内标和目标物峰面积同时下降 | 进样或离子源整体抑制 |
| 目标物下降但内标不下降 | 内标不够匹配或共流出不一致 |

## 评估方法

| 方法 | 怎么做 | 能回答什么 |
| --- | --- | --- |
| Post-extraction spike（提取后加标） | 空白基质提取后加入目标物 | 基质是否影响离子化 |
| Post-column infusion（柱后灌注） | 持续灌注目标物，同时进样空白基质 | 哪个保留时间窗口有抑制 |
| Matrix factor（基质因子） | 比较基质中响应和纯溶剂响应 | 基质抑制/增强程度 |
| IS-normalized matrix factor（内标归一化基质因子） | 用目标物/内标比值计算 | 内标是否能校正基质效应 |
| Dilution integrity（稀释完整性） | 稀释样本后回算 | 稀释能否降低基质干扰 |

ICH M10 把 selectivity、matrix effect、carryover、accuracy、precision 等视为生物分析方法验证的重要组成。参考：[ICH M10 Bioanalytical Method Validation](https://database.ich.org/sites/default/files/M10_Guideline_Step4_2022_0524.pdf)。

## 降低基质效应的策略

| 策略 | 适合情况 | 注意事项 |
| --- | --- | --- |
| 优化样本前处理 | 血浆、组织、培养基等复杂样本 | 蛋白沉淀最简单，但去磷脂能力有限 |
| 延长或优化色谱分离 | 共流出干扰明显 | 牺牲通量换取准确性 |
| 使用 [同位素内标](同位素内标.md) | 靶向定量 | 内标最好与目标物共流出 |
| [同位素稀释](同位素稀释.md) | 高准确度绝对定量 | 内标加入时间决定能校正哪些误差 |
| 基质匹配标准曲线 | 空白基质可获得 | 空白基质必须足够接近真实样本 |
| 稀释样本 | 信号足够高时 | 不能稀释到低于定量下限 |

## 常见误区

| 误区 | 为什么危险 |
| --- | --- |
| 只看回收率，不看基质效应 | 回收率和离子化抑制是不同问题 |
| 用结构相似内标就够了 | 不共流出时可能无法校正局部抑制 |
| 标准曲线线性好就说明样本准 | 标准点可能在干净溶剂中，不代表真实基质 |
| 换更灵敏仪器就能解决 | 基质效应是样本和离子化问题，不只是灵敏度问题 |
| 忽略不同批次基质 | 不同个体、不同采血管、不同培养基都可能改变结果 |

## 小结

LC-MS 基质效应本质上是“背景成分改变离子化效率”。解决它不能只靠统计模型，而要从样本前处理、色谱分离、同位素内标、基质匹配和方法验证共同控制。

## 参考来源

- [Matuszewski et al., Strategies for the assessment of matrix effect in quantitative bioanalytical methods based on HPLC-MS/MS, Analytical Chemistry, 2003](https://doi.org/10.1021/ac020361s)
- [ICH M10 Bioanalytical Method Validation and Study Sample Analysis](https://database.ich.org/sites/default/files/M10_Guideline_Step4_2022_0524.pdf)
- [FDA Bioanalytical Method Validation Guidance for Industry](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/bioanalytical-method-validation-guidance-industry)
