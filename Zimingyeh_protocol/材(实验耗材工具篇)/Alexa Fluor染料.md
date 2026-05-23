# Alexa Fluor染料

## 一句话定义

Alexa Fluor dyes（Alexa Fluor 染料）是 Thermo Fisher / Invitrogen 的一系列高亮度、高光稳定性 [荧光染料](荧光染料.md)，常用于 [免疫荧光](<../用(实验流程内容篇)/免疫荧光.md>)、流式细胞术、荧光 Western blot 和多色成像。

Alexa Fluor 不是单一染料，而是一整个染料系列，例如 Alexa Fluor 488、555、568、594、647、700、750 等，覆盖从绿色到近红外的多个通道。Thermo Fisher 官方资料强调 Alexa Fluor 系列具有多种光谱选项，可用于抗体、蛋白、核酸和探针标记。[参考：Thermo Fisher Alexa Fluor Dyes](https://www.thermofisher.com/us/en/home/life-science/cell-analysis/fluorophores/alexa-fluor.html)

## 核心特点

| 特点 | 说明 |
| --- | --- |
| 系列化 | 多个颜色覆盖常见激光和滤光片 |
| 高亮度 | 常比 FITC/TRITC 等经典染料更亮 |
| 光稳定性好 | 更适合长时间成像和重复扫描 |
| 应用广 | IF、流式、荧光 WB、显微成像 |
| 成本 | 通常高于传统染料 |

Alexa Fluor 的优势不是“名字更高级”，而是很多实验中能提供更好的信噪比和更稳定的成像表现。

## 常见型号和用途

| 染料 | 常见颜色 | 常见替代关系 |
| --- | --- | --- |
| Alexa Fluor 488 | 绿色 | 替代 [FITC](FITC.md) |
| Alexa Fluor 555 | 橙红 | 替代 Cy3/TRITC |
| Alexa Fluor 568 | 橙红/红色 | 替代 TRITC/Cy3 |
| Alexa Fluor 594 | 红色 | 常用于红色通道 |
| Alexa Fluor 647 | 远红 | 常用于低背景远红通道 |
| Alexa Fluor 700/750 | 近红外 | 荧光 WB 或近红外成像 |

实际选择不能只看颜色，还要看显微镜激光、滤光片、相机灵敏度和其他通道组合。

## 与经典染料对比

| 维度 | Alexa Fluor | FITC/TRITC |
| --- | --- | --- |
| 亮度 | 通常更高 | 通常较低 |
| 光稳定性 | 通常更好 | 更容易光漂白 |
| pH 稳定性 | 通常更好 | FITC 较 pH 敏感 |
| 成本 | 较高 | 较低 |
| 适合场景 | 弱信号、多色、发表图像 | 常规、成本敏感、旧体系 |

如果目标信号强且预算有限，经典染料也能完成任务；如果目标弱或需要多重定量，Alexa Fluor 往往更值得优先测试。

## 使用 protocol

### Alexa Fluor荧光二抗

1. 选择与一抗宿主匹配的 Alexa Fluor 标记 [荧光二抗](荧光二抗.md)。
2. 根据目标通道和其他染料设计 panel。
3. 用合适 [抗体稀释液](抗体稀释液.md) 稀释二抗。
4. 避光孵育。
5. 洗涤后用 [抗淬灭封片剂](抗淬灭封片剂.md) 封片。
6. 用对应通道成像。

### 多色成像

设计多色组合时，建议优先用 SpectraViewer 或仪器软件检查光谱重叠。常见组合是 DAPI / Alexa Fluor 488 / Alexa Fluor 568 or 594 / Alexa Fluor 647，但具体仍要由仪器决定。

## 注意事项

- Alexa Fluor 染料仍然需要避光保存和操作。
- 不同 Alexa Fluor 型号的固定剂、封片剂和成像兼容性可能不同。
- 多色实验需要单染对照，不能只靠理论光谱。
- Alexa Fluor 647 等远红染料常有较低自发荧光背景，适合弱目标。
- 不同厂家“类似通道”染料不一定完全等价。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 信号比预期弱 | 通道不匹配、抗体弱、曝光不足 | 查光谱，优化抗体和成像参数 |
| 多通道串色 | 染料发射重叠 | 重新设计 panel 或做光谱拆分 |
| 背景高 | 二抗过浓、封闭不足、自发荧光 | 降低二抗，设置二抗对照 |
| 批次不可比 | 换了染料型号或成像参数 | 固定染料和成像设置 |
| 图像饱和 | 染料太亮或曝光太长 | 降低曝光/激光，保留线性范围 |

## 记录模板

中文模板：

```text
Alexa Fluor 染料/抗体：
品牌：
货号：
批号：
具体型号：
标记对象：
稀释比例/工作浓度：
激发/发射通道：
样本类型：
成像设备：
曝光/激光/增益：
是否设置单染对照：
备注：
```

English record template:

```text
Alexa Fluor dye / antibody:
Brand:
Catalog number:
Lot number:
Specific dye:
Labeled target:
Dilution / working concentration:
Excitation / emission channel:
Sample type:
Imaging system:
Exposure / laser / gain:
Single-stain control included: yes / no
Notes:
```

## 小结

Alexa Fluor 染料是现代荧光实验中非常常用的高性能染料系列。它们适合弱信号、多色成像、荧光 WB 和需要较好光稳定性的实验。选择时要从具体型号、通道、仪器和其他染料组合出发，而不是笼统写“用了 Alexa”。

## 参考来源

- [Thermo Fisher Alexa Fluor Dyes](https://www.thermofisher.com/us/en/home/life-science/cell-analysis/fluorophores/alexa-fluor.html)
- [Thermo Fisher Fluorescence SpectraViewer](https://www.thermofisher.com/order/fluorescence-spectraviewer)
