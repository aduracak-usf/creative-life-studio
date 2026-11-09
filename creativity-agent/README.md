# The Creative Companion

The Creative Companion is a Botpress ADK 2.0 TypeScript agent for The Creative Life Studio. It provides practical, time- and energy-aware creative guidance using a local reference library and a structured project-planning action.

## Project layout

- `agent.config.ts` names the agent and selects its default models.
- `src/conversations/index.ts` defines the assistant's behavior and connects its action and knowledge base.
- `src/actions/index.ts` defines `createProjectPlan`. It returns a structured plan; it does not save to the website.
- `src/knowledge/` contains reference material on painting, beginner sewing, fabric coordination, beginner projects, and creative planning.
- `evals/` contains capability and honesty scenarios for the requested behaviors.

The agent and the website's browser-local data are separate. It cannot save website projects, access Google Calendar, or schedule reminders.

## Develop and validate

Use the Node.js version supported by the installed ADK (this project was built with Node.js 22), then install dependencies:

```bash
npm install
adk login
```

Check and build the project:

```bash
adk check --format json
npm run build
```

Start a local ADK development session and chat with the agent:

```bash
adk dev
adk chat
```

Run the evaluation scenarios while the ADK development environment is available:

```bash
adk evals --format json
```

The ADK development server needs a development bot ID. If `adk dev` reports that it failed to obtain one, finish the ADK development-bot setup in the linked Botpress workspace before running local chats or evaluations. A production bot link does not by itself confirm that a development bot is ready. `adk evals --prod` runs against the currently deployed bot, not un-deployed local source.

## Deploy and verify

After local checks, conversations, and evaluations pass, deploy from this directory:

```bash
adk deploy
```

In Botpress, confirm the bot is online and Webchat is listed under its deployed channels. The static website embeds the published Webchat widget in `mybot.html`; test it over HTTP (for example, with VS Code Live Server) rather than opening the file directly. Confirm the widget loads and that chat remains separate from the website's localStorage projects.

To publish the website, deploy the repository's static files through GitHub Pages and test the public page and Webchat on that origin. The Webchat client configuration is public browser configuration; never put server secrets, including the Box client secret, in the website.

## Current validation status

- `adk check --format json`: passed.
- `npm run build`: passed.
- `adk deploy --format json -y`: succeeded for the production environment.
- The Webchat widget rendered on the local HTTP-served page.
- ADK evaluations have not been run: the development server could not obtain a development bot ID.
- The production deployment was not conversation-tested with the evaluation suite.

## References

- [Botpress ADK documentation](https://botpress.com/docs/adk)
- [Botpress platform](https://botpress.com)
