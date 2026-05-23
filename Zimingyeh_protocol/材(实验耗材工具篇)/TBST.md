# TBST

## 一句话定义

TBST（Tris-buffered saline with Tween-20，含 Tween-20 的 Tris 缓冲盐水）是一种常用洗涤缓冲液，主要由 [TBS](TBS.md) 和 [Tween-20](<Tween-20.md>) 组成，广泛用于 [Western blot](<../用(实验流程内容篇)/Western blot.md>)、ELISA 和免疫染色中的洗膜、洗板或抗体稀释。

在 WB 中，TBST 的核心作用是洗去未结合或弱非特异结合的 [一抗](一抗.md) 和 [二抗](二抗.md)，降低背景，同时尽量保留特异性抗体-抗原结合。CST、Thermo Fisher、Bio-Rad 和 Abcam 的 WB protocol 都使用 TBS/TBST 或 PBS/PBST 作为常见洗涤体系。[参考：CST Western Blot Protocol](https://www.cellsignal.com/learn-and-support/protocols/protocol-western)；[参考：Abcam Western Blot Protocol](https://www.abcam.com/en-us/technical-resources/protocols/western-blot)

## 核心组成

| 成分 | 英文 | 作用 |
| --- | --- | --- |
| [Tris](Tris.md) | Tris base / Tris-HCl | 维持 pH |
| [氯化钠](氯化钠.md) | Sodium chloride, NaCl | 维持离子强度，降低非特异结合 |
| Tween-20 | Polyoxyethylene sorbitan monolaurate | 非离子表面活性剂，降低背景和非特异吸附 |
| 水 | ddH2O | 溶剂 |

Tween-20 是 TBST 区别于 TBS 的关键。它不是为了“洗得更干净”而无限加，过高会影响某些弱相互作用或降低弱信号。

## 常见配方

### 1× TBST

常见思路：

```text
1× TBS
0.05% Tween-20
```

不同实验室也会使用 0.1% Tween-20。对于背景高的 WB，可适当增加 Tween-20 或洗膜时间；对于弱信号，可能需要降低 Tween-20、缩短洗膜或优化抗体浓度。

### 10× TBS储液

TBS 常作为 10× 储液保存，使用前稀释为 1× 再加入 Tween-20。Tween-20 黏度较高，加入后需要充分混匀，避免局部浓度不均。

## TBST vs PBST

| 维度 | TBST | [PBST](PBST.md) |
| --- | --- | --- |
| 缓冲体系 | Tris-buffered saline | Phosphate-buffered saline |
| 中文 | 含 Tween-20 的 Tris 缓冲盐水 | 含 Tween-20 的磷酸盐缓冲盐水 |
| 常见用途 | WB 洗膜、抗体孵育 | ELISA、免疫染色、部分 WB |
| 注意点 | pH 受温度影响较明显 | 磷酸盐可能与某些体系不兼容 |
| 选择逻辑 | WB 中非常常见 | 更接近 [PBS](PBS.md) 体系 |

多数 WB 可以使用 TBST；如果抗体说明书明确推荐 PBST，应优先遵循说明书。换洗涤体系时要记录，因为背景和信号强度可能变化。

## 使用场景

- WB 一抗后洗膜。
- WB 二抗后洗膜。
- 配制部分抗体稀释液。
- ELISA 洗板。
- 免疫染色中的低强度洗涤。

TBST 不等于所有实验通用洗液。活细胞处理、细胞培养或需要严格离子组成的实验，不应直接把 TBST 当作 PBS 替代品。

## 使用 protocol

### WB洗膜

常见洗膜条件：

```text
TBST 5-10 min × 3 次
室温轻摇
```

二抗后洗膜通常更关键，可根据背景增加到 4-5 次。洗膜时膜应完全浸没并能自由晃动，膜盒太小或液体太少会造成局部洗不干净。

### 配制抗体稀释液

TBST 可与 BSA 或脱脂奶粉配合：

```text
TBST + 5% 脱脂奶粉
TBST + 5% BSA
```

磷酸化抗体通常更倾向 BSA/TBST，而不是脱脂奶粉/TBST。

## 注意事项

- Tween-20 加样量很小，移液误差会显著影响终浓度。
- TBST 长期放置可能污染，出现浑浊、异味或沉淀应弃用。
- 需要做 HRP-ECL 时，洗膜后不要让膜干。
- Tween-20 过多可能降低弱信号；过少可能背景高。
- 不同实验室的 TBST 配方不同，protocol 中必须写清 Tween-20 浓度。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 背景高 | Tween-20 太低、洗膜不足、抗体过浓 | 增加洗膜次数或 Tween-20，降低抗体浓度 |
| 信号弱 | 洗膜过强、Tween-20 偏高、抗体亲和力弱 | 降低 Tween-20 或洗膜时间，优化抗体 |
| 膜上局部背景 | 液体不足或膜折叠 | 使用足量 TBST，保证轻摇时膜能移动 |
| 重复性差 | TBST 配方或 pH 不一致 | 使用同一储液，记录 Tween-20 浓度和 pH |

## 记录模板

中文模板：

```text
TBST 配方：
TBS 浓度：
Tween-20 终浓度：
pH：
配制日期：
保存条件：
用途：
洗膜时间：
洗膜次数：
备注：
```

English record template:

```text
TBST formulation:
TBS concentration:
Tween-20 final concentration:
pH:
Preparation date:
Storage condition:
Application:
Wash time:
Number of washes:
Notes:
```

## 小结

TBST 是 WB 中最常用的洗膜缓冲液之一。它看似普通，但 Tween-20 浓度、洗膜时间、液体体积和轻摇条件都会影响背景与信号。任何 WB protocol 都应该把 TBST 配方写清楚。

## 参考来源

- [CST Western Blot Protocol](https://www.cellsignal.com/learn-and-support/protocols/protocol-western)
- [Abcam Western Blot Protocol](https://www.abcam.com/en-us/technical-resources/protocols/western-blot)
- [Thermo Fisher Western Blot Protocols](https://www.thermofisher.com/uk/en/home/life-science/protein-biology/protein-biology-learning-center/protein-gel-electrophoresis-information/western-blot-protocols.html)
