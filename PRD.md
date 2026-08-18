# Product Requirements Document (PRD): Aethera Spark (Aethera®)

## Problem Statement
Proses pembuatan antarmuka web *high-end* dan mewah saat ini memakan waktu
berminggu-minggu, membutuhkan biaya besar untuk agensi desain, dan seringkali
menghasilkan kode yang sulit di-maintain. Di sisi lain, *website builder*
berbasis AI yang ada di pasaran cenderung menghasilkan desain yang *generic*,
kaku, dan tidak mencerminkan DNA *brand* premium. Kreator, *engineer*, dan
*founder* membutuhkan solusi yang bisa menjembatani ide liar (konsep kreatif)
langsung menjadi *production-grade web interface* secara instan tanpa
mengorbankan estetika mewah maupun performa teknis.

## Status Rilis & Ruang Lingkup Dokumen Ini

Dokumen ini mendeskripsikan **visi produk penuh**, tapi rilis saat ini (yang
sedang di-*vibe coding*) adalah **v1.0: frontend shell dengan AI generation
flow yang di-mock** — lihat bagian *Scope*. Beberapa metrik di bawah (ditandai
🔮) hanya relevan setelah AI Engine sungguhan dibangun (v2.0+). Jangan
optimasi untuk metrik 🔮 selama masih mengerjakan repo frontend.

## Goals
- **G-1** 🔮: Mencapai *turnaround time* maksimal 24 jam dari *prompt* hingga
  *live site* siap di-*deploy*. (Bergantung pada AI Engine v2.0+.)
- **G-2** 🔮: Mempertahankan akurasi *prompt-to-code* sebesar 99%. (Butuh
  *evaluation harness* nyata — lihat catatan di `PRODUCT-AI-AGENTS.md`.)
- **G-3** ✅ **v1**: Skor Lighthouse 95+ (Performance, Accessibility, Best
  Practices, SEO) untuk landing page dan halaman pendukung yang di-generate
  di repo ini.
- **G-4** 🔮: Mengakuisisi 100 DAU dari segmen *premium brand* dan *startup
  founders* dalam 3 bulan pertama rilis publik (butuh produk live + backend).

## Success Metrics — v1.0 (Yang Benar-Benar Bisa Diukur Sekarang)

- Lighthouse Performance/Accessibility/Best Practices/SEO ≥ 95 di setiap
  halaman (Landing, Login, Register, Dashboard, Studio, Pricing).
- Time to Interactive < 3 detik pada simulasi jaringan 4G (Chrome DevTools
  throttling).
- `pnpm build` menghasilkan **nol** error TypeScript, nol warning ESLint blocking.
- Baseline aksesibilitas WCAG AA: axe DevTools 0 *critical/serious violations*
  di setiap halaman.
- Semua form kritis (Login, Register, Prompt Studio) punya test yang lulus
  (lihat `ARCHITECTURE.md` §7).

## Target User
- **Creative Directors & Design Leaders:** Membutuhkan alat untuk
  menerjemahkan visi *brand* premium mereka langsung ke purwarupa fungsional
  tanpa harus menunggu iterasi panjang dari tim *developer*. *Pain point*:
  Komunikasi desain ke kode sering meleset dari visi awal.
- **Full-Stack Engineers / Hackers:** Membutuhkan asisten cerdas untuk
  mengotomatisasi *setup frontend* (React, Tailwind, Shadcn) sehingga mereka
  bisa fokus pada arsitektur *backend*, integrasi AI, dan *security*. *Pain
  point*: Menulis *boilerplate* UI yang repetitif menghabiskan banyak waktu.
- **Startup Founders (Tech & Web3):** Ingin melakukan validasi ide produk
  dengan *landing page* yang terlihat kredibel, mewah, dan berkinerja tinggi.
  *Pain point*: Kurangnya *budget* awal untuk menyewa studio desain mahal.

## User Stories
- Sebagai **Creative Director**, saya ingin **memasukkan parameter brand DNA
  (warna, mood, tipografi)** supaya **AI dapat menghasilkan desain antarmuka
  yang tidak *generic* dan sesuai dengan identitas mewah *brand* saya**.
  *(v1: input form + preview styling berbasis token yang sudah didefinisikan,
  bukan generasi bebas — lihat `TODO.md` Phase 1.)*
- Sebagai **Full-Stack Engineer**, saya ingin **mengekspor hasil desain
  langsung menjadi kode React 18 & Vite yang menggunakan Tailwind CSS dan
  Shadcn UI** supaya **saya bisa langsung mengintegrasikannya dengan sistem
  *backend* atau *smart contract* saya tanpa membuang waktu menulis CSS dari
  nol**.
