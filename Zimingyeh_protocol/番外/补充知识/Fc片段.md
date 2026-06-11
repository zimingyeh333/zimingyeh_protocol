# Fc片段

Fc fragment（fragment crystallizable，可结晶片段）是 [抗体](抗体.md) 分子中不直接识别抗原、但负责与 Fc receptor（Fc 受体）和补体等系统相互作用的区域；在实验中，Fc 片段还常常是 [二抗](<../../材(实验耗材工具篇)/二抗.md>) 识别一抗的主要对象。

![Antibody recognition basics](../../z_asset/番外/补充知识/抗体识别基础/antibody-recognition-basics-reference.png)

图：抗体识别基础示意。Fab 片段决定目标识别，Fc 片段决定抗体类别相关效应、二抗识别和部分非特异背景来源。

## 一句话理解

Fc 片段是抗体的“身份和效应尾部”：它不决定抓哪个抗原，但决定抗体会被哪些受体、二抗或效应系统识别。

## Fc 片段影响什么

| 影响维度 | 说明 |
| --- | --- |
| 抗体类别 | IgG、IgA、IgM、IgE、IgD 等类别的 Fc 区不同 |
| 宿主种属 | mouse IgG、rabbit IgG、goat IgG 等 Fc 差异会决定二抗选择 |
| Fc 受体结合 | 免疫细胞表面 Fc 受体可结合抗体 Fc 区 |
| 补体激活 | 某些抗体类别和亚型可通过 Fc 区触发补体 |
| 半衰期 | Fc 区与体内回收和清除有关 |
| 糖基化 | Fc 糖基化会影响效应功能和稳定性 |

在常规检测实验里，最容易遇到的 Fc 相关问题不是免疫效应，而是二抗选择错误、Fc 受体介导背景和样本中内源性免疫球蛋白干扰。

## 和实验背景的关系

| 场景 | Fc 相关风险 | 调整方向 |
| --- | --- | --- |
| 流式细胞术 | 免疫细胞 Fc 受体结合抗体 Fc 区 | 使用 Fc block 或 F(ab')2 片段 |
| 免疫荧光/免疫组化 | 组织中免疫细胞或内源性 Ig 导致背景 | 增加封闭，选择交叉吸附二抗 |
| ELISA | 二抗识别种属或同型不匹配 | 核对一抗 host species 和 isotype |
| 免疫沉淀 | Fc 区与 Protein A/G 结合影响拉下效率 | 根据抗体种属和亚型选择 beads |
| 细胞功能实验 | Fc 介导细胞效应干扰结果 | 使用 Fc-silent 抗体或 Fab 片段 |

## Fab vs Fc

| 问题 | 看 Fab | 看 Fc |
| --- | --- | --- |
| 抗体识别哪个表位 | 是 | 否 |
| 抗体是否被二抗识别 | 间接 | 是 |
| 是否可能结合 Fc 受体 | 否 | 是 |
| 是否可能激活补体 | 否 | 是 |
| 是否影响抗体工程药物效应 | 部分 | 是 |

Janeway Immunobiology 对抗体结合位点的讨论主要聚焦可变区和抗原结合位点；这也提示我们，特异性问题通常要回到 Fab，而效应和二抗识别问题通常要回到 Fc。参考：[NCBI Bookshelf: Antigen recognition by B-cell and T-cell receptors](https://www.ncbi.nlm.nih.gov/books/NBK27160/)。

## 常见错误与 troubleshooting

| 异常 | 可能原因 | 调整方向 |
| --- | --- | --- |
| 二抗无信号 | 二抗没有识别对应 host species 或 isotype | 核对一抗来源和二抗说明书 |
| 免疫细胞染色背景高 | Fc 受体结合抗体 Fc 区 | 加 Fc block，换 F(ab')2 二抗 |
| 多重染色串色或交叉 | 二抗交叉识别其他一抗 Fc | 使用高度交叉吸附二抗或直接标记一抗 |
| IP 拉不下来 | Protein A/G 对该抗体亚型结合弱 | 换 beads 或换抗体亚型 |
| 功能实验结果混乱 | Fc 介导细胞效应而非 Fab 阻断效应 | 使用 Fc-silent、Fab 或阴性 Fc 对照 |

## 记录模板

中文记录：

```text
抗体名称：
宿主种属：
抗体类别/亚型：
Fc 相关处理：Fc block / F(ab')2 / Fc-silent / 无
二抗信息：
样本是否含 Fc 受体阳性细胞：
是否观察到 Fc 相关背景：
处理结果：
```

English record:

```text
Antibody name:
Host species:
Class/isotype:
Fc-related treatment: Fc block / F(ab')2 / Fc-silent / none
Secondary antibody:
Fc receptor-positive cells present: yes / no
Fc-related background observed:
Outcome:
```

## 小结

Fc 片段不决定抗体识别哪个抗原，但会深刻影响二抗选择、细胞背景、免疫沉淀效率和功能实验解释。抗体实验排错时，Fab 管“抓谁”，Fc 管“被谁看见和引发什么后果”。

## 参考来源

- [NCBI Bookshelf: Antigen recognition by B-cell and T-cell receptors](https://www.ncbi.nlm.nih.gov/books/NBK27160/)
