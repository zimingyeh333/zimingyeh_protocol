# qPCR仪

qPCR instrument / real-time PCR system（qPCR 仪/实时荧光 PCR 系统）是在 PCR 热循环过程中实时检测荧光信号的仪器，是 [RT-qPCR](<../用(实验流程内容篇)/RT-qPCR.md>)、absolute quantification（绝对定量）、relative quantification（相对定量）、genotyping（基因分型）和病原体核酸检测的核心设备。

![qPCR核心材料参考图](../z_asset/材/qPCR核心材料/qPCR-core-materials-reference.png)

图源：Image2 生成的 qPCR 核心材料参考图；左侧为打开热盖的实时 PCR 仪，中间为 qPCR 板和光学封板膜，右侧为 master mix、引物、探针和 ROX 参比染料示意。

## 基本组成

| 模块 | 作用 | 选择时看什么 |
| --- | --- | --- |
| Thermal block（热循环模块） | 控制变性、退火、延伸温度 | 96 孔、384 孔、fast block、梯度功能 |
| Heated lid（热盖） | 压紧耗材并减少冷凝 | 是否适配板型和封板方式 |
| Optical system（光学系统） | 激发荧光并读取发射信号 | 通道数量、染料兼容性、灵敏度 |
| Software（分析软件） | 设置程序、阈值、标准曲线和结果导出 | Cq 计算、熔解曲线、质控和导出格式 |
| Calibration（校准体系） | 维持温度和光学校准 | 染料校准、ROI/背景校正、维护周期 |

Thermo Fisher 的 real-time PCR instrument 页面将仪器按通量、通道、应用和软件生态进行区分；Bio-Rad 的 CFX 系列也强调多通道荧光检测、温控均一性和数据分析软件是 qPCR 系统的重要组成。[参考：Thermo Fisher Real-Time PCR Instruments](https://www.thermofisher.com/us/en/home/life-science/pcr/real-time-pcr/real-time-pcr-instruments.html)；[参考：Bio-Rad Real-Time PCR Detection Systems](https://www.bio-rad.com/en-us/category/real-time-pcr-detection-systems)

## qPCR仪在测什么

qPCR 仪不是直接“数 RNA/DNA 分子”，而是在每个循环后检测荧光强度变化。荧光信号超过阈值时对应的循环数称为 [Cq值](<../番外/补充知识/Cq值.md>)（quantification cycle，定量循环值）。Cq 越小，通常代表初始模板越多；但这个判断必须建立在引物特异性、扩增效率和对照合格的基础上。

| 检测化学 | 仪器看到的信号 | 关键要求 |
| --- | --- | --- |
| [SYBR Green qPCR Master Mix](<SYBR Green qPCR Master Mix.md>) | SYBR Green 结合双链 DNA 后增强的荧光 | 需要 [熔解曲线](<../番外/补充知识/熔解曲线.md>) 判断特异性 |
| [TaqMan探针](TaqMan探针.md) | 探针被聚合酶切解后 reporter 与 quencher 分离产生的荧光 | 需要匹配 reporter/quencher 和通道 |
| Multiplex qPCR | 多个荧光通道同时读取 | 染料光谱分离和校准更重要 |

## 选择 qPCR仪看什么

| 参数 | 为什么重要 |
| --- | --- |
| 孔位格式 | 决定通量和兼容耗材，常见 96 孔和 384 孔 |
| 检测通道 | 决定能使用哪些 reporter dye（报告荧光）和是否能 multiplex |
| 温度均一性 | 影响重复孔 Cq 一致性 |
| 动态范围和灵敏度 | 影响低丰度模板和标准曲线 |
| ROX 需求 | 有些仪器需要 [ROX参比染料](ROX参比染料.md)，有些不需要 |
| 软件导出 | 是否方便导出 Cq、扩增曲线、熔解曲线和原始荧光 |
| 耗材生态 | 是否需要专用 [qPCR板](qPCR板.md)、光学管或 [光学封板膜](光学封板膜.md) |

## 使用 protocol

### 上机前检查

**怎么做**：确认 plate setup（板位设置）、荧光通道、反应体系、热循环程序、封板状态和离心情况。检查 qPCR 板是否与仪器兼容，光学封板膜是否贴平。

**为什么**：qPCR 是高灵敏度实验，板位错、通道错或封板差会直接导致整板数据不可用。

**注意事项**：

- 上机文件中的样本名、基因名和孔位要与实验记录一致。
- SYBR 实验要加入 melt curve（熔解曲线）程序。
- TaqMan 实验要确认 reporter 通道和 quencher 设置。

### 放板与运行

**怎么做**：将封好的板按仪器方向放入热模块，确认热盖压紧，启动运行并保存 run file（运行文件）。

**为什么**：板方向错会导致孔位对应错误；热盖压力不合适会导致蒸发、冷凝或板变形。

**注意事项**：

- 不要使用翘起、破损或封板不平的板。
- 运行中不要随意打开热盖。
- 重要项目保存原始运行文件，不只保存截图。

### 运行后初筛

**怎么做**：检查扩增曲线、基线、阈值、重复孔差异、NTC（no-template control，无模板对照）和熔解曲线或探针特异性结果。

**为什么**：软件自动给出的 Cq 不一定代表有效数据。引物二聚体、气泡、封板失败和污染都可能产生异常曲线。

**注意事项**：

- 不要只看 Cq 表格，要看曲线形态。
- SYBR 单峰不等于绝对正确，但多峰或低温峰通常提示非特异扩增或 [引物二聚体](<../番外/补充知识/引物二聚体.md>)。
- 标准曲线实验要检查扩增效率和 R2。

## 常见异常与原因

| 异常 | 可能原因 | 处理 |
| --- | --- | --- |
| 同一样本重复孔差异大 | 加样误差、气泡、封板不均、板不兼容 | 检查移液、离心、耗材兼容和封板 |
| NTC 有扩增 | 污染、引物二聚体、封板交叉污染 | 分区操作，重配体系，检查 melt curve |
| 全板信号低 | 染料/通道设置错、master mix 失效、光学校准问题 | 核对通道和试剂，做阳性对照，联系维护 |
| 边缘孔异常 | 蒸发或热接触不均 | 更换封板膜，避免边缘关键样本，确认热盖 |
| 软件无法分析 | plate setup 或 dye 设置错误 | 重新设置分析参数并保留原始文件 |

## 购买与记录建议

常见品牌包括 [Applied Biosystems](<../番外/试剂厂商/Applied Biosystems.md>)、[Bio-Rad](<../番外/试剂厂商/Bio-Rad.md>)、[Roche](<../番外/试剂厂商/Roche.md>)、[Qiagen](<../番外/试剂厂商/Qiagen.md>) 等。个人 protocol 里不需要把所有型号列成目录，重点记录本实验用的仪器型号和软件版本。

推荐记录：

```text
Instrument:
Block format:
Software version:
Plate/tube type:
Sealing method:
Detection chemistry:
Reporter dye:
Passive reference dye:
Cycling program:
Analysis settings:
Run file name:
```

## 小结

qPCR 仪的关键不是“能不能跑 PCR”，而是热循环、光学检测、耗材匹配和软件分析是否共同稳定。排查 qPCR 问题时，仪器设置、板膜兼容、通道选择和原始曲线必须和试剂问题一起看。

## 参考来源

- [Thermo Fisher Real-Time PCR Instruments](https://www.thermofisher.com/us/en/home/life-science/pcr/real-time-pcr/real-time-pcr-instruments.html)
- [Bio-Rad Real-Time PCR Detection Systems](https://www.bio-rad.com/en-us/category/real-time-pcr-detection-systems)
- [MIQE Guidelines, Clinical Chemistry 2009](https://academic.oup.com/clinchem/article/55/4/611/5631762)
