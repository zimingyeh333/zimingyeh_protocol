# CRISPR RNP

CRISPR RNP（CRISPR ribonucleoprotein，CRISPR 核糖核蛋白复合物）是由 Cas9 protein（Cas9 蛋白）和 guide RNA（引导 RNA）预先形成的复合体。它可以直接递送进细胞，在细胞内短时间完成靶位点切割。

## 为什么使用 RNP

| 优势 | 解释 |
| --- | --- |
| 起效快 | 不需要先表达 Cas9 和 sgRNA |
| 表达窗口短 | Cas9 停留时间较短，理论上有利于降低持续切割 |
| 不依赖质粒表达 | 减少质粒相关背景和整合担忧 |
| 适合难转染细胞 | 常与电转体系配合用于原代细胞或敏感细胞 |

## 局限

| 局限 | 说明 |
| --- | --- |
| 成本较高 | Cas9 蛋白和合成 RNA 通常比质粒贵 |
| 条件依赖细胞类型 | 电转或递送条件需要优化 |
| 不适合长期表达 | 如果需要 CRISPR screen 或稳定系统，质粒/病毒体系更常见 |
| RNA 质量敏感 | RNA 降解会明显影响编辑效率 |

## 与质粒递送的区别

| 项目 | CRISPR RNP | 质粒 CRISPR |
| --- | --- | --- |
| Cas9 来源 | 直接递送蛋白 | 细胞内表达 |
| 起效速度 | 快 | 较慢 |
| 持续时间 | 短 | 较长 |
| 脱靶控制 | 通常更容易控制 | 持续表达可能增加风险 |
| 成本 | 较高 | 较低 |

## 相关实验页

- [基因编辑](<../../用(实验流程内容篇)/基因编辑.md>)
- [细胞转染](<../../用(实验流程内容篇)/细胞转染.md>)

## 参考来源

- [Ran et al., Genome engineering using the CRISPR-Cas9 system, Nature Protocols, 2013](https://doi.org/10.1038/nprot.2013.143)
- [Addgene CRISPR Guide](https://www.addgene.org/guides/crispr/)
