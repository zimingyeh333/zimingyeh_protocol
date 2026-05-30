# Ham F-12

Ham F-12（Ham's F-12 Nutrient Mixture，Ham F-12 营养混合培养基；常简称 F-12）是一种成分较丰富的哺乳动物基础培养基，历史上与 CHO（Chinese hamster ovary，中国仓鼠卵巢）细胞、低血清和无血清培养体系关系密切。

![基础培养基与补充剂参考图](../z_asset/材/基础培养基与补充剂/basal-media-supplements-reference.png)

图源：Image2 生成的基础培养基与补充剂参考图；Ham F-12 位于基础培养基选择层，常用于 CHO、低血清体系或与 DMEM 组成 DMEM/F-12。

## 核心定位

Gibco Ham's F-12 页面说明，F-12 最初为 serum-free, single-cell plating of Chinese Hamster Ovary cells（CHO 细胞无血清单细胞接种）设计，后来也用于 CHO 无血清生长，以及软骨细胞、前列腺上皮细胞等其他哺乳动物细胞的含血清培养。参考：[Gibco Ham's F-12 Nutrient Mix](https://www.thermofisher.com/order/catalog/product/11765054)。

F-12 与 [DMEM](DMEM.md) 的逻辑不同：DMEM 常作为高营养通用基础培养基，F-12 更突出微量组分、低血清/无血清适配和特定细胞体系。

## 成分特点

Gibco 页面指出，与其他基础培养基相比，F-12 含更广泛的组分，包括 zinc（锌）、putrescine（腐胺）、hypoxanthine（次黄嘌呤）和 thymidine（胸苷）；同时 F-12 不含 proteins（蛋白）或 growth factors（生长因子），所以通常仍需要 FBS 或其他补充剂。参考：[Gibco Ham's F-12 Nutrient Mix](https://www.thermofisher.com/order/catalog/product/11765054)。

## 常见使用方式

| 方式 | 常见场景 | 注意 |
| --- | --- | --- |
| Ham F-12 + FBS | 部分 CHO、上皮或特殊细胞 | 仍需看细胞说明书 |
| [DMEM-F12](DMEM-F12.md) | 神经、上皮、干细胞、类器官、无血清基础体系常见 | 不等于简单 1:1 任意混合 |
| Ham F-12 + 定义补充剂 | 无血清/低血清培养优化 | 需要更严格记录生长因子和补充剂 |
| F-12K 等改良体系 | 特定细胞系 | 和标准 F-12 不能混用 |

## Ham F-12 vs DMEM/RPMI/MEM

| 培养基 | 适合逻辑 | 关键区别 |
| --- | --- | --- |
| Ham F-12 | CHO、低血清/无血清、复杂补充体系 | 微量成分更多 |
| DMEM | 常规贴壁细胞、高糖/低糖版本丰富 | 高营养通用性强 |
| [RPMI 1640](<RPMI 1640.md>) | 免疫、血液、悬浮细胞 | 维生素和 glutathione 特征明显 |
| [MEM](MEM.md) | 经典基础培养基 | 更简洁，历史体系清晰 |

## 使用 protocol

### 配制完全F-12或DMEM/F-12体系

**怎么做**：按细胞说明书选择 F-12、DMEM/F-12 或其他改良版本，再加入 FBS、growth factors、insulin-transferrin-selenium（ITS，胰岛素-转铁蛋白-硒）、NEAA、GlutaMAX 或其他指定补充剂。

**为什么**：F-12 常出现在“配方敏感”的体系里，尤其无血清、低血清、原代细胞、干细胞或类器官相关培养。这里不能用常规 DMEM + 10% FBS 的思路粗暴替代。

**注意事项**：

- 记录是否为 Ham F-12、DMEM/F-12、F-12K 或其他变体。
- 低血清/无血清体系中，FBS 批号不是唯一变量，生长因子和补充剂也同等关键。
- 许多成分对光和温度敏感，培养基应按说明避光、2-8°C 保存。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 细胞贴壁差 | 培养基/补充剂不匹配，表面包被不足 | 核对 F-12 版本和包被条件 |
| 无血清体系失败 | 缺少关键生长因子或适应过程太快 | 分步适应并补齐定义补充剂 |
| 与 DMEM/F12 混淆 | 使用了错误基础培养基 | 查看货号和完整名称 |
| 细胞状态漂移 | 补充剂批号或浓度变化 | 记录并固定 cocktail |

## 购买与记录建议

常见供应商包括 [Gibco](<../番外/试剂厂商/Gibco.md>)、[HyClone](<../番外/试剂厂商/HyClone.md>)、[Corning](<../番外/试剂厂商/Corning.md>)、[Sigma](<../番外/试剂厂商/Sigma.md>)/[Merck](<../番外/试剂厂商/Merck.md>)。购买时最重要的是确认“F-12、F-12K、DMEM/F-12”到底是哪一个，并记录是否含 L-glutamine、phenol red、sodium pyruvate 和 HEPES。

推荐记录模板（中文）：

```text
F-12产品全名：
品牌：
货号：
批号：
具体版本：Ham F-12 / F-12K / DMEM-F12 / 其他
是否含L-glutamine：
是否含酚红：
是否含丙酮酸钠：
是否含HEPES：
FBS或无血清补充剂：
使用细胞：
包被条件：
异常现象：
```

Recommended record template (English):

```text
F-12 full product name:
Brand:
Catalog number:
Lot number:
Version: Ham F-12 / F-12K / DMEM-F12 / other
Contains L-glutamine:
Contains phenol red:
Contains sodium pyruvate:
Contains HEPES:
FBS or serum-free supplements:
Cell type:
Coating condition:
Abnormal observation:
```

## 小结

Ham F-12 是低血清、无血清和 CHO/上皮相关体系里常见的基础培养基。它的价值在于更丰富的微量组分和可调性，但也意味着配方记录要比普通完全培养基更严格。

## 参考来源

- [Gibco Ham's F-12 Nutrient Mix](https://www.thermofisher.com/order/catalog/product/11765054)
- [ATCC Animal Cell Culture Guide](https://www.atcc.org/resources/culture-guides/animal-cell-culture-guide)

