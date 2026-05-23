# TMB

## 一句话定义

TMB（3,3',5,5'-Tetramethylbenzidine，3,3',5,5'-四甲基联苯胺）是一种常用 HRP chromogenic substrate（辣根过氧化物酶显色底物），常用于 [ELISA](<../用(实验流程内容篇)/ELISA.md>) 中把 HRP 酶信号转化为可用酶标仪读取的颜色变化。

在 ELISA 中，TMB 被 [HRP标记二抗](HRP标记二抗.md) 或 HRP 标记检测抗体催化氧化后通常呈蓝色；加入酸性 stop solution（终止液）后变为黄色，并常在 450 nm 读取吸光度。Thermo Fisher、Abcam 和 CST 等免疫检测资料都将 TMB 作为 HRP-ELISA 的经典底物。[参考：Thermo Fisher TMB Substrates](https://www.thermofisher.com/us/en/home/life-science/protein-biology/protein-assays-analysis/elisa/elisa-substrates/tmb-substrates.html)；[参考：Abcam ELISA Guide](https://www.abcam.com/en-us/technical-resources/guides/elisa-guide)

## 核心反应逻辑

```text
HRP + 过氧化物 + TMB
→ TMB 被氧化
→ 蓝色产物
→ 加酸终止
→ 黄色产物
→ 450 nm 读数
```

TMB 本身不是抗体，也不识别抗原。它只是把 HRP 的存在转化为颜色信号，因此任何非特异 HRP 残留都会造成背景升高。

## 常见用途

| 用途 | 说明 |
| --- | --- |
| ELISA | 最常见，用于 HRP 酶标体系 |
| Dot blot 显色 | 某些 HRP blot 可用 TMB 显色 |
| 免疫检测终点法 | 读吸光度或肉眼观察颜色 |
| 快速质控 | 判断 HRP 标记抗体或底物是否有效 |

TMB 最常见于 ELISA，不是常规 Western blot 的默认读出。WB 更常用 [ECL发光液](<ECL发光液.md>) 做化学发光检测。

## TMB vs ECL vs DAB

| 底物 | 酶 | 读出 | 常见实验 | 特点 |
| --- | --- | --- | --- | --- |
| TMB | HRP | 蓝色/黄色吸光度 | ELISA | 适合板式定量 |
| [ECL发光液](<ECL发光液.md>) | HRP | 化学发光 | Western blot | 灵敏，适合膜上条带 |
| [DAB](DAB.md) | HRP | 棕色沉淀 | IHC | 产物沉积，可定位组织结构 |
| [BCIP-NBT](<BCIP-NBT.md>) | AP | 紫蓝色沉淀 | AP 显色 | 不适用于 HRP |

选择底物前先确认酶标类型：HRP 底物不能给 AP 二抗使用，AP 底物也不能给 HRP 二抗使用。

## 使用 protocol

### ELISA显色

1. 完成抗体孵育和 [PBST](PBST.md) 洗板。
2. 加入 TMB substrate，避光或弱光下孵育。
3. 观察颜色发展，阳性孔由无色变蓝。
4. 在合适时间加入 stop solution，常见为酸性终止液，如 [硫酸](硫酸.md) 溶液。
5. 终止后读取 450 nm 吸光度，必要时用参考波长校正。

显色时间必须统一。不同板之间显色时间不一致，会直接影响 OD 值可比性。

## 可调策略

| 问题 | 调整方向 |
| --- | --- |
| 阳性信号弱 | 延长显色时间、提高抗体浓度、确认 HRP 活性 |
| 背景高 | 增加洗板、降低二抗/检测抗体浓度、缩短显色 |
| 孔间差异大 | 统一加样节奏，使用多道移液器，避免气泡 |
| 读数饱和 | 缩短显色时间或稀释样本 |

## 注意事项

- TMB 对光和污染敏感，按说明书避光保存。
- TMB 不应接触金属污染物或强氧化/还原污染物。
- 加终止液后颜色和读数更稳定，但仍应在规定时间内读取。
- 终止液通常为强酸，按 [化学品安全](<../实验室安全/化学品安全.md>) 操作。
- TMB 废液按 [实验室废弃物处理](<../实验室安全/实验室废弃物处理.md>) 和本单位 EHS 要求处理。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 所有孔都很深 | 洗板不足、HRP 抗体过浓、显色过久 | 增加洗板，降低抗体浓度，缩短显色 |
| 阳性孔无颜色 | HRP 抗体漏加、底物失效、酶标不匹配 | 检查抗体标签和阳性对照 |
| 孔边缘差异大 | 温度不均、蒸发、加样节奏慢 | 控制孵育环境，快速均一加样 |
| 读数超范围 | 显色过强或样本太浓 | 缩短显色或稀释样本 |
| 颜色有沉淀 | 底物污染或反应异常 | 使用新底物并避免污染 |

## 记录模板

中文模板：

```text
TMB 产品名称：
品牌：
货号：
批号：
单组分/双组分：
显色时间：
显色温度：
终止液：
读取波长：
参考波长：
HRP 抗体/酶标物：
备注：
```

English record template:

```text
TMB product name:
Brand:
Catalog number:
Lot number:
One-component / two-component:
Development time:
Development temperature:
Stop solution:
Reading wavelength:
Reference wavelength:
HRP antibody / conjugate:
Notes:
```

## 小结

TMB 是 HRP-ELISA 中最常用的显色底物之一。它的关键变量是 HRP 标记体系、洗板充分性、显色时间、终止时机和读数范围。记录 TMB 时一定要写清产品、批号、显色时间和终止液。

## 参考来源

- [Thermo Fisher TMB Substrates](https://www.thermofisher.com/us/en/home/life-science/protein-biology/protein-assays-analysis/elisa/elisa-substrates/tmb-substrates.html)
- [Abcam ELISA Guide](https://www.abcam.com/en-us/technical-resources/guides/elisa-guide)
- [CST ELISA Protocol](https://www.cellsignal.com/learn-and-support/protocols)
