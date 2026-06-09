# pH计

pH meter（pH 计/酸度计）是测量溶液 [pH](<../番外/补充知识/pH.md>) 的电化学仪器，常用于缓冲液、培养基、染色液、酶反应液和电泳缓冲液的质控。它不是“把探头放进去读一个数”这么简单；读数是否可信，取决于电极状态、校准液、温度补偿、样品 [离子强度](<../番外/补充知识/离子强度.md>) 和记录习惯。

![pH 计与电导率仪参考示意图](../z_asset/材/溶液测量仪器/ph-meter-conductivity-meter-lab-guide.png)

图源：Image2 生成的溶液测量仪器参考图。左侧展示 pH 计、glass combination pH electrode（玻璃复合 pH 电极）、pH 4.01/7.00/10.01 校准液和温度补偿；右侧对比 [电导率仪](电导率仪.md) 的电导池和 KCl 标准液。

## 定义与命名

pH 计通常由 meter（主机）、glass electrode（玻璃电极）、reference electrode（参比电极）或 combination electrode（复合电极）、temperature probe（温度探头）组成。现代实验室最常见的是玻璃复合 pH 电极。

pH 的本质和 hydrogen ion activity（氢离子活度）相关，不是简单的“氢离子浓度”。IUPAC Gold Book 对 pH 的定义和测量强调活度和标准化测量体系。参考：[IUPAC Gold Book pH](https://goldbook.iupac.org/terms/view/P04524/pdf)。

实验记录中建议写：

```text
pH = 7.40 at 25°C
Instrument = pH meter
Electrode = glass combination electrode
Calibration = pH 4.01 / 7.00 / 10.01 buffers
Temperature compensation = automatic/manual/none
```

## pH 计测量的是什么

| 组成/变量 | 作用 |
| --- | --- |
| 玻璃膜 | 对 H+ 活度变化产生电位响应 |
| 参比电极 | 提供稳定参考电位 |
| 电解液/盐桥 | 保持电极内部和样品间的离子通路 |
| 主机 | 把电位差换算为 pH |
| 温度探头 | 用于温度补偿和记录 |
| 校准液 | 建立 slope（斜率）和 offset（零点） |

pH 计读数依赖电极响应。理想 Nernst response（能斯特响应）在 25°C 接近 59.16 mV/pH，但实际电极会老化、污染或漂移，所以校准不是形式，而是测量本身的一部分。

## 主要用途

| 场景 | 为什么测 pH | 记录重点 |
| --- | --- | --- |
| [PBS](PBS.md) / [DPBS](DPBS.md) | 洗细胞和稀释试剂时要维持接近生理 pH | pH、温度、配方、是否无菌 |
| [HEPES](HEPES.md) 缓冲液 | HEPES 用量和 NaOH/HCl 调节会影响 pH | 缓冲剂浓度、调 pH 温度 |
| [培养基](培养基.md) | pH 影响细胞代谢、酶活和指示剂颜色 | [CO2培养箱](CO2培养箱.md)条件、碳酸氢盐、最终 pH |
| 酶反应液 | 酶活性通常有最适 pH | 反应温度和 buffer |
| 电泳/转膜缓冲液 | pH 影响蛋白/核酸带电状态 | 配方、重复使用次数 |
| 染色/固定/脱色液 | pH 会影响染色背景和固定效果 | 配方、批号、使用期限 |

对于含 bicarbonate（碳酸氢盐）/CO2 缓冲体系的培养基，瓶外室温测得的 pH 可能和 CO2 incubator（CO2 培养箱）平衡后的 pH 不一样。记录时要写清测量条件。

## 基本操作流程

不同仪器和电极按说明书执行，通用流程如下。冲洗电极常用去离子水或 [超纯水](超纯水.md)，但冲洗后应轻轻吸干，避免稀释样品或校准液。

```text
检查电极保存液和液接界状态：
开机并连接温度探头：
用去离子水或超纯水轻轻冲洗电极：
用无尘纸轻轻吸干，不要擦玻璃膜：
按目标范围选择校准液：
至少两点校准，必要时三点校准：
记录 slope 和 offset：
冲洗电极并放入样品：
轻轻搅拌或保持样品均一：
等待读数稳定：
记录 pH、温度、校准液、电极 ID 和样品批号：
测后冲洗并放回电极保存液：
```

一般不建议用纸巾用力擦玻璃电极，因为静电和机械损伤会造成读数漂移。

## 校准液选择

| 样品预期 pH | 推荐校准点 | 说明 |
| --- | --- | --- |
| 酸性样品 | pH 4.01 和 7.00 | 样品 pH 落在校准区间内 |
| 中性样品 | pH 4.01/7.00 或 7.00/10.01 | 视目标偏酸或偏碱决定 |
| 碱性样品 | pH 7.00 和 10.01 | 注意碱性缓冲液吸收 CO2 后会变化 |
| 高精度测量 | 三点或多点校准 | 同时检查 slope 和 offset |

校准液本身也有保质期和污染风险。[pH缓冲液](pH缓冲液.md) 倒出后不要倒回原瓶，日常使用小瓶分装更稳。

## 常见干扰

| 干扰 | 表现 | 处理 |
| --- | --- | --- |
| 电极干燥 | 响应慢、漂移 | 按说明用保存液恢复 |
| 蛋白/细胞碎片污染 | 读数不稳 | 使用适合清洗液清洁电极 |
| 低离子强度样品 | 读数慢或漂移 | 使用适合低离子强度样品的电极 |
| 高盐或强酸强碱 | 电极寿命下降 | 选择耐受电极并缩短暴露 |
| 温度变化 | pH 和电极响应变化 | 温度平衡并记录温度 |
| CO2 交换 | 碳酸氢盐体系 pH 漂移 | 控制开盖时间和 CO2 平衡条件 |

如果样品是细胞培养基，不要只看 phenol red（酚红）颜色判断 pH。颜色能提示异常，但不能替代 pH 计读数。

## pH 计 vs 其他溶液质控仪器

| 仪器 | 测什么 | 不能替代的原因 |
| --- | --- | --- |
| pH 计 | 氢离子活度相关酸碱状态 | 不告诉你总渗透负担 |
| [渗透压仪](渗透压仪.md) | osmolality，mOsm/kg | pH 正常也可能高渗/低渗 |
| 电导率仪 | conductivity（电导率） | pH 不反映总离子含量 |
| [折光仪](折光仪.md) | refractive index（RI，折光率） | pH 不反映浓度/密度梯度 |

例如 PBS 的 pH 可以正常，但盐称量错误会导致 [渗透压](<../番外/补充知识/渗透压.md>) 或电导率异常；培养基 pH 正常，也不代表药物 stock 没有造成高渗。

## 选购建议

| 需求 | 关注参数 |
| --- | --- |
| 常规缓冲液和培养基 | 稳定性、易校准、温度补偿 |
| 低体积样品 | 微量电极或尖端电极 |
| 蛋白/生物样品 | 抗污染电极和易清洁液接界 |
| 高盐/有机溶剂 | 专用电极材质和耐受性 |
| 多人平台 | 电极 ID、校准记录、数据导出 |
| GLP/GMP | 审计追踪、用户权限、校准追溯 |

代表性供应商可参考 [Mettler Toledo](<../番外/试剂厂商/Mettler Toledo.md>)、[Thermo Fisher Scientific](<../番外/试剂厂商/Thermo Fisher Scientific.md>)、[Metrohm](<../番外/试剂厂商/Metrohm.md>) 和 [Hanna Instruments](<../番外/试剂厂商/Hanna Instruments.md>)。真正购买时要优先看电极适配样品，而不是只看主机品牌。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 读数漂移 | 电极污染、样品温度变化、液接界堵塞 | 清洁电极，温度平衡，检查电极状态 |
| 校准失败 | 校准液过期/污染，电极老化 | 更换校准液，检查 slope/offset |
| 响应很慢 | 电极干燥、低离子强度样品、玻璃膜老化 | 浸泡恢复或更换电极 |
| 不同仪器读数不一致 | 校准液、温度、电极状态不同 | 统一校准体系和测量流程 |
| 培养基 pH 反复变化 | CO2/碳酸氢盐体系未平衡 | 写清空气/CO2 条件和测量时间 |
| pH 正常但细胞状态差 | osmolality、毒性或污染问题 | 同时检查渗透压、细胞污染和试剂批号 |

## 推荐记录模板

中文记录模板：

```text
仪器名称：pH计 / pH meter
品牌：
型号：
序列号：
电极类型：
电极ID：
校准液：
校准液批号：
校准日期：
校准点：
slope：
offset：
样品名称：
样品批号：
样品温度：
读数：pH
是否温度补偿：
重复次数：
清洁/保存状态：
异常现象：
处理决定：
```

English record template:

```text
Instrument name: pH meter
Brand:
Model:
Serial number:
Electrode type:
Electrode ID:
Calibration buffers:
Calibration buffer lots:
Calibration date:
Calibration points:
Slope:
Offset:
Sample name:
Sample lot:
Sample temperature:
Reading: pH
Temperature compensation:
Replicates:
Cleaning/storage status:
Abnormal observation:
Decision:
```

## 小结

pH 计是缓冲液、培养基和反应体系最基础的质控仪器之一，但它的可靠性来自校准、电极状态、温度补偿和记录完整性。不要把 pH 当作“溶液质量”的全部；pH、渗透压、电导率和折光率各自回答不同问题。

## 参考来源

- [IUPAC Gold Book pH](https://goldbook.iupac.org/terms/view/P04524/pdf)
- [Mettler Toledo pH measurement guide](https://www.mt.com/us/en/home/library/guides/lab-analytical-instruments/ph-measurement-guide.html)
- [Thermo Fisher Scientific pH meters and electrodes](https://www.thermofisher.com/us/en/home/life-science/lab-equipment/electrochemistry/ph-meters-electrodes.html)
- [Metrohm pH measurement](https://www.metrohm.com/en/applications/application-notes/aa-s-001-100/an-s-002.html)
