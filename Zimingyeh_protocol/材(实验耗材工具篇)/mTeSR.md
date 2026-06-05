# mTeSR

mTeSR（maintenance TeSR，TeSR 可理解为 Thomson-defined Stem cell medium lineage，常写作 mTeSR；中文可称 mTeSR 人多能干细胞维持培养基产品族）是 [STEMCELL Technologies](<../番外/试剂厂商/STEMCELL Technologies.md>) 面向 human pluripotent stem cells（hPSC，[人多能干细胞](<../番外/补充知识/人多能干细胞.md>)）培养的一类 feeder-free（无饲养层）、serum-free（无血清）或 defined（成分明确）方向培养基产品族，常用于 hESC（human embryonic stem cell，人胚胎干细胞）和 iPSC（induced pluripotent stem cell，诱导多能干细胞）的日常维持、扩增和实验前准备。

![STEMCELL Technologies 专门细胞体系概要图](<../z_asset/番外/试剂厂商/STEMCELL Technologies/stemcell-technologies-summary-abstract-en.png>)

图源：Image2 生成的 STEMCELL Technologies 概要图；mTeSR 位于 hPSC media 模块。

## 核心定位

mTeSR 不是普通“营养液”，而是用于维持 hPSC pluripotency（多能性）、减少 feeder layer（饲养层）变量，并让 [干细胞培养](<../用(实验流程内容篇)/干细胞培养.md>) 更标准化的培养基体系。STEMCELL Technologies 的 mTeSR 产品族页面将其定位为 hPSC maintenance media（人多能干细胞维持培养基），覆盖 mTeSR1、mTeSR Plus、TeSR-E8 等不同版本。参考：[STEMCELL Technologies mTeSR](https://www.stemcell.com/products/brands/mtesr.html)。

这一类培养基的真正价值是把 hPSC 维持过程中的复杂变量尽量定义化：基础营养、蛋白因子、缓冲体系、渗透压、换液频率、是否 xeno-free（无异种成分）、是否适合周末免换液或长间隔换液等。不同 mTeSR 版本不能只按“都是 hPSC 培养基”直接替换。

## 常见版本与使用倾向

| 产品族/版本          | 大致定位                           | 记录重点                        |
| --------------- | ------------------------------ | --------------------------- |
| mTeSR1          | 经典 feeder-free hPSC 维持培养基      | 具体货号、批号、是否使用 matrix、换液频率    |
| mTeSR Plus      | 面向更灵活换液窗口和稳定培养状态的版本            | 是否使用周末免换液策略、传代前后状态          |
| TeSR-E8         | 更简化、定义化成分方向的 hPSC 培养基          | 成分简化、matrix 和细胞系适配          |
| TeSR-AOF/其他特定版本 | 更强调 animal origin-free 或特定质量声明 | xeno-free、AOF、GMP/RUO 等标签含义 |

具体版本请以厂家说明书和实验室 SOP 为准。写 protocol 时不能只写“mTeSR”，因为 mTeSR1、mTeSR Plus 和 TeSR-E8 对换液节奏、细胞密度、传代方式和长期状态的影响可能不同。

## 核心用途

| 场景 | mTeSR 的角色 | 注意点 |
| --- | --- | --- |
| hPSC日常维持 | 支持 hESC/iPSC 扩增并维持未分化状态 | 需要配合合适的 [细胞外基质胶](细胞外基质胶.md) 或 matrix |
| 分化前准备 | 让细胞进入稳定、低应激状态 | 分化前不要突然换培养基版本 |
| 克隆扩增/基因编辑后恢复 | 与 [ROCK抑制剂](ROCK抑制剂.md) 等策略配合 | ROCK inhibitor 不应长期随意添加 |
| 细胞库建立前扩增 | 作为冻存前标准培养体系 | 记录 passage number 和形态评分 |
| 跨实验室复现 | 固定品牌、货号、版本和 matrix | 不同实验室即使用同一 mTeSR 也需本地优化 |

## mTeSR vs DMEM/F12 + 血清

| 项目 | mTeSR | DMEM/F12 + 血清 |
| --- | --- | --- |
| 适用目标 | hPSC 未分化维持 | 多种常规细胞或某些原代/分化体系 |
| 成分定义程度 | 较高，产品版本明确 | 血清成分复杂、批间差异大 |
| 对细胞状态 | 更偏维持 pluripotency | 不适合作为 hPSC 未分化维持的简单替代 |
| 记录重点 | 版本、matrix、换液频率、传代方式 | 基础培养基版本、血清批号、补充剂 |

mTeSR 不是 DMEM/F12 的“贵价版本”。它的核心是 hPSC 状态控制，而不是普通营养增强。

## mTeSR vs E8/其他定义化培养基

| 项目 | mTeSR 系列 | E8/简化定义化体系 |
| --- | --- | --- |
| 共同点 | 都可用于 hPSC 维持 | 都需要严格控制 matrix、密度和传代 |
| 差异 | mTeSR 系列版本多，应用资料和历史使用基础广 | E8 更强调简化定义成分 |
| 替换风险 | 直接替换可能改变克隆形态、增殖和分化倾向 | 同样需要适应期和桥接 |

## 使用 protocol 要点

### 预温和换液

**怎么做**：按厂家说明预温培养基，避免长时间放在 37°C；换液时保持温和，减少细胞层干燥和温度/pH 冲击。

**为什么**：hPSC 对环境变化非常敏感，短时间的干燥、pH 漂移或温度波动都可能增加 spontaneous differentiation（自发分化）和死亡。

**可能出错**：如果换液粗暴或培养基反复温热，可能表现为边缘分化、克隆变薄、细胞间隙增大或传代后恢复慢。

### 传代和接种密度

**怎么做**：根据细胞系和实验目标选择小团块传代、单细胞传代或温和解离；必要时短期使用 ROCK inhibitor。

**为什么**：hPSC 的克隆大小、接种密度和 matrix 状态会直接影响存活、多能性和分化背景。

**替代策略**：如果实验需要单细胞克隆或基因编辑，单细胞传代更方便；如果只做日常维持，小团块传代通常更稳。

### 版本切换

**怎么做**：从 mTeSR1 切换到 mTeSR Plus、TeSR-E8 或其他体系时，建议做适应期和桥接记录。

**为什么**：同一 hPSC 细胞系对培养基版本、matrix 和传代方式的响应可能不同，突然切换会影响生长速度和分化效率。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 克隆边缘分化 | 密度过高/过低、换液不及时、matrix 不合适 | 优化传代比例和换液节奏，检查 matrix 批号 |
| 传代后死亡多 | 解离太强、单细胞应激、ROCK inhibitor 使用不当 | 缩短消化，优化接种密度，短期使用 ROCK inhibitor |
| 分化效率突然变化 | mTeSR版本、matrix、传代数或细胞状态改变 | 回查批号和版本，建立分化前状态标准 |
| 长期培养漂移 | 传代数过高、选择压力、隐性分化 | 设定 passage window，定期检查 marker 和核型/基因组稳定性 |

## 购买与记录建议

常见供应商主要是 [STEMCELL Technologies](<../番外/试剂厂商/STEMCELL Technologies.md>)。购买时重点看具体版本、规格、储存条件、是否需要 supplement 单独添加、是否 xeno-free/defined，以及是否与本实验室 matrix 和传代试剂匹配。

推荐记录模板（中文）：

```text
产品名称：
品牌：STEMCELL Technologies
版本：mTeSR1/mTeSR Plus/TeSR-E8/其他
货号：
批号：
是否需要额外supplement：
matrix品牌/货号/批号：
细胞系：
传代数：
换液频率：
传代方式：
ROCK抑制剂使用情况：
异常形态：
```

Recommended record template (English):

```text
Product name:
Brand: STEMCELL Technologies
Version: mTeSR1/mTeSR Plus/TeSR-E8/other
Catalog number:
Lot number:
Additional supplement required:
Matrix brand/catalog/lot:
Cell line:
Passage number:
Media-change frequency:
Passaging method:
ROCK inhibitor use:
Abnormal morphology:
```

## 小结

mTeSR 是 hPSC 维持培养的代表性产品族。它的关键不是“贵的培养基”，而是版本、matrix、传代方式、换液频率和细胞状态共同构成的 hPSC 维持系统。记录时一定写具体版本和批号。

## 参考来源

- [STEMCELL Technologies mTeSR](https://www.stemcell.com/products/brands/mtesr.html)
- [STEMCELL Technologies](https://www.stemcell.com/)
