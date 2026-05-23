# NC膜

## 一句话定义

NC membrane（Nitrocellulose membrane，硝酸纤维素膜，中文常叫 NC 膜）是一种常用蛋白转印膜，常用于 [Western blot](<../用(实验流程内容篇)/Western blot.md>)、[Dot blot](<../用(实验流程内容篇)/Dot blot.md>) 和部分核酸/蛋白杂交实验。

NC 膜的核心特点是易润湿、背景相对低、操作流程简单；主要局限是机械强度低于 [PVDF膜](PVDF膜.md)，不太适合反复 stripping and reprobing（剥离抗体后重新孵育）。Thermo Fisher、Bio-Rad、CST 和 Abcam 的 Western blot protocol 都将 nitrocellulose 与 PVDF 列为常规膜材选择。[参考：Thermo Fisher Western Blot Protocols](https://www.thermofisher.com/uk/en/home/life-science/protein-biology/protein-biology-learning-center/protein-gel-electrophoresis-information/western-blot-protocols.html)；[参考：CST Western Blot Protocol](https://www.cellsignal.com/learn-and-support/protocols/protocol-western)

![Western blot膜、转膜缓冲液、Ponceau S与ECL示意图](<../z_asset/材/Western blot膜和检测/wb-membrane-transfer-detection-reference-zh.png>)

## 核心用途

- 常规 Western blot 转膜。
- 高丰度或中等丰度蛋白检测。
- 希望降低背景、减少 PVDF 激活步骤的实验。
- Dot blot 或 slot blot 等点样检测。
- 初学者或快速验证型 WB。

## NC膜的优势

NC 膜最明显的优势是“好润湿、低背景、少一步”。它通常不需要 100% 甲醇预激活，直接在水或转膜缓冲液中润湿即可进入转膜流程。对于常规细胞裂解液、目标丰度不低、只检测一两个目标蛋白的 WB，NC 膜经常能给出干净的背景。

这类优势的反面是：NC 膜更脆，反复夹取、长时间洗膜、剥离再孵育时更容易出现破损、边缘卷曲或信号不稳定。如果你的实验设计本身需要在同一张膜上反复检测多个 target，PVDF 往往更合适。

## NC膜 vs PVDF膜

| 问题 | 更倾向 NC 膜 | 更倾向 PVDF 膜 |
| --- | --- | --- |
| 目标蛋白丰度 | 高丰度或中等丰度 | 低丰度、珍贵样本 |
| 背景要求 | 希望背景更低 | 可接受通过封闭和洗膜优化背景 |
| 操作步骤 | 希望少一步甲醇激活 | 能规范完成甲醇激活 |
| 机械强度 | 常规一次检测 | 多次剥离、反复检测 |
| 成本和便利性 | 更关注简单和成本 | 更关注保留率和耐操作性 |

## 孔径选择

| 孔径 | 适合目标 | 说明 |
| --- | --- | --- |
| 0.45 μm | 多数常规蛋白 | 最常用选择 |
| 0.2 μm | 小分子量蛋白，常见经验阈值是 ≤20 kDa | 减少穿膜，但转膜和洗膜条件要更细致 |

NC 膜和 PVDF 膜一样，也要根据目标蛋白大小选择孔径。小蛋白信号弱时，不要只怀疑抗体，也要检查是否用了过大孔径或过强转膜条件。

## 使用 protocol

### 润湿和平衡

1. 按凝胶大小裁切 NC 膜。
2. 将膜放入水或转膜缓冲液中充分润湿。
3. 转入预冷 [转膜缓冲液](转膜缓冲液.md) 中平衡。
4. 与凝胶、滤纸和海绵垫一起组装转膜夹层。

NC 膜不需要像 PVDF 那样用 100% 甲醇激活。若使用某些特殊 NC 产品或厂家说明书要求特殊预处理，应以产品说明为准。

### 组装与转膜

从负极到正极的常见湿转顺序为，夹层中的 [转膜海绵垫](转膜海绵垫.md) 和 [滤纸](滤纸.md) 要提前充分浸透：

```text
海绵垫
滤纸
凝胶
NC膜
滤纸
海绵垫
```

蛋白从凝胶向膜迁移，膜要放在靠近正极的一侧。组装时用干净滚轮或移液管轻轻赶走气泡，避免局部无信号。

## 注意事项

- NC 膜较脆，夹取时尽量夹边缘，不要反复折叠。
- NC 膜干燥后可能变脆，后续再润湿时也可能不均一。
- 如果要进行多次 stripping/reprobing，优先考虑 PVDF。
- NC 膜背景低不等于不用优化封闭；[脱脂奶粉](脱脂奶粉.md)、[BSA](BSA.md)、抗体稀释和洗膜都仍然重要。
- 若使用荧光检测体系，要确认膜本身的荧光背景是否适合。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 膜破裂或卷曲 | 夹取粗暴、膜太干、洗膜过强 | 用镊子夹边缘，减少折叠和干湿剧烈变化 |
| 局部空白 | 夹层有气泡、膜未充分润湿 | 组装前充分润湿，赶气泡 |
| 小蛋白信号弱 | 孔径太大或转膜过强 | 换 0.2 μm，缩短转膜或降低电流 |
| stripping 后信号差 | NC 不耐反复剥离 | 改用 PVDF 或重新跑胶 |
| 背景仍然高 | 抗体过浓、封闭不合适、洗膜不足 | 优化封闭液，增加 [TBST](TBST.md) 洗膜 |

## 购买和记录建议

购买 NC 膜时应记录品牌、货号、孔径、尺寸、是否 supported nitrocellulose（支撑型硝酸纤维素膜）、是否适合化学发光或荧光检测。支撑型 NC 膜通常机械强度更好，适合需要更多操作的 WB。

中文记录模板：

```text
NC 膜品牌：
货号：
批号：
孔径：
尺寸：
是否支撑型：
润湿方式：
平衡缓冲液：
转膜条件：
目标蛋白分子量：
检测方式：
备注：
```

English record template:

```text
NC membrane brand:
Catalog number:
Lot number:
Pore size:
Format / size:
Supported nitrocellulose: yes / no
Wetting method:
Equilibration buffer:
Transfer condition:
Target protein molecular weight:
Detection method:
Notes:
```

## 小结

NC 膜是常规 WB 中非常实用的低背景膜材。它适合快速、干净、一次性检测，但不适合把同一张膜当作长期反复使用的载体。选择 NC 膜时，重点记录孔径、是否支撑型、转膜条件和目标蛋白分子量。

## 参考来源

- [Thermo Fisher Western Blot Protocols](https://www.thermofisher.com/uk/en/home/life-science/protein-biology/protein-biology-learning-center/protein-gel-electrophoresis-information/western-blot-protocols.html)
- [CST Western Blot Protocol](https://www.cellsignal.com/learn-and-support/protocols/protocol-western)
- [Abcam Western Blot Protocol](https://www.abcam.com/en-us/technical-resources/protocols/western-blot)
