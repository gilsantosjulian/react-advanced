# curso-platzi-react-avanzado
Repositorio con el código del Curso Avanzado de React de Platzi

## Compile app using webpack
```
./node_modules/.bin/webpack --mode "development"
```
## Serve app
```
// -s flag -> single page applicaction
npx serve dist -s 
```

## Suspense
Suspense es un componente de React que nos va a permitir suspender algo cuando está en modo lazy(); y lazy(), el cual nos va a permitir importar un componente que no será cargado hasta que este sea llamado. De esta forma mejoraremos el tiempo de carga de nuestra aplicación enormemente.

## Docs
More information for each feature implemented during the building of this project (tools and workflow) go to docs folder [docs](./docs)

## Vercel and deploy
`Now` was changed to `vercel` and has some differences, we can do the following:

- Install `vercel` with `npm i -g vercel`
- After to install `vercel` we have to do `vercel login` and verify the email, just in order the vercel local instance be connected with remote instance and in this way avoid the tokens.
- Then run `vercel`

## Cypress testing
We are goint to use `cypress` to test our app. Do testing is important in our apps to check if everything is ok (everything is working in a proper way) and send data to production.

- Install, please run `npm i cypress -D`
- Execute it: `./node_modules/.bin/cypress open`
- Script: `npm run test`


### Eslint Import/Oder
One of the things we want to ensure in my react code is that the first import is
the React package, just to follow the standard convention. Then, we want to
group them separately, first all the third-party packages, and then all the
local files.
- The `groups` sets the order intended for every group.
- `pathGroups` can group by path set by a pattern. In this case, I want to look
  for react import to be before any other import.
- `pathGroupsExcludedImportTypes` defines import types. "React" will be handled
  as other type so it can be separated for the other external packages.
- `newlines-between` separates each group with a new line in between.
- `alphabetize` sort the order in which group will be sorted. I choose in
  ascending way and case sensitive.
The order is as shown in the following example:
```
// 1. node "builtin" modules
import fs from 'fs';
import path from 'path';
// 2. "external" modules
import _ from 'lodash';
import chalk from 'chalk';
// 3. "internal" modules
// (if you have configured your path or webpack to handle your internal paths differently)
import foo from 'src/foo';
// 4. modules from a "parent" directory
import foo from '../foo';
import qux from '../../foo/qux';
// 5. "sibling" modules from the same or a sibling's directory
import bar from './bar';
import baz from './bar/baz';
// 6. "index" of the current directory
import main from './';
// 7. "object"-imports (only available in TypeScript)
import log = console.log;
// 8. "type" imports (only available in Flow and TypeScript)
import type { Foo } from 'foo';
```
More details
[import/order: Enforce a convention in module import order](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md)
Also it was necessary to add `eslint-import-resolver-typescript` package with
the next config:
```
"import/resolver": {
  "typescript": {
    "project": "."
  }
}
```
More details:
- [eslint configuration with absolute imports in Next 9.4](https://github.com/vercel/next.js/discussions/13048#discussioncomment-17688)
- [eslint-import-resolver-typescript](https://github.com/alexgorbatchev/eslint-import-resolver-typescript)