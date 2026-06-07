<div align="center">

# NWTR

**Next-generation Web-based Real Estate Platform**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

An AI-powered real estate platform with immersive 3D experiences, intelligent property search, and modern authentication.

</div>

---

## About

NWTR is a full-stack real estate web application that combines AI capabilities with immersive 3D visualization to create a next-generation property discovery experience. Built with Next.js 15 and React 19, it features real-time AI-powered search, interactive 3D property tours, and a modern authentication system.

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 15, React 19, TypeScript |
| **3D & Animation** | Three.js, React Three Fiber, GSAP, Framer Motion, Spline |
| **AI** | OpenAI, Vercel AI SDK |
| **Database** | Prisma ORM |
| **Auth** | NextAuth.js v5 (Beta) |
| **UI** | Tailwind CSS, Radix UI, shadcn/ui, cmdk |
| **Storage** | Vercel Blob |
| **Email** | Resend |
| **Testing** | Vitest |
| **State** | Zustand |

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm / bun
- PostgreSQL (for Prisma)

### Installation

```bash
# Clone the repository
git clone https://github.com/Adit-Jain-srm/NWTR-.git
cd NWTR-

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Features

- **AI-Powered Search** — Natural language property search using OpenAI
- **3D Property Tours** — Immersive experiences with Three.js and Spline
- **Modern Auth** — Secure authentication with NextAuth.js v5
- **Real-time Charts** — Property analytics with Recharts
- **Responsive Design** — Mobile-first with Tailwind CSS
- **File Uploads** — Document and image management with Vercel Blob
- **Email Notifications** — Transactional emails via Resend

## Project Structure

```
src/
├── app/          # Next.js App Router pages and API routes
├── components/   # Reusable UI components
├── lib/          # Utilities, database client, helpers
└── assets/       # Static assets
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests with Vitest |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <sub>Built with Next.js, TypeScript, and AI</sub>
</div>
