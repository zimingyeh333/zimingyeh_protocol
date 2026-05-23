# DAPI

## 一句话定义

DAPI（4',6-diamidino-2-phenylindole，4',6-二脒基-2-苯基吲哚）是一种常用蓝色荧光 DNA 染料，常用于 [免疫荧光](<../用(实验流程内容篇)/免疫荧光.md>) 和细胞成像中标记细胞核。

DAPI 主要与 DNA 的 A-T rich regions（AT 富集区域）结合，在紫外或近紫外激发下发出蓝色荧光。Thermo Fisher 和 Abcam 的免疫荧光资料都将 DAPI 作为常见 nuclear counterstain（细胞核复染）试剂。[参考：Thermo Fisher DAPI Nucleic Acid Stain](https://www.thermofisher.com/order/catalog/product/D1306)；[参考：Abcam Immunofluorescence Protocol](https://www.abcam.com/en-us/technical-resources/protocols/immunocytochemistry-immunofluorescence-protocol)

## 核心用途

| 用途 | 说明 |
| --- | --- |
| 细胞核复染 | 在 IF/IHC-F 中显示核位置 |
| 细胞计数 | 根据核数量估计细胞数量 |
| 形态判断 | 观察核大小、碎裂、凝缩等形态 |
| 图像定位 | 帮助判断目标蛋白在核内、胞质或膜上的位置 |
| 流式/显微分析 | 某些条件下用于 DNA 含量或死细胞排除 |

DAPI 的主要价值是提供细胞核坐标。它不是目标蛋白染色，也不能直接说明目标蛋白表达。

## 光谱和成像

| 参数 | 常见理解 |
| --- | --- |
| 激发 | UV / 近 UV 通道，常见 358 nm 附近 |
| 发射 | 蓝色通道，常见 461 nm 附近 |
| 常见颜色 | 蓝色 |
| 典型通道 | DAPI channel |

实际激发和发射峰会受仪器、滤光片、封片剂和染色环境影响。成像时应选择显微镜对应 DAPI 通道，并避免与其他蓝色荧光染料冲突。

## DAPI vs Hoechst

| 维度 | DAPI | [Hoechst](Hoechst.md) |
| --- | --- | --- |
| 靶标 | DNA | DNA |
| 常见颜色 | 蓝色 | 蓝色 |
| 细胞通透性 | 固定细胞常用，活细胞通透性较弱 | 某些 Hoechst 染料更适合活细胞 |
| 常见用途 | 固定细胞/组织核染 | 活细胞或固定细胞核染 |
| 注意点 | UV 激发，光毒性和光漂白需注意 | 同样需注意光毒性和染料浓度 |

如果是固定细胞 IF，DAPI 很常用；如果需要活细胞核染，常优先考虑 Hoechst 系列，但要根据细胞类型和成像条件验证。

## 使用 protocol

### 固定细胞IF核染

1. 完成一抗、[荧光二抗](荧光二抗.md) 孵育和洗涤。
2. 用 [PBS](PBS.md) 或说明书推荐缓冲液稀释 DAPI。
3. 室温避光孵育，常见 1-10 min，具体按产品说明书。
4. PBS 洗去游离染料。
5. 加入 [抗淬灭封片剂](抗淬灭封片剂.md)。
6. 用 DAPI 通道成像。

若使用含 DAPI 的 mounting medium（封片剂），通常不需要额外单独染 DAPI。

## 注意事项

- DAPI 与 DNA 结合，按潜在遗传毒性试剂谨慎处理。
- 避光保存和操作，减少光漂白。
- 浓度过高会导致核外背景、信号溢出或细胞形态判断困难。
- 多通道成像时先设置曝光，避免 DAPI 信号过强影响邻近通道。
- DAPI 废液和污染耗材按实验室安全要求处理。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 核信号太弱 | 浓度低、孵育短、滤光片不匹配 | 增加浓度/时间，检查通道 |
| 背景太高 | 染料过浓、洗涤不足 | 降低浓度，增加 PBS 洗涤 |
| 信号很快变暗 | 光漂白 | 避光操作，使用抗淬灭封片剂 |
| 核外蓝色背景 | 染料过量或样本污染 | 降低染料浓度并充分洗涤 |
| 与其他通道干扰 | 光谱重叠或曝光过强 | 调整通道组合和曝光 |

## 记录模板

中文模板：

```text
DAPI 产品名称：
品牌：
货号：
批号：
储液浓度：
工作浓度：
孵育时间：
孵育温度：
洗涤条件：
封片剂：
显微镜通道：
曝光时间：
备注：
```

English record template:

```text
DAPI product name:
Brand:
Catalog number:
Lot number:
Stock concentration:
Working concentration:
Incubation time:
Incubation temperature:
Wash condition:
Mounting medium:
Microscope channel:
Exposure time:
Notes:
```

## 小结

DAPI 是固定细胞和组织免疫荧光中最常用的核染料之一。它提供核定位和细胞计数参考，但需要控制浓度、避光、洗涤和曝光。写 IF protocol 时，DAPI 的工作浓度、孵育时间、封片剂和成像通道都应该记录。

## 参考来源

- [Thermo Fisher DAPI Nucleic Acid Stain](https://www.thermofisher.com/order/catalog/product/D1306)
- [Abcam Immunocytochemistry / Immunofluorescence Protocol](https://www.abcam.com/en-us/technical-resources/protocols/immunocytochemistry-immunofluorescence-protocol)
