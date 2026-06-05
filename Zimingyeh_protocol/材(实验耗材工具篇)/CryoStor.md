# CryoStor

CryoStor（CryoStor cell cryopreservation media，CryoStor 细胞冻存液产品族）是 [STEMCELL Technologies](<../番外/试剂厂商/STEMCELL Technologies.md>) 的 serum-free（无血清）、defined（成分明确）方向冻存液产品族，常用于 sensitive cells（敏感细胞）、primary cells（原代细胞）、stem cells（干细胞）、immune cells（免疫细胞）和转化研究相关细胞的 cryopreservation（冻存）。

![STEMCELL Technologies 专门细胞体系概要图](<../z_asset/番外/试剂厂商/STEMCELL Technologies/stemcell-technologies-summary-abstract-en.png>)

图源：Image2 生成的 STEMCELL Technologies 概要图；CryoStor 位于 cryopreservation 模块。

## 核心定位

CryoStor 不是简单的 “FBS + DMSO” 自配冻存液，而是面向更标准化冻存流程的 commercial cryopreservation medium（商业冻存介质）。STEMCELL Technologies 的 CryoStor 页面将其定位为用于 cell preservation（细胞保存）的冻存解决方案，并提供不同 DMSO 浓度版本。参考：[STEMCELL Technologies CryoStor](https://www.stemcell.com/products/brands/cryostor.html)。

在这个知识库里，CryoStor 应该和 [细胞冻存液](细胞冻存液.md)、[无血清冻存液](无血清冻存液.md)、[细胞冻存](<../用(实验流程内容篇)/细胞冻存.md>)、[细胞复苏](<../用(实验流程内容篇)/细胞复苏.md>) 一起理解。它适合需要减少 serum（血清）变量、提高批次记录清晰度、或为敏感细胞建立更标准冻存 SOP 的场景。

## 常见版本

| 版本 | 大致含义 | 常见理解 |
| --- | --- | --- |
| CryoStor CS10 | 通常表示约 10% DMSO 的版本 | 接近传统 10% DMSO 冻存逻辑，应用广 |
| CryoStor CS5 | 通常表示约 5% DMSO 的版本 | 希望降低 DMSO 暴露时考虑 |
| CryoStor CS2 | 通常表示约 2% DMSO 的版本 | 更低 DMSO 压力，但需验证细胞适配 |
| CryoStor CSB 或其他版本 | 特定无 DMSO/基础版本或配套体系 | 必须按厂家说明和细胞类型验证 |

具体 DMSO 含量和适用范围以产品说明书为准。protocol 中不能只写“CryoStor”，必须写 CS10、CS5、CS2 等版本。

## 主要用途

| 场景 | CryoStor 的角色 | 注意事项 |
| --- | --- | --- |
| hPSC/干细胞冻存 | 降低血清变量，改善复苏一致性 | 复苏后仍需检查多能性和分化能力 |
| 原代细胞冻存 | 保护敏感细胞 | 不同供体差异大 |
| 免疫细胞冻存 | T/NK/PBMC 等复苏后功能保持 | DMSO 暴露时间和复苏洗涤很关键 |
| 细胞治疗相关研究 | 更接近定义化和可追踪冻存体系 | 注意 RUO/GMP/clinical grade 标签 |
| 长期细胞库 | 固定冻存液版本和批号 | 建立 master/working stock 记录 |

## CryoStor vs FBS + DMSO 自配冻存液

| 项目 | CryoStor | FBS + DMSO 自配 |
| --- | --- | --- |
| 成分定义 | 更定义化，血清变量少 | 血清批间差异大 |
| 记录清晰度 | 货号、批号、版本清楚 | 需分别记录 FBS、DMSO、培养基 |
| 成本 | 通常较高 | 便宜 |
| 适合场景 | 敏感细胞、原代/干细胞、长期项目、转化研究 | 常规细胞系、低成本日常冻存 |
| 替换风险 | 不同 CS 版本不能随便换 | FBS 批次变化也会影响复苏 |

CryoStor 不一定让所有细胞“复苏更好”，但它能减少血清和自配过程带来的不可控变量。

## 使用 protocol 要点

### 冻存前状态

**怎么做**：选择对数生长期、污染阴性、形态稳定的细胞；冻存前记录传代数、活率和密度。

**为什么**：冻存液只能降低冻融损伤，不能拯救已经状态很差的细胞。

### DMSO 暴露时间

**怎么做**：加入 CryoStor 后尽快分装并启动程序降温，避免细胞在室温或 4°C 下长时间暴露于 DMSO。

**为什么**：[DMSO](DMSO.md) 对细胞有保护作用，也有毒性。暴露时间过长会降低复苏后活率和功能。

### 程序降温和长期保存

**怎么做**：使用 controlled-rate freezing（程序降温）或等效降温盒，随后转入液氮气相或合适的超低温长期保存条件。

**为什么**：冻存液配方和降温曲线共同决定冰晶形成、渗透压压力和细胞膜损伤。

### 复苏后评估

**怎么做**：复苏后记录活率、贴壁/恢复速度、增殖、marker、功能 readout，必要时比较 CS10/CS5/自配冻存液。

**为什么**：真正有意义的不是“冻下去了”，而是复苏后细胞是否还能执行实验功能。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 复苏活率低 | 冻存前状态差、DMSO暴露过久、降温曲线不合适 | 优化冻存前状态和降温流程 |
| 复苏后功能下降 | 冻存液版本不适配、洗涤太强或恢复时间不足 | 比较 CS10/CS5 和恢复培养时间 |
| 批间差异 | CryoStor批号、细胞状态或操作人员差异 | 固定 lot 并记录操作细节 |
| DMSO毒性明显 | 室温暴露过久或复苏后未及时稀释 | 缩短操作时间，优化复苏稀释/洗涤 |

## 购买与记录建议

购买时重点看版本、DMSO 含量、RUO/GMP/clinical grade 标签、储存条件、适用细胞类型和是否有项目需要的质量文件。若用于正式长期项目，建议先做小规模冻存/复苏桥接，而不是直接全库切换。

推荐记录模板（中文）：

```text
产品名称：
品牌：STEMCELL Technologies
版本：CS10/CS5/CS2/其他
货号：
批号：
DMSO含量：
细胞类型：
冻存前传代数：
冻存前活率：
细胞密度：
降温方式：
长期保存位置：
复苏日期：
复苏后活率：
复苏后功能/marker：
异常现象：
```

Recommended record template (English):

```text
Product name:
Brand: STEMCELL Technologies
Version: CS10/CS5/CS2/other
Catalog number:
Lot number:
DMSO concentration:
Cell type:
Passage number before freezing:
Viability before freezing:
Cell density:
Freezing method:
Long-term storage location:
Thaw date:
Post-thaw viability:
Post-thaw function/markers:
Abnormal observation:
```

## 小结

CryoStor 是敏感细胞和标准化冻存项目中常见的无血清/定义化冻存液产品族。它的关键记录点是版本、DMSO 含量、细胞状态、降温方式、复苏活率和复苏后功能，而不是只写“用了 CryoStor”。

## 参考来源

- [STEMCELL Technologies CryoStor](https://www.stemcell.com/products/brands/cryostor.html)
