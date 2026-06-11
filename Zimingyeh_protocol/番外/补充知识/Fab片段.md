# Fab片段

Fab fragment（fragment antigen-binding，抗原结合片段）是 [抗体](抗体.md) 分子中负责识别 [抗原](抗原.md) 的区域，包含重链和轻链的可变区以及部分恒定区；它保留抗原结合能力，但不包含完整 [Fc片段](Fc片段.md) 的效应功能。

![Antibody recognition basics](../../z_asset/番外/补充知识/抗体识别基础/antibody-recognition-basics-reference.png)

图：抗体识别基础示意。Fab 负责“识别谁”，Fc 更多影响“被谁识别、如何被清除、是否触发效应功能”。

## 一句话理解

Fab 片段是抗体的“识别头部”：它决定抗体能不能抓住目标表位。

Janeway Immunobiology 中对抗体结合位点的描述指出，重链和轻链可变区的互补决定区共同形成抗原结合位点，决定抗体对抗原的特异性。参考：[NCBI Bookshelf: Antigen recognition by B-cell and T-cell receptors](https://www.ncbi.nlm.nih.gov/books/NBK27160/)。

## Fab 片段包含什么

| 组成 | 作用 |
| --- | --- |
| 重链可变区 | 参与形成抗原结合位点 |
| 轻链可变区 | 与重链可变区共同决定识别表面 |
| CDR | Complementarity-determining region，互补决定区，是抗原接触的核心区域 |
| 部分恒定区 | 帮助维持结构稳定 |

一个完整 IgG 抗体通常有两个 Fab 臂，因此可以有两个抗原结合位点。若两个结合位点同时抓住同一抗原或相邻抗原，会带来比单点亲和力更强的整体结合效果。

## 实验中为什么关心 Fab

| 场景 | Fab 相关意义 |
| --- | --- |
| 抗体特异性判断 | Fab 的 CDR 结构决定识别哪个表位 |
| 组织或细胞染色 | Fab 片段更小，理论上组织渗透性更好 |
| 阻断实验 | Fab 可以阻断目标而减少 Fc 介导效应 |
| 受体功能研究 | 使用 Fab 可降低 Fc 受体引起的非特异效应 |
| 抗体工程 | scFv、Fab、纳米抗体等都围绕抗原结合结构设计 |

如果实验问题来自 Fc 受体结合、补体激活或二抗非特异识别，换成 Fab 或 F(ab')2 片段有时能降低背景。但如果问题来自 Fab 本身识别了错误表位，换片段形式不能解决特异性问题。

## Fab vs Fc

| 项目 | Fab 片段 | Fc 片段 |
| --- | --- | --- |
| 核心功能 | 识别抗原 | 介导效应功能和二抗识别 |
| 决定因素 | 可变区和 CDR | 抗体类别、亚型、糖基化 |
| 和特异性关系 | 直接决定特异性 | 不决定目标表位 |
| 和背景关系 | 错误识别会导致假阳性 | Fc 受体结合可导致非特异背景 |
| 常见应用 | 阻断、抗体工程、降低 Fc 效应 | 免疫沉淀、二抗检测、细胞效应研究 |

## 常见错误与 troubleshooting

| 异常 | 可能原因 | 调整方向 |
| --- | --- | --- |
| 使用 Fab 后仍有非特异信号 | Fab 本身识别了非目标结构 | 换抗体克隆或做特异性验证 |
| 使用 Fab 后信号变弱 | 缺少二价结合或信号放大体系改变 | 提高浓度或延长孵育，重新优化检测体系 |
| 组织染色背景高 | 不是 Fc 问题，而是封闭、固定或自发荧光问题 | 分层排查 Fc blocking、封闭液和成像设置 |
| 阻断效果不稳定 | Fab 亲和力不足或用量不够 | 做剂量梯度和时间梯度 |

## 记录模板

中文记录：

```text
Fab 来源抗体：
目标抗原：
片段形式：Fab / F(ab')2 / scFv / 其他
制备或购买来源：
货号：
批号：
应用场景：
工作浓度：
是否保留 Fc：
异常观察：
```

English record:

```text
Parent antibody:
Target antigen:
Fragment format: Fab / F(ab')2 / scFv / other
Source:
Catalog number:
Lot number:
Application:
Working concentration:
Fc retained: yes / no
Abnormal observations:
```

## 小结

Fab 片段决定抗体识别对象，是理解表位、亲和力和特异性的核心结构。凡是和“抗体到底抓住了谁”有关的问题，优先回到 Fab 和 CDR 来思考。

## 参考来源

- [NCBI Bookshelf: Antigen recognition by B-cell and T-cell receptors](https://www.ncbi.nlm.nih.gov/books/NBK27160/)
