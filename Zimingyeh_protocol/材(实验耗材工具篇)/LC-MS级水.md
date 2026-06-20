# LC-MS级水

LC-MS grade water（LC-MS 级水）是用于 liquid chromatography-mass spectrometry（LC-MS，液相色谱-质谱联用）流动相、样本重溶、空白和系统冲洗的高纯度低背景水。它不是普通 [超纯水](超纯水.md) 的同义词，而是更强调低有机背景、低离子、低颗粒、低金属和低可萃取物对质谱信号的影响。

![蛋白质谱前处理材料参考图](../z_asset/材/蛋白质谱前处理材料/proteomics-sample-prep-materials-reference.png)

图源：Image2 生成的蛋白质谱前处理材料参考图。LC-MS 级水位于第 5 个模块，强调低离子和低有机背景对 LC-MS/MS 的重要性。

## 为什么 LC-MS 不能随便用水

LC-MS 的检测非常敏感，水中的有机污染、金属离子、塑化剂、颗粒和微生物代谢物都可能表现为背景峰、离子抑制、基线漂移或系统污染。普通超纯水可能电阻率很高，但不一定满足 LC-MS 对 total organic carbon（[TOC](<../番外/补充知识/总有机碳.md>)，总有机碳）、微粒和有机背景的要求。

在 [蛋白质谱](<../用(实验流程内容篇)/蛋白质谱.md>) 中，LC-MS 级水常用于肽段重溶、C18 平衡/洗涤、流动相 A 配制和空白样本。水背景不好时，问题会被误认为“样本脏”或“仪器状态差”。

## 主要用途

| 用途 | 作用 | 关键风险 |
| --- | --- | --- |
| 流动相 A | 提供水相背景，常配合低浓度酸 | 有机背景或盐导致基线异常 |
| 肽段重溶 | 将干燥肽段重溶到上样条件 | 不匹配会影响峰形和回收 |
| C18 平衡/洗涤 | 保持肽段结合并去除盐 | 水或容器污染会引入背景 |
| 空白和 QC | 判断系统背景 | 空白污染会掩盖真实问题 |
| 系统冲洗 | 清理管路和柱前环境 | 不合格水会越冲越脏 |

## LC-MS级水 vs 超纯水 vs 无菌水

| 类型 | 主要控制目标 | 能否默认用于 LC-MS | 备注 |
| --- | --- | --- | --- |
| LC-MS级水 | 低有机背景、低离子、低颗粒、低金属 | 是 | 质谱流动相和样本重溶优先 |
| 超纯水 | 高电阻率、低离子 | 不一定 | 电阻率高不等于 MS 背景低 |
| [无菌水](无菌水.md) | 无活微生物 | 不推荐默认 | 无菌不代表低 TOC 或低离子 |
| [去离子水](去离子水.md) | 去除离子 | 不推荐 | 不能保证有机物和颗粒背景 |
| [蒸馏水](蒸馏水.md) | 通过蒸馏去部分杂质 | 不推荐 | 现代 LC-MS 背景要求更严格 |

## 使用要点

**怎么做**：优先使用商业 LC-MS grade water 或平台认证水源。开瓶后尽量用于 LC-MS 相关用途，避免插入普通枪头、倒回原瓶或与非质谱容器混用。

**为什么重要**：LC-MS 级水一旦被普通实验室环境、塑料耗材或玻璃瓶污染，就可能不再低背景。

**注意事项**：

- 不要用细胞培养用无菌水、普通超纯水或缓冲液配制水相。
- 开瓶后记录日期，长时间放置会增加污染风险。
- 使用 LC-MS 兼容瓶子和瓶盖，避免普通塑料析出物。
- 过滤和脱气应按平台 SOP，避免引入新污染。

**替代策略**：

- 若必须使用实验室制备的超纯水，应先通过空白 LC-MS 运行验证背景。
- 关键项目建议直接购买 LC-MS grade water。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 空白峰多 | 水或瓶子有有机污染 | 更换 LC-MS 级水和洁净瓶 |
| 基线漂移 | TOC 或微粒背景高 | 换新水，检查流动相配制 |
| 重复性变差 | 开瓶时间长、不同批水混用 | 固定批次，记录开瓶日期 |
| 离子抑制 | 盐或非挥发物污染 | 使用专用 LC-MS 水，避免普通缓冲盐 |
| 鬼峰 | 容器析出物或微生物污染 | 换瓶、换水、检查管路 |

## 购买建议

购买时关注：

- 明确标注 LC-MS grade、Optima LC/MS、CHROMASOLV LC-MS 或同等级别。
- COA 中是否有 TOC、金属、UV cutoff、颗粒或质谱适用信息。
- 包装规格是否适合使用速度，避免大瓶开封太久。
- 是否与实验室 LC-MS 平台常用品牌一致。

常见供应商包括 [Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>)/[Fisher Chemical](<../番外/试剂厂商/Fisher Chemical.md>)、[Merck](<../番外/试剂厂商/Merck.md>)/[Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>)、[Honeywell](<../番外/试剂厂商/Honeywell.md>)、[Waters](<../番外/试剂厂商/Waters.md>) 等。

## 推荐记录

### 中文记录

```text
LC-MS级水品牌：
货号：
批号：
等级：
开瓶日期：
储存条件：
用途：流动相 / 重溶 / C18洗涤 / 空白 / 冲洗
配制添加剂：
使用瓶/管：
空白背景是否正常：
异常观察：
```

### English record

```text
LC-MS grade water brand:
Catalog number:
Lot number:
Grade:
Opening date:
Storage condition:
Use: mobile phase / reconstitution / C18 wash / blank / flushing
Additive:
Bottle/tubing used:
Blank background acceptable: yes/no
Abnormal observations:
```

## 小结

LC-MS 级水是质谱实验里最容易被低估的“背景试剂”。它看起来只是水，但会直接影响空白、基线、离子化和肽段重溶。对 LC-MS 来说，水的标准不是“够不够纯”，而是“在质谱里够不够安静”。

## 参考来源

- [Fisher Scientific Water, Optima LC/MS Grade, Fisher Chemical](https://www.fishersci.com/shop/products/water-optima-lc-ms-fisher-chemical-4/W64)
- [Sigma-Aldrich Water for chromatography LC-MS Grade, LiChrosolv](https://www.sigmaaldrich.com/US/en/product/mm/115333)
- [总有机碳](<../番外/补充知识/总有机碳.md>)
