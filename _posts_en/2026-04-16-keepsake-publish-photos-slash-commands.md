---
title: "Keepsake — Public publishing, photos, and slash commands"
description: "The April 16, 2026 release introduces note publishing to a public page, photos in notes, slash commands, and the daily intention."
date: 2026-04-16
author: Nicolas Croce
tags: [changelog, product, notes, publishing, photos]
ref: keepsake-publish-photos-slash-commands
---

This release adds three new capabilities to Keepsake and reshapes how you start your day. You can now publish a note to a public page under your name, capture photos directly into your notes, and format your content from the keyboard with slash commands. Everything remains guided by the same principle: private by default, public only when you decide so.

## Your Keepsake Page

Every account now has a public page at `keepsake.place/@your-handle`. This is your Keepsake Page — a publishing space designed to share your notes with the world, without leaving Keepsake.

**How it works**

Every note now displays a globe icon. Clicking it opens a confirmation dialog, then publishes the note to your public page. Clicking again unpublishes the note, which returns to private.

Each published note has its own permanent URL: `keepsake.place/@your-handle/note-title`. The URL is shareable directly — copy it into a message, post it on social media, or use it in an email signature.

**Profile customization**

In Settings, a new "Keepsake Page" section lets you configure your public page:

- **Handle (username)**: three to thirty characters, lowercase letters, digits, hyphens, and underscores. Your handle becomes the URL of your page. Availability is checked in real time as you type.
- **Display name**: the public name, distinct from your real name if you prefer.
- **Bio**: a short introduction.
- **Links**: a list of external links (website, Twitter, Instagram, LinkedIn…), displayed on your public page.

**Private by default, public by choice**

Publishing is always an explicit action. No note is ever published without your confirmation. Your QuickNotes, entries, and tasks remain fully private. Only the notes you actively publish appear on your Keepsake Page.

For the full details, see the [Keepsake Page help article](https://keepsake.place/en/help/public-profile).

## Photos in notes

Your notes now support photos. Three ways to add them:

**Camera button in the QuickNote bar**

The capture bar at the top of the Inbox includes a new camera button. On mobile, it opens your phone's camera directly; on desktop, the file picker. The image is automatically compressed (1200 px, 80% quality) and a QuickNote is created in a single gesture.

**Drag-and-drop and paste**

All note editors now accept drag-and-drop images and clipboard paste (Cmd+V / Ctrl+V). No special button, no extra step: the image is uploaded and inserted at the cursor position.

**Photo-post layout**

When a note starts with an image, it automatically renders in a "photo-post" format across all views: a hero image on top, a caption below. The layout adapts to Inbox cards, archived notes, contact profiles, and tag pages.

When a photo note is deleted, the underlying image is automatically removed from storage. No orphan files.

For the full details, see the [photos in notes help article](https://keepsake.place/en/help/note-photos).

## Slash commands (/)

Typing `/` in any note editor now opens a command palette, similar to the autocomplete system already used for tags and contacts.

**Formatting**

- `/h1` and `/h2` — headings
- `/list` — bullet list
- `/task` — checklist
- `/quote` — blockquote
- `/code` — code block
- `/separator` — horizontal line

**Insertion**

- `/image` — opens the file picker

**Note transformation**

- `/split` — splits the note in two at the cursor: content above stays in the original note, content below becomes a new note.
- `/duplicate` — creates a copy of the current note.

Slash commands work everywhere: the QuickNote bar, the entry editor, the dedicated note page. They combine with existing Markdown syntax and with tag and contact mentions.

For the full details, see the [slash commands help article](https://keepsake.place/en/help/slash-commands).

## Intention of the day

The "daily note" is replaced by a prompt-oriented feature: the **Intention of the day**. One line, to be completed each morning, to set a mantra, a priority, or an affirmation that will guide your day.

Yesterday's intention appears in gray italics above the empty form, as inspiration for today's. It's a quiet thread between your days.

The intention is visible everywhere you need it:

- In the **Today** view, at the top of the page
- In the **Journal**, under each day's header
- In the **right sidebar**, under the week number, with a "Define an intention" link when not yet set

This is a conceptual shift: the underlying field remains the same (a free-form note per day), but the framing encourages a short, reflective practice rather than a long journaling session.

For the full details, see the [daily workflow help article](https://keepsake.place/en/help/daily-workflow).

## Remote MCP endpoint

For AI assistant users, a new endpoint lets you connect Claude to Keepsake without installing a local server: `https://app.keepsake.place/api/mcp`. It works directly with Claude iOS, Claude web, and Claude Desktop Connectors.

All 58 Keepsake tools (contacts, tasks, notes, entries, tags, search) are available immediately with an API key. For existing users of `npx keepsake-mcp`, the local installation remains fully supported.

For the full details, see the [AI integration page](https://keepsake.place/en/ai).

## In summary

This release expands Keepsake along three axes: publishing, visual capture, and writing efficiency. Each feature follows the same logic: enrich the tool without cluttering its daily use. You remain in control of what stays private and what becomes public, and the capture experience — the heart of Keepsake — stays in the foreground.

Everything is available today for all accounts. Full details, feature by feature, are documented in the [Help Center](https://keepsake.place/en/help) and on the [Changelog page](https://keepsake.place/en/changelog).
