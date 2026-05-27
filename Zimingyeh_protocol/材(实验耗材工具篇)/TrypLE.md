# TrypLE

TrypLE（trypsin-like enzyme，胰酶样重组解离酶）是 [Gibco](<../番外/试剂厂商/Gibco.md>) / [赛默飞](<../番外/试剂厂商/赛默飞.md>) 用于细胞解离的一类重组酶产品，常作为动物源 [Trypsin-EDTA](Trypsin-EDTA.md)（胰蛋白酶-EDTA）的替代方案。它的核心定位是：保持类似 trypsin 的解离能力，同时减少动物源成分带来的批次、来源和安全性顾虑。

Thermo Fisher 对 TrypLE Express 的产品说明将其描述为 animal origin-free（无动物源）重组细胞解离酶，可直接替代 trypsin，并可用于贴壁哺乳动物细胞传代。[参考：Thermo Fisher TrypLE Express](https://www.thermofisher.com/order/catalog/product/12604013)

## 名称与常见版本

| 名称 | 中文理解 | 常见用途 |
| --- | --- | --- |
| TrypLE Express | 快速型 TrypLE 解离酶 | 常规细胞传代、替代胰酶 |
| TrypLE Select | 选择型/更偏规范化生产版本 | 对动物源成分、生产记录要求更严格的体系 |
| TrypLE + Phenol red | 含酚红版本 | 便于观察试剂覆盖和残留 |
| TrypLE without Phenol red | 无酚红版本 | 更适合光学检测或避免酚红干扰 |

写 protocol 时不要只写“TrypLE”，更推荐记录：`TrypLE Express, 1×, without phenol red, Gibco, catalog number, lot number, storage condition`。

## 核心作用

TrypLE 的作用逻辑接近胰酶：切割参与贴壁和细胞间连接的蛋白，使细胞从培养表面脱落。与传统猪源 trypsin 相比，它的优势主要在于来源更可控、批次一致性更容易管理，并且很多细胞中表现得相对温和。

| 作用 | 实验意义 |
| --- | --- |
| 解离贴壁细胞 | 支持常规 [细胞传代](<../用(实验流程内容篇)/细胞传代.md>) 和 [细胞消化](<../用(实验流程内容篇)/细胞消化.md>) |
| 替代动物源胰酶 | 减少动物源成分和批次风险 |
| 降低过度消化风险 | 对部分敏感细胞比传统 Trypsin-EDTA 更友好 |
| 可用于无血清/规范化体系 | 适合需要减少未定义成分的培养流程 |

## TrypLE vs Trypsin-EDTA vs Accutase

| 试剂                      | 解离强度  | 主要优点                 | 主要限制                 |
| ----------------------- | ----- | -------------------- | -------------------- |
| Trypsin-EDTA            | 强，成熟  | 便宜、速度快、适用面广          | 动物源或批次来源问题，表面蛋白更易受影响 |
| TrypLE                  | 中到强   | 无动物源重组酶，常可替代胰酶       | 价格更高，不同细胞仍需优化        |
| [Accutase](Accutase.md) | 温和到中等 | 常用于保护表面 marker 和敏感细胞 | 强贴壁细胞可能解离较慢          |
| [EDTA](EDTA.md)-only    | 温和    | 非酶，保护蛋白结构            | 解离效率有限               |

如果只是常规 HEK293、HeLa 等细胞传代，Trypsin-EDTA 通常已经足够；如果项目强调无动物源、细胞状态温和、长期 SOP 一致性，TrypLE 更值得考虑。

## 使用 protocol

### 准备

**怎么做**：按产品说明解冻、保存和预温 TrypLE；同时准备无 Ca2+/Mg2+ 的 [PBS](PBS.md) 或 [DPBS](DPBS.md)、完全培养基和目标培养容器。

**为什么**：温度影响酶活性；无钙镁洗液可削弱细胞黏附并去除血清残留。

**注意事项**：

- 不要反复长时间放在 37°C。
- 记录开封日期、冻融次数和批号。
- 敏感细胞第一次更换解离试剂时应做小规模比较。

### 洗涤细胞

**怎么做**：吸去旧培养基，用无 Ca2+/Mg2+ PBS/DPBS 轻洗一次。

**为什么**：血清蛋白和培养基残留会影响解离效率，也会让不同批次的消化时间变得不一致。

**注意事项**：贴壁弱细胞洗涤要轻；不要让细胞层干燥。

### 加入 TrypLE

**怎么做**：加入足够覆盖细胞层的 TrypLE，轻晃均匀覆盖，放置到细胞变圆并开始脱落。不要只按固定分钟数判断，要用倒置显微镜观察。

**为什么**：不同细胞对 TrypLE 的反应差异很大。用形态终点控制，比死记时间更稳。

**替代方案**：如果脱落慢，可适当延长时间或轻敲培养瓶；如果细胞很敏感，可缩短时间并增加温和吹打。

**出错后果**：解离不足会有团块；解离过度会影响活率和传代后恢复。

### 稀释、收集和接种

**怎么做**：细胞脱落后加入完全培养基稀释，轻柔吹打成均一悬液，再计数或按传代比例接种。

**为什么**：稀释可以降低酶继续作用；均一悬液决定接种密度准确性。

**注意事项**：

- 下游如果不希望带入血清或酶残留，可离心换液。
- 流式或单细胞实验前需要评估是否需要过滤。

## 什么时候不优先用 TrypLE

- 预算极紧、细胞很皮实、Trypsin-EDTA 已验证稳定时。
- 需要最温和保留表面抗原时，Accutase 或 EDTA-only 可能更合适。
- 组织消化或 ECM 很厚的样本，通常需要胶原酶、Dispase 或混合酶体系。
- 项目已经使用某种解离试剂建立了长期稳定数据时，不应无理由中途更换。

## 购买与记录建议

推荐优先考虑 [Gibco](<../番外/试剂厂商/Gibco.md>) TrypLE Express 或 TrypLE Select。购买时看是否含酚红、包装规格、储存温度、无菌等级、适用监管/质量文件和是否需要无动物源说明。

推荐记录：

```text
TrypLE version:
Phenol red: yes/no
Brand/company:
Catalog number:
Lot number:
Storage condition:
Open date:
Cell type:
Dissociation temperature/time:
Neutralization or dilution method:
Post-passage viability and attachment:
```

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 处理 |
| --- | --- | --- |
| 脱落很慢 | 血清未洗净、试剂温度低、细胞贴壁强 | 更充分洗涤，确认预温，适当延长时间 |
| 细胞恢复慢 | 消化过度、吹打过强、接种过低 | 缩短时间，温和吹打，提高接种密度 |
| 团块多 | 解离不足或 DNA 黏连 | 延长温和消化，过滤，必要时评估 DNase I |
| 批次后结果改变 | 从胰酶换到 TrypLE 后流程未重新优化 | 重新固定消化时间、接种密度和恢复窗口 |

## 小结

TrypLE 可以理解为“更规范、更少动物源顾虑的胰酶替代品”。它不是所有情况下都比 Trypsin-EDTA 更好，但在长期 SOP、敏感细胞、无血清体系或希望减少动物源变量时很有价值。

## 参考来源

- [Thermo Fisher TrypLE Express Enzyme](https://www.thermofisher.com/order/catalog/product/12604013)
- [Thermo Fisher Cell Dissociation and Trypsin](https://www.thermofisher.cn/gs/en/home/life-science/cell-culture/mammalian-cell-culture/reagents/cell-dissociation.html)
