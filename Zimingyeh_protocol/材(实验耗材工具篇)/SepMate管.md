# SepMate管

SepMate 管（SepMate tube，SepMate PBMC isolation tube）是一类带有 internal insert（内置隔离结构）的专用离心管，用于简化 [密度梯度离心](<../用(实验流程内容篇)/密度梯度离心.md>) 分离 [外周血单个核细胞](<../番外/补充知识/外周血单个核细胞.md>)（Peripheral Blood Mononuclear Cells，PBMC）的操作。它的核心价值不是改变密度分离原理，而是降低手工分层和吸取 PBMC interface（PBMC 界面层）的操作难度。

![SepMate与红细胞裂解液示意图](../z_asset/材/PBMC样本前处理/sepmate-rbc-lysis-sample-prep.png)

图源：Image2 生成的 PBMC 样本前处理示意图。左侧展示 SepMate 管通过内置 insert 分隔密度介质和血样，并在离心后将 PBMC 层倒入新管；右侧展示 [红细胞裂解液](红细胞裂解液.md) 的补救逻辑。

## 定义与命名

SepMate 是 [STEMCELL Technologies](<../番外/试剂厂商/STEMCELL Technologies.md>) 的 PBMC isolation tube 产品线。普通 Ficoll/Lymphoprep 分离需要缓慢把血样铺在密度介质上方，并在离心后用移液器小心吸取界面层；SepMate 管通过 insert 让分层更容易，离心后可以直接 pour off（倒出）上层含 PBMC 的液体。

