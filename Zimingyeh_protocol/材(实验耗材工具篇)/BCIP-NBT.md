# BCIP-NBT

## 一句话定义

BCIP-NBT（5-bromo-4-chloro-3-indolyl phosphate / nitro blue tetrazolium，5-溴-4-氯-3-吲哚基磷酸盐/硝基蓝四唑）是一组常用 AP chromogenic substrate（碱性磷酸酶显色底物），可生成紫蓝色不溶性沉淀。

BCIP 是 AP（[碱性磷酸酶](碱性磷酸酶.md)）的底物，NBT 是氧化还原显色组分。二者配合可在 AP 所在位置形成紫蓝色沉淀，常用于 AP 标记抗体、核酸探针或 blot 的显色检测。Thermo Fisher、Promega 和 Roche/Merck 等厂家都提供 BCIP/NBT 相关 AP 显色底物。[参考：Thermo Fisher BCIP/NBT](https://www.thermofisher.com/order/catalog/product/34042)；[参考：Promega BCIP/NBT Substrate](https://www.promega.com/products/protein-detection/western-blotting/bcip-nbt-substrate/)

## 核心反应逻辑

```text
AP标记物
→ BCIP去磷酸化
→ 与NBT发生显色反应
→ 紫蓝色不溶性沉淀
→ 肉眼/扫描/显微镜观察
```

BCIP-NBT 是 AP 体系，不是 HRP 体系。它不能替代 [TMB](TMB.md)、[DAB](DAB.md) 或 [ECL发光液](<ECL发光液.md>)。

## 常见用途

| 用途 | 说明 |
| --- | --- |
| AP-Western blot 显色 | 产生紫蓝色条带 |
| Dot blot / slot blot | AP 标记检测体系 |
| 核酸杂交 | AP 标记探针或抗体检测 |
| IHC/ISH 显色 | 需要 AP 显色体系的组织定位 |

BCIP-NBT 的优点是显色产物稳定、可肉眼观察；局限是动态范围和定量能力有限，反应通常比化学发光慢。

## BCIP-NBT vs DAB/TMB/ECL

| 底物 | 酶 | 产物 | 常见实验 |
| --- | --- | --- | --- |
| BCIP-NBT | AP | 紫蓝色不溶性沉淀 | AP blot、ISH、IHC |
| DAB | HRP | 棕色不溶性沉淀 | IHC |
| TMB | HRP | 可溶性蓝/黄色产物 | ELISA |
| ECL | HRP | 光信号 | WB |

选择底物时先看酶标：AP 用 BCIP-NBT 或其他 AP 底物；HRP 用 ECL、TMB、DAB 等 HRP 底物。

## 使用 protocol

### AP blot显色

1. 完成 AP 标记抗体或 AP 标记探针孵育。
2. 充分洗去未结合 AP 标记物。
3. 按说明书加入 BCIP-NBT 工作液。
4. 室温避光或弱光下孵育，观察紫蓝色条带/斑点发展。
5. 达到合适强度后用水或终止液停止反应。
6. 记录图像并保存膜。

显色过程不宜无人看管。沉淀一旦过度发展，背景会继续加深，后续很难逆转。

## 注意事项

- BCIP-NBT 只适用于 AP 标记体系。
- AP 对缓冲体系敏感，应使用说明书推荐的 AP substrate buffer。
- phosphate（磷酸盐）体系可能影响 AP 反应，需确认是否兼容。
- 显色后产物不适合严格线性定量。
- 废液和染色耗材按 [实验室废弃物处理](<../实验室安全/实验室废弃物处理.md>) 要求处理。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 无显色 | 用了 HRP 二抗、AP 底物失效、缓冲液不兼容 | 确认 AP 标记和 substrate buffer |
| 背景持续加深 | AP 标记物洗不干净或显色过久 | 增加洗涤，缩短显色 |
| 条带弥散 | 反应过度或膜处理不均 | 及时终止，优化洗膜 |
| 信号弱 | AP 抗体浓度低或底物活性低 | 提高抗体浓度，使用新鲜底物 |
| 重复性差 | 显色时间不一致 | 固定显色时间和观察标准 |

## 记录模板

中文模板：

```text
BCIP-NBT 产品名称：
品牌：
货号：
批号：
AP 标记物：
底物缓冲液：
显色时间：
显色温度：
终止方式：
成像方式：
备注：
```

English record template:

```text
BCIP-NBT product name:
Brand:
Catalog number:
Lot number:
AP conjugate:
Substrate buffer:
Development time:
Development temperature:
Stopping method:
Imaging method:
Notes:
```

## 小结

BCIP-NBT 是 AP 显色体系的经典底物组合，适合需要稳定紫蓝色沉淀的 blot、ISH 或 IHC 场景。它和 HRP-ECL/TMB/DAB 属于不同酶体系，使用前必须确认抗体或探针标记的是 AP。

## 参考来源

- [Thermo Fisher BCIP/NBT Substrate](https://www.thermofisher.com/order/catalog/product/34042)
- [Promega BCIP/NBT Substrate](https://www.promega.com/products/protein-detection/western-blotting/bcip-nbt-substrate/)
- [Roche/Merck BCIP/NBT Substrate](https://www.sigmaaldrich.com/US/en)
