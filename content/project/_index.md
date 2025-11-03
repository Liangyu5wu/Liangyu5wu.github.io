---
title: Project
summary: My Projects
subtitle: My workspace and please have fun!
type: landing

cascade:
  - _target:
      kind: page
    params:
      show_breadcrumb: true

sections:
  - block: collection
    id: project
    content:
      title: Project
      text: A collection of my workspace and please have fun!
      filters:
        folders:
          - project
    design:
      view: article-grid
      columns: 2
      css_class: dark
      background:
        color: black
        image:
          filename: electronics/FPGA_KC705.jpg
          filters:
            brightness: 0.4
          size: cover
          position: center
          parallax: true
---
