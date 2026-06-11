# Fc受体

Fc receptor（Fc 受体，常写作 FcR）是一类能够结合 [抗体](抗体.md) [Fc片段](Fc片段.md) 的细胞表面受体；在实验中，Fc 受体常见于免疫细胞，可能带来特异性生物效应，也可能造成抗体染色和流式检测的非特异背景。

![Antibody recognition basics](../../z_asset/番外/补充知识/抗体识别基础/antibody-recognition-basics-reference.png)

图：抗体识别基础示意。Fab 负责识别抗原，Fc 则可能被 Fc 受体、二抗或 Protein A/G 等系统识别。

## 一句话理解

Fc 受体回答的是：“细胞会不会通过抗体尾部抓住这支抗体？”

Wikipedia 的 Fc receptor 页面指出，Fc 受体存在于多种免疫细胞表面，可结合抗体 Fc 区，并参与吞噬、细胞毒性等免疫功能。参考：[Wikipedia: Fc receptor](https://en.wikipedia.org/wiki/Fc_receptor)。

## 常见 Fc 受体类型

| 类型 | 主要结合对象 | 常见意义 |
| --- | --- | --- |
| Fc gamma receptor，FcγR | IgG | 吞噬、ADCC、流式背景、Fc blocking |
| Fc alpha receptor，FcαR | IgA | 黏膜免疫相关 |
| Fc epsilon receptor，FcεR | IgE | 过敏反应、肥大细胞和嗜碱性粒细胞相关 |
| FcRn | IgG | IgG 回收、半衰期、母婴转运 |

常规实验里最常遇到的是 FcγR，因为多数实验抗体是一抗或二抗 IgG，而巨噬细胞、单核细胞、树突状细胞、中性粒细胞、NK 细胞等可能表达 FcγR。

## 为什么会造成实验背景

| 场景 | 机制 | 表现 |
| --- | --- | --- |
| 流式细胞术 | 细胞 FcR 结合抗体 Fc 区 | 阴性群体整体上移或假阳性 |
| 免疫荧光 | 组织免疫细胞 FcR 抓住抗体 | 背景点状或非目标细胞染色 |
| 免疫组化 | 巨噬细胞等 FcR 阳性细胞结合抗体 | 炎症区域背景高 |
| 细胞功能实验 | FcR 触发细胞活化或 ADCC | 结果混入 Fc 介导效应 |
| 抗体药效研究 | Fc 工程改变效应功能 | 不能只看 Fab 结合能力 |

如果目标细胞本身就是免疫细胞，Fc 受体背景要优先排查。否则你看到的信号可能不是抗体 Fab 识别目标抗原，而是细胞通过 Fc 受体抓住了抗体尾部。

## 常见控制策略

| 策略 | 适用场景 | 注意 |
| --- | --- | --- |
| [Fc封闭剂](<../../材(实验耗材工具篇)/Fc封闭剂.md>) | 流式、免疫细胞染色 | 根据物种选择 human/mouse 等版本 |
| 使用 F(ab')2 或 Fab 二抗 | 降低二抗 Fc 相关背景 | 信号体系需要重新优化 |
| 交叉吸附二抗 | 多重染色 | 减少二抗识别非目标物种 Ig |
| 同型对照 | 流式或染色辅助判断 | 不能替代阴性生物学对照 |
| 阴性细胞群体 | 流式分群 | 比单纯同型对照更有解释力 |
| 直接标记一抗 | 避免二抗 Fc 或交叉识别 | 成本高，灵活性较低 |

## 和 Fab/Fc 的关系

| 问题 | 优先考虑 |
| --- | --- |
| 信号是否来自目标抗原 | Fab、表位、特异性 |
| 免疫细胞背景是否过高 | Fc 受体、Fc block、二抗选择 |
| 抗体功能是否触发细胞效应 | Fc 片段、FcR 类型、抗体亚型 |
| 同一克隆不同 Fc 工程表现不同 | Fc 糖基化、亚型、FcR 亲和力 |

## 常见错误与 troubleshooting

| 异常 | 可能原因 | 调整方向 |
| --- | --- | --- |
| 流式阴性细胞也整体变亮 | FcR 介导非特异结合 | 加 Fc block，降低抗体浓度 |
| 巨噬细胞区域背景高 | 组织中 FcR 阳性细胞多 | 使用 Fc block 或 F(ab')2 二抗 |
| 同型对照也高 | Fc 结合或非特异吸附强 | 优化封闭和洗涤，重新设置门控 |
| 功能实验被抗体本身激活 | Fc 触发 FcR 信号 | 使用 Fc-silent 抗体或 Fab 片段 |
| 不同 species 背景差异大 | FcR 类型和二抗识别差异 | 分物种优化封闭和二抗 |

## 记录模板

中文记录：

```text
样本类型：
是否含 FcR 阳性细胞：
抗体类型和宿主：
Fc block：
二抗形式：whole IgG / F(ab')2 / Fab / 直接标记
阴性对照：
同型对照：
背景表现：
调整结果：
```

English record:

```text
Sample type:
FcR-positive cells present: yes / no
Antibody type and host:
Fc block:
Secondary format: whole IgG / F(ab')2 / Fab / directly conjugated
Negative control:
Isotype control:
Background pattern:
Optimization result:
```

## 小结

Fc 受体是抗体实验中常被忽略的背景来源，尤其在免疫细胞、炎症组织和流式细胞术中。排查时要分清：Fab 造成的是目标识别问题，Fc 受体造成的是抗体尾部被细胞抓住的问题。

## 参考来源

- [Wikipedia: Fc receptor](https://en.wikipedia.org/wiki/Fc_receptor)
- [NCBI Bookshelf: Antigen recognition by B-cell and T-cell receptors](https://www.ncbi.nlm.nih.gov/books/NBK27160/)
