# EMCCD相机

## 一句话定义

EMCCD camera（Electron-multiplying charge-coupled device camera，电子倍增电荷耦合器件相机）是一类能在读出前对光生电子进行电子倍增的高灵敏科学相机，常用于极弱荧光、单分子、TIRF 和低光照活细胞成像。

EMCCD 的核心优势是通过 electron multiplication（电子倍增）降低有效读出噪声，让很少的光子也能被检测到；代价是视野、速度、动态范围和定量线性可能受 EM gain（电子倍增增益）影响。Hamamatsu、Andor/Oxford Instruments 和 Photometrics/Teledyne 的科学相机资料都将 EMCCD 作为弱光成像的重要平台之一。[参考：Hamamatsu EMCCD Cameras](https://www.hamamatsu.com/us/en/product/cameras/scientific-cameras/emccd-cameras.html)；[参考：Oxford Instruments Andor EMCCD Cameras](https://andor.oxinst.com/products/emccd-camera-series)

## 核心原理

```text
荧光光子进入CCD
→ 产生光生电子
→ 电子进入倍增寄存器
→ EM gain 放大电子信号
→ 再读出
→ 有效读出噪声降低
```

EMCCD 的关键是“读出前放大”，因此在极弱信号场景中非常有用。

## 适合用途

| 场景 | 为什么适合 |
| --- | --- |
| 单分子成像 | 光子数极少，需要低有效读噪 |
| [TIRF显微镜](TIRF显微镜.md) | 近膜弱信号和高速动态 |
| 低光照活细胞成像 | 可降低激发光强，减少光毒性 |
| 快速弱信号事件 | 在较短曝光下仍能检测 |
| 低表达荧光蛋白 | 弱信号可被放大 |

如果样本信号较强、大视野和高通量更重要，现代 [sCMOS相机](sCMOS相机.md) 往往更合适。

## EMCCD vs sCMOS vs CCD

| 维度 | EMCCD相机 | sCMOS相机 | [CCD相机](CCD相机.md) |
| --- | --- | --- | --- |
| 弱光检测 | 极强 | 很强 | 一般到好 |
| 读出噪声 | EM gain 后有效很低 | 低 | 通常较高 |
| 视野 | 常较小 | 通常较大 | 中等 |
| 帧率 | 中高 | 高 | 较低 |
| 动态范围 | 受 EM gain 影响 | 通常较好 | 中等 |
| 典型用途 | 单分子、TIRF、极弱光 | 宽场、活细胞、高通量 | 传统成像 |

EMCCD 不是 sCMOS 的全面替代。它更像弱光极限场景的专用工具。

## 关键参数

| 参数 | 影响 |
| --- | --- |
| EM gain | 放大弱信号，但过高会影响定量和动态范围 |
| Cooling temperature | 降低暗电流 |
| Readout speed | 影响帧率和噪声 |
| Exposure time | 信号量、运动模糊和光毒性 |
| Pixel size | 采样和灵敏度 |
| Multiplication noise | EM 过程引入额外噪声因素 |

## 使用注意事项

- EM gain 不是越高越好，过高会压缩动态范围并增加不确定性。
- 定量实验应固定 EM gain、曝光和读出模式。
- 避免强光照射导致饱和或损伤。
- 弱光实验中仍需设置阴性对照和背景区域。
- 活细胞成像要同时记录光强、曝光、帧率和总光剂量。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 图像有噪点 | 信号太弱、EM gain 过高 | 增加真实光子数，优化 gain |
| 强信号饱和 | EM gain 或曝光太高 | 降低 gain/曝光 |
| 定量不稳定 | EM gain 不一致或信号太低 | 固定参数，提高信噪比 |
| 视野不够 | 芯片较小 | 改用 sCMOS 或拼图 |
| 活细胞受损 | 光剂量过高 | 降低光强和采集频率 |

## 记录模板

中文模板：

```text
EMCCD 相机型号：
显微镜型号：
物镜：
染料/通道：
EM gain：
曝光时间：
读出速度：
温度：
binning：
帧率：
是否饱和：
原始文件位置：
备注：
```

English record template:

```text
EMCCD camera model:
Microscope model:
Objective:
Fluorophores / channels:
EM gain:
Exposure time:
Readout speed:
Temperature:
Binning:
Frame rate:
Saturation: yes / no
Raw file location:
Notes:
```

## 小结

EMCCD 相机适合极弱光和单分子类成像，尤其是 TIRF 和低光照活细胞实验。它的关键变量是 EM gain、曝光、冷却和动态范围。常规强信号或大视野实验中，sCMOS 往往更高效。

## 参考来源

- [Hamamatsu EMCCD Cameras](https://www.hamamatsu.com/us/en/product/cameras/scientific-cameras/emccd-cameras.html)
- [Oxford Instruments Andor EMCCD Cameras](https://andor.oxinst.com/products/emccd-camera-series)
