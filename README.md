# jacepkg-ts: npm packages by jace

- github: https://github.com/jacealan/jacepkg-ts

## @jacepkg/korean

> npm: https://www.npmjs.com/package/@jacepkg/korean

### syllable() : 한글 음절 만들기

```ts
function syllable(length: number = 1, withspace: boolean = false): string
```

## with npm

### npm CLI

```shell
$ npm init
$ npm install -D @types/node typescript
$ npm run build
$ npm adduser
$ npm publish --access public
```

### package.json

```json
{
  "name": "@jacepkg/korean",
  "version": "0.0.3",
  "description": "get a any string",
  "main": "lib/index.js",
  "files": ["lib"],
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc"
  },
  "author": "Jace",
  "license": "MIT",
  "devDependencies": {
    "@types/node": "^20.4.2",
    "typescript": "^5.1.6"
  }
}
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    // Types should go into this directory.
    // Removing this would place the .d.ts files
    // next to the .js files
    "outDir": "./lib",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    // Generate d.ts files
    "declaration": true
  },
  // Change this to match your project
  "include": ["src/**/*"]
}
```
