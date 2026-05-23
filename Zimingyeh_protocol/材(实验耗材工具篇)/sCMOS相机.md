# sCMOS相机

## 一句话定义

sCMOS camera（scientific complementary metal-oxide-semiconductor camera，科学级互补金属氧化物半导体相机）是一类常用于 [荧光显微镜](荧光显微镜.md) 的高灵敏、高速度、低噪声相机，适合宽场荧光、活细胞成像、高内涵成像和部分弱信号成像。

sCMOS 的核心优势是大视野、高帧率、低读出噪声和较高 quantum efficiency（量子效率，QE）。Hamamatsu、Photometrics/Teledyne 和 Andor 等显微相机厂家都将 sCMOS 作为现代生命科学成像的主流相机平台之一。[参考：Hamamatsu sCMOS Cameras](https://www.hamamatsu.com/us/en/product/cameras/scientific-cameras/scmos-cameras.html)；[参考：Photometrics sCMOS Cameras](https://www.photometrics.com/products/scmos-cameras)

## 它在显微镜里负责什么

在 [宽场荧光显微镜](宽场荧光显微镜.md) 或 spinning disk confocal（转盘共聚焦）等系统中，相机负责把荧光信号转化成数字图像：

```text
样本发出荧光
→ 物镜收光
→ 滤光片选择发射光
→ sCMOS感光
→ 像素信号读出
→ 图像文件
```

相机不能替代好的染色和光路，但相机性能会决定弱信号能不能被可靠记录。

## 核心参数

| 参数 | 英文 | 意义 |
| --- | --- | --- |
| 量子效率 | Quantum efficiency, QE | 入射光子被转换为电子的效率 |
| 读出噪声 | Read noise | 读出电子信号时引入的噪声 |
| 暗电流 | Dark current | 无光时热噪声，长曝光更重要 |
| 像素大小 | Pixel size | 影响采样、视野和灵敏度 |
| 帧率 | Frame rate | 活细胞动态和高速成像能力 |
| 动态范围 | Dynamic range | 同时记录强弱信号的能力 |
| 满阱容量 | Full well capacity | 像素可容纳的最大电子数 |

高 QE 和低噪声有利于弱信号；高帧率有利于动态过程；大动态范围有利于同时记录强弱结构。

## sCMOS vs CCD vs EMCCD

| 维度 | sCMOS相机 | [CCD相机](CCD相机.md) | [EMCCD相机](EMCCD相机.md) |
| --- | --- | --- | --- |
| 速度 | 高 | 通常较低 | 中等 |
| 视野 | 通常大 | 取决于芯片 | 通常较小 |
| 弱信号 | 很好 | 一般到好 | 极弱信号很强 |
| 读出噪声 | 低 | 较高 | 电子倍增后有效读噪低 |
| 动态范围 | 通常较好 | 中等 | 可能受 EM gain 影响 |
| 常见用途 | 活细胞、宽场、高通量 | 传统显微成像 | 单分子、极弱光、TIRF |

现代多数常规荧光成像会优先考虑 sCMOS；极弱信号和单光子级应用可能仍会考虑 EMCCD 或其他专用探测器。

## 什么时候优先选择sCMOS

| 场景 | 原因 |
| --- | --- |
| 活细胞延时成像 | 高帧率、低噪声 |
| 多孔板扫描 | 大视野、高通量 |
| 常规免疫荧光 | 灵敏度和速度平衡好 |
| 细胞动态过程 | 速度快，减少运动模糊 |
| 低光毒成像 | 可在较低光强下采集可用信号 |

如果实验需要极高空间分辨或光学切片，单靠 sCMOS 不够，还要看显微镜类型、[显微镜物镜](显微镜物镜.md)、照明和样本制备。

## 使用注意事项

- 不要用自动曝光做不同实验组的定量比较。
- 避免像素饱和，饱和区域不能用于定量。
- 相机 gain、offset、bit depth 和 binning 会影响图像数值。
- 活细胞成像时，降低曝光和光强有助于减少 [光毒性](../番外/补充知识/光毒性.md)。
- 原始图像和元数据应保存，后处理图不能替代原始数据。

## 常见错误与 troubleshooting

| 问题 | 可能原因 | 建议 |
| --- | --- | --- |
| 图像噪声大 | 曝光太短、光子不足、gain 过高 | 增加曝光或光强，优化染色 |
| 信号饱和 | 曝光太长或光强太高 | 降低曝光/光强/gain |
| 动态成像拖影 | 帧率低或曝光长 | 缩短曝光，提高帧率 |
| 定量不一致 | 自动曝光或相机参数变化 | 固定参数并保存元数据 |
| 视野边缘不均 | 光路照明或平场问题 | 做 flat-field correction 或检查光路 |

## 记录模板

中文模板：

```text
sCMOS 相机型号：
显微镜型号：
物镜：
染料/通道：
曝光时间：
gain：
offset：
binning：
bit depth：
帧率：
是否自动曝光：
原始文件位置：
备注：
```

English record template:

```text
sCMOS camera model:
Microscope model:
Objective:
Fluorophores / channels:
Exposure time:
Gain:
Offset:
Binning:
Bit depth:
Frame rate:
Auto-exposure: yes / no
Raw file location:
Notes:
```

## 小结

sCMOS 相机是现代荧光显微成像的主力检测器之一，适合速度、视野和灵敏度都要兼顾的实验。做定量成像时，记录曝光、gain、binning、bit depth 和原始文件，比只保存一张调亮后的图片重要得多。

## 参考来源

- [Hamamatsu sCMOS Cameras](https://www.hamamatsu.com/us/en/product/cameras/scientific-cameras/scmos-cameras.html)
- [Photometrics sCMOS Cameras](https://www.photometrics.com/products/scmos-cameras)
