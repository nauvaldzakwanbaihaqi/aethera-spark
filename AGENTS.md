# AGENTS.md — Project Rules for Aethera Spark (Antigravity / AI Coding Agent)

> **Catatan penting:** File ini adalah *rules file* yang dibaca native oleh Antigravity
> (dan kompatibel dengan Cursor, Claude Code, dsb) di setiap sesi. Isinya instruksi
> operasional buat AGENT yang ngoding repo ini — **bukan** dokumentasi konsep produk.
> Kalau kamu cari deskripsi "Architect Agent / Stylist Agent / Hacker Agent" ala
> *neural design engine* Aethera Spark, itu ada di `PRODUCT-AI-AGENTS.md`.

## 1. Ruang Lingkup Proyek Saat Ini (v1.0)

Repo ini membangun **frontend shell** dari Aethera Spark: landing page + halaman
pendukung (auth, dashboard, studio, pricing), dengan **AI generation flow yang
di-mock** (bukan koneksi ke LLM/backend sungguhan). Lihat `PRD.md` bagian *Scope*
dan `ARCHITECTURE.md` bagian *v1 vs Vision Architecture* sebelum mengasumsikan ada
backend nyata.

**Jangan:**
- Membuat API call sungguhan ke provider AI mana pun di v1. Semua "AI generation"
  harus lewat `src/lib/mock-api/`.
- Menambahkan Prisma/database/skema backend — itu eksplisit **out of scope** v1.
- Menebak arsitektur backend AI Engine dari `PRODUCT-AI-AGENTS.md` sebagai
  sesuatu yang perlu diimplementasi sekarang. Itu adalah *vision doc* v2+.

## 2. Tech Stack (Sumber Kebenaran)

- Build tool: Vite 5, package manager: `pnpm` (jangan pakai npm/yarn — akan
  menghasilkan lockfile ganda).
- Framework: React 18 + TypeScript (strict mode, tanpa `any` — lihat §4).
- Routing: React Router v6.
- Styling: Tailwind CSS + Shadcn UI (Radix primitives).
- Server/async state: TanStack React Query v5.
- Form: React Hook Form + Zod.
- Detail struktur folder & konvensi state ada di `ARCHITECTURE.md` — jangan
  duplikasi keputusan arsitektur di sini, rujuk ke sana.

## 3. Struktur Folder — Wajib Diikuti

Ikuti struktur di `ARCHITECTURE.md` §2 (feature-based + route-based hybrid).
Jangan bikin folder baru di root `src/` tanpa alasan kuat — tanya dulu lewat commit
message atau catatan PR kenapa struktur existing tidak cukup.

## 4. Code Quality

- TypeScript strict mode wajib menyala. `any` dilarang — kalau tipe belum jelas,
  pakai `unknown` + narrowing, atau tandai `// TODO: type this properly` dan
  jangan biarkan menyebar ke file lain.
- Komponen React: function component + named export dari `index.ts` per folder
  fitur. Hindari default export di file selain `pages/*` dan `main.tsx`.
- Maksimal ~250 baris per file komponen. Kalau lebih, itu sinyal untuk dipecah.
- Semua komponen interaktif (button, dropdown, modal) HARUS pakai primitive dari
  `components/ui/` (Shadcn), bukan elemen HTML mentah dengan styling manual.
- Setiap `props` interface didefinisikan eksplisit — jangan inline anonymous
  types untuk komponen yang dipakai lebih dari sekali.

## 5. State Management

- Data yang "datang dari luar" (bahkan kalau itu mock) → **selalu** lewat React
  Query, bukan `useState` + `useEffect` manual. Ini termasuk mock AI generation
  flow di Studio.
- UI state lokal murni (buka/tutup modal, tab aktif) → `useState`/`useReducer`.
- Jangan pasang global state manager (Redux/Zustand) tanpa justifikasi eksplisit
  di ARCHITECTURE.md — untuk scope v1 ini, React Query + local state cukup.
- Query key convention: `[domain, resource, params]`, contoh:
  `['projects', 'list', { userId }]`.

## 6. Forms

- Semua form pakai React Hook Form + Zod resolver. Schema Zod didefinisikan di
  `features/<domain>/schemas/`, tidak inline di komponen.
- Validasi client-side adalah **UX**, bukan security boundary. Jangan pernah
  berasumsi validasi Zod di frontend cukup untuk "aman" — catat ini di komentar
  kalau ada data sensitif yang lewat form, karena backend v2 nanti wajib validasi
  ulang di server.

## 7. Testing (Wajib untuk Critical Path)

- Unit test: Vitest + React Testing Library, minimal untuk `schemas/`, `hooks/`,
  dan `lib/`.
- Form kritis (Login, Register, Prompt Studio) wajib punya test untuk: validasi
  gagal menampilkan error yang benar, submit sukses memanggil handler yang benar.
- E2E (Playwright) opsional di v1, tapi kalau ditambahkan, cover satu smoke path:
  landing → register (mock) → dashboard → studio submit prompt (mock).
- Jangan skip test demi kecepatan generate — test yang gagal harus diperbaiki di
  turn yang sama, bukan ditandai `.skip()`.

## 8. Accessibility & Performance

- Setiap elemen interaktif harus keyboard-navigable dan punya label aksesibel
  (via Radix primitive sudah otomatis; kalau bikin custom, tambahkan `aria-*`
  manual).
- Route-level code splitting via `React.lazy` — jangan import semua `pages/*`
  secara eager di router.
- Gambar: WebP/AVIF, `loading="lazy"` untuk yang di bawah *fold*.

## 9. Git & Commit Convention

- Conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`.
- Satu commit = satu perubahan logis. Jangan gabung "setup routing" dengan
  "styling landing page" dalam satu commit.

## 10. Definition of Done (per task)

Sebelum menandai task di `TODO.md` selesai:
1. `pnpm build` sukses tanpa error TypeScript.
2. Tidak ada `any` baru yang masuk.
3. Komponen baru sudah dites minimal (kalau termasuk critical path §7).
4. Tidak ada `console.log` tertinggal.
5. Responsif diperiksa di 3 breakpoint (mobile/tablet/desktop).

## 11. Skills (Opsional, untuk Task Berulang)

Kalau ada task yang bakal diulang-ulang (misalnya "generate halaman baru dengan
pola Shadcn form standar"), pertimbangkan bikin `SKILL.md` di `.agents/skills/`
sesuai konvensi native Antigravity, daripada menjejalkan instruksi itu di sini.
File ini sebaiknya tetap ringkas — proyek besar dengan `AGENTS.md` yang terlalu
panjang justru menurunkan kualitas *context* yang di-load agent.
