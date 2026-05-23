# FITC

## 一句话定义

FITC（Fluorescein isothiocyanate，异硫氰酸荧光素）是一种经典绿色 [荧光染料](荧光染料.md)，常用于标记抗体、蛋白或探针，在 [免疫荧光](<../用(实验流程内容篇)/免疫荧光.md>) 和 [流式细胞术](<../用(实验流程内容篇)/流式细胞术.md>) 中通过蓝光激发产生绿色信号。

FITC 是早期非常常用的 fluorescein（荧光素）类染料，典型激发/发射峰在约 495/519 nm 附近，可用常见 488 nm 激光或 FITC/GFP 通道检测。Thermo Fisher 的光谱工具和荧光染料资料都将 FITC 作为绿色通道经典染料之一。[参考：Thermo Fisher Fluorescence SpectraViewer](https://www.thermofisher.com/order/fluorescence-spectraviewer)

## 核心特点

| 特点 | 说明 |
| --- | --- |
| 颜色 | 绿色荧光 |
| 常见激发 | 488 nm 蓝光激发可用 |
| 常见检测通道 | FITC / GFP channel |
| 优点 | 便宜、经典、设备兼容性好 |
| 局限 | 光稳定性一般，pH 敏感，亮度通常不如很多新一代染料 |

FITC 的优势是“几乎所有设备都认识它”；局限是现代多色实验里它不一定是最佳绿色染料。

## 常见用途

- FITC 标记二抗或一抗。
- FITC 标记 lectin、蛋白、肽或探针。
- 流式细胞术中作为 488 nm 激光的绿色通道染料。
- 免疫荧光中与 [DAPI](DAPI.md) 或 Hoechst 核染搭配。

## FITC vs Alexa Fluor 488

| 维度 | FITC | [Alexa Fluor染料](<Alexa Fluor染料.md>) 488 |
| --- | --- | --- |
| 染料家族 | Fluorescein 类 | Alexa Fluor 系列 |
| 成本 | 通常较低 | 通常较高 |
| 亮度和稳定性 | 一般 | 通常更亮、更稳定 |
| pH 敏感性 | 相对明显 | 通常更稳定 |
| 适合场景 | 常规、成本敏感、旧 protocol | 弱信号、高质量成像、多重实验 |

如果只是做常规强阳性标记，FITC 仍然可用；如果目标信号弱、需要发表级图像或长时间曝光，Alexa Fluor 488 或同类新染料通常更稳。

## 使用 protocol

### 免疫荧光

1. 完成固定、封闭和一抗孵育。
2. 用 FITC 标记 [荧光二抗](荧光二抗.md) 按说明书稀释。
3. 室温避光孵育 30-60 min。
4. 用 [PBS](PBS.md) 或 PBST 洗涤。
5. 使用 [抗淬灭封片剂](抗淬灭封片剂.md) 封片。
6. 用 FITC/GFP 通道成像。

### 流式细胞术

1. 设计 panel 时确认 FITC 与其他染料的光谱重叠。
2. 设置 unstained、single-stain 和 fluorescence minus one controls。
3. 染色后避光保存并尽快上机。
4. 做好 [荧光补偿](../番外/补充知识/荧光补偿.md)，尤其是和 PE 通道相邻时。

## 注意事项

- FITC 容易光漂白，操作和保存尽量避光。
- FITC 对 pH 较敏感，酸性环境下信号可能下降。
- 多色流式中 FITC 与 PE 等通道可能需要补偿。
- FITC 信号弱时，不要只增加曝光，也要考虑换更亮染料。
- FITC 标记试剂长期保存后可能效价下降，应记录批号和开封时间。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 绿色信号弱 | 染料光漂白、抗体弱、pH 不合适 | 避光，优化抗体，换 Alexa Fluor 488 |
| 背景高 | 二抗过浓、封闭不足、自发荧光 | 降低二抗，增加对照 |
| 多色串色 | FITC 与邻近通道重叠 | 做单染补偿，调整 panel |
| 信号不稳定 | 成像参数或 pH 不一致 | 固定 buffer 和成像参数 |

## 记录模板

中文模板：

```text
FITC 标记试剂：
品牌：
货号：
批号：
标记对象：
稀释比例/工作浓度：
孵育时间：
样本类型：
成像/检测设备：
通道参数：
是否设置单染对照：
备注：
```

English record template:

```text
FITC-labeled reagent:
Brand:
Catalog number:
Lot number:
Labeled target:
Dilution / working concentration:
Incubation time:
Sample type:
Imaging / detection system:
Channel settings:
Single-stain control included: yes / no
Notes:
```

## 小结

FITC 是经典绿色荧光染料，便宜、通用、设备兼容性好。它适合常规实验，但在弱信号、多色流式和高质量成像中，常需要与 Alexa Fluor 488 等更亮、更稳定的染料比较。

## 参考来源

- [Thermo Fisher Fluorescence SpectraViewer](https://www.thermofisher.com/order/fluorescence-spectraviewer)
- [Thermo Fisher Alexa Fluor Dyes](https://www.thermofisher.com/us/en/home/life-science/cell-analysis/fluorophores/alexa-fluor.html)
