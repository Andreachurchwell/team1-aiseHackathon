# 7-Minute Speaker Notes

## 1. Problem Framing
- Cohort programs move fast and have a lot of materials: PDFs, slides, markdown files, recordings, notes, and assignments.
- When students get stuck, it is easy to feel overwhelmed and behind quickly.
- The fallback is asking classmates, Googling, or using ChatGPT for direct answers.
- Those answers may not match the curriculum and may not support learning.
- Our angle: help students get unstuck using the program's own materials, while helping instructors see repeated confusion before students fall behind.

## 2. Users + Why It Matters
- Student: needs guided help based on course materials, not final answers.
- Admin/instructor: needs visibility into where students are stuck.
- The app supports both sides: better learning for students and better signals for staff.

## 3. System Architecture
- Ricky owns ingestion: Canvas corpus, admin-provided course coverage materials, chunking, embeddings, Chroma.
- Sam owns RAG and guardrails: retrieval, ranking, Socratic response logic.
- Andrea owns the product surface: frontend, auth/role routing, logging, admin dashboard.
- Two hardcoded roles route users into either chat or dashboard.

## 4. MVP Scope
- In by June 2: real corpus ingestion, backend ingestion path for admin-provided course coverage materials, student chat, Socratic responses, guardrails, conversation logging, admin view, two roles, Docker Compose, GitHub CI.
- Out by June 2: individual registration, student-specific history, analytics, polished admin file upload UI, multi-cohort support.
- This keeps the MVP testable and realistic.

## 5. UX Flow
- Login screen: password input and two role buttons.
- Student chat: ask a curriculum question and get guided help.
- Admin dashboard: table of logged questions by topic/time.
- Admin empty state: clear message when no logs exist yet.

## 6. Team Ownership
- Sam owns answer quality and safety.
- Ricky owns the curriculum pipeline.
- Andrea owns the user experience and admin visibility.

## 7. Closing Value
- This is not trying to replace instruction.
- It helps students ask better questions and keeps admins aware of where support is needed.
- The MVP proves the learning loop and the visibility loop.
