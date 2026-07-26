# DNA Ladder

DNA ladder（DNA [分子量标准](<../番外/补充知识/分子量标准.md>)；也叫 DNA marker，DNA marker ladder）是一组已知长度的 DNA 片段混合物，用于 [琼脂糖凝胶电泳](<../用(实验流程内容篇)/琼脂糖凝胶电泳.md>) 或 [PAGE](<../用(实验流程内容篇)/PAGE.md>) 中估算样本条带大小、判断电泳是否正常，并在图像中提供尺寸坐标。

![核酸电泳试剂组参考图](<../z_asset/材/DNA Ladder/nucleic-acid-gel-reagents-reference.png>)

图源：Image2 生成的核酸跑胶试剂组参考图；左侧 DNA Ladder lane 提供已知 bp/kb 条带，样本条带大小通常通过与 ladder 条带位置比较来估算。

## 核心作用

| 作用 | 为什么重要 |
| --- | --- |
| 估算片段大小 | 判断 PCR、酶切、胶回收目标条带是否符合预期 |
| 监控跑胶状态 | ladder 条带弯曲、拖尾或跑歪常提示凝胶/电泳条件异常 |
| 估算核酸量 | 部分 ladder 给出每条带质量，可粗略比较条带强度 |
| 作为图像坐标 | 保存 gel image 时帮助后续读图和复核 |

NEB 的 DNA markers and ladders 页面列出多种 DNA ladder，覆盖 25 bp 到 40 kb 等不同范围，用于 agarose gel electrophoresis。参考：[NEB DNA Markers and Ladders](https://www.neb.com/en/products/markers-and-ladders)。

## 常见类型

| 类型 | 典型范围 | 适合 |
| --- | --- | --- |
| 50 bp ladder | 小片段 | 引物二聚体、小 PCR、短插入片段 |
| 100 bp ladder | 100 bp 到数 kb | 常规 PCR、短片段克隆 |
| 1 kb ladder | 0.5 kb 到 10 kb 左右 | 普通质粒酶切、中等 PCR |
| 1 kb plus / 2-log ladder | 覆盖更宽 | 不确定片段范围时更方便 |
| Low molecular weight ladder | 低分子量片段 | 小 DNA 或小 RNA 相关分析 |
| Lambda digest ladder | 特定酶切片段 | 经典大小参照和教学 |
| PFG ladder | 超大片段 | [PFGE](<../用(实验流程内容篇)/PFGE.md>) |

NEB Quick-Load Purple 1 kb DNA Ladder 的例子显示，其 size range 为 500 bp 到 10 kb，并且推荐 0.8%-1.2% agarose gel，最佳分离常在 1% gel。参考：[NEB Quick-Load Purple 1 kb DNA Ladder](https://www.neb.com/products/n0552-quick-load-purple-1-kb-dna-ladder)。

## 选择逻辑

| 你的目标片段 | 推荐 ladder |
| --- | --- |
| 50-500 bp | 50 bp 或 100 bp ladder |
| 200 bp-3 kb | 100 bp ladder 或 1 kb plus ladder |
| 500 bp-10 kb | 1 kb ladder |
| 大于 10 kb | large fragment ladder 或 lambda digest |
| 超大基因组 DNA | PFG ladder |

不要只看 ladder 名字。真正要看的是目标片段附近有没有足够密集、足够容易辨认的条带。例如目标是 700 bp，100 bp ladder 通常比 1 kb ladder 更容易判断；目标是 5 kb，1 kb ladder 更自然。

## Ready-to-load 与普通 ladder

| 类型 | 优点 | 注意事项 |
| --- | --- | --- |
| 普通 ladder | 可按需要和 loading dye 混合 | 需要自己加 [Loading Dye](<Loading Dye.md>) |
| Ready-to-load ladder | 已含 loading dye，可直接上样 | 不要重复加 loading dye |
| Prestained / colored ladder | 前沿和参照更容易看 | 要确认染料是否影响迁移或成像 |

NEB Quick-Load Purple ladder 是 ready-to-load molecular weight DNA marker，含 proprietary purple loading dye，可直接上样。参考：[NEB Quick-Load Purple 1 kb DNA Ladder](https://www.neb.com/products/n0552-quick-load-purple-1-kb-dna-ladder)。

## 使用方法

- 上样前轻轻混匀，短暂离心收集液体。
- 按说明书推荐体积上样，常见为每孔 5-10 µL，具体取决于 ladder 浓度和胶孔大小。
- 每块胶至少跑一个 ladder；复杂胶建议左右各跑一个，方便判断是否跑歪。
- 若要发表或长期归档，保留 ladder lane，不要裁到完全看不到分子量标准。
- 记录 ladder 品牌、货号、批号和上样量；不同 ladder 的条带强度不能随意比较。

## 注意事项

- ladder 条带位置受胶浓度、缓冲液、电压、染料和运行时间影响。
- 不同品牌或不同版本 ladder 的参考条带强度不同，不要用肉眼直接跨品牌定量。
- 目标条带如果远离 ladder 清晰区域，大小估算误差会变大。
- 样本条带是质粒不同构象时，不应按线性 DNA ladder 直接估算真实大小，相关背景见 [DNA构象](<../番外/补充知识/DNA构象.md>)。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| ladder 看不到 | 忘记上样、染料不匹配、曝光不足 | 检查上样和 [核酸染料](核酸染料.md) |
| ladder 拖尾 | 上样过量、反复冻融、胶/缓冲液问题 | 减少上样量或换新 ladder |
| ladder 弯曲 | 胶不平、电泳发热、盐污染 | 降低电压，检查 buffer 和胶 |
| 目标大小判断困难 | ladder 范围不合适 | 换 50 bp/100 bp/1 kb/plus ladder |
| 左右 lane 位置不同 | 跑胶不均或胶歪 | 复杂胶左右各加 ladder |

## 购买与记录建议

常见供应商包括 [NEB](<../番外/试剂厂商/NEB.md>)、[Thermo Scientific](<../番外/试剂厂商/Thermo Scientific.md>)、[Bio-Rad](<../番外/试剂厂商/Bio-Rad.md>)、[Biotium](<../番外/试剂厂商/Biotium.md>) 等。新实验室建议至少备 100 bp ladder 和 1 kb ladder；做小片段、测序文库或 PFGE 时再补专用 ladder。

推荐记录字段：

```text
中文：DNA Ladder 名称 / 范围 / 品牌 / 货号 / 批号 / 上样量 / 胶浓度 / 缓冲液 / 染料 / 成像方式
English: ladder name / size range / brand / catalog number / lot number / loading volume / gel percentage / running buffer / stain / imaging method
```

## 小结

DNA Ladder 是跑胶图里的坐标尺。选对 ladder 比“随便上一个 marker”重要得多，因为 ladder 的范围、参考条带和上样量会直接影响你对 PCR、酶切、质粒构象和胶回收目标的判断。

## 参考来源

- [NEB DNA Markers and Ladders](https://www.neb.com/en/products/markers-and-ladders)
- [NEB Quick-Load Purple 1 kb DNA Ladder](https://www.neb.com/products/n0552-quick-load-purple-1-kb-dna-ladder)
