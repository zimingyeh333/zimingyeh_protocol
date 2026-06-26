# 重组DNA与基因编辑安全

Recombinant or synthetic nucleic acid work（重组或合成核酸实验）和 genome editing（基因编辑）实验涉及外源 DNA/RNA、表达载体、病毒载体、稳定细胞系、CRISPR-Cas 系统和可能改变生物学性状的遗传操作。它们必须在机构审批、培训授权和风险评估框架下开展。

## 适用范围

本页适用于：

- 分子克隆、质粒构建和外源基因表达。
- [基因编辑](<../用(实验流程内容篇)/基因编辑.md>)、CRISPR-Cas9、CRISPRi、CRISPRa、碱基编辑和 prime editing。
- 慢病毒、逆转录病毒、腺病毒、AAV 等病毒载体相关实验。
- 稳定转染细胞系、转基因细胞、筛选库和 pooled screen。
- 含人体样本、动物样本、病原体相关序列或毒性/致癌基因片段的核酸实验。

NIH Guidelines 将 recombinant or synthetic nucleic acid molecules（重组或合成核酸分子）相关研究纳入机构生物安全管理框架，强调应由 IBC（Institutional Biosafety Committee，机构生物安全委员会）或等效机构根据载体、宿主、插入片段和实验规模评估风险。参考：[NIH Guidelines](https://osp.od.nih.gov/policies/biosafety-and-biosecurity-policy/nih-guidelines/)。

## 核心风险来自哪里

| 风险来源 | 例子 | 为什么重要 |
| --- | --- | --- |
| 载体 | 质粒、慢病毒、AAV、转座子 | 影响表达持续时间、整合风险和传播风险 |
| 宿主细胞 | HEK293T、原代细胞、免疫细胞、动物细胞 | 不同细胞来源和样本背景风险不同 |
| 插入片段 | oncogene、toxin、免疫调节基因、抗药基因 | 可能改变细胞增殖、生存或环境风险 |
| 递送方式 | 转染、电转、病毒感染 | 影响气溶胶、锐器、废弃物和暴露风险 |
| 编辑结果 | knockout、knock-in、pooled library | 可能产生未预期表型或混合群体 |
| 实验规模 | 小量培养、大规模病毒包装、动物实验 | 风险随体积、滴度和暴露机会增加 |

## 开始前必须确认

| 问题 | 需要确认的内容 |
| --- | --- |
| 是否需要审批 | IBC/EHS/平台/动物伦理/人体样本伦理要求 |
| 适用安全等级 | BSL、病毒载体使用等级、样本来源要求 |
| 载体是否整合 | 非整合、整合、复制缺陷、包装系统 |
| 插入片段是否高风险 | 致癌、毒性、免疫调节、病原相关、抗药性 |
| 废弃物怎么处理 | 液体、固体、锐器、病毒污染耗材、细胞培养废液 |
| 暴露怎么处理 | 皮肤、眼睛、针刺、气溶胶、泄漏的报告链 |

没有完成审批和培训时，不应该为了赶实验先做“预实验”。

## CRISPR 实验特别注意

[CRISPR-Cas9](../番外/补充知识/CRISPR-Cas9.md) 本身是工具系统，风险取决于编辑对象、递送载体和实验场景。常规细胞系中敲除普通基因和在病毒载体中表达 Cas9/sgRNA 的风险评估并不相同。

重点检查：

- sgRNA 靶向的基因是否影响细胞增殖、凋亡、免疫逃逸、毒性或药物抗性。
- 是否使用病毒载体递送 Cas9 或 sgRNA。
- 是否产生稳定表达 Cas9 的细胞系。
- 是否进行 pooled CRISPR screen，是否涉及大规模病毒包装和高复杂度文库。
- 是否涉及人体样本、动物体内编辑、胚胎/生殖系或病原相关材料。

## 病毒载体实验注意

| 环节 | 注意事项 |
| --- | --- |
| 包装系统 | 确认复制缺陷设计和包装质粒分离 |
| 细胞操作 | 尽量减少气溶胶，按要求在 BSC 中操作 |
| 离心 | 使用密封转子或安全杯，开盖前等待气溶胶沉降 |
| 废液 | 按本单位病毒污染废液 SOP 去污染 |
| 耗材 | 枪头、离心管、培养板按污染固废处理 |
| 记录 | 记录载体名称、包装批次、滴度、插入片段和使用者 |

具体操作等级和去污染方式必须以本单位 SOP 为准。不同机构对慢病毒、AAV 和其他载体的管理要求可能不同。

## 记录建议

中文记录：

```text
项目名称：
负责人：
载体类型：
宿主细胞/生物体：
插入片段或编辑目标：
递送方式：
是否病毒载体：
是否稳定整合：
是否需要 IBC/EHS/伦理审批：
批准编号：
适用安全等级：
主要风险：
废弃物处理方式：
暴露/泄漏处理联系人：
备注：
```

English record:

```text
Project:
Responsible person:
Vector type:
Host cell/organism:
Insert or editing target:
Delivery method:
Viral vector: yes / no
Stable integration: yes / no
IBC/EHS/ethics approval required: yes / no
Approval ID:
Applicable biosafety level:
Main risks:
Waste treatment:
Exposure/spill contact:
Notes:
```

## 小结

重组 DNA 和基因编辑安全的关键不是“CRISPR 危不危险”这个抽象问题，而是具体看载体、宿主、插入片段、递送方式、实验规模和废弃物路径。任何涉及病毒载体、稳定整合、人体样本、动物实验或高风险基因功能的项目，都应先完成机构审批和 SOP 确认，再开始实验。

## 参考来源

- [NIH Guidelines for Research Involving Recombinant or Synthetic Nucleic Acid Molecules](https://osp.od.nih.gov/policies/biosafety-and-biosecurity-policy/nih-guidelines/)
- [CDC Biosafety in Microbiological and Biomedical Laboratories](https://www.cdc.gov/labs/bmbl/index.html)
- [WHO Laboratory Biosafety Manual, 4th edition](https://www.who.int/publications/i/item/9789240011311)
