# RanobeTime

A web platform for browsing, tracking, and reading light novels / web novels ("ranobe"). The project pairs a Django backend with a custom HTML/CSS/JavaScript front end and a curated catalogue of titles.

## Overview

RanobeTime lets readers explore a catalogue of novels, filter and search through them, and view individual title pages with cover art and metadata. The catalogue was assembled from a maintained spreadsheet of book information and rendered through a set of dynamic templates.

## Features

- Browse a catalogue of light novels with cover images and details
- Search and filter titles
- Individual novel detail pages
- Slideshow / animated navigation elements on the landing page
- Media and static asset management through Django

## Tech Stack

- **Backend:** Python, Django
- **Frontend:** HTML, CSS, JavaScript
- **Database:** SQLite (development)
- **Data source:** Curated Excel catalogue of titles

## Project Structure

```
#01 Project - RanobeTime/
├── ranobe/ranobe2/       # Django application (manage.py, apps, templates, static, media)
├── extra/                # Standalone HTML/CSS/JS prototypes and filters
├── RanobeTime/           # Front-end assets and earlier iterations
├── Special/ , My files/  # Supporting assets
├── from Eyyub/           # Cover art contributed to the project
└── Book's information list (main).xlsx   # Source catalogue
```

## Getting Started

```bash
cd ranobe/ranobe2
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install django
python manage.py migrate
python manage.py runserver
```

Then open `http://127.0.0.1:8000/`.

## Notes

Large binaries (demo videos, project archives, the local database, and media uploads) are intentionally excluded from version control via `.gitignore`. Cover images and datasets can be regenerated or re-added locally.

## Status

Academic / personal project.
