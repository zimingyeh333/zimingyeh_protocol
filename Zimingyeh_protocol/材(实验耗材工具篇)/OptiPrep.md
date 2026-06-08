# OptiPrep

OptiPrep 是一种以 [iodixanol（碘克沙醇）](碘克沙醇.md) 为核心成分的 density gradient medium（密度梯度介质），常用于制备 iso-osmotic density gradient（等渗密度梯度），分离细胞、细胞器、病毒颗粒和 [extracellular vesicles（EVs，细胞外囊泡）](<../番外/补充知识/细胞外囊泡.md>)。它和常规 [Lymphoprep](Lymphoprep.md)、[Histopaque](Histopaque.md)、[Ficoll](Ficoll.md) 这类 1.077 g/mL [peripheral blood mononuclear cells（PBMC，外周血单个核细胞）](<../番外/补充知识/外周血单个核细胞.md>)分离介质不是同一种使用逻辑。

![OptiPrep 和 Nycodenz 碘化密度梯度介质示意图](../z_asset/材/密度梯度介质/iodinated-density-gradient-media-optiprep-nycodenz.png)

图源：Image2 生成的碘化密度梯度介质 summary abstract graph。重点不是商品包装，而是 OptiPrep 和 Nycodenz 的共同逻辑：用非离子碘化小分子建立可调梯度，同时必须记录 density（密度）、osmolality（渗透压）、buffer（缓冲体系）和离心条件。

## 定义与命名

