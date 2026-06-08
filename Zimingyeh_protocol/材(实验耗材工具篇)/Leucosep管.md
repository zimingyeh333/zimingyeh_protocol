# Leucosep管

Leucosep 管（Leucosep tube）是一类带 porous barrier（多孔屏障）的密度梯度离心专用管，用于简化从全血、buffy coat（白膜层）或骨髓样本中分离 [外周血单个核细胞](<../番外/补充知识/外周血单个核细胞.md>)（Peripheral Blood Mononuclear Cells，PBMC）或 mononuclear cells（单个核细胞，MNC）。它和 [SepMate管](SepMate管.md) 的思路相似：都通过管内结构降低手工分层难度，但具体结构、品牌、体积和离心条件不能混用。

![Leucosep与RosetteSep示意图](../z_asset/材/PBMC样本前处理/leucosep-rosettesep-immunodensity-separation.png)

图源：Image2 生成的 Leucosep/RosetteSep 样本前处理示意图。左侧展示 Leucosep 管的多孔屏障帮助建立密度梯度分离界面；右侧展示 [RosetteSep](RosetteSep.md) 通过免疫密度阴性选择富集 untouched target cells。

## 定义与命名

Leucosep 是 [Greiner Bio-One](<../番外/试剂厂商/Greiner Bio-One.md>) 的细胞分离管产品线。它在离心管内加入 porous barrier，使 density gradient medium（密度梯度介质）位于屏障下方，稀释血样位于屏障上方。离心时，红细胞和粒细胞等较重组分穿过屏障向下沉降，PBMC/MNC 富集在上层和密度介质界面附近。

