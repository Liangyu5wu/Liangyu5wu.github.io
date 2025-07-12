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
        image:
          filename: project_bkg.png
          filters:
            brightness: 0.8
          size: cover
          position: center
          parallax: true
---
