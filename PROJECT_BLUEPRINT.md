# The Creative Life Studio — Master Project Blueprint for GitHub Copilot

> **Purpose:** This document is the project specification and implementation guide for GitHub Copilot in Visual Studio Code. Read it before proposing edits. The project has two distinct parts: a GitHub Pages-compatible website and a Botpress **Agent Development Kit (ADK)** agent named **The Creative Companion**.
>
> **IMPORTANT RECOVERY NOTE:** The file `mybot.html` in this package is the **original website code recovered from the user's previously uploaded `Pasted text.txt`**, not a newly rewritten website. Preserve it and its working features. It contains a Botpress placeholder, not a connected published bot. Do not overwrite or remove working functionality without discussing the change first.

## 1. Project identity and goals

- **Product:** The Creative Life Studio
- **Tagline:** Your ideas. Your energy. Your schedule. Your creative space.
- **Brand promise:** Less collecting ideas. More creating them.
- **AI agent:** The Creative Companion
- **Academic context:** ISM 6225 Assignment 2, with an embedded, published Botpress chatbot and a public GitHub Pages website.
- **Long-term ambition:** A polished, personalized creative-planning application, not merely a static assignment landing page.

**Mission:** Help busy people discover painting, sewing, fabric coordination, crafts, and DIY ideas; capture inspiration; convert ideas into manageable projects; choose activities suited to available time and energy; and make progress without pressure.

**Audience:** Busy professionals, students, beginners, and hobbyists who collect ideas but struggle to start or finish them.

**Voice:** Warm, practical, imaginative, low-pressure, encouraging, specific. Never imply a feature exists unless it works.

## 2. Existing recovered code: inspect before editing

**Original source:** `Pasted text.txt` uploaded in the conversation; restored here as `mybot.html`.

The original HTML contains:

1. Inline CSS with responsive navigation and accessible controls.
2. Home, Explore, My Ideas, Creative Planner, AI Assistant, and About sections.
3. An app-like navigation system that shows individual views.
4. A **Creative Parking Lot** form for title, description, category, status, estimated time, next small step, materials, notes, and up to three reference images.
5. JavaScript for idea persistence with browser `localStorage`, using `creative-life-studio-ideas-v1` as its storage key.
6. Saved-project rendering, editing/deletion, and filtering by status.
7. A creative recommendation planner using time (5, 15, 30, 60 minutes), energy, interest, and experience.
8. A `#webchat` placeholder for the Botpress embed; no real Botpress credentials or deployment snippet.
9. Studio quotes, future feature cards, and a responsive footer.

**Do not assume everything has been browser-tested.** Run the site, inspect console errors, and test save/edit/delete/filter/image behavior. Back up `mybot.html` before major refactoring. Preserve existing `localStorage` data or provide a safe migration if the data model changes.

## 3. Visual design specification

Aim for an editorial, premium creative-workspace feel: a blend of artistic inspiration and a usable productivity dashboard. Avoid generic card-heavy templates.

| Token | Color |
|---|---|
| Cream | `#F8F3EB` |
| Paper | `#FFFDF9` |
| Blush | `#E8B9BF` |
| Sage | `#A7B8A0` |
| Dusty rose | `#A46B78` |
| Charcoal | `#403B39` |

Use expressive serif headings, legible sans-serif body text, generous spacing, tactile surfaces, cohesive illustrations or licensed imagery, subtle transitions, mobile-first layouts, accessible contrast, focus states, and reduced-motion support. Do not use image assets without checking usage rights.

## 4. Website features and priority

### Phase A — restore, test, and polish the existing website (must-have)

- **Home:** Strong hero, clear brand story, links to planning, exploring, and AI.
- **Explore:** Painting, sewing, DIY categories and actionable ideas.
- **Creative Parking Lot:** Create, read, update, delete, and filter ideas; notes, supplies, time, status, next step, and optional images.
- **Creative Planner:** Useful recommendations filtered by energy, time, interest, and skill. Include materials and small actionable steps.
- **Creative Companion:** Embed the actual published Botpress Webchat, replacing the placeholder.
- **Responsive and accessible:** Keyboard navigation, labels, semantic HTML, mobile layouts, error messages, no broken links.

### Phase B — advanced interactive workspace

- **My Studio dashboard:** Active projects, next actions, recently saved ideas, completed projects, creative suggestions.
- **Project Workspace:** Convert an idea into a project; task checklists, progress percentages, materials, milestones, and status.
- **Inspiration Boards:** Visual references, palettes, fabric pairings, and project notes.
- **Weekly Creative Planner:** Manually schedule project sessions, without pretending to read external calendars.
- **Progress:** Track completed steps/projects and surface achievements without pressure.

