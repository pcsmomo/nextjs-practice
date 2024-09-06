# [01. Next Auth v5](https://www.youtube.com/watch?v=1MTyCvS05V4)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Packages

### ui framework - [shadcn/ui](https://ui.shadcn.com/)

It adds the component to `@/components/ui` whenever we install a new component, giving us full control.

## Notes while following the code

### 2. Project setup

```sh
npx create-next-app@latest auth-tutorial

Need to install the following packages:
create-next-app@14.2.7
Ok to proceed? (y)

✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
Creating a new Next.js app in /Users/noah/Documents/study/study_codes/youtube/nextjs-practice/nextjs-practice-git/auth-tutorial.
```

#### install shadcn/ui

```sh
npx shadcn-ui@latest init

Need to install the following packages:
shadcn-ui@0.8.0
Ok to proceed? (y)

✔ Which style would you like to use? › New York
✔ Which color would you like to use as base color? › Slate
✔ Would you like to use CSS variables for colors? … no / yes

✔ Writing components.json...
✔ Initializing project...
✔ Installing dependencies...

Success! Project initialization completed. You may now add components.
```

#### Add shadcn/ui button

```sh
npx shadcn-ui@latest add button
```

### 4. Home page

#### tailwind gradient background

```html
<main
  className="h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800"
></main>
```

### 5. Card wrapper

#### Add shadcn/ui card

```sh
npx shadcn-ui@latest add card
```

#### install react-icons for social icons

```sh
npm install react-icons
```

### 6. Login form

#### Add shadcn/ui form and input

```sh
npx shadcn-ui@latest add form
npx shadcn-ui@latest add input
```

### 8. Database & Prisma setup

#### Set up prisma

```sh
npm install -D prisma
npm install @prisma/client
```

#### Initiate prisma

```sh
npx prisma init
# default db is postgresql
```

#### PostgresSQL hosting service: [Neon.tech](https://neon.tech/)

- create an account and postgresql project
- copy the `schema.prisma` and `.env` from what neon.tech guides

#### Generate prisma

after adding model "User" to the `schema.prisma`

```sh
npx prisma generate

Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma

✔ Generated Prisma Client (v5.19.0) to ./node_modules/@prisma/client in 42ms

Start by importing your Prisma Client (See: http://pris.ly/d/importing-client)

Tip: Want to turn off tips and other hints? https://pris.ly/tip-4-nohints
```

```sh
# after generated
npx prisma db push

Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "next-auth-v5", schema "public" at "ep-fancy-water-a7u60dh4-pooler.ap-southeast-2.aws.neon.tech"

🚀  Your database is now in sync with your Prisma schema. Done in 1.44s

✔ Generated Prisma Client (v5.19.0) to ./node_modules/@prisma/client in 34ms
```

now we can see the table "User" on my account in neon.tech

#### [Auth.js - from v5](https://authjs.dev/)

- <https://next-auth.js.org/> is for until v4

#### [Auth.js - Prisma Adapter](https://authjs.dev/getting-started/adapters/prisma)

```sh
npm install @auth/prisma-adapter

# Already installed
# npm install @prisma/client
# npm install prisma --save-dev
```

We will modify the schema a little bit from here, [Naming Conventions](https://authjs.dev/getting-started/adapters/prisma#naming-conventions)

After changing the `schema.prisma`

```sh
npx prisma generate
npx prisma db push
```

After add `password` column to `users`

```sh
npx prisma generate
npx prisma db push
```

#### Install bcrypt for password

```sh
npm install bcrypt
npm install --save-dev @types/bcrypt
```

### 10. Middleware & Login

#### Install Next Auth v5 (Beta on 4/9/2024)

[next-auth documentation](https://authjs.dev/reference/nextjs)

```sh
npm install next-auth@beta
```

#### Try to go `http://localhost:3000/api/auth/providers`

we will get a `secret` error

```sh
 GET /api/auth/provider 400 in 24ms
[auth][error] MissingSecret: Please define a `secret`. Read more at https://errors.authjs.dev#missingsecret
```

Let's set up a secret

#### Generate SECRET key on my terminal

```sh
openssl rand -hex 32
```

#### [Next JS - middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)

[Auth.js - middleware](https://authjs.dev/getting-started/migrating-to-v5#authenticating-server-side)

middleware is next js feature, not the next auth feature

#### [Edge Compatibility](https://authjs.dev/guides/edge-compatibility)

[Following this guide: Edge Compatibility - Split config](https://authjs.dev/guides/edge-compatibility#split-config)

database session strategy doesn't work with Edge yet. so we choose `jwt` for now.

the reason we removed `session` in User, in `prisma.schema`

```ts
// auth.ts
export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: PrismaAdapter(db),
  // database session strategy doesn't work with Edge yet.
  // so we choose jwt for now.
  session: { strategy: "jwt" },
  ...authConfig,
});
```

#### Replace `bcrypt` to `bcryptjs`

As the project cannot be built because of [`bcrypt` error with `node-pre-gyp`](https://www.npmjs.com/package/bcrypt)

```sh
 ⨯ ./node_modules/@mapbox/node-pre-gyp/lib/util/nw-pre-gyp/index.html
```

install `bcryptjs` instead of `bcrypt`

```sh
npm uninstall bcrypt @types/bcrypt

npm install bcryptjs
npm install --save-dev @types/bcryptjs
```
