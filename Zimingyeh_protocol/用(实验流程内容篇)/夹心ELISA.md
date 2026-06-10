# 夹心ELISA

Sandwich ELISA（夹心 ELISA，夹心酶联免疫吸附试验）是最常用于蛋白定量的 [ELISA](ELISA.md) 形式之一。它用 [捕获抗体](<../材(实验耗材工具篇)/捕获抗体.md>) 固定目标抗原，再用 [检测抗体](<../材(实验耗材工具篇)/检测抗体.md>) 识别目标抗原的另一个表位，让抗原被两只抗体“夹”在中间。

![ELISA 类型与流程示意图](../z_asset/用/ELISA/elisa-summary-abstract-zh.png)

图源：Image2 生成的 ELISA summary graph abstract；主流程和右侧 sandwich ELISA 小图展示捕获抗体、抗原、检测抗体、HRP/TMB 到 OD450 的定量链条。

## 核心逻辑

夹心 ELISA 的典型链条是：

```text
捕获抗体包被
-> 封闭
-> 样本抗原被捕获
-> 检测抗体结合抗原另一个表位
-> HRP或其他酶标物产生信号
-> 标准曲线换算浓度
```

夹心 ELISA 的特异性来自“两只抗体同时识别同一个目标”。这也是它比直接/间接 ELISA 更适合复杂样本中低丰度蛋白定量的原因。BioLegend 的 sandwich ELISA protocol 和 R&D Systems 的 ELISA protocols 都将捕获、封闭、样本孵育、检测抗体、酶标物、底物和读板作为核心步骤。参考：[BioLegend sandwich ELISA protocol](https://www.biolegend.com/en-us/protocols/sandwich-elisa-protocol)；[R&D Systems ELISA protocols](https://www.rndsystems.com/resources/protocols)。

## 适合什么时候用

| 场景 | 是否适合 | 原因 |
| --- | --- | --- |
| 细胞培养上清中 cytokine 定量 | 很适合 | 复杂样本中灵敏且特异 |
| 血清/血浆蛋白定量 | 常用 | 可配合样本稀释和基质验证 |
| 组织裂解液中特定蛋白 | 可用 | 需验证裂解液基质影响 |
| 小分子或半抗原检测 | 通常不适合 | 常缺少两个可同时结合的表位 |
| 抗体滴度检测 | 不如间接 ELISA | 待测对象通常是抗体本身 |

如果目标分子足够大、能被两只非竞争抗体同时识别，夹心 ELISA 通常是定量检测的优先选择。

## 实验目的

- 测量样本中某个蛋白或细胞因子的浓度。
- 比较处理组和对照组分泌蛋白水平。
- 做药物处理、刺激实验或培养条件优化的 readout。
- 对多个批次样本做稳定定量。

## 抗体对是夹心ELISA的核心

夹心 ELISA 需要 matched antibody pair（配对抗体）：捕获抗体和检测抗体要识别同一目标的不同表位，并且互相不阻挡。

| 要素 | 为什么重要 |
| --- | --- |
| 捕获抗体 | 决定目标是否能从样本中被拉到板面 |
| 检测抗体 | 决定是否能在目标被捕获后继续识别 |
| 表位关系 | 两只抗体不能竞争同一表位 |
| 物种交叉 | 人、小鼠、大鼠等目标可能需要不同抗体对 |
| 标准品 | 必须和样本中的目标形式尽量匹配 |

商业 [ELISA试剂盒](<../材(实验耗材工具篇)/ELISA试剂盒.md>) 的价值很大一部分就在于抗体对、标准品、稀释液和曲线范围已经被验证过。

## 实验操作

### 捕获抗体包被

**怎么做**：将捕获抗体稀释到推荐浓度，加入酶标板孵育；预包被 kit 则跳过此步骤。

**为什么重要**：捕获抗体决定了复杂样本中目标分子的选择性入口。

**注意事项**：

- 捕获抗体浓度过低会灵敏度不足。
- 过高可能增加背景或消耗抗体。
- 板类型会影响抗体吸附。

**替代方案**：使用 pre-coated plate，或使用 biotinylated capture antibody + streptavidin plate。

**出错后果**：捕获失败会标准品和样本都低信号；包被不均会重复孔 CV 高。

### 封闭和洗板

**怎么做**：用 [封闭液](<../材(实验耗材工具篇)/封闭液.md>) 阻断裸露板面，并用含 Tween-20 的 wash buffer 洗去未结合成分。

**为什么重要**：夹心 ELISA 很灵敏，未结合检测抗体或 HRP 残留会显著放大背景。

**注意事项**：

- 封闭液要和抗体、样本和酶体系兼容。
- 洗板要足量、均一、可重复。
- 不要让板孔干燥。

**替代方案**：高背景时增加洗板次数、优化 Tween-20、比较 BSA/casein/商业 blocker。

**出错后果**：背景高、阴性孔高、低浓度样本无法区分。

### 标准品和样本孵育

**怎么做**：用标准品建立 [标准曲线](<../番外/补充知识/标准曲线.md>)，样本按预期浓度稀释后加入孔中孵育。

**为什么重要**：夹心 ELISA 的结果依赖样本 OD 落在曲线可定量范围内。

**注意事项**：

- 未知样本建议先做稀释预实验。
- 血清、血浆和组织裂解液需要关注 [基质效应](<../番外/补充知识/基质效应.md>)。
- 高浓度样本可能出现 [Hook效应](<../番外/补充知识/Hook效应.md>)。

**替代方案**：样本过高时稀释重测；目标过低时延长孵育或使用更灵敏 kit。

**出错后果**：超曲线范围的样本不能可靠换算；基质干扰会让稀释倍数换算不一致。

### 检测抗体和酶标物

**怎么做**：加入检测抗体，洗板后加入 HRP 标记二抗或 streptavidin-HRP。

**为什么重要**：检测抗体提供第二重识别，是夹心特异性的另一半。

**注意事项**：

- 检测抗体不能与捕获抗体竞争同一表位。
- biotin-streptavidin 体系要注意内源性 biotin 干扰。
- HRP 体系避免叠氮钠。

**替代方案**：可选直接 HRP 标记检测抗体、biotin 检测抗体 + streptavidin-HRP，或改用荧光/化学发光读出。

**出错后果**：抗体对不匹配会无信号；酶标物过浓会背景高。

### 显色、终止和读板

**怎么做**：加入 TMB，达到合适颜色后终止并读 OD450，再用 4PL/5PL 标准曲线换算浓度。

**为什么重要**：夹心 ELISA 的信号常跨越较宽浓度范围，曲线拟合和样本稀释决定结果是否可信。

**注意事项**：

- 不要让高标准孔过度显色。
- 终止液加入顺序与 TMB 加入顺序一致。
- 保留原始 OD、扣背景后 OD 和计算浓度。

**替代方案**：若样本浓度范围太宽，可分两套稀释倍数测定。

**出错后果**：读数饱和会低估高浓度样本；曲线拟合不当会造成系统误差。

## 优点和局限

| 维度 | 夹心ELISA |
| --- | --- |
| 特异性 | 高，两只抗体共同确认 |
| 灵敏度 | 通常较高 |
| 定量能力 | 强，适合标准曲线定量 |
| 样本兼容 | 可用于上清、血清、血浆、裂解液等，但需验证 |
| 开发难度 | 需要配对抗体 |
| 适合目标 | 蛋白、细胞因子、较大抗原 |
| 不适合目标 | 小分子、单表位目标 |

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 标准曲线无信号 | 捕获/检测抗体不匹配，标准品失活 | 换抗体对，检查标准品 |
| 样本有信号但标准曲线差 | 标准品复溶或稀释错误 | 重配标准品 |
| 高浓度样本低于预期 | Hook effect | 做系列稀释 |
| 重复孔 CV 高 | 洗板、移液或边缘效应 | 使用多道移液枪和稳定洗板 |
| 血清样本回收率差 | 基质效应 | 做 spike-and-recovery 和稀释线性 |
| 背景高 | 封闭不足、检测抗体或 HRP 过浓 | 优化 blocker、洗板和抗体浓度 |

## 记录模板

中文模板：

```text
实验类型：夹心ELISA
检测靶标：
样本类型：
试剂盒/抗体对：
捕获抗体：
检测抗体：
标准品范围：
样本稀释倍数：
封闭液：
洗板次数：
底物：
读板波长：
拟合方式：
QC结果：
备注：
```

English template:

```text
Assay format: sandwich ELISA
Target:
Sample type:
Kit / antibody pair:
Capture antibody:
Detection antibody:
Standard range:
Sample dilution factor:
Blocking buffer:
Wash cycles:
Substrate:
Reading wavelength:
Curve fit:
QC result:
Notes:
```

## 总结

夹心 ELISA 是复杂样本中做蛋白和细胞因子定量的主力方法。它的强项是特异性和灵敏度，弱点是必须依赖可靠抗体对和标准曲线。做夹心 ELISA 时，最重要的不是机械完成步骤，而是让样本落在曲线范围内，并用基质验证证明“测到的浓度真的可信”。

## 参考来源

- [BioLegend sandwich ELISA protocol](https://www.biolegend.com/en-us/protocols/sandwich-elisa-protocol)
- [R&D Systems ELISA protocols](https://www.rndsystems.com/resources/protocols)
- [Thermo Fisher Overview of ELISA](https://www.thermofisher.com/us/en/home/life-science/protein-biology/protein-biology-learning-center/protein-biology-resource-library/pierce-protein-methods/overview-elisa.html)
