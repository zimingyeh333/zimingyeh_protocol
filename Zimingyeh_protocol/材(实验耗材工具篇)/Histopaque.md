# Histopaque

Histopaque 是 [Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>) 的 density gradient medium（密度梯度介质）产品线，常用于通过 [密度梯度离心](<../用(实验流程内容篇)/密度梯度离心.md>) 从血液或骨髓样本中分离 mononuclear cells（单个核细胞）以及特定血细胞组分。最常见的版本包括 Histopaque-1077 和 Histopaque-1119，其中数字通常对应介质密度。

![密度梯度介质比较图](../z_asset/材/密度梯度介质/density-gradient-media-comparison.png)

图源：Image2 生成的密度梯度介质比较图。Histopaque 的特点是有不同密度版本，可用于标准 PBMC/MNC 分离或双密度血细胞分离。

## 定义与命名

Histopaque-1077 常用于分离 human mononuclear cells（人单个核细胞），操作逻辑与 [Ficoll](Ficoll.md)/Ficoll-Paque 和 [Lymphoprep](Lymphoprep.md) 类似。Histopaque-1119 密度更高，常与 1077 组合用于从全血中分离 granulocytes（粒细胞）等组分。

Sigma-Aldrich 的 Histopaque-1077 产品页面将其描述为 sterile-filtered, endotoxin-tested solution（无菌过滤、内毒素检测的溶液），用于分离单个核细胞。参考：[Sigma-Aldrich Histopaque-1077](https://www.sigmaaldrich.com/US/en/product/sigma/10771)。

## 常见版本

| 版本 | 常见密度 | 主要用途 | 注意事项 |
| --- | --- | --- | --- |
| Histopaque-1077 | 1.077 g/mL | PBMC/MNC 分离 | 与 Ficoll-Paque 类似，但应按 Sigma 说明书执行 |
| Histopaque-1083 | 1.083 g/mL | 某些血液单个核细胞分离需求 | 不同样本适配性要验证 |
| Histopaque-1119 | 1.119 g/mL | 常用于粒细胞或双密度分离组合 | 不能当作 1077 的简单替代 |
| 1077 + 1119 双密度 | 上下两层不同密度 | 同时分离单个核细胞和粒细胞等 | 分层更复杂，对操作要求更高 |

## 核心作用

| 属性 | 作用 |
| --- | --- |
| 不同密度版本 | 为不同细胞密度窗口提供分离条件 |
| 即用型液体 | 减少自配介质误差 |
| 适合血液细胞分离 | 可分离 PBMC、MNC 或配合双密度方案分离粒细胞 |
| 标准化商品 | 便于记录货号、批号和 SOP |

## 主要用途

| 用途 | 推荐版本/策略 | 说明 |
| --- | --- | --- |
| PBMC/MNC 分离 | Histopaque-1077 | 常规人血单个核细胞分离 |
| 骨髓 MNC 分离 | Histopaque-1077 或说明书推荐版本 | 样本更复杂，红细胞污染需关注 |
| 粒细胞分离 | Histopaque-1119 或 1077/1119 组合 | 分层和吸取难度更高 |
| 分选前预处理 | Histopaque-1077 | 为 [磁性细胞分选](<../用(实验流程内容篇)/磁性细胞分选.md>) 或 [流式细胞术](<../用(实验流程内容篇)/流式细胞术.md>) 提供输入 |

## Histopaque vs Ficoll/Lymphoprep/Percoll

| 介质 | 核心特点 | 适合场景 |
| --- | --- | --- |
| Histopaque | Sigma 产品线，1077/1119 等版本清晰 | 需要 Sigma 采购体系或双密度血细胞分离 |
| [Ficoll](Ficoll.md) | Ficoll-Paque 类经典体系，文献多 | 常规 PBMC/MNC 分离 |
| [Lymphoprep](Lymphoprep.md) | 标准 1.077 g/mL MNC 分离介质 | 常规 PBMC/MNC 分离 |
| [Percoll](Percoll.md) | 可自定义密度梯度 | 特殊细胞或更灵活分离 |

Histopaque 的优势是型号清楚、密度版本选择明确；风险是如果只写“Histopaque”而不写 1077、1119 或组合方案，后续几乎无法判断分离窗口是否正确。

## 使用要点

| 变量 | 为什么重要 | 建议 |
| --- | --- | --- |
| 具体型号 | 1077 和 1119 用途不同 | 记录完整产品名和密度 |
| 分层顺序 | 双密度方案尤其敏感 | 按说明书逐层加入，避免混合 |
| 样本稀释 | 影响层间界面和细胞回收 | 固定样本:缓冲液比例 |
| RCF/time/brake | 决定界面清晰度和细胞活率 | 记录 x g、时间、温度、brake |
| 界面吸取 | 决定纯度与回收率 | 分别记录 PBMC 层、粒细胞层或目标层 |

## 购买建议

如果实验室采购体系偏向 Sigma-Aldrich，Histopaque 是较方便的密度梯度介质选择。常规 PBMC 分离优先看 Histopaque-1077；如果目标是粒细胞或需要同时分离多个血细胞层，再考虑 Histopaque-1119 或双密度方案。

购买和记录时建议写成：

```text
Histopaque-1077, Sigma-Aldrich, catalog number, lot number, density, expiration date
```

而不是只写：

```text
Histopaque
```

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| PBMC 层不清楚 | 1077 分层失败、刹车太强、样本凝块 | 优化分层，检查抗凝和 brake |
| 粒细胞分离不稳定 | 1119 或双密度层混合 | 重新确认分层顺序和体积比例 |
| 红细胞污染多 | 吸取太深或密度版本不合适 | 保守吸取，必要时使用 [红细胞裂解液](红细胞裂解液.md) |
| 和 Ficoll 结果不同 | 产品密度、渗透压、SOP 条件不同 | 并行验证，不要默认完全等价 |
| 记录无法复现 | 只写 Histopaque，没有写型号 | 补充 1077/1119、货号、批号和条件 |

## 推荐记录模板

中文记录模板：

```text
产品名称：Histopaque-1077/1119/其他
品牌/供应商：
货号：
批号：
密度：
储存条件：
开封日期：
有效期：
样本类型：
样本体积：
稀释液：
Histopaque体积：
是否双密度：
分层顺序：
离心条件：
brake设置：
目标界面状态：
洗涤条件：
回收细胞数：
活率：
污染细胞/红细胞残留：
下游用途：
异常现象：
```

English record template:

```text
Product name: Histopaque-1077/1119/other
Brand/supplier:
Catalog number:
Lot number:
Density:
Storage condition:
Open date:
Expiration date:
Sample type:
Sample volume:
Diluent:
Histopaque volume:
Dual-density setup:
Layering order:
Centrifugation condition:
Brake setting:
Target interface appearance:
Wash condition:
Recovered cell number:
Viability:
Contaminating cells/RBC contamination:
Downstream use:
Abnormal observation:
```

## 小结

Histopaque 的关键不是名字，而是具体密度版本。Histopaque-1077 更接近常规 PBMC/MNC 分离介质；Histopaque-1119 或双密度组合则用于更复杂的血细胞分离。实验记录必须写清型号、密度、分层顺序和离心条件。

## 参考来源

- [Sigma-Aldrich Histopaque-1077](https://www.sigmaaldrich.com/US/en/product/sigma/10771)
- [Sigma-Aldrich Histopaque-1119](https://www.sigmaaldrich.com/US/en/product/sigma/11191)
- [STEMCELL Technologies PBMC Isolation](https://www.stemcell.com/peripheral-blood-mononuclear-cell-isolation.html)
