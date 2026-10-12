// Database soal dengan kategori kesulitan
const questionDatabase = {
  easy: [
    {
      category: "📖 Literasi",
      title: "Misi 1 — Bekal Rani",
      story: "Rani membawa satu pizza yang dipotong menjadi 8 bagian sama besar. Ia memakan 3 potong saat makan siang.",
      question: "Berapa bagian pizza yang tersisa?",
      options: ["3/8 bagian", "5/8 bagian", "5/6 bagian", "1/8 bagian"],
      answer: 1,
      explanation: "Pizza tersisa 8 − 3 = 5 potong. Jadi, bagian yang tersisa adalah 5/8.",
      visual: "pizza"
    },
    {
      category: "🔢 Numerasi",
      title: "Misi 2 — Pita Bima",
      story: "Bima memiliki pita sepanjang 3/4 meter. Ia menggunakan 1/2 meter untuk menghias buku.",
      question: "Berapa meter pita yang masih tersisa?",
      options: ["1/4 meter", "1/2 meter", "1/8 meter", "5/4 meter"],
      answer: 0,
      explanation: "Samakan penyebut: 3/4 − 1/2 = 3/4 − 2/4 = 1/4 meter.",
      visual: "bar"
    },
    {
      category: "📖 Literasi",
      title: "Misi 3 — Kebun Sekolah",
      story: "Sebanyak 2/5 bagian kebun ditanami cabai dan 1/5 bagian ditanami tomat. Sisanya ditanami bayam.",
      question: "Berapa bagian kebun yang ditanami bayam?",
      options: ["1/5 bagian", "2/5 bagian", "3/5 bagian", "4/5 bagian"],
      answer: 1,
      explanation: "Cabai dan tomat menggunakan 2/5 + 1/5 = 3/5. Sisa kebun adalah 5/5 − 3/5 = 2/5.",
      visual: "pie"
    },
    {
      category: "🔢 Numerasi",
      title: "Misi 4 — Pembaca Hebat",
      story: "Dina telah membaca 3/4 bagian buku. Edo telah membaca 5/8 bagian buku yang sejenis dan memiliki ukuran bagian yang sama.",
      question: "Siapa yang membaca bagian buku lebih banyak?",
      options: ["Edo", "Dina", "Keduanya sama", "Tidak dapat diketahui"],
      answer: 1,
      explanation: "3/4 = 6/8. Karena 6/8 lebih besar daripada 5/8, Dina telah membaca lebih banyak.",
      visual: "comparison"
    },
    {
      category: "📖 Literasi",
      title: "Misi 5 — Resep Jus",
      story: "Ibu menggunakan 2/3 liter air dan 1/4 liter sari jeruk untuk membuat jus.",
      question: "Berapa liter jumlah kedua cairan tersebut?",
      options: ["3/7 liter", "8/12 liter", "11/12 liter", "1 1/12 liter"],
      answer: 2,
      explanation: "KPK dari 3 dan 4 adalah 12. Jadi, 2/3 + 1/4 = 8/12 + 3/12 = 11/12 liter.",
      visual: "liquid"
    }
  ],
  medium: [
    {
      category: "🔢 Numerasi",
      title: "Misi 6 — Kue untuk Teman",
      story: "Pak Guru memiliki 2/3 loyang kue. Kue tersebut dibagikan sama banyak kepada 2 kelompok siswa.",
      question: "Berapa bagian loyang yang diterima setiap kelompok?",
      options: ["1/3 loyang", "2/5 loyang", "1/6 loyang", "4/3 loyang"],
      answer: 0,
      explanation: "2/3 ÷ 2 = 2/3 × 1/2 = 2/6 = 1/3 loyang untuk setiap kelompok.",
      visual: "division"
    },
    {
      category: "📖 Literasi",
      title: "Misi 7 — Botol Minum",
      story: "Botol Andi berisi 3/5 liter air. Setelah berolahraga, ia meminum 1/4 liter air.",
      question: "Berapa liter air yang tersisa?",
      options: ["2/9 liter", "7/20 liter", "9/20 liter", "1/20 liter"],
      answer: 1,
      explanation: "3/5 − 1/4 = 12/20 − 5/20 = 7/20 liter.",
      visual: "liquid"
    },
    {
      category: "🔢 Numerasi",
      title: "Misi 8 — Lomba Kelas VI",
      story: "Ada 24 siswa. Sebanyak 3/8 dari siswa mengikuti lomba membaca dan 1/4 mengikuti lomba matematika. Tidak ada siswa yang mengikuti kedua lomba.",
      question: "Berapa jumlah siswa yang mengikuti kedua lomba tersebut jika jumlah peserta kedua lomba digabungkan?",
      options: ["9 siswa", "12 siswa", "15 siswa", "18 siswa"],
      answer: 2,
      explanation: "Lomba membaca: 3/8 × 24 = 9 siswa. Lomba matematika: 1/4 × 24 = 6 siswa. Total = 9 + 6 = 15 siswa.",
      visual: "people"
    },
    {
      category: "📖 Literasi",
      title: "Misi 9 — Persediaan Tepung",
      story: "Ibu mempunyai 2 1/2 kg tepung. Sebanyak 3/4 kg digunakan untuk membuat kue dan 1/2 kg untuk membuat roti.",
      question: "Berapa kilogram tepung yang tersisa?",
      options: ["1 1/4 kg", "1 1/2 kg", "1 3/4 kg", "2 1/4 kg"],
      answer: 0,
      explanation: "Tepung terpakai = 3/4 + 1/2 = 3/4 + 2/4 = 1 1/4 kg. Sisa = 2 1/2 − 1 1/4 = 1 1/4 kg.",
      visual: "bar"
    },
    {
      category: "🏆 Numerasi",
      title: "Misi 10 — Tantangan Juara",
      story: "Sebuah tangki berisi 3/4 bagian air. Sebanyak 2/3 dari air yang ada di dalam tangki digunakan untuk menyiram tanaman.",
      question: "Berapa bagian kapasitas tangki yang digunakan untuk menyiram tanaman?",
      options: ["1/2 bagian", "1/4 bagian", "2/7 bagian", "5/7 bagian"],
      answer: 0,
      explanation: "Air yang digunakan = 2/3 × 3/4 = 6/12 = 1/2 kapasitas tangki.",
      visual: "liquid"
    }
  ],
  hard: [
    {
      category: "🔢 Numerasi",
      title: "Tantangan 1 — Operasi Kombinasi",
      story: "Siti memiliki 5/6 kg gula. Ia menggunakan 1/3 kg untuk kue dan 1/4 kg untuk minuman.",
      question: "Berapa kg gula yang tersisa?",
      options: ["1/4 kg", "5/12 kg", "7/12 kg", "3/4 kg"],
      answer: 1,
      explanation: "Gula terpakai = 1/3 + 1/4 = 4/12 + 3/12 = 7/12 kg. Sisa = 5/6 − 7/12 = 10/12 − 7/12 = 3/12 = 1/4 kg. OPSS, jawaban yang benar adalah 1/4 kg",
      visual: "bar"
    },
    {
      category: "📖 Literasi",
      title: "Tantangan 2 — Bandingan Kompleks",
      story: "Roni berlari 2/3 km di hari Senin. Rani berlari 3/5 km di hari yang sama. Mereka berlari lagi di Selasa masing-masing menambah 1/6 km.",
      question: "Berapa total km yang mereka berlari bersama di dua hari?",
      options: ["2 1/6 km", "2 1/3 km", "2 1/2 km", "2 2/3 km"],
      answer: 1,
      explanation: "Senin: 2/3 + 3/5 = 10/15 + 9/15 = 19/15 km. Selasa: (2/3 + 1/6) + (3/5 + 1/6) = 3/2 + 23/30. Total = 19/15 + 3/2 + 23/30",
      visual: "comparison"
    },
    {
      category: "🔢 Numerasi",
      title: "Tantangan 3 — Pecahan Berlapis",
      story: "Dari hasil panen sebesar 60 kg, 3/5 dijual dan 1/4 dari sisanya disumbangkan. Sisanya disimpan di rumah.",
      question: "Berapa kg yang disimpan di rumah?",
      options: ["12 kg", "24 kg", "15 kg", "18 kg"],
      answer: 3,
      explanation: "Dijual: 3/5 × 60 = 36 kg. Sisa: 60 − 36 = 24 kg. Disumbangkan: 1/4 × 24 = 6 kg. Disimpan: 24 − 6 = 18 kg.",
      visual: "pie"
    },
    {
      category: "📖 Literasi",
      title: "Tantangan 4 — Soal Cerita Panjang",
      story: "Sebuah toko buku memiliki 80 buku. Hari Senin terjual 1/4 bagian. Hari Selasa terjual 1/3 dari sisa hari Senin. Hari Rabu sisanya terjual 1/2.",
      question: "Berapa buku yang masih tersisa setelah tiga hari?",
      options: ["20 buku", "30 buku", "25 buku", "35 buku"],
      answer: 0,
      explanation: "Senin: 1/4 × 80 = 20 buku terjual, sisa 60. Selasa: 1/3 × 60 = 20 terjual, sisa 40. Rabu: 1/2 × 40 = 20 terjual, sisa 20 buku.",
      visual: "people"
    },
    {
      category: "🔢 Numerasi",
      title: "Tantangan 5 — Perkalian Pecahan",
      story: "Sebuah kolam ikan berisi 2/3 bagian air. Untuk memberikan makan ikan, pemilik menuangkan 3/4 dari air yang ada.",
      question: "Berapa bagian kapasitas kolam air yang digunakan untuk memberi makan ikan?",
      options: ["1/3 bagian", "1/2 bagian", "3/8 bagian", "5/6 bagian"],
      answer: 2,
      explanation: "Air yang digunakan = 2/3 × 3/4 = 6/12 = 1/2 bagian kapasitas kolam.",
      visual: "liquid"
    }
  ]
};

// Tambahkan juga pertanyaan tambahan untuk mode quick
const quickQuestions = [
  questionDatabase.easy[0],
  questionDatabase.easy[1],
  questionDatabase.easy[2],
  questionDatabase.medium[0],
  questionDatabase.medium[1]
];
