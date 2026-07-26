# Loading Dye

Loading dye（上样染料；在核酸电泳中也常叫 DNA loading buffer，DNA 上样缓冲液）是加到 DNA/RNA 样本中的辅助试剂，用于让样本沉入凝胶孔、显示上样过程，并用 tracking dye（迁移追踪染料）提示电泳前沿位置。它是 [琼脂糖凝胶电泳](<../用(实验流程内容篇)/琼脂糖凝胶电泳.md>) 中最容易被低估的小试剂之一。

![核酸电泳试剂组参考图](<../z_asset/材/Loading Dye/nucleic-acid-gel-reagents-reference.png>)

图源：Image2 生成的核酸跑胶试剂组参考图；Loading Dye 的核心不是“染 DNA”，而是通过 density（密度）让样本沉入上样孔，并通过颜色追踪电泳前沿。

## 核心成分与作用

| 成分 | 英文 | 作用 |
| --- | --- | --- |
| 密度剂 | density agent | 让样本比 running buffer 更重，沉入孔底 |
| 追踪染料 | tracking dye | 观察上样是否成功，判断电泳前沿 |
| EDTA | ethylenediaminetetraacetic acid，乙二胺四乙酸 | 螯合 Mg2+，可帮助终止部分酶反应 |
| 缓冲组分 | buffer component | 维持 pH 和离子环境 |
| SDS（部分产品含） | sodium dodecyl sulfate，十二烷基硫酸钠 | 可改善某些样本条带锐度，但可能影响部分染料策略 |

