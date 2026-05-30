# GlutaMAX

GlutaMAX（Gibco GlutaMAX Supplement，L-alanyl-L-glutamine dipeptide supplement，L-丙氨酰-L-谷氨酰胺二肽补充剂）是 [L-谷氨酰胺](L-谷氨酰胺.md) 的稳定替代来源，常用于哺乳动物细胞培养中减少 L-glutamine 自发降解和 ammonia（氨）积累带来的影响。

![基础培养基与补充剂参考图](../z_asset/材/基础培养基与补充剂/basal-media-supplements-reference.png)

图源：Image2 生成的基础培养基与补充剂参考图；GlutaMAX 属于培养基补充剂层，用于优化基础培养基的谷氨酰胺供应。

## 核心作用

Gibco GlutaMAX 页面说明，GlutaMAX 是 L-alanyl-L-glutamine dipeptide alternative to L-glutamine（L-丙氨酰-L-谷氨酰胺二肽形式的 L-glutamine 替代物），稳定性高于 L-glutamine，有助于改善细胞健康；该页面还说明它是 200 mM L-alanyl-L-glutamine dipeptide in 0.85% NaCl，并适用于哺乳动物贴壁和悬浮培养。参考：[Gibco GlutaMAX Supplement](https://www.thermofisher.com/order/catalog/product/35050061)。

## 为什么比L-glutamine稳定

游离 L-glutamine 在培养基中会随时间、温度和 pH 降解，形成 ammonia。Gibco 页面说明，GlutaMAX 不会像 L-glutamine 一样自发分解形成 ammonia，而是由细胞切开二肽键后按需释放 L-glutamine。参考：[Gibco GlutaMAX Supplement](https://www.thermofisher.com/order/catalog/product/35050061)。

## GlutaMAX vs L-glutamine

| 项目 | GlutaMAX | L-glutamine |
| --- | --- | --- |
| 形式 | L-alanyl-L-glutamine 二肽 | 游离 L-glutamine |
| 稳定性 | 更高 | 溶液中较不稳定 |
| 氨积累 | 较少 | 更容易随时间积累 |
| 成本 | 通常更高 | 通常更低 |
| 适合 | 长期培养、敏感细胞、减少批间漂移 | 常规短期培养、经典 SOP |

如果原始 SOP 使用 L-glutamine，不建议在关键实验中无验证直接换成 GlutaMAX；反过来也一样。两者都能提供 glutamine，但培养适应和代谢环境可能不同。

## 使用 protocol

### 替代L-glutamine

**怎么做**：常见用法是用 100X GlutaMAX 按 1:100 加入培养基，使终浓度相当于约 2 mM glutamine 来源。具体以产品说明和细胞说明书为准。

**为什么**：保持与常规 L-glutamine 使用浓度相近，便于在现有体系中替代。

**注意事项**：

- 查看基础培养基是否已含 GlutaMAX 或 L-glutamine，避免重复补加。
- 对 serum-free medium（无血清培养基）或特殊细胞，可能需要适应期。
- 同一项目内固定一种 glutamine 来源，避免批间不可比。

## 适合优先考虑的场景

| 场景 | 原因 |
| --- | --- |
| 长时间培养或低频换液 | 降低 L-glutamine 降解影响 |
| 敏感细胞或长期项目 | 减少 ammonia 积累和配方漂移 |
| 需要更稳定培养基库存 | 对温度和时间更宽容 |
| 类器官、干细胞或低血清体系 | 配方变量需要更严格控制 |

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 换 GlutaMAX 后生长短暂变慢 | 细胞适应新 glutamine 来源 | 做平行适应和小规模验证 |
| 没有改善细胞状态 | 问题不在 glutamine/氨积累 | 检查 FBS、密度、污染和基础培养基 |
| 重复补加 | 培养基本身已含 GlutaMAX/L-glutamine | 核对标签和配方 |
| 项目结果不可比 | 不同批次使用不同 glutamine 来源 | 固定并记录 |

## 购买与记录建议

GlutaMAX 是 [Gibco](<../番外/试剂厂商/Gibco.md>) 的商品名；其他厂商可能有稳定 glutamine 或 dipeptide glutamine 替代品。记录时不要只写“glutamine”，要写清是 L-glutamine 还是 GlutaMAX/二肽替代物。

推荐记录模板（中文）：

```text
GlutaMAX/稳定谷氨酰胺产品：
品牌：
货号：
批号：
储液浓度：
终浓度：
基础培养基是否已含谷氨酰胺：
替代前使用体系：
适应方式：
使用细胞：
开封日期：
异常现象：
```

Recommended record template (English):

```text
GlutaMAX/stable glutamine product:
Brand:
Catalog number:
Lot number:
Stock concentration:
Final concentration:
Base medium already contains glutamine:
Previous glutamine system:
Adaptation strategy:
Cell type:
Open date:
Abnormal observation:
```

## 小结

GlutaMAX 的核心价值是更稳定地提供 glutamine 来源，减少传统 L-glutamine 降解和 ammonia 积累。它不是“绝对更好”，而是更适合需要长期稳定和变量控制的培养体系。

## 参考来源

- [Gibco GlutaMAX Supplement](https://www.thermofisher.com/order/catalog/product/35050061)
- [Gibco L-Glutamine 200 mM](https://www.thermofisher.com/order/catalog/product/25030081)

