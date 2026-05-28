# RNase抑制剂

RNase inhibitor（ribonuclease inhibitor，核糖核酸酶抑制剂）是一类用于抑制 RNase（ribonuclease，核糖核酸酶）活性的蛋白试剂，常用于 RNA 提取后处理、[逆转录](<../用(实验流程内容篇)/逆转录.md>)、RT-PCR、[RT-qPCR](<../用(实验流程内容篇)/RT-qPCR.md>) 和体外转录等 RNA 敏感实验。

![逆转录核心材料参考图](../z_asset/材/逆转录核心材料/reverse-transcription-core-materials-reference.png)

图源：Image2 生成的逆转录核心材料参考图；其中一个彩色小管代表 RNase inhibitor，用于保护 RNA 模板。

## 为什么需要 RNase 抑制剂

RNase 广泛存在于皮肤、灰尘、普通实验环境和部分试剂中，而且很多 RNase 非常稳定。RNA 一旦被降解，后续 cDNA 合成和 qPCR 数据都会受影响。RNase 抑制剂不能替代 RNase-free 操作，但能在反应体系中提供额外保护。

Invitrogen RNaseOUT 和 Promega Recombinant RNasin 都是常见重组 RNase inhibitor 产品，主要用于抑制 RNase A family（RNase A 家族）等常见 RNase，从而保护 RNA 模板。[参考：Invitrogen RNaseOUT](https://www.thermofisher.com/order/catalog/product/10777019)；[参考：Promega Recombinant RNasin Ribonuclease Inhibitor](https://www.promega.com/products/rna-analysis/rna-purification-and-analysis/recombinant-rnasin-ribonuclease-inhibitor/)

## 核心作用

| 作用 | 实验意义 |
| --- | --- |
| 抑制常见 RNase | 保护 RNA 模板不被降解 |
| 提高逆转录稳定性 | 降低样本间因 RNase 污染造成的差异 |
| 保护低量 RNA | 对珍贵样本和低投入量 RNA 更重要 |
| 支持 RNA 操作窗口 | 在配液和反应过程中提供一定缓冲 |

## 什么时候使用

- 逆转录反应。
- 低输入 RNA、单细胞或微量样本。
- 体外转录、RNA 标记、RNA 结合实验。
- RNA 保存或短时间处理体系。
- 对 RNase 污染高度敏感的实验。

如果使用的 [逆转录试剂盒](逆转录试剂盒.md) 已经包含 RNase inhibitor，通常不需要额外添加，除非说明书允许。

## 不能解决什么

| 不能解决的问题 | 原因 |
| --- | --- |
| 严重降解的 RNA | 抑制剂不能修复已经断裂的 RNA |
| 所有类型 RNase | 不同抑制剂抑制谱不同 |
| 不规范操作 | 手套、台面、普通水污染仍会带来 RNase |
| 下游 DNA 污染 | RNase 抑制剂不处理 genomic DNA |

## 使用 protocol

### 准备

**怎么做**：RNase 抑制剂保持冰上操作，轻轻混匀，不要剧烈 vortex。配反应时通常最后加入或与酶类组分一起加入。

**为什么**：RNase 抑制剂本身是蛋白，反复冻融、强烈混匀和长时间室温暴露会影响活性。

**注意事项**：

- 使用 RNase-free 管、滤芯吸头和无核酸酶水。
- 避免把吸头伸入母液过深造成污染。
- 分装减少冻融。

### 加入逆转录反应

**怎么做**：按产品说明加入一定单位的 RNase inhibitor。若 kit 已含抑制剂，按 kit 说明执行。

**为什么**：RNA 在退火、配液和逆转录过程中都可能遇到 RNase 污染。

**注意事项**：

- 不要过量到影响反应体系离子和蛋白环境。
- 不同抑制剂单位定义不同，不能直接按体积替换。
- 高温步骤可能超出抑制剂稳定范围。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| RNA 仍降解 | 污染太重、RNA 已降解、抑制剂不覆盖对应 RNase | 改善 RNase-free 操作，重提 RNA |
| 逆转录失败 | RNA 质量差或酶失活，不一定是 RNase 问题 | 检查 RNA 和逆转录酶阳性对照 |
| 批间差异大 | 抑制剂冻融多、母液污染 | 分装，换新 lot，记录冻融 |
| 误以为可以随意操作 RNA | 抑制剂不是万能保护 | 继续执行 RNase-free 规范 |

## 购买与记录建议

常见供应商包括 [Invitrogen](<../番外/试剂厂商/Invitrogen.md>)、[Promega](<../番外/试剂厂商/Promega.md>)、[NEB](<../番外/试剂厂商/NEB.md>)、[Takara](<../番外/试剂厂商/Takara.md>) 等。购买时看抑制谱、单位浓度、是否重组来源、是否含 DTT、储存条件和是否适合目标反应温度。

推荐记录：

```text
RNase inhibitor:
Supplier:
Catalog number:
Lot number:
Concentration/unit:
Amount per reaction:
Reaction type:
Storage condition:
Freeze-thaw count:
Open date:
```

## 小结

RNase 抑制剂是 RNA 实验的安全网，不是免死金牌。它适合保护逆转录和低量 RNA 反应，但真正的核心仍然是 RNase-free 操作、合格 RNA 质量和稳定的反应体系。

## 参考来源

- [Invitrogen RNaseOUT Recombinant Ribonuclease Inhibitor](https://www.thermofisher.com/order/catalog/product/10777019)
- [Promega Recombinant RNasin Ribonuclease Inhibitor](https://www.promega.com/products/rna-analysis/rna-purification-and-analysis/recombinant-rnasin-ribonuclease-inhibitor/)
