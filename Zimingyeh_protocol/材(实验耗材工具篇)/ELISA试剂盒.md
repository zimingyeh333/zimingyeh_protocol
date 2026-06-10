# ELISA试剂盒

ELISA kit（ELISA 试剂盒，酶联免疫吸附试验试剂盒）是把 [ELISA](<../用(实验流程内容篇)/ELISA.md>) 所需的关键组件预先配套好的商业检测体系。它通常包括 [酶标板](酶标板.md)、[标准品](标准品.md)、[捕获抗体](捕获抗体.md)、[检测抗体](检测抗体.md)、酶标物、底物、洗涤液、样本稀释液和说明书。ELISA kit 的核心价值不是“省去配液”，而是把抗体对、标准曲线范围、样本类型和检测体系预先验证到一个可重复的 workflow 里。

![ELISA kit 组件参考图](../z_asset/材/ELISA试剂盒/elisa-kit-components-reference.png)

图源：Image2 生成的 ELISA kit 组件参考图；展示预包被板、标准品、捕获抗体、检测抗体、HRP conjugate、TMB substrate、stop solution、wash buffer、sample diluent 和夹心结构。

## 试剂盒里通常有什么

| 组件 | 英文 | 作用 |
| --- | --- | --- |
| 预包被板 | pre-coated plate | 已固定捕获抗体或抗原，减少包被步骤 |
| 标准品 | standard / calibrator | 建立 [标准曲线](<../番外/补充知识/标准曲线.md>) |
| 捕获抗体 | capture antibody | 固定目标抗原，常见于 [夹心ELISA](<../用(实验流程内容篇)/夹心ELISA.md>) |
| 检测抗体 | detection antibody | 识别目标抗原另一个表位 |
| 酶标物 | HRP conjugate | 把结合事件转化为酶促信号 |
| TMB底物 | [TMB](TMB.md) substrate | HRP 显色底物 |
| 终止液 | [终止液](终止液.md) / stop solution | 终止显色并稳定 OD450 |
| 洗涤缓冲液 | [洗涤缓冲液](洗涤缓冲液.md) / wash buffer | 洗去未结合组分，降低背景 |
| 样本稀释液 | [样本稀释液](样本稀释液.md) / sample diluent | 降低基质干扰并匹配标准曲线 |

