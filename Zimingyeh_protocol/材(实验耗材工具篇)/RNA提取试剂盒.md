# RNA提取试剂盒

RNA extraction kit / RNA purification kit（RNA 提取试剂盒/RNA 纯化试剂盒）是用于从细胞、组织、血液、微生物或其他样本中提取并纯化 RNA 的商业化体系。最常见的是 silica membrane spin column（硅胶膜离心柱）或 magnetic bead（磁珠）体系，通常包含裂解液、结合液、洗涤液、洗脱液、离心柱或磁珠，有些版本还包含 [DNase I](<DNase I.md>)。

![RNA提取核心材料参考图](../z_asset/材/RNA提取核心材料/rna-extraction-core-materials-reference.png)

图源：Image2 生成的 RNA 提取核心材料参考图；中间蓝白盒和离心柱代表柱式 RNA 提取试剂盒。

## 核心原理

柱式 RNA 提取试剂盒通常利用 [硅胶膜柱纯化](<../番外/补充知识/硅胶膜柱纯化.md>)：在高盐和醇存在下，RNA 结合到硅胶膜；蛋白、盐、酚和其他杂质通过洗涤去除；最后用水或低盐 buffer 洗脱 RNA。磁珠体系原理类似，但用磁珠表面结合核酸，适合自动化和高通量。

Qiagen RNeasy Mini Kit 官方手册说明，其流程包括样本裂解、RNA 结合硅胶膜、洗涤和洗脱；许多流程可选 on-column DNase digestion（柱上 DNase 消化）去除基因组 DNA。[参考：Qiagen RNeasy Mini Handbook](https://www.qiagen.com/us/resources/resourcedetail?id=14e7cf6e-521a-4cf7-8cbc-bf9f6fa33e24)

## 常见类型

| 类型 | 特点 | 适合场景 |
| --- | --- | --- |
| Spin column kit | 离心柱，流程直观 | 常规细胞/组织 RNA 提取 |
| Magnetic bead kit | 磁珠结合，易自动化 | 高通量、机器人平台 |
| TRIzol-column hybrid kit | TRIzol 裂解后柱纯化 | 复杂样本、希望降低酚残留 |
| miRNA kit | 保留 small RNA | miRNA/小 RNA 分析 |
| FFPE RNA kit | 针对固定石蜡样本 | 临床病理样本 |
| Blood RNA kit | 针对血液和血细胞 | 血液转录组或 RT-qPCR |

## 与 TRIzol 的区别

| 方案 | 优点 | 局限 |
| --- | --- | --- |
| [TRIzol](TRIzol.md) | 裂解强、成本低、适合组织 | 有毒，酚残留风险，操作变异大 |
| RNA 提取试剂盒 | 标准化、快、纯化干净 | 成本高，柱容量有限 |
| TRIzol + kit | 对复杂样本更强，纯度更好 | 步骤多，成本和时间增加 |

## 使用 protocol

### 选择试剂盒

**怎么做**：根据样本类型、RNA 种类、样本量和下游用途选择 kit。普通细胞总 RNA 可选 total RNA kit；需要 miRNA 时选择 small RNA compatible kit；FFPE 或血液样本用专用 kit。

**为什么**：不同样本的裂解难度、抑制物和 RNA 片段大小不同。错用 kit 会导致产量低、柱堵塞或小 RNA 丢失。

**注意事项**：

- 不要超过柱容量。
- 看清是否需要额外加入 [β-巯基乙醇](<β-巯基乙醇.md>)。
- 确认是否带 gDNA 去除步骤。

### 裂解和结合

**怎么做**：按说明加入裂解液充分裂解样本，再加入乙醇或结合液让 RNA 能结合硅胶膜或磁珠。

**为什么**：裂解不完全会降低产量；乙醇比例错误会影响 RNA 与硅胶膜结合。

**注意事项**：

- 组织样本要充分匀浆。
- 乙醇浓度和体积不能随意改。
- 黏稠裂解液可能提示 DNA 多或样本过量。

### 洗涤、DNase处理和洗脱

**怎么做**：按顺序加入洗涤液，必要时做柱上 DNase I 消化，最后用 [无核酸酶水](无核酸酶水.md) 或洗脱液洗脱 RNA。

**为什么**：洗涤去除盐、蛋白和抑制物；DNase 处理去除 genomic DNA；洗脱体积影响最终浓度。

**注意事项**：

- 洗涤液常需按说明提前加入乙醇。
- 洗脱前确保柱膜无残留乙醇。
- 洗脱体积越小浓度越高，但总回收率可能降低。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 产量低 | 样本量少、裂解不足、洗脱体积/时间不合适 | 优化裂解，预热洗脱液，二次洗脱 |
| 纯度差 | 洗涤不充分、乙醇残留、样本过量 | 增加空转，减少上样量 |
| 柱堵塞 | 样本太多、组织未匀浆、DNA 黏稠 | 降低样本量，增强匀浆，先清除碎片 |
| DNA 污染 | 未 DNase 处理或处理不足 | 使用柱上或洗脱后 DNase |
| RNA 降解 | 样本保存差、RNase 污染 | 快速裂解，使用 RNase-free 操作 |

## 购买与记录建议

常见供应商包括 [Qiagen](<../番外/试剂厂商/Qiagen.md>)、[Invitrogen](<../番外/试剂厂商/Invitrogen.md>)、[Takara](<../番外/试剂厂商/Takara.md>)、[NEB](<../番外/试剂厂商/NEB.md>)、Zymo Research、Macherey-Nagel 等。购买时看样本类型、RNA 大小范围、是否保留 miRNA、是否含 DNase、是否适合自动化。

推荐记录：

```text
RNA extraction kit:
Brand:
Catalog number:
Lot number:
Sample type:
Sample input amount:
Lysis buffer:
β-mercaptoethanol added: yes/no
DNase treatment: yes/no
Elution volume:
RNA yield:
A260/A280:
A260/A230:
RNA integrity:
```

## 小结

RNA 提取试剂盒的优势是标准化和纯化干净。选择时不能只看“RNA kit”，而要看样本类型、RNA 大小范围、柱容量、是否需要 DNase、是否保留小 RNA，以及下游是 RT-qPCR 还是 RNA-seq。

## 参考来源

- [Qiagen RNeasy Mini Handbook](https://www.qiagen.com/us/resources/resourcedetail?id=14e7cf6e-521a-4cf7-8cbc-bf9f6fa33e24)
- [Thermo Fisher PureLink RNA Mini Kit](https://www.thermofisher.com/order/catalog/product/12183018A)
