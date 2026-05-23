# TIRF显微镜

## 一句话定义

TIRF microscope（Total internal reflection fluorescence microscope，全内反射荧光显微镜）是一类利用 total internal reflection（全内反射）产生 evanescent field（倏逝场）来激发表面附近薄层荧光的显微镜。

TIRF 的核心特点是只激发玻璃-样本界面附近约百纳米量级的薄层，因此能显著降低细胞内部焦外背景，适合观察细胞膜附近事件、囊泡融合、受体动态和单分子成像。Nikon MicroscopyU、Leica 和 Olympus/Evident 的显微资料都将 TIRF 描述为近膜/界面成像的专门技术。[参考：Nikon MicroscopyU TIRF](https://www.microscopyu.com/techniques/fluorescence/total-internal-reflection-fluorescence-tirf-microscopy)；[参考：Leica TIRF Microscopy](https://www.leica-microsystems.com/science-lab/life-science/tirf-microscopy/)

## 核心原理

```text
激发光以大于临界角进入玻璃-样本界面
→ 发生全内反射
→ 界面上方形成很薄的倏逝场
→ 只激发表面附近荧光团
→ 深层背景大幅降低
```

TIRF 不是把图像“照得更亮”，而是把激发限制在非常薄的近膜区域。

## 适合用途

| 场景 | 原因 |
| --- | --- |
| 质膜附近蛋白动态 | 只激发表面附近 |
| 囊泡融合/胞吐 | 事件发生在膜附近 |
| 黏附斑 | 靠近玻璃底面 |
| 单分子成像 | 背景低，信噪比高 |
| 受体内吞初期 | 近膜事件清晰 |

TIRF 最适合玻璃底面附近的事件。如果目标在细胞核、细胞深处或厚组织中，TIRF 不是合适选择。

## TIRF vs 共聚焦 vs 宽场

| 维度 | TIRF | 共聚焦 | 宽场 |
| --- | --- | --- | --- |
| 激发深度 | 近膜薄层 | 焦平面光学切片 | 整个视野/厚度 |
| 背景 | 极低，限于界面附近 | 低 | 较高 |
| 适合位置 | 玻璃底面附近 | 细胞/组织内层 | 薄样本整体 |
| 三维能力 | 不适合整体 3D | 适合 Z-stack | 可做但焦外背景高 |
| 典型应用 | 近膜动态、单分子 | 共定位、厚样本 | 快速常规 IF |

## 样本要求

| 要求 | 原因 |
| --- | --- |
| 高质量玻璃底 | TIRF 依赖玻璃-样本界面 |
| 贴壁细胞或靠近玻璃的结构 | 倏逝场只覆盖近界面区域 |
| 高 NA 物镜 | 需要实现大角度入射 |
| 低背景染色 | 单分子/弱信号更依赖低背景 |
| 稳定焦平面 | 近膜薄层对漂移敏感 |

TIRF 对 [盖玻片](盖玻片.md) 厚度、物镜、[浸油](浸油.md) 和样本贴壁质量很敏感。

## 使用 protocol

1. 使用适合 TIRF 的玻璃底皿或盖玻片。
2. 选择高 NA [显微镜物镜](显微镜物镜.md)。
3. 设置激光入射角，找到 TIRF 条件。
4. 用低激光功率寻找样本并避免光漂白。
5. 采集近膜信号，同时设置宽场或共聚焦参考通道。
6. 对活细胞实验维持温度、CO2 和培养基条件。

## 注意事项

- TIRF 只代表近玻璃界面区域，不代表整个细胞。
- 细胞没有贴好或目标不在近膜层，可能看不到信号。
- 激光角度、物镜 NA、折射率都会影响 penetration depth（穿透深度）。
- 活细胞 TIRF 要注意光毒性和焦平面漂移。
- TIRF 图像解释时要避免把“没有信号”误读为“蛋白不存在”。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 信号很弱 | 目标不在近膜区域、TIRF 角度不合适 | 调整角度，用宽场检查总信号 |
| 背景仍高 | 未达到 TIRF 条件或样本背景高 | 重新调角度，优化染色 |
| 细胞边缘亮 | 贴壁形态和膜曲率影响 | 结合宽场/共聚焦解释 |
| 活细胞漂移 | 温度不稳或机械漂移 | 使用环境控制和焦点锁定 |
| 重复性差 | 盖玻片厚度或浸油不匹配 | 固定耗材和物镜条件 |

## 记录模板

中文模板：

```text
TIRF 显微镜型号：
物镜 NA：
样本载体：
浸油：
激光线：
TIRF 角度/穿透深度：
染料组合：
曝光时间：
激光功率：
活细胞环境：
是否有宽场/共聚焦参考：
原始文件位置：
备注：
```

English record template:

```text
TIRF microscope model:
Objective NA:
Sample carrier:
Immersion oil:
Laser lines:
TIRF angle / penetration depth:
Fluorophore combination:
Exposure time:
Laser power:
Live-cell environment:
Widefield / confocal reference included: yes / no
Raw file location:
Notes:
```

## 小结

TIRF 显微镜是近膜和界面事件的强工具。它通过限制激发深度降低背景，适合质膜动态、囊泡事件和单分子观察。解释 TIRF 图像时必须记住：它看到的是近玻璃表面薄层，而不是整个细胞。

## 参考来源

- [Nikon MicroscopyU: TIRF Microscopy](https://www.microscopyu.com/techniques/fluorescence/total-internal-reflection-fluorescence-tirf-microscopy)
- [Leica Science Lab: TIRF Microscopy](https://www.leica-microsystems.com/science-lab/life-science/tirf-microscopy/)
