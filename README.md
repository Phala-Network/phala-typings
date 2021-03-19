# Polkadot.js Typings for Phala network

[![npm version](https://img.shields.io/npm/v/@phala-network/typedefs?style=for-the-badge)](https://www.npmjs.com/package/@phala-network/typedefs)

## Building

To build this package, run the following commands:

```
    yarn generate:defs
    yarn generate:meta
    yarn build
```

## Upgrading

Get a latest copy of custom types (e.g `typedefs.json`) and update `src/interfaces/phala/definitions.ts`.

Ensure that WebSocket endpoint to the network is correctly set in `package.json`.

Then complete the building process and run `npm publish --access public`. (Don't forget to bump the version)
