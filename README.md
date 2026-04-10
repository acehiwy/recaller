---
lastUpdated: 2026-04-08T09:00:42.959Z
---

# Website

This website is built using [Mintlify](https://mintlify.com/), a modern documentation platform.

### Installation

```
$ corepack enable
$ yarn install
```

### Local Development

```
$ yarn dev
```

This command starts a local development server on `http://localhost:3000`. Most changes are reflected live without having to restart the server.

### Worktrees

```
$ yarn wt feat-ui-logic
$ yarn wt:teardown feat-ui-logic
```

`yarn wt` creates a task-focused worktree under `~/worktrees/<name>` and runs the default setup command there.

`yarn wt:teardown` removes the matching worktree and deletes its local branch by default. The teardown command refuses to remove work that still has local changes or whose `HEAD` is neither merged into `main` nor preserved on the configured `upstream` remote. Use `--keep-branch` to keep the branch, or `--force` only when you intentionally want to bypass those guardrails.

### Docker Compose

```
$ docker compose up --build
```

This starts the same Mintlify development server and exposes it on `http://localhost:3000`.

### Build

```
$ yarn build
```

This command validates the documentation configuration and content.

### Export

```
$ yarn export
```

This command exports a deployable site bundle to `export.zip`.

### Deployment

Push changes to your connected GitHub repository. Mintlify automatically deploys on push.
