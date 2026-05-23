# TRITC

## 一句话定义

TRITC（Tetramethylrhodamine isothiocyanate，四甲基罗丹明异硫氰酸酯）是一种经典橙红色 [荧光染料](荧光染料.md)，属于 rhodamine（罗丹明）类染料，常用于标记抗体、蛋白或探针。

TRITC 的典型激发/发射峰在约 550/570 nm 附近，可用于橙红色通道检测。它是较早期常用染料，但在现代免疫荧光中，经常被 Alexa Fluor 555、Alexa Fluor 568、Cy3 等更亮或更稳定的染料替代。染料光谱和通道匹配可用 Thermo Fisher SpectraViewer 等工具确认。[参考：Thermo Fisher Fluorescence SpectraViewer](https://www.thermofisher.com/order/fluorescence-spectraviewer)

## 核心特点

| 特点 | 说明 |
| --- | --- |
| 颜色 | 橙红色荧光 |
| 常见检测 | TRITC / rhodamine channel |
| 优点 | 经典、成本相对低、很多旧 protocol 使用 |
| 局限 | 光稳定性和亮度通常不如新一代染料 |
| 常见替代 | Alexa Fluor 555/568、Cy3 |

TRITC 在旧实验体系和已有抗体库存中仍常见，但如果重新设计多色 panel，不一定是首选。

## 常见用途

- TRITC 标记二抗。
- 与 FITC 或 DAPI 组合做双色/三色免疫荧光。
- 标记 lectin、phalloidin 或其他探针。
- 需要橙红色通道但设备较基础的成像实验。

## TRITC vs Cy3 vs Alexa Fluor 555/568

| 维度 | TRITC | [Cy染料](Cy染料.md) Cy3 | [Alexa Fluor染料](<Alexa Fluor染料.md>) 555/568 |
| --- | --- | --- | --- |
| 染料家族 | Rhodamine | Cyanine | Alexa Fluor |
| 颜色 | 橙红 | 橙红 | 橙红 |
| 成本 | 通常较低 | 中等 | 通常较高 |
| 光稳定性 | 一般 | 取决于具体染料 | 通常较好 |
| 适合 | 经典 protocol | 多种标记平台 | 高质量 IF 和多色成像 |

如果实验已经有 TRITC 标记抗体且信号清楚，可以继续使用；如果出现光漂白、弱信号或多色串扰，考虑升级染料。

## 使用 protocol

1. 完成样本固定、封闭和一抗孵育。
2. 用 TRITC 标记 [荧光二抗](荧光二抗.md) 按说明书稀释。
3. 避光孵育 30-60 min。
4. 用 PBS/PBST 洗涤。
5. 使用 [抗淬灭封片剂](抗淬灭封片剂.md) 封片。
6. 用 TRITC/rhodamine 通道成像。

多通道拍摄时，建议先单独拍每个通道，确认没有明显串色，再采集合并图。

## 注意事项

- TRITC 要避光操作，减少光漂白。
- 与 FITC 搭配时一般光谱分离尚可，但仍需检查滤光片。
- 与 Cy3、Alexa Fluor 555/568 等相近通道染料不能作为同一样本的独立颜色直接混用。
- 弱信号目标不建议默认选择 TRITC，除非已有验证。
- 记录显微镜通道、曝光和增益，便于后续比较。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 红色信号弱 | 染料亮度不足、光漂白、抗体弱 | 避光，换更亮染料，优化抗体 |
| 背景高 | 二抗过浓或组织自发荧光 | 降低二抗，设置二抗对照 |
| 与其他红色通道冲突 | 光谱太接近 | 换远红染料或重新设计 panel |
| 信号快速衰减 | 光漂白 | 使用抗淬灭封片剂，降低激发强度 |

## 记录模板

中文模板：

```text
TRITC 标记试剂：
品牌：
货号：
批号：
标记对象：
稀释比例/工作浓度：
孵育时间：
样本类型：
成像设备：
通道参数：
是否设置阴性/单染对照：
备注：
```

English record template:

```text
TRITC-labeled reagent:
Brand:
Catalog number:
Lot number:
Labeled target:
Dilution / working concentration:
Incubation time:
Sample type:
Imaging system:
Channel settings:
Negative / single-stain controls included: yes / no
Notes:
```

## 小结

TRITC 是经典橙红色染料，适合已有成熟 protocol 或基础双色免疫荧光。但它在亮度和光稳定性上通常不如许多新一代染料。重新设计实验时，建议把 TRITC 与 Cy3、Alexa Fluor 555/568 一起比较。

## 参考来源

- [Thermo Fisher Fluorescence SpectraViewer](https://www.thermofisher.com/order/fluorescence-spectraviewer)
- [Thermo Fisher Alexa Fluor Dyes](https://www.thermofisher.com/us/en/home/life-science/cell-analysis/fluorophores/alexa-fluor.html)
