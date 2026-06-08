# ITS补充剂

ITS补充剂（Insulin-Transferrin-Selenium supplement，胰岛素-转铁蛋白-硒补充剂）是 [无血清培养基](无血清培养基.md) 和低血清培养体系中常见的 basal supplement（基础补充剂），用于提供部分血清原本承担的代谢、生长和微量元素支持。

![专用细胞培养基参考图](../z_asset/材/专用细胞培养基/specialized-cell-culture-media-reference.png)

图源：Image2 生成的专用细胞培养基参考图；ITS 位于 serum-free step 的定义补充剂层。

## 核心成分

| 成分 | 英文 | 作用 |
| --- | --- | --- |
| [胰岛素](胰岛素.md) | Insulin | 促进葡萄糖和氨基酸摄取，支持细胞代谢和生长 |
| [转铁蛋白](转铁蛋白.md) | Transferrin | 携带铁，减少游离铁毒性并支持细胞增殖 |
| [硒](硒.md) | Selenium | 微量元素，参与抗氧化酶和细胞保护 |

Thermo Fisher 的细胞培养补充剂页面说明，Gibco Insulin-Transferrin-Selenium（ITS）是 basal medium supplement，可帮助增加细胞增殖和活率，同时减少培养细胞所需的 FBS 用量。参考：[Thermo Fisher Cell Culture Media Supplements](https://www.thermofisher.com/au/en/home/life-science/cell-culture/mammalian-cell-culture/media-supplements.html)。

## ITS-G、ITS-X、ITS-A是什么

不同 ITS 版本不完全一样，常见区别在于是否加入 ethanolamine（乙醇胺）、sodium pyruvate（丙酮酸钠）或 linoleic acid（亚油酸）等额外组分。

| 版本 | 常见理解 | 注意 |
| --- | --- | --- |
| ITS-G | 基础 insulin-transferrin-selenium 体系 | 常见通用型 |
| ITS-X | 在 ITS 基础上含额外组分 | 更适合特定无血清体系 |
| ITS-A | 动物源成分控制版本或特定 formulation | 需看产品说明 |

不要把所有 ITS 都当成同一个试剂。真正需要记录的是完整产品名、货号、批号、版本和终浓度。

## 什么时候使用

| 场景 | 价值 |
| --- | --- |
| 从 FBS 培养过渡到低血清 | 降低对血清的依赖 |
| 无血清培养基优化 | 提供基础代谢和铁/硒支持 |
| 上皮、神经、干细胞或原代体系 | 常作为定义 supplement cocktail 的一部分 |
| 机制实验 | 减少 FBS 背景，但仍提供基本支持 |

ITS 不是完整无血清培养基。它常常只是 cocktail 里的基础层，还需要 [生长因子](生长因子.md)、脂质、白蛋白、基质或细胞类型特异因子。

## ITS vs FBS/B27/N2

| 项目 | ITS | [B27补充剂](B27补充剂.md) | [N2补充剂](N2补充剂.md) | [FBS](FBS.md) |
| --- | --- | --- | --- | --- |
| 成分复杂度 | 低 | 高 | 中 | 很高且不明确 |
| 主要用途 | 基础代谢支持 | 神经/干细胞/类器官常见 | 神经前体和神经相关培养 | 常规细胞维护 |
| 是否完全替代血清 | 通常不能 | 特定体系中可 | 特定体系中可 | 本身就是血清 |
| 变量控制 | 较好 | 中等，配方复杂 | 中等 | 较差 |

## 使用 protocol

### 加入培养基

**怎么做**：常见商业 ITS 为 100X 储液，按 1:100 加入基础培养基得到 1X 终浓度。具体浓度以产品说明书和细胞 protocol 为准。

**为什么**：ITS 组分浓度经过预设，直接按倍数加入可以减少单独称量和配制误差。

**注意事项**：

- 先确认所用 [DMEM-F12](DMEM-F12.md)、[Ham F-12](<Ham F-12.md>) 或 [α-MEM](α-MEM.md) 是否已有类似补充剂。
- 不要把 ITS 当作 FBS 的一键替代品；贴壁和增殖信号可能仍不足。
- 如果研究 insulin signaling（胰岛素信号）或 iron metabolism（铁代谢），ITS 本身就是实验变量。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 加ITS后细胞仍不长 | 缺少生长因子、基质或脂质支持 | 补齐细胞特异 cocktail |
| 信号通路实验被干扰 | insulin 或 transferrin 影响 readout | 换成无 insulin 版本或设对照 |
| 批间差异 | ITS 版本或品牌变化 | 固定货号并记录 |
| 低血清适应失败 | 降血清太快或接种密度低 | 逐步适应，提高初始密度 |

## 购买与记录建议

常见供应商包括 [Gibco](<../番外/试剂厂商/Gibco.md>)、[Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>)/[Merck](<../番外/试剂厂商/Merck.md>)、[Corning](<../番外/试剂厂商/Corning.md>)、[STEMCELL Technologies](<../番外/试剂厂商/STEMCELL Technologies.md>)。优先选择细胞培养级、无菌、明确 formulation 的产品。

推荐记录模板（中文）：

```text
ITS产品全名：
品牌：
货号：
批号：
版本：ITS-G / ITS-X / ITS-A / 其他
储液倍数：
终浓度：
基础培养基：
是否含FBS：
其他补充剂/生长因子：
使用细胞：
开封日期：
异常现象：
```

Recommended record template (English):

```text
ITS product full name:
Brand:
Catalog number:
Lot number:
Version: ITS-G / ITS-X / ITS-A / other
Stock concentration:
Final concentration:
Basal medium:
FBS included: yes/no
Other supplements/growth factors:
Cell type:
Open date:
Abnormal observation:
```

## 小结

ITS 是无血清和低血清培养中最常见的基础补充剂之一。它解决的是胰岛素信号、铁转运和硒支持等基础需求，但不能自动替代 FBS 的全部复杂功能。

## 参考来源

- [Thermo Fisher Cell Culture Media Supplements](https://www.thermofisher.com/au/en/home/life-science/cell-culture/mammalian-cell-culture/media-supplements.html)
- [Gibco Insulin-Transferrin-Selenium (ITS-G) Select Supplement User Guide](https://assets.thermofisher.com/TFS-Assets/LSG/manuals/MAN1000664-InsulinTransferrinSeleniumSelectSupplement-UG.pdf)

