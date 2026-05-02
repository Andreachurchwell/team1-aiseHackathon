# team1-aiseHackathon

MVP pitch deck and planning docs for Team Three's Company.

## MVP Concept
Two-role learning assistant app: a curriculum-grounded assistant for cohort programs. Students ask questions in a chat UI and receive Socratic guidance, while admins see logged question patterns in a simple dashboard.

## Problem Frame
Cohort programs move fast and have a lot of materials: PDFs, slides, markdown files, recordings, notes, and assignments. When students get stuck, it is easy to feel overwhelmed and behind quickly. Their fallback is usually asking classmates, Googling, or using ChatGPT for direct answers that may not match the curriculum.

Our angle: help students get unstuck using the program's own materials, while helping instructors see repeated confusion patterns before students fall behind.

For the MVP, admins can provide course coverage materials to the backend ingestion path, but a polished admin upload UI is out of scope for June 2.

## Files in this repo
- `index.html` - presentation deck for the MVP pitch
- `styles.css` - clean presentation styling
- `script.js` - slide navigation
- `assets/` - team photo and supporting visuals
- `JOURNEY_MAP.md` - student/admin journey
- `ARCHITECTURE_SKETCH.md` - RAG, ingestion, frontend, and admin architecture
- `MVP_FEATURES.md` - binding June 2 MVP in/out scope
- `SPEAKING_POINTS.md` - light notes for the 7-minute pitch

## How to Present
1. Open `index.html` in your browser.
2. Use arrow keys or buttons to navigate.
3. Keep the pitch tight: problem, users, architecture, scope, UX, ownership, value.

## Sprint Focus
- Student chat that guides learning from actual curriculum materials.
- Admin dashboard that makes de-identified student confusion patterns visible without technical help.
- Lightweight AI/search pipeline that can run locally for the hackathon demo.

## Tech Stack
- LLM: GPT-4o-mini through the OpenAI API.
- Embeddings: `text-embedding-3-small`.
- Vector DB: Chroma.
- Backend: FastAPI.
- Auth: JWT via `python-jose`.
- Logging: SQLite for Phase 1.
- Frontend: React.
- Containerization: Docker + Docker Compose.
- CI/CD: GitHub Actions.

## Stack Rationale
The stack is designed for a small cohort MVP: low cost, privacy-conscious, locally runnable, and easy to explain. GPT-4o-mini is projected under $5/month for 20 students, curriculum embeddings are a one-time cost under $0.01, Chroma and SQLite avoid infrastructure overhead, and Docker Compose gives the team a one-command demo path.
