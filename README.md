# Aethera Spark (Aethera®)

> **Next-Gen Neural Design Engine Platform**  
> Transform brand DNA and creative prompts into production-grade, high-end web interfaces instantly.

![React](https://img.shields.io/badge/React-18.3-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-Radix_Primitives-black?style=flat-square)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-v5-FF4154?style=flat-square)
![Package Manager](https://img.shields.io/badge/pnpm-10.3-F69220?style=flat-square&logo=pnpm)

---

## 📌 Project Overview

**Aethera Spark** is an AI-powered design-to-code platform crafted for Creative Directors, Full-Stack Engineers, and Startup Founders. It bridges wild creative concepts with luxury, production-grade web interfaces without sacrificing aesthetic beauty or technical performance.

### 🌐 Release Status & Scope (v1.0)
This repository contains the **v1.0 Frontend Shell**:
* **UI & Page Flow**: Complete interactive interface featuring Landing Page, Auth (Login/Register), Dashboard, Studio, and Pricing pages.
* **Simulated AI Generation Engine**: Mocked prompt execution and design synthesis pipeline powered by `src/lib/mock-api/` and TanStack React Query v5.
* **Export Simulation**: Client-side prototype export pipeline generating `.zip` assets via `JSZip` and `file-saver`.
* **Vision (v2.0+)**: Multi-agent backend LLM orchestration, real-time WebSocket generation streaming, and live database code synthesis.

---

## ✨ Key Features

* 🎨 **Neural Design Studio & Prompt Engine**: Formulate brand parameters (palette, typography, kinetic mood) and trigger interactive visual mock generations.
* ⚡ **High-Performance Architecture**: Built on React 18, Vite 5, route-level code splitting (`React.lazy`), skeleton fallbacks, and optimized bundle sizes targeting **Lighthouse 95+**.
* 🛡️ **Robust Form Validation & Accessiblity**: Strictly typed schemas using **Zod** + **React Hook Form**, keyboard-navigable Radix UI primitives, and WCAG AA compliance.
* 🚀 **SEO Autopilot**: Dynamic page metadata management powered by React Helmet Async and centralized route SEO configurations (`src/config/seo.ts`).
* 🔒 **Auth Guard & Session Mocking**: Client-side protected route wrappers (`/dashboard`, `/studio`) with mock authentication state handling.
* 📦 **Direct Template Code Export**: One-click code generation package bundling ready for developer export.

---

## 🛠️ Tech Stack

* **Core**: React 18 (TypeScript Strict Mode)
* **Build Tool**: Vite 5
* **Package Manager**: `pnpm` (required)
* **Styling & UI**: Tailwind CSS, Shadcn UI (Radix UI primitives), Lucide Icons, Framer Motion
* **State Management**: TanStack React Query v5 (Async Data & Mock API), React Context API
* **Forms & Validation**: React Hook Form + Zod
* **SEO**: React Helmet Async
* **Testing**: Vitest, React Testing Library, Playwright E2E support

---

## 📂 Directory Structure

```text
aethera-spark/
├── public/                     # Static assets (favicon, OpenGraph images)
├── src/
│   ├── app/                    # Application shell (Router, Providers)
│   │   ├── App.tsx             # Root component
│   │   ├── router.tsx          # React Router v6 definitions & protected route guards
│   │   └── providers.tsx       # QueryClient, Theme, & Helmet providers
│   ├── pages/                  # Page components (Lazy-loaded route views)
│   │   ├── LandingPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── PricingPage.tsx
│   │   ├── NotFound.tsx
│   │   ├── auth/               # LoginPage & RegisterPage
│   │   └── studio/             # StudioPage
│   ├── features/               # Feature-based domain modules
│   │   ├── auth/               # Auth forms, hooks, Zod schemas, API mocks
│   │   ├── dashboard/          # Project overview & credit widgets
│   │   ├── studio/             # Prompt editor, canvas preview, export tools
│   │   └── landing/            # Hero, features, showcase sections
│   ├── components/             # Reusable UI components
│   │   ├── ui/                 # Shadcn Radix UI primitives
│   │   └── shared/             # Cross-feature composite components
│   ├── lib/                    # Core utilities & API simulation
│   │   ├── mock-api/           # Simulated async AI generation responses
│   │   ├── query-client.ts     # TanStack React Query client setup
│   │   └── utils.ts            # Tailwind class merger & helpers
│   ├── config/                 # App configuration & SEO meta rules
│   ├── hooks/                  # Global custom hooks (e.g., responsive hooks)
│   └── styles/                 # Global CSS styles & Tailwind directives
├── AGENTS.md                   # Operational guidelines for AI coding agents
├── ARCHITECTURE.md             # System architecture & routing documentation
├── PRD.md                      # Product Requirements Document
├── PRODUCT-AI-AGENTS.md        # Vision architecture for v2 multi-agent engine
└── TODO.md                     # Roadmap & task tracker
```

---

## 🗺️ Application Routes

| Path | Component | Guard / Access | Description |
| :--- | :--- | :--- | :--- |
| `/` | `LandingPage` | Public | Hero showcase, features, pricing preview, & contact section |
| `/login` | `LoginPage` | Public | User authentication login form |
| `/register` | `RegisterPage` | Public | Account creation form |
| `/dashboard` | `DashboardPage` | Protected | User project workspace, credit balance, & recent designs |
| `/studio` | `StudioPage` | Protected | AI Prompt Studio, brand DNA tuner, & live preview canvas |
| `/studio/:projectId` | `StudioPage` | Protected | Project specific design canvas |
| `/pricing` | `PricingPage` | Public | Subscription tiers and feature comparison matrix |

---

## ⚡ Quick Start & Development

### 1. Prerequisites
* **Node.js**: v18.0.0 or higher
* **pnpm**: v10.0+ (Mandatory package manager)

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone <repository-url>
cd aethera-spark-main
pnpm install
```

### 3. Local Development
Run the Vite development server:
```bash
pnpm dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build & Preview
Validate TypeScript types and create the production build bundle:
```bash
pnpm build
```
Preview the production build locally:
```bash
pnpm preview
```

### 5. Running Tests
Run unit tests with Vitest:
```bash
pnpm test
```

---

## 📄 Project Documentation

For deeper details on architecture, design patterns, and agent instructions, refer to:
* 📘 [PRD.md](file:///Users/nauvaldzakwanbaihaqi/aethera-spark-main/PRD.md): Product vision, target users, and release metrics.
* 🏗️ [ARCHITECTURE.md](file:///Users/nauvaldzakwanbaihaqi/aethera-spark-main/ARCHITECTURE.md): Technical architecture, folder structure, and routing maps.
* 🤖 [AGENTS.md](file:///Users/nauvaldzakwanbaihaqi/aethera-spark-main/AGENTS.md): Coding rules, code quality standards, and Definition of Done.
* 🧠 [PRODUCT-AI-AGENTS.md](file:///Users/nauvaldzakwanbaihaqi/aethera-spark-main/PRODUCT-AI-AGENTS.md): Design vision for the multi-agent AI engine (v2.0+).
* 📝 [TODO.md](file:///Users/nauvaldzakwanbaihaqi/aethera-spark-main/TODO.md): Development roadmap and progress log.

---

## 📜 License

Created for **Aethera Spark (Aethera®)**. All rights reserved.
