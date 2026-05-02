# User Journey Map

## Users

### Student
- Context: stuck on curriculum content during a fast-paced cohort program.
- Need: guided help grounded in the actual course materials.
- Privacy need: safe space to ask questions without feeling embarrassed in front of admins or peers.
- Risk: student feels behind quickly and turns to Google or generic AI for a final answer instead of learning support.

### Admin
- Context: non-technical program admin or instructor.
- Need: visibility into where students are struggling.
- What they should not need: code, database access, or an engineer to explain what is happening.
- Risk: confusion stays hidden until many students fall behind.

## Student Journey

### Step 1: Entry Point
- Student logs in and lands on the chat screen.
- They ask a question about a lesson, assignment, or concept.

### Step 2: Main Action
- The backend embeds the question and retrieves relevant curriculum chunks from Chroma.
- The system ranks retrieved context and generates a Socratic response.
- Guardrails check that the response guides learning instead of giving away final answers.

### Step 3: Resolution
- Student gets a grounded explanation, hints, and next steps.
- The question, timestamp, user ID, and relevant metadata are logged for the system.
- Admin-facing views default to de-identified patterns, not personally embarrassing question history.

## Admin Journey

### Step 1: Entry Point
- Admin logs in and lands on a simple dashboard.

### Step 2: Main Action
- Admin views a table of de-identified questions, topics, and timestamps.
- Admin scans for repeated confusion, unclear lessons, or common concepts.
- Admin reads the dashboard in plain language, not technical logs.

### Step 3: Resolution
- Admin knows where support is needed.
- Admin can adjust instruction, office hours, or curriculum notes based on real signals.

## Success Indicators
- Students receive useful guidance without final-answer leakage.
- Responses cite or clearly rely on curriculum context.
- Admin can identify at least one confusion pattern without exposing individual students unnecessarily.
- Demo shows both the student learning loop and the admin visibility loop.