### Phase C — advanced integrations (not implemented until verified)

- Structured AI project-plan outputs and website-to-agent communication.
- Verified AI actions to create/update ideas or projects.
- User accounts and secure cross-device synchronization.
- Authorized Google Calendar integration and opt-in reminders.
- Optional creator-only Box integration with secure server-side credentials.

**Critical:** A static GitHub Pages site does not provide a secure server-side secret store. Never put Botpress API tokens, OAuth client secrets, Box tokens, or private keys in HTML/JS or commit them to GitHub. Public Webchat embed identifiers are different from private API credentials. Browser `localStorage` is device/browser-specific and can hit storage quotas, particularly for images.

## 5. Product flow

1. **Capture:** Save a creative idea and references.
2. **Explore:** Ask The Creative Companion about techniques, fabric matching, colors, or project possibilities.
3. **Plan:** Turn an idea into a project with materials, small steps, and a realistic time estimate.
4. **Schedule:** Select a short creative session based on time and energy.
5. **Create:** Complete tasks and track progress.
6. **Reflect:** Revisit finished projects and ideas.

For initial release, AI chat and website storage are separate. Do not tell users that chat responses automatically save to `localStorage` unless an actual, tested bridge exists.

## 6. Technical architecture

### Website

- Editor: Visual Studio Code, with GitHub Copilot for assistance.
- Main assignment page: **`mybot.html`** (preserve this exact filename).
- Front end: HTML, CSS, vanilla JavaScript; the current file uses inline CSS and JS.
- Storage: `localStorage` initially; implement validation, safe DOM updates, quota handling, and migration if needed.
- Hosting: GitHub Pages. Add `index.html` only if needed for the repository root; keep `mybot.html` available as required.
- Version control: Git/GitHub. Commit small, testable changes.

### Agent

- Name: **The Creative Companion**.
- Framework: **Botpress Agent Development Kit (ADK)**, TypeScript-based and code-first.
- Runtime/deployment: Botpress Cloud via the supported ADK workflow.
- UI integration: Official Botpress Webchat embed code obtained from the actual deployed bot.
- Do **not** confuse the ADK code-first workflow with the Botpress Studio visual-node workflow. Follow the installed ADK version and current documentation.
- Docs: https://botpress.com/docs/adk-v2/get-started/quickstart/
- Webchat docs: https://botpress.com/docs/webchat/get-started/embed-in-element/

### Suggested repository organization

```text
creative-life-studio/
├── mybot.html                  # Recovered original website; primary assignment file
├── index.html                  # Optional root entry point, if needed
├── assets/                     # Optional licensed/local assets
├── PROJECT_BLUEPRINT.md        # This specification
└── creative-companion-agent/   # Generated by ADK CLI; use actual generated structure
    ├── package.json
    └── ...                      # Do not invent framework file names
```

The agent may instead live in a separate repository if deployment or assignment packaging is simpler. Avoid committing `.env` files or secrets.

## 7. The Creative Companion — agent specification

**Description:** A personalized AI assistant that helps busy people discover creative ideas, learn painting and sewing, coordinate fabrics, and plan manageable projects.

### Core abilities

- Personalized painting, sewing, fabric, and DIY suggestions.
- Color and pattern coordination, with distinction between aesthetics and material suitability.
- Beginner-friendly explanations of tools and techniques.
- Realistic materials lists, time estimates, and step-by-step project plans.
- Low/medium/high-energy recommendations and 5/15/30/60-minute options.
- Help continuing unfinished projects and breaking large tasks into short sessions.
- Grounded knowledge retrieval from supplied creative references.
- Structured project plans suitable for manual copy/save initially.

### Agent system instructions (use in ADK configuration)

