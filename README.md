# Emanuel Rusu — developer portfolio

A React, TypeScript and Vite portfolio presenting custom-domain MVPs, FitForge and earlier study work.

## Run locally

```bash
cd client
npm ci
npm run dev
```

Run `npm run build` in `client` to type-check and create the production build. Run `npm run lint` to check the TypeScript and React source.

## Updating projects

- Edit `client/src/data/showcase.ts` for the custom-domain MVPs, FitForge and supporting deployments.
- Edit `client/src/data/projects.user.ts` for the study archive. The `demoUnavailable` flag hides a demo link while preserving its URL when a deployment is down.
- Project domains were checked against the accessible Vercel team on 31 October 2026; review the inventory and descriptions as projects change. Staging and non-production deployments are listed without public links.
- Contact details are in `client/src/pages/Contact.tsx` and the footer. The email link opens the visitor's email application; there is no contact form backend.

The app uses client-side routes. Hosting must serve `index.html` for those routes on direct visits and refreshes.
