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