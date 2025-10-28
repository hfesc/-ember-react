# shadcn/ui + Ember demo

This project reproduces the [ui.shadcn.com](https://ui.shadcn.com) landing page inside an Ember 6.4 application. The React
components from shadcn/ui are rendered through [`@universal-ember/react`](https://github.com/universal-ember/react), allowing us
to embed modern React component libraries in classic Ember routes without losing reactivity or DX.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://cli.emberjs.com/release/)
- [Google Chrome](https://google.com/chrome/)

## Installation

```bash
git clone <repository-url>
cd -ember-react
npm install
```

## Running / Development

```bash
npm run start
```

- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

## Available scripts

- `npm run start` – start the local development server with live reload.
- `npm run build` – create a production build (`dist/`).
- `npm run lint` – run the configured lint tasks.
- `npm run test` – execute linting and Ember tests in CI mode.

## Further Reading

- [@universal-ember/react documentation](https://github.com/universal-ember/react)
- [shadcn/ui documentation](https://ui.shadcn.com)
- [Ember CLI guide](https://cli.emberjs.com/release/)
