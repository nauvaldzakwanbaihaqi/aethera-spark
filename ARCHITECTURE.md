# System Architecture: Aethera Spark

## 0. Penting: Dua Lapis Arsitektur

Dokumen ini mendeskripsikan **dua hal berbeda** yang sering tercampur di draf
sebelumnya. Pisahkan dengan tegas:

| | **v1.0 — Yang sedang dibangun (repo ini)** | **Vision — v2.0+ (belum dibangun)** |
|---|---|---|
| Sifat | Frontend shell, *statically deployed* | Full-stack, AI Engine sungguhan |
| AI generation | **Di-mock** di `src/lib/mock-api/` | Microservice Python/Node + LLM nyata |
| Backend/DB | Tidak ada (sesuai `PRD.md` Scope: OUT) | Ada, termasuk skema data project user |
| §3 & §4 di bawah | Berlaku | — |
| §5 (AI Engine Layer) | **Referensi arsitektur target**, bukan yang dibangun sekarang | Berlaku |

Kalau kamu (atau coding agent) menemukan instruksi yang menyebut "WebSocket
real-time feedback" atau "microservice orchestration" — itu §5, bukan tugas v1.

## 1. High-Level Architecture Overview (Vision, v2.0+)

Aethera® dirancang dengan arsitektur berbasis *microservices/serverless* yang
memisahkan antara antarmuka platform (Client-Side), lapisan orkestrasi AI (API
Gateway), dan *Engine Layer* (LLMs & Agents). Detail 4-agent system ada di
`PRODUCT-AI-AGENTS.md`.

## 2. Struktur Folder v1.0 (Frontend Shell)

```
aethera-spark/
├── public/
│   ├── favicon.svg
│   └── og-image.png
├── src/
│   ├── app/                    # App shell: router, providers
│   │   ├── App.tsx
│   │   ├── router.tsx
│   │   └── providers.tsx       # QueryClientProvider, ThemeProvider
│   ├── pages/                  # 1 file = 1 route, komponen tipis
│   │   ├── LandingPage.tsx
│   │   ├── auth/
│   │   │   ├── LoginPage.tsx
│   │   │   └── RegisterPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── studio/StudioPage.tsx
│   │   └── PricingPage.tsx
│   ├── features/               # Domain logic + UI per fitur
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── schemas/        # Zod schemas
│   │   │   └── api/            # React Query hooks ke mock-api
│   │   ├── studio/
│   │   ├── dashboard/
│   │   └── landing/
│   ├── components/
│   │   ├── ui/                 # Shadcn primitives — jangan edit manual,
│   │   │                       #   regenerate via CLI kalau perlu ubah
│   │   └── shared/              # Komponen komposit lintas-fitur
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── query-client.ts
│   │   └── mock-api/            # Simulasi backend + AI generation (Phase 3)
│   ├── hooks/                   # Hook global (mis. useMediaQuery)
│   ├── styles/globals.css
│   ├── types/
│   ├── config/seo.ts
│   └── main.tsx
├── .agents/skills/               # Opsional: SKILL.md untuk task berulang
├── AGENTS.md
├── PRODUCT-AI-AGENTS.md
├── ARCHITECTURE.md / PRD.md / TODO.md
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
├── .env.example
└── package.json
```

**Alasan feature-based + route-based hybrid** (bukan *atomic design* murni):
`pages/` tetap ada supaya routing jelas 1:1, tapi logic & state per domain
dikumpulkan di `features/` supaya nggak nyebar ke banyak folder saat fitur
tumbuh. Trade-off: butuh disiplin — kalau ragu taruh komponen di `features/x`
vs `components/shared`, tanya "apakah ini spesifik ke satu domain, atau
dipakai ≥2 fitur?"

## 3. Routing Map (React Router v6)

| Path | Komponen | Proteksi |
|---|---|---|
| `/` | `LandingPage` | Publik |
| `/login`, `/register` | `LoginPage`, `RegisterPage` | Publik, redirect ke `/dashboard` kalau sudah "login" (mock) |
| `/dashboard` | `DashboardPage` | Protected (mock auth guard) |
| `/studio`, `/studio/:projectId` | `StudioPage` | Protected |
| `/pricing` | `PricingPage` | Publik |

