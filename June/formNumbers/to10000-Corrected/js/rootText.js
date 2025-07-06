const textsEnglish = {
  button_texts: {
    prev: "Previous",
    next: "Next",
    add_jar: "Add Another Jar", // Text for the button when on the last shape
    start_over: "Start Over", // Text for the button on the summary page
    submit: "Submit",
    okay: "Okay",
  },
  overlay_text:
    "Hello! Ever wondered how numbers are made?<br><br> Let’s have some fun and find out together!",
  top_question: `Click on the '+' in the box to add cubes and make the number <span class="numberInQuestion">157</span> .`,

  comments: {
    _overflow:"Click on the arrow to see the magic happen!",
    unit_overflow:
      "Whoa! Did you see that? The number disappeared! The pink jar is wiggling, it can’t hold more than 9 cubes!",
    ten_overflow:
      "Whoa! The number disappeared! The blue jar is wiggling, it can’t hold more than 9 rods!",
    hundred_overflow:
      "The orange jar is wiggling again, it can’t hold more than 9 flats!",
    thousand_overflow:
      "The green jar is wiggling, it can’t hold more than 9 cubes!",
    ten: "<b>10 Ones = 1 Ten</b>",
    hundred: "10 Ones = 1 Ten | <b>10 Tens = 1 Hundred</b>",
    thousand:
      "10 Ones = 1 Ten | 10 Tens = 1 Hundred | <b>10 Hundreds = 1 Thousand</b>",
    tenThousand:
      "10 Ones = 1 Ten | 10 Tens = 1 Hundred | 10 Hundreds = 1 Thousand | <b>10 Thousands = 1 Ten Thousand</b>",
  },
  left_panel: {
    general: "Use '+' or '-' buttons to add or remove elements in the jar.",
    unit_heading:
      "Use '+' or '-' buttons to add or remove cubes in ones place.",
    ten_heading: "Use '+' or '-' buttons to add or remove rods in tens place.",
    hundred_heading:
      "Use '+' or '-' buttons to add or remove flats in hundreds place.",
    thousand_heading:
      "Use '+' or '-' buttons to add or remove cubes in thousands place.",
    tenThousand_heading: "Congratulations! You made the number Ten Thousand!",
    unit_general:
      "Use '+' or '-' buttons to add or remove cubes in ones place.",
    unit_overflow:
      "Whoa! Did you see that?<br><br> The number disappeared!<br><br> The pink jar is wiggling, it can’t hold more than 9 cubes!",
    click_arrow: "Click on the arrow to see the magic happen!",
    ten_general:
      "10 Ones make 1 Ten!<br><br> We’ll now add tens and see what happens when that jar fills up.",
    ten_overflow:
      "Whoa! Did you see that?<br><br> The number disappeared!<br><br> The blue jar is wiggling, it can’t hold more than 9 rods!",
    hundred_general:
      "Ten Tens make one Hundred!<br><br> We’ll now add hundreds and see what happens when that jar fills up.",
    hundred_overflow:
      "The orange jar is wiggling again, it can’t hold more than 9 flats!",
    thousand_general:
      "Ten Hundreds make one thousand!<br><br> We’ll now add thousands and see what happens when that jar fills up.",
    thousand_overflow:
      "The green jar is wiggling, it can’t hold more than 9 cubes!",
    tenThousand_general: "Congratulations! You made the number ten thousand! ",
    magic: "Click the yellow arrow to see the magic happen!",
  },
};
const tagsArrayEnglish = ["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands"];
const tagsEnglish = {
  one: " One",
  ten: " Ten",
  hundred: " Hundred",
  ones: "Ones",
  tens: "Tens",
  hundreds: "Hundreds",
  thousands: "Thousands",
  tenThousands: "Ten Thousands",
};
const tagsArrayIndonesian = [
  "Satuan",
  "Puluhan",
  "Ratusan",
  "Ribuan",
  "Sepuluh Ribu",
];
const tagsIndonesian = {
  one: " Satu",
  ten: " Sepuluh",
  hundred: " Seratus",
  ones: " Satuan",
  tens: " Puluhan",
  hundreds: " Ratusan",
  thousands: " Ribuan",
  tenThousands: " Sepuluh Ribu",
};

