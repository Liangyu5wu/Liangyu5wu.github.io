---
title: 'Edge Machine Learning for Cluster Counting in Next-Generation Drift Chambers'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - D. Yilmaz
  - admin
  - J. Gonski
  - D. Rankin
  - C. Herwig

# Author notes (optional)
author_notes:

date: '2025-11-13T00:00:00Z'
doi: 'https://arxiv.org/abs/2511.10540v2'

# Schedule page publish date (NOT publication's date).
publishDate: '2025-11-13T22:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard. 'paper-conference'
publication_types: ["arxiv"]

# Publication name and optional abbreviated publication name.
publication: "arxiv"
publication_short: "arxiv"

abstract: Drift chambers have long been central to collider tracking, but future machines like a Higgs factory motivate higher granularity and cluster counting for particle ID, posing new data processing challenges. Machine learning (ML) at the "edge", or in cell-level readout, can dramatically reduce the off-detector data rate for high-granularity drift chambers by performing cluster counting at-source. We present machine learning algorithms for cluster counting in real-time readout of future drift chambers. These algorithms outperform traditional derivative-based techniques based on achievable pion-kaon separation. When synthesized to FPGA resources, they can achieve latencies consistent with real-time operation in a future Higgs factory scenario, thus advancing both R&D for future collider detectors as well as hardware-based ML for edge applications in high energy physics.

# Summary. An optional shortened abstract.
summary: A demonstration of ML-based cluster counting for drift chambers is presented. 

tags:
  - Detector R&D
  - Machine Learning

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
- name: Link
  url: https://arxiv.org/abs/2511.10540v2

url_pdf: ''
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
  caption: 'Waveform visualization from Garfield++ Simulation'
  focal_point: 'Smart'
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
   - On-chip-ml

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

This work demonstrates the first ML approaches that have both improved pion-kaon separation with respect to traditional methods, as well as a clear path toward edge implementation given FPGA synthesis studies. Future work will focus on evaluating the power consumption of such designs and ensuring compatibility with the specifications of future drift chambers, and look into different on-chip implementations that afford a wider variety of data compression options.
