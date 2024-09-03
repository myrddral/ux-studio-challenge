# UX Studio Challenge

## Getting Started

1. Clone the repository
2. Run `bun install`
3. Run `bun run dev`

Note: If you don't have Bun installed, you can use npm as an alternative.

## Project Structure

- `app/page.tsx`: The index page
- `app/component-list/page.tsx`: Rendered list of components used throughout the app
- `components/previews/*`: Categorized preview renders of components
- `components/ui/*`: Reusable primitive components
- `lib`: Library of utils, hooks, fonts, etc.
- `components.json`: shadcn-ui config file

## Notes

This project uses:

- [x] [TypeScript](https://www.typescriptlang.org/) for type safety
- [x] [Bun](https://bun.sh/) for the JavaScript runtime & package manager
- [x] [Next.js](https://nextjs.org/) with App Router for the framework
- [x] [TailwindCSS](https://tailwindcss.com/) for design system and styling
- [x] [shadcn-ui](https://ui.shadcn.com/) for accessible components
- [x] [Tanstack Query](https://tanstack.com/query/latest) for data fetching
- [x] [Zod](https://zod.dev/) for schema validation and type inference
- [x] [Neon Postgres](https://neon.tech/) for serverless database
- [x] [Prisma](https://www.prisma.io/) for database management
- [x] [AWS S3](https://aws.amazon.com/s3/) for image storage
- [x] [Vercel](https://vercel.com/) for hosting
- [ ] [React Hook Form](https://react-hook-form.com/) for form handling (TODO)
