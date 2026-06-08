# Nycodenz

Nycodenz 是一种以 [iohexol（碘海醇）](碘海醇.md) 为化学基础的 non-ionic iodinated density gradient medium（非离子碘化密度梯度介质），常用于自定义密度梯度，分离细胞、细胞器、膜组分、病毒颗粒或其他生物颗粒。它和 [OptiPrep](OptiPrep.md) 属于相邻的碘化密度梯度介质路线，但二者不是同一个商品，也不是同一种使用便利度。

![OptiPrep 和 Nycodenz 碘化密度梯度介质示意图](../z_asset/材/密度梯度介质/iodinated-density-gradient-media-optiprep-nycodenz.png)

图源：Image2 生成的碘化密度梯度介质 summary abstract graph。Nycodenz 更强调自配和方法开发，使用时必须记录称量、溶解、buffer、density（密度）、osmolality（渗透压）和离心条件。

## 定义与命名

Nycodenz 是 [Axis-Shield](<../番外/试剂厂商/Axis-Shield.md>) 密度梯度介质体系中的产品名，核心化学基础可理解为碘海醇类非离子碘化小分子。官方产品页将 Nycodenz 列为 density gradient medium（密度梯度介质）产品。参考：[Axis-Shield Nycodenz](https://www.axis-shield-density-gradient-media.com/products/nycodenz)。

和 OptiPrep 常见的 60% w/v 碘克沙醇无菌储备液不同，Nycodenz 的实际使用更偏“按实验需要配制 stock solution（储备液）和 working gradient（工作梯度）”。这给方法开发更多自由，也要求更严格的称量、溶解、过滤、渗透压和密度记录。

## 核心特点

| 特点 | 实验意义 |
| --- | --- |
| 非离子碘化小分子 | 可提供较高密度，同时避免单纯高盐体系造成的强渗透压压力 |
| 自定义配制空间大 | 适合建立特殊密度窗口或复现特定文献 protocol |
| 可形成连续/不连续梯度 | 可用于颗粒、细胞器或特殊细胞分离 |
| 通常比即用型介质更依赖操作 | 配制误差会直接影响分离结果 |
| 和 OptiPrep 相邻但不同 | 不能把 Nycodenz 条件直接等同于 OptiPrep 条件 |

Nycodenz 的优势是灵活，代价是 protocol 变量更多。它更适合对密度梯度本身有明确需求的人，而不是只想完成常规 PBMC 分离的人。

## 主要用途

| 用途 | 为什么可能选择 Nycodenz |
| --- | --- |
| [密度梯度离心](<../用(实验流程内容篇)/密度梯度离心.md>) 方法开发 | 可以按目标颗粒密度设计多种梯度 |
| [细胞器分离](<../用(实验流程内容篇)/细胞器分离.md>) | 可用于亚细胞组分分离和富集 |
| [病毒纯化](<../用(实验流程内容篇)/病毒纯化.md>) | 可通过浮力密度差异提高颗粒纯度 |
| 特殊细胞分离 | 当标准 PBMC 1.077 g/mL 介质不适合目标细胞时可探索 |
| 文献复现 | 某些老 protocol 或专门 protocol 指定 Nycodenz 梯度 |

如果只做 [peripheral blood mononuclear cells（PBMC，外周血单个核细胞）](<../番外/补充知识/外周血单个核细胞.md>)常规分离，Nycodenz 通常不是第一选择。它更像“密度梯度工程材料”，而不是标准血液分离即用液。

## Nycodenz vs OptiPrep/Percoll/Ficoll 类介质

| 项目 | Nycodenz | OptiPrep | Percoll | Ficoll/Lymphoprep/Histopaque |
| --- | --- | --- | --- | --- |
| 主要化学基础 | iohexol（碘海醇）/Nycodenz | iodixanol（碘克沙醇） | polyvinylpyrrolidone（PVP，聚乙烯吡咯烷酮）包被胶体二氧化硅 | Ficoll/polysucrose 相关体系 |
| 常见使用形态 | 自配储备液或工作液 | 60% w/v 无菌储备液 | 胶体悬液储备介质 | 固定密度即用液 |
| 灵活度 | 很高 | 高 | 高 | 低到中 |
| 操作门槛 | 较高 | 中到高 | 中到高 | 较低 |
| 适合 | 方法开发、特殊梯度、文献复现 | 脆弱颗粒/细胞器/EV/病毒梯度 | 特殊细胞和细胞器分离 | 常规 PBMC/MNC |
| 最大风险 | 配制和渗透压记录不清 | 稀释和梯度条件记录不清 | 等渗配制和颗粒残留 | 忽略品牌/货号/密度差异 |

一句话判断：如果想要“即用、标准、分 PBMC”，看 Ficoll/Lymphoprep/Histopaque；如果想要“灵活设计梯度”，才考虑 Nycodenz、OptiPrep 或 Percoll。

## 配制与使用思路

Nycodenz 的关键不是记住某一个固定配方，而是建立可复现的配制记录。一个通用设计清单如下：

```text
确认目标样本和目标颗粒：
查目标颗粒预期密度范围：
决定梯度类型：连续 / 不连续 / 浮力密度 / 速率区带
计算 Nycodenz 储备液浓度：
选择缓冲液并确认 pH、盐浓度和渗透压：
充分溶解，必要时过滤除菌：
按目标密度配制各层工作液：
缓慢分层，避免界面混合：
记录上样量、转子、x g、时间、温度、brake：
离心后收集 fraction 并检测 marker：
根据纯度和回收率优化密度窗口：
```

对于活细胞或功能性细胞器，渗透压和处理时间尤其重要。对于病毒或细胞外囊泡等颗粒，后续洗涤、buffer exchange（缓冲液置换）和 marker 检测更关键。

## 使用要点

| 变量 | 为什么重要 | 建议 |
| --- | --- | --- |
| 称量准确性 | 直接影响最终密度 | 使用校准天平，记录称量量和终体积 |
| 溶解状态 | 未完全溶解会造成局部密度不均 | 完全溶解后再定容和过滤 |
| buffer | 影响渗透压、pH 和样本稳定性 | 不要把文献里的 buffer 随意替换 |
| 渗透压 | 活细胞/细胞器敏感 | 需要活性读数时建议测 osmolality |
| 梯度层 | 分辨率和回收率取决于层次设计 | 先小规模优化，再固定 SOP |
| 离心参数 | 影响迁移距离和 band 清晰度 | 记录 x g、转子、温度和 brake |
| 下游兼容性 | 残留介质可能影响检测 | 设计洗涤、稀释或换液步骤 |

## 购买与选择建议

购买 Nycodenz 时，优先确认已有 protocol 是否指定了 Nycodenz，还是仅仅需要“碘化密度梯度介质”。如果 protocol 允许替代，OptiPrep 可能因为是 60% w/v 无菌储备液而更方便；如果 protocol 明确要求自定义配制或历史上使用 Nycodenz，就应保持同一产品体系并做批号记录。

推荐记录：

```text
Nycodenz, supplier, catalog number, lot number, powder/stock concentration, buffer, target density, osmolality, gradient format, sterilization method
```

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 梯度不稳定或 band 模糊 | 溶解不充分、层间混合、密度计算错误 | 重新配制，慢速分层，核对浓度和体积 |
| 活率下降 | 渗透压或 pH 不合适、离心过强 | 调整 buffer，测渗透压，降低处理强度 |
| 复现不了文献结果 | 只记录 Nycodenz 百分比，缺少 buffer/转子/温度 | 补全所有离心和配制变量 |
| 纯度低 | 目标和污染物密度重叠 | 改用连续梯度或增加二次分离 |
| 下游检测异常 | Nycodenz 残留或洗涤不足 | 增加洗涤、稀释或 buffer exchange |
| 误当 PBMC 介质使用 | 没有按 PBMC 1.077 g/mL 标准体系验证 | 回到 Lymphoprep/Ficoll/Histopaque 或做并行验证 |

## 推荐记录模板

中文记录模板：

```text
产品名称：Nycodenz
品牌/供应商：
货号：
批号：
储存条件：
开封日期：
有效期：
粉末称量量：
储备液浓度：
溶解缓冲液：
过滤/除菌方式：
目标样本：
目标颗粒/细胞：
目标密度或工作百分比：
渗透压：
梯度类型：连续/不连续/浮力密度/速率区带
每层体积与顺序：
上样体积：
转子型号：
离心条件：
温度：
brake设置：
band位置：
fraction收集方式：
洗涤或换液方式：
下游检测：
异常现象：
```

English record template:

```text
Product name: Nycodenz
Brand/supplier:
Catalog number:
Lot number:
Storage condition:
Open date:
Expiration date:
Powder mass:
Stock concentration:
Dissolving buffer:
Filtration/sterilization method:
Sample type:
Target particle/cell:
Target density or working percentage:
Osmolality:
Gradient type: continuous/discontinuous/buoyant/rate-zonal
Layer volumes and order:
Sample loading volume:
Rotor model:
Centrifugation condition:
Temperature:
Brake setting:
Band position:
Fraction collection:
Wash or buffer exchange:
Downstream assay:
Abnormal observation:
```

## 小结

Nycodenz 是高度灵活的碘化密度梯度介质，更适合方法开发、特殊颗粒/细胞器分离和文献复现。它不是常规 PBMC 分离的一步式默认选择；真正使用时，必须把配制、密度、渗透压、buffer、转子和 fraction 收集方式写清楚。

## 参考来源

- [Axis-Shield Nycodenz](https://www.axis-shield-density-gradient-media.com/products/nycodenz)
- [Axis-Shield OptiPrep](https://www.axis-shield-density-gradient-media.com/products/optiprep)
- [Axis-Shield Density Gradient Media products](https://www.axis-shield-density-gradient-media.com/products)
- [Axis-Shield Lymphoprep](https://www.axis-shield-density-gradient-media.com/products/lymphoprep)
