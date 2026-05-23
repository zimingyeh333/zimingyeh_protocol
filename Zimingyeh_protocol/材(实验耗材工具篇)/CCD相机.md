# CCD相机

## 一句话定义

CCD camera（Charge-coupled device camera，电荷耦合器件相机）是一类传统科学成像相机，曾长期用于显微镜、凝胶成像、天文和弱光成像，在生命科学显微成像中现在常被 [sCMOS相机](sCMOS相机.md) 或 [EMCCD相机](EMCCD相机.md) 替代。

CCD 的核心特点是像素电荷按序转移并读出，图像均一性和传统成像质量较好；但速度、读出噪声和视野灵活性通常不如现代 sCMOS。Hamamatsu 和 Photometrics 等科学相机厂商的资料中，CCD/EMCCD/sCMOS 常作为不同代际和不同弱光场景的相机平台比较。[参考：Hamamatsu Scientific Cameras](https://www.hamamatsu.com/us/en/product/cameras/scientific-cameras.html)；[参考：Photometrics Scientific Cameras](https://www.photometrics.com/)

## 核心特点

| 特点 | 说明 |
| --- | --- |
| 图像均一性 | 传统 CCD 常有较好均一性 |
| 读出方式 | 电荷逐行/逐列转移后读出 |
| 速度 | 通常低于 sCMOS |
| 弱光能力 | 取决于冷却、读出噪声和 QE |
| 现代定位 | 传统平台，很多场景被 sCMOS/EMCCD 替代 |

CCD 仍可能出现在老式显微镜、凝胶成像仪、化学发光成像仪或特定低噪声相机系统中。

## 适合用途

- 传统宽场荧光显微成像。
- 凝胶或 blot 成像系统。
- 低速、长曝光、固定样本成像。
- 对成像速度要求不高的教学或常规记录。

如果需要高速活细胞、大视野、高通量或低光毒成像，现代 sCMOS 通常更有优势。

## CCD vs sCMOS vs EMCCD

| 维度 | CCD相机 | sCMOS相机 | EMCCD相机 |
| --- | --- | --- | --- |
| 速度 | 较慢 | 高 | 中高 |
| 视野 | 中等 | 大 | 常较小 |
| 弱光 | 依型号而定 | 好 | 极弱光强 |
| 读出噪声 | 相对较高 | 低 | EM gain 后有效低 |
| 典型应用 | 传统显微/凝胶成像 | 现代宽场/活细胞 | 单分子/TIRF |

## 关键参数

| 参数 | 影响 |
| --- | --- |
| QE | 光子转换效率 |
| Read noise | 弱光成像噪声 |
| Cooling | 降低暗电流 |
| Exposure time | 信号量和运动模糊 |
| Pixel size | 采样和灵敏度 |
| Bit depth | 灰度动态范围 |

## 注意事项

- 老式 CCD 系统可能有较慢读出和较高噪声，不适合快速动态。
- 长曝光需要关注暗电流和冷却温度。
- 定量图像应避免自动曝光和饱和。
- 不同相机之间灰度值不能直接比较。
- 记录相机型号和采集软件版本很重要。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 图像噪声高 | 读出噪声/暗电流高 | 降低温度，延长曝光或换相机 |
| 活细胞动态模糊 | 帧率低或曝光长 | 换 sCMOS 或缩短曝光 |
| 弱信号看不到 | QE 低或噪声高 | 换更灵敏相机/染料 |
| 定量不可比 | 曝光或增益不同 | 固定参数 |
| 图像饱和 | 曝光太长 | 降低曝光 |

## 记录模板

中文模板：

```text
CCD 相机型号：
显微镜/成像仪：
物镜：
染料/信号类型：
曝光时间：
温度：
binning：
bit depth：
是否自动曝光：
是否饱和：
原始文件位置：
备注：
```

English record template:

```text
CCD camera model:
Microscope / imaging system:
Objective:
Fluorophore / signal type:
Exposure time:
Temperature:
Binning:
Bit depth:
Auto-exposure: yes / no
Saturation: yes / no
Raw file location:
Notes:
```

## 小结

CCD 相机是科学成像的经典平台，仍可能在传统显微镜和成像仪中出现。它适合低速、固定样本或常规记录，但现代弱光、高速和高通量成像通常优先考虑 sCMOS 或 EMCCD。

## 参考来源

- [Hamamatsu Scientific Cameras](https://www.hamamatsu.com/us/en/product/cameras/scientific-cameras.html)
- [Photometrics Scientific Cameras](https://www.photometrics.com/)
