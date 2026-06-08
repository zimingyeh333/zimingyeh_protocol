# FBS

FBS（Fetal Bovine Serum，胎牛血清；也称 fetal calf serum，胎牛犊血清）是哺乳动物 [细胞培养](<../用(实验流程内容篇)/细胞培养.md>) 中最常用的 serum supplement（血清补充剂）。它通常加入 [DMEM](DMEM.md)、[RPMI 1640](<RPMI 1640.md>) 等基础培养基，提供复杂的生长因子、激素、结合蛋白、贴壁因子和保护性蛋白。

![基础细胞培养基组件参考图](../z_asset/材/基础细胞培养基组件/cell-culture-medium-components-reference.png)

图源：Image2 生成的基础细胞培养基组件示意图；FBS 是完全培养基中的复杂生长信号来源，但也是批次差异的重要来源。

## 核心作用

FBS 的优势是“复杂而宽容”：很多细胞系在 5%-10% FBS 的完全培养基中容易存活和增殖。Thermo Fisher 的 FBS 页面说明，FBS 提供维持和生长培养细胞所需的营养和生长因子，也是细胞类应用中使用最广泛的 serum。参考：[Thermo Fisher Fetal Bovine Serum](https://www.thermofisher.com/us/en/home/life-science/cell-culture/mammalian-cell-culture/fbs.html)。

FBS 常见功能包括：

- 提供 growth factors（生长因子）和 hormones（激素）。
- 提供 attachment factors（贴壁因子），帮助贴壁细胞铺展。
- 提供 albumin（白蛋白）等结合蛋白，缓冲毒性小分子和脂质。
- 提供蛋白保护环境，降低部分机械应激。
- 提供未完全定义的微量因子，让基础培养基更“容错”。

## 为什么FBS是变量来源

FBS 不是单一化学试剂，而是动物来源复杂混合物。不同产地、采集、处理、过滤、灭活、检测和批号都会影响细胞表现。Thermo Fisher 的 FBS 页面提到，其 FBS 产品分为 Value、Premium、Premium Plus 等等级，并用 endotoxin、hemoglobin、growth performance、virus testing 等质量指标区分。参考：[Thermo Fisher Fetal Bovine Serum](https://www.thermofisher.com/us/en/home/life-science/cell-culture/mammalian-cell-culture/fbs.html)。

所以严肃实验中，FBS 不是“随便 10%”。它需要像抗体一样记录品牌、货号、批号和关键处理方式。

## 常见类型

| 类型 | 英文 | 特点 | 适用逻辑 |
| --- | --- | --- | --- |
| 普通 FBS | Standard FBS | 常规细胞培养 | 多数细胞系起点 |
| 热灭活 FBS | Heat-inactivated FBS | 通常 56°C 处理以降低补体活性 | 免疫相关实验或历史 SOP 指定时 |
| 透析 FBS | Dialyzed FBS | 去除小分子 | 代谢、同位素、激素或营养限制实验 |
| charcoal-stripped FBS | 活性炭处理血清 | 降低类固醇/激素 | 激素敏感细胞或内分泌研究 |
| qualified FBS | 经特定应用测试血清 | 如 ES/iPSC、MSC、低内毒素等 | 敏感细胞或专用流程 |

不要默认热灭活一定更好。热处理可能改变血清蛋白状态，只有细胞类型或实验逻辑需要时才应使用，并且要固定处理方式。

## FBS vs 无血清/化学成分明确培养基

| 体系 | 优点 | 局限 |
| --- | --- | --- |
| FBS 培养 | 容错高，细胞容易恢复，适合常规细胞系 | 批次差异大，成分不明确，动物来源 |
| Serum-free medium（无血清培养基） | 更可控，减少血清背景 | 对配方和细胞适应要求高 |
| Chemically defined medium（化学成分明确培养基） | 成分清楚，可重复性更强 | 往往更贵，对细胞类型依赖更强 |
| Reduced-serum medium（低血清培养基） | 降低血清变量 | 需要验证细胞状态和实验 readout |

如果实验目标是分泌蛋白、外泌体、代谢组、激素反应或药物结合，FBS 背景可能直接干扰结果。

## 使用 protocol

### 解冻与分装

**怎么做**：FBS 通常在 2-8°C 缓慢解冻，完全融化后轻轻混匀，按常用体积分装，避免反复冻融。

**为什么**：血清成分复杂，反复冻融会增加沉淀、蛋白变性和批内差异。

**注意事项**：

- 不要剧烈摇晃产生泡沫。
- 若有絮状沉淀，先查产品说明书；很多血清解冻后少量沉淀不一定代表污染。
- 分装管上写明品牌、货号、批号、分装日期和是否热灭活。

### 加入培养基

**怎么做**：按目标比例加入基础培养基，常见 10% v/v。加入后轻柔混匀并标记完全培养基配方。

**为什么**：FBS 比例改变会影响增殖速度、贴壁、分化状态和下游实验背景。

**替代方案**：对敏感细胞可做 lot test（批号测试），比较增殖、形态、marker、实验 readout 后再批量购买。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 换血清后细胞状态变差 | FBS 批次差异或等级变化 | 做批号比较，回溯旧批号 |
| 培养基出现沉淀 | 解冻/温度变化导致蛋白或盐析出 | 轻柔混匀，必要时咨询厂家 |
| 实验背景高 | 血清中含目标相关因子或干扰物 | 使用低血清、无血清或处理血清 |
| 免疫细胞实验异常 | 补体、内毒素或批次因子影响 | 考虑热灭活、低内毒素或专用血清 |
| 细胞生长慢 | 血清比例低、批号不适合或基础培养基不匹配 | 调整比例并做批号验证 |

## 购买与记录建议

常见供应商包括 [Gibco](<../番外/试剂厂商/Gibco.md>)、[HyClone](<../番外/试剂厂商/HyClone.md>)、[Corning](<../番外/试剂厂商/Corning.md>)、[Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>)/[Merck](<../番外/试剂厂商/Merck.md>)。FBS 价格高、批次影响大，建议同一项目尽量使用同一批号，关键实验前先测试并保留足量同批次库存。

推荐记录模板（中文）：

```text
FBS品牌：
货号：
批号：
等级/类型：
产地/来源信息：
是否热灭活：
是否透析/去激素/低内毒素：
解冻日期：
分装日期：
完全培养基中比例：
使用细胞：
批号测试结果：
异常现象：
```

Recommended record template (English):

```text
FBS brand:
Catalog number:
Lot number:
Grade/type:
Origin/source information:
Heat-inactivated: yes/no
Dialyzed/charcoal-stripped/low-endotoxin:
Thaw date:
Aliquot date:
Percentage in complete medium:
Cell type:
Lot testing result:
Abnormal observation:
```

## 小结

FBS 是细胞培养中最有用、也最容易制造批次差异的成分之一。对常规细胞，它提供强大的生长支持；对严肃定量和机制实验，它必须被当作关键变量记录和控制。

## 参考来源

- [Thermo Fisher Fetal Bovine Serum](https://www.thermofisher.com/us/en/home/life-science/cell-culture/mammalian-cell-culture/fbs.html)
- [ATCC Animal Cell Culture Guide](https://www.atcc.org/resources/culture-guides/animal-cell-culture-guide)
