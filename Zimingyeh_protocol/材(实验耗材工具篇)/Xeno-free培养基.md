# Xeno-free培养基

Xeno-free培养基（xeno-free medium，异种动物来源成分去除培养基；常简称 XF medium）是指不含 non-human animal-derived components（非人源动物来源成分）的细胞培养体系，常用于人源干细胞、细胞治疗、再生医学和转化研究。

![专用细胞培养基参考图](../z_asset/材/专用细胞培养基/specialized-cell-culture-media-reference.png)

图源：Image2 生成的专用细胞培养基参考图；xeno-free 位于 serum replacement logic 的更高控制层级，强调来源风险控制。

## 核心定位

Xeno-free 关注的是“来源”，不是单纯“有没有血清”。例如一个培养基可以是 [无血清培养基](无血清培养基.md)，但仍含 bovine serum albumin（牛血清白蛋白）或其他动物来源组分；它就不一定是 xeno-free。

Thermo Fisher 的 StemPro MSC SFM XenoFree 页面说明，该培养基为 fully defined, serum-free and xeno-free medium，用于 hMSC 和 hADSC 的分离、培养和扩增。参考：[Thermo Fisher StemPro MSC SFM XenoFree](https://www.thermofisher.cn/bt/en/home/life-science/stem-cell-research/mesenchymal-stem-cells/msc-stem-cell-culture-media-reagents/stempro-msc-sfm-xenofree.html)。

Thermo Fisher 的 CTS KnockOut SR XenoFree 页面也把 xeno-free composition 描述为使用 human-derived 或 human-recombinant proteins，避免非人动物组分。参考：[Thermo Fisher CTS KnockOut SR XenoFree](https://www.thermofisher.com/ca/en/home/life-science/stem-cell-research/stem-cell-culture/knockout-media-stem-cell-culture/cts-knockout-sr-xenofree-medium.html)。

## 和相关概念的区别

| 概念 | 关注点 | 是否等同xeno-free |
| --- | --- | --- |
| Serum-free | 不含血清 | 不一定 |
| Chemically defined | 成分和浓度明确 | 不一定 |
| Animal component-free | 不含动物来源组分 | 通常更严格或接近，但需看定义 |
| Humanized / human recombinant | 人源或人重组来源 | 常用于实现 xeno-free |
| GMP/CTS grade | 质量体系和生产控制 | 不等于 xeno-free，但常一起出现 |

Xeno-free 的核心问题是：培养基、补充剂、生长因子、酶、基质、包被、冻存液里有没有非人动物来源成分。

## 什么时候需要

| 场景 | 为什么 |
| --- | --- |
| hESC/hiPSC 培养 | 减少动物来源变量和潜在污染风险 |
| MSC 培养和转化研究 | 更接近临床级流程需求 |
| 细胞治疗工艺开发 | 便于原料溯源和质量控制 |
| 免疫细胞扩增 | 减少动物来源成分干扰 |
| 需要法规或质量文件支持 | 需要 COA、origin statement、GMP/CTS 资料 |

## 使用 protocol

### 替换体系前检查

**怎么做**：列出所有接触细胞的材料：基础培养基、补充剂、[生长因子](生长因子.md)、解离试剂、基质、包被、冻存液、洗液和耗材。逐一确认是否 xeno-free。

**为什么**：只换成 xeno-free medium 不够。如果仍用动物来源基质胶、胰酶或 BSA，整个体系仍可能不是 xeno-free。

### 适应与验证

**怎么做**：用原体系做对照，逐步适应或直接按厂家 protocol 转换，比较形态、活率、扩增、marker、分化能力和功能 readout。

**为什么**：xeno-free 体系可能改变细胞贴壁、增殖速度和表型，尤其是干细胞和原代细胞。

## 常见错误与 troubleshooting

| 现象 | 可能原因 | 处理 |
| --- | --- | --- |
| 以为无血清就是xeno-free | 仍含动物来源 albumin/transferrin | 查看成分来源和 COA |
| 细胞贴壁差 | 旧体系依赖动物来源基质 | 换 recombinant laminin 或 humanized substrate |
| 扩增变慢 | 细胞未适应或缺少关键因子 | 逐步适应并优化接种密度 |
| 文件不够 | 没有 origin statement 或质量文件 | 选择有明确质量资料的供应商 |

## 购买与记录建议

常见供应商包括 [Gibco](<../番外/试剂厂商/Gibco.md>)、[STEMCELL Technologies](<../番外/试剂厂商/STEMCELL Technologies.md>)、[Lonza](<../番外/试剂厂商/Lonza.md>)、[PromoCell](<../番外/试剂厂商/PromoCell.md>)、[Roche](<../番外/试剂厂商/Roche.md>)、[Sigma-Aldrich](<../番外/试剂厂商/Sigma-Aldrich.md>)/[Merck](<../番外/试剂厂商/Merck.md>)。购买时要看清 xeno-free、animal component-free、GMP、CTS、RUO 等标签含义，不能混用。

推荐记录模板（中文）：

```text
Xeno-free培养基/体系名称：
品牌：
货号：
批号：
是否serum-free：
是否chemically defined：
是否GMP/CTS：
人源/重组组分说明：
基质/包被来源：
酶/解离试剂来源：
生长因子来源和批号：
使用细胞：
适应方式：
验证结果：
异常现象：
```

Recommended record template (English):

```text
Xeno-free medium/system name:
Brand:
Catalog number:
Lot number:
Serum-free: yes/no
Chemically defined: yes/no
GMP/CTS grade:
Human-derived/recombinant component statement:
Matrix/coating source:
Enzyme/dissociation reagent source:
Growth factor source and lots:
Cell type:
Adaptation strategy:
Validation results:
Abnormal observation:
```

## 小结

Xeno-free 培养基解决的是“异种动物来源成分”问题。它常与无血清、化学成分明确和 GMP/CTS 体系一起出现，但四者不是同义词；真正的 xeno-free 流程需要检查所有接触细胞的材料来源。

## 参考来源

- [Thermo Fisher StemPro MSC SFM XenoFree](https://www.thermofisher.cn/bt/en/home/life-science/stem-cell-research/mesenchymal-stem-cells/msc-stem-cell-culture-media-reagents/stempro-msc-sfm-xenofree.html)
- [Thermo Fisher CTS KnockOut SR XenoFree](https://www.thermofisher.com/ca/en/home/life-science/stem-cell-research/stem-cell-culture/knockout-media-stem-cell-culture/cts-knockout-sr-xenofree-medium.html)

