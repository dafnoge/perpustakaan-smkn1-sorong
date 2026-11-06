# 📚 Perpustakaan Digital SMKN 1 Sorong

Aplikasi Web Perpustakaan Digital modern berbasis *Mobile-First*, terintegrasi dengan **Supabase Database & Storage**, pengingat WhatsApp denda otomatis, dan katalog khusus **Tes Kemampuan Akademik (TKA) 2026**.

---

## 👥 1. Data Tim Pengembang (Kelompok RPL)
- **Nama Sekolah**: SMKN 1 Kota Sorong
- **Jurusan**: Rekayasa Perangkat Lunak (RPL) - Kelas XII
- **Anggota Tim**:
  1. **Reyhan Daffa Adilla Harahap** (Project Manager / Fullstack Lead)
  2. **Muhammad Ichsan** (UI/UX Designer & Content Specialist)
  3. **Mazmur Novbertman** (QA Tester & Documentation)

---

## ⚙️ 2. Workflow & Alur Kerja Aplikasi (Workflow.md)
1. **Akses Siswa (Tanpa Akun)**:
   - Membuka Katalog Publik (`index.html`).
   - Mencari modul berdasarkan 8 Jurusan Kejuruan (RPL, TJKT, DKV, MPLB, AKL, TPMG, GP, TET) atau Mapel Umum (Matematika, B. Indo, dll.).
   - Menjelajahi *Carousel Horizontal* khusus **Koleksi Bank Soal TKA**.
   - Melakukan pengajuan peminjaman buku dengan persetujuan denda otomatis keterlambatan (Rp15.000,-/buku).
   - Memasukkan Kode Otorisasi Kios Petugas untuk validasi keamanan peminjaman mandiri.
   - Membaca e-book modul langsung melalui modal PDF viewer terintegrasi.

2. **Akses Admin / Petugas Perpustakaan**:
   - Autentikasi Login Petugas (`login.html`) menggunakan Supabase Auth.
   - Mengelola stok buku secara instan (+ / -) di Dashboard Admin (`admin.html`).
   - Mengunggah foto sampel cover buku langsung dari perangkat lokal (Dual-Tab File Upload / Base64 Fallback).
   - Memantau siswa yang *overdue* dengan hitung mundur realtime dan mengoperasikan tombol **Pengingat Denda WhatsApp** sekali klik.
   - Mengubah kode verifikasi kios anjungan sewaktu-waktu secara realtime.
   - Mengunduh rekapitulasi data peminjaman bulanan ke format **Excel (.xlsx)**.

---

## 🛠️ Teknologi yang Digunakan (Tech Stack)
- **Frontend**: HTML5, Tailwind CSS (Mobile-First Responsive Design)
- **Backend / BaaS**: Supabase (PostgreSQL Database, Realtime Subscriptions, Row Level Security)
- **Pustaka Tambahan**: 
  - `@supabase/supabase-js` v2 (Koneksi Database & Realtime)
  - `SheetJS (xlsx.full.min.js)` (Eksport Laporan Excel)
  - Google Fonts (Poppins)
  - OpenStreetMap / Google Maps Embed API
- **Deployment**: GitHub Pages (Static Web Hosting)

---

## 🌐 3. Tautan Aplikasi Online
- **URL Katalog Siswa**: [https://dafnoge.github.io/perpustakaan-smkn1-sorong/](https://dafnoge.github.io/perpustakaan-smkn1-sorong/)
- **URL Portal Admin**: [https://dafnoge.github.io/perpustakaan-smkn1-sorong/admin.html](https://dafnoge.github.io/perpustakaan-smkn1-sorong/admin.html)

---

## 📹 4. Video Penjelasan Aplikasi
- **Link Video**: `[Menunggu proses perekaman video demo maksimal 5 menit]`
- **Catatan Isi Video**: Memuat perkenalan anggota tim, demonstrasi alur siswa di anjungan kios mandiri, verifikasi kode admin, hingga fitur pemicu denda WhatsApp.

---

## 📊 5. Flyer & Infografis
- **Status File**: Disimpan pada direktori `documentation/flyer-perpustakaan.png`.

---

## 📄 6. Dokumentasi Projek & Kebermanfaatan
- **Status File**: Disimpan pada file `documentation/Dokumentasi_Perpustakaan_Digital_SMKN1.pdf`.