const textsIndonesian = {
  button_texts: {
    prev: "Sebelumnya",
    next: "Berikutnya",
    add_jar: "Tambah Toples Lagi", // Teks untuk tombol ketika berada di bentuk terakhir
    start_over: "Mulai Lagi", // Teks untuk tombol di halaman ringkasan
    submit: "Kirim",
    okay: "Oke",
  },
  overlay_text:
    "Halo! Pernah bertanya-tanya bagaimana angka dibuat?<br><br> Ayo bersenang-senang dan cari tahu bersama-sama!",
  top_question: `Klik tanda '+' di kotak untuk menambahkan kubus dan membuat angka <span class="numberInQuestion">157</span> .`,

  comments: {
    _overflow: "Klik panah untuk melihat keajaiban terjadi!",
    unit_overflow:
      "Wah! Apakah kamu melihat itu? Angkanya menghilang! Toples merah muda bergoyang, tidak bisa menampung lebih dari 9 kubus!",
    ten_overflow:
      "Wah! Angkanya menghilang! Toples biru bergoyang, tidak bisa menampung lebih dari 9 batang!",
    hundred_overflow:
      "Toples oranye bergoyang lagi, tidak bisa menampung lebih dari 9 lempeng!",
    thousand_overflow:
      "Toples hijau bergoyang, tidak bisa menampung lebih dari 9 kubus!",
    ten: "<b>10 Satuan = 1 Puluhan</b>",
    hundred: "10 Satuan = 1 Puluhan | <b>10 Puluhan = 1 Ratusan</b>",
    thousand:
      "10 Satuan = 1 Puluhan | 10 Puluhan = 1 Ratusan | <b>10 Ratusan = 1 Ribuan</b>",
    tenThousand:
      "10 Satuan = 1 Puluhan | 10 Puluhan = 1 Ratusan | 10 Ratusan = 1 Ribuan | <b>10 Ribuan = 1 Puluh Ribu</b>",
  },
  left_panel: {
    general:
      "Gunakan tombol '+' atau '-' untuk menambah atau mengurangi elemen dalam toples.",
    unit_heading:
      "Gunakan tombol '+' atau '-' untuk menambah atau mengurangi kubus di tempat satuan.",
    ten_heading:
      "Gunakan tombol '+' atau '-' untuk menambah atau mengurangi batang di tempat puluhan.",
    hundred_heading:
      "Gunakan tombol '+' atau '-' untuk menambah atau mengurangi lempeng di tempat ratusan.",
    thousand_heading:
      "Gunakan tombol '+' atau '-' untuk menambah atau mengurangi kubus di tempat ribuan.",
    tenThousand_heading: "Selamat! Kamu telah membuat angka Sepuluh Ribu!",
    unit_general:
      "Gunakan tombol '+' atau '-' untuk menambah atau mengurangi kubus di tempat satuan.",
    unit_overflow:
      "Wah! Apakah kamu melihat itu?<br><br> Angkanya menghilang!<br><br> Toples merah muda bergoyang, tidak bisa menampung lebih dari 9 kubus!",
    click_arrow: "Klik panah untuk melihat keajaiban terjadi!",
    ten_general:
      "10 Satuan menjadi 1 Puluhan!<br><br> Sekarang kita akan menambahkan puluhan dan lihat apa yang terjadi saat toples itu penuh.",
    ten_overflow:
      "Wah! Apakah kamu melihat itu?<br><br> Angkanya menghilang!<br><br> Toples biru bergoyang, tidak bisa menampung lebih dari 9 batang!",
    hundred_general:
      "Sepuluh Puluhan menjadi satu Ratusan!<br><br> Sekarang kita akan menambahkan ratusan dan lihat apa yang terjadi saat toples itu penuh.",
    hundred_overflow:
      "Toples oranye bergoyang lagi, tidak bisa menampung lebih dari 9 lempeng!",
    thousand_general:
      "Sepuluh Ratusan menjadi satu Ribuan!<br><br> Sekarang kita akan menambahkan ribuan dan lihat apa yang terjadi saat toples itu penuh.",
    thousand_overflow:
      "Toples hijau bergoyang, tidak bisa menampung lebih dari 9 kubus!",
    tenThousand_general: "Selamat! Kamu telah membuat angka Sepuluh Ribu!",
    magic: "Klik panah kuning untuk melihat keajaiban terjadi!",
  },
};

