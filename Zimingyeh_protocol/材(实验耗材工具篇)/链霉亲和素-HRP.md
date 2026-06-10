# 链霉亲和素-HRP

Streptavidin-HRP（链霉亲和素-HRP）是由 streptavidin（[链霉亲和素](链霉亲和素.md)）与 horseradish peroxidase（HRP，辣根过氧化物酶）偶联形成的检测试剂，常用于识别 [生物素化抗体](生物素化抗体.md)、生物素化探针或生物素化抗原，并通过 TMB 等底物产生可读信号。

![Sandwich ELISA antibody module](../z_asset/材/ELISA抗体模块/elisa-antibody-module-reference.png)

图：夹心 ELISA 抗体模块示意。Streptavidin-HRP 通过 streptavidin-biotin interaction（链霉亲和素-生物素相互作用）连接检测抗体，再由 HRP 催化 TMB 显色。本图由 Image2 / image-generation model 生成，用于个人学习笔记示意。

## 组成和作用

Streptavidin 负责结合 biotin（生物素），HRP 负责催化底物显色。在 HRP-TMB ELISA 中，HRP 催化 [TMB](TMB.md) 产生颜色变化，随后加入 [终止液](终止液.md) 并在酶标仪上读取 OD450。

BioLegend 的 sandwich ELISA protocol 在 biotinylated detection antibody 后加入 avidin-HRP，再加 TMB substrate，这一流程和 streptavidin-HRP 的使用逻辑高度相似：前者负责识别生物素，后者负责酶促显色。参考：[BioLegend sandwich ELISA protocol](https://www.biolegend.com/en-us/protocols/sandwich-elisa-protocol)。

## 为什么常用链霉亲和素-HRP

| 优点 | 实验意义 |
| --- | --- |
| 通用性强 | 同一支 streptavidin-HRP 可搭配多种生物素化抗体 |
| 信号放大 | 一个抗体上可能有多个 biotin，streptavidin-HRP 可增强检测信号 |
| 操作成熟 | ELISA、Western blot、IHC 等都有成熟应用 |
| 批量稳定 | 商业产品通常浓度和活性稳定 |

但它不是越浓越好。Streptavidin-HRP 过量会提高 [背景信号](../番外/补充知识/背景信号.md)，尤其是洗涤不足、封闭不充分或生物素化抗体过量时。

## 和 avidin-HRP、NeutrAvidin-HRP 的区别

| 试剂 | 特点 | 可能用途 |
| --- | --- | --- |
| avidin-HRP（亲和素-HRP） | 来自蛋清，糖基化且等电点偏高 | 传统方法中常见，但非特异性吸附风险可能更高 |
| streptavidin-HRP（链霉亲和素-HRP） | 非糖基化，通常背景更低 | ELISA 常用选择 |
| NeutrAvidin-HRP | 去糖基化/中性化亲和素衍生物 | 对非特异性吸附敏感的体系 |
| polymer HRP-streptavidin | 多聚酶标放大体系 | 高灵敏度检测，但背景控制更难 |

选择时不要只看“HRP 活性高”，还要看非特异性背景、推荐稀释比例、保存缓冲液和是否适配当前底物。

## 使用策略

常见 ELISA 中 streptavidin-HRP 作为单独一步加入，孵育后必须充分洗涤，才能加入 TMB。R&D Systems 和 BioLegend 的 ELISA protocol 都把 enzyme conjugate/avidin-HRP 后的洗涤作为进入底物显色前的重要步骤。参考：[R&D Systems ELISA protocols](https://www.rndsystems.com/resources/protocols)；[BioLegend sandwich ELISA protocol](https://www.biolegend.com/en-us/protocols/sandwich-elisa-protocol)。

关键注意：

- 按说明书稀释，优先使用推荐 diluent。
- 现用现稀释，不要长时间室温放置。
- 避免使用含叠氮钠的工作体系，因为 sodium azide（叠氮钠）可能抑制 HRP 活性。
- 避光和低温保存，避免反复冻融。
- 加 TMB 前必须洗去游离 streptavidin-HRP。
- 不要让金属污染、强酸碱或氧化还原试剂影响 HRP。

## 常见异常与 troubleshooting

| 异常 | 可能原因 | 调整方向 |
| --- | --- | --- |
| 全板背景高 | streptavidin-HRP 过浓、洗涤不足、封闭差 | 降低浓度，增加洗涤，优化封闭 |
| 标准曲线信号弱 | HRP 失活、TMB 失效、生物素化抗体不足 | 换新 HRP/TMB，检查检测抗体浓度 |
| 高浓度孔很快饱和 | HRP 过量或显色时间过长 | 降低 HRP 浓度或缩短显色时间 |
| 孔间差异大 | 加液节奏不一致或洗涤残液不同 | 用多道移液枪，校准洗板流程 |
| 阴性孔也显色 | 非特异性吸附或游离 biotin/HRP 残留 | 增加洗涤，检查试剂污染 |

## 购买建议

商业 kit 优先使用配套 streptavidin-HRP 或 avidin-HRP。自建 ELISA 时，建议选择明确标注 ELISA validated（已验证用于 ELISA）的产品，并优先购买小包装试用，先做梯度稀释确定背景和动态范围。

长期项目中不要频繁更换 streptavidin-HRP 厂家或批号。即使目标抗体不变，酶标物活性和背景差异也可能改变整条标准曲线。

## 记录模板

中文记录：

```text
试剂名称：
厂家/货号/批号：
偶联形式：streptavidin-HRP / avidin-HRP / NeutrAvidin-HRP
保存条件：
工作稀释比例：
稀释液：
孵育时间/温度：
配套生物素化抗体：
底物体系：
显色时间：
空白 OD：
最高标准品 OD：
异常观察：
```

English record:

```text
Reagent name:
Vendor/catalog/lot:
Conjugate format: streptavidin-HRP / avidin-HRP / NeutrAvidin-HRP
Storage condition:
Working dilution:
Diluent:
Incubation time/temperature:
Matched biotinylated antibody:
Substrate system:
Development time:
Blank OD:
Top standard OD:
Notes/abnormal observations:
```

## 小结

链霉亲和素-HRP 是生物素化检测体系的信号转换器。它的浓度、保存和洗涤控制，会把抗体识别差异放大成最终 OD 差异，也可能把非特异性背景一起放大。

## 参考来源

- [BioLegend sandwich ELISA protocol](https://www.biolegend.com/en-us/protocols/sandwich-elisa-protocol)
- [R&D Systems ELISA protocols](https://www.rndsystems.com/resources/protocols)
- [Thermo Fisher Overview of ELISA](https://www.thermofisher.com/us/en/home/life-science/protein-biology/protein-biology-learning-center/protein-biology-resource-library/pierce-protein-methods/overview-elisa.html)
