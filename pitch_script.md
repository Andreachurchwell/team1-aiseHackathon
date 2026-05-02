# 5-6 Minute Pitch Script

## Slide 1 - Problem Framing
**Andrea, ~45 seconds**

"Cohort programs like ours move fast, and they run on a lot of curriculum inside Canvas: modules, files, pages, assignments, and other course materials.

The problem is that when a student gets stuck, it is easy to feel behind really quickly. And in that moment, they often don't know where to look first.

So they usually do one of two things: ask a classmate, or Google the answer directly. Both can help in the moment, but neither one really supports learning.

At the same time, instructors and admins don't have a clear way to see where students are getting stuck. They see the final work, but not the confusion that happened before it.

So the problem has two sides: students need better guided support, and instructors need better visibility."

**Transition:** "That brings us to the two users we designed this around."

## Slide 2 - Users + Why It Matters
**Andrea, ~45 seconds**

"We're solving this for two users.

The first is the student. They need a safe place to ask questions and get help thinking through the material, not just a final answer.

The second is the admin or instructor. They need to see patterns: what students are asking about, where confusion keeps coming up, and where support is needed.

Why this matters is simple: learning isn't just about getting the right answer. It's about understanding how to get there.

This product supports both sides of that loop: guided help for students, and clear signals for admins."

**Transition:** "Ricky is going to walk through how the system makes that possible."

## Slide 3 - System Architecture
**Ricky, ~40 seconds**

"On the left side, I handle the curriculum pipeline.

We take the Canvas curriculum materials and break them into smaller sections.

Then we convert those sections into a format the system can search and store them in a database.

So instead of digging through files, the system can quickly find the most relevant pieces of the curriculum when a student asks a question.

The goal is to take messy content and make it usable."

**Transition:** "That searchable curriculum feeds into Sam's part of the system."

**Sam, ~40 seconds**

"My part is the core system: the retrieval and response layer.

When a student asks a question, the system looks through that curriculum and pulls the most relevant sections.

Then it uses that to generate a response.

But the key difference is that we're not giving direct answers.

The system responds in a Socratic way, meaning it guides the student with questions or hints so they can think through the problem themselves.

We also enforce guardrails, so everything stays grounded in the curriculum, there are no made-up answers, and the system does not skip straight to solutions.

So instead of answering for the student, the system helps them learn."

**Transition:** "And Andrea connects that to the actual user experience."

**Andrea, ~25 seconds**

"On the user-facing side, I handle login, role routing, the chat interface, conversation logging, and the admin dashboard.

Users choose one of two roles, student or admin, and get routed to the right experience.

So everything you just heard actually shows up in a simple, usable interface."

## Slide 4 - MVP Scope by June 2
**Sam, ~50 seconds**

"For the MVP, we were very intentional about scope.

What's in: real curriculum that's fully searchable, a working student chat experience, Socratic responses instead of direct answers, guardrails on every response, and full conversation logging.

Admins can view those logs in a simple dashboard.

We also support two hardcoded roles, student and admin, and the project runs with one command using Docker.

What's out: user accounts, analytics dashboards, file uploads, and multi-cohort support.

The goal wasn't to build everything.

It was to prove the core system works end-to-end, from curriculum to guided learning to admin visibility."

**Transition:** "And now Andrea will show what that looks like."

## Slide 5 - UX Flow / Wireframes
**Andrea, ~1 minute**

"This slide shows the user experience.

We start with a simple login screen. No accounts, just choose a role: student or admin.

If you're a student, you go into the chat interface.

You ask a question, and instead of getting the answer, you get guided help, something that pushes you to think.

If you're an admin, you go to the dashboard.

You can see what students are asking, when they asked it, and what topic it relates to.

So instead of guessing where students are stuck, you can actually see it.

The goal here was simplicity: students know where to ask, and admins know where to look."

**Transition:** "The work breaks down cleanly across the team."

## Slide 6 - Team Ownership
**Ricky, ~35 seconds**

"We split this into three clear parts.

I own ingestion: taking curriculum content and making it searchable.

Sam owns the core system: the retrieval, response logic, and guardrails.

Andrea owns everything user-facing: frontend, login, logging, and the dashboard.

Each piece is independent, but together they form one complete system."

**Transition:** "I'll hand it to Sam to close us out."

## Slide 7 - Closing Value
**Sam, ~45 seconds**

"What this proves is simple.

You can take a large Canvas curriculum and turn it into something that actually supports learning.

Students don't just get answers. They get guided thinking.

Admins don't just guess. They can see where students are struggling.

So instead of 'just Google it' or 'just ask someone,' you get a system that helps students ask better questions and helps instructors know exactly where to step in.

That's the value of this two-role learning assistant."
