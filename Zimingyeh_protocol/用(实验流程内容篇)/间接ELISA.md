# 间接ELISA

Indirect ELISA（间接 ELISA，间接酶联免疫吸附试验）通常是先将 [抗原](<../番外/补充知识/抗原.md>) 包被在板面，再加入样本或待测 [一抗](<../材(实验耗材工具篇)/一抗.md>)，最后用 enzyme-conjugated secondary antibody（酶标 [二抗](<../材(实验耗材工具篇)/二抗.md>)）检测一抗。它最常见的用途之一是测 antibody titer（[抗体滴度](<../番外/补充知识/抗体滴度.md>)）。

![ELISA 类型与流程示意图](../z_asset/用/ELISA/elisa-summary-abstract-zh.png)

图源：Image2 生成的 ELISA summary graph abstract；右侧 indirect ELISA 小图展示“抗原固定，未标记一抗结合，再由 HRP 二抗检测”的结构。

## 核心逻辑

间接 ELISA 的检测链条是：

```text
抗原包被板面
-> 封闭
-> 样本中的一抗结合抗原
-> 酶标二抗识别一抗
-> 加底物
-> 读信号
```

它之所以叫“间接”，是因为目标一抗本身通常没有酶标记，而是通过 [HRP标记二抗](<../材(实验耗材工具篇)/HRP标记二抗.md>) 等二抗间接产生信号。

