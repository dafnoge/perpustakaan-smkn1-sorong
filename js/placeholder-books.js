/**
 * ==============================================================================
 * DATA BUKU PLACEHOLDER STANDAR - SMKN 1 SORONG
 * Mencakup Seluruh Kategori Mata Pelajaran & 8 Jurusan Resmi Vokasi
 * ==============================================================================
 */

const PLACEHOLDER_BOOKS = [
    // --- 1. KOLEKSI KHUSUS TKA (TES KEMAMPUAN AKADEMIK) ---
    {
        id: "tka-01",
        title: "Master Sukses TKA (Tes Kemampuan Akademik) Saintek & Soshum Lengkap",
        author: "Tim Litbang Pustaka Vokasi",
        category: "TKA",
        stock: 10,
        is_tka: true,
        cover_url: "",
        ebook_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
        id: "tka-02",
        title: "Bank Soal HOTS TKA Terpadu untuk Semua Mapel SMK 2026",
        author: "Konsorsium Pengembang Ujian Vokasi",
        category: "TKA",
        stock: 8,
        is_tka: true,
        cover_url: "",
        ebook_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
        id: "tka-03",
        title: "Strategi Juara TKA & Ujian Masuk Perguruan Tinggi Vokasi Papua",
        author: "Drs. Yosias Wanma & Tim Guru",
        category: "TKA",
        stock: 6,
        is_tka: true,
        cover_url: "",
        ebook_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },

    // --- 2. MAPEL UMUM: MATEMATIKA ---
    {
        id: "mat-01",
        title: "Matematika Vokasi Terapan & Aljabar Linear Kelas X",
        author: "Dra. Siti Rahmawati, M.Pd",
        category: "Matematika",
        stock: 8,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },
    {
        id: "mat-02",
        title: "Matematika Tingkat Lanjut, Kalkulus & Statistika Industri Kelas XI",
        author: "Tim MGMP Matematika SMKN 1 Sorong",
        category: "Matematika",
        stock: 6,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },

    // --- 3. MAPEL UMUM: BAHASA INDONESIA ---
    {
        id: "bind-01",
        title: "Bahasa Indonesia Komunikasi Bisnis & Korespondensi Vokasi Kelas X",
        author: "Drs. Hendrikus Papua, M.Hum",
        category: "Bahasa Indonesia",
        stock: 9,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },
    {
        id: "bind-02",
        title: "Keterampilan Menulis Laporan Ilmiah & Proposal Proyek Kelas XI",
        author: "Beatrix Wanma, S.Pd",
        category: "Bahasa Indonesia",
        stock: 7,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },

    // --- 4. MAPEL UMUM: BAHASA INGGRIS ---
    {
        id: "bing-01",
        title: "English for Vocational Communication & Digital Workplace Kelas X",
        author: "Jonathan Smith, M.Ed & Tim Guru",
        category: "Bahasa Inggris",
        stock: 8,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },
    {
        id: "bing-02",
        title: "Technical English for Engineering & Global Industries Kelas XI",
        author: "Maria Magdalena, S.Pd",
        category: "Bahasa Inggris",
        stock: 5,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },

    // --- 5. MAPEL UMUM: PPKN ---
    {
        id: "ppkn-01",
        title: "Pendidikan Pancasila dan Kewarganegaraan Vokasi Kelas X",
        author: "Dr. Yosias Kambu, M.Si",
        category: "PPKN",
        stock: 12,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },
    {
        id: "ppkn-02",
        title: "Wawasan Kebangsaan, Demokrasi & Etika Profesi Generasi Muda Kelas XI",
        author: "Tim PPKN SMKN 1 Sorong",
        category: "PPKN",
        stock: 8,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },

    // --- 6. MAPEL UMUM: IPS ---
    {
        id: "ips-01",
        title: "Ilmu Pengetahuan Sosial Kontekstual Vokasi & Maritim Papua Kelas X",
        author: "Beatrix Wanma, S.Pd & Tim Guru",
        category: "IPS",
        stock: 7,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },
    {
        id: "ips-02",
        title: "Sosiologi Industri & Ekonomi Kreatif Pesisir Sorong Kelas XI",
        author: "Tim IPS Terpadu Vokasi",
        category: "IPS",
        stock: 6,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },

    // --- 7. MAPEL UMUM: IPAS ---
    {
        id: "ipas-01",
        title: "Projek IPAS (Ilmu Pengetahuan Alam & Sosial) Terapan SMK Kelas X",
        author: "Ir. Bambang Sujatmiko, M.T",
        category: "IPAS",
        stock: 10,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },
    {
        id: "ipas-02",
        title: "Ekosistem Hutan Hujan Tropis Papua & Energi Terbarukan IPAS Kelas X",
        author: "Tim Sains Vokasi SMKN 1 Sorong",
        category: "IPAS",
        stock: 6,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },

    // --- 8. MAPEL UMUM: SENI MUSIK ---
    {
        id: "musik-01",
        title: "Seni Budaya & Apresiasi Seni Musik Nusantara Kelas X",
        author: "Fransiscus Rumbiak, S.Sn",
        category: "Seni Musik",
        stock: 8,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },
    {
        id: "musik-02",
        title: "Harmoni Musik Tradisional Papua & Ansambel Modern Kelas XI",
        author: "Sanggar Seni Vokasi SMKN 1 Sorong",
        category: "Seni Musik",
        stock: 5,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },

    // --- 9. KEJURUAN: 1. RPL (REKAYASA PERANGKAT LUNAK) ---
    {
        id: "rpl-01",
        title: "Dasar Pemrograman Web, Database Supabase & Algoritma AI Kelas X RPL",
        author: "Tim Pengajar RPL SMKN 1 Sorong",
        category: "Kejuruan",
        stock: 8,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },
    {
        id: "rpl-02",
        title: "Rekayasa Perangkat Lunak Berorientasi Objek & Framework Modern Kelas XI RPL",
        author: "Reynaldi, S.Kom & Tim AI SMKN 1",
        category: "Kejuruan",
        stock: 6,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },

    // --- 10. KEJURUAN: 2. TJKT (TEKNIK JARINGAN KOMPUTER & TELEKOMUNIKASI) ---
    {
        id: "tjkt-01",
        title: "Teknik Jaringan Komputer, Fiber Optik & Administrasi Server Linux Kelas X TJKT",
        author: "Ir. H. Mulyono & Tim TJKT",
        category: "Kejuruan",
        stock: 7,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },
    {
        id: "tjkt-02",
        title: "Keamanan Jaringan Enterprise & Konfigurasi Routing Mikrotik Kelas XI TJKT",
        author: "Lab Cisco SMKN 1 Sorong",
        category: "Kejuruan",
        stock: 5,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },

    // --- 11. KEJURUAN: 3. DKV (DESAIN KOMUNIKASI VISUAL) ---
    {
        id: "dkv-01",
        title: "Desain Komunikasi Visual: Tipografi, Branding & UI/UX Design Kelas X DKV",
        author: "Andreas Simanjuntak, S.Ds",
        category: "Kejuruan",
        stock: 7,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },
    {
        id: "dkv-02",
        title: "Ilustrasi Digital, Fotografi Studio & Animasi 2D/3D Kelas XI DKV",
        author: "Studio Kreatif DKV SMKN 1",
        category: "Kejuruan",
        stock: 5,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },

    // --- 12. KEJURUAN: 4. MPLB (MANAJEMEN PERKANTORAN & LAYANAN BISNIS) ---
    {
        id: "mplb-01",
        title: "Manajemen Perkantoran, Kearsipan Digital & Otomatisasi Bisnis Kelas X MPLB",
        author: "Hj. Nurhayati, S.E",
        category: "Kejuruan",
        stock: 9,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },
    {
        id: "mplb-02",
        title: "Komunikasi Bisnis Internasional & Tata Kelola Kehumasan Modern Kelas XI MPLB",
        author: "Tim Vokasi Perkantoran SMKN 1",
        category: "Kejuruan",
        stock: 6,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },

    // --- 13. KEJURUAN: 5. AKL (AKUNTANSI DAN KEUANGAN LEMBAGA) ---
    {
        id: "akl-01",
        title: "Akuntansi Dasar & Keuangan Lembaga Berbasis Komputer Spreadsheet Kelas X AKL",
        author: "Robertus Mayor, S.E., Ak",
        category: "Kejuruan",
        stock: 8,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },
    {
        id: "akl-02",
        title: "Praktikum Akuntansi Perusahaan Dagang & Pajak Terapan Kelas XI AKL",
        author: "Tim MGMP Akuntansi SMKN 1",
        category: "Kejuruan",
        stock: 6,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },

    // --- 14. KEJURUAN: 6. TPMG (TEKNIK PENGOLAHAN MINYAK DAN GAS) ---
    {
        id: "tpmg-01",
        title: "Dasar-Dasar Teknik Pengolahan Minyak, Gas Bumi & Petrokimia Sorong Kelas X TPMG",
        author: "Dr. Ir. Yohanes Salossa, M.T",
        category: "Kejuruan",
        stock: 7,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },
    {
        id: "tpmg-02",
        title: "Operasi Fasilitas Kilang Migas & Standar Keselamatan Kerja K3 Kelas XI TPMG",
        author: "Instruktur Industri Kilang Migas Sorong",
        category: "Kejuruan",
        stock: 5,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },

    // --- 15. KEJURUAN: 7. GP (GEOLOGI PERTAMBANGAN) ---
    {
        id: "gp-01",
        title: "Geologi Pertambangan: Pemetaan Mineral & Geoteknik Batuan Kelas X GP",
        author: "Marthen Luther, S.T",
        category: "Kejuruan",
        stock: 8,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },
    {
        id: "gp-02",
        title: "Metode Eksplorasi Tambang & Kristalografi Mineral Papua Kelas XI GP",
        author: "Lab Geologi SMKN 1 Sorong",
        category: "Kejuruan",
        stock: 6,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },

    // --- 16. KEJURUAN: 8. TET (TEKNIK ENERGI TERBARUKAN) ---
    {
        id: "tet-01",
        title: "Teknik Energi Terbarukan: Pembangkit Listrik Tenaga Surya (PLTS) Kelas X TET",
        author: "Tim Energi Terbarukan SMKN 1 Sorong",
        category: "Kejuruan",
        stock: 8,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    },
    {
        id: "tet-02",
        title: "Instalasi Turbin Angin, Mikrohidro & Pemanfaatan Biomassa Ramah Lingkungan Kelas XI TET",
        author: "Ir. Daniel Kogoya, M.T",
        category: "Kejuruan",
        stock: 5,
        is_tka: false,
        cover_url: "",
        ebook_url: ""
    }
];
