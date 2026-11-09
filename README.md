# 📚 Perpustakaan Digital SMKN 1 Sorong

Aplikasi Web Perpustakaan Digital modern berbasis *Mobile-First*, terintegrasi dengan **Cloud Database Supabase**, sistem anjungan kios mandiri anti-spam, pengingat WhatsApp denda keterlambatan otomatis, dan katalog khusus **Tes Kemampuan Akademik (TKA) 2026**.

---

## 👥 1. Data Tim Pengembang (Kelompok RPL)
- **Nama Sekolah**: SMKN 1 Kota Sorong
- **Jurusan**: Rekayasa Perangkat Lunak (RPL) - Kelas XII
- **Anggota Tim**:
  1. **Reyhan Daffa Adilla Harahap** (Project Manager / Fullstack Lead)
  2. **Muhammad Ichsan** (UI/UX Designer & Content Specialist)
  3. **Mazmur Novbertman** (QA Tester & Documentation)

---

## 🎯 2. Masalah Nyata & Solusi yang Dihadirkan

### Masalah Nyata di Sekolah (Hasil Wawancara Petugas Perpustakaan):
1. **Pencatatan Konvensional yang Lambat**: Transaksi peminjaman masih dicatat di buku besar manual, memakan waktu 3–5 menit per siswa dan menimbulkan antrean panjang saat jam istirahat.
2. **Tingginya Keterlambatan Modul Praktik**: Buku kejuruan memiliki stok fisik terbatas namun sangat krusial untuk praktik bengkel/lab. Siswa kerap lupa tenggat waktu dan petugas kesulitan melacak kontak siswa.
3. **Ketiadaan Bank Soal TKA Terpusat**: Siswa kelas XII membutuhkan modul latihan Tes Kemampuan Akademik (TKA) untuk persiapan seleksi perguruan tinggi kedinasan/vokasi yang belum terintegrasi.
4. **Pengecekan Stok Tidak Fleksibel**: Siswa tidak bisa mengecek ketersediaan buku kejuruan dari ponsel sebelum menuju ke perpustakaan.

### Solusi Inovatif Aplikasi:
- **Anjungan Kios Mandiri (Self-Service)**: Siswa dapat mencari dan meminjam buku secara mandiri di komputer perpustakaan dalam waktu kurang dari 30 detik.
- **Otorisasi Petugas Kios Anti-Spam**: Tombol konfirmasi pinjam hanya aktif setelah memasukkan kode otorisasi harian dari petugas perpustakaan (`PERPUS2026`), mencegah bot dan pengajuan fiktif.
- **Otomasi Pengingat Denda WhatsApp 1-Klik**: Petugas dapat mengirim pesan penagihan denda keterlambatan Rp15.000,- langsung ke nomor WhatsApp siswa/wali dalam satu kali klik.
- **Katalog Terpadu 8 Jurusan & Bank Soal TKA**: Navigasi dua tingkat (kaskade) untuk memilah modul 8 kejuruan serta carousel horizontal poster 3:4 bank soal TKA 2026.
- **In-App E-Book PDF Viewer**: Membaca modul digital langsung di browser tanpa perlu mengunduh file berat.

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

## 🛠️ 3. Teknologi yang Digunakan (Tech Stack)
- **Frontend**: HTML5, Tailwind CSS (Mobile-First Responsive Design)
- **Backend / BaaS**: Supabase (PostgreSQL Database, Realtime Subscriptions, Row Level Security)
- **Pustaka Tambahan**: 
  - `@supabase/supabase-js` v2 (Koneksi Database & Realtime)
  - `SheetJS (xlsx.full.min.js)` (Eksport Laporan Excel)
  - Google Fonts (Poppins)
  - OpenStreetMap / Google Maps Embed API
- **Deployment**: GitHub Pages (Static Web Hosting)

---

## 🌐 4. Tautan Aplikasi Online
- **URL Katalog Siswa**: [https://dafnoge.github.io/perpustakaan-smkn1-sorong/](https://dafnoge.github.io/perpustakaan-smkn1-sorong/)
- **URL Portal Admin**: [https://dafnoge.github.io/perpustakaan-smkn1-sorong/admin.html](https://dafnoge.github.io/perpustakaan-smkn1-sorong/admin.html)

---

## 🔐 5. Akun Demo Pengujian (Demo Credentials)

Untuk mempermudah pengujian oleh Dewan Juri / Panitia, berikut adalah kredensial akses untuk setiap peran:

| Peran (Role) | Halaman Akses | Email / Kredensial | Kata Sandi (Password) | Keterangan |
| :--- | :--- | :--- | :--- | :--- |
| **Siswa (Katalog Publik)** | `index.html` | *Tanpa Login Akun* | - | Akses pencarian modul, filter kejuruan, dan baca E-Book |
| **Otorisasi Kios Siswa** | Modal Form Pinjam | Kode Petugas: `PERPUS2026` | - | Validasi kode kios anti-spam saat siswa meminjam buku |
| **Admin / Petugas Perpus** | `login.html` | `admin@smkn1sorong.sch.id` | `PerpusSMKN1!2026` | Akses penuh dashboard stok, kirim WA denda, & eksport Excel |

> *Catatan Penguji: Jika Anda menggunakan akun khusus di Supabase Auth Anda, pastikan email dan password pada tabel di atas cocok dengan akun yang terdaftar pada tab Supabase Authentication.*

---

## 🤖 6. Tools AI yang Digunakan
Sesuai kepatuhan pedoman transparansi lomba, berikut adalah *tools* AI yang digunakan dalam pengembangan:
- **Google Antigravity AI (Gemini Agentic Coding)**: Pengembangan logika frontend, integrasi Supabase JS SDK, optimasi realtime subscriptions, dan penanganan responsive UI.
- **Claude / ChatGPT**: Perancangan struktur skema tabel basis data relasional (DDL SQL) dan konseptualisasi alur denda otomatis WhatsApp.

---

## 📊 7. Flyer & Infografis
- **Status File**: Disimpan pada direktori `documentation/flyer-perpustakaan.png`.

---

## 📄 8. Dokumentasi Projek & Kebermanfaatan
- **Status File**: Disimpan pada file `documentation/Dokumentasi_Perpustakaan_Digital_SMKN1.pdf`.