不同 kit 组件不同。有些是 ready-to-use（即用型），有些需要自己稀释浓缩洗液、重构标准品或配制工作液。R&D Systems 和 BioLegend 的 ELISA protocol 都强调标准品、样本、洗板、检测抗体、酶标物和底物步骤必须按说明书执行。参考：[R&D Systems ELISA protocols](https://www.rndsystems.com/resources/protocols)；[BioLegend sandwich ELISA protocol](https://www.biolegend.com/en-us/protocols/sandwich-elisa-protocol)。

## ELISA kit不是只看靶标名字

同样写着“Human IL-6 ELISA kit”，也可能完全不是同一个东西。购买和记录时至少要看：

| 维度 | 为什么重要 |
| --- | --- |
| target（靶标） | 同名蛋白可能有 isoform、前体、成熟体差异 |
| species（物种） | human、mouse、rat 等抗体反应性不同 |
| sample type（样本类型） | serum、plasma、cell culture supernatant、tissue lysate 验证不同 |
| range（检测范围） | 决定样本是否需要稀释 |
| sensitivity（灵敏度） | 影响低丰度样本能否可靠检测 |
| standard（标准品） | 决定单位、换算和曲线 |
| antibody pair（抗体对） | 决定特异性、交叉反应和动态范围 |
| lot（批号） | 决定可追溯性和批间差异 |

所以 ELISA kit 的身份可以理解为：

```text
kit identity = target + species + sample type + range + antibody pair + lot
```

## 常见试剂盒类型

| 类型 | 特点 | 适合情况 |
| --- | --- | --- |
| pre-coated sandwich ELISA kit | 板已包被，步骤最省 | 常规细胞因子/蛋白定量 |
| uncoated ELISA kit | 提供抗体对和试剂，需要自己包被 | 更灵活，成本可能较低 |
| matched antibody pair | 只提供配对抗体和标准品 | 自建 ELISA 或长期优化 |
| competitive ELISA kit | 目标物与标记物竞争 | 小分子、激素、药物、半抗原 |
| rapid ELISA kit | 缩短孵育时间 | 快速筛查，但需看灵敏度和范围 |
| multiplex assay kit | 同时测多个因子 | 多目标检测，但矩阵更复杂 |

如果你刚开始测一个细胞因子，最稳的是 pre-coated sandwich ELISA kit。等体系成熟、样本量大或成本压力高，再考虑 uncoated kit 或 matched antibody pair。

## 选择标准

### 先看样本类型

ELISA kit 说明书里写的 validated sample types（验证样本类型）非常关键。一个 kit 如果只验证了 cell culture supernatant（细胞培养上清），不应默认用于血清或组织裂解液。不同样本有不同 [基质效应](<../番外/补充知识/基质效应.md>)。

### 再看检测范围

样本浓度应尽量落在标准曲线的中段，而不是贴近最低点或最高点。若样本浓度未知，最好先做预实验稀释。高浓度样本还可能出现 [Hook效应](<../番外/补充知识/Hook效应.md>)。

### 看标准品单位

不同 kit 的标准品可能用 pg/mL、ng/mL、U/mL、IU/mL 等单位。不要把不同 kit 的结果简单合并，尤其是标准品来源不同或单位定义不同的时候。

### 看交叉反应

如果样本里可能有同源蛋白、同家族因子或不同物种蛋白，应查看 cross-reactivity（[交叉反应](<../番外/补充知识/交叉反应.md>)）和 specificity（[特异性](<../番外/补充知识/特异性.md>)）数据。

## 使用注意事项

### 试剂盒到货后

- 核对品牌、货号、批号和有效期。
- 检查是否需要 2-8°C、-20°C 或避光保存。
- 查看哪些组分需要重构，哪些是浓缩液。
- 保存说明书和 COA。
- 不同批号不要随意混用。

### 实验前

- 让需要室温平衡的组分平衡到室温。
- 标准品按说明书重构，避免剧烈涡旋导致蛋白失活。
- 浓缩洗液若有结晶，应完全溶解后再稀释。
- 设计板图，保留 blank、standard、QC 和重复孔。

### 实验中

- 加样顺序和孵育时间要一致。
- 洗板要充分，尤其在检测抗体和 HRP 之后。
- TMB 显色不要过度。
- 读板前检查气泡和板底污渍。

### 实验后

- 保存 raw OD（原始 OD）、板图、标准曲线、拟合方式、样本稀释倍数和导出结果。
- 不要只保存最终浓度表。

## ELISA kit vs 自建ELISA

| 维度 | 商业ELISA kit | 自建ELISA |
| --- | --- | --- |
| 上手速度 | 快 | 慢 |
| 初始可靠性 | 高 | 取决于开发 |
| 成本 | 单次通常较高 | 成熟后可降低 |
| 灵活性 | 较低 | 高 |
| 验证资料 | 通常较完整 | 需要自己建立 |
| 适合场景 | 常规靶标、短期项目、结果需要稳定 | 长期项目、特殊样本、特殊物种 |

商业 kit 不是一定比自建 ELISA “科学”，但它通常更适合起步和标准化。自建体系适合样本量大、目标特殊、需要改造流程或长期成本优化的项目。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 标准曲线不好 | 标准品重构/稀释错误，温度或时间不一致 | 重配标准品，固定操作节奏 |
| 样本全部超范围 | 样本未稀释或 kit 范围太低 | 做稀释预实验 |
| 背景高 | 洗板不足、封闭不兼容、HRP 残留 | 增加洗板，检查洗板机 |
| 同一靶标不同 kit 结果不同 | 抗体对、标准品、单位和校准体系不同 | 不要跨 kit 直接合并结果 |
| 不同批号结果漂移 | lot-to-lot variation | 同一项目尽量同批，保留 QC |
| 血清样本回收率低 | 基质效应 | 做 spike-and-recovery 和稀释线性 |

## 购买建议

常见供应商包括 [R&D Systems](<../番外/试剂厂商/R&D Systems.md>)、[BioLegend](<../番外/试剂厂商/BioLegend.md>)、[Thermo Fisher Scientific](<../番外/试剂厂商/Thermo Fisher Scientific.md>)、[Bio-Rad](<../番外/试剂厂商/Bio-Rad.md>)、[Abcam](<../番外/试剂厂商/Abcam.md>) 等。购买时优先看该 kit 是否对你的样本类型有验证，而不是只看价格或靶标名字。

对于长期项目，建议先买小包装或做 pilot test，确认标准曲线、回收率、稀释线性和样本浓度范围后，再大量采购同一批号。

## 记录模板

中文模板：

```text
ELISA试剂盒名称：
检测靶标：
物种：
样本类型：
品牌：
货号：
批号：
有效期：
检测范围：
灵敏度：
标准品单位：
是否预包被：
样本稀释倍数：
拟合方式：
COA/说明书是否保存：
备注：
```

English template:

```text
ELISA kit name:
Target:
Species:
Sample type:
Brand:
Catalog number:
Lot number:
Expiration date:
Detection range:
Sensitivity:
Standard unit:
Pre-coated plate:
Sample dilution factor:
Curve fit:
COA/manual archived:
Notes:
```

## 总结

ELISA 试剂盒不是黑箱。真正要记录和理解的是：它测哪个靶标、适合什么样本、标准曲线范围是多少、抗体对是否适合、批号是什么，以及样本是否落在可定量范围内。只按“同名靶标”替换 kit，很容易得到看似精确但不可比较的结果。

## 参考来源

- [R&D Systems ELISA protocols](https://www.rndsystems.com/resources/protocols)
- [BioLegend sandwich ELISA protocol](https://www.biolegend.com/en-us/protocols/sandwich-elisa-protocol)
- [Thermo Fisher Overview of ELISA](https://www.thermofisher.com/us/en/home/life-science/protein-biology/protein-biology-learning-center/protein-biology-resource-library/pierce-protein-methods/overview-elisa.html)
