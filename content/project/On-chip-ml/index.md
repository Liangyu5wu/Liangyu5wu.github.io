---
title: eFPGA Technology
summary: Machine Learning At-source
date: 2025-07-11
type: docs
math: false
tags:
  - Detector R&D
  - Machine Learning
image:
  caption: 'On-chip Machine Learning'
---

## Overall Goals

**To develop embedded FPGA technology that enables real-time AI/ML deployment on detector hardware for future ultra-high data rate experiments.**


## Edge-Deployed Algorithms

### Dual-readout Calorimeter

*Extract C&S components from waveform samples*

<figure style="text-align: center;">
  <img src="rising_edge.png" alt="Prediction of the C&S components" width="60%">
  <figcaption>Prediction of the C&S components</figcaption>
</figure>

Github Link: [Models&Plotting](https://github.com/Liangyu5wu/On-chip_ML_DRO)

#### Milestones

{{< spoiler text="Click to view the breakdown" >}} 
1. Developed and evaluated algorithms for e- testbeam data
{{< /spoiler >}}

### Drift Chamber

*Predict ionization cluster numbers (dN/dx) for PID*

<figure style="text-align: center;">
  <img src="Peak_distribution.png" alt="Classic Distribution of Electrons in a DCH" width="60%">
  <figcaption>Distribution of Electrons in a DCH Cell</figcaption>
</figure>


#### Milestones

{{< spoiler text="Click to view the breakdown" >}} 
1. Developed and evaluated algorithms for a Garfield++ simulation dataset
{{< /spoiler >}}

## eFPGA Co-design

**Design eFPGA chips with SLAC Technology Innovation Directorate (TID).**
