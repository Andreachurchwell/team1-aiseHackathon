# team1-aiseHackathon

MVP pitch deck and planning docs for Team Three's Company.

## MVP Concept
Curriculum Support MVP: a curriculum-grounded Q&A system for cohort programs. Students get guided help based on their actual course materials, and admins get visibility into where students are struggling.

## Problem Frame
Cohort programs can have 100+ curriculum docs scattered across PDFs, markdown, slides, and other formats. Students cannot easily find or query the material. Instructors and admins do not have a clear view of where confusion is happening. The current fallback is asking a classmate or Googling the answer, neither of which reliably supports learning.

## Files in this repo
- `index.html` - presentation deck for the MVP pitch
- `styles.css` - deck styling and animated background
- `script.js` - slide navigation and ambient background animation
- `assets/` - team photo and supporting visuals
- `JOURNEY_MAP.md` - student/admin journey
- `ARCHITECTURE_SKETCH.md` - RAG, ingestion, frontend, and admin architecture
- `MVP_FEATURES.md` - phase 1 feature list and acceptance criteria

## How to Present
1. Open `index.html` in your browser.
2. Use arrow keys or buttons to navigate.
3. Keep the problem framing tight: students need guided help, admins need signal.

## Sprint Focus
- RAG pipeline with retrieval, ranking, Socratic response logic, and guardrails.
- Ingestion pipeline for messy curriculum docs.
- React frontend with student chat, role routing, logging, and admin view.
