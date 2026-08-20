# RanobeTime

A web platform for browsing, tracking, and reading light novels / web novels ("ranobe"). Built as a Django web application with a custom HTML/CSS/JavaScript front end and a curated catalogue of titles.

## Overview

RanobeTime lets readers explore a catalogue of novels, filter and search through them, open individual title and chapter pages, and manage a personal account. The catalogue was assembled from a maintained spreadsheet of book information and served through Django templates and views.

## Features

- Browse a catalogue of light novels with cover art and details
- Individual novel pages, chapter pages, and a reading view
- Navigation by authors, translators, genres, tags, and language
- User accounts: registration, login, profile, and password reset
- Slideshow / carousel and animated elements on the landing page
- Media and static asset management through Django
- Informational pages (FAQ, privacy policy, terms of use, team bios)

## Tech Stack

- **Backend:** Python, Django
- **Frontend:** HTML, CSS, JavaScript (Django templates)
- **Database:** SQLite (development)
- **Data source:** Curated Excel catalogue of titles

## Project Structure

ranobe/ranobe2/
├── manage.py
├── work/ # Django project config (settings, urls, wsgi/asgi)
├── home/ # Main app (models, views, forms, urls, admin, templatetags)
├── templates/ # Page templates (catalogue, chapter, reading, login, profile, …)
├── static/ # CSS, JS, and images
└── media/ # User-uploaded media (gitignored)


> Earlier front-end prototypes, demo videos, and project archives are kept locally in an `archive/` folder that is excluded from version control.

## Getting Started

```bash
cd ranobe/ranobe2
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install django pillow
python manage.py migrate
python manage.py runserver
```

Then open `http://127.0.0.1:8000/`.

## Notes

Large binaries (demo videos, project archives, the local database, media uploads, and the virtual environment) are intentionally excluded from version control via `.gitignore`.

## Status

Academic / team project.
