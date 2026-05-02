# MVP Scope for June 2

## In
- Canvas curriculum corpus ingested and queryable with real content.
- Backend ingestion path for admin-provided course coverage materials.
- Student chat UI.
- Socratic response instead of direct answers.
- Guardrails enforced on every response.
- Conversation logging: question, response, timestamp, topic.
- Admin view with logged conversations.
- Two hardcoded roles: student/admin.
- Docker Compose runs with one command.
- GitHub CI.

## Out
- Individual user accounts or registration.
- Student-specific history.
- Analytics or visualizations.
- Polished file upload UI for admins.
- Multi-cohort support.

## Acceptance Criteria
- Student can choose the student role, ask a question, and receive curriculum-grounded guided help.
- Admin can choose the admin role and see logged conversations in a simple table.
- The assistant avoids direct answer dumping and uses Socratic guidance.
- The selected Canvas curriculum corpus is searchable through Chroma.
- The app runs locally through Docker Compose.
