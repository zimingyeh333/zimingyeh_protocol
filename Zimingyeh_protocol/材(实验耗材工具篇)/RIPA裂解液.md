# RIPA裂解液

## 一句话定义

RIPA buffer（Radioimmunoprecipitation assay buffer，放射免疫沉淀实验缓冲液，中文常叫 RIPA 裂解液）是一种较强的细胞/组织蛋白裂解液，常用于 [Western blot](<../用(实验流程内容篇)/Western blot.md>) 中提取 mammalian whole-cell lysate（哺乳动物细胞全蛋白裂解液）。

RIPA 的特点是同时含有离子型和非离子型去污剂，裂解能力强，能提取胞质、膜相关和部分核蛋白；但也因为较强，可能破坏某些蛋白复合物或影响后续 [免疫共沉淀](<../用(实验流程内容篇)/免疫共沉淀.md>)。CST 的 WB protocol 和 Thermo/Pierce 的 RIPA buffer 资料都将 RIPA 作为常见全蛋白裂解选择之一。[参考：CST Western Blot Protocol](https://www.cellsignal.com/learn-and-support/protocols/protocol-western)；[参考：Thermo Fisher RIPA Buffer](https://www.thermofisher.com/order/catalog/product/89900)

## 常见组成与作用

不同厂家 RIPA 配方略有差异，但经典 RIPA 常见组成如下：

| 成分 | 常见浓度 | 作用 |
| --- | --- | --- |
| [Tris](Tris.md)-HCl | 25-50 mM, pH 7.4-8.0 | 维持 pH |
| [氯化钠](氯化钠.md) | 150 mM 左右 | 维持离子强度，帮助蛋白溶解 |
| [NP-40](NP-40.md) 或 [Triton X-100](<Triton X-100.md>) | 1% 左右 | 非离子去污剂，裂解细胞膜并溶解部分膜蛋白 |
| [脱氧胆酸钠](脱氧胆酸钠.md) | 0.5% 左右 | 去垢、帮助溶解膜相关蛋白 |
| [十二烷基硫酸钠](十二烷基硫酸钠.md) | 0.1% 左右 | 离子型去污剂，增强裂解能力 |
| [EDTA](EDTA.md) | 1-5 mM | 螯合金属离子，抑制部分金属依赖酶 |

RIPA 需要现用前加入 [蛋白酶抑制剂](蛋白酶抑制剂.md)，检测 phosphorylation（磷酸化）目标时还需要加入 [磷酸酶抑制剂](磷酸酶抑制剂.md)。抑制剂加入后一般不适合长期保存，具体以产品说明书为准。

## 适合用途

- Western blot 全蛋白提取。
- 常规细胞系的总蛋白检测。
- 多数胞质蛋白、部分膜蛋白和部分核蛋白检测。
- 需要较强裂解能力、但不需要保持天然蛋白复合物的实验。

## 不适合或需要谨慎的情况

| 情况 | 原因 | 替代思路 |
| --- | --- | --- |
| 后续做 IP-WB | RIPA 较强，可能破坏蛋白互作 | 用温和 NP-40/Triton 裂解液 |
| 多跨膜蛋白很难提取 | RIPA 不一定能充分溶解所有膜蛋白 | 用膜蛋白提取试剂或优化去污剂 |
| 酶活实验 | SDS 和去污剂会破坏活性 | 用非变性裂解液 |
| 蛋白定位分级 | RIPA 是全裂解，不保留组分分离信息 | 用核/胞质/膜蛋白分离试剂 |
| BCA 不兼容条件 | 去污剂和还原剂可能影响定量 | 查 [BCA蛋白定量试剂盒](BCA蛋白定量试剂盒.md) 兼容性 |

## 使用 protocol

### 细胞样本

1. 吸去培养基，用预冷 [PBS](PBS.md) 快速洗涤。
2. 尽量吸净 PBS，避免稀释裂解液。
3. 加入预冷 RIPA 裂解液，现用前加入蛋白酶/磷酸酶抑制剂。
4. 冰上裂解 10-30 min，中间轻轻吹打或震荡。
5. 4°C 高速离心 10-15 min，取上清。
6. 进行 [蛋白定量](<../用(实验流程内容篇)/蛋白定量.md>) 或加入 [Laemmli上样缓冲液](Laemmli上样缓冲液.md) 保存。

### 组织样本

组织样本需要匀浆或研磨，且要控制温度。组织样本蛋白酶活性和基质复杂度通常高于细胞样本，更需要快速、低温和足量抑制剂。

## 注意事项

- 全程尽量低温，尤其是磷酸化蛋白。
- RIPA 加入抑制剂后建议当天使用。
- 裂解不足会导致蛋白提取低；裂解过强或反复冻融会增加降解风险。
- 粘稠样本可能是 DNA 释放导致，可适当超声或核酸酶处理，但要评估目标蛋白稳定性。
- RIPA 含 SDS，不适合所有下游实验。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| WB 信号弱 | 裂解不足、上清蛋白少、目标蛋白难溶 | 增加裂解时间、优化裂解液或改用专门提取体系 |
| 条带降解 | 蛋白酶抑制不足、温度过高、处理太慢 | 新鲜加入抑制剂，全程冰上，减少冻融 |
| 磷酸化信号消失 | 未加磷酸酶抑制剂或操作太慢 | 加磷酸酶抑制剂，快速低温处理 |
| 样本太粘 | DNA 释放 | 轻微超声或增加澄清步骤 |
| BCA 数据异常 | 裂解液成分或还原剂干扰 | 查 BCA 兼容性，稀释样本或换定量方法 |

## 购买和记录建议

中文记录模板：

```text
RIPA 产品名称：
品牌：
货号：
批号：
配方/强度：
是否含 EDTA：
是否已含抑制剂：
额外加入蛋白酶抑制剂：
额外加入磷酸酶抑制剂：
样本类型：
裂解时间和温度：
保存条件：
备注：
```

English record template:

```text
RIPA product name:
Brand:
Catalog number:
Lot number:
Formulation / strength:
EDTA-containing: yes / no
Inhibitors included: yes / no
Protease inhibitor added:
Phosphatase inhibitor added:
Sample type:
Lysis time and temperature:
Storage condition:
Notes:
```

## 小结

RIPA 裂解液适合常规 WB 全蛋白提取，是强裂解、方便、通用的选择。但它不是所有蛋白实验的默认答案：做蛋白互作、酶活、膜蛋白优化或亚细胞分级时，需要重新评估裂解体系。
