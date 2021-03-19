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