常见密度剂包括 [甘油](甘油.md)、蔗糖和 [Ficoll](Ficoll.md)。常见追踪染料包括 [溴酚蓝](溴酚蓝.md)（bromophenol blue）、[二甲苯青](二甲苯青.md)（xylene cyanol FF）和 [Orange G](<Orange G.md>)。Sigma-Aldrich 的核酸电泳 protocol 给出传统 loading buffer 示例：50% glycerol、0.25% bromophenol blue、0.25% xylene cyanol FF。参考：[Sigma-Aldrich Nucleic Acid Electrophoresis Protocol](https://www.sigmaaldrich.cn/CN/en/technical-documents/protocol/genomics/nucleic-acid-gel-electrophoresis/nucleic-acid-electrophoresis)。

NEB 的 Gel Loading Dye, Purple (6X) 是一个更现代的商品化例子：1x 组分含 Ficoll-400、EDTA、Tris-HCl、SDS 和两种追踪染料；NEB 说明 Ficoll 可带来更亮、更紧的条带，EDTA 可停止酶反应。参考：[NEB Gel Loading Dye, Purple (6X)](https://www.neb.com/en/products/b7024-gel-loading-dye-purple-6x)。

## 常见版本

| 类型 | 特点 | 适合 |
| --- | --- | --- |
| 6x DNA loading dye | 最常见，按 1:5 或类似比例加入样本 | 常规 PCR、酶切、质粒检查 |
| 含 SDS loading dye | 条带可能更锐，部分酶切样本更好 | 普通 agarose gel，但需注意染料兼容性 |
| No SDS loading dye | 避免 SDS 对部分核酸染料或下游的影响 | SYBR Safe、GelRed 等体系 |
| RNA loading dye | 常含 formamide 或其他变性组分 | RNA denaturing gel 或 RNA 片段分析 |
| Prestain loading dye | 同时含核酸染料和 loading dye | 快速检查，但需验证迁移影响 |

NEB 特别提醒，含较高 SDS 的 Purple Loading Dye 与 SYBR Safe 或 GelRed 使用时，推荐改用 no SDS 版本或后染策略。参考：[NEB Gel Loading Dye, Purple (6X)](https://www.neb.com/en/products/b7024-gel-loading-dye-purple-6x)。

## 与核酸染料、DNA Ladder 的区别

| 项目 | Loading Dye | [核酸染料](核酸染料.md) | [DNA Ladder](<DNA Ladder.md>) |
| --- | --- | --- | --- |
| 主要作用 | 上样辅助和追踪前沿 | 让 DNA/RNA 条带发光 | 提供大小标准 |
| 是否代表核酸量 | 不代表 | 条带强度可粗略反映 | ladder 条带量已知或近似已知 |
| 是否需要成像系统 | 肉眼可见追踪染料 | 需要蓝光/UV/滤光片 | 需要被染料显示 |

一句话：Loading Dye 帮你“把样本放进去并知道跑到哪了”，核酸染料帮你“看见 DNA/RNA”，DNA ladder 帮你“判断大小”。

## 使用方法

通用操作：

- 按产品说明把 6x loading dye 加入样本，常见比例是 1 份 loading dye + 5 份样本，混匀后上样。
- 若样本来自 PCR 或酶切反应，先短暂离心收集液滴，避免气泡影响上样。
- 对 ready-to-load ladder 或 PCR master mix 中已经含 loading dye 的体系，不要重复加入。
- 若使用含 SDS 的 loading dye，同时使用 SYBR Safe 或 GelRed，优先查看产品兼容说明，必要时改用 no SDS 版本或后染。

为什么重要：

- 密度不够会导致样本漂出孔外。
- 追踪染料异常扩散会提示盐浓度、孔形、上样或缓冲液问题。
- loading dye 不是惰性背景，在小片段、高上样量或特殊染料体系中可能改变迁移。

## 注意事项

- 不要把 loading dye 加入到要直接用于酶反应的样本中，除非确认后续兼容。
- DNA 样本很少时，避免过多稀释导致条带弱。
- 如果 dye front 跑到胶底，小片段可能已经跑出。
- 冷藏后含 SDS 的 loading dye 可能出现沉淀，使用前按厂家建议恢复到均一状态。NEB FAQ 提到其 Purple Loading Dye 推荐室温保存，冷温可能造成 SDS 析出。参考：[NEB FAQ: Purple Loading Dye storage](https://www.neb.com/faqs/can-gel-loading-dye-purple-6x-b7024-be-stored-in-cold-temperatures)。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 样本从孔里飘出来 | loading dye 忘加、密度剂不足、孔破 | 重新加 dye，检查孔和上样手法 |
| 条带弯曲或拖尾 | 上样盐浓度高、dye/样本太浓、孔受损 | 稀释样本或纯化后再跑 |
| 图像有 UV shadow | 某些蓝色 dye 影响 UV 成像 | 换 no UV shadow 产品或后染 |
| SYBR/GelRed 条带异常 | SDS 或预染方式影响迁移 | 换 no SDS loading dye 或后染 |
| 追踪染料位置和目标不匹配 | 目标片段太小或胶浓度不合适 | 调整胶浓度和停止时间 |

## 购买与记录建议

常见供应商包括 [NEB](<../番外/试剂厂商/NEB.md>)、[Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>)、[Bio-Rad](<../番外/试剂厂商/Bio-Rad.md>)、[Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>) 等。常规核酸跑胶可以买稳定的 6x loading dye；如果经常做 SYBR Safe/GelRed 或胶回收，建议备 no SDS 版本。

推荐记录字段：

```text
中文：Loading Dye 名称 / 是否含 SDS / 浓缩倍数 / 品牌 / 货号 / 批号 / 加入比例 / 样本类型 / 核酸染料 / 异常迁移
English: loading dye name / SDS-containing or no-SDS / concentration / brand / catalog number / lot number / mixing ratio / sample type / nucleic acid stain / abnormal migration
```

## 小结

Loading Dye 是核酸电泳里负责“沉样本、看前沿、稳定上样”的小工具。它不等于核酸染料，也不等于 DNA ladder；出问题时常表现为样本飘出、条带扩散、前沿异常或染料兼容性问题。

## 参考来源

- [NEB Gel Loading Dye, Purple (6X)](https://www.neb.com/en/products/b7024-gel-loading-dye-purple-6x)
- [NEB FAQ: Purple Loading Dye storage](https://www.neb.com/faqs/can-gel-loading-dye-purple-6x-b7024-be-stored-in-cold-temperatures)
- [Sigma-Aldrich Nucleic Acid Electrophoresis Protocol](https://www.sigmaaldrich.cn/CN/en/technical-documents/protocol/genomics/nucleic-acid-gel-electrophoresis/nucleic-acid-electrophoresis)
