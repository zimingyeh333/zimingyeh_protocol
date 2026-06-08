# Bicinchoninic acid

Bicinchoninic acid（BCA，二喹啉甲酸/双喹啉羧酸）是 [BCA蛋白定量试剂盒](BCA蛋白定量试剂盒.md) 的核心显色配体，用于和一价铜离子 Cu+ 形成紫色络合物，从而通过 562 nm 吸光度估算蛋白浓度。

![WB与BCA核心材料参考图](../z_asset/材/WB与BCA核心材料/wb-bca-core-materials-reference.png)

图源：Image2 生成的 Western blot 与 BCA 核心材料参考图；右下方紫色孔板示意 BCA 反应显色，右侧试剂瓶示意 BCA 试剂和铜试剂。

## 在BCA assay中的角色

BCA assay（bicinchoninic acid assay，BCA 蛋白定量法）由两个耦合过程组成：

| 步骤 | 发生了什么 | Bicinchoninic acid 的作用 |
| --- | --- | --- |
| Biuret reaction（双缩脲反应） | 蛋白在碱性条件下把 Cu2+ 还原为 Cu+ | 不直接负责还原 |
| Chelation/color development（络合显色） | 两个 BCA 分子与一个 Cu+ 形成紫色复合物 | 把 Cu+ 转换成可读的 OD562 信号 |

