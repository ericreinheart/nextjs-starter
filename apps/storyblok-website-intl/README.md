# nextjs-storyblok-starter

this is an opinionated next.js starter with typescript, eslint, prettier, tailwind, storyblok cms.

## getting started

first, make sure you have node version `20.10.0` installed. or just use [node version manager](https://github.com/nvm-sh/nvm) and type:

```bash
nvm use
```

to use pnpm run:

```bash
corepack enable
```

then install with:

```bash
pnpm install
```

then create `.env.local` with your storyblok api token:

```
STORYBLOK_API_TOKEN=xxx
```

for development, run:

```bash
pnpm dev
```

open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
