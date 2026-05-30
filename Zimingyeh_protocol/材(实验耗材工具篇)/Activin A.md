# Activin A

Activin A（Activin A，激活素 A）是 TGF-β superfamily（TGF-β 超家族）成员之一，常用于 pluripotent stem cell differentiation（多能干细胞分化）、definitive endoderm induction（定形内胚层诱导）和发育相关体外模型。

![生长因子信号模块参考图](../z_asset/材/生长因子模块/growth-factor-signaling-modules-reference.png)

图源：Image2 生成的生长因子信号模块参考图；Activin 位于 TGF-beta/BMP/Activin-SMAD 模块，常通过 SMAD2/3 调控分化和命运。

## 核心定位

Activin A 主要通过 Activin receptors（激活素受体）激活 SMAD2/3，与 TGF-β/Nodal 相关信号逻辑接近。R&D Systems 的 recombinant human Activin A 产品资料说明，Activin A 属于 TGF-β superfamily，参与调控细胞增殖、分化、凋亡、代谢、免疫反应、内分泌和神经系统功能。参考：[R&D Systems Recombinant Human Activin A](https://www.rndsystems.com/products/recombinant-human-activin-a-protein_338-ac)。

在干细胞分化中，Activin A 常被用作强 SMAD2/3 输入，尤其在 definitive endoderm 和某些中胚层/内胚层相关诱导里非常常见。

## 常见用途

| 场景 | Activin A的角色 |
| --- | --- |
| 定形内胚层诱导 | 强 SMAD2/3 输入，常与 Wnt/PI3K 调控联用 |
| hESC/hiPSC分化 | 调节胚层命运 |
| 类器官起始阶段 | 参与谱系模式化 |
| 生殖/内分泌相关模型 | Activin/Inhibin轴相关 |
| 通路刺激实验 | 激活 SMAD2/3 作为阳性刺激 |

## Activin A vs TGF-β/BMP4

| 因子 | 主要通路 | 常见培养意义 |
| --- | --- | --- |
| Activin A | SMAD2/3 | 内胚层诱导、发育分化 |
| [TGF-β](TGF-β.md) | SMAD2/3 | EMT、纤维化、免疫调节、状态改变 |
| [BMP4](BMP4.md) | SMAD1/5/8 | BMP方向分化和发育模式化 |

Activin A 和 TGF-β 都可激活 SMAD2/3，但受体、剂量、细胞背景和下游生物学不完全相同。

## 使用 protocol

### 重构和加入

**怎么做**：按厂家说明重构并小分装；分化实验中按时间线加入，记录终浓度、加入天数和是否与 Wnt3A、CHIR99021、FGF、BMP 等因子联用。

**为什么**：Activin A 的作用依赖阶段。过早、过晚或剂量错误都可能导致完全不同的谱系结果。

**注意事项**：

- 分化实验必须记录起始细胞密度和细胞状态。
- 对 pSMAD2/3 readout，要记录刺激时间点。
- 如果使用不同品牌 Activin A，建议做 marker 或 pSMAD 响应桥接。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 内胚层marker低 | Activin A失活、剂量/时间不对或起始状态差 | 换新分装并优化起始密度 |
| 分化批间差异 | Activin A批号、基质或细胞状态不同 | 固定关键批号 |
| pSMAD2/3响应弱 | 受体低、因子失活或抑制剂干扰 | 设置阳性对照和时间梯度 |
| 细胞死亡 | 剂量强、无支持因子或密度过低 | 调整剂量和辅助因子 |

## 购买与记录建议

常见供应商包括 [PeproTech](<../番外/试剂厂商/PeproTech.md>)、[R&D Systems](<../番外/试剂厂商/R&D Systems.md>)、[STEMCELL Technologies](<../番外/试剂厂商/STEMCELL Technologies.md>)、[Sino Biological](<../番外/试剂厂商/Sino Biological.md>)。分化体系中 Activin A 是高价值变量，建议尽量固定品牌和批号。

推荐记录模板（中文）：

```text
Activin A产品全名：
品牌：
货号：
批号：
物种来源：
表达系统：
重构液：
储液浓度：
终浓度：
加入阶段/天数：
联用因子：
检测marker：
冻融次数：
异常现象：
```

Recommended record template (English):

```text
Activin A product full name:
Brand:
Catalog number:
Lot number:
Species source:
Expression system:
Reconstitution buffer:
Stock concentration:
Final concentration:
Treatment stage/days:
Combined factors:
Markers measured:
Freeze-thaw cycles:
Abnormal observation:
```

## 小结

Activin A 是干细胞分化和发育模型中的关键 SMAD2/3 因子。它的核心不是“促生长”，而是用特定强度和时间窗推动细胞进入某种命运轨迹。

## 参考来源

- [R&D Systems Recombinant Human Activin A](https://www.rndsystems.com/products/recombinant-human-activin-a-protein_338-ac)
- [Thermo Fisher PeproTech Proteins](https://www.thermofisher.com/tr/en/home/brands/peprotech.html)