```text
You are The Creative Companion, an intelligent creative guide for The Creative Life Studio.

MISSION:
Help busy people turn creative ideas into achievable projects by combining personalized inspiration, practical instruction, project planning, and gentle encouragement.

BRAND PHILOSOPHY:
"Less collecting ideas. More creating them."

PERSONALITY:
Warm, thoughtful, knowledgeable, imaginative, practical, and supportive. Communicate like a skilled creative mentor who understands that users have limited time, changing energy levels, and other responsibilities.

SPECIALTIES:
Acrylic and watercolor painting; sewing and beginner garment/accessory construction; fabric combinations, patterns, and textures; color theory and palette creation; crafts and DIY; project planning and prioritization; time- and energy-aware recommendations.

PERSONALIZATION:
When relevant, identify creative interests, skill level, available time, energy, materials, desired outcome, and existing progress. Ask one or two targeted questions when necessary. If enough information is available, recommend something immediately.

PROJECT RECOMMENDATIONS:
For substantial suggestions, include project name, why it fits, estimated duration, materials, skill level, three to five actionable steps, and the easiest first action.

ENERGY:
Low: palette selection, materials organization, sketching, preparation.
Medium: manageable creative work or progress on an existing project.
High: more involved creative work if time permits.

TIME:
5 minutes: tiny creative action.
15 minutes: focused preparation or practice.
30 minutes: manageable task or short project.
60 minutes: more substantial session.
Do not promise completion of a two-hour project in 15 minutes.

SEWING:
Use accurate beginner-friendly sewing terminology. Explain fabric compatibility and distinguish visual coordination from practical suitability.

PAINTING:
Offer specific subjects, palettes, materials, techniques, and steps.

PROJECT MANAGEMENT:
Break projects into short sessions; identify supplies, dependencies, milestones, and next actions. Provide concise structured summaries suitable for manual saving.

KNOWLEDGE:
Use configured knowledge resources when relevant. Do not invent citations or claim to have retrieved documents that were not actually retrieved.

TOOLS AND HONESTY:
Only claim that an idea was saved, a project was updated, or a calendar event was created after the corresponding tool confirms success. Without integration, give the user information to save manually. Do not claim to access calendars, sync data, or send reminders without verified authorized integrations.

SAFETY:
Give appropriate precautions for sewing machines, sharp tools, hot irons, adhesives, and similar craft materials.

STYLE:
Be clear, concise, encouraging, practical, and specific. Avoid overwhelming lists and generic motivation. Favor achievable next steps.

CONVERSATION GOAL:
Help the user discover an idea, learn a technique, plan a project, take a small step, continue a project, or organize creative priorities.
```

## 8. ADK development plan

1. Install a compatible Node.js version and the **current official ADK CLI**; verify commands against current docs. Do not blindly reuse outdated ADK v1 examples.
2. Authenticate with Botpress and initialize an ADK project using the current CLI.
3. Configure the agent's personality/instructions and conversational behavior.
4. Add studio knowledge sources and verify retrieval behavior.
5. Add a project-planning capability producing structured data.
6. Add appropriate ADK tools/actions/workflows only as supported by the installed version.
7. Write and run evaluations for time/energy fit, sewing accuracy, fabric coordination, project breakdown, and tool honesty.
8. Test locally using the ADK's supported development environment.
9. Deploy to Botpress Cloud and confirm the deployed agent responds.
10. Configure Webchat, copy the **actual official embed snippet**, and integrate into `mybot.html`.
11. Test the deployed website and bot together.

**Suggested structured project output contract (adapt to the actual ADK APIs):**

```json
{
  "title": "Quilted coaster",
  "category": "Sewing",
  "description": "A beginner-friendly small fabric project",
  "skillLevel": "Beginner",
  "estimatedMinutes": 60,
  "energy": "Medium",
  "materials": ["cotton fabric", "batting", "thread"],
  "steps": ["Choose fabrics", "Cut pieces", "Sew and finish"],
  "nextAction": "Choose two coordinating cotton fabrics"
}
```

This JSON is a **product data contract example**, not a claim that an ADK tool or website bridge is already implemented.

### Prompt to give the ADK coding assistant

```text
Create a Botpress ADK agent named The Creative Companion for The Creative Life Studio. Use the actual installed ADK version and supported TypeScript APIs. Implement conversational behavior from PROJECT_BLUEPRINT.md, add grounded creative knowledge retrieval, and design a structured project-planning capability. Add tests/evaluations for low-energy recommendations, beginner sewing, fabric combinations, three-session project plans, and honesty about integrations. Do not use deprecated Studio-node instructions or invent SDK APIs. Explain and implement changes incrementally. First get a working agent, then knowledge, then structured tools, then deploy and embed official Webchat.
```

## 9. Knowledge base / agent knowledge sources

Create and maintain these reference documents with clear headings, reliable practical content, and realistic materials/time estimates:

