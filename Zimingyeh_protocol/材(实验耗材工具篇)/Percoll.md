# Percoll

Percoll 是一种 colloidal silica particles coated with polyvinylpyrrolidone（PVP 包被胶体二氧化硅颗粒）形成的密度梯度介质，常用于制备连续或不连续 density gradient（密度梯度），以分离细胞、细胞器、膜组分或其他颗粒。与 [Ficoll](Ficoll.md)、[Lymphoprep](Lymphoprep.md)、[Histopaque](Histopaque.md) 这类常规 PBMC 分离即用介质不同，Percoll 的强项是可以自定义梯度密度。

![密度梯度介质比较图](../z_asset/材/密度梯度介质/density-gradient-media-comparison.png)

图源：Image2 生成的密度梯度介质比较图。Percoll 的核心定位不是标准 PBMC 一步分离，而是可调密度梯度，用于更灵活的细胞或颗粒分离。

## 定义与命名

Percoll 是 Cytiva/GE Healthcare 体系中常见的 density gradient medium。它通常作为 stock medium（储备介质）按需要配制成 isotonic Percoll（等渗 Percoll）或特定百分比/密度的工作液，再形成 continuous gradient（连续梯度）或 discontinuous gradient（不连续梯度）。

Cytiva 的 Percoll 产品资料将其描述为用于制备密度梯度、分离细胞、亚细胞颗粒和较大病毒的介质。参考：[Cytiva Percoll](https://www.cytiva.com/en/us/shop/cell-culture-and-fermentation/cell-culture-media/density-gradient-media/percoll-p-05677)。

## 核心组成与作用

| 成分/属性 | 作用 |
| --- | --- |
| Colloidal silica particles | 提供密度和颗粒支撑 |
| Polyvinylpyrrolidone coating | 增加颗粒稳定性，降低非特异相互作用 |
| 可调密度 | 可按目标细胞或颗粒密度设计分离窗口 |
| 可形成连续/不连续梯度 | 适合更精细或更灵活的分离 |
| 需要配制工作液 | 给实验者更多控制，也带来更多误差来源 |

Percoll 的核心优势来自“可调”，核心风险也来自“可调”：如果配制、渗透压、pH、密度和离心条件没有记录清楚，很难复现实验。

## 主要用途

| 用途 | 为什么用 Percoll |
| --- | --- |
| 特殊细胞分离 | 目标细胞密度窗口不适合标准 1.077 g/mL 介质 |
| 细胞亚群富集 | 可用不同百分比形成不连续梯度 |
| 细胞器分离 | 可分离 mitochondria（线粒体）、peroxisomes（过氧化物酶体）等组分 |
| 精子、免疫细胞、肝细胞等分离 | 某些领域已有成熟 Percoll 梯度 SOP |
| 方法开发 | 需要探索最佳密度窗口时更灵活 |

## Percoll vs Ficoll/Lymphoprep/Histopaque

| 项目 | Percoll | Ficoll/Lymphoprep/Histopaque |
| --- | --- | --- |
| 形态 | 通常需要配制成工作梯度 | 多为即用型固定密度介质 |
| 密度 | 可调 | 通常固定，如 1.077 g/mL |
| 难度 | 较高，需要控制渗透压和梯度 | 较低，按说明书分层即可 |
| 适合 | 特殊细胞、细胞器、方法开发 | 常规 PBMC/MNC 分离 |
| 记录重点 | Percoll 百分比、缓冲液、渗透压、梯度结构 | 产品名、密度、货号、批号、离心条件 |

如果目标只是常规 PBMC 分离，通常不优先选择 Percoll；如果目标是标准 Ficoll/Lymphoprep 无法很好分开的细胞或亚细胞组分，Percoll 才体现价值。

## 常见梯度形式

| 梯度形式 | 特点 | 适合 |
| --- | --- | --- |
| 连续梯度 | 密度平滑变化，分辨率较高 | 探索未知密度或精细分离 |
| 不连续梯度 | 几层固定密度界面，操作和回收较直观 | 已知目标细胞密度窗口 |
| 自形成梯度 | 某些条件下离心中形成梯度 | 特定 SOP，需严格控制条件 |

## 使用要点

| 变量 | 为什么重要 | 建议 |
| --- | --- | --- |
| 等渗配制 | 非等渗会伤细胞 | 使用合适盐溶液或说明书推荐配方 |
| Percoll 百分比/密度 | 直接决定分离窗口 | 记录百分比、目标密度和配制方法 |
| 梯度层顺序 | 不连续梯度依赖层次清晰 | 缓慢分层，避免混合 |
| RCF 和时间 | 影响颗粒迁移位置 | 记录 x g、时间、温度、转子 |
| 洗涤 | 去除 Percoll 残留 | 回收后充分稀释/洗涤目标细胞 |

## 购买与选择建议

如果实验目的是常规 PBMC/MNC 分离，优先考虑 [Ficoll](Ficoll.md)、[Lymphoprep](Lymphoprep.md) 或 [Histopaque](Histopaque.md) 这类固定密度即用型介质。选择 Percoll 的典型理由是：目标细胞密度窗口特殊、已有成熟 Percoll SOP、需要连续梯度，或要做细胞器/亚细胞颗粒分离。

购买和记录时建议关联 [Cytiva](<../番外/试剂厂商/Cytiva.md>) 产品资料，并写清：

```text
Percoll, supplier, catalog number, lot number, stock concentration, working percentage/density, buffer composition
```

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 细胞活率低 | 渗透压不合适、离心过强、处理时间过长 | 复核等渗配制和 RCF |
| 分离层不清楚 | 梯度配制不准、层间混合、目标密度窗口错误 | 重新计算密度，优化分层 |
| 批次间差异大 | Percoll 百分比、缓冲液或离心条件记录不完整 | 建立固定 SOP 和记录模板 |
| 回收后实验受影响 | Percoll 残留 | 增加合适洗涤，确认下游兼容性 |
| 用 Percoll 分 PBMC 反而不稳定 | 过度复杂化常规流程 | 回到 Ficoll/Lymphoprep/Histopaque 类标准方案 |

## 推荐记录模板

中文记录模板：

```text
产品名称：
品牌/供应商：
货号：
批号：
储存条件：
开封日期：
有效期：
目标样本：
目标细胞/颗粒：
Percoll工作百分比：
目标密度：
缓冲液组成：
是否等渗：
梯度类型：连续/不连续/其他
各层体积与顺序：
样本上样量：
离心条件：
brake设置：
目标层位置：
洗涤条件：
回收量：
活率/功能读数：
异常现象：
```

English record template:

```text
Product name:
Brand/supplier:
Catalog number:
Lot number:
Storage condition:
Open date:
Expiration date:
Sample type:
Target cell/particle:
Percoll working percentage:
Target density:
Buffer composition:
Isotonic condition:
Gradient type: continuous/discontinuous/other
Layer volumes and order:
Sample loading volume:
Centrifugation condition:
Brake setting:
Target layer position:
Wash condition:
Recovery:
Viability/functional readout:
Abnormal observation:
```

## 小结

Percoll 是“可调梯度工具”，不是常规 PBMC 分离里 Ficoll 的简单替代品。它适合特殊细胞、细胞器或方法开发场景；使用时必须记录配制比例、密度、缓冲液、渗透压、梯度结构和离心条件。

## 参考来源

- [Cytiva Percoll](https://www.cytiva.com/en/us/shop/cell-culture-and-fermentation/cell-culture-media/density-gradient-media/percoll-p-05677)
- [Cytiva Density Gradient Media](https://www.cytiva.com/en/us/shop/cell-culture-and-fermentation/cell-culture-media/density-gradient-media)
- [STEMCELL Technologies PBMC Isolation](https://www.stemcell.com/peripheral-blood-mononuclear-cell-isolation.html)
