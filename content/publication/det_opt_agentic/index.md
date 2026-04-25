---
title: 'Phenomenological Detector Design and Optimization in Vertically-Integrated Differentiable Full Simulations with Agentic-AI'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - W. Chung
  - Q. Liu
  - admin
  - J. Gonski

# Author notes (optional)
author_notes:

date: '2026-04-23T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2026-04-23T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["preprint"]

# Publication name and optional abbreviated publication name.
publication: "Preprint"
publication_short: "Preprint"

abstract: 'We present the first implementation of AI agents into the design and optimization of detectors in high-energy physics experiments via a bilevel optimization framework that vertically integrates detector geometry, front-end digitization, and high-level reconstruction algorithm parameters in differentiable full simulations. Using the example of a dual-readout, segmented crystal EM calorimeter with a baseline resolution of 3%/√E, we investigate the capabilities and value propositions of AI agents in the identification and reduction of key detector parameters and in the nonlinear traversal of a given detector design full parameter space. We find that LLM-based reasoning models today, without being given additional experiment-specific context, are able to effectively execute complex workflows and proactively suggest generic but relevant avenues for further study or improvement. Here, we demonstrate an AI agent ability to use the workflow to simultaneously optimize a representative subset of vertically integrated detector parameters: crystal granularity and length, number of ADC bits and sampling rate, and center-of-gravity hit-clustering radius. We find that effective integration of agents into the complex workflows of frontier areas of research not only significantly reduces labor and compute, but opens up efficient avenues for computational validation of first-principles design choices. While the ability to make autonomous leaps of physics-motivated judgment or insight is not demonstrated in this work, this study defines the current frontier of experimental design methods in high-energy physics.'

# Summary. An optional shortened abstract.
summary: First demonstration of agentic-AI driven detector optimization using vertically-integrated bilevel framework for dual-readout calorimeters.

tags:
  - Detector R&D
  - Machine Learning
  - AI Agents
  - Calorimetry

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Link
#   url: 

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
  caption: 'Bilevel detector optimization'
  focal_point: 'Smart'
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

This work demonstrates the first application of AI agents to phenomenological detector design in high-energy physics, leveraging a novel bilevel optimization framework that simultaneously optimizes detector geometry and reconstruction parameters. Through agent-driven workflow execution using the SciFi framework with Claude Code Opus 4.6, we successfully reduced an 11-dimensional optimization problem to tractable subspaces, identifying optimal configurations for a dual-readout crystal ECAL. Future work will explore fully open-weight LLM backbones and extend the framework to broader detector subsystems and physics objectives, while investigating the integration of domain-specific knowledge into agentic reasoning capabilities.
