# Cy染料

## 一句话定义

Cy dyes（Cyanine dyes，花菁染料，常见 Cy2、Cy3、Cy5、Cy7）是一类常用于荧光标记的染料家族，可用于抗体、核酸、蛋白、探针和成像试剂标记。

Cy 染料覆盖绿色、橙红、远红和近红外等多个区域。Cy3 和 Cy5 曾经是多色免疫荧光和核酸芯片中非常经典的选择；Cy5/Cy7 相关远红和近红外通道也常用于低自发荧光背景成像。Cytiva 提供 CyDye 相关产品和应用资料；Thermo Fisher SpectraViewer 可用于比较 Cy 染料与其他荧光团的光谱重叠。[参考：Cytiva CyDye Fluorescent Dyes](https://www.cytiva.com/en/us/shop/protein-analysis/fluorescence-imaging/cydye-fluorescent-dyes)；[参考：Thermo Fisher Fluorescence SpectraViewer](https://www.thermofisher.com/order/fluorescence-spectraviewer)

## 常见成员

| 染料 | 常见颜色/区域 | 常见替代或相邻染料 |
| --- | --- | --- |
| Cy2 | 绿色 | FITC / Alexa Fluor 488 |
| Cy3 | 橙红 | TRITC / Alexa Fluor 555 |
| Cy5 | 远红 | Alexa Fluor 647 |
| Cy7 | 近红外 | Alexa Fluor 750 / APC-Cy7 等 |

不同厂家、不同偶联形式和不同仪器设置会改变实际表现。使用前必须查具体产品的 excitation/emission（激发/发射）参数。

## 常见用途

- 荧光二抗标记。
- 核酸探针和 microarray（芯片）标记。
- 多色免疫荧光。
- 远红/近红外成像。
- 作为 [串联染料](串联染料.md) 的受体染料，例如 PE-Cy7、APC-Cy7。

## Cy3/Cy5 vs Alexa Fluor

| 维度 | Cy染料 | [Alexa Fluor染料](<Alexa Fluor染料.md>) |
| --- | --- | --- |
| 体系历史 | 经典，很多旧 protocol 使用 | 现代 IF 和成像中很常用 |
| 光稳定性 | 取决于具体染料，部分较易漂白 | 通常较好 |
| 远红应用 | Cy5 很经典 | Alexa Fluor 647 常作为强替代 |
| 多色设计 | 可用，但需注意光谱重叠 | 系列化选择更丰富 |
| 成本/供应 | 取决于品牌和授权 | 取决于品牌和偶联物 |

如果已有 Cy3/Cy5 成熟体系，可以继续使用；如果重新设计发表级 IF 或多重 panel，常把 Cy 与 Alexa Fluor 系列一起比较。

## 使用 protocol

1. 确认染料型号和对应仪器通道。
2. 选择与一抗宿主匹配的 Cy 标记 [荧光二抗](荧光二抗.md)，或使用 Cy 标记探针。
3. 避光孵育和洗涤。
4. 使用合适抗淬灭封片剂。
5. 成像时避免饱和，并设置单染对照。

若使用 Cy7 或含 Cy7 的串联染料，应特别注意固定、光照、补偿和批次稳定性。

## 注意事项

- Cy 染料需要避光保存和操作。
- Cy5 远红通道通常背景较低，但需要仪器支持。
- Cy7 和 Cy7 串联染料可能对固定、光照和降解更敏感。
- 多色流式中 Cy7 相关串联染料容易出现补偿变化，应设置单染补偿对照。
- 不同 Cy 染料之间不能只按“Cy”这个前缀等同看待。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| Cy5 信号弱 | 激光/检测器不匹配、抗体弱 | 检查仪器远红通道 |
| Cy3 与其他通道串色 | 光谱重叠 | 调整通道或换染料 |
| Cy7 信号不稳定 | 串联染料降解或补偿变化 | 避光、用新鲜单染对照 |
| 背景高 | 二抗过浓或样本自发荧光 | 降低抗体，设置阴性对照 |
| 图像不可比 | 曝光或激光参数变化 | 固定成像参数 |

## 记录模板

中文模板：

```text
Cy 染料/标记物：
品牌：
货号：
批号：
具体型号：
标记对象：
稀释比例/工作浓度：
激发/发射通道：
样本类型：
成像/检测设备：
是否为串联染料：
是否设置单染对照：
备注：
```

English record template:

```text
Cy dye / conjugate:
Brand:
Catalog number:
Lot number:
Specific dye:
Labeled target:
Dilution / working concentration:
Excitation / emission channel:
Sample type:
Imaging / detection system:
Tandem dye: yes / no
Single-stain control included: yes / no
Notes:
```

## 小结

Cy 染料是经典花菁染料家族，适合多色荧光、远红/近红外成像和部分串联染料体系。它们的使用重点是光谱匹配、避光、补偿和具体型号记录。不要只写“Cy 染料”，要写清 Cy3、Cy5、Cy7 或具体产品名。

## 参考来源

- [Cytiva CyDye Fluorescent Dyes](https://www.cytiva.com/en/us/shop/protein-analysis/fluorescence-imaging/cydye-fluorescent-dyes)
- [Thermo Fisher Fluorescence SpectraViewer](https://www.thermofisher.com/order/fluorescence-spectraviewer)
