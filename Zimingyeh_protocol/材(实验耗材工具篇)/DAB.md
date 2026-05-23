# DAB

## 一句话定义

DAB（3,3'-Diaminobenzidine，3,3'-二氨基联苯胺）是一种常用 HRP chromogenic substrate（辣根过氧化物酶显色底物），在 [免疫组化](<../用(实验流程内容篇)/免疫组化.md>) 中常用于生成棕色不溶性沉淀，从而显示目标抗原在组织中的位置。

在 IHC 中，HRP 标记二抗或 HRP 聚合物系统催化 DAB 反应，DAB 在抗原位置附近沉积，形成光学显微镜可见的棕色信号。Abcam、Vector Laboratories 和 Thermo Fisher 的 IHC 资料都将 DAB 作为经典 HRP 显色底物。[参考：Abcam IHC Protocols](https://www.abcam.com/en-us/technical-resources/protocols)；[参考：Vector Laboratories DAB Substrates](https://vectorlabs.com/products/substrates/hrp-substrates/dab-substrate-kit)

## 核心反应逻辑

```text
抗原位置
→ 一抗结合
→ HRP检测系统结合
→ DAB被HRP氧化
→ 棕色不溶性沉淀
→ 显微镜观察定位
```

DAB 的优势是产物不溶、定位清晰、适合明场显微镜；局限是动态范围有限，且 DAB 本身有安全风险。

## 常见用途

| 用途 | 说明 |
| --- | --- |
| IHC 明场显色 | 最典型用途，形成棕色沉淀 |
| ISH/免疫酶染色 | 某些酶标定位实验 |
| 组织切片形态结合 | 可与 [苏木精](苏木精.md) 复染配合 |
| 永久切片记录 | DAB 沉淀相对稳定，适合明场扫描 |

DAB 更强调组织定位，不适合像 ELISA 那样做高精度板式定量，也不是常规 WB 的首选底物。

## DAB vs TMB

| 维度 | DAB | [TMB](TMB.md) |
| --- | --- | --- |
| 酶 | HRP | HRP |
| 产物 | 棕色不溶性沉淀 | 蓝色/黄色可溶性产物 |
| 常见实验 | IHC | ELISA |
| 读取方式 | 明场显微镜 | 酶标仪吸光度 |
| 定位能力 | 强 | 弱 |
| 安全风险 | 较高，需更谨慎 | 仍需规范处理 |

## 使用 protocol

### IHC显色

1. 完成一抗和 HRP 检测系统孵育。
2. 用 TBS/PBS 洗去未结合酶标物。
3. 现配 DAB working solution（DAB 工作液）。
4. 加到组织切片上，显微镜下监控颜色发展。
5. 达到目标强度后立即用水或缓冲液终止。
6. 可进行苏木精复染、脱水、透明和封片。

DAB 显色时间必须根据目标表达量、抗体强度和组织背景调整。过度显色会让弱背景也变成“阳性”。

## 可调策略

| 问题 | 调整方向 |
| --- | --- |
| 背景过深 | 缩短 DAB 时间，降低一抗/二抗浓度，加强洗涤 |
| 信号弱 | 延长显色，优化抗原修复，提高抗体浓度 |
| 组织边缘发深 | 防止切片干燥，增加洗涤和均匀覆盖 |
| 内源性过氧化物酶背景 | 增加 [过氧化氢](过氧化氢.md) 阻断步骤 |

## 注意事项

- DAB 具有潜在致突变/致癌风险，必须按 [化学品安全](<../实验室安全/化学品安全.md>) 和 SDS 操作。
- DAB 工作液通常现配现用，避免长期放置。
- 显色过程应在显微镜下或固定时间内严格监控。
- DAB 废液和污染耗材需按危险废物处理。
- DAB 与 HRP 体系配套，不适用于 AP 标记二抗。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 整张切片棕色 | 内源性酶活、抗体过浓、DAB 过度显色 | 做 H2O2 阻断，降低抗体，缩短显色 |
| 无显色 | HRP 系统漏加、DAB 失效、抗原修复失败 | 检查阳性对照和检测系统 |
| 边缘信号强 | 切片干燥或试剂覆盖不均 | 保持湿润，增加液体覆盖 |
| 阳性定位弥散 | 显色过久或组织处理差 | 缩短显色，优化固定和修复 |
| 批次差异 | DAB 配制或显色时间不一致 | 固定工作液配方和显色时间 |

## 记录模板

中文模板：

```text
DAB 产品名称：
品牌：
货号：
批号：
显色体系：
DAB 工作液配制时间：
显色时间：
终止方式：
复染方式：
HRP 检测系统：
阳性/阴性对照：
安全处理方式：
备注：
```

English record template:

```text
DAB product name:
Brand:
Catalog number:
Lot number:
Detection system:
DAB working solution preparation time:
Development time:
Stopping method:
Counterstain:
HRP detection system:
Positive / negative controls:
Safety disposal method:
Notes:
```

## 小结

DAB 是 IHC 中经典的 HRP 明场显色底物，适合把抗原位置转化为棕色沉淀。它的关键是显色时间、内源性过氧化物酶阻断、抗体浓度和安全处理。DAB 能给出漂亮定位，但过度显色也很容易制造假阳性。

## 参考来源

- [Abcam IHC Protocols](https://www.abcam.com/en-us/technical-resources/protocols)
- [Vector Laboratories DAB Substrate Kit](https://vectorlabs.com/products/substrates/hrp-substrates/dab-substrate-kit)
- [Thermo Fisher IHC Detection](https://www.thermofisher.com/us/en/home/life-science/antibodies/immunohistochemistry-ihc.html)
