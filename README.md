
# Synerity Homepage

Enterprise-grade marketing site for Synerity’s software engineering practice. The UI mirrors the production design system, highlights key services, and ships with first-class accessibility, performance, and deployment tooling.

## Features

- **Hero + Narrative Sections** – Motion-enhanced hero, story, services, process, tech stack, portfolio, and contact modules.
- **Component Library** – Shadcn-inspired UI primitives with Radix underpinnings for consistent interactions.
- **Performance Focus** – Route-based code splitting, optimized imagery, and deploy-ready scripts.
- **Accessibility & Responsiveness** – Landmark structure, skip links, reduced-motion fallbacks, and polished behavior across breakpoints.
- **Analytics Ready** – Lightweight dataLayer instrumentation for hero CTAs, services inquiries, portfolio actions, and contact submissions.
- **AWS Deployment Hooks** – Build artifacts and scripts aligned with S3 + CloudFront hosting.

## Tech Stack

- **Build**: Vite 6 + React 18 (SWC transform)
- **Styling**: Tailwind 4 utility bundle + custom tokens
- **Animation**: `motion/react`
- **Icons**: `lucide-react`
- **UI Kit**: Radix UI + class-variance-authority

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Visit `http://localhost:3000` to view the site in development.

### Available Scripts

- `npm run dev` – start the Vite development server on port 3000.
- `npm run translations:generate` – transform the CSV source of truth into locale JSON files.
- `npm run build` – generate the production bundle in `build/`.
- `npm run build:analyze` – inspect bundle composition with Vite’s analyzer.
- `npm run deploy` – build and sync the `build/` directory to the configured AWS S3 bucket, then trigger CloudFront invalidation (see `scripts/deploy.sh`).

## Deployment

1. Configure `config/deploy.json` with the target S3 bucket, region, and optional CloudFront distribution.
2. Ensure AWS credentials are available in the environment (`AWS_S3_BUCKET`, `AWS_REGION`, `CLOUDFRONT_DISTRIBUTION_ID`).
3. Run `npm run deploy` to build and publish the site.

## Design Resources

- Source design: [Figma Prototype](https://www.figma.com/design/xy58cgGhCQjDgWgo0q5JHL/Homepage-UI-Design)
- Implementation guidelines: enterprise-grade layouts, 10px side padding, Tailwind-inspired palette.

## Contribution Guidelines

We welcome updates that preserve the production-ready posture:

1. Create a topic branch from `main`.
2. Run `npm run lint` (if available) and `npm run build` before opening a PR.
3. Provide context, screenshots, and test notes in the PR description.

## License
- **Analytics**: Events are published to `window.dataLayer` via the helper in `src/lib/analytics.ts`. Replace the current console logging with your preferred analytics provider or GTM configuration before production launch.


Copyright © Synerity Pvt. Ltd. All rights reserved.
  