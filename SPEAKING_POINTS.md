# 7-Minute Speaker Notes

## 1. Problem Framing
- Cohort programs move fast and often have 100+ curriculum items inside Canvas across modules, pages, files, and assignments.
- When students get stuck, it is easy to feel behind quickly.
- Students cannot quickly find the right explanation.
- The fallback is asking classmates or Googling direct answers.
- That may solve the immediate task, but it does not support learning.

## 2. Users + Why It Matters
- Student: needs guided help based on course materials, not final answers.
- Admin/instructor: needs visibility into where students are stuck.
- The app supports both sides: better learning for students and better signals for staff.

## 3. System Architecture
- Ricky owns ingestion: corpus, chunking, embeddings, Chroma.
- Sam owns RAG and guardrails: retrieval, ranking, Socratic response logic.
- Andrea owns the product surface: frontend, auth/role routing, logging, admin dashboard.
- Two hardcoded roles route users into either chat or dashboard.

## 4. MVP Scope
- In by June 2: real corpus ingestion, student chat, Socratic responses, guardrails, conversation logging, admin view, two roles, Docker Compose, GitHub CI.
- Out by June 2: individual registration, student-specific history, analytics, admin file upload UI, multi-cohort support.
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
