---
title: 'Talks'
date: 2025-03-23
type: landing

design:
  spacing: '6rem'

# Note: `username` refers to the user's folder name in `content/authors/`

# Page sections
sections:
  - block: collection
    demo: true
    content:
      title: Talks
      text: ""
      filters:
        folders:
          - event
        exclude_featured: false
    design:
      view: citation
  - block: collection
    content:
      title: Talks
      subtitle: ''
      text: ''
      # Page type to display. E.g. post, talk, publication...
      page_type: talk
      # Choose how many pages you would like to display (0 = all pages)
      count: 0
      # Filter on criteria
      filters:
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: date-title-summary
---
