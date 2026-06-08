# Dispase

Dispase（中性蛋白酶；常指 Dispase I 或 Dispase II）是一类相对温和的 neutral protease（中性蛋白酶），常用于组织、细胞团块、干细胞克隆或上皮片层的解离。它的定位不是日常贴壁细胞传代的默认试剂，而是用于需要较温和处理 extracellular matrix（ECM，细胞外基质）和细胞片层结构的场景。

[Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>) / [Merck](<../番外/试剂厂商/Merck.md>) 的 Dispase II 产品说明将其描述为可用于温和组织解离和细胞收获的中性蛋白酶，并常用于分离上皮细胞、胚胎干细胞克隆或组织层。[参考：Sigma Dispase II](https://www.sigmaaldrich.com/US/en/product/roche/04942078001)

## 核心作用

Dispase 的优势是比 [Trypsin-EDTA](Trypsin-EDTA.md) 更偏向温和地处理基质和细胞片层，而不是强力把所有细胞表面蛋白都快速切掉。

| 作用 | 实验意义 |
| --- | --- |
| 解离 ECM 和细胞片层 | 用于上皮层、干细胞克隆、组织片段 |
| 保留较好的细胞活性 | 适合对胰酶敏感的样本 |
| 支持小团块传代 | 对部分干细胞/类器官样结构有用 |
| 与胶原酶配合 | 组织消化时可改善释放效率 |

## 常见用途

- 干细胞克隆或细胞片层的温和收获。
- 上皮组织、皮肤、黏膜等组织层分离。
- 与 [胶原酶](胶原酶.md)、[DNase I](<DNase I.md>) 或机械剪碎组合，用于原代细胞分离。
- 某些需要保留细胞表面结构和活性的组织解离流程。
- 从 ECM 包被或基质环境中释放细胞团块。

## Dispase vs 胶原酶 vs 胰酶类

| 试剂 | 主要目标 | 更适合 | 不适合 |
| --- | --- | --- | --- |
| Dispase | 基底膜/ECM 相关结构、细胞片层 | 温和组织层分离、干细胞团块 | 快速常规贴壁细胞传代 |
| 胶原酶 | Collagen（胶原）丰富组织 ECM | 原代组织消化、间质丰富样本 | 需要高度可控低批差的简单传代 |
| Trypsin-EDTA | 贴壁蛋白和细胞连接 | 常规贴壁细胞传代 | 表面 marker 敏感或组织 ECM 厚的样本 |
| [Accutase](Accutase.md) | 温和细胞表面解离 | 流式、敏感贴壁细胞 | 大块组织 ECM 消化 |

## 使用 protocol

### 选择浓度和体系

**怎么做**：根据细胞或组织来源选择 Dispase I/II、浓度、温度和作用时间。优先参考细胞系、组织来源或供应商 protocol，第一次使用应做小规模时间梯度。

**为什么**：Dispase 的效果高度依赖样本结构。组织厚度、ECM 含量、包被材料和目标细胞敏感性都会改变最佳条件。

**注意事项**：

- 不同厂家和批次活性单位可能不同，不能只照搬 mg/mL。
- 不要把组织消化时间直接套到单层细胞上。
- 需要无菌操作时使用细胞培养级或过滤除菌体系。

### 处理细胞片层或团块

**怎么做**：吸去培养基，按流程加入 Dispase 工作液，观察边缘松动或克隆/片层抬起。达到目标状态后，用培养基或缓冲液稀释并温和转移。

**为什么**：很多 Dispase 场景追求的是“片层松动”或“小团块释放”，不是完全单细胞化。

**注意事项**：

- 不要为了单细胞而过度吹打片层样本。
- 干细胞团块大小会影响后续存活和分化状态。
- 如果需要单细胞悬液，后续可能还需要 Accutase 或 TrypLE。

**出错后果**：处理不足会导致团块过大；处理过度会造成细胞死亡、团块碎裂或状态改变。

### 组织消化中的配合

**怎么做**：组织通常先机械剪碎，再使用 Dispase 与胶原酶等组合消化；消化过程中定期轻柔混匀，达到释放目标细胞后过滤、洗涤和计数。

**为什么**：Dispase 主要帮助破坏组织层和基质结构，胶原酶更偏向胶原丰富 ECM，两者组合可比单酶更适合复杂组织。

**注意事项**：

- 组织消化必须根据组织类型优化。
- 死细胞多时 DNA 会增加黏度，可评估 DNase I。
- 下游流式或单细胞测序需要严格控制团块和死亡细胞。

## 购买与记录建议

常见供应商包括 [Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>) / [Merck](<../番外/试剂厂商/Merck.md>)、[STEMCELL Technologies](<../番外/试剂厂商/STEMCELL Technologies.md>) 等。购买时关注：

- Dispase I 还是 Dispase II。
- 粉末还是溶液。
- 活性单位定义。
- 是否适合细胞培养或组织消化。
- 是否需要低内毒素、无菌或动物源信息。

推荐记录：

```text
Dispase type:
Supplier:
Catalog number:
Lot number:
Activity/unit:
Working concentration:
Solvent/buffer:
Temperature/time:
Sample type:
Observed endpoint:
Downstream use:
```

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 片层不松动 | 浓度低、时间短、ECM 很强 | 做时间梯度，增加机械预处理，联合胶原酶 |
| 细胞死亡多 | 时间过长、吹打过强、组织本身状态差 | 缩短消化，降低机械强度，优化样本处理 |
| 团块过大 | 目标设定不清或消化不足 | 明确要小团块还是单细胞，必要时二次解离 |
| 批次差异明显 | 酶活性单位或批次不同 | 记录 lot，换批时做小规模验证 |

## 小结

Dispase 更像“温和拆 ECM/片层”的工具，而不是普通贴壁细胞传代的第一选择。它适合组织层分离、干细胞团块、类器官/上皮样结构处理，以及与胶原酶组合进行原代分离。

## 参考来源

- [Sigma-Aldrich Dispase II](https://www.sigmaaldrich.com/US/en/product/roche/04942078001)
- [Worthington Tissue Dissociation Guide](https://www.worthington-biochem.com/tools-resources/tissue-dissociation-guide)
