# Aethera Spark: Development Roadmap & TODO

Dokumen ini berisi alur pengerjaan (*roadmap*) untuk memandu proses
*engineering* dan *development* Aethera. Karena halaman utama (Landing Page)
sudah ada, fase pertama fokus *refactoring* dan perbaikan fondasi, sebelum
lanjut ngoding halaman pendukung dan *logic* utamanya.

> **Catatan urutan (revisi):** Verifikasi tooling sekarang jadi item **pertama**
> di Phase 1, bukan terakhir — kamu nggak bisa audit *codebase* dengan percaya
> diri kalau belum konfirmasi Vite/TS/pnpm-nya sendiri sehat. Lihat juga catatan
> *interleaving* di Phase 2 & 3: sebagian kecil dari Phase 3 (router skeleton +
> query client) sengaja digeser lebih awal supaya Phase 2 nggak membangun UI
> yang harus dibongkar ulang sepenuhnya nanti.

## Phase 0: Project Rules & Tooling Sanity (Priority: Blocker)

- [x] **Setup Ekosistem Inti:** Pastikan Vite, React 18, TypeScript, dan pnpm
      sudah terkonfigurasi optimal (termasuk *path aliases* `@/components`).
      Jalankan `pnpm install && pnpm dev` dari *clean clone* — kalau ada
      langkah manual tambahan, itu bug, bukan dokumentasi yang kurang.
- [x] **Setup `AGENTS.md` untuk Antigravity:** Pastikan `AGENTS.md` di root
      berisi *rules* coding agent (bukan konten produk — lihat catatan di
      file itu sendiri). Konfirmasi Antigravity membaca file ini di sesi baru.
- [x] **Definisikan Design Tokens (Brand DNA):** Sebelum menyentuh komponen
      apa pun, tuliskan palet warna, skala tipografi, radius, dan spacing di
      `tailwind.config.ts`. Ini fondasi klaim "tidak *generic*" — tanpa ini,
      Phase 1-2 cuma akan menghasilkan Shadcn *default look*.

## Phase 1: Foundation & Landing Page Refactoring (Priority: High)

Fase ini fokus ngeberesin apa yang udah ada, mastiin fondasinya kokoh sebelum
ditambahin fitur yang lebih kompleks.

- [x] **Audit Halaman Utama:** Review kode *landing page* yang udah ada.
      Bersihkan *codebase* dari *styling* atau komponen yang *redundant*.
- [x] **Standarisasi UI/UX:** Pastikan implementasi Tailwind CSS dan
      *primitives* Shadcn UI/Radix UI konsisten, dan konsisten dengan Design
      Tokens dari Phase 0 — bukan warna/spacing ad-hoc per komponen.
- [x] **Responsive Check:** Tes ulang *landing page* di berbagai ukuran layar
      (Mobile, Tablet, Desktop) biar *feel* mewahnya tetep dapet.

## Phase 2: Core Pages Development (Priority: High)

**Sebelum mulai:** setup router skeleton (`app/router.tsx` dengan semua path
di `ARCHITECTURE.md` §3, boleh masih halaman kosong) dan `QueryClientProvider`
kosong di `app/providers.tsx`. Ini bukan Phase 3 penuh — cuma *skeleton* biar
halaman di bawah ini langsung ditulis dengan pola React Query yang benar sejak
awal, bukan `useState` sementara yang nanti dibongkar.

- [x] **Router & Provider Skeleton:** Setup React Router v6 dengan semua path
      dari `ARCHITECTURE.md` §3 + `QueryClientProvider` kosong.
- [x] **Halaman Autentikasi (Login/Register):** UI untuk akses masuk pengguna
      dengan desain yang *seamless*. Form pakai React Hook Form + Zod sejak
      awal (bukan ditambahkan belakangan).
- [x] **Halaman Dashboard User:** Antarmuka daftar *project*/*website* yang
      sudah di-*generate* user. Data dari `lib/mock-api/` via React Query
      (skeleton loading state, bukan spinner generik).
- [x] **Halaman AI Studio/Editor (Workspace):** *Core app* — UI untuk area
      *prompting*, konfigurasi *Brand DNA*, dan *live preview* hasil
      *generate* (mock).
- [x] **Halaman Pricing/Tiers:** Halaman paket langganan Aethera Spark.

## Phase 3: Logic, State & Integration (Priority: Medium-High)

Wiring penuh + simulasi backend. Router/provider skeleton-nya sudah ada dari
Phase 2 — fase ini isi *logic*-nya.

- [x] **Setup TanStack React Query v5 penuh:** Query key convention (lihat
      `AGENTS.md` §5), *error boundary*, *retry policy*.
- [x] **Wiring Form dengan React Hook Form & Zod:** Pastikan validasi *strict*
      konsisten di semua form (Auth + Prompt Studio), schema di
      `features/*/schemas/`.
- [x] **Mocking AI Generation Flow:** Simulasi *loading state* realistis
      (progress bar bertahap, bukan `setTimeout` tunggal) di `lib/mock-api/`.
      Ingat: NFR-1 di `PRD.md` (45 detik) itu target AI Engine nyata — mock
      v1 harus terasa cepat untuk *demo*, bukan meniru 45 detik.
- [x] **Export Logic Setup:** Kerangka fungsi nge-ZIP *project* dari
      *client-side* (mis. `jszip`) berbasis template statis.
- [x] **Test Critical Path:** Vitest untuk schema validasi + React Testing
      Library untuk form Login/Register/Prompt Studio (lihat `AGENTS.md` §7).

## Phase 4: Polish, Performance & Edge (Priority: Medium)

Fase terakhir sebelum rilis v1.0. Fokus estetika tingkat lanjut dan
optimalisasi.

- [x] **Kinetic Animations:** Framer Motion atau CSS *animations* di halaman
      utama dan *dashboard* biar interaksinya terasa mahal dan futuristik.
- [x] **SEO Autopilot Setup:** *Tag* meta, OpenGraph, dan *title* dinamis
      terpasang benar per *routing* (React Router v6).
- [x] **Accessibility Audit:** axe DevTools di setiap halaman, target 0
      *critical/serious violations*. Cek navigasi keyboard penuh (Tab/Enter/
      Esc) untuk modal, dropdown, form.
- [x] **Lighthouse Audit:** Tes performa, aksesibilitas, SEO. Target skor 95+
      di *setiap* halaman, bukan cuma landing.
- [x] **Pilih & Konfirmasi Platform Deployment:** Cloudflare Pages
      (rekomendasi default, lihat `ARCHITECTURE.md` §9) atau Vercel — pilih
      satu, karena memengaruhi konfigurasi *rewrite* SPA.
- [x] **Deployment Prep:** Tes *build* lokal (`pnpm build`), pastikan nol
      *error* TypeScript, sebelum di-*push* ke layanan Edge terpilih.
