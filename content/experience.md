---
title: 'Experience'
date: 2024-10-24
type: landing

design:
  spacing: '5rem'
  css_class: dark
  background:
    color: black
    image:
      filename: love_me_later.jpg
      filters:
        brightness: 0.4
      size: cover
      position: center
      parallax: true

# Note: `username` refers to the user's folder name in `content/authors/`

# Page sections
sections:
  - block: resume-experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: false
  - block: resume-skills
    content:
      title: Skills & Hobbies
      username: admin
    design:
      show_skill_percentage: false
  - block: resume-awards
    content:
      title: Awards
      username: admin
  - block: resume-languages
    content:
      title: Languages
      username: admin
---
