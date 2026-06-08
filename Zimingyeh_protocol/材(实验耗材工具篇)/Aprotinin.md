# Aprotinin

Aprotinin（抑肽酶）是一种多肽类 serine protease inhibitor（丝氨酸蛋白酶抑制剂），常用于蛋白裂解、组织匀浆、[Western blot](<../用(实验流程内容篇)/Western blot.md>) 样本制备和部分蛋白纯化流程，主要用于抑制 trypsin（胰蛋白酶）、chymotrypsin（胰凝乳蛋白酶）、plasmin（纤溶酶）等丝氨酸蛋白酶。

![蛋白酶抑制剂成分参考图](../z_asset/材/蛋白酶抑制剂成分/protease-inhibitor-components-reference.png)

图源：Image2 生成的蛋白酶抑制剂成分参考图；Aprotinin 位于左下方，和 [PMSF](PMSF.md) 一起对应 serine proteases（丝氨酸蛋白酶）抑制。

## 核心作用

Aprotinin 是可逆蛋白酶抑制剂，能与多种丝氨酸蛋白酶形成稳定复合物，从而降低样本裂解后蛋白被剪切的风险。它常作为 [蛋白酶抑制剂](蛋白酶抑制剂.md) cocktail 的组成之一，而不是单独承担所有防降解任务。

Sigma-Aldrich 的 Aprotinin 产品资料将其描述为 serine protease inhibitor，并列出其对 trypsin、chymotrypsin、plasmin 和 kallikrein 等蛋白酶的抑制用途。参考：[Sigma-Aldrich Aprotinin A1153](https://www.sigmaaldrich.com/US/en/product/sigma/a1153)。

## 和PMSF的区别

| 项目 | Aprotinin | PMSF |
| --- | --- | --- |
| 化学性质 | 多肽/蛋白类抑制剂 | 小分子磺酰氟类抑制剂 |
| 靶点 | 多种丝氨酸蛋白酶 | 多种丝氨酸蛋白酶 |
| 稳定性 | 视溶液和保存条件而定 | 水相中快速水解 |
| 安全性 | 通常没有 PMSF 粉末/有机储液那么麻烦 | 毒性和刺激性更需要注意 |
| 常见用法 | cocktail 成分或单独补充 | 裂解前现加 |

如果只是常规 WB，通常不需要在商业 cocktail 外再额外加 Aprotinin；除非样本 protease activity（蛋白酶活性）很高、目标蛋白特别易降解，或实验室已有经验表明额外补充有帮助。

## 使用场景

| 场景 | 价值 | 注意点 |
| --- | --- | --- |
| 细胞裂解 | 降低丝氨酸蛋白酶降解 | 常与 PMSF/Leupeptin 等合用 |
| 组织匀浆 | 对高蛋白酶样本有帮助 | 仍需低温、快速处理 |
| 血浆/分泌蛋白样本 | 抑制 plasmin/kallikrein 相关活性 | 需结合样本来源选择 |
| IP-WB | 可保护互作复合物相关蛋白 | 注意裂解液温和性和抗体兼容性 |

## 使用 protocol

### 配制和分装

**怎么做**：按说明书用水或合适 buffer 配成 stock solution，低温分装保存。

**为什么**：Aprotinin 作为多肽类抑制剂，反复冻融和微生物污染会影响有效性。

**注意事项**：

- 不同厂家单位标注可能是 TIU、KIU、mg/mL 或 molar concentration，换算前要看说明书。
- 不要把不同单位直接混用。
- 若用于质谱或蛋白纯化，确认是否需要在下游去除。

### 加入裂解液

**怎么做**：裂解前加入预冷裂解液，和其他抑制剂共同使用。

**为什么**：Aprotinin 只覆盖部分丝氨酸蛋白酶，不能抑制半胱氨酸蛋白酶、天冬氨酸蛋白酶或金属蛋白酶。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 加了 Aprotinin 仍降解 | 靶点覆盖不够，半胱氨酸/天冬氨酸蛋白酶仍活跃 | 加广谱 cocktail |
| 浓度记录混乱 | 单位 TIU/KIU/mg/mL 混用 | 统一记录厂家单位和换算依据 |
| 样本批间差异大 | 储液反复冻融或污染 | 小分装、低温保存 |
| IP 背景改变 | 抑制剂或裂解体系影响互作/抗体结合 | 做有无抑制剂对照或优化裂解液 |

## 购买与记录建议

常见供应商包括 [Merck](<../番外/试剂厂商/Merck.md>)/[Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>)、[Roche](<../番外/试剂厂商/Roche.md>)、[Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>) 等。购买时重点看单位、来源、纯度、是否适合细胞裂解/蛋白实验，而不是只看质量规格。

推荐记录模板（中文）：

```text
Aprotinin品牌：
货号：
批号：
标注单位：
储液浓度：
储液溶剂：
分装日期：
终浓度/终单位：
裂解液：
样本类型：
是否与其他抑制剂合用：
异常现象：
```

Recommended record template (English):

```text
Aprotinin brand:
Catalog number:
Lot number:
Unit definition:
Stock concentration:
Stock solvent:
Aliquot date:
Final concentration/unit:
Lysis buffer:
Sample type:
Combined with other inhibitors: yes/no
Abnormal observation:
```

## 小结

Aprotinin 是丝氨酸蛋白酶抑制剂体系中的稳定补充项。它不像 PMSF 那样水相快速水解，但覆盖范围也有限；最适合与其他蛋白酶抑制剂共同用于低温、快速的样本制备。

## 参考来源

- [Sigma-Aldrich Aprotinin A1153](https://www.sigmaaldrich.com/US/en/product/sigma/a1153)
- [Roche cOmplete Protease Inhibitor Cocktail Tablets](https://www.sigmaaldrich.com/US/en/product/roche/11836170001)
- [CST Western Blot Protocol](https://www.cellsignal.com/learn-and-support/protocols/protocol-western)
