# Western blot

![Western blot summary abstract graph](<../z_asset/用/Western blot/western-blot-summary-abstract-en.png>)

![Western blot 中文概要图](<../z_asset/用/Western blot/western-blot-summary-abstract-zh.png>)

## 一句话定义

Western blot（Western blotting，蛋白质免疫印迹/蛋白质印迹，实验室常简称 WB）是一种先用凝胶电泳按分子量分离蛋白，再把蛋白转移到膜上，并用特异性抗体检测目标蛋白的实验方法。

本页默认 protocol 场景是：哺乳动物细胞全蛋白裂解液，使用 [RIPA裂解液](<../材(实验耗材工具篇)/RIPA裂解液.md>) 或类似裂解体系，BCA（Bicinchoninic acid assay，二喹啉甲酸蛋白定量法）定量，SDS-PAGE（Sodium dodecyl sulfate-polyacrylamide gel electrophoresis，十二烷基硫酸钠-聚丙烯酰胺凝胶电泳）分离，PVDF（Polyvinylidene difluoride，聚偏二氟乙烯）膜或 NC（Nitrocellulose，硝酸纤维素）膜转膜，HRP（Horseradish peroxidase，辣根过氧化物酶）二抗和 ECL（Enhanced chemiluminescence，增强化学发光）检测。

## 发明历史与命名

Western blot 的底层技术来自几步关键发展。

