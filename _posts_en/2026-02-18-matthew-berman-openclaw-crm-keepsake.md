---
title: "I Analyzed Matthew Berman's 26 OpenClaw CRM Prompts — Here's What It Takes to Build One"
description: "Matthew Berman built an impressive personal CRM with OpenClaw: 20 SQLite tables, 22 custom skills, weeks of work. Here's what Keepsake does out of the box."
date: 2026-02-18
author: Nicolas Croce
tags: [crm, productivity, organization]
ref: matthew-berman-openclaw-crm
---

A few days ago, Matthew Berman published a video that got a lot of attention in the AI community: "21 use cases I use every day with OpenClaw." 4,000 likes, 480 retweets, and dozens of comments asking: *how do I do the same?*

I watched the video. Read the 26 prompts he published. Analyzed his PRD (his full architecture document, which he made public). I want to tell you exactly what he built — and what it actually takes.

## What Matthew Berman Actually Built

His system runs locally on a MacBook Air. The core is a personal CRM that automatically ingests Gmail and Google Calendar. An LLM reads each email, decides whether the contact is worth saving, researches them, then stores them in a SQLite database with 768-dimensional Gemini vector embeddings.

The result: 1,174 contacts. Natural language search ("who do I know at NVIDIA?" or "who haven't I talked to in a while?"). Relationship health scores. Follow-up reminders you can create, snooze, or mark done. Automatic duplicate detection.

In parallel, he connected Fathom (meeting transcription): when a meeting ends, the system waits 20 minutes, retrieves the transcript, identifies the attendees in his CRM, extracts action items, and sends an approval queue in Telegram. Approved tasks go straight to Todoist.

There's also a Knowledge Base: drop a URL into Telegram, and the system ingests the article, the YouTube video (with transcript), the full Twitter thread and all its linked content. Everything is vectorized and queryable in plain English.

It's impressive. Genuinely.

## The Real Architecture

What Berman didn't highlight in the video is what his PRD reveals: **20 SQLite tables**, **22 custom installed skills**, **dozens of Node.js scripts** (sync.js, batch-scan.js, fathom-sync.js, health-check.js, restore-from-backups.js...), a full test suite, database migrations, hourly encrypted backups to Google Drive.

He built it over weeks. He maintains it continuously. When something breaks — and things break — he's the one debugging.

## Why I'm Telling You This

Not to discourage you. I'm telling you this because what Berman built is exactly the vision behind Keepsake.

Same intentions. Same problem to solve: the important relationships that fade, the conversations that disappear into noise, the mental load of "don't forget to follow up with James." The difference is the approach.

**What [Keepsake](https://keepsake.place) does out of the box:**

- Contacts with interaction history and linked notes
- Journal entries connected to people, projects, and ideas
- Tasks linked to contacts
- Instant search, accent-insensitive
- Everything synced, accessible from any device

No terminal. No JSON config. No migrations to manage. No backups to monitor.

**What Keepsake doesn't have yet:**

Let's be honest. Two things Berman has that I find genuinely useful are missing:

1. The **relationship health score** — a visible indicator that says "you haven't heard from Marc in 47 days." Simple to understand, powerful in practice. It's on the roadmap.

2. **Automatic email ingestion** — contacts creating themselves from incoming emails. Berman spent weeks building this. It's the next major step for Keepsake.

## What Berman's Video Confirms

The need is real. Thousands of people want a personal CRM that fits them — one that remembers what matters, helps them maintain relationships without the mental overhead.

Most of those people won't open a terminal and write prompts for three weeks. They want something that works.

That's who I'm building Keepsake for.

If you want to try it: **[app.keepsake.place](https://app.keepsake.place)** — 7 days free, no credit card required.
