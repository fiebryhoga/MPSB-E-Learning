import axios from 'axios';

let data = [];

const fetchData = async () => {
  try {
    const response = await axios.get('https://mpsb-e-learning.my.id/api/mapels');
    data = response.data.courses.map(course => ({
      id: course.id,
      subject: course.course_name,
      cover: course.photo_link || "/Assets/Images/default_cover.png",
      class: course.grade.grade_name,
      department: course.major.major_name,
      curriculum: course.curriculum.curriculum_name,
    }));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();

export { fetchData };

export { data };

export const soal =[
  {
    "id": 1,
    "pertanyaan": "Apa ibu kota Indonesia?",
    "pilihanJawaban": [
      "Jakarta",
      "Surabaya",
      "Bandung",
      "Yogyakarta"
    ],
    "jawabanBenar": "Jakarta"
  },
  {
    "id": 2,
    "pertanyaan": "Apa nama planet ketiga dari Matahari?",
    "pilihanJawaban": [
      "Mars",
      "Jupiter",
      "Bumi",
      "Venus"
    ],
    "jawabanBenar": "Bumi"
  },
  {
    "id": 3,
    "pertanyaan": "Apa nama hewan terbesar di dunia?",
    "pilihanJawaban": [
      "Gajah",
      "Paus Biru",
      "Jerapah",
      "Harimau"
    ],
    "jawabanBenar": "Paus Biru"
  },
  {
    "id": 4,
    "pertanyaan": "Apa nama sungai terpanjang di dunia?",
    "pilihanJawaban": [
      "Sungai Nil",
      "Sungai Amazon",
      "Sungai Mississippi",
      "Sungai Gangga"
    ],
    "jawabanBenar": "Sungai Nil"
  },
  {
    "id": 5,
    "pertanyaan": "Apa nama mata uang Indonesia?",
    "pilihanJawaban": [
      "Rupiah",
      "Dolar",
      "Yen",
      "Euro"
    ],
    "jawabanBenar": "Rupiah"
  },
  {
    "id": 6,
    "pertanyaan": "Apa nama gunung tertinggi di dunia?",
    "pilihanJawaban": [
      "Gunung Everest",
      "Gunung Kilimanjaro",
      "Gunung Fuji",
      "Gunung McKinley"
    ],
    "jawabanBenar": "Gunung Everest"
  },
  {
    "id": 7,
    "pertanyaan": "Apa nama negara yang memiliki jumlah penduduk terbanyak di dunia?",
    "pilihanJawaban": [
      "India",
      "Cina",
      "Amerika Serikat",
      "Indonesia"
    ],
    "jawabanBenar": "Cina"
  },
  {
    "id": 8,
    "pertanyaan": "Apa nama bahasa pemrograman yang populer untuk pengembangan web?",
    "pilihanJawaban": [
      "JavaScript",
      "Python",
      "Java",
      "C++"
    ],
    "jawabanBenar": "JavaScript"
  },
  {
    "id": 9,
    "pertanyaan": "Apa nama planet terjauh dari Matahari?",
    "pilihanJawaban": [
      "Neptunus",
      "Saturnus",
      "Yupiter",
      "Mars"
    ],
    "jawabanBenar": "Neptunus"
  },
  {
    "id": 10,
    "pertanyaan": "Apa nama benua terluas di dunia?",
    "pilihanJawaban": [
      "Asia",
      "Afrika",
      "Amerika Utara",
      "Antartika"
    ],
    "jawabanBenar": "Asia"
  },
  {
    "id": 11,
    "pertanyaan": "Apa nama sumber energi terbarukan yang paling banyak digunakan di dunia?",
    "pilihanJawaban": [
      "Energi Angin",
      "Energi Matahari",
      "Energi Nuklir",
      "Energi Panas Bumi"
    ],
    "jawabanBenar": "Energi Angin"
  },
  {
    "id": 12,
    "pertanyaan": "Apa nama sistem operasi komputer yang dikembangkan oleh Microsoft?",
    "pilihanJawaban": [
      "Windows",
      "macOS",
      "Linux",
      "Ubuntu"
    ],
    "jawabanBenar": "Windows"
  },
  {
    "id": 13,
    "pertanyaan": "Apa nama samudera terbesar di dunia?",
    "pilihanJawaban": [
      "Samudra Pasifik",
      "Samudra Atlantik",
      "Samudra Hindia",
      "Samudra Arktik"
    ],
    "jawabanBenar": "Samudra Pasifik"
  },
  {
    "id": 14,
    "pertanyaan": "Apa nama planet terkecil dalam Tata Surya?",
    "pilihanJawaban": [
      "Merkurius",
      "Mars",
      "Bumi",
      "Yupiter"
    ],
    "jawabanBenar": "Merkurius"
  },
  {
    "id": 15,
    "pertanyaan": "Apa nama negara yang memiliki populasi gajah terbesar di dunia?",
    "pilihanJawaban": [
      "India",
      "Kenya",
      "Indonesia",
      "Thailand"
    ],
    "jawabanBenar": "India"
  },
  {
    "id": 16,
    "pertanyaan": "Apa nama planet yang memiliki cincin paling spektakuler?",
    "pilihanJawaban": [
      "Saturnus",
      "Yupiter",
      "Neptunus",
      "Uranus"
    ],
    "jawabanBenar": "Saturnus"
  },
  {
    "id": 17,
    "pertanyaan": "Apa nama perusahaan teknologi yang mengembangkan iPhone?",
    "pilihanJawaban": [
      "Apple",
      "Samsung",
      "Google",
      "Microsoft"
    ],
    "jawabanBenar": "Apple"
  },
  {
    "id": 18,
    "pertanyaan": "Apa nama benua yang memiliki jumlah negara terbanyak?",
    "pilihanJawaban": [
      "Afrika",
      "Asia",
      "Eropa",
      "Amerika Utara"
    ],
    "jawabanBenar": "Afrika"
  },
  {
    "id": 19,
    "pertanyaan": "Apa nama sungai terpanjang di Indonesia?",
    "pilihanJawaban": [
      "Sungai Kapuas",
      "Sungai Musi",
      "Sungai Bengawan Solo",
      "Sungai Mahakam"
    ],
    "jawabanBenar": "Sungai Kapuas"
  },
  {
    "id": 20,
    "pertanyaan": "Apa nama bahasa pemrograman yang dikembangkan oleh Guido van Rossum?",
    "pilihanJawaban": [
      "Python",
      "Java",
      "C++",
      "Ruby"
    ],
    "jawabanBenar": "Python"
  }
];

const mapel = {
  kelas: "XII",
  kurikulum: "Merdeka",
  judulMateri: "Berpikir Komputasional dan Algoritma",
  deskripsiMateri:
    "Berpikir komputasional adalah pola berpikir dalam penyelesaian masalah (problem solving), untuk menemukan solusi yang efisien, efektif, dan optimal sehingga solusinya bisa dijalankan oleh manusia maupun mesin. Jadi, kegiatan berpikir komputasional adalah mencari strategi untuk mengatasi persoalan.",
  judulMateriList: [
    "Abstraksi",
    "Algoritma",
    "Dekomposisi",
    "Pengenalan Pola",
    "Tes",
    "Pola",
  ],
};

export default mapel;
