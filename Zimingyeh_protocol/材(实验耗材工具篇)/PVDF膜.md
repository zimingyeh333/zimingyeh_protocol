# PVDF膜

## 一句话定义

PVDF membrane（Polyvinylidene difluoride membrane，聚偏二氟乙烯膜，中文常叫 PVDF 膜）是一种疏水性蛋白转印膜，常用于 [Western blot](<../用(实验流程内容篇)/Western blot.md>) 中承接从凝胶转移出来的蛋白。

PVDF 膜的核心特点是蛋白结合能力强、机械强度高、适合多次剥离再孵育；代价是背景更容易升高，而且使用前通常需要用 [甲醇](甲醇.md) 激活。Thermo Fisher、Bio-Rad 和 Abcam 的 Western blot 资料都把 PVDF 与 nitrocellulose（NC，硝酸纤维素）列为最常用的两类转印膜。[参考：Thermo Fisher Western Blot Protocols](https://www.thermofisher.com/uk/en/home/life-science/protein-biology/protein-biology-learning-center/protein-gel-electrophoresis-information/western-blot-protocols.html)；[参考：Bio-Rad Western Blotting Guide](https://www.bio-rad.com/applications-technologies/western-blotting-immunodetection-techniques?ID=PQEEPOBWLN4A)；[参考：Abcam Western Blot Protocol](https://www.abcam.com/en-us/technical-resources/protocols/western-blot)

![Western blot膜、转膜缓冲液、Ponceau S与ECL示意图](<../z_asset/材/Western blot膜和检测/wb-membrane-transfer-detection-reference-zh.png>)

## 核心用途

- Western blot 蛋白转膜。
- 低丰度目标蛋白检测。
- 需要 stripping and reprobing（剥离抗体后重新孵育）的膜。
- 需要较强机械强度、反复洗膜、长时间孵育或多轮成像的实验。
- 部分 N-terminal sequencing（N 端测序）或蛋白后续分析场景。

## PVDF vs NC膜

| 维度 | PVDF 膜 | [NC膜](NC膜.md) |
| --- | --- | --- |
| 英文全称 | Polyvinylidene difluoride membrane | Nitrocellulose membrane |
| 中文 | 聚偏二氟乙烯膜 | 硝酸纤维素膜 |
| 蛋白结合能力 | 通常更强 | 通常较强但低于 PVDF |
| 使用前处理 | 需要甲醇激活，再转入水/缓冲液 | 多数情况下可直接用水或转膜缓冲液润湿 |
| 背景风险 | 较高，需要封闭和洗膜更充分 | 往往背景较低 |
| 机械强度 | 高，适合反复操作 | 较脆，干湿转换和夹取时更容易破 |
| 多次检测 | 更适合 stripping/reprobing | 不太适合反复剥离 |
| 典型选择 | 低丰度蛋白、珍贵样本、多轮检测 | 高丰度蛋白、快速常规检测、低背景优先 |

简单说：如果目标蛋白低丰度、抗体需要多轮优化、膜要反复剥离再检测，优先考虑 PVDF；如果目标丰度高、希望背景低、流程简单，NC 膜可能更顺手。

## 孔径选择

| 孔径 | 适合目标 | 选择逻辑 |
| --- | --- | --- |
| 0.45 μm | 多数中高分子量蛋白，常见经验阈值是 >20 kDa | 适合常规 WB，转膜较快 |
| 0.2 μm | 小分子量蛋白，常见经验阈值是 ≤20 kDa | 减少小蛋白穿膜，提高保留率 |

孔径不是越小越好。0.2 μm 对小蛋白更友好，但转膜阻力更大，背景和洗膜条件也可能需要重新优化。对于大分子蛋白，真正关键通常是胶浓度、转膜时间、甲醇和 [十二烷基硫酸钠](十二烷基硫酸钠.md) 配比，而不是单纯把孔径改小。

## 使用 protocol

### 裁膜

按凝胶大小裁切 PVDF 膜，尽量略大于凝胶但不要过大。膜太大会浪费抗体和 ECL；膜太小会丢失边缘泳道或 marker。

操作时建议用干净镊子夹取膜边缘，避免手套直接触碰中央区域。手指油脂、粉尘和压痕都可能造成局部背景或白斑。

### 甲醇激活

1. 将 PVDF 膜完全浸入 100% 甲醇，常见处理时间为 15-60 s，直到膜由疏水状态变为均匀润湿。
2. 立即转入纯水中短暂平衡，使膜不再排斥水相。
3. 再转入预冷 [转膜缓冲液](转膜缓冲液.md) 中平衡。

甲醇激活的意义是让疏水 PVDF 从“排水状态”进入可被水相缓冲液充分浸润的状态。如果激活不充分，转膜时会出现局部不转、斑块状信号缺失或背景不均。

### 组装转膜夹层

常见湿转顺序是从负极到正极，其中 [转膜海绵垫](转膜海绵垫.md) 负责支撑夹层，[滤纸](滤纸.md) 负责均匀传导缓冲液和电流：

```text
海绵垫
滤纸
凝胶
PVDF膜
滤纸
海绵垫
```

蛋白在 SDS 体系中整体带负电，会向正极方向迁移，所以膜应位于凝胶靠近正极的一侧。组装时最重要的是去除凝胶和膜之间的气泡。气泡会阻断电流和蛋白迁移，最终形成圆形或不规则空白区。

## 可调策略

| 目标 | 可调参数 | 可能代价 |
| --- | --- | --- |
| 小蛋白保留更好 | 换 0.2 μm PVDF，避免过长转膜 | 背景可能增加，转膜速度下降 |
| 大蛋白转膜更充分 | 降低甲醇比例、延长转膜、低温湿转、少量 SDS | 蛋白与膜结合可能下降，小蛋白可能穿膜 |
| 降低背景 | 增强封闭和洗膜，优化抗体稀释，考虑 NC 膜 | 低丰度信号可能变弱 |
| 多轮检测 | 使用 PVDF，缩短曝光前不必要处理 | stripping 仍可能损伤抗原 |

## 注意事项

- PVDF 膜激活后不要让膜局部变干。局部干燥会造成润湿不均和高背景。
- 甲醇易燃、有毒，需按 [化学品安全](<../实验室安全/化学品安全.md>) 规范处理。
- 低分子量蛋白建议优先考虑 0.2 μm 膜，并缩短过强转膜条件。
- PVDF 结合力强并不等于一定信号强；封闭、抗体质量和 [ECL发光液](<ECL发光液.md>) 灵敏度同样关键。
- 如果后续要做考马斯染色、质谱或测序，应先确认所用 PVDF 产品与下游方法兼容。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 局部没有条带 | 膜未完全激活、夹层有气泡 | 重新规范甲醇激活，组装时滚除气泡 |
| 整体背景高 | PVDF 结合强、封闭不足、抗体过浓 | 延长封闭，增加 [TBST](TBST.md) 洗膜，降低抗体浓度 |
| 小蛋白信号弱 | 小蛋白穿膜、孔径太大、转膜过强 | 换 0.2 μm，缩短转膜或降低电流 |
| 大蛋白转不上去 | 甲醇比例过高、转膜时间不足、胶浓度偏高 | 降低甲醇、延长低温湿转，优化胶浓度 |
| 膜上有白点 | 手套/镊子污染、气泡、膜局部干燥 | 用洁净镊子夹边缘，保持膜全程湿润 |

## 购买和记录建议

购买时需要记录材质、孔径、尺寸、是否预切、是否低荧光背景、是否适合化学发光或荧光检测。不同品牌 PVDF 膜的背景、机械强度和亲水化处理可能不同，换批号或换品牌时应重新评估曝光和封闭条件。

中文记录模板：

```text
PVDF 膜品牌：
货号：
批号：
孔径：
尺寸：
是否预切：
激活甲醇浓度和时间：
平衡缓冲液：
转膜条件：
目标蛋白分子量：
检测方式：
是否 stripping/reprobing：
备注：
```

English record template:

```text
PVDF membrane brand:
Catalog number:
Lot number:
Pore size:
Format / size:
Pre-cut: yes / no
Methanol activation condition:
Equilibration buffer:
Transfer condition:
Target protein molecular weight:
Detection method:
Stripping / reprobing: yes / no
Notes:
```

## 小结

PVDF 膜适合把 WB 做得更稳、更可重复，尤其适合低丰度蛋白和多轮检测。但它需要正确甲醇激活，也更依赖封闭、洗膜和抗体条件优化。选择 PVDF 时不要只写“用了 PVDF”，至少要记录孔径、品牌、批号和激活方式。

## 参考来源

- [Thermo Fisher Western Blot Protocols](https://www.thermofisher.com/uk/en/home/life-science/protein-biology/protein-biology-learning-center/protein-gel-electrophoresis-information/western-blot-protocols.html)
- [Bio-Rad Western Blotting Guide](https://www.bio-rad.com/applications-technologies/western-blotting-immunodetection-techniques?ID=PQEEPOBWLN4A)
- [Abcam Western Blot Protocol](https://www.abcam.com/en-us/technical-resources/protocols/western-blot)