Semua route di-*lazy load* via `React.lazy` + `<Suspense>` per halaman, dengan
fallback skeleton — bukan spinner generik, supaya *perceived performance*
sesuai standar "mewah" yang jadi *value prop* produk.

## 4. State, Auth Mock, & Security (v1.0)

- **Server/async state:** TanStack React Query v5 untuk semua data yang lewat
  `lib/mock-api/`, termasuk simulasi *AI generation flow*. Query key convention:
  `[domain, resource, params]`.
- **Auth mock:** Token palsu disimpan di memory (React context) atau
  `sessionStorage` untuk keperluan demo — **secara eksplisit bukan pola aman**.
  Ini catatan untuk siapa pun yang integrasi backend nyata di v2: ganti dengan
  `httpOnly` cookie dari server, jangan lanjutkan pola `sessionStorage`.
- **Validasi:** Zod di client adalah lapisan UX, bukan security boundary.
  Backend v2 wajib validasi ulang semua input.
- **Env vars:** Semua env var yang di-prefix `VITE_` otomatis ter-*bundle* ke
  client — **jangan pernah** taruh API key asli di sana selama masih frontend
  murni. Gunakan `.env.example` sebagai template tanpa nilai rahasia.

## 5. AI Engine & Orchestration Layer (Vision — v2.0+, TIDAK dibangun di v1)

- *Microservices* berbasis Python atau Node.js yang menjalankan skrip logika
  *Multi-Agent* (lihat `PRODUCT-AI-AGENTS.md`).
- Komunikasi asinkron via WebSocket untuk *real-time feedback* progres
  *generation* kepada pengguna.
- Di v1, perilaku ini disimulasikan dengan `setTimeout`/progress-state palsu
  di `lib/mock-api/`, supaya UI Studio bisa didesain dan diuji tanpa
  bergantung pada backend yang belum ada.

## 6. Execution Flow — Vision (Prompt-to-Code Pipeline, v2.0+)

1. **User Input:** Pengguna memasukkan spesifikasi teks dan *brand DNA*.
2. **Gateway & Validation:** Permintaan masuk antrean di API Gateway.
3. **Agent Orchestration:** Architect → Stylist → Hacker (paralel/sequential).
4. **Code Synthesis:** Disatukan menjadi hierarki *folder project* Vite/React.
5. **Review & Optimization:** Optimizer Agent menyuntikkan SEO Autopilot.
6. **Delivery:** Dikemas `.zip` atau push ke repo Git klien.

## 7. Testing Strategy (v1.0)

- **Unit:** Vitest + React Testing Library — wajib untuk `schemas/`, `hooks/`,
  `lib/`.
- **Critical path:** Form Login/Register/Prompt Studio wajib punya test
  validasi + submit.
- **E2E (opsional v1):** Playwright, satu smoke test: landing → register mock
  → dashboard → submit prompt mock.

## 8. Performance Strategy (menuju Lighthouse 95+, PRD G-3)

- Code splitting per route (`React.lazy`).
- Font: `font-display: swap`, preload font kritis.
- Gambar: WebP/AVIF + `loading="lazy"` di bawah *fold*.
- Pantau ukuran *bundle* dengan `rollup-plugin-visualizer` — jangan biarkan
  satu dependency (mis. animasi berat) diam-diam menggandakan ukuran chunk.

## 9. Scalability & Deployment Strategy

- **Edge-First (vision):** *deployment* klien menargetkan Edge CDN
  terdistribusi untuk TTFB minimal.
- **Deployment v1 (rekomendasi default):** Cloudflare Pages — konsisten
  dengan narasi "Edge-First" dan gratis untuk *static SPA*. Vercel adalah
  alternatif setara. **Ini keputusan yang perlu kamu konfirmasi** karena
  memengaruhi konfigurasi *rewrite* SPA (`_redirects` di Cloudflare vs
  `vercel.json` di Vercel) untuk React Router — pilih satu sebelum Phase 4.
- **Zero-Friction:** `pnpm install && pnpm dev` harus langsung jalan tanpa
  langkah manual tambahan.
