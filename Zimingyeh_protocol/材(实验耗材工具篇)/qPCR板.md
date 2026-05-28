# qPCR板

qPCR plate / optical reaction plate（qPCR 板/光学反应板）是用于 [RT-qPCR](<../用(实验流程内容篇)/RT-qPCR.md>)、real-time PCR（实时荧光 PCR）和部分 [PCR](<../用(实验流程内容篇)/PCR.md>) 反应的多孔塑料反应板。它通常由薄壁聚丙烯制成，要求热传导均一、孔间蒸发低、光学检测背景低，并且要与 [qPCR仪](qPCR仪.md) 的模块和光路兼容。

![qPCR板、封板膜和吸头参考图](../z_asset/材/实验耗材参考图/qPCR-plate-sealing-film-pipette-tip-reference.png)

图源：Image2 生成的实验耗材对照参考图；最左侧为 96 孔 qPCR optical reaction plate（光学反应板）示意。

## 核心特点

| 特点 | 为什么重要 |
| --- | --- |
| 薄壁 wells | 提高热传导速度和一致性 |
| 光学兼容 | 适合荧光信号读取，降低背景 |
| 孔间一致性 | 降低 Ct/Cq 变异 |
| 板框刚性 | 减少热循环变形和密封失败 |
| 仪器兼容 | 不同 qPCR 仪对 skirt、profile、颜色和孔位有要求 |

[Applied Biosystems](<../番外/试剂厂商/Applied Biosystems.md>) 的 MicroAmp optical reaction plates 强调其用于 real-time PCR 和 PCR，并与对应仪器系统匹配；[Bio-Rad](<../番外/试剂厂商/Bio-Rad.md>) 的 PCR/qPCR 板资料也把刚性框架、薄壁孔和热循环兼容作为关键设计点。[参考：Applied Biosystems MicroAmp Optical 96-Well Reaction Plate](https://www.thermofisher.com/order/catalog/product/4306737)；[参考：Bio-Rad PCR Plates](https://www.bio-rad.com/en-us/category/pcr-plates)

## 常见类型

| 类型 | 英文 | 特点 | 适合场景 |
| --- | --- | --- | --- |
| 96 孔 qPCR 板 | 96-well qPCR plate | 最常用，适合普通 qPCR | 标准实验、少中等通量 |
| 384 孔 qPCR 板 | 384-well qPCR plate | 体积更小、通量更高 | 高通量筛选、样本多 |
| 半裙边板 | Semi-skirted plate | 较好机械支撑，易贴标签 | 多数常规仪器 |
| 全裙边板 | Fully skirted plate | 刚性更好，自动化兼容更好 | 自动化和高通量 |
| 无裙边板 | Non-skirted plate | 灵活但刚性较弱 | 特定老仪器或模块 |
| 白色板 | White plate | 反射荧光，常提高信号 | 低信号检测或某些仪器推荐 |
| 透明板 | Clear plate | 易观察液体 | 普通 PCR 或需要视觉检查 |

不同仪器推荐不一样，不能只凭“96 孔板”购买。板的 profile（高度）、skirt（裙边）、颜色和孔位编码都会影响兼容性。

## qPCR板 vs PCR板

| 项目 | qPCR 板 | 普通 PCR 板 |
| --- | --- | --- |
| 检测方式 | 需要荧光实时读取 | 终点 PCR 后电泳或其他检测 |
| 光学要求 | 高 | 不一定高 |
| 密封要求 | 高，蒸发会直接影响 Cq | 也重要，但读数方式不同 |
| 颜色选择 | 常见白色或光学优化 | 透明较常见 |
| 价格 | 通常更高 | 通常较低 |

用普通 PCR 板替代 qPCR 板可能导致荧光背景、孔间一致性、蒸发和仪器兼容问题。反过来，qPCR 板做普通 PCR 通常可以，但成本可能没必要。

## 使用 protocol

### 选择板型

**怎么做**：根据 qPCR 仪型号选择 compatible plate（兼容板），确认孔数、裙边、profile、颜色和推荐封板方式。

**为什么**：qPCR 仪的热模块和光学读取系统依赖板的几何匹配。板不合适可能造成热接触差、压盖不合适或荧光读取异常。

**注意事项**：

- 优先查看仪器说明书或厂商兼容表。
- 换板型时不要直接沿用旧 protocol，需要做孔间一致性和 NTC 检查。
- 384 孔板对加样误差更敏感。

### 加样

**怎么做**：使用 [滤芯吸头](滤芯吸头.md) 或低吸附滤芯吸头，按 master mix、引物/探针、模板的 SOP 加样。小体积体系要避免气泡和挂壁。

**为什么**：qPCR 对体积误差和污染极敏感。气泡会影响荧光读取和热传导。

**注意事项**：

- 加样后短暂离心可把液体收集到孔底。
- 不同孔尽量保持相同总体积。
- 板边孔更容易受蒸发和温度边缘效应影响，必要时设置边缘策略。

### 封板

**怎么做**：使用匹配的 [光学封板膜](光学封板膜.md) 或光学盖，均匀压实每个孔，确认无皱褶、无气泡、无未贴合区域。

**为什么**：密封失败会导致蒸发、浓度变化和荧光读数异常。

**注意事项**：

- 封板膜不要触碰粘面。
- 用压膜板或刮板均匀压紧。
- 上机前观察孔内气泡，必要时短暂离心。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 重复孔 Cq 差异大 | 加样误差、气泡、封板不均、板不兼容 | 检查移液、离心、换兼容板 |
| 边缘孔偏高/偏低 | 蒸发或边缘温度效应 | 加强封板，避免边缘关键孔或使用仪器推荐板 |
| 荧光信号低 | 板颜色/光学性能不匹配 | 使用白色或仪器推荐 optical plate |
| 孔间污染 | 加样飞溅、封板操作不当 | 使用滤芯吸头，规范封板和离心 |

## 购买与记录建议

优先按 qPCR 仪品牌和型号选择兼容板。常见厂商包括 [Applied Biosystems](<../番外/试剂厂商/Applied Biosystems.md>)、[Bio-Rad](<../番外/试剂厂商/Bio-Rad.md>)、[Eppendorf](<../番外/试剂厂商/Eppendorf.md>)、[Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>)、[Corning](<../番外/试剂厂商/Corning.md>) 等。

推荐记录：

```text
qPCR plate format:
Color:
Skirt/profile:
Brand:
Catalog number:
Lot number:
Compatible instrument:
Sealing method:
Reaction volume:
```

## 小结

qPCR 板是热循环和荧光读取的共同接口。选择时最重要的是仪器兼容、光学性能、热传导一致性和封板可靠性，而不是只看孔数。

## 参考来源

- [Applied Biosystems MicroAmp Optical 96-Well Reaction Plate](https://www.thermofisher.com/order/catalog/product/4306737)
- [Bio-Rad PCR Plates](https://www.bio-rad.com/en-us/category/pcr-plates)
