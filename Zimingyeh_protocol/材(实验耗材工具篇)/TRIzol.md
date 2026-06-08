# TRIzol

TRIzol Reagent（TRIzol 试剂）是一种基于 phenol（酚）和 guanidinium isothiocyanate（异硫氰酸胍）的单相裂解试剂，用于从细胞、组织、病毒样本或液体样本中提取 total RNA（总 RNA）。它的核心价值是快速裂解样本、失活 RNase，并在加入 [氯仿](氯仿.md) 后通过 [相分离](<../番外/补充知识/相分离.md>) 把 RNA 与 DNA、蛋白分开。

![RNA提取核心材料参考图](../z_asset/材/RNA提取核心材料/rna-extraction-core-materials-reference.png)

图源：Image2 生成的 RNA 提取核心材料参考图；左侧棕色瓶代表 TRIzol 类酚/胍盐裂解试剂，左侧分层离心管示意相分离。

## 核心原理

TRIzol 属于 acid guanidinium thiocyanate-phenol-chloroform extraction（酸性胍盐-酚-氯仿提取）体系。胍盐和酚能裂解细胞、变性蛋白并抑制 RNase；加入氯仿并离心后，体系分成上层 aqueous phase（水相）、中间层和下层 organic phase（有机相）。RNA 主要在水相中，随后可用 [异丙醇](异丙醇.md) 沉淀并用 [75乙醇](75乙醇.md) 洗涤。

Invitrogen TRIzol Reagent 的官方说明将其用于从细胞和组织中分离高质量 total RNA，并说明可在相分离后依次获得 RNA、DNA 和蛋白。[参考：Invitrogen TRIzol Reagent](https://www.thermofisher.com/order/catalog/product/15596026)

## 主要用途

| 用途 | 为什么用 TRIzol | 注意事项 |
| --- | --- | --- |
| 细胞总 RNA 提取 | 裂解强、RNase 失活快 | 需要通风橱和化学废液处理 |
| 组织 RNA 提取 | 对复杂样本裂解能力强 | 组织匀浆质量决定结果 |
| RNA-seq 前 RNA 获取 | 可获得较完整 total RNA | 后续常需柱纯化或 DNase 处理 |
| RT-qPCR 模板制备 | 适合多数细胞/组织 | 残留酚会抑制逆转录和 qPCR |
| 同一样本 DNA/蛋白回收 | 理论上可分层回收 | 操作复杂，需按说明优化 |

## TRIzol vs RNA提取试剂盒

| 方案 | 优点 | 局限 |
| --- | --- | --- |
| TRIzol | 裂解强、成本低、适合多种样本 | 有毒有味，操作窗口和相分离要求高 |
| [RNA提取试剂盒](RNA提取试剂盒.md) | 快速、标准化、纯化更干净 | 成本高，柱容量有限 |
| TRIzol + 柱纯化 | 裂解强 + 纯化干净 | 步骤多，成本更高 |

如果样本复杂、RNase 多或组织难裂解，TRIzol 很有优势；如果样本常规且追求稳定、高通量和少接触危险化学品，柱式试剂盒更省心。

## 使用 protocol

### 裂解样本

**怎么做**：按样本量加入足量 TRIzol，充分吹打、匀浆或涡旋，使细胞/组织完全裂解。

**为什么**：裂解不充分会导致 RNA 回收率低、DNA/蛋白污染和柱堵塞。TRIzol 需要快速接触样本以失活 RNase。

**注意事项**：

- TRIzol 含酚和胍盐，必须按 [化学品安全](<../实验室安全/化学品安全.md>) 和 [通风橱使用规范](<../实验室安全/通风橱使用规范.md>) 操作。
- 不要让样本量超过 TRIzol 裂解能力。
- 组织样本要先剪碎或匀浆。

### 加氯仿相分离

**怎么做**：按说明加入氯仿，剧烈混匀短时间，室温放置后离心，形成水相、中间层和有机相。

**为什么**：氯仿推动相分离，RNA 进入上层水相。吸取水相时不能碰到中间层。

**注意事项**：

- 氯仿挥发且有毒，必须通风橱中操作。
- 不要贪多吸取水相，宁可少取也不要带入中间层。
- 相分离不清楚时不要硬吸，重新离心或调整样本处理。

### RNA沉淀、洗涤和溶解

**怎么做**：将水相转移到新管，加入异丙醇沉淀 RNA，离心后用 75% 乙醇洗涤，短暂风干后用 [无核酸酶水](无核酸酶水.md) 溶解。

**为什么**：异丙醇让 RNA 沉淀，乙醇洗涤去除盐和有机残留。

**注意事项**：

- RNA pellet（沉淀）可能透明很小，不要误倒掉。
- 不要过度干燥 RNA pellet，否则难溶。
- 残留酚或乙醇会抑制 [逆转录](<../用(实验流程内容篇)/逆转录.md>) 和 qPCR。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| RNA 产量低 | 样本裂解不足、水相取少、沉淀丢失 | 优化匀浆，标记管方向，小心保留 pellet |
| A260/A230 低 | 酚、胍盐或盐残留 | 增加洗涤，柱纯化或重新沉淀 |
| DNA 污染 | 中间层带入或未 DNase 处理 | 吸水相更保守，使用 [DNase I](<DNase I.md>) |
| RNA 降解 | 样本处理慢、RNase 污染、组织保存差 | 快速裂解，低温保存，使用 RNase-free 操作 |
| 下游 RT-qPCR 抑制 | 酚或乙醇残留 | 充分洗涤和适度干燥，必要时柱纯化 |

## 购买与记录建议

常见产品包括 [Invitrogen](<../番外/试剂厂商/Invitrogen.md>) TRIzol Reagent、[Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>) TRI Reagent 等。购买时注意样本类型、包装规格、储存条件和安全数据表 SDS。

推荐记录：

```text
TRIzol-like reagent:
Brand:
Catalog number:
Lot number:
Sample type:
Sample amount:
Reagent volume:
Chloroform volume:
Isopropanol volume:
Wash ethanol concentration:
RNA yield:
A260/A280:
A260/A230:
Storage/open date:
```

## 小结

TRIzol 是强力、经典、成本相对低的 RNA 提取体系，但它对操作细节和安全要求很高。真正的关键是充分裂解、清晰相分离、保守吸取水相、去除酚/盐/乙醇残留，并设置后续 DNase 和质量检测。

## 参考来源

- [Invitrogen TRIzol Reagent](https://www.thermofisher.com/order/catalog/product/15596026)
- [Invitrogen TRIzol Reagent User Guide](https://assets.thermofisher.com/TFS-Assets/LSG/manuals/trizol_reagent.pdf)
