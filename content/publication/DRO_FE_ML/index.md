---
title: 'Machine Learning Enables Real-Time Waveform Decomposition for Dual-Readout Calorimetry'

# Authors
authors:
  - admin
  - Q. Liu
  - M. T. Lucchini
  - J. Gonski
  - M. Campajola
  - S. Moneta

# Author notes (optional)
date: '2026-04-28T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2026-04-28T00:00:00Z'

# Publication type.
publication_types: ["preprint"]

# Publication name and optional abbreviated publication name.
publication: "Preprint"
publication_short: "Preprint"

abstract: 'Dual-readout calorimeters achieve superior energy resolution by simultaneously measuring Cherenkov and scintillation signals for event-by-event electromagnetic fraction correction, making them attractive for next-generation Higgs factories. However, full waveform readout required for time-based signal separation presents significant off-detector data rate challenges. We present a systematic comparison of machine learning and template fitting approaches for separating scintillation and Cherenkov light components in homogeneous dual-readout calorimeters across three representative crystal types. ML models achieve comparable signal extraction performance at lower sampling rates than template fitting, with a single model trained over a range of incident particle energies demonstrating robust performance. FPGA-compatible compression achieves latencies suitable for real-time application. This work establishes both baseline template fitting performance and ML-enhanced alternatives for crystal-based dual-readout calorimeters, offering practical pathways towards front-end feature extraction that mitigates data rate challenges in future detector designs for high-luminosity collider environments.'

# Summary. An optional shortened abstract.
summary: ML-based waveform decomposition enables real-time Cherenkov/scintillation separation in dual-readout crystal calorimeters with reduced sampling requirements and FPGA-compatible latency.

tags:
  - Calorimetry
  - Machine Learning
  - Detector R&D

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Link
#   url: 

url_pdf: 'https://arxiv.org/abs/2604.26090'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Waveform decomposition for dual-readout calorimetry'
  focal_point: 'Smart'
  preview_only: false

# Associated Projects (optional).
projects: [On-chip-ml]

# Slides (optional).
slides: ""
---

This work addresses critical data rate challenges in dual-readout calorimeters for future collider experiments by demonstrating machine learning approaches that enable real-time waveform decomposition in front-end electronics. Through systematic comparison across three crystal types, we show that ML models match template fitting performance while operating at reduced sampling rates, enabling practical implementation in FPGA firmware. The demonstrated energy-robust training and low-latency inference establish a viable pathway for front-end feature extraction, significantly reducing off-detector bandwidth requirements while maintaining the superior energy resolution characteristics that make dual-readout technology attractive for precision measurements at facilities such as FCC-ee.
