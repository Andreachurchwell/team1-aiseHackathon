# User Journey Map

## Users

### Student
- Context: stuck on curriculum content during a cohort program.
- Need: guided help grounded in the actual course materials.
- Risk: Google or generic AI gives the final answer instead of supporting learning.

### Admin
- Context: non-technical program admin or instructor.
- Need: visibility into where students are struggling.
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
- The question, timestamp, user, and relevant metadata are logged.

## Admin Journey

### Step 1: Entry Point
- Admin logs in and lands on a simple dashboard.

### Step 2: Main Action
- Admin views a table of student questions and timestamps.
- Admin scans for repeated confusion, unclear lessons, or common concepts.

### Step 3: Resolution
- Admin knows where support is needed.
- Admin can adjust instruction, office hours, or curriculum notes based on real signals.

## Success Indicators
- Students receive useful guidance without final-answer leakage.
- Responses cite or clearly rely on curriculum context.
- Admin can identify at least one confusion pattern from the logs.
- Demo shows both the student learning loop and the admin visibility loop.
