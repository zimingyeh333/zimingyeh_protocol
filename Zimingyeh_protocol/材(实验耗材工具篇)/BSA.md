# BSA

## 一句话定义

BSA（Bovine serum albumin，牛血清白蛋白）是一种来自牛血清的白蛋白，常用于封闭、抗体稀释、蛋白标准品、载体蛋白和细胞/生化实验中的稳定剂。

在 [Western blot](<../用(实验流程内容篇)/Western blot.md>) 中，BSA 常用于 [封闭液](封闭液.md) 或 [抗体稀释液](抗体稀释液.md)，尤其适合 phospho-protein（磷酸化蛋白）检测。CST、Thermo Fisher、Bio-Rad 和 Abcam 的 WB protocol 都将 BSA 与 [脱脂奶粉](脱脂奶粉.md) 并列为常见封闭试剂。[参考：CST Western Blot Protocol](https://www.cellsignal.com/learn-and-support/protocols/protocol-western)；[参考：Thermo Fisher Western Blot Protocols](https://www.thermofisher.com/uk/en/home/life-science/protein-biology/protein-biology-learning-center/protein-gel-electrophoresis-information/western-blot-protocols.html)

## 常见用途

| 用途 | 说明 |
| --- | --- |
| WB 封闭 | 占据膜上非特异结合位点 |
| 抗体稀释 | 稳定抗体并减少非特异吸附 |
| 蛋白定量标准 | [BCA蛋白定量试剂盒](BCA蛋白定量试剂盒.md) 常使用 [BSA标准品](BSA标准品.md) |
| 酶/蛋白稳定剂 | 降低蛋白吸附到管壁或耗材表面 |
| 细胞实验添加物 | 部分无血清体系或刺激实验中作为载体蛋白 |

BSA 的“通用”来自白蛋白稳定、可溶、便宜且背景较低，但不同等级和来源的 BSA 差异很大。

## 常见等级与版本

| 类型 | 英文 | 适合场景 |
| --- | --- | --- |
| Fraction V BSA | Fraction V bovine serum albumin | 常规封闭、抗体稀释 |
| Fatty acid-free BSA | 脱脂肪酸 BSA | 脂类、激素或代谢相关实验 |
| Protease-free BSA | 无蛋白酶 BSA | 对蛋白降解敏感的体系 |
| IgG-free BSA | 低 IgG/无 IgG BSA | 免疫检测背景敏感场景 |
| Standard-grade BSA | 标准级 BSA | 一般实验和配液 |

不要把所有 BSA 当成同一种试剂。细胞刺激实验、脂肪酸处理实验和 WB 封闭对 BSA 的要求不同。

## BSA vs 脱脂奶粉

| 维度 | BSA | 脱脂奶粉 |
| --- | --- | --- |
| 成分定义 | 相对明确 | 混合奶蛋白 |
| 成本 | 较高 | 低 |
| 磷酸化 WB | 常用首选 | 可能干扰 |
| 常规总蛋白 WB | 可用 | 常用 |
| 背景可控性 | 通常更好 | 受批次影响更明显 |
| 封闭强度 | 相对温和 | 有时更强 |

如果一个 WB 用奶粉背景高，换 BSA 是很常见的优化方向；如果 BSA 信号太弱，也可以比较奶粉或商业封闭液。

## 常见配方

### 5% BSA/TBST

```text
BSA：5 g
1× TBST：100 mL
充分溶解
```

### 1-3% BSA抗体稀释液

```text
BSA：1-3 g
1× TBST：100 mL
用于一抗或二抗稀释
```

具体浓度需要根据抗体说明书和背景情况优化。BSA 溶液容易微生物污染，长期保存需按实验室 SOP 加防腐剂或低温保存，但含 [叠氮钠](叠氮钠.md) 的溶液不能随意用于 HRP 反应体系。

## 使用 protocol

### WB封闭

1. 转膜后用 Ponceau S 检查转膜。
2. TBST 洗去染色。
3. 加入 5% BSA/TBST。
4. 室温轻摇封闭 30-60 min。
5. 进入一抗孵育。

### 磷酸化蛋白检测

检测 phosphorylated protein（磷酸化蛋白）时，常用 BSA/TBST 作为封闭和一抗稀释体系。原因是脱脂奶粉中的酪蛋白等磷蛋白成分可能增加背景或影响抗体识别。

## 注意事项

- BSA 溶解较慢，避免剧烈摇晃产生大量泡沫。
- 过滤除菌后的 BSA 更适合细胞相关实验。
- 细胞实验中使用的 BSA 要确认 endotoxin（内毒素）、fatty acid（脂肪酸）和 purity（纯度）等级。
- 做 WB 时要记录 BSA 浓度、溶剂和品牌批号。
- BSA 可能影响某些蛋白定量方法或酶反应，不能不查兼容性就加入。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| WB 背景仍高 | 抗体过浓、BSA 不适合该抗体、洗膜不足 | 降低抗体浓度，换封闭剂，增加洗膜 |
| 信号变弱 | BSA 封闭过强或抗体被稀释条件影响 | 降低 BSA 浓度或换稀释液 |
| 溶液浑浊 | 污染、溶解不充分、保存过久 | 现配新液或过滤 |
| 细胞实验结果异常 | BSA 等级不合适 | 换 fatty acid-free/endotoxin-low BSA |
| BCA 标准不稳定 | 标准品配制或保存问题 | 使用新鲜 [BSA标准品](BSA标准品.md)，避免反复冻融 |

## 购买和记录建议

购买 BSA 时先确定用途：WB 封闭用普通 Fraction V 通常够用；脂肪酸刺激、药物结合或细胞培养相关实验应选择 fatty acid-free、low endotoxin 或 cell culture grade。不要用一个“实验室通用 BSA”覆盖所有场景。

中文记录模板：

```text
BSA 产品名称：
品牌：
货号：
批号：
等级：
是否 fatty acid-free：
是否 low endotoxin：
配制浓度：
溶剂：
用途：
保存条件：
备注：
```

English record template:

```text
BSA product name:
Brand:
Catalog number:
Lot number:
Grade:
Fatty acid-free: yes / no
Low endotoxin: yes / no
Concentration:
Solvent:
Application:
Storage condition:
Notes:
```

## 小结

BSA 是免疫检测和蛋白实验中的基础试剂。它比脱脂奶粉更定义明确，也更适合磷酸化 WB，但不同等级 BSA 差异很大。写 protocol 时不要只写 BSA，要写清品牌、货号、批号、等级、浓度和用途。

## 参考来源

- [CST Western Blot Protocol](https://www.cellsignal.com/learn-and-support/protocols/protocol-western)
- [Thermo Fisher Western Blot Protocols](https://www.thermofisher.com/uk/en/home/life-science/protein-biology/protein-biology-learning-center/protein-gel-electrophoresis-information/western-blot-protocols.html)
- [Bio-Rad Western Blotting Guide](https://www.bio-rad.com/applications-technologies/western-blotting-immunodetection-techniques?ID=PQEEPOBWLN4A)
