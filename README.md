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

- [TypeScript](https://www.typescriptlang.org/) for type safety
- [Bun](https://bun.sh/) for the JavaScript runtime & package manager
- [Next.js](https://nextjs.org/) with App Router for the framework
- [TailwindCSS](https://tailwindcss.com/) for design system and styling
- [shadcn-ui](https://ui.shadcn.com/) for accessible components
- [React Hook Form](https://react-hook-form.com/) for form handling (TODO)
- [Tanstack Query](https://tanstack.com/query/latest) for data fetching (TODO)
- [Zod](https://zod.dev/) for schema validation and type inference
