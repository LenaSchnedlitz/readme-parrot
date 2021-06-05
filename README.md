# Blueprint

## Quick Start

```shell
npx degit LenaSchnedlitz/blueprint my-project
cd my-project
npm install
npm run setup
npm run dev
```

For static code analysis, also run (in another tab):

```shell
npm run analyse:watch
```

:metro:

---

## Details

### Customization

Adapt the following files:

- [ ] `/public` all pics - _Don't forget to optimize!_
- [ ] `/src/core/Logo.svelte`
- [ ] `src/App.svelte` - see TODOs

### Development

- Start developing in `src/AppContent.svelte`.
- Most places that need editing are marked with `TODO`.
- **Check code** (manual + GitLab pipeline):
  - `npm run analyse`
  - `npm run eslint`
- **Format:** Files are prettified automatically (via pre-commit hook).  
  _You need to run `npx husky-init` before you commit for the first time!_

### Deployment

- [ ] Set up GitHub repo
- [ ] Uncomment lines in `.gitlab-ci.yml` - _see TODO_
- [ ] Add variables to CI/CD config on GitLab:
  - [ ] `DEPLOY_REPO`
  - [ ] `DEPLOY_TOKEN` - _masked!_