Pierce BCA Protein Assay Kit 用户指南说明，BCA 法把蛋白在碱性条件下还原 Cu2+ 为 Cu+ 的反应，与 BCA 对 Cu+ 的高灵敏显色检测结合起来；紫色产物在 562 nm 有强吸收，常见工作范围约 20-2000 ug/mL。[参考：Pierce BCA Protein Assay Kit User Guide](https://www.thermofisher.com/TFS-Assets/LSG/manuals/MAN0011430_Pierce_BCA_Protein_Asy_UG.pdf)。

## 和硫酸铜的关系

[硫酸铜](硫酸铜.md) 或 copper(II) sulfate solution（硫酸铜溶液）提供 Cu2+；BCA 提供显色配体。很多商业 BCA 体系会把 BCA solution（BCA 溶液）和 copper reagent（铜试剂）分开保存，使用前按比例混合成 working reagent（工作液）。

Merck/Sigma 的 BCA 方法资料中，典型工作液可由 49 mL Bicinchoninic Acid Solution 和 1 mL 4% Copper(II) Sulfate Pentahydrate Solution 配制。参考：[Merck Protein Determination by the BCA Method](https://www.merckmillipore.com/CV/en/technical-documents/protocol/protein-biology/protein-quantitation/protein-determination-by-the-bicinchoninic-acid-bca-method)。

## BCA vs Bradford vs Lowry

| 方法 | 检测逻辑 | 优点 | 常见局限 |
| --- | --- | --- | --- |
| BCA | Cu2+ 被蛋白还原，BCA-Cu+ 在 562 nm 显色 | 对许多去污剂相对兼容，线性范围宽 | 还原剂、螯合剂、强铜干扰物会影响 |
| [Bradford蛋白定量](<../用(实验流程内容篇)/Bradford蛋白定量.md>) | [考马斯亮蓝](考马斯亮蓝.md)（Coomassie Brilliant Blue）与蛋白结合，595 nm 读数 | 快速、便宜 | 去污剂敏感，蛋白间差异较大 |
| [Lowry蛋白定量](<../用(实验流程内容篇)/Lowry蛋白定量.md>) | 铜反应加 Folin-Ciocalteu reagent（福林酚试剂）显色 | 灵敏度较高 | 步骤更多，干扰因素多 |
| UV A280 | 芳香族氨基酸吸收 | 快速、无试剂 | 受核酸和蛋白组成影响大 |

如果样本来自含 [RIPA裂解液](RIPA裂解液.md) 或非离子去污剂的 WB 裂解体系，BCA 通常比 Bradford 更常用；如果样本含大量 [DTT](DTT.md)、[β-巯基乙醇](β-巯基乙醇.md) 或 [EDTA](EDTA.md)，则需要查兼容表或使用 reducing-agent-compatible BCA kit（抗还原剂 BCA 试剂盒）。

## 使用注意

### 现配工作液

**怎么做**：按说明书比例混合 BCA 溶液和铜试剂，充分混匀后尽快使用。

**为什么**：工作液混合后开始具备显色反应条件；放置过久可能增加背景或降低一致性。

### 控制孵育时间

**怎么做**：同一块 96 孔板尽量同时加入工作液，统一孵育温度和时间。

**为什么**：BCA 不是完全严格的终点反应，孵育后颜色仍会缓慢变化。不同孔孵育时间差太大会带来系统误差。

### 做buffer匹配

**怎么做**：标准曲线稀释液尽量使用和样本相同的 buffer，至少要让 blank（空白孔）反映样本 buffer 背景。

**为什么**：BCA 对还原剂、螯合剂、某些糖类、脂类和高浓度盐分敏感；只用水配标准品可能无法反映样本基质。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 全板偏紫 | 工作液污染、blank buffer 本身还原性强 | 换新工作液，重新做 blank |
| 标准曲线低浓度端不线性 | 移液误差、低浓度接近检测下限 | 增加重复孔，换更合适范围 |
| 样本 OD 高于最高标准 | 样本太浓 | 稀释样本后重测 |
| 样本颜色异常 | buffer 含干扰物或样本浑浊 | 做兼容性测试或换方法 |
| 重复孔差异大 | 气泡、混匀不足、板边缘效应 | 去泡、充分混匀，避免边缘孔或做布局控制 |

## 购买与记录建议

单独购买 BCA solution 通常用于自配或半自配 BCA 体系；大多数日常实验更推荐直接购买 [BCA蛋白定量试剂盒](BCA蛋白定量试剂盒.md)，因为其中 BCA 溶液、铜试剂、[BSA标准品](BSA标准品.md) 和说明书已经配套。常见供应商包括 [Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>) Pierce、[Merck](<../番外/试剂厂商/Merck.md>)/[Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>)、[Bio-Rad](<../番外/试剂厂商/Bio-Rad.md>)、[Cell Signaling Technology](<../番外/试剂厂商/Cell Signaling Technology.md>) 等。

推荐记录模板（中文）：

```text
BCA溶液品牌：
货号：
批号：
铜试剂品牌/货号：
工作液配比：
标准品：
孵育温度：
孵育时间：
检测波长：
样本buffer：
是否做buffer匹配：
异常颜色/沉淀：
```

Recommended record template (English):

```text
BCA solution brand:
Catalog number:
Lot number:
Copper reagent brand/catalog number:
Working reagent ratio:
Protein standard:
Incubation temperature:
Incubation time:
Detection wavelength:
Sample buffer:
Buffer-matched standard: yes/no
Abnormal color/precipitate:
```

## 小结

Bicinchoninic acid 的价值在于把“蛋白还原铜离子”这个化学变化变成稳定、可读的紫色 OD562 信号。做 BCA 时真正要控制的不是只把试剂加进去，而是标准曲线、样本 buffer、孵育时间和干扰物。

## 参考来源

- [Pierce BCA Protein Assay Kit User Guide](https://www.thermofisher.com/TFS-Assets/LSG/manuals/MAN0011430_Pierce_BCA_Protein_Asy_UG.pdf)
- [Smith et al., Measurement of protein using bicinchoninic acid, PubMed](https://pubmed.ncbi.nlm.nih.gov/3843705/)
- [Wiechelman et al., Investigation of the bicinchoninic acid protein assay, PubMed](https://pubmed.ncbi.nlm.nih.gov/3245570/)
- [Merck Protein Determination by the BCA Method](https://www.merckmillipore.com/CV/en/technical-documents/protocol/protein-biology/protein-quantitation/protein-determination-by-the-bicinchoninic-acid-bca-method)
- [Sigma-Aldrich Bicinchoninic Acid solution B9643](https://www.sigmaaldrich.com/US/en/product/sigma/b9643)
