# Wells

Devon Wells' personal monorepo.

![wells_banner](https://user-images.githubusercontent.com/2354127/192647235-2804eca3-b5fc-4d71-a5bc-eb86f55dbc80.png)

## Contents

- [About](#about)
- [Apps](#apps)
- [Docs](#docs)
- [Packages](#packages)
- [Usage](#usage)
- [Useful Links](#useful-links)

## About

This is a monorepo for my personal projects. It's a work in progress, and I'm tweaking config ATM.
Ideally it will contain a bunch of apps and packages that I use in my day-to-day work, as well as my blog and portfolio.

I've grown accustomed to working in frontend monorepos and find them enjoyable.

### Stack

- [Turborepo](https://turborepo.com/) for managing the monorepo
- [Changesets](https://github.com/changesets/changesets) for versioning and releases
- [Typescript](https://www.typescriptlang.org/) because it's {CURRENT_YEAR} and I prefer the type safety and code completion
- [Next.js](https://nextjs.org/) for applications
- [React](https://reactjs.org/) for packages, components, and so forth
- [Tsup](https://github.com/egoist/tsup) for bundling packages (powered by esbuild)
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Apps

- ### [`web`](https://github.com/devdumpling/wells/tree/main/apps/web): a stub [Next.js](https://nextjs.org) app

## Packages

- ### [`ui`](https://github.com/devdumpling/wells/tree/main/packages/ui): a stub React component library
- ### [`eslint-config-custom`](https://github.com/devdumpling/wells/tree/main/packages/eslint-config-custom): `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- ### [`tsconfig`](https://github.com/devdumpling/wells/tree/main/packages/tsconfig): `tsconfig.json`s used throughout the monorepo

## Docs

_I use [Nextra](https://nextra.vercel.app/) to generate doc sites for packages. Each doc app can be found in `docs/` and is deployed to Vercel._

- ### [`wells`](https://wells-docs.vercel.app/) -- documentation on the monorepo (this repo)

## Usage

### Build

To build all apps and packages, run the following command:

```
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm run dev
```

### TurobRepo Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
pnpm dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpm dlx turbo link
```

## Useful Links

A collection of useful links for working in this monorepo

### TurboRepo

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
