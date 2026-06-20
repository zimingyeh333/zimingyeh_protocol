# LC-MS级乙腈

LC-MS grade acetonitrile（LC-MS 级乙腈，ACN）是用于 LC-MS 流动相、C18 洗脱和肽段重溶的高纯度有机溶剂。它比普通 [乙腈](乙腈.md) 更强调低 UV/质谱背景、低非挥发残留、低水分和低离子/金属污染，是 [蛋白质谱](<../用(实验流程内容篇)/蛋白质谱.md>) 和小分子 LC-MS 中最常用的有机相之一。

![蛋白质谱前处理材料参考图](../z_asset/材/蛋白质谱前处理材料/proteomics-sample-prep-materials-reference.png)

图源：Image2 生成的蛋白质谱前处理材料参考图。LC-MS 级乙腈/甲酸位于第 6 个模块，代表 LC-MS 流动相和 C18 洗脱所需的 MS-compatible solvents（质谱兼容溶剂）。

## 核心用途

| 用途 | 常见位置 | 作用 |
| --- | --- | --- |
| 流动相 B | LC 梯度洗脱 | 提高有机相比例，使疏水肽段从 C18 柱洗脱 |
| C18 脱盐洗脱 | 肽段清理后 | 用高比例乙腈洗脱结合在 C18 上的肽段 |
| 样本重溶调节 | 上样前 | 帮助部分疏水肽段溶解，但比例需控制 |
| 系统清洗 | LC-MS 维护 | 清除疏水污染物和残留样本 |

Thermo Fisher 的产品页面中可见 “Pierce Acetonitrile (ACN), LC-MS Grade” 这一类产品名称，说明乙腈有专门面向 LC-MS 的等级。参考：[Thermo Fisher Pierce Acetonitrile, LC-MS Grade](https://www.thermofisher.com/order/catalog/product/51101)

## 为什么不能用普通乙腈替代

普通 HPLC 或分析纯乙腈不一定有足够低的 MS 背景。LC-MS 检测的是离子信号，微量污染物可能在 MS 中非常显眼，导致：

- 空白峰或鬼峰。
- 离子抑制。
- 基线噪声升高。
- 柱和离子源污染。
- 定量下限变差。

如果只是普通 HPLC-UV，背景要求和 LC-MS 不完全相同；如果是高灵敏 LC-MS/MS，溶剂级别会直接影响结果。

## LC-MS级乙腈 vs HPLC级乙腈 vs 普通乙腈

| 类型 | 主要用途 | 能否用于 LC-MS | 风险 |
| --- | --- | --- | --- |
| LC-MS级乙腈 | LC-MS 流动相、C18 洗脱、样本重溶 | 默认推荐 | 成本较高 |
| HPLC级乙腈 | HPLC-UV/荧光检测 | 需验证 | MS 背景未必足够低 |
| 分析纯乙腈 | 普通化学分析或配液 | 不推荐 | 非挥发残留和污染风险高 |
| 工业级乙腈 | 工业用途 | 禁止用于 LC-MS | 背景和安全风险不可控 |

## 使用要点

**怎么做**：按 LC-MS 平台 SOP 配制流动相，通常与 [LC-MS级水](<LC-MS级水.md>) 和挥发性酸如 [甲酸](甲酸.md) 组合使用。开瓶后用于质谱专用用途，避免普通实验室污染。

**为什么重要**：LC-MS 级乙腈同时影响色谱分离、ESI（electrospray ionization，电喷雾电离）效率和系统背景。

**注意事项**：

- 乙腈易燃、有毒，应在通风良好环境操作。
- 使用专用 LC-MS 溶剂瓶和管路。
- 不要把用过的乙腈倒回原瓶。
- 避免和普通塑料容器长期接触，减少析出物。
- 开瓶后记录日期，长期使用前看空白背景。

**替代策略**：

- 某些方法可用 methanol（甲醇）作为有机相，但保留时间、峰形和离子化效率会改变。
- 蛋白质谱肽段 LC 常以乙腈为默认有机相起点。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 空白背景高 | 乙腈污染或开瓶太久 | 更换新瓶 LC-MS 级乙腈 |
| 峰形异常 | 有机相比例错误、溶剂混合不充分 | 重新配制流动相 |
| 离子源污染快 | 溶剂或样本中非挥发污染物多 | 检查溶剂等级和样本脱盐 |
| 保留时间漂移 | 流动相批次、比例或脱气差异 | 固定配制流程，使用 QC |
| 肽段回收低 | C18 洗脱比例不合适或干燥过度 | 优化乙腈比例和浓缩条件 |

## 购买建议

优先选择明确标注 LC-MS grade、Optima LC/MS、CHROMASOLV LC-MS、UHPLC-MS 或同等级别的乙腈。购买时记录品牌、货号、批号、开瓶日期和用途。重要项目尽量使用同一批次或至少保持同一品牌同一等级。

常见供应商包括 [Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>)/[Fisher Chemical](<../番外/试剂厂商/Fisher Chemical.md>)、[Merck](<../番外/试剂厂商/Merck.md>)/[Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>)、[Honeywell](<../番外/试剂厂商/Honeywell.md>)、[Waters](<../番外/试剂厂商/Waters.md>) 等。

## 推荐记录

### 中文记录

```text
LC-MS级乙腈品牌：
货号：
批号：
等级：
开瓶日期：
用途：流动相B / C18洗脱 / 样本重溶 / 清洗
添加剂：
配制比例：
使用瓶/管：
空白背景是否正常：
异常观察：
```

### English record

```text
LC-MS grade acetonitrile brand:
Catalog number:
Lot number:
Grade:
Opening date:
Use: mobile phase B / C18 elution / sample reconstitution / cleaning
Additive:
Mixing ratio:
Bottle/tubing used:
Blank background acceptable: yes/no
Abnormal observations:
```

## 小结

LC-MS 级乙腈是肽段分离和洗脱的核心有机相。它的质量会直接体现在空白背景、色谱峰形、离子化效率和定量下限上。对质谱来说，乙腈不是普通溶剂，而是整个系统背景的一部分。

## 参考来源

- [Thermo Fisher Pierce Acetonitrile, LC-MS Grade](https://www.thermofisher.com/order/catalog/product/51101)
