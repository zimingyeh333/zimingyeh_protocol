# CRISPR-Cas9

CRISPR-Cas9（clustered regularly interspaced short palindromic repeats-CRISPR-associated protein 9，成簇规律间隔短回文重复序列-CRISPR 相关蛋白 9）是一种 RNA-guided genome editing（RNA 引导基因组编辑）系统，常用于在特定 DNA 位点引入切割并诱导细胞修复。

对应实验主页面见：[基因编辑](<../../用(实验流程内容篇)/基因编辑.md>)。

## 核心组成

| 组成 | 作用 |
| --- | --- |
| Cas9 | 负责切割 DNA 的核酸酶 |
| [sgRNA](sgRNA.md) | 引导 Cas9 到目标序列 |
| [PAM序列](PAM序列.md) | Cas9 识别靶位点所需的邻近短序列 |
| 靶 DNA | 被编辑的基因组区域 |

常用 SpCas9 的 PAM 多为 NGG。不同 Cas 蛋白有不同 PAM 要求、切割方式和适用场景。

## 产生编辑的原因

Cas9 切割目标位点后产生 DNA double-strand break（DNA 双链断裂）。细胞会尝试修复：

- 通过 [NHEJ](NHEJ.md) 形成 [indel](indel.md)，常用于基因敲除。
- 通过 [HDR](HDR.md) 参考 [供体模板](供体模板.md)，可用于定点敲入或点突变。

## 需要谨慎理解的点

CRISPR-Cas9 是“可编程切割系统”，不是自动精准改写系统。最终结果由 sgRNA 活性、Cas9 递送、细胞 DNA 修复路径、细胞状态和筛选策略共同决定。

## 参考来源

- [Jinek et al., Science, 2012](https://doi.org/10.1126/science.1225829)
- [Cong et al., Science, 2013](https://doi.org/10.1126/science.1231143)
- [Mali et al., Science, 2013](https://doi.org/10.1126/science.1232033)
- [Addgene CRISPR Guide](https://www.addgene.org/guides/crispr/)
