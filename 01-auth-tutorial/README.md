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
