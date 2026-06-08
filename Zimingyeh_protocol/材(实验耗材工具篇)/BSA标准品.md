# BSA标准品

BSA standard（bovine serum albumin standard，牛血清白蛋白标准品）是用已知浓度的 [BSA](BSA.md)（bovine serum albumin，牛血清白蛋白）制成的蛋白定量校准品，常用于 [BCA蛋白定量试剂盒](BCA蛋白定量试剂盒.md)、[Bradford蛋白定量](<../用(实验流程内容篇)/Bradford蛋白定量.md>)（Bradford assay，考马斯亮蓝法蛋白定量）和 [Lowry蛋白定量](<../用(实验流程内容篇)/Lowry蛋白定量.md>)（Lowry assay，Lowry 法蛋白定量）中建立 standard curve（标准曲线）。

![WB与BCA核心材料参考图](../z_asset/材/WB与BCA核心材料/wb-bca-core-materials-reference.png)

图源：Image2 生成的 Western blot 与 BCA 核心材料参考图；右下方紫色 96 孔板示意 BCA 标准曲线/样本显色，右侧试剂瓶代表 BSA 标准品和 BCA 相关试剂。

## 为什么需要标准品

在 [蛋白定量](<../用(实验流程内容篇)/蛋白定量.md>) 中，酶标仪读到的是 absorbance（吸光度）或 fluorescence（荧光值），不是直接读到“mg/mL”。BSA 标准品提供一组已知浓度点，用来把 OD562、OD595 等信号转换成样本蛋白浓度。

Thermo Fisher Pierce 的 BSA Protein Assay Standards 官方资料把 2 mg/mL BSA 标准品描述为 total protein assays（总蛋白测定）中建立标准曲线和校准控制的参考样本，并说明其常见形式为 1 mL ampule（安瓿）包装。参考：[Thermo Fisher Pierce BSA Standard Ampules](https://www.thermofisher.com/order/catalog/product/de/en/23209)。

## BSA标准品 vs 普通BSA

| 项目 | BSA标准品 | 普通BSA粉末/溶液 |
| --- | --- | --- |
| 目的 | 定量校准 | 封闭、稳定蛋白、配制缓冲液 |
| 浓度 | 厂商已标定，常见 2 mg/mL | 需要自己称量或测定 |
| 批间控制 | 更强调浓度准确性和稳定性 | 取决于等级和用途 |
| 适合场景 | 标准曲线、质控 | 封闭液、载体蛋白、普通添加剂 |
| 风险 | 开封和稀释误差 | 称量误差、溶解不完全、含水量影响 |

如果目的是做标准曲线，优先使用标准品；如果只是 WB 封闭或抗体稀释中的蛋白载体，普通 BSA 通常即可。

## 标准曲线设计

以常见 BCA assay（bicinchoninic acid assay，BCA 蛋白定量法）为例，标准曲线通常覆盖 20-2000 ug/mL 的工作区间。Thermo Fisher Pierce BCA Protein Assay Kit 用户指南说明，该方法在 562 nm 检测紫色 BCA-Cu+ 复合物，并在较宽范围内与蛋白浓度近似线性。[参考：Pierce BCA Protein Assay Kit User Guide](https://www.thermofisher.com/TFS-Assets/LSG/manuals/MAN0011430_Pierce_BCA_Protein_Asy_UG.pdf)。

常见稀释点可以设计为：

| 管号 | BSA终浓度 | 用途 |
| --- | --- | --- |
| Blank | 0 ug/mL | 扣除背景 |
| S1 | 25 ug/mL | 低浓度端 |
| S2 | 125 ug/mL | 低-中范围 |
| S3 | 250 ug/mL | 中低范围 |
| S4 | 500 ug/mL | 中范围 |
| S5 | 1000 ug/mL | 中高范围 |
| S6 | 1500 ug/mL | 高范围 |
| S7 | 2000 ug/mL | 上限附近 |

实际点位要跟试剂盒说明书一致。更重要的是：标准品稀释液应尽量与样本 buffer 相同或相近，因为 [RIPA裂解液](RIPA裂解液.md)、[DTT](DTT.md)、[EDTA](EDTA.md)、去污剂和还原剂都可能影响不同蛋白定量方法。

## 使用 protocol

### 解冻或开封

**怎么做**：室温短暂平衡，轻轻混匀，不要剧烈涡旋起泡。安瓿或小管开封后尽量一次分装，减少反复冻融。

**为什么**：标准品的价值在于浓度准确和均一。泡沫、挂壁和蒸发都会引入小误差，而标准曲线误差会传递给所有样本。

### 梯度稀释

**怎么做**：用与样本兼容的 diluent（稀释液）逐级稀释，优先使用低吸附管和校准过的 [移液枪](移液枪.md)。每个浓度建议至少 technical duplicate（技术重复）或 triplicate（三重复）。

**为什么**：BCA/Bradford 的曲线质量高度依赖移液准确性。最高浓度点如果配错，整条曲线都会偏。

### 上板和读数

**怎么做**：按照试剂盒要求加入工作液，混匀，规定温度和时间孵育，再读对应波长。

**为什么**：BCA 不是严格终点反应，显色会继续发展；同一批板内应尽量保持孵育时间一致。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 标准曲线 R2 低 | 稀释错误、混匀不足、气泡 | 重新配标准曲线，离心或挑破气泡 |
| blank 值高 | 稀释液或板污染，试剂老化 | 换新稀释液和板，检查工作液 |
| 样本浓度超出曲线 | 样本太浓或太稀 | 重新稀释到曲线中段 |
| 标准曲线正常但样本异常 | 样本 buffer 干扰 | 做 buffer-matched standard 或换兼容试剂盒 |
| 批次间浓度漂移 | 不同标准品批号或开封时间不同 | 固定批号，记录开封日期 |

## 购买与记录建议

常见选择包括 [Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>) Pierce BSA 标准品、[Bio-Rad](<../番外/试剂厂商/Bio-Rad.md>) 蛋白 assay standards、[Merck](<../番外/试剂厂商/Merck.md>)/[Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>) BSA 产品。对于正式定量，优先买已标定浓度的 liquid standard（液体标准品）；对于预算紧张或教学练习，可用高纯 BSA 自配，但要接受更高误差。

推荐记录模板（中文）：

```text
BSA标准品品牌：
货号：
批号：
标称浓度：
溶剂/防腐剂：
开封日期：
稀释液：
标准曲线范围：
重复孔数：
拟合方式：
R2：
异常孔：
```

Recommended record template (English):

```text
BSA standard brand:
Catalog number:
Lot number:
Nominal concentration:
Solvent/preservative:
Open date:
Diluent:
Standard curve range:
Replicates:
Fitting model:
R2:
Outlier wells:
```

## 小结

BSA 标准品不是“随便一瓶 BSA”，而是蛋白定量的坐标尺。标准曲线做歪，后面所有 WB 上样量、归一化和组间比较都会跟着歪。

## 参考来源

- [Thermo Fisher Pierce BSA Standard Ampules, 2 mg/mL](https://www.thermofisher.com/order/catalog/product/de/en/23209)
- [Pierce BCA Protein Assay Kit User Guide](https://www.thermofisher.com/TFS-Assets/LSG/manuals/MAN0011430_Pierce_BCA_Protein_Asy_UG.pdf)
- [Thermo Fisher BCA Assay and Lowry Assays](https://www.thermofisher.com/us/en/home/life-science/protein-biology/protein-assays-analysis/protein-assays/bca-protein-assays.html)
