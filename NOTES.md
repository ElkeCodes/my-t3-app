# CLI logs to start

```
~/Repositories
❯ npm create t3-app@latest
Need to install the following packages:
  create-t3-app@latest
Ok to proceed? (y) y
   ___ ___ ___   __ _____ ___   _____ ____    __   ___ ___
  / __| _ \ __| /  \_   _| __| |_   _|__ /   /  \ | _ \ _ \
 | (__|   / _| / /\ \| | | _|    | |  |_ \  / /\ \|  _/  _/
  \___|_|_\___|_/‾‾\_\_| |___|   |_| |___/ /_/‾‾\_\_| |_|


? What will your project be called? my-t3-app
? Will you be using TypeScript or JavaScript? TypeScript
Good choice! Using TypeScript!
? Which packages would you like to enable? nextAuth, prisma, tailwind, trpc
? Initialize a new git repository? Yes
Nice one! Initializing repository!
? Would you like us to run 'npm install'? Yes
Alright. We'll install the dependencies for you!
? What import alias would you like configured? ~/

Using: npm

✔ my-t3-app scaffolded successfully!

Adding boilerplate...
✔ Successfully setup boilerplate for nextAuth
✔ Successfully setup boilerplate for prisma
✔ Successfully setup boilerplate for tailwind
✔ Successfully setup boilerplate for trpc
✔ Successfully setup boilerplate for envVariables

Installing dependencies...
✔ Successfully installed dependencies!

Initializing Git...
✔ Successfully initialized and staged git

Next steps:
  cd my-t3-app
  npx prisma db push
  npm run dev

~/Repositories took 2m33s
❯ cd my-t3-app

…/my-t3-app on  main [(25)]
❯ npx prisma db push
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": SQLite database "db.sqlite" at "file:./db.sqlite"

SQLite database db.sqlite created at file:./db.sqlite

🚀  Your database is now in sync with your Prisma schema. Done in 34ms

✔ Generated Prisma Client (4.14.0 | library) to ./node_modules/@prisma/client in 164ms


…/my-t3-app on  main [(25)] took 7s
❯ npm run dev

> my-t3-app@0.1.0 dev
> next dev

- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- info Loaded env from /Users/elke/Repositories/my-t3-app/.env
- event compiled client and server successfully in 5.8s (295 modules)
- wait compiling...
- event compiled client and server successfully in 409 ms (295 modules)
```

# VS Code

Added Prisma extension

# Prisma schema update

Added Todo (should autocomplete)
npx prisma db push

# Add EmailProvider

In /src/server/auth
Add ENV variables to .env

# Extend TRPC router

New router in /src/server/api/routers
Adapted /src/server/api/root

# Install nodemailer
`npm i nodemailer`
Run and check terminal log after "logging in"