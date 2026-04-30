# Product Catalog App

Product listing page built with Next.js and TypeScript.

Repository: https://github.com/olegvol15/product-catalog-app

## Setup

Install dependencies:

```bash
npm install
```

Create `.env.local` from the example file and set the API key:

```bash
cp .env.example .env.local
```

```env
PRODUCTS_API_KEY=your_api_key_here
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Implementation Notes

- Product data is fetched in a Server Component, keeping the external `x-api-key` server-side.
- `src/lib/catalog-api.ts` fetches the REST API and normalizes the response.
- `src/types/schema.ts` contains TypeScript types based on the provided schema.
- `src/types/catalog.ts` contains app-facing catalog models used by the UI.
- `src/lib/catalog-model.ts` supports both schema field names and the observed API aliases.
- Cart behavior is a fake async request that updates local cart state and the header badge.
- Styling is plain CSS split by section under `src/styles`.

## Verification

Run:

```bash
npm run lint
npm run build
```
