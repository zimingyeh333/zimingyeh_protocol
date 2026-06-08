# TEMED

TEMED（N,N,N',N'-tetramethylethylenediamine，N,N,N',N'-四甲基乙二胺；也称 TMEDA）是 [SDS-PAGE凝胶](SDS-PAGE凝胶.md) 手灌胶聚合中的 accelerator/catalyst（加速剂/催化剂）。它与 [过硫酸铵](过硫酸铵.md)（APS）共同启动 [丙烯酰胺](丙烯酰胺.md) 和 [双丙烯酰胺](双丙烯酰胺.md) 的自由基聚合。

![SDS-PAGE聚合与电源参考图](../z_asset/材/SDS-PAGE聚合与电源/sds-page-polymerization-power-reference.png)

图源：Image2 生成的 SDS-PAGE 聚合与电源参考图；TEMED 位于 APS 旁边，底部第二步示意加入 APS/TEMED 后启动聚合。

## 核心作用

TEMED 促进 APS 产生自由基，从而让 acrylamide/bis-acrylamide 快速聚合成聚丙烯酰胺凝胶。Sigma-Aldrich 的 TEMED T9281 页面说明，TEMED 可用于 acrylamide hydrogels 和 sodium dodecyl sulfate-polyacrylamide gels 的制备，并经过 PAGE catalyst（PAGE 催化剂）用途测试。参考：[Sigma-Aldrich TEMED T9281](https://www.sigmaaldrich.com/US/en/product/sigma/t9281)。

## TEMED在配胶中的位置

| 步骤 | 是否加TEMED | 原因 |
| --- | --- | --- |
| 准备水、buffer、SDS、Acrylamide/Bis | 不急着加 | 避免提前聚合 |
| 准备灌胶前 | 最后加入 APS 和 TEMED | 启动自由基聚合 |
| 灌胶后等待 | 不再补加 | 聚合体系已经开始 |

TEMED 通常用量很小，但影响很大。漏加时胶可能不凝；加太多时聚合过快，容易产生不均匀、气泡或局部提前凝固。

## APS vs TEMED

| 组分 | 角色 | 常见故障 |
| --- | --- | --- |
| [过硫酸铵](过硫酸铵.md) | 自由基引发剂 | 失效导致胶不凝 |
| TEMED | 加速自由基形成 | 漏加导致聚合极慢 |
| 氧气 | 自由基反应抑制因素 | 胶面聚合差、局部不凝 |

可以把 APS/TEMED 理解为“点火器 + 加速器”。两者都需要，且加入顺序和操作速度很重要。

## 使用 protocol

### 加入胶液

**怎么做**：在其他配胶组分混合均匀后，最后加入 APS 和 TEMED，轻轻混匀，立即灌胶。

**为什么**：TEMED 一加入，聚合速度明显增加，操作窗口开始缩短。

**注意事项**：

- TEMED 气味明显且易挥发，使用后及时盖紧。
- 移液体积很小，注意吸头挂壁和加入准确性。
- 不要把 TEMED 提前加入大体积胶液后长时间放置。

### 储存

**怎么做**：按说明书避光、密封保存，减少空气和水分暴露。

**为什么**：Sigma-Aldrich TEMED 页面提示该产品 air and moisture sensitive（对空气和水分敏感）。长期暴露会影响有效性和重复性。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 胶不凝 | TEMED 漏加、APS 失效 | 检查加样顺序，换新 APS/TEMED |
| 胶凝太快 | TEMED 加多或温度高 | 降低 TEMED 用量，提前准备好灌胶装置 |
| 胶内气泡多 | 加 TEMED 后混匀太剧烈 | 轻柔混匀，避免涡旋 |
| 批间聚合时间漂移 | TEMED 开封太久或吸水 | 换新瓶，记录开封日期 |

## 安全与废液

TEMED 有刺激性、挥发性和明显气味，应在通风良好环境中操作，避免吸入和皮肤/眼睛接触。按具体产品 [SDS与GHS标签](<../实验室安全/SDS与GHS标签.md>) 和实验室化学品管理要求储存与处置。

## 购买与记录建议

常见供应商包括 [Merck](<../番外/试剂厂商/Merck.md>)/[Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>)、[Bio-Rad](<../番外/试剂厂商/Bio-Rad.md>)、[Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>)。选择 electrophoresis-suitable grade（适合电泳等级）即可。

推荐记录模板（中文）：

```text
TEMED品牌：
货号：
批号：
开封日期：
加入量：
APS批号/加入量：
胶类型：分离胶/浓缩胶
室温：
聚合时间：
是否有气泡/不凝：
异常现象：
```

Recommended record template (English):

```text
TEMED brand:
Catalog number:
Lot number:
Open date:
Volume added:
APS lot/volume:
Gel type: resolving/stacking
Room temperature:
Polymerization time:
Bubbles/incomplete polymerization observed: yes/no
Abnormal observation:
```

## 小结

TEMED 是手灌胶聚合的“加速器”。它用量小但影响大，胶不凝、凝太快、胶内气泡多，都可能和 TEMED 的加入量、时机、新鲜度和混匀方式有关。

## 参考来源

- [Sigma-Aldrich TEMED T9281](https://www.sigmaaldrich.com/US/en/product/sigma/t9281)
- [Sigma-Aldrich Ammonium persulfate A3678](https://www.sigmaaldrich.com/US/en/product/sigma/a3678)
- [Bio-Rad Acrylamide/Bis-acrylamide Solutions](https://www.bio-rad.com/en-us/category/acrylamide-bis-acrylamide-solutions)
