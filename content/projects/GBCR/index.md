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

## Current Status

**The GigaBit Cable Receiver (GBCR) ASIC is designed as an equalizer chip to compensate the ITk pixel data transmission loss in the high frequency range.**

**There are ~4500 GBCR chips in the ITk Pixel system.**

<figure style="text-align: center;">
  <img src="ITK_readout_system.png" alt="ATLAS ITK readout system" width="100%">
  <figcaption>ATLAS ITK readout system</figcaption>
</figure>

The TWiki page for GBCR: [GBCR](https://twiki.cern.ch/twiki/bin/viewauth/Atlas/GBCR)

My Github Link: [GBCR3_SLAC](https://github.com/Liangyu5wu/GBCR3_SLAC)

The GBCR Testing Github: [GBCR-Testing](https://github.com/OSU-HEP-HDL/GBCR-Testing)

## Recent Tasks

{{< spoiler text="Click to view the breakdown" >}} 
1. Modify the summary part of main.py code

2. Scan in the retimed mode first and stay in the bad phase point, then go back to the voted mode and check if there are correlated

3. Do several new power-cycling and check the good window region in retimed mode


{{< /spoiler >}}
