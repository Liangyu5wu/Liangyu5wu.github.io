---
title: GBCR
summary: The GigaBit Cable Receiver (GBCR) ASIC
date: 2025-03-31
type: docs
math: false
tags:
  - LHC Upgrade
image:
  caption: 'GBCR QC/SEU Setup'
---

## Introduction

**The GigaBit Cable Receiver (GBCR) ASIC is designed as an equalizer chip to compensate the ITk pixel data transmission loss in the high frequency range after the twinax Type-1 data E-links at 1.28Gb/s.**

**There are ~4500 GBCR chips in the ITk Pixel system.**

<figure style="text-align: center;">
  <img src="ITK_readout_system.png" alt="ATLAS ITK readout system" width="100%">
  <figcaption>ATLAS ITK readout system</figcaption>
</figure>

The TWiki page for GBCR: [GBCR](https://twiki.cern.ch/twiki/bin/viewauth/Atlas/GBCR)

The software link: [GBCR3_SLAC](https://github.com/Liangyu5wu/GBCR3_SLAC)

The GBCR Testing Github: [GBCR-Testing](https://github.com/OSU-HEP-HDL/GBCR-Testing)

## Performed QC Tests

1. EQ Amplitude Factors Test
2. Disable RX Channel Function Test
3. Retiming Mode Function Test
4. Retiming Mode & Voted Mode Correlation Test
5. RX 5 Channel Retiming Mode Test

## Experiment Tips:

1. Be careful when plugging or unplugging MMCX cables. Try to hold the connector part firmly, otherwise the pins can easily become loose or detached.

2. When placing the ASIC, align the circular marking on the chip with the PIN1 position on the receiver board.


## Recent Tasks

{{< spoiler text="Click to view the breakdown" >}} 
1. Test the influence from the cable lengths for the time window in retiming mode
2. Retiming mode and equalizer amplitude correlation
3. QC test procedures 


{{< /spoiler >}}
