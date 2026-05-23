# Hoechst

## 一句话定义

Hoechst dye（Hoechst 染料，常见如 Hoechst 33342、Hoechst 33258）是一类蓝色荧光 DNA 染料，能结合 DNA minor groove（小沟），常用于细胞核染色、活细胞成像和固定细胞免疫荧光。

Hoechst 与 [DAPI](DAPI.md) 类似，都常用于 nuclear counterstain（细胞核复染）；但部分 Hoechst 染料，尤其 Hoechst 33342，细胞通透性较好，因此更常用于活细胞核染。Thermo Fisher 和 Abcam 的细胞染色/免疫荧光资料都将 Hoechst 与 DAPI 作为常见蓝色核染选项。[参考：Thermo Fisher Hoechst Stains](https://www.thermofisher.com/us/en/home/life-science/cell-analysis/fluorophores/hoechst-stains.html)；[参考：Abcam Immunofluorescence Protocol](https://www.abcam.com/en-us/technical-resources/protocols/immunocytochemistry-immunofluorescence-protocol)

## Hoechst vs DAPI

| 维度 | Hoechst | DAPI |
| --- | --- | --- |
| 中文 | Hoechst 核染料 | DAPI 核染料 |
| 主要靶标 | DNA | DNA |
| 发光颜色 | 蓝色 | 蓝色 |
| 活细胞通透性 | Hoechst 33342 较常用于活细胞 | 通常更常用于固定样本 |
| 常见应用 | 活细胞/固定细胞核染、细胞计数 | 固定 IF/IHC-F 核染 |
| 注意点 | 活细胞中可能有毒性和外排泵影响 | UV 激发、潜在遗传毒性 |

两者不能简单说谁更好。固定细胞免疫荧光用 DAPI 很方便；活细胞核染或需要穿透完整细胞膜时，Hoechst 33342 经常更合适。

## 常见用途

- 活细胞核染。
- 固定细胞免疫荧光核复染。
- 细胞计数和细胞核分割。
- 细胞周期或 DNA 含量相关分析的部分场景。
- 与 [荧光二抗](荧光二抗.md) 多通道共染时提供核定位参考。

## 使用 protocol

### 活细胞核染

1. 按产品说明书用培养基或 [PBS](PBS.md) 稀释 Hoechst。
2. 加入细胞，避光孵育。
3. 根据实验需要洗涤或直接成像。
4. 使用 DAPI/Hoechst 通道采集蓝色信号。

活细胞染色时必须做浓度和时间预实验。Hoechst 过量或长时间曝光可能影响细胞状态。

### 固定细胞核染

1. 完成固定、封闭、一抗和二抗孵育。
2. 加入 Hoechst 工作液，避光孵育。
3. PBS 洗涤。
4. 使用 [抗淬灭封片剂](抗淬灭封片剂.md) 封片。
5. 成像并记录曝光参数。

## 注意事项

- Hoechst 与 DNA 结合，应按潜在遗传毒性试剂处理。
- 活细胞实验中，染料浓度、孵育时间和光照强度都可能影响细胞。
- 蓝色通道容易与 DAPI 或其他蓝色染料冲突。
- 某些细胞外排泵会影响 Hoechst 染色强度，尤其是活细胞实验。
- 染色后避光操作，减少光漂白。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 核信号弱 | 浓度低、孵育短、细胞外排 | 增加浓度/时间，检查细胞类型 |
| 背景高 | 染料过量、洗涤不足 | 降低浓度并增加洗涤 |
| 活细胞状态变差 | 染料毒性或光毒性 | 降低浓度、缩短曝光、减少激发强度 |
| 核分割困难 | 过曝或信号不均 | 调整曝光和染色时间 |
| 与其他通道干扰 | 蓝色通道重叠 | 重新设计染料组合 |

## 记录模板

中文模板：

```text
Hoechst 产品名称：
品牌：
货号：
批号：
具体型号：
储液浓度：
工作浓度：
活细胞/固定细胞：
孵育时间：
成像通道：
曝光参数：
备注：
```

English record template:

```text
Hoechst product name:
Brand:
Catalog number:
Lot number:
Variant:
Stock concentration:
Working concentration:
Live-cell / fixed-cell:
Incubation time:
Imaging channel:
Exposure settings:
Notes:
```

## 小结

Hoechst 是非常常用的蓝色核染料，尤其适合活细胞核染和需要细胞核定位参考的成像实验。它和 DAPI 的主要差别在细胞通透性和应用场景。使用 Hoechst 时要认真记录型号、浓度、孵育时间和成像参数。

## 参考来源

- [Thermo Fisher Hoechst Stains](https://www.thermofisher.com/us/en/home/life-science/cell-analysis/fluorophores/hoechst-stains.html)
- [Abcam Immunocytochemistry / Immunofluorescence Protocol](https://www.abcam.com/en-us/technical-resources/protocols/immunocytochemistry-immunofluorescence-protocol)