- Sebagai **Startup Founder**, saya ingin **sistem mengoptimalkan SEO dan
  metadata secara otomatis (SEO Autopilot)** supaya **produk saya memiliki
  visibilitas tinggi di mesin pencari sejak hari pertama *deployment***.

## Functional Requirements

- **FR-1 [P0] Neural Design Engine.**
  - 🔮 Vision: Sistem menerima *prompt* teks + parameter visual, menghasilkan
    struktur DOM dan *styling* secara dinamis via LLM.
  - ✅ **v1:** UI untuk *input prompt* + parameter Brand DNA, dengan hasil
    *generation* **disimulasikan** (progress state palsu → hasil dari
    template yang sudah disiapkan, bukan LLM call sungguhan).
- **FR-2 [P0] Rapid Prompt-to-Code Export.**
  - ✅ **v1:** UI tombol export + *client-side* zip dari template statis
    (pakai `jszip` atau setara) sebagai *proof of concept* alur, bukan hasil
    *generation* dinamis sungguhan.
- **FR-3 [P1] Component Injection.** Sistem mengimplementasikan *primitives*
  Radix UI/Shadcn UI untuk elemen interaktif, divalidasi Zod. ✅ v1 penuh.
- **FR-4 [P1] Kinetic Animations.** Animasi *scroll*/*state* berbasis Framer
  Motion atau CSS kustom. ✅ v1 penuh.
- **FR-5 [P2] SEO Autopilot.** *Generator* tag `<meta>`, OpenGraph, optimasi
  gambar (WebP/AVIF). ✅ v1: statis per halaman via `config/seo.ts` + React
  Helmet/React Router meta API (dinamis per route, bukan per *generated
  content* karena belum ada backend).

## Non-Functional Requirements

- **NFR-1** 🔮 (Performance AI Engine): Respons AI generator maks. 45 detik
  dari *prompt* ke *preview*. *Tidak berlaku* untuk mock v1 (mock harus
  instan/singkat, bukan mensimulasikan 45 detik nyata).
- **NFR-2** 🔮 (Scalability): Infrastruktur Edge menangani 10.000 *concurrent
  request* tanpa degradasi < 200ms. Berlaku setelah ada backend nyata.
- **NFR-3** 🔮 (Reliability): *Uptime* 99.9%/bulan. Berlaku setelah *live
  deployment* produksi dengan SLA nyata.
- **NFR-4** ✅ (Quality, **berlaku sekarang**): *Output* kode mengikuti
  *clean code*, ter-*linting* (ESLint + Prettier), tipe data TypeScript jelas
  (tanpa `any`) — lihat `AGENTS.md` §4.

## Scope
- **IN (Release v1.0):**
  - *Engine text-to-UI* untuk satu *landing page* komprehensif + halaman
    pendukung (auth, dashboard, studio, pricing) dengan AI generation
    **di-mock**.
  - Ekspor kode React 18 + Vite + Tailwind + Shadcn UI (via template statis).
  - Implementasi *SEO Autopilot* statis per halaman.
  - Integrasi animasi kinetis dasar.
- **OUT (Release v1.0 — Ditunda ke v2.0+):**
  - Pembuatan sistem *backend/database* secara dinamis (skema Prisma ORM).
  - AI Engine sungguhan (multi-agent LLM orchestration — lihat
    `PRODUCT-AI-AGENTS.md`).
  - Ekspor ke *framework fullstack* lain (mis. Next.js App Router).
  - Integrasi pembayaran atau sistem e-commerce.
  - Autentikasi nyata (OAuth/session server) — v1 pakai mock auth.

## Assumptions & Risks

- **Risiko:** UI dibangun sebelum *wiring* state (Phase 2 sebelum Phase 3 di
  `TODO.md`) berarti sebagian komponen kemungkinan perlu di-*refactor* ulang
  saat React Query dipasang. Mitigasi: siapkan skeleton router + query client
  di awal Phase 2, jangan tunda semuanya ke Phase 3 (lihat `TODO.md`).
- **Risiko:** Klaim "tidak *generic*" bergantung sepenuhnya pada kualitas
  *design token* (Brand DNA) yang didefinisikan manusia di v1 — karena belum
  ada AI generation sungguhan. Kalau token tidak didefinisikan dengan disiplin
  di awal, hasil akhir tetap akan terlihat seperti Shadcn *default template*.
  Mitigasi: task eksplisit "Definisikan Design Tokens" di Phase 1 `TODO.md`.
- **Asumsi:** Platform deployment (Vercel vs Cloudflare Pages) belum final —
  lihat `ARCHITECTURE.md` §9. Perlu dikonfirmasi sebelum Phase 4.