Thermo Fisher 和 Bio-Rad 的 ELISA guide 都将 indirect ELISA 作为常见类型之一，强调其二抗放大带来的灵敏度优势，同时也提示二抗相关背景和交叉反应风险。参考：[Thermo Fisher Overview of ELISA](https://www.thermofisher.com/us/en/home/life-science/protein-biology/protein-biology-learning-center/protein-biology-resource-library/pierce-protein-methods/overview-elisa.html)；[Bio-Rad ELISA types guide](https://www.bio-rad-antibodies.com/elisa-types-direct-indirect-sandwich-competitive-elisa.html)。

## 适合什么时候用

| 场景 | 是否适合 | 原因 |
| --- | --- | --- |
| 抗体滴度检测 | 很适合 | 样本中待测对象就是抗体 |
| 免疫动物血清筛查 | 很适合 | 可比较不同血清稀释度 |
| 抗体克隆筛选 | 适合 | 可筛选是否识别固定抗原 |
| 复杂样本中测抗原浓度 | 通常不适合 | 间接 ELISA 更偏抗体检测 |
| 需要高特异性蛋白定量 | 不如夹心 ELISA | 缺少两抗体夹心确认 |

间接 ELISA 的经典问题是：“样本里有没有能识别这个抗原的抗体？强度或滴度是多少？”

## 实验目的

- 检测免疫后血清是否产生抗体。
- 比较不同抗体克隆对同一抗原的结合。
- 测定抗体滴度。
- 筛查抗体是否能识别重组蛋白或抗原片段。

如果目标是测细胞培养上清中的某个 cytokine 浓度，一般不选间接 ELISA，而选 [夹心ELISA](夹心ELISA.md)。

## 实验操作

### 抗原包被

**怎么做**：将纯化抗原包被在酶标板孔中，孵育后洗板。

**为什么重要**：间接 ELISA 的特异性入口是板面抗原。抗原构象、纯度和包被方式会影响一抗识别。

**注意事项**：

- 抗原最好是纯化蛋白、肽段或明确抗原制备物。
- 构象表位可能因包被吸附而破坏。
- 包被浓度需要优化。

**替代方案**：可用 biotinylated antigen + streptavidin plate 提高方向性，或用捕获标签固定抗原。

**出错后果**：抗原吸附不良会全板低信号；抗原不纯会增加假阳性。

### 封闭

**怎么做**：加入 [封闭液](<../材(实验耗材工具篇)/封闭液.md>)，封闭裸露板面。

**为什么重要**：样本中的免疫球蛋白和血清蛋白容易非特异吸附板面，封闭不足会让阴性血清也有背景。

**注意事项**：

- 血清样本背景高时，blocker 选择很重要。
- 使用 milk/casein 时注意是否含目标相关成分或交叉反应背景。
- 不同二抗对 blocker 兼容性不同。

**替代方案**：可比较 BSA、casein、鱼明胶或商业 antibody diluent。

**出错后果**：阴性对照高、cutoff 难设、低滴度样本无法区分。

### 一抗或样本孵育

**怎么做**：将血清、杂交瘤上清或纯化一抗按梯度稀释后加入板孔。

**为什么重要**：间接 ELISA 常用于滴度测定，因此样本稀释梯度比单点 OD 更有信息量。

**注意事项**：

- 血清样本通常需要从一定稀释倍数开始，减少基质背景。
- 每个样本应做系列稀释，而不是只测一个稀释点。
- 需要阴性血清和阳性血清。

**替代方案**：抗体很强时扩大稀释范围；抗体很弱时降低起始稀释倍数或延长孵育。

**出错后果**：只测单点会误判滴度；样本太浓会背景高；样本太稀会漏检低滴度抗体。

### 酶标二抗孵育

**怎么做**：加入识别一抗物种和同种型的 HRP 标记二抗，例如 goat anti-mouse IgG-HRP 或 goat anti-rabbit IgG-HRP。

**为什么重要**：二抗提供信号放大，也带来通用性。一个酶标二抗可以检测很多同宿主一抗。

**注意事项**：

- 二抗必须匹配一抗宿主和 isotype。
- 二抗过浓会增加背景。
- 若样本来自复杂物种，可能需要交叉吸附二抗降低 [交叉反应](<../番外/补充知识/交叉反应.md>)。

**替代方案**：可使用 isotype-specific secondary antibody，或改用直接标记一抗减少二抗背景。

**出错后果**：二抗宿主不匹配会无信号；二抗交叉反应会假阳性。

### 显色、读板和滴度判断

**怎么做**：加入 TMB 等底物，终止后读取 OD450。抗体滴度常根据某个 cutoff 下最后一个阳性稀释度判断。

**为什么重要**：间接 ELISA 的结果常不是单纯浓度，而是“稀释到哪里仍然阳性”。

**注意事项**：

- cutoff 需要用阴性对照或背景分布确定。
- 不同批次板和抗原包被会影响 OD，跨批比较需要 QC。
- 滴度结果必须写明判断规则。

**替代方案**：可用 endpoint titer、area under dilution curve 或标准化阳性对照归一化。

**出错后果**：cutoff 随意设定会导致阳性/阴性判断不稳定；不同板直接比较 OD 可能误导。

## 优点和局限

| 维度 | 间接ELISA |
| --- | --- |
| 信号 | 有二抗放大，通常强于直接 ELISA |
| 成本 | 二抗通用，成本较低 |
| 灵活性 | 高，可检测不同一抗或血清 |
| 背景风险 | 二抗交叉反应和血清背景较常见 |
| 定量对象 | 更适合抗体检测和滴度 |
| 抗原要求 | 抗原要能稳定包被并保留表位 |

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 阴性血清 OD 高 | 封闭不足、二抗过浓、血清基质背景 | 优化 blocker，稀释二抗和血清 |
| 阳性样本无信号 | 抗原构象破坏、二抗不匹配、一抗滴度低 | 换抗原固定方式，检查二抗物种 |
| 所有样本都很高 | 二抗非特异结合或洗板不足 | 增加洗板，换交叉吸附二抗 |
| 滴度不稳定 | cutoff 不合理、板间差异大 | 加入阳性/阴性 QC，固定判断规则 |
| 不同抗原间比较困难 | 包被效率不同 | 不要把不同抗原 OD 直接等同为亲和力 |

## 记录模板

中文模板：

```text
实验类型：间接ELISA
包被抗原：
抗原浓度：
样本类型：
起始稀释倍数：
稀释梯度：
二抗名称：
二抗稀释倍数：
封闭液：
cutoff规则：
阳性对照：
阴性对照：
滴度结果：
备注：
```

English template:

```text
Assay format: indirect ELISA
Coated antigen:
Antigen concentration:
Sample type:
Starting dilution:
Dilution series:
Secondary antibody:
Secondary antibody dilution:
Blocking buffer:
Cutoff rule:
Positive control:
Negative control:
Titer result:
Notes:
```

## 总结

间接 ELISA 的本质是“抗原固定，检测样本中的抗体”。它比直接 ELISA 更灵敏、更通用，尤其适合抗体滴度和抗体筛选；但二抗背景、血清基质和 cutoff 设定会明显影响结果。做间接 ELISA 时，不要只看一个 OD 值，要看稀释曲线和对照体系。

## 参考来源

- [Thermo Fisher Overview of ELISA](https://www.thermofisher.com/us/en/home/life-science/protein-biology/protein-biology-learning-center/protein-biology-resource-library/pierce-protein-methods/overview-elisa.html)
- [Bio-Rad ELISA types guide](https://www.bio-rad-antibodies.com/elisa-types-direct-indirect-sandwich-competitive-elisa.html)
