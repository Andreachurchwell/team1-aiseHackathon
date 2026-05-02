# MVP Feature List

## Phase 1: Hackathon Build

### Must Have
- [ ] Student chat screen that sends curriculum questions to the backend.
- [ ] FastAPI backend endpoint for chat requests.
- [ ] RAG retrieval from Chroma: query, embed, retrieve top-k chunks, rank.
- [ ] Socratic response logic that guides students without handing over final answers.
- [ ] Guardrails and post-generation validation for answer leakage and off-curriculum responses.
- [ ] Ingestion script that reads PDFs and markdown files.
- [ ] Chunking, embeddings, and Chroma loading for the curriculum corpus.
- [ ] Graceful handling for malformed files: log and skip, do not crash.
- [ ] Login or role routing for student and admin views.
- [ ] Admin table showing who asked what and when.
- [ ] Basic question logging from the frontend/backend flow.

### Nice to Have
- [ ] Confusion clusters by topic, lesson, or document.
- [ ] Admin filters by student, date, source doc, or concept.
- [ ] Citation links back to source curriculum chunks.
- [ ] Feedback button for "helpful" or "still stuck."

---

## Phase 2: Capstone
- Full LMS or curriculum platform integration.
- Better analytics for cohort-level trends.
- Source document management UI.
- More advanced guardrail evaluation set.
- Instructor recommendations based on repeated confusion.

---

## Acceptance Criteria
- A student can ask a curriculum question and receive a guided response grounded in retrieved course content.
- The response avoids giving final answers when the student asks for direct completion.
- The ingestion pipeline can process a small messy corpus of PDFs and markdown files.
- Bad files are logged and skipped without stopping ingestion.
- Admins can view a table of student questions and timestamps.
- The team can explain each component's inputs, outputs, and boundaries.
