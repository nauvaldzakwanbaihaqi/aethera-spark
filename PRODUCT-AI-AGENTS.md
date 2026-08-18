# Product Concept: AI Agents System — Aethera Spark

> **Catatan:** Ini adalah dokumentasi **konsep produk** — deskripsi *multi-agent
> orchestration system* yang menjadi *value proposition* Aethera Spark sebagai
> platform (fitur "Neural Design Engine" yang dijual ke user akhir).
>
> Ini **bukan** instruksi untuk coding agent (Antigravity/Cursor/dll) yang
> sedang membangun repo ini. Untuk itu, lihat `AGENTS.md` di root.
>
> **Status implementasi v1.0:** sistem 4 agent di bawah ini **belum dibangun
> sungguhan** — perilakunya di-*mock* di frontend (lihat `ARCHITECTURE.md` §3
> dan `TODO.md` Phase 3). Dokumen ini adalah spesifikasi *vision* untuk v2.0+
> ketika AI Engine Layer sungguhan mulai dikembangkan, sekaligus referensi
> copywriting untuk marketing halaman utama.

Aethera Spark ditenagai oleh sistem *multi-agent orchestration* di mana setiap
agen memiliki spesialisasi khusus (mirip dengan tim *engineer* dan desainer di
dunia nyata) untuk memastikan *output* berkualitas tinggi dan akurat.

## 1. The Architect Agent (Structure & Layout)
- **Peran:** Bertanggung jawab atas fondasi dan arsitektur informasi halaman.
- **Fungsi:**
  - Menerjemahkan *prompt* pengguna menjadi *wireframe* semantik HTML5.
  - Menentukan pembagian komponen (misalnya: *Hero Section, Features Grid,
    Testimonials*).
  - Mengatur hierarki DOM agar optimal untuk aksesibilitas (a11y) dan struktur
    *logic* React.

## 2. The Stylist Agent (Aesthetics & Brand DNA)
- **Peran:** *Art Director* AI.
- **Fungsi:**
  - Menyuntikkan kelas Tailwind CSS tingkat lanjut untuk menciptakan desain
    yang mewah dan futuristik.
  - Menerapkan *kinetic animations*, *gradient meshes*, efek *glassmorphism*,
    dan *video backgrounds*.
  - Mengonfigurasi pustaka Shadcn UI agar sesuai dengan pedoman visual (misal:
    radius *border*, skema warna *dark-mode*).

## 3. The Hacker/Coder Agent (Logic & Assembly)
- **Peran:** *Full-Stack Code Synthesizer*.
- **Fungsi:**
  - Menggabungkan hasil dari Architect dan Stylist menjadi *file-file*
    berekstensi `.tsx`.
  - Mengimplementasikan ekosistem React 18 tingkat lanjut: `TanStack React
    Query v5` untuk *state*, dan `React Hook Form` + `Zod` untuk formulir
    interaktif yang solid.
  - Memastikan *strict typing* TypeScript tanpa celah.
  - Men-generate *file* konfigurasi seperti `tailwind.config.ts`,
    `vite.config.ts`, dan `package.json` untuk `pnpm`.

## 4. The Edge Optimizer Agent (Performance & SEO)
- **Peran:** DevOps & SEO Specialist AI.
- **Fungsi:**
  - Mengonfigurasi *SEO Autopilot* (menyusun metadata yang dinamis, optimasi
    OpenGraph).
  - Menganalisis *output* dan mempersiapkan struktur *project* agar memiliki
    *zero-friction deployment* ke jaringan Edge.

## Catatan Desain untuk v2.0+

Ketika sistem ini benar-benar diimplementasikan (di luar scope repo frontend
ini), pertimbangkan:
- Setiap agent di atas idealnya adalah *pipeline stage* terpisah yang bisa
  di-*retry* independen, bukan satu *monolithic prompt* — supaya kegagalan di
  Stylist Agent tidak memaksa Architect Agent dijalankan ulang.
- Perlu *evaluation harness* untuk mengukur akurasi *prompt-to-code* (target
  99% sesuai `PRD.md` G-2) sebelum agent ini dianggap *production-ready* —
  ini bukan angka yang bisa diklaim tanpa benchmark nyata.
