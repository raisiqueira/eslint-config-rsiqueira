# eslint-config-rsiqueira

Personal rules for ESLint.

## Install

```bash
npm install eslint-config-rsiqueira --save-dev
```

```bash
yarn add eslint-config-rsiqueira --dev
```

## Usage

Update your ESLint config and use one of the following presets:

```json
{
  "extends": [
    // Use one of the following
    "rsiqueira", // Base for JS projects
    "rsiqueira/react",
    "rsiqueira/preact",
    "rsiqueira/vue",
    "rsiqueira/typescript", // Base for TS projects
    "rsiqueira/typescript/react",
    "rsiqueira/typescript/preact",
    "rsiqueira/typescript/vue"
  ]
}
```

## License

MIT © [Raí Siqueira](https://github.com/raisiqueira)
