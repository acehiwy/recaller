# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
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

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
