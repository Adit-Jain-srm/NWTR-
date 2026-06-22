<div align="center">

# NWTR

**AI-powered real estate platform with immersive 3D property experiences**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-black?logo=three.js)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

---

## About

NWTR is a full-stack real estate platform that pairs AI-driven property search with interactive 3D visualization. Users describe what they're looking for in natural language, and the system surfaces matching properties — complete with immersive walkthroughs built on Three.js, React Three Fiber, and Spline.

The frontend ships a 42-component design system, scroll-driven animations via GSAP, and a responsive layout built on Tailwind CSS and Radix UI primitives.

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 15, React 19, TypeScript |
| **3D & Animation** | Three.js, React Three Fiber, GSAP, Framer Motion, Spline |
| **AI** | OpenAI, Vercel AI SDK |
| **Database** | Prisma ORM, PostgreSQL |
| **Auth** | NextAuth.js v5 |
| **UI / Design System** | Tailwind CSS, Radix UI, shadcn/ui, cmdk (42 components) |
| **Storage** | Vercel Blob |
| **Email** | Resend |
| **Testing** | Vitest |
| **State** | Zustand |

## Features

- **Natural Language Search** — Ask for properties in plain English; OpenAI interprets intent and filters results accordingly.
- **3D Property Tours** — Interactive walkthroughs rendered with Three.js, React Three Fiber, and Spline scenes.
- **Authentication** — Session-based auth with NextAuth.js v5 supporting OAuth and credential providers.
- **Property Analytics** — Visual dashboards with Recharts for pricing trends, comparisons, and market data.
- **File Management** — Document and image uploads handled through Vercel Blob.
- **Email Notifications** — Transactional messaging via Resend for alerts and confirmations.
- **Responsive UI** — Mobile-first layouts with a consistent design system across all viewports.

## Architecture

```
src/
├── app/          # App Router — pages, layouts, and API routes
├── components/   # 42-component design system (ui/, 3d/, layouts/)
├── lib/          # Database client, AI utilities, helpers
└── assets/       # Static assets and Spline scenes
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm / bun
- PostgreSQL

### Installation

```bash
git clone https://github.com/Adit-Jain-srm/NWTR-.git
cd NWTR-

npm install

cp .env.example .env.local
# Fill in your OpenAI key, database URL, and auth secrets

npx prisma generate
npx prisma migrate dev

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests with Vitest |

## Contributing

Contributions are welcome. Please open an issue to discuss proposed changes before submitting a pull request.

## License

MIT — see [LICENSE](LICENSE) for details.

---

<div align="center">
  <sub>Built with Next.js 15, Three.js, and OpenAI</sub>
</div>
