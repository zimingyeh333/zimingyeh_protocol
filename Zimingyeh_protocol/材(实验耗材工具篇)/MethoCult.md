# MethoCult

MethoCult（methylcellulose-based hematopoietic colony-forming medium，甲基纤维素半固体造血集落形成培养基）是 [STEMCELL Technologies](<../番外/试剂厂商/STEMCELL Technologies.md>) 用于 hematopoietic progenitor cells（HPC，[造血祖细胞](<../番外/补充知识/造血祖细胞.md>)）colony-forming unit assay（CFU assay，[集落形成单位实验](<../用(实验流程内容篇)/集落形成单位实验.md>)）的经典产品族。

![STEMCELL Technologies 专门细胞体系概要图](<../z_asset/番外/试剂厂商/STEMCELL Technologies/stemcell-technologies-summary-abstract-en.png>)

图源：Image2 生成的 STEMCELL Technologies 概要图；MethoCult 位于 hematopoietic assays 模块。

## 核心定位

MethoCult 的核心不是“让细胞长起来”，而是把造血祖细胞嵌入 semi-solid medium（半固体培养基）中，让单个或少数祖细胞在局部形成 colony（集落），再根据集落数量和形态评估造血祖细胞功能。STEMCELL Technologies 的 MethoCult 页面将其定位为用于 colony-forming unit assays（集落形成单位实验）的 methylcellulose-based media。参考：[STEMCELL Technologies MethoCult](https://www.stemcell.com/products/brands/methocult.html)。

因此 MethoCult 更接近“功能检测体系”，不是普通细胞培养基。它的读数是 CFU-GM、BFU-E、CFU-GEMM 等集落类型和数量，而不是简单细胞计数。

## 核心组成逻辑

| 组成/变量 | 作用 | 记录重点 |
| --- | --- | --- |
| Methylcellulose（甲基纤维素） | 形成半固体环境，限制细胞迁移 | 产品类型、批号、黏稠度处理 |
| Cytokine/growth factor cocktail | 支持不同造血祖细胞谱系形成集落 | 是否 pre-mixed、具体因子版本 |
| Serum 或 serum-free 体系 | 提供复杂支持或定义化条件 | 是否含血清、血清批号 |
| 细胞接种密度 | 决定集落可读性 | 起始细胞数、接种体积 |
| 培养时间 | 决定集落成熟度 | 读板日期、培养天数 |

不同 MethoCult 版本可能含有不同 cytokine cocktail（细胞因子组合）和血清成分，不能只按“MethoCult”一个名字替换。

## 常见用途

| 场景 | MethoCult 的角色 |
| --- | --- |
| 造血祖细胞功能检测 | 评估 HPC 的 colony-forming capacity（集落形成能力） |
| 脐血/骨髓/动员外周血样本 | 比较不同样本的祖细胞活性 |
| 基因编辑或药物处理后检测 | 观察处理是否影响造血祖细胞功能 |
| iPSC/ESC造血分化 | 作为下游功能 readout |
| 细胞治疗或转化前评估 | 检查冻存、扩增或处理后的功能保持 |

## MethoCult vs 普通克隆形成实验

| 项目 | MethoCult/CFU assay | 普通 clonogenic assay |
| --- | --- | --- |
| 主要对象 | 造血祖细胞、血液系统样本 | 肿瘤细胞或贴壁细胞克隆形成 |
| 培养环境 | 半固体甲基纤维素体系 | 常规培养皿/培养板 |
| 读数 | CFU-GM、BFU-E、CFU-GEMM 等集落类型 | 克隆数、克隆大小、染色面积 |
| 核心解释 | 造血祖细胞功能和谱系潜能 | 单细胞增殖/存活能力 |

不要把 MethoCult 读数简单理解成“细胞长得多”。它更接近造血功能 readout。

## 使用 protocol 要点

### 混匀和避免气泡

**怎么做**：按厂家说明解冻/平衡 MethoCult，使用合适针头或专用工具充分混匀细胞和半固体培养基，尽量避免气泡。

**为什么**：MethoCult 黏稠，混匀不充分会导致细胞分布不均；气泡会影响显微镜下集落计数。

**可能出错**：如果细胞分布不均，同一板孔之间差异会很大，集落计数失去可比性。

### 接种密度

**怎么做**：根据样本类型和预期祖细胞比例设置接种细胞数，确保集落之间不重叠。

**为什么**：密度太高会导致集落融合，无法准确分类；密度太低则统计不稳定。

**替代策略**：对未知样本可设置多个接种密度预实验。

### 集落识别

**怎么做**：按标准形态识别 CFU-GM、BFU-E、CFU-GEMM 等类型，并尽量由训练过的人计数。

**为什么**：CFU assay 的误差常来自主观分类和边界判断。必要时保留显微图像。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 集落分布不均 | 混匀不足、气泡、接种操作慢 | 延长混匀，使用合适针头，统一操作时间 |
| 集落太密无法分类 | 接种细胞数过高 | 降低接种密度 |
| 集落少或无集落 | 细胞活率低、祖细胞比例低、培养条件不适 | 检查起始活率，设置阳性样本 |
| 计数差异大 | 分类标准不一致、培养时间不同 | 固定读板日期，建立图像参考标准 |

## 购买与记录建议

购买 MethoCult 时要看清产品是否含 cytokines、是否 serum-free、适用物种和样本类型。对于正式比较实验，同一批次和相同培养天数非常重要。

推荐记录模板（中文）：

```text
产品名称：
品牌：STEMCELL Technologies
MethoCult版本：
货号：
批号：
是否含细胞因子：
是否含血清：
样本来源：
起始细胞数：
接种体积：
培养板规格：
培养天数：
计数者：
CFU-GM数量：
BFU-E数量：
CFU-GEMM数量：
异常现象：
```

Recommended record template (English):

```text
Product name:
Brand: STEMCELL Technologies
MethoCult version:
Catalog number:
Lot number:
Cytokines included:
Serum included:
Sample source:
Starting cell number:
Plating volume:
Plate format:
Culture duration:
Scorer:
CFU-GM count:
BFU-E count:
CFU-GEMM count:
Abnormal observation:
```

## 小结

MethoCult 是造血祖细胞 CFU assay 的代表性半固体培养基体系。它的核心变量是产品版本、细胞因子组合、样本来源、接种密度、培养天数和集落分类标准。记录时必须把这些写清，否则 CFU 结果很难比较。

## 参考来源

- [STEMCELL Technologies MethoCult](https://www.stemcell.com/products/brands/methocult.html)
