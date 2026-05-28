# dNTP

dNTP（deoxynucleotide triphosphate，脱氧核苷三磷酸）是 DNA 合成的四种基本原料的统称，包括 dATP、dTTP、dCTP 和 dGTP。在 PCR、qPCR、[逆转录](<../用(实验流程内容篇)/逆转录.md>)、DNA 标记和测序文库构建中，dNTP 都是 DNA polymerase（DNA 聚合酶）延伸链条所需的底物。

![逆转录核心材料参考图](../z_asset/材/逆转录核心材料/reverse-transcription-core-materials-reference.png)

图源：Image2 生成的逆转录核心材料参考图；彩色试剂管代表逆转录体系中的 RNA、酶、dNTP、引物、RNase 抑制剂和无核酸酶水等组分。

## 四种 dNTP

| 缩写 | 英文全称 | 中文名称 | 配对碱基 |
| --- | --- | --- | --- |
| dATP | deoxyadenosine triphosphate | 脱氧腺苷三磷酸 | 与 T 配对 |
| dTTP | deoxythymidine triphosphate | 脱氧胸苷三磷酸 | 与 A 配对 |
| dCTP | deoxycytidine triphosphate | 脱氧胞苷三磷酸 | 与 G 配对 |
| dGTP | deoxyguanosine triphosphate | 脱氧鸟苷三磷酸 | 与 C 配对 |

常见商品形式是 equimolar dNTP mix（等摩尔 dNTP 混合液），例如每种 10 mM 或总浓度 40 mM。Thermo Fisher、NEB、Promega 等都提供 PCR grade 或 molecular biology grade dNTP mix。[参考：Thermo Scientific dNTP Mix](https://www.thermofisher.com/order/catalog/product/R0192)；[参考：NEB dNTP Solution Mix](https://www.neb.com/en-us/products/n0447-dntp-solution-mix)

## 核心作用

| 场景 | dNTP 的作用 |
| --- | --- |
| PCR/qPCR | 为 DNA 聚合酶提供扩增原料 |
| 逆转录 | 为逆转录酶合成 cDNA 提供原料 |
| DNA 标记 | 可与修饰核苷酸配合引入标记 |
| 文库构建 | 用于末端修复、扩增和填平反应 |

## 浓度为什么重要

dNTP 浓度过低会限制扩增或 cDNA 合成；过高可能螯合 Mg2+、改变聚合酶活性和保真度。很多 commercial master mix（商业预混液）已经包含优化浓度的 dNTP，不需要额外添加。

| 情况 | 处理 |
| --- | --- |
| 使用 [SYBR Green qPCR Master Mix](<SYBR Green qPCR Master Mix.md>) | 通常不额外加 dNTP |
| 使用 [逆转录试剂盒](逆转录试剂盒.md) | 通常按 kit 内置体系 |
| 自配 PCR/RT 体系 | 按酶说明书添加 dNTP |
| 特殊修饰或低错误率体系 | 按专门 protocol 优化 |

## 使用 protocol

### 解冻和混匀

**怎么做**：在冰上解冻 dNTP mix，轻轻混匀并短暂离心。使用后尽快放回 -20°C。

**为什么**：dNTP 长期反复冻融或污染会影响反应稳定性。

**注意事项**：

- 避免反复冻融，建议分装。
- 使用无核酸酶吸头和管。
- 不要用可能有 DNase/RNase 污染的水稀释。

### 加入反应体系

**怎么做**：按酶或 kit 说明加入目标终浓度。自配体系中常按每种 dNTP 的终浓度记录，而不是只写“加了 dNTP”。

**为什么**：不同酶对 dNTP 和 Mg2+ 的平衡要求不同。

**注意事项**：

- 已含 dNTP 的 master mix 不要重复添加。
- Mg2+ 优化时要考虑 dNTP 浓度。
- 定量实验中固定 dNTP 批次和浓度。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 无扩增 | 忘加 dNTP、dNTP 降解、酶失活 | 做阳性对照，换新 dNTP |
| 扩增效率差 | dNTP/Mg2+ 比例不合适 | 按酶说明优化 Mg2+ 和 dNTP |
| 结果不可重复 | 反复冻融、污染或浓度记录不清 | 分装，记录 lot 和浓度 |
| qPCR 背景异常 | 重复添加 dNTP 或体系不兼容 | 使用完整 master mix，不额外添加 |

## 购买与记录建议

常见供应商包括 [Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>)、[NEB](<../番外/试剂厂商/NEB.md>)、[Promega](<../番外/试剂厂商/Promega.md>)、[Takara](<../番外/试剂厂商/Takara.md>) 等。购买时看是否 PCR grade、是否 nuclease-free、浓度、pH、盐形式和包装大小。

推荐记录：

```text
dNTP mix:
Supplier:
Catalog number:
Lot number:
Concentration per dNTP:
Final concentration:
Storage condition:
Freeze-thaw count:
Application:
```

## 小结

dNTP 是 DNA 合成的原料，但不是越多越好。自配体系要记录每种 dNTP 终浓度；商业 master mix 或逆转录试剂盒通常已经内置 dNTP，不应重复添加。

## 参考来源

- [Thermo Scientific dNTP Mix](https://www.thermofisher.com/order/catalog/product/R0192)
- [NEB dNTP Solution Mix](https://www.neb.com/en-us/products/n0447-dntp-solution-mix)