STEMCELL 的 SepMate 页面说明：SepMate insert 可以让用户快速把血样加到密度梯度介质上方并防止两层混合，离心可在 brake on（开刹车）条件下进行，之后将分离出的 PBMC 倒入新管即可。参考：[STEMCELL SepMate PBMC Isolation Tubes](https://www.stemcell.com/products/brands/sepmate.html)。

## 核心结构与作用

| 结构/设计 | 作用 |
| --- | --- |
| Conical tube（锥形离心管） | 承载样本、密度介质和离心过程 |
| Internal insert（内置隔离结构） | 分隔密度介质和血样，减少分层混合 |
| Above-insert interface（insert 上方界面） | 离心后 PBMC 位于 plasma 和 density medium 界面附近 |
| Pour-off collection（倒出收集） | 减少用枪头吸界面造成的扰动和人为差异 |

SepMate 管并不是“自动分选仪”。它只是把传统密度梯度离心中最吃手法的两个步骤：慢速分层和吸取界面，改成更容易标准化的结构化操作。

## 常见规格与配套

| 规格 | 常见处理量 | 适合场景 |
| --- | --- | --- |
| SepMate-15 | 小体积全血或 buffy coat | 少量样本、方法开发、单供体实验 |
| SepMate-50 | 较大体积血样 | 样本量较大、PBMC 批量制备 |
| 配套密度介质 | [Lymphoprep](Lymphoprep.md)、[Ficoll](Ficoll.md) 等 | 按说明书选择，不要随意替换体积和条件 |
| 可组合产品 | [RosetteSep](RosetteSep.md) immunodensity separation | 直接从全血分离特定免疫细胞亚群 |

STEMCELL 页面列出 SepMate-15 处理血量范围为 0.5-5 mL，SepMate-50 为 4-17 mL，并将 Lymphoprep 列为相关配套产品。参考：[STEMCELL SepMate products](https://www.stemcell.com/products/brands/sepmate.html)。

## 主要用途

| 用途 | 为什么使用 SepMate 管 |
| --- | --- |
| PBMC 分离培训 | 降低分层和吸取界面的技术门槛 |
| 多操作者协作 | 减少不同人手法带来的变异 |
| 多样本并行处理 | 节省操作时间，降低界面扰动 |
| 分选前预处理 | 为 [磁性细胞分选](<../用(实验流程内容篇)/磁性细胞分选.md>) 或 [流式细胞术](<../用(实验流程内容篇)/流式细胞术.md>) 提供 PBMC 输入 |
| 与 RosetteSep 组合 | 从全血中快速获得特定 untouched cell subset（未接触目标细胞亚群） |

## SepMate vs 普通离心管 vs Leucosep管

| 耗材 | 核心特点 | 优点 | 局限 |
| --- | --- | --- | --- |
| [离心管](离心管.md) | 无隔离结构，完全依赖手工分层 | 便宜、通用、兼容性强 | 技术依赖高，界面吸取容易变异 |
| SepMate管 | 带 insert，可开刹车并倒出 PBMC 层 | 快、容易培训、适合多样本 | 成本高，需按专用 SOP 执行 |
| [Leucosep管](Leucosep管.md) | 预置多孔屏障或隔离结构的同类分离管 | 也能简化密度梯度分离 | 不同品牌结构和条件不同，不能混用 SOP |

如果实验只有偶尔少量样本，普通离心管足够；如果经常处理多个供体样本、操作者很多，或 PBMC 回收一致性很重要，SepMate 管的价值会更明显。

## 使用流程

| 步骤 | 操作逻辑 | 注意事项 |
| --- | --- | --- |
| 加入密度介质 | 将 Lymphoprep/Ficoll 加到 insert 下方 | 体积按 SepMate 说明书，不要凭经验改 |
| 加入稀释血样 | 将稀释样本加到 insert 上方 | 不需要像普通 Ficoll 那样极慢贴壁分层，但仍要避免剧烈冲击 |
| 离心 | 按说明书设置 RCF、时间、温度和 brake | SepMate 条件通常不同于传统 Ficoll SOP |
| 倒出 PBMC 层 | 离心后将上层液体倒入新管 | 动作要连续稳定，避免把沉淀倒出 |
| 洗涤 | 去除残留密度介质、血浆和血小板 | 后续培养/流式前尤其重要 |
| 计数与质控 | 记录细胞数、活率和污染情况 | 和普通管方案并行比较时要记录 recovery |

完整方法逻辑见：[密度梯度离心](<../用(实验流程内容篇)/密度梯度离心.md>)。

## 选择标准

| 需求 | 是否推荐 SepMate |
| --- | --- |
| 新人训练，希望降低分层难度 | 推荐 |
| 多供体、多样本并行处理 | 推荐 |
| 对 PBMC 回收一致性要求高 | 推荐验证后使用 |
| 预算很紧、样本很少 | 普通离心管可能更合适 |
| 已有稳定普通 Ficoll SOP | 先并行验证，不要直接替换 |
| 下游非常敏感功能实验 | 需要比较活率、亚群比例和功能读数 |

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| PBMC 回收率低 | 密度介质体积、血样体积或倒出动作不合适 | 按说明书复核体积，练习倒出角度 |
| 红细胞污染多 | 样本处理差、倒出时带入沉淀、密度介质不合适 | 保持倒出动作稳定，必要时用 [红细胞裂解液](红细胞裂解液.md) 补救 |
| 活率低 | 血样放置过久、离心条件不合适、洗涤过强 | 缩短处理时间，记录 RCF/time/brake |
| 和普通 Ficoll 结果不同 | 管型结构和离心条件改变了流程 | 并行比较，不要套用旧 SOP |
| 倒出后血小板多 | 洗涤不足或样本本身血小板多 | 增加合适洗涤步骤，记录洗涤条件 |

## 购买建议

SepMate 管适合高频 PBMC 分离、多操作者协作、培训成本高或需要流程标准化的实验室。购买时不要只看单管价格，还要考虑节省的人工时间、失败率、操作者差异和下游昂贵实验的样本可靠性。

建议记录：

```text
SepMate-15/50, STEMCELL Technologies, catalog number, lot number, density medium used, sample volume, centrifugation condition
```

如果使用 SepMate + RosetteSep 组合，应把 RosetteSep cocktail 的品牌、货号、批号、目标细胞类型和 incubation 条件一起记录。

## 推荐记录模板

中文记录模板：

```text
产品名称：
规格：SepMate-15/SepMate-50
品牌/供应商：
货号：
批号：
样本类型：
样本体积：
稀释液：
密度介质：
密度介质货号/批号：
离心条件：
brake设置：
是否组合RosetteSep：
PBMC层倒出情况：
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
Format: SepMate-15/SepMate-50
Brand/supplier:
Catalog number:
Lot number:
Sample type:
Sample volume:
Diluent:
Density medium:
Density medium catalog/lot:
Centrifugation condition:
Brake setting:
Combined with RosetteSep:
PBMC pour-off observation:
Wash condition:
Recovered cell number:
Viability:
RBC/platelet contamination:
Downstream use:
Abnormal observation:
```

## 小结

SepMate 管的价值在于把 PBMC 密度梯度离心从“高度依赖手法”变成更容易标准化的结构化流程。它适合多样本、多操作者和需要稳定回收的场景；但换用 SepMate 本质上是换了流程，必须重新记录和验证样本体积、密度介质、离心条件、brake 设置、回收率和活率。

## 参考来源

- [STEMCELL Technologies SepMate PBMC Isolation Tubes](https://www.stemcell.com/products/brands/sepmate.html)
- [STEMCELL Technologies PBMC Isolation](https://www.stemcell.com/peripheral-blood-mononuclear-cell-isolation.html)