Laemmli 在 1970 年建立了经典 SDS-PAGE 蛋白分离体系，使变性蛋白可以主要按分子量在聚丙烯酰胺凝胶中分离。[参考：Laemmli 1970](https://pubmed.ncbi.nlm.nih.gov/5432063/)

Towbin、Staehelin 和 Gordon 在 1979 年发表了将蛋白从聚丙烯酰胺凝胶电转移到硝酸纤维素膜，并用抗体检测的经典方法。[参考：Towbin et al. 1979](https://pubmed.ncbi.nlm.nih.gov/388439/)

Burnette 在 1981 年使用 “Western blotting” 这个名称，和 DNA 的 Southern blot、RNA 的 Northern blot 形成命名呼应。[参考：Burnette 1981](https://pubmed.ncbi.nlm.nih.gov/6266278/)

所以 WB 的核心不是“显影一条带”，而是一条组合 workflow：蛋白样本质量、凝胶分离、转膜效率、抗体特异性、曝光线性范围和归一化策略共同决定结果可信度。

## 应用场景

Western blot 常用于：

- 检测目标蛋白是否表达。
- 比较处理组和对照组之间的蛋白表达量变化。
- 判断蛋白分子量是否符合预期。
- 检测 cleavage（剪切）、degradation（降解）或 isoform（异构体）变化。
- 检测 phosphorylation（磷酸化）或其他 post-translational modification（PTM，翻译后修饰），常需要 [磷酸酶抑制剂](<../材(实验耗材工具篇)/磷酸酶抑制剂.md>) 和更严格的样本处理。
- 验证过表达、敲低、敲除、标签蛋白或通路激活。
- 作为 [免疫共沉淀](免疫共沉淀.md) 后的检测步骤，即 IP-WB（Immunoprecipitation-Western blot，免疫沉淀-蛋白质免疫印迹）。

不适合优先使用 WB 的情况：

- 需要高通量绝对定量时，通常 [ELISA](ELISA.md)、多重免疫检测或 [蛋白质谱](蛋白质谱.md) 更合适。
- 需要细胞或组织空间定位时，通常 [免疫染色](免疫染色.md) 或 [免疫组化](免疫组化.md) 更合适。
- 只想确认总蛋白复杂度或纯化条带时，SDS-PAGE + Coomassie staining（考马斯亮蓝染色）可能更直接。
- 目标蛋白抗体质量很差时，WB 结果可能比其他方法更难解释。

## 实验目的

一次标准 WB 通常回答这些问题：

- 目标蛋白是否存在。
- 条带大小是否符合预期分子量。
- 目标蛋白在不同组之间是否改变。
- 处理是否影响蛋白剪切、降解或修饰。
- 目标蛋白信号是否能在合适线性范围内被可靠定量。

WB 通常是 semi-quantitative（半定量）实验，不应把曝光饱和、背景很高或 loading control（上样内参）不稳定的结果当作可靠定量。

## 简要实验原理

SDS（Sodium dodecyl sulfate，十二烷基硫酸钠）会使多数蛋白变性并带上相对一致的负电荷。[SDS-PAGE](SDS-PAGE.md) 中，蛋白在电场中通过聚丙烯酰胺凝胶，主要按分子量大小分离。随后通过电转移把蛋白从凝胶转移到 [PVDF膜](<../材(实验耗材工具篇)/PVDF膜.md>) 或 [NC膜](<../材(实验耗材工具篇)/NC膜.md>) 上。

膜上的蛋白先用 blocking buffer（封闭液）占据非特异性结合位点，再用 [一抗](<../材(实验耗材工具篇)/一抗.md>) 识别目标蛋白，用 [二抗](<../材(实验耗材工具篇)/二抗.md>) 识别一抗。HRP 标记二抗遇到 [ECL发光液](<../材(实验耗材工具篇)/ECL发光液.md>) 后产生化学发光，由 [化学发光成像仪](<../材(实验耗材工具篇)/化学发光成像仪.md>) 记录信号。

Cell Signaling Technology、Bio-Rad、Thermo Fisher 和 Abcam 的 WB protocol 都采用类似主线：样本制备、凝胶电泳、转膜、封闭、抗体孵育、洗膜、检测和分析。[参考：CST Western Blot Protocol](https://www.cellsignal.com/learn-and-support/protocols/protocol-western)；[参考：Bio-Rad Western Blotting Guide](https://www.bio-rad.com/applications-technologies/western-blotting-immunodetection-techniques?ID=PQEEPOBWLN4A)；[参考：Thermo Fisher Western Blot Protocols](https://www.thermofisher.com/uk/en/home/life-science/protein-biology/protein-biology-learning-center/protein-gel-electrophoresis-information/western-blot-protocols.html)；[参考：Abcam Western Blot Protocol](https://www.abcam.com/en-us/technical-resources/protocols/western-blot)

## 流程总览

```text
实验设计与对照
-> 细胞收集
-> 裂解和抑制蛋白降解/去磷酸化
-> 澄清裂解液
-> 蛋白定量
-> 加样缓冲液变性
-> SDS-PAGE 分离
-> 转膜
-> 转膜验证
-> 封闭
-> 一抗孵育
-> 洗膜
-> 二抗孵育
-> 洗膜
-> ECL 显影成像
-> 灰度定量和归一化
-> 统计与结果解释
```

## 所需试剂、耗材和设备

| 类别 | 常用内容 | 作用 |
| --- | --- | --- |
| 样本裂解 | [RIPA裂解液](<../材(实验耗材工具篇)/RIPA裂解液.md>)、[蛋白酶抑制剂](<../材(实验耗材工具篇)/蛋白酶抑制剂.md>)、[磷酸酶抑制剂](<../材(实验耗材工具篇)/磷酸酶抑制剂.md>) | 提取全蛋白，减少降解和去磷酸化 |
| 蛋白定量 | [BCA蛋白定量试剂盒](<../材(实验耗材工具篇)/BCA蛋白定量试剂盒.md>) | 统一各样本上样量 |
| 电泳 | [SDS-PAGE凝胶](<../材(实验耗材工具篇)/SDS-PAGE凝胶.md>)、[Laemmli上样缓冲液](<../材(实验耗材工具篇)/Laemmli上样缓冲液.md>)、[DTT](<../材(实验耗材工具篇)/DTT.md>) 或 [β-巯基乙醇](<../材(实验耗材工具篇)/β-巯基乙醇.md>)、[蛋白Marker](<../材(实验耗材工具篇)/蛋白Marker.md>)、[电泳槽](<../材(实验耗材工具篇)/电泳槽.md>) | 变性蛋白并按分子量分离 |
| 转膜 | [PVDF膜](<../材(实验耗材工具篇)/PVDF膜.md>) 或 [NC膜](<../材(实验耗材工具篇)/NC膜.md>)、[转膜缓冲液](<../材(实验耗材工具篇)/转膜缓冲液.md>)、[转膜槽](<../材(实验耗材工具篇)/转膜槽.md>)、滤纸、海绵垫 | 把蛋白从凝胶转移到膜上 |
| 封闭和洗膜 | [TBST](<../材(实验耗材工具篇)/TBST.md>)、[脱脂奶粉](<../材(实验耗材工具篇)/脱脂奶粉.md>) 或 [BSA](<../材(实验耗材工具篇)/BSA.md>) | 降低非特异性结合和背景 |
| 抗体 | [一抗](<../材(实验耗材工具篇)/一抗.md>)、[二抗](<../材(实验耗材工具篇)/二抗.md>) | 特异性识别目标蛋白并产生检测信号 |
| 检测 | [ECL发光液](<../材(实验耗材工具篇)/ECL发光液.md>)、[化学发光成像仪](<../材(实验耗材工具篇)/化学发光成像仪.md>) | 记录目标条带 |
| 质量控制 | [Ponceau S](<../材(实验耗材工具篇)/Ponceau S.md>)、总蛋白染色、loading control 抗体 | 检查转膜和归一化 |
| 安全 | [实验手套](<../材(实验耗材工具篇)/实验手套.md>)、护目镜、废液容器 | 处理 [丙烯酰胺](<../材(实验耗材工具篇)/丙烯酰胺.md>)、[甲醇](<../材(实验耗材工具篇)/甲醇.md>)、还原剂和 ECL 废液 |

## 默认 protocol：哺乳动物细胞全蛋白 ECL-WB

这个 protocol 是起点，不是唯一标准。抗体说明书、目标蛋白大小、膜类型和仪器系统应优先结合本实验室条件优化。

### 实验设计与对照

**怎么做**：实验前确定目标蛋白、预期分子量、处理组、对照组、重复数、上样量、膜类型、抗体稀释比、归一化方法和预期分析方式。

**为什么**：WB 失败常常不是某一步突然出错，而是实验设计没有控制关键变量。尤其是目标蛋白是否低丰度、是否磷酸化、分子量是否很大或很小，会直接影响裂解、胶浓度、转膜和封闭策略。

**注意事项**：

- 至少设置 untreated control（未处理对照）或 vehicle control（溶剂对照）。
- 条件允许时设置 positive control（阳性对照）和 negative control（阴性对照）。
- 对新抗体建议设置 no-primary control（无一抗对照）来判断二抗非特异性背景。
- 定量实验应尽量包含 biological replicates（生物学重复）。

**替代方案**：如果只是确认抗体是否能识别目标蛋白，可先做小规模 pilot blot（预实验）。如果目标蛋白表达极低，可能需要富集、免疫沉淀或更灵敏 ECL。

**出错后果**：没有对照时，弱条带、多条带或背景无法判断是生物学差异、抗体问题还是技术问题。

### 样本收集与裂解

**怎么做**：细胞用冷 [PBS](<../材(实验耗材工具篇)/PBS.md>) 快速洗涤，置冰上加入含蛋白酶/磷酸酶抑制剂的预冷裂解液，充分裂解后离心澄清，取上清作为全蛋白裂解液。磷酸化蛋白检测时，全程低温并加入磷酸酶抑制剂。

**为什么**：裂解步骤决定样本是否代表真实蛋白状态。蛋白降解、去磷酸化、裂解不充分或样本反复冻融都会改变 WB 结果。

**注意事项**：

- 细胞收集后尽量快速处理，样本保持在冰上。
- RIPA 裂解较强，适合多数全蛋白，但可能影响某些蛋白复合物或膜蛋白状态。
- 裂解液中加入抑制剂后通常不宜长时间放置。
- 样本反复冻融会导致降解和条带拖尾。

**替代方案**：核蛋白、膜蛋白、线粒体蛋白或磷酸化蛋白可以使用专门裂解体系。若后续要做 IP-WB，不应默认使用强 RIPA。

**出错后果**：裂解不充分会导致目标蛋白低估；降解会出现额外低分子量条带；去磷酸化会导致磷酸化信号消失。

### 蛋白定量

**怎么做**：用 [蛋白定量](蛋白定量.md) 方法测定每个样本总蛋白浓度，常用 BCA。根据浓度调整样本，使各孔上样总蛋白量一致。

**为什么**：WB 比较的是不同样本目标蛋白信号。如果总蛋白上样量差异很大，后续归一化会变得不可靠。

**注意事项**：

- BCA 对还原剂、去污剂和螯合剂有兼容性限制，需查试剂盒说明书。
- 标准曲线要覆盖样本浓度范围。
- 样本最好稀释到同一缓冲背景，减少基质差异。

**替代方案**：Bradford、Lowry 或荧光定量可以替代 BCA，但要确认裂解液兼容性。

**出错后果**：蛋白浓度估计错误会导致上样不一致，出现“目标蛋白变化”假象。

### 加样缓冲液与变性

**怎么做**：将样本与 Laemmli sample buffer（Laemmli 上样缓冲液）和还原剂混合，通常 95°C 5 min 或 70°C 10 min 变性。膜蛋白、多跨膜蛋白或易聚集蛋白可降低温度或缩短时间。

**为什么**：SDS 和还原剂帮助蛋白变性并断开二硫键，使蛋白按分子量分离。

**注意事项**：

- DTT（Dithiothreitol，二硫苏糖醇）和 β-mercaptoethanol（β-巯基乙醇）都是还原剂，但气味、稳定性和安全性不同。
- 部分膜蛋白高温煮样会聚集，反而跑不进胶。
- 上样前短暂离心，避免气泡和样本残留在管壁。

**替代方案**：非还原 WB 可用于检测二硫键依赖构象或多聚体，但解释逻辑不同。

**出错后果**：变性不足会出现异常迁移；过度加热会使部分蛋白聚集或降解。

### SDS-PAGE 胶浓度选择与电泳

**怎么做**：根据目标蛋白分子量选择胶浓度。一般小蛋白用高浓度胶，大蛋白用低浓度胶或梯度胶。上样等量蛋白，加入蛋白 Marker，先低电压跑过浓缩胶，再提高电压分离。

| 目标蛋白大小 | 常见选择 | 注意 |
| --- | --- | --- |
| <20 kDa | 12%-15% 胶或 Tris-Tricine 系统 | 小蛋白易跑出胶，转膜也容易穿透 |
| 20-80 kDa | 8%-12% 胶 | 多数常规蛋白适用 |
| 80-200 kDa | 6%-8% 胶或梯度胶 | 大蛋白分离和转膜都需要优化 |
| >200 kDa | 低浓度胶、梯度胶、延长转膜 | 避免凝胶过密和转膜不足 |

**为什么**：胶浓度决定分辨率和迁移范围。胶浓度不合适时，目标蛋白可能分不开、跑出胶或被卡住。

**注意事项**：

- 不同厂家预制胶缓冲体系不同，不能只看百分比。
- 上样过多会导致条带变宽、拖尾和定量失真。
- 电泳过热会导致条带弯曲和分辨率下降。

**替代方案**：预制胶稳定方便；自制胶成本低、可调性强，但对操作一致性要求高。

**出错后果**：胶浓度不合适会导致目标条带模糊、重叠或无法进入分离范围。

### 转膜

**怎么做**：电泳结束后，将凝胶和膜组成转膜夹层。湿转常见夹层从负极到正极为：海绵垫、滤纸、凝胶、膜、滤纸、海绵垫。蛋白带负电，从凝胶向正极方向迁移，因此膜必须放在凝胶的正极侧。

![Western blot 转膜夹层参考图](<../z_asset/用/Western blot/western-blot-transfer-reference-zh.png>)

**为什么**：转膜把蛋白从厚凝胶转移到膜表面，便于抗体接触。膜方向反了，蛋白会迁移离开膜，几乎无信号。

**注意事项**：

- PVDF 膜疏水，通常需要甲醇预活化；NC 膜一般不需要甲醇活化。
- 夹层中气泡会阻断局部电流，导致膜上出现空白斑。
- 大蛋白转膜慢，小蛋白可能转过头，需要调整时间、电流、电压、甲醇浓度和膜孔径。
- 转膜发热会导致条带扩散或凝胶变形，湿转常需冷却。

**替代方案**：

| 转膜方式 | 优点 | 局限 |
| --- | --- | --- |
| Wet transfer（湿转） | 适合大蛋白，条件温和，可控性强 | 时间长，缓冲液多，易发热 |
| Semi-dry transfer（半干转） | 速度快，缓冲液少 | 对大蛋白和复杂条件不一定稳定 |
| Rapid dry transfer（快速干转） | 操作快，系统化程度高 | 依赖专用耗材和设备，成本高 |

**出错后果**：转膜不足会导致胶中仍有蛋白；转膜过度会导致小蛋白穿膜；气泡会导致局部无条带；PVDF 未活化会导致信号弱。

### 转膜验证

**怎么做**：转膜后可用 Ponceau S（丽春红 S）或总蛋白染色快速检查膜上蛋白条带和转膜均一性。

**为什么**：如果转膜不均或某几道上样明显失败，后面的抗体检测再漂亮也不适合定量。

**注意事项**：

- Ponceau S 可逆，适合快速检查。
- 总蛋白染色也可作为 normalization（归一化）依据之一。
- 检查时保留原始图像，方便结果解释。

**替代方案**：部分荧光总蛋白染料可与荧光 WB 兼容。

**出错后果**：不检查转膜就进入抗体孵育，后面很难判断无信号是抗体问题还是转膜问题。

### 封闭

**怎么做**：膜用 5% 脱脂奶粉/TBST 或 3%-5% BSA/TBST 室温封闭约 1 h，或按抗体说明书优化。

**为什么**：封闭液占据膜上非特异性结合位点，降低抗体背景。

**注意事项**：

- 磷酸化蛋白检测常优先考虑 BSA，因为奶粉含酪蛋白等磷酸化蛋白，可能增加背景或干扰。
- AP（Alkaline phosphatase，碱性磷酸酶）检测体系不宜使用含磷酸盐缓冲液，通常用 TBS/TBST。PBS 笔记中也提到 AP 系统应避免 PBS。[PBS](<../材(实验耗材工具篇)/PBS.md>) 与 [TBST](<../材(实验耗材工具篇)/TBST.md>) 的选择会影响免疫检测。
- 封闭过强可能降低弱信号，封闭不足会提高背景。

**替代方案**：商业封闭液、鱼明胶、无蛋白封闭液等可用于特殊抗体或高背景体系。

**出错后果**：封闭不合适会造成高背景、弱信号或非特异条带。

### 一抗孵育

**怎么做**：根据抗体说明书稀释一抗，常见起点为 1:500-1:2000，4°C 过夜或室温 1-2 h。目标蛋白低丰度或抗体亲和力低时，4°C 过夜通常更稳。

**为什么**：一抗决定目标识别特异性，是 WB 成败最关键变量之一。

**注意事项**：

- 记录抗体品牌、货号、批号、宿主、克隆号、稀释比例和孵育条件。
- 新抗体应确认目标分子量、阳性对照、阴性对照和文献/厂家验证信息。
- 磷酸化抗体通常对样本处理、封闭液和洗涤条件更敏感。

**替代方案**：直接标记一抗可减少二抗步骤；不同 clone 或 polyclonal/monoclonal 抗体可能表现差异很大。

**出错后果**：一抗特异性差会出现多条带；稀释过浓会高背景，过稀会弱信号。

### 洗膜

**怎么做**：用 TBST 洗膜，常见起点为 3 次，每次 5-10 min，摇床轻柔摇动。

**为什么**：洗膜去除未结合抗体，降低背景。

**注意事项**：

- Tween-20 浓度通常为 0.05%-0.1%，但不同抗体可优化。
- 洗涤太弱会高背景，太强可能降低弱亲和信号。
- 洗膜容器要干净，避免旧 ECL 或抗体残留。

**替代方案**：TBS、TBST、PBST 或更高盐浓度洗液可用于不同体系，但 AP 和磷酸化检测要特别注意缓冲体系。

**出错后果**：洗涤不足高背景；洗涤过度弱信号。

### 二抗孵育

**怎么做**：选择与一抗宿主匹配的 HRP-conjugated secondary antibody（HRP 标记二抗），常见起点为 1:2000-1:10000，室温孵育约 1 h。

**为什么**：二抗把一抗识别事件转换为可检测信号。二抗种属或同型不匹配会导致无信号。

**注意事项**：

- 一抗是 rabbit、mouse、goat 等不同宿主时，二抗必须对应。
- 同时检测多个目标时，需要避免二抗交叉反应。
- 二抗过浓是高背景常见原因。

**替代方案**：荧光二抗可用于 fluorescent Western blot（荧光 WB），适合多通道和更宽线性范围，但需要对应成像仪。

**出错后果**：二抗错配无信号；二抗太浓高背景；二抗污染会出现斑点。

### ECL 检测与成像

**怎么做**：膜与 ECL 发光液短时间反应后，用化学发光成像仪采集不同曝光时间图像。优先选择不饱和、背景低、条带清楚的曝光用于定量。

**为什么**：ECL 信号有线性范围。曝光饱和后，条带再深也不能代表蛋白更多。

**注意事项**：

- 采集多个曝光时间，避免只保留最亮图。
- 原始图像和曝光参数要保存。
- 切膜检测多个蛋白时，要记录切膜位置和目标分子量范围。

**替代方案**：荧光 WB 的线性范围通常更宽，可同时检测多个目标和 loading control。

**出错后果**：曝光饱和会造成定量错误；曝光太短会漏掉弱信号；膜干裂会背景升高。

### 条带定量和归一化

**怎么做**：用 ImageJ、Image Lab 或其他分析软件测量 band intensity（条带灰度/强度），扣除背景后用 loading control 或 total protein normalization（总蛋白归一化）进行校正。

**为什么**：WB 的目标不是只展示图片，而是可解释、可重复的相对定量。

**注意事项**：

- 用于定量的曝光必须在线性范围内。
- housekeeping protein（管家蛋白）如 β-actin、GAPDH、Tubulin 在某些处理下也会变化，不能无条件视为稳定。
- 对大范围处理、分化、凋亡、代谢改变或细胞骨架变化实验，总蛋白归一化往往更稳。
- 定量结果应报告重复数和统计方法。

Eaton 等关于 total protein analysis 的文章指出，总蛋白染色可避免单一 housekeeping protein 在某些实验条件下不稳定带来的偏差。[参考：Eaton et al. 2013](https://pubmed.ncbi.nlm.nih.gov/23283663/)

**替代方案**：如果使用双通道荧光 WB，可同时检测目标和内参，减少剥膜再孵育带来的变量。

**出错后果**：使用饱和条带或不稳定内参会产生误导性定量。

### Stripping 和 reprobing

**怎么做**：必要时用 stripping buffer（剥膜液）去除已结合抗体，再重新封闭和孵育另一抗体。

**为什么**：同一张膜可检测多个目标，尤其是目标蛋白和内参或磷酸化/总蛋白配对。

**注意事项**：

- stripping 会损失膜上蛋白，尤其是低丰度或小分子量蛋白。
- 强剥膜可能降低后续信号。
- 最好先检测低丰度目标，再检测高丰度目标。

**替代方案**：切膜、荧光多通道或平行上样可减少 stripping。

**出错后果**：剥膜不充分会残留旧信号；剥膜过强会造成目标信号丢失。

## 关键变量与选择策略

### PVDF vs NC

| 膜 | 优点 | 局限 | 适合 |
| --- | --- | --- | --- |
| PVDF 膜 | 机械强度高，蛋白结合力强，适合 stripping/reprobing | 需要甲醇活化，背景可能较高 | 低丰度蛋白、大蛋白、多次检测 |
| NC 膜 | 背景低，容易润湿，操作简单 | 脆，蛋白结合力略低，不适合多次剥膜 | 常规目标、低背景需求 |

### 封闭液选择

| 封闭液 | 优点 | 注意 |
| --- | --- | --- |
| 5% 脱脂奶粉 | 便宜，常规目标好用 | 磷酸化蛋白、某些抗体和生物素系统可能不适合 |
| BSA | 成分更定义，常用于磷酸化蛋白 | 成本较高，有些抗体背景仍需优化 |
| 商业封闭液 | 一致性好，省时间 | 成本高，配方不透明 |

### 检测方式选择

| 方式 | 优点 | 局限 |
| --- | --- | --- |
| HRP/ECL 化学发光 | 灵敏、普及、成本适中 | 线性范围有限，曝光易饱和 |
| 荧光 WB | 多通道、线性范围更宽 | 需要荧光成像仪，避光和背景控制更严格 |
| AP 显色/化学发光 | 某些体系稳定 | 不能用 PBS/PBST，速度和灵敏度依系统不同 |

## 结果解析

| 观察 | 可能解释 | 下一步 |
| --- | --- | --- |
| 单一条带，大小正确 | 抗体特异性较好，样本状态可能可靠 | 继续看重复和定量 |
| 条带大小偏高 | 修饰、二聚体、糖基化、未完全还原或蛋白迁移异常 | 查文献和抗体说明书，改变变性/还原条件 |
| 条带大小偏低 | 剪切、降解、非特异识别 | 加强抑制剂和低温处理，设置阳性/阴性对照 |
| 多条带 | isoform、降解、非特异结合或上样过多 | 优化抗体稀释、封闭和洗膜，验证抗体 |
| 背景高 | 封闭不足、抗体太浓、洗膜不足、膜污染 | 降低抗体浓度，增加洗膜，换封闭液 |
| 所有组都很强且饱和 | 曝光过长或上样过多 | 缩短曝光、降低上样量或抗体浓度 |
| 内参变化明显 | 上样不一致或处理影响内参 | 使用总蛋白归一化或换内参 |

## 异常结果与 troubleshooting

| 异常 | 常见原因 | 处理 |
| --- | --- | --- |
| 无条带 | 样本无目标蛋白、转膜方向反、抗体失效、二抗不匹配、ECL 失效 | 检查 Ponceau S、阳性对照、抗体和 ECL |
| 弱条带 | 上样少、转膜不足、抗体过稀、ECL 灵敏度不足 | 增加上样量、优化转膜、提高抗体浓度或更换 ECL |
| 多条带 | 非特异抗体、样本降解、上样过多 | 加抑制剂、减少上样、优化封闭和抗体 |
| 高背景 | 抗体太浓、封闭不合适、洗膜不足、膜干燥 | 降低抗体浓度、换封闭液、增加洗膜 |
| 条带拖尾 | 样本盐浓度高、上样过多、蛋白降解或胶问题 | 重新制样、降低上样量、换胶 |
| 条带弯曲 | 电泳过热、盐浓度不一致、上样孔异常 | 降低电压、换缓冲液、统一样本背景 |
| 膜上斑点 | 抗体沉淀、灰尘、膜污染、ECL 不均 | 过滤抗体、清洁容器、均匀加 ECL |
| 转膜不均 | 气泡、夹层不平、滤纸尺寸不合适 | 重新夹层，赶走气泡，裁剪一致 |
| 小蛋白丢失 | 转膜过度、膜孔径太大 | 用 0.2 µm 膜、缩短转膜、降低电流 |
| 大蛋白转不出 | 胶浓度高、转膜时间短、甲醇过高 | 降低胶浓度、延长湿转、降低甲醇或加 SDS |

Thermo Fisher 的 Western blot troubleshooting 页面对高背景、弱信号、无条带和非特异条带等问题有系统排查建议。[参考：Thermo Fisher Western Blot Troubleshooting](https://www.thermofisher.com/us/en/home/life-science/protein-biology/protein-biology-learning-center/protein-gel-electrophoresis-information/western-blot-troubleshooting.html)

## WB vs 相关方法

| 方法 | 更适合回答 | WB 的优势/局限 |
| --- | --- | --- |
| [ELISA](ELISA.md) | 大量样本中某蛋白浓度或分泌量 | ELISA 更高通量，WB 能看分子量和条带形态 |
| [免疫染色](免疫染色.md) / [免疫组化](免疫组化.md) | 蛋白在细胞或组织中的定位 | WB 定量更直接，但丢失空间信息 |
| [Dot blot](<Dot blot.md>) | 快速筛查抗原/抗体反应 | Dot blot 不分子量，特异性解释较弱 |
| Coomassie SDS-PAGE | 总蛋白条带和纯度 | 不依赖抗体，但不能特异检测低丰度目标 |
| [免疫共沉淀](免疫共沉淀.md)-WB | 蛋白相互作用或特定复合物 | 可富集低丰度目标，但变量更多 |
| [蛋白质谱](蛋白质谱.md) | 蛋白组学、修饰位点、绝对/相对定量 | 信息量大，但成本、数据分析和样本要求更高 |

## 安全与废弃物

WB 涉及多种需要注意的化学品和设备风险。

- [丙烯酰胺](<../材(实验耗材工具篇)/丙烯酰胺.md>) 单体具有神经毒性和潜在致癌风险，自制胶时必须按 [化学品安全](<../实验室安全/化学品安全.md>) 和 [个人防护装备](<../实验室安全/个人防护装备.md>) 要求操作。
- [甲醇](<../材(实验耗材工具篇)/甲醇.md>) 易燃且有毒，转膜缓冲液配制和 PVDF 活化时注意通风和废液分类。
- β-巯基乙醇气味强、刺激性高，应在通风条件下处理。
- 电泳和转膜涉及电源和缓冲液，注意漏液、短路和过热。
- 含 ECL、甲醇、SDS、丙烯酰胺残留的废液不要随意倒入水槽，按 [实验室废弃物处理](<../实验室安全/实验室废弃物处理.md>) 执行。

## 推荐记录模板

中文模板：

```text
实验日期：
操作者：
目标蛋白：
预期分子量：
样本来源：
处理条件：
裂解液：
蛋白酶/磷酸酶抑制剂：
蛋白浓度测定方法：
上样量：
上样缓冲液和还原剂：
变性条件：
凝胶类型/浓度：
电泳条件：
膜类型和孔径：
转膜方式和条件：
转膜验证方法：
封闭液和时间：
一抗：品牌/货号/批号/宿主/克隆号/稀释比/孵育条件
二抗：品牌/货号/批号/稀释比/孵育条件
洗膜条件：
ECL 试剂：
成像仪和曝光时间：
归一化方法：
重复数：
原始图像路径：
分析软件和参数：
异常和备注：
```

English template:

```text
Date:
Operator:
Target protein:
Expected molecular weight:
Sample source:
Treatment conditions:
Lysis buffer:
Protease / phosphatase inhibitors:
Protein assay method:
Loading amount:
Sample buffer and reducing agent:
Denaturation condition:
Gel type / percentage:
Electrophoresis condition:
Membrane type and pore size:
Transfer mode and condition:
Transfer check:
Blocking buffer and time:
Primary antibody: brand / catalog no. / lot no. / host / clone / dilution / incubation
Secondary antibody: brand / catalog no. / lot no. / dilution / incubation
Wash condition:
ECL reagent:
Imager and exposure time:
Normalization method:
Replicates:
Raw image path:
Analysis software and settings:
Problems and notes:
```

## 厂商与资料建议

WB 相关试剂和设备不建议只按品牌名记录，但常用资料可以参考：

- [Cell Signaling Technology](<../番外/试剂厂商/Cell Signaling Technology.md>)：抗体、磷酸化抗体和 protocol 资料较强。
- [Bio-Rad](<../番外/试剂厂商/Bio-Rad.md>)：电泳、转膜、成像和 WB 教程体系完整。
- [Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>) / [赛默飞](<../番外/试剂厂商/赛默飞.md>)：蛋白定量、预制胶、转膜、ECL 和 troubleshooting 资料多。
- [Abcam](<../番外/试剂厂商/Abcam.md>)：抗体和入门 protocol 资料丰富。
- [碧云天](<../番外/试剂厂商/碧云天.md>)：国内常用蛋白裂解、BCA、ECL 和 WB 相关试剂。

实际记录时必须写：品牌、公司、货号、批号、抗体稀释比、膜类型、ECL 类型、成像条件和分析参数。

## 图片和参考图源

本页插图为原创示意图，用于帮助理解 WB workflow、转膜夹层和关键实物辨认。实际设备和耗材外观会因厂家系统不同而不同，购买和操作前应查看具体说明书。

可参考的官方图文资料：

- CST Western blot protocol：抗体孵育和检测步骤参考。[参考：CST Western Blot Protocol](https://www.cellsignal.com/learn-and-support/protocols/protocol-western)
- Bio-Rad Western blotting guide：电泳、转膜、封闭、检测和问题排查参考。[参考：Bio-Rad Western Blotting Guide](https://www.bio-rad.com/applications-technologies/western-blotting-immunodetection-techniques?ID=PQEEPOBWLN4A)
- Thermo Fisher Western blot protocols：膜、转膜、封闭、检测和 troubleshooting 参考。[参考：Thermo Fisher Western Blot Protocols](https://www.thermofisher.com/uk/en/home/life-science/protein-biology/protein-biology-learning-center/protein-gel-electrophoresis-information/western-blot-protocols.html)
- Abcam Western blot protocol：入门步骤和常见条件参考。[参考：Abcam Western Blot Protocol](https://www.abcam.com/en-us/technical-resources/protocols/western-blot)

## 小结

Western blot 是一个经典但变量很多的蛋白检测 workflow。真正可靠的 WB 不是“跑胶、转膜、孵抗体、显影”这么简单，而是要同时控制样本质量、上样量、胶浓度、膜类型、转膜效率、封闭体系、抗体特异性、曝光线性范围和归一化策略。

写 protocol 时，最重要的是把每个关键变量记录下来。WB 的结果图只是最后一层，前面的样本、膜、抗体、曝光和分析参数才是判断结果能否复现的基础。
