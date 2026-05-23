# 蛋白Marker

## 一句话定义

Protein marker（蛋白 Marker，也叫 protein ladder，蛋白分子量标准）是一组已知分子量的蛋白混合物，用于 [SDS-PAGE](<../用(实验流程内容篇)/SDS-PAGE.md>) 和 [Western blot](<../用(实验流程内容篇)/Western blot.md>) 中估算目标蛋白分子量、判断电泳迁移和辅助定位切膜。

在 WB 中，蛋白 Marker 不只是“旁边那一条彩色梯子”。它帮助判断凝胶是否跑好、转膜是否完整、目标条带是否在合理分子量位置，以及是否需要切膜孵育不同抗体。Thermo Fisher 和 Bio-Rad 都有多种 prestained protein ladder（预染蛋白 Marker）和 unstained protein ladder（未染蛋白 Marker）产品，用于不同电泳和 WB 场景。[参考：Thermo Fisher Protein Ladders and Markers](https://www.thermofisher.com/us/en/home/life-science/protein-biology/protein-gel-electrophoresis/protein-gel-electrophoresis-reagents/protein-ladders-markers.html)；[参考：Bio-Rad Protein Standards and Ladders](https://www.bio-rad.com/en-us/category/protein-standards-ladders)

## 核心用途

| 用途 | 说明 |
| --- | --- |
| 分子量估算 | 根据条带迁移位置判断目标蛋白 kDa |
| 电泳过程监控 | 预染 Marker 可直接观察电泳进程 |
| 转膜检查 | 预染 Marker 转移到膜上可提示转膜方向和效率 |
| 切膜定位 | 根据 Marker 条带裁切膜上不同分子量区域 |
| 图像标注 | 发表或记录时标注目标条带分子量 |

Marker 的估算是近似值。预染蛋白因为带有染料，迁移速度可能与未染蛋白不同，所以精确定量分子量时不能完全依赖预染 Marker。

## 常见类型

| 类型 | 英文 | 特点 | 适合场景 |
| --- | --- | --- | --- |
| 预染 Marker | Prestained protein ladder | 彩色可见，方便观察跑胶和转膜 | 常规 WB、切膜定位 |
| 未染 Marker | Unstained protein ladder | 迁移更接近真实蛋白，需要染色显示 | 精细分子量估算、凝胶染色 |
| 化学发光 Marker | Chemiluminescent marker | 可在 ECL 图像中显示 | WB 成像分子量标注 |
| 荧光 Marker | Fluorescent protein ladder | 适合荧光成像系统 | Fluorescent Western blot |
| 宽范围 Marker | Broad-range ladder | 覆盖广泛 kDa 区间 | 不确定目标分子量或多目标检测 |

常规 WB 最常用的是预染 Marker，因为它可以在跑胶、转膜和切膜过程中提供肉眼可见参考。但如果最终 ECL 图上看不到 Marker，需要额外使用化学发光 Marker、可显影 Marker 或根据膜上预先标记的位置标注。

## 选择标准

| 检查项 | 说明 |
| --- | --- |
| 分子量范围 | 是否覆盖目标蛋白上下区域 |
| 条带密度 | 目标分子量附近是否有清晰参考条带 |
| 检测方式 | 可见光、ECL、荧光是否匹配 |
| 上样体积 | 是否适合胶孔大小和成像强度 |
| 兼容性 | 是否适合 SDS-PAGE、native PAGE 或特定胶体系 |
| 批次一致性 | 长期项目应固定品牌和货号 |

如果目标蛋白是 12 kDa，不要只用覆盖 25-250 kDa 的 Marker；如果目标蛋白是 250 kDa，也不要用低分子量 Marker 勉强判断。

## 使用 protocol

1. 按产品说明书融化或混匀 Marker。
2. 根据胶孔大小加入推荐体积，常见为 2-10 μL。
3. 与样本同胶电泳。
4. 跑胶过程中观察预染 Marker 前沿。
5. 转膜后根据 Marker 判断转膜方向和目标区域。
6. 需要切膜时，用铅笔在膜边缘标记关键 Marker 位置。

Marker 一般不需要和样本一样煮沸，除非说明书明确要求。反复冻融和污染会改变 Marker 条带强度或清晰度。

## 与WB结果解析的关系

| 情况 | Marker 提供的信息 |
| --- | --- |
| 目标条带偏高 | 可能有修饰、二聚体、剪切异常或非特异条带 |
| 目标条带偏低 | 可能有降解、剪切体或抗体识别片段 |
| Marker 转膜不完整 | 转膜方向、时间或大/小蛋白保留可能有问题 |
| Marker 弯曲 | 跑胶过热、盐浓度高或上样问题 |
| ECL 图无 Marker | Marker 不是化学发光可检测类型 |

WB 里“分子量不对”不能只靠 Marker 下结论，还要结合目标蛋白 isoform、修饰、裂解条件、一抗说明书和阳性/阴性对照。

## 注意事项

- 预染 Marker 估算分子量有偏差，尤其在不同胶浓度和缓冲体系中。
- Marker 过量会造成泳道过宽或影响邻近样本泳道。
- 使用切膜策略时，转膜后及时标记 Marker 位置，避免后续洗膜看不清。
- 荧光 WB 要选择与成像通道兼容的 Marker。
- 化学发光 Marker 可能占用 ECL 动态范围，曝光太长会过亮。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| Marker 条带模糊 | 反复冻融、过量上样、胶浓度不合适 | 使用新鲜 Marker，减少上样量 |
| Marker 弯曲 | 电泳过热、盐太高、胶孔异常 | 降低电压，检查样本盐浓度 |
| 转膜后看不到小 Marker | 小分子量 Marker 穿膜或转膜过强 | 缩短转膜，使用 0.2 μm 膜 |
| ECL 图没有 Marker | 使用了普通预染 Marker | 选择化学发光 Marker 或手动标注 |
| 分子量判断不稳定 | 不同 Marker 或胶体系差异 | 固定 Marker 品牌和胶条件 |

## 购买和记录建议

购买时先看目标蛋白分子量范围，再看检测方式。常规 WB 推荐准备一支宽范围预染 Marker；需要在最终 ECL 图上直接显示分子量时，另备化学发光 Marker 或可检测 Marker。

中文记录模板：

```text
蛋白 Marker 名称：
品牌：
货号：
批号：
类型：
分子量范围：
上样体积：
胶浓度：
是否转膜可见：
是否 ECL/荧光可见：
备注：
```

English record template:

```text
Protein marker / ladder name:
Brand:
Catalog number:
Lot number:
Type:
Molecular weight range:
Loading volume:
Gel percentage:
Visible after transfer: yes / no
ECL / fluorescent detectable: yes / no
Notes:
```

## 小结

蛋白 Marker 是 SDS-PAGE 和 WB 的坐标尺。它帮助判断分子量、跑胶状态、转膜方向和切膜位置。选择 Marker 时要匹配目标分子量范围和成像方式，记录时至少写清品牌、货号、批号、类型和上样体积。

## 参考来源

- [Thermo Fisher Protein Ladders and Markers](https://www.thermofisher.com/us/en/home/life-science/protein-biology/protein-gel-electrophoresis/protein-gel-electrophoresis-reagents/protein-ladders-markers.html)
- [Bio-Rad Protein Standards and Ladders](https://www.bio-rad.com/en-us/category/protein-standards-ladders)
- [Thermo Fisher Western Blot Protocols](https://www.thermofisher.com/uk/en/home/life-science/protein-biology/protein-biology-learning-center/protein-gel-electrophoresis-information/western-blot-protocols.html)