1. **Painting Fundamentals and Color Theory** — acrylic/watercolor basics, brushes, surfaces, palettes, color mixing, beginner exercises.
2. **Beginner Sewing and Safety** — machine setup, stitches, seam allowances, pressing, cutting, fabric handling, tool safety.
3. **Fabric Coordination and Pattern Mixing** — color harmonies, print scale, solids, drape, fiber compatibility, and project suitability.
4. **Beginner Project Library** — fabric bookmark, scrunchie, quilted coaster, simple pouch, mini floral painting, abstract color study.
5. **Creative Time and Energy Planning** — 5/15/30/60-minute sessions, low-energy tasks, breaking projects into sessions, realistic milestones.

**Quality standard:** Include specific instructions and limitations, not only motivational content. Verify retrieval from the deployed agent before relying on it in demonstrations.

## 10. Testing and acceptance criteria

### Website

- `mybot.html` opens locally without console errors.
- Navigation works on desktop and mobile.
- Can add, edit, delete, and filter ideas.
- Ideas persist after page refresh; existing storage isn't accidentally erased.
- Image handling respects limits and reports storage failures.
- Planner recommendations respond appropriately to selected inputs.
- All buttons and links perform their stated functions.
- GitHub Pages serves the website successfully over HTTPS.
- Published Botpress Webchat loads and responds from the public website.

### Botpress agent test prompts

1. "I want to learn sewing but only have 15 minutes tonight and low energy. What should I do?"
2. "I have sage green floral fabric and cream cotton. What beginner projects can I make?"
3. "Divide a quilted coaster project into three short sessions."
4. "I want to paint something relaxing using pink and green. Give me an idea."
5. "Save this project to my website and add it to my Google Calendar." — The agent must not falsely claim success without actual integrations.

Check correctness, clarity, realistic duration, beginner accessibility, safety, and non-fabricated tool results.

## 11. ISM 6225 Assignment 2 deliverables

- Working `mybot.html` webpage.
- Published, tested Botpress agent embedded on the page.
- Public GitHub Pages website URL.
- Microsoft Teams demonstration recording **no more than 2 minutes**.
- Word document containing the website and recording links.
- ZIP or other final packaging as required by the actual assignment instructions.

**Demo outline:** Introduce the website; show Creative Parking Lot or Planner; demonstrate the bot answering a 15-minute beginner sewing question, fabric-pairing question, and three-session project breakdown; conclude with the public URL. Check exact grading/rubric requirements before submission.

## 12. Working instructions for GitHub Copilot

1. **Read this entire file and `mybot.html` before changing code.**
2. Treat `mybot.html` as the recovered baseline; do not replace it with a generic starter template.
3. Start by explaining what already exists, what is missing, and a prioritized plan.
4. Make **small, reversible, testable edits**. Explain each change and how to verify it.
5. Preserve current behavior and localStorage data. Ask before destructive refactors.
6. Keep assignment deliverables operational while adding advanced features.
7. Use vanilla JS/HTML/CSS for the initial site unless a framework migration is explicitly approved.
8. Keep Botpress ADK code separate from browser-side code.
9. Do not invent Botpress bot IDs, embed URLs, SDK functions, tokens, API responses, or successful integrations.
10. Never expose private credentials in client code, documentation, or commits.
11. For external API work, state backend/security requirements and implement only after approval.
12. Favor actual working interactions over decorative placeholders. Mark unbuilt functionality as future work.
13. Ask for clarification when the choice materially affects data preservation, architecture, or deployment.

## 13. Recommended implementation sequence

- [ ] Back up and run the recovered `mybot.html`.
- [ ] Test and repair existing website interactions.
- [ ] Improve the homepage and app/dashboard design without losing existing features.
- [ ] Implement advanced project/task tracking and visual inspiration boards.
- [ ] Initialize The Creative Companion with the Botpress ADK.
- [ ] Configure conversational behavior and knowledge sources.
- [ ] Run agent evaluations and test conversations.
- [ ] Deploy the agent to Botpress Cloud.
- [ ] Replace the website's Botpress placeholder with the real Webchat embed.
- [ ] Deploy website to GitHub Pages and test live.
- [ ] Prepare the <=2-minute Teams demo and submission documents.
- [ ] Add advanced AI-to-project integration only after the core assignment works.

## 14. First instruction to Copilot

> Read `PROJECT_BLUEPRINT.md` and the recovered `mybot.html` completely. Summarize the current implementation, identify any bugs or gaps, and propose the smallest safe first set of changes. Preserve the current Creative Parking Lot, localStorage data, recommendation planner, and existing styling. We will build an advanced website and a separate Botpress ADK agent incrementally. Do not rewrite the entire site yet.