Greiner Bio-One 的 Leucosep 产品资料将其描述为用于 density gradient centrifugation（[密度梯度离心](<../用(实验流程内容篇)/密度梯度离心.md>)）分离 lymphocytes（淋巴细胞）和 PBMC 的管型，并强调多孔屏障可避免血液样本与分离介质混合。参考：[Greiner Bio-One Leucosep](https://www.gbo.com/en_INT/products/bioscience/cell-culture-products/leucosep.html)。

## 核心结构与作用

| 结构/设计 | 作用 |
| --- | --- |
| Conical centrifuge tube（锥形离心管） | 承载样本、密度介质和离心过程 |
| Porous barrier（多孔屏障） | 分隔血样和密度介质，降低分层混合 |
| Density medium chamber | 让 [Ficoll](Ficoll.md)、[Lymphoprep](Lymphoprep.md) 或类似介质位于屏障下方 |
| Sample chamber | 稀释血样位于屏障上方 |
| Interface region（界面区域） | 离心后 PBMC/MNC 位于可回收层 |

Leucosep 管的重点是“屏障辅助分层”，不是改变细胞密度，也不是替代密度梯度介质本身。

## 常见用途

| 用途 | 为什么选择 Leucosep |
| --- | --- |
| PBMC/MNC 分离 | 降低手工铺血样的难度 |
| 多样本并行处理 | 提高流程一致性，减少界面扰动 |
| 新手训练 | 比传统普通离心管更容易形成清楚界面 |
| 分选前预处理 | 为 [磁性细胞分选](<../用(实验流程内容篇)/磁性细胞分选.md>) 或 [流式细胞术](<../用(实验流程内容篇)/流式细胞术.md>) 提供输入 |
| 骨髓或 buffy coat 前处理 | 在复杂样本中降低分层失败风险 |

## Leucosep vs SepMate vs 普通离心管

| 耗材 | 核心结构 | 优点 | 局限 |
| --- | --- | --- | --- |
| [离心管](离心管.md) | 无隔离结构 | 便宜、通用、最灵活 | 分层和吸界面高度依赖手法 |
| Leucosep管 | 多孔屏障 | 减少血样和密度介质混合，适合标准化 | 成本更高，需按 Leucosep 说明书执行 |
| [SepMate管](SepMate管.md) | 内置 insert | 可简化加样和 PBMC 回收，适合快速处理 | 具体离心和倒出流程与 Leucosep 不同 |

它们都服务于 [密度梯度离心](<../用(实验流程内容篇)/密度梯度离心.md>)，但不能因为“都是带隔离结构的管”就直接套同一个 SOP。换管型时要重新验证回收率、活率和红细胞/血小板残留。

## 通用使用流程

以下为理解框架，正式实验应以 Leucosep 对应说明书为准。

| 步骤 | 操作逻辑 | 注意事项 |
| --- | --- | --- |
| 加入密度介质 | 将分离介质加入管中并位于屏障下方 | 不同规格加液量不同 |
| 准备样本 | 全血或 buffy coat 通常需稀释 | 记录抗凝剂、处理时间和稀释液 |
| 加入样本 | 将稀释样本加到屏障上方 | 避免剧烈冲击或泡沫 |
| 离心 | 按说明书设置 RCF、时间、温度和 brake | 不要直接照搬普通 Ficoll 条件 |
| 回收 PBMC/MNC | 收集界面层或上层目标细胞区 | 避免带入底部红细胞/粒细胞 |
| 洗涤与计数 | 去除分离介质和血小板 | 记录细胞数、活率和污染情况 |

## 选择标准

| 需求 | 是否适合 Leucosep |
| --- | --- |
| 传统 Ficoll 分层经常失败 | 适合尝试 |
| 多操作者、多样本批量 PBMC 分离 | 适合验证后标准化 |
| 预算很紧且操作者熟练 | 普通离心管可能足够 |
| 已经使用 SepMate SOP | 不建议直接替换，需要并行验证 |
| 对下游功能实验很敏感 | 需要比较活率、亚群比例和功能读数 |

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| PBMC 层不清楚 | 密度介质体积不对、样本太黏、离心条件不合适 | 复核说明书体积和 RCF/time |
| 红细胞污染多 | 样本处理延迟、吸取太深、屏障上样过量 | 控制样本量，必要时用 [红细胞裂解液](红细胞裂解液.md) 补救 |
| 回收率低 | 目标界面吸取不足或洗涤损失 | 记录 input/output，优化回收位置 |
| 活率低 | 样本放置过久、离心过强、温度不合适 | 缩短处理时间，复核温度和离心设置 |
| 与普通 Ficoll 结果不同 | 管型和操作条件改变 | 并行比较，不要直接把旧 SOP 当作等价 |

## 购买建议

Leucosep 管适合希望降低 PBMC/MNC 分离手法差异的实验室，尤其是多样本、多操作者或新手训练场景。购买时应确认规格、是否预装分离介质、推荐样本体积、推荐离心条件和是否与本实验室常用密度介质兼容。

建议记录：

```text
Leucosep tube, Greiner Bio-One, catalog number, lot number, tube size, density medium used, sample volume, centrifugation condition
```

## 推荐记录模板

中文记录模板：

```text
产品名称：
规格：
品牌/供应商：
货号：
批号：
是否预装密度介质：
密度介质名称：
密度介质货号/批号：
样本类型：
样本体积：
稀释液：
离心条件：
brake设置：
PBMC/MNC界面状态：
洗涤条件：
回收细胞数：
活率：
红细胞/血小板残留：
下游用途：
异常现象：
```

English record template:

```text
Product name:
Format:
Brand/supplier:
Catalog number:
Lot number:
Pre-filled with density medium:
Density medium name:
Density medium catalog/lot:
Sample type:
Sample volume:
Diluent:
Centrifugation condition:
Brake setting:
PBMC/MNC interface appearance:
Wash condition:
Recovered cell number:
Viability:
RBC/platelet contamination:
Downstream use:
Abnormal observation:
```

## 小结

Leucosep 管是密度梯度离心的结构化辅助耗材，主要价值是降低分层难度和操作者差异。它与 SepMate 和普通离心管都能服务于 PBMC/MNC 分离，但管型、体积、离心条件和回收方式必须分开记录和验证。

## 参考来源

- [Greiner Bio-One Leucosep](https://www.gbo.com/en_INT/products/bioscience/cell-culture-products/leucosep.html)
- [Greiner Bio-One Leucosep tubes product overview](https://shop.gbo.com/en/row/products/bioscience/cell-culture-products/leucosep/)
- [STEMCELL Technologies PBMC Isolation](https://www.stemcell.com/peripheral-blood-mononuclear-cell-isolation.html)
