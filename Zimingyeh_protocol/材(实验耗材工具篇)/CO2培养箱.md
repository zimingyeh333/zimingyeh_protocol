# CO2培养箱

CO2 incubator（二氧化碳培养箱 / CO2 培养箱）是哺乳动物细胞培养中维持 temperature（温度）、carbon dioxide concentration（二氧化碳浓度）、humidity（湿度）和相对稳定 pH 环境的核心设备。它和 [培养基](培养基.md) 中的 bicarbonate / CO2 buffer system（碳酸氢盐 / 二氧化碳缓冲系统）配套，常见设置是 37°C、5% CO2 和高湿度，但具体条件必须服从细胞说明书和培养基配方。

![CO2 incubator reference image](https://www.thermofisher.com/content/dam/tfsite/images/storefront/CO2/features/CO2-Incubators-instrument.png)

图源：[Thermo Fisher CO2 incubators features](https://www.thermofisher.com/es/es/home/life-science/lab-equipment/co2-incubators/features.html)

## 核心作用

| 作用 | 为什么重要 | 常见变量 |
| --- | --- | --- |
| 维持 37°C | 多数哺乳动物细胞酶活性和代谢依赖接近体温环境 | 温度校准、开门次数、搁板位置 |
| 维持 CO2 | 与 [碳酸氢钠](碳酸氢钠.md) 共同稳定培养基 pH | CO2 浓度、传感器类型、气源质量 |
| 维持湿度 | 减少培养基蒸发和渗透压升高 | 水盘、门封、开门频率 |
| 降低污染风险 | 培养箱是多瓶细胞共享环境 | 清洁、HEPA 过滤、铜内胆、高温灭菌 |
| 保持培养一致性 | 不同搁板和开门习惯会造成微环境差异 | 位置记录、培养容器摆放 |

[Thermo Fisher / Gibco](<../番外/试剂厂商/Gibco.md>) 的 cell culture basics 资料把温度、CO2 和无菌环境列为细胞常规培养的关键条件，并提醒培养基颜色和 pH 变化可提示培养条件异常。[参考：Thermo Fisher Maintaining Cultured Cells](https://www.thermofisher.com/us/en/home/references/gibco-cell-culture-basics/maintaining-cultured-cells.html)

## 为什么需要 CO2

多数常规培养基使用 sodium bicarbonate（[碳酸氢钠](碳酸氢钠.md)）作为主要缓冲体系。培养基中的 HCO3- 需要和培养箱中的 CO2 平衡，才能把 pH 维持在细胞适合范围。培养基离开 CO2 培养箱太久，CO2 逸出后 pH 往往会升高，含 phenol red（[酚红](酚红.md)）的培养基会变得偏紫。

如果实验需要较长时间离开 CO2 环境，可以考虑 [HEPES](HEPES.md) 作为额外缓冲，但 HEPES 不是营养成分，也不能替代正确的培养箱设置。

## 关键参数

| 参数 | 常见设置或选择 | 注意事项 |
| --- | --- | --- |
| 温度 | 37°C 最常见 | 昆虫细胞、低温培养或特殊细胞按说明书调整 |
| CO2 | 5% 最常见 | 与培养基碳酸氢盐浓度匹配，不是所有培养基都适合 5% |
| 湿度 | 高湿度，常用水盘 | 水盘会成为污染源，需要定期更换和清洁 |
| O2 控制 | 普通 CO2 培养箱通常不控氧 | hypoxia（低氧）实验需要三气培养箱或低氧模块 |
| 传感器 | TC sensor / IR sensor | IR 传感器恢复快，TC 传感器更易受湿度和温度影响 |
| 内胆材料 | 不锈钢、铜合金等 | 铜可抑菌，但不能代替清洁和无菌操作 |

## CO2 培养箱 vs 普通培养箱 vs 三气培养箱

| 设备 | 控制内容 | 适合场景 | 不适合 |
| --- | --- | --- | --- |
| CO2 培养箱 | 温度、CO2、湿度 | 常规哺乳动物细胞培养 | 严格低氧/高氧实验 |
| 普通恒温培养箱 | 主要控制温度 | 细菌培养、非 CO2 依赖体系 | 常规碳酸氢盐缓冲哺乳动物细胞 |
| 三气培养箱 | 温度、CO2、O2、湿度 | 低氧、缺氧、胚胎、肿瘤微环境模拟 | 普通培养若无需求成本较高 |
| 活细胞成像培养系统 | 显微镜上维持温度/气体/湿度 | 长时间活细胞成像 | 大规模日常培养 |

## 使用 protocol

### 日常开关门

**怎么做**：取放细胞前先想好目标位置，尽量缩短开门时间。不要长时间开门整理样本，也不要把温度较低的大量液体直接放入培养箱。

**为什么**：开门会造成温度、CO2 和湿度波动。细胞短时能承受一定波动，但频繁波动会增加边缘孔蒸发、pH 漂移和批间差异。

**注意事项**：

- 同一实验尽量把培养板放在相近位置。
- 培养板外圈孔容易蒸发，长期实验要考虑边缘效应。
- 培养箱内不要过度拥挤，避免气流和温度恢复变差。

**替代方案**：高敏感实验可使用专用培养箱或固定搁板位置，并记录培养位置。

**出错后果**：细胞生长不均、培养基颜色变化、孔间差异增加。

### 水盘和湿度管理

**怎么做**：按设备 SOP 给水盘加入合适水源，并定期更换、清洁和消毒。不要让水盘长期变浑浊或干掉。

**为什么**：水盘维持湿度，但也是污染高风险区域。霉菌、细菌或藻类一旦进入培养箱，会通过开门扰动、气溶胶或接触转移影响其他细胞。

**注意事项**：

- 水盘添加剂要按实验室规范，不要随意混加。
- 清洁时记录日期和操作者。
- 污染发生后不能只处理单瓶细胞，也要检查培养箱。

**替代方案**：部分培养箱有主动湿度控制或特殊灭菌设计，但仍需定期维护。

**出错后果**：培养箱成为污染源，多个细胞批次连续污染。

### 清洁与灭菌

**怎么做**：定期擦拭内壁、搁板和门封，按厂家说明进行高温灭菌、紫外或化学清洁流程。清洁时移出细胞，并避免清洁剂残留。

**为什么**：CO2 培养箱是共享设备，污染一旦建立很难靠“多加抗生素”解决。抗生素会掩盖问题，不应作为培养箱污染管理策略。

**注意事项**：

- 不同培养箱对酒精、含氯清洁剂和高温灭菌兼容性不同。
- 清洁后让温度和 CO2 恢复稳定再放回细胞。
- 支原体或真菌污染后应追查培养箱、[BSC生物安全柜](BSC生物安全柜.md) 和操作流程。

**替代方案**：高风险细胞或关键项目可分箱培养，避免共享污染。

**出错后果**：反复污染、培养基异常、细胞生长变慢或实验结果不可解释。

### 校准与记录

**怎么做**：定期用独立温度计、CO2 分析仪或校准服务检查温度和 CO2。记录设备编号、校准日期、报警记录和异常处理。

**为什么**：培养箱显示值不等于真实值。长期轻微偏差会造成细胞状态改变，但不一定立刻表现为死亡。

**注意事项**：

- CO2 钢瓶更换后观察 CO2 恢复是否正常。
- 报警不要只消音，要记录原因。
- 多人共用培养箱应明确责任人。

**替代方案**：关键实验前用外部探头临时监测目标搁板位置。

**出错后果**：温度或 pH 长期偏移，导致细胞慢性应激、分化异常或增殖变化。

## 购买建议

常见可选品牌包括 [Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>)、[Eppendorf](<../番外/试剂厂商/Eppendorf.md>)、[PHCbi](<../番外/试剂厂商/PHCbi.md>)、[BINDER](<../番外/试剂厂商/BINDER.md>)、[Memmert](<../番外/试剂厂商/Memmert.md>)、[NuAire](<../番外/试剂厂商/NuAire.md>) 等。选择时重点看温度均一性、CO2 恢复速度、污染控制设计、是否可高温灭菌、报警系统、容量、搁板数量、维护成本和售后。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理策略 |
| --- | --- | --- |
| 培养基偏紫 | CO2 不足、门开太久、培养基离箱太久 | 检查 CO2 钢瓶和传感器，缩短离箱时间 |
| 培养基偏黄 | 细胞过密、污染、CO2 过高或代谢产酸 | 检查细胞密度、污染和 CO2 设置 |
| 外圈孔蒸发 | 湿度不足、开门频繁、边缘效应 | 检查水盘，使用边缘孔策略 |
| 连续污染 | 水盘、门封、搁板或共享细胞污染 | 彻底清洁培养箱，追踪污染来源 |
| 细胞生长慢 | 温度/CO2 偏差、培养箱过满、频繁波动 | 校准设备，减少开门，固定位置 |

## 推荐记录模板

中文模板：

```text
设备：CO2 培养箱
品牌/型号：
设备编号：
设定温度：
设定 CO2：
是否控 O2：
水盘维护日期：
清洁/灭菌日期：
校准日期：
报警或异常：
责任人：
备注：
```

English template:

```text
Equipment: CO2 incubator
Brand/model:
Equipment ID:
Temperature setting:
CO2 setting:
O2 control:
Water pan maintenance date:
Cleaning/decontamination date:
Calibration date:
Alarm or incident:
Responsible person:
Notes:
```

## 小结

CO2 培养箱不是简单的“37°C 箱子”。它和培养基缓冲系统、湿度、污染控制、开门习惯、校准记录共同决定细胞培养环境。细胞状态长期不好时，除了查培养基和操作，也要查培养箱本身。

## 主要参考来源

- [Thermo Fisher: CO2 Incubators Features](https://www.thermofisher.com/es/es/home/life-science/lab-equipment/co2-incubators/features.html)
- [Thermo Fisher / Gibco: Maintaining Cultured Cells](https://www.thermofisher.com/us/en/home/references/gibco-cell-culture-basics/maintaining-cultured-cells.html)
- [Eppendorf: Cell Culture Incubators](https://www.eppendorf.com/us-en/eShop-Products/Laboratory-Equipment/Cell-Culture-Incubators-p-CultureIncubators)