OptiPrep 是 [Axis-Shield](<../番外/试剂厂商/Axis-Shield.md>) 密度梯度介质体系中的代表产品。官方产品资料将 OptiPrep 描述为 sterile ready-made solution（无菌即用储备液），成分为 60% w/v 碘克沙醇 in water（60% 重量/体积碘克沙醇水溶液），用于制备密度梯度。参考：[Axis-Shield OptiPrep](https://www.axis-shield-density-gradient-media.com/products/optiprep)。

注意这里的“ready-made”不等于“直接把样本铺上去就能分离一切”。OptiPrep 通常是 ready-to-dilute stock（可直接稀释的储备液），实验者仍然需要根据目标样本设计 gradient density（梯度密度）、buffer composition（缓冲液组成）、osmolality（渗透压）和 centrifugation condition（离心条件）。

## 核心特点

| 特点 | 实验意义 |
| --- | --- |
| 60% w/v iodixanol stock | 从高密度储备液出发，按需要配制不同密度层 |
| 非离子碘化小分子 | 通常比盐类高渗体系更适合活细胞或脆弱颗粒 |
| 可制备等渗梯度 | 对细胞、细胞器和囊泡更温和，但前提是缓冲体系设计正确 |
| 透明、可形成连续或不连续梯度 | 适合 fraction collection（分段收集）和方法优化 |
| 不固定在 1.077 g/mL | 更灵活，也更依赖记录和验证 |

OptiPrep 的核心价值是“可调且相对温和”。它的风险也来自这里：如果只写“OptiPrep gradient”，而不写具体密度、稀释液、渗透压和离心条件，别人很难复现实验。

## 主要用途

| 用途 | 为什么可能选择 OptiPrep |
| --- | --- |
| [细胞器分离](<../用(实验流程内容篇)/细胞器分离.md>) | 可按线粒体、溶酶体、内质网等组分的浮力密度设计梯度 |
| [病毒纯化](<../用(实验流程内容篇)/病毒纯化.md>) | 可用密度差富集或纯化病毒颗粒，减少杂质 |
| [细胞外囊泡分离](<../用(实验流程内容篇)/细胞外囊泡分离.md>) | 可把 vesicles（囊泡）和蛋白聚集物、脂蛋白等颗粒进一步区分 |
| 特殊细胞/亚群分离 | 目标密度窗口不适合标准 PBMC 1.077 g/mL 介质时可探索 |
| 方法开发 | 需要连续梯度或多层不连续梯度时比固定密度介质更灵活 |

如果目标只是从人外周血中做常规 PBMC 分离，通常优先考虑 Lymphoprep、Ficoll-Paque 或 Histopaque 这类已围绕 1.077 g/mL 设计好的介质。OptiPrep 更适合“我知道目标颗粒/细胞需要特殊梯度”的场景，而不是用来偷懒替代标准 PBMC protocol。

## OptiPrep vs Nycodenz/Percoll/Ficoll 类介质

| 项目 | OptiPrep | [Nycodenz](Nycodenz.md) | [Percoll](Percoll.md) | Ficoll/Lymphoprep/Histopaque |
| --- | --- | --- | --- | --- |
| 主要化学基础 | iodixanol（碘克沙醇） | iohexol（碘海醇）/Nycodenz | polyvinylpyrrolidone（PVP，聚乙烯吡咯烷酮）包被胶体二氧化硅 | 多为 polysucrose/Ficoll 相关体系 |
| 常见形态 | 60% w/v 无菌储备液 | 常见为粉末或需自配储备液 | 胶体悬液储备介质 | 多为固定密度即用液 |
| 最大优势 | 等渗可调梯度，适合脆弱颗粒 | 自定义程度高，适合方法开发 | 梯度设计灵活，经典亚细胞/特殊细胞分离 | 常规 PBMC/MNC 分离简单稳定 |
| 操作难度 | 中到高 | 高 | 中到高 | 低到中 |
| 记录重点 | 稀释液、密度、渗透压、梯度结构 | 称量/溶解、密度、渗透压 | Percoll 百分比、是否等渗 | 产品名、密度、货号、批号 |
| 是否可直接替代 PBMC 1.077 | 不建议 | 不建议 | 不建议 | 是常规选择本身 |

这里最容易犯的错误是把所有 density gradient media（密度梯度介质）都当成“Ficoll 的同义词”。实际上，Ficoll/Lymphoprep/Histopaque 是标准化 PBMC/MNC 入口，OptiPrep/Nycodenz/Percoll 更像方法开发工具。

## 常见梯度设计

| 梯度形式 | 操作逻辑 | 适合场景 |
| --- | --- | --- |
| 不连续梯度 | 配几个固定密度层，样本在界面或某层形成 band | 已知目标密度窗口，回收直观 |
| 连续梯度 | 密度从低到高平滑变化，离心后按 fraction 收集 | 探索未知密度、提高分辨率 |
| 浮力密度梯度 | 样本颗粒迁移到自身浮力密度位置 | 病毒、细胞器、细胞外囊泡等颗粒 |
| 速率区带梯度 | 按沉降速度和大小差异分离，时间控制更关键 | 粒径差异明显但密度接近的样本 |

实际写 standard operating procedure（SOP，标准操作规程）时不要只写“10%/30% OptiPrep”。更规范的写法应包括：OptiPrep stock 批号、稀释液、每层目标密度或百分比、渗透压、体积、上样量、转子、relative centrifugal force（RCF，相对离心力）/x g、时间、温度、brake 设置和收集方式。

## 使用要点

| 变量 | 为什么重要 | 建议 |
| --- | --- | --- |
| 稀释液 | 决定 pH、盐浓度和渗透压 | 使用和目标样本兼容的 buffer，不要只用水随意稀释 |
| 渗透压 | 活细胞和细胞器对渗透压敏感 | 需要活性或结构完整性时，优先做等渗验证 |
| 梯度密度 | 直接决定目标颗粒停在哪里 | 记录 g/mL 或配制比例，最好建立密度-折光率对照 |
| 离心力 | 过低分不开，过高可能损伤或压实颗粒 | 记录 RCF/x g，不只写 rpm |
| 转子类型 | 固定角和水平转子分离界面不同 | 写清 rotor model（转子型号） |
| 温度 | 改变黏度和生物样本状态 | 同一 SOP 固定 4°C、室温或其他条件 |
| 分段收集 | 影响纯度和回收率 | 记录每个 fraction 体积、位置和下游检测 |

## 现配/使用思路

OptiPrep 通常从 60% w/v stock 出发，按目标实验配制 working solution（工作液）或不同 density layers（密度层）。具体百分比不能脱离样本和文献 SOP 直接照搬，下面更适合作为设计清单：

```text
确认目标：细胞 / 细胞器 / 病毒 / 细胞外囊泡 / 其他颗粒
查目标颗粒预期浮力密度：
选择梯度类型：连续 / 不连续 / 浮力密度 / 速率区带
确定稀释 buffer：
计算每层 OptiPrep 百分比或目标密度：
记录每层体积和上样体积：
设置转子、x g、时间、温度、brake：
离心后记录 band 位置：
按 fraction 收集并检测 marker：
根据纯度、回收率、活性调整梯度：
```

如果要做活细胞或细胞器分离，建议先用小量样本比较活率、形态、marker 富集和下游功能读数，再把条件固定成正式 protocol。

## 购买与选择建议

购买 OptiPrep 时，建议优先围绕已有 SOP 选择同一品牌、同一规格和同一货号。它不是低风险“通用替代品”，换供应商或换批号时都应保留并行验证记录。

推荐记录：

```text
OptiPrep, Axis-Shield, catalog number, lot number, 60% w/v iodixanol stock, dilution buffer, final density or percentage, osmolality, gradient format
```

如果你的实验只需要常规 PBMC 分离，不建议为了“更高级”而改用 OptiPrep；如果目标是细胞外囊泡、病毒、细胞器或特殊颗粒分离，OptiPrep 才真正进入候选清单。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 分离层不清楚 | 梯度密度窗口不合适、层间混合、离心不足 | 重新设计密度层，降低上样扰动，优化 x g/时间 |
| 活细胞或细胞器状态差 | 渗透压不合适、离心过强、处理时间过长 | 复核 buffer 和 osmolality，降低离心强度或缩短处理 |
| 回收率低 | 目标 band 位置判断错误、fraction 收集太窄 | 增加 marker 检测，扩大初期收集范围 |
| 纯度不足 | 目标颗粒和污染物密度重叠 | 改成连续梯度或加入二次纯化 |
| 批次间差异大 | 只记录产品名，没有记录密度/缓冲液/转子 | 建立完整记录模板 |
| 下游检测受干扰 | OptiPrep 残留或洗涤不足 | 增加稀释、洗涤或 buffer exchange |

## 推荐记录模板

中文记录模板：

```text
产品名称：OptiPrep
品牌/供应商：
货号：
批号：
储存条件：
开封日期：
有效期：
原液浓度：
目标样本：
目标颗粒/细胞：
稀释缓冲液：
目标密度或工作百分比：
渗透压：
梯度类型：连续/不连续/浮力密度/速率区带
每层体积与顺序：
上样体积：
转子型号：
离心条件：
温度：
brake设置：
band位置：
fraction收集方式：
洗涤或换液方式：
下游检测：
异常现象：
```

English record template:

```text
Product name: OptiPrep
Brand/supplier:
Catalog number:
Lot number:
Storage condition:
Open date:
Expiration date:
Stock concentration:
Sample type:
Target particle/cell:
Dilution buffer:
Target density or working percentage:
Osmolality:
Gradient type: continuous/discontinuous/buoyant/rate-zonal
Layer volumes and order:
Sample loading volume:
Rotor model:
Centrifugation condition:
Temperature:
Brake setting:
Band position:
Fraction collection:
Wash or buffer exchange:
Downstream assay:
Abnormal observation:
```

## 小结

OptiPrep 的关键词是 iodixanol、60% stock、等渗可调梯度和颗粒/细胞器分离。它很适合做细胞器、病毒和细胞外囊泡等需要精细密度窗口的实验，但不应被当作 PBMC 1.077 g/mL 介质的简单替代品。

## 参考来源

- [Axis-Shield OptiPrep](https://www.axis-shield-density-gradient-media.com/products/optiprep)
- [Axis-Shield Density Gradient Media products](https://www.axis-shield-density-gradient-media.com/products)
- [Axis-Shield Lymphoprep](https://www.axis-shield-density-gradient-media.com/products/lymphoprep)
- [STEMCELL Technologies Lymphoprep](https://www.stemcell.com/products/lymphoprep.html)
