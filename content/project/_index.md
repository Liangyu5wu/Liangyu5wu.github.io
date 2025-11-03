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
          filename: love_me_later.jpg
          filters:
            brightness: 0.4
          size: contain
          position: center
          parallax: true
---
