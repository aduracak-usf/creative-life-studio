# The Creative Life Studio

A creative planning website with idea discovery, project planning, an inspiration board, and an embedded Botpress assistant.

## Website

The site is a static HTML page. `index.html` redirects to [`mybot.html`](./mybot.html), the main studio page. Website projects, ideas, and plans are saved in the current browser and are separate from Botpress conversations.

To publish the site, enable GitHub Pages for the `main` branch and repository root in **Settings → Pages**. The project site URL is:

`https://aduracak-usf.github.io/creative-life-studio/`

## Botpress ADK agent

The agent source, evaluations, and setup instructions are in [`creativity-agent/`](./creativity-agent/). Follow its README to install dependencies, check, develop, and deploy the agent. The deployed Botpress Webchat mounts inline in `mybot.html`; publishing the static site does not deploy the agent itself.

## Project documents

- [Project blueprint](./PROJECT_BLUEPRINT.md)
- [Demo guide](./DEMO_GUIDE.md)
- [Agent architecture](./bot-architecture.svg)
