# BCA蛋白定量试剂盒

## 一句话定义

BCA protein assay kit（Bicinchoninic acid protein assay kit，二喹啉甲酸蛋白定量试剂盒）是一种常用总蛋白浓度测定试剂盒，用于在 [Western blot](<../用(实验流程内容篇)/Western blot.md>) 前统一各样本上样量。

BCA 法的基本原理是：蛋白在碱性条件下将 Cu2+ 还原为 Cu1+，BCA（Bicinchoninic acid，二喹啉甲酸）与 Cu1+ 形成紫色络合物，通常在 562 nm 测定吸光度。Thermo/Pierce BCA 说明书和 Bio-Rad 蛋白定量资料都采用这一核心原理。[参考：Thermo Fisher Pierce BCA Protein Assay Kit](https://www.thermofisher.com/order/catalog/product/23225)；[参考：Bio-Rad Protein Assay Guide](https://www.bio-rad.com/en-us/applications-technologies/protein-assays)

## 核心组分

| 组分 | 作用 |
| --- | --- |
| BCA reagent A | 提供碱性反应环境和 BCA 相关组分 |
| [硫酸铜](硫酸铜.md) 或 reagent B | 提供 Cu2+ |
| [BSA标准品](BSA标准品.md) | 建立标准曲线 |
| 96 孔板或比色皿 | 承载反应体系 |

不同试剂盒的 reagent A/B 比例和 incubation（孵育）条件不同，必须按说明书配制工作液。

## 适合用途

- WB 前测定细胞/组织裂解液总蛋白浓度。
- 需要较宽线性范围和较好重复性的蛋白定量。
- 含部分去污剂的样本，例如常见 [RIPA裂解液](RIPA裂解液.md) 样本。BCA 通常比 Bradford 对去污剂更耐受，但仍有兼容性边界。

## 主要干扰因素

BCA 对还原剂特别敏感，因为还原剂会还原铜离子，导致假高读数。

| 干扰物 | 影响 | 建议 |
| --- | --- | --- |
| [DTT](DTT.md) | 可能显著干扰，读数假高 | 定量前避免加入，或使用兼容试剂盒 |
| [β-巯基乙醇](β-巯基乙醇.md) | 还原性强，可能干扰 | 定量后再加还原剂 |
| EDTA | 螯合金属离子，可能影响反应 | 查说明书兼容浓度 |
| 高浓度去污剂 | 可能改变背景 | 做裂解液空白和兼容性测试 |
| 脂类/高盐/样本颜色 | 影响吸光度 | 稀释样本或换方法 |

Thermo Fisher 的 BCA 说明中也提供不同化学物质兼容浓度表，实际使用时应以所用试剂盒说明书为准。[参考：Pierce BCA Protein Assay Kit](https://www.thermofisher.com/order/catalog/product/23225)

## 使用 protocol

### 标准曲线

1. 用 BSA 标准品配制一系列已知浓度标准。
2. 标准品和样本尽量使用相同或相近缓冲背景。
3. 每个标准和样本建议做 technical duplicates/triplicates（技术重复）。
4. 加入 BCA 工作液后按说明书孵育。
5. 在 562 nm 读取吸光度，绘制标准曲线。

### 样本测定

1. 样本如浓度太高，先做合适倍数稀释。
2. 读数应落在标准曲线线性范围内。
3. 用裂解液空白扣除背景。
4. 根据浓度计算 WB 上样体积。

## 注意事项

- 不要在加 [Laemmli上样缓冲液](Laemmli上样缓冲液.md) 和还原剂后再做常规 BCA。
- 样本和标准品最好用同一缓冲体系稀释。
- 标准曲线不能只做两个点。
- 若样本读数超出标准范围，应稀释后重测。
- 96 孔板边缘蒸发会影响结果，长时间孵育要注意封板和温度均一。

## BCA vs 其他蛋白定量

| 方法 | 优点 | 局限 |
| --- | --- | --- |
| BCA | 线性范围较宽，对部分去污剂兼容性较好 | 对还原剂敏感 |
| Bradford | 快速、便宜 | 对去污剂敏感，不同蛋白响应差异明显 |
| Lowry | 灵敏 | 步骤较复杂，干扰物较多 |
| 荧光定量 | 灵敏、线性范围宽 | 需要专用试剂和设备 |

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 标准曲线不线性 | 配液错误、混匀不足、读数超范围 | 重配标准品，确保读数在线性范围 |
| 样本浓度异常高 | 还原剂或干扰物影响 | 检查样本是否已加入 DTT/β-ME |
| 重复孔差异大 | 移液误差、气泡、混匀不足 | 使用校准移液器，去气泡，充分混匀 |
| 空白很高 | 裂解液或板背景高 | 做对应 buffer blank |
| WB 上样仍不一致 | 定量错误或样本降解 | 结合 Ponceau S/总蛋白染色检查 |

## 记录模板

中文模板：

```text
BCA 试剂盒名称：
品牌：
货号：
批号：
标准品：
样本缓冲液：
样本稀释倍数：
孵育温度和时间：
读数波长：
标准曲线范围：
R²：
样本浓度：
是否存在 DTT/β-ME/EDTA/去污剂：
备注：
```

English template:

```text
BCA kit name:
Brand:
Catalog number:
Lot number:
Standard:
Sample buffer:
Sample dilution:
Incubation temperature and time:
Reading wavelength:
Standard curve range:
R²:
Sample concentration:
DTT / β-ME / EDTA / detergent present:
Notes:
```

## 小结

BCA 蛋白定量试剂盒是 WB 上样量统一的关键工具。它不是“读一个数”这么简单：标准曲线、样本缓冲背景、还原剂干扰和线性范围都会直接影响 WB 的定量可信度。
