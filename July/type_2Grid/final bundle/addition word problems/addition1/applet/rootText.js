const firstStageQuestionsEnglish = [
  {
    question:
      "In Desa Subur, 25,700 kg of rice is stored in one warehouse and 38,400 kg in another. How much rice is stored in total?",
    numbers: [25700, 38400],
    given: ["25,700 kg", "38,400 kg"],
    givenFacts: [
      "Given:",
      "Rice in one warehouse: 25,700 kg",
      "Rice in another warehouse: 38,400 kg",
    ],
    toFind: ["rice is stored in total"],
    toFindFacts: ["To find:", "Total amount of stored rice"],
    conclude_text: "The total amount of stored rice is 64,100 kg.",
    first_stage_4:
      "We need to <span class='em'>add</span> to find the total amount of stored rice.",
  },
  {
    question:
      "SD Harapan received 42,570 textbooks from the Ministry. The next week, they received 29,260 more. How many textbooks did they receive in total?",
    numbers: [42570, 29260],
    given: ["42,570 textbooks", "29,260 more"],
    givenFacts: [
      "Given:",
      "Textbooks from the Ministry: 42,570",
      "Textbooks received next week: 29,260",
    ],
    toFind: ["textbooks did they receive in total"],
    toFindFacts: ["To find:", "Total number of textbooks received"],
    conclude_text: "The total number of textbooks received is 71,830.",
    first_stage_4:
      "We need to <span class='em'>add</span> to find the total number of textbooks received.",
  },
  {
    question:
      "Kelurahan Tunas Jaya allocated Rp45,850 for decorations and Rp39,550 for performances. How much was the total budget?",
    numbers: [45850, 39550],
    given: ["Rp45,850 for decorations", "Rp39,550 for performances"],
    givenFacts: [
      "Given:",
      "Budget for decorations: Rp45,850",
      "Budget for performances: Rp39,550",
    ],
    toFind: ["total budget"],
    toFindFacts: ["To find:", "The total budget"],
    conclude_text: "The total budget is Rp85,400.",
    first_stage_4:
      "We need to <span class='em'>add</span> to find the total budget.",
  },
  {
    question:
      "Class 5A collected Rp28,780 from the food sale and Rp17,950 from a donation drive. How much money did they collect?",
    numbers: [28780, 17950],
    given: ["Rp28,780 from the food sale", "Rp17,950 from a donation drive"],
    givenFacts: [
      "Given:",
      "Money from food sale: Rp28,780",
      "Money from donation drive: Rp17,950",
    ],
    toFind: ["How much money did they collect"],
    toFindFacts: ["To find:", "Total amount of money collected"],
    conclude_text: "The total amount of money collected is Rp46,730.",
    first_stage_4:
      "We need to <span class='em'>add</span> to find the total amount of money collected.",
  },
];

const mcqDataEnglish = {
  add_or_subtract: {
    question: "Do you have to add or subtract to solve the question?",
    options: ["Add", "Subtract"],
    answer_index: 0,
  },
  ones_place: {
    question: "Which place do we add first?",
    options: ["Tens", "Hundreds", "Ones", "Thousands"],
    answer_index: 2,
    correct_feedback: "Absolutely correct! We go from right to left.",
    wrong_feedback:
      "Not quite. Remember, we always start from the rightmost place.",
  },
  add_ones: {
    question: "{{o1x}} + {{o2x}} =",
    options: ["{{osumx_minus}}", "{{osumx_plus}}", "{{osumx}}"],
    answer_index: 2,
    correct_feedback: "Great job!",
    wrong_feedback: "Not quite. Give it another try.",
  },
  add_tens: {
    question: "{{t1x}} + {{t2x}} {{oOverflowStr}} =",
    options: ["{{tsumx_plus}}", "{{tsumx}}", "{{tsumx_minus}}"],
    answer_index: 1,
    correct_feedback: "Well done!",
    wrong_feedback: "Oops, that's not it. Let's try again.",
  },
  add_hundreds: {
    question: "{{h1x}} + {{h2x}} {{tOverflowStr}} =",
    options: ["{{hsumx_minus}}", "{{hsumx_plus}}", "{{hsumx}}"],
    answer_index: 2,
    correct_feedback: "Perfect!",
    wrong_feedback: "Incorrect. Have another go.",
  },
  add_thousands: {
    question: "{{th1x}} + {{th2x}} {{hOverflowStr}} =",
    options: ["{{thsumx_minus}}", "{{thsumx_plus}}", "{{thsumx}}"],
    answer_index: 2,
    correct_feedback: "Excellent!",
    wrong_feedback: "Not quite. Give it another try.",
  },
  add_ten_thousands: {
    question: "{{tt1x}} + {{tt2x}} {{thOverflowStr}} =",
    options: ["{{ttsumx}}", "{{ttsumx_plus}}", "{{ttsumx_minus}}"],
    answer_index: 0,
    correct_feedback: "You got it!",
    wrong_feedback: "Oops, that's not it. Let's try again.",
  },
  ones_split: {
    question:
      "We can't have {{osumx}} in the units place.<br> Which digit should we carry forward??",
    options: ["1", "{{o3ne}}", "{{osum}}"],
    answer_index: 0,
    correct_feedback: "Correct!",
    wrong_feedback: "That's not the one to carry. Try again.",
  },
  tens_split: {
    question:
      "We can't have {{tsumx}} in the tens place.<br> Which digit should we carry forward??",
    options: ["1", "{{t3ne}}", "{{tsum}}"],
    answer_index: 0,
    correct_feedback: "Great job!",
    wrong_feedback: "That's not the one to carry. Try again.",
  },
  hundreds_split: {
    question:
      "We can't have {{hsumx}} in the hundreds place.<br> Which digit should we carry forward??",
    options: ["1", "{{h3ne}}", "{{hsum}}"],
    answer_index: 0,
    correct_feedback: "Well done!",
    wrong_feedback: "That's not the one to carry. Try again.",
  },
  thousands_split: {
    question:
      "We can't have {{thsumx}} in the thousands place.<br> Which digit should we carry forward??",
    options: ["1", "{{th3ne}}", "{{thsum}}"],
    answer_index: 0,
    correct_feedback: "Perfect!",
    wrong_feedback: "That's not the one to carry. Try again.",
  },
};

const textPoolEnglish = {
  conclude: "The total amount of stored rice is {{answer}} kg.",
  first_stage_1: "Read the word problem carefully. Click Next to continue.",
  first_stage_2:
    "Great! Let's identify the important information given in the problem.",
  first_stage_3: "This is what we need to calculate.",
  first_stage_4:
    "We need to <span class='em'>add</span> to find the total amount of stored rice.",
  mcqIn: "Click on the correct option.",
  start: "We have an addition challenge. Let's solve it.",
  split_number1:
    "Split the number into its place values. Tap on the first number.",
  split_number2:
    "Split the number into its place values. Tap on the second number.",
  after_split: "We have 5 places to add. Click on 'Next' to add ones place.",
  ones_1: "Let's add the numbers in the ones column. Tap on the '+' button.",
  ones_carryover:
    "Oh! We have more than 9 in ones place. We need to do a carry over.",
  ones_carryover2:
    "Great! we have split {{osumx}} correctly. Click on 'Carry Over'.",
  ones_complete:
    "We have completed adding ones. Let's add the numbers in the tens column now.",
  tens_1: "To add the numbers in the tens column, tap on the '+' button.",
  tens_carryover:
    "Oh! we have more than 9 in the tens place. We need to do a carry over.",
  tens_carryover2:
    "Great! We have split {{tsumx}} correctly. Click on 'Next' to carry over.",
  tens_complete:
    "We have completed adding tens. Let's add the numbers in the hundreds column now.",
  hundreds_1:
    "To add the numbers in the hundreds column, tap on the '+' button.",
  hundreds_carryover:
    "Uh oh! We have more than 9 in the hundreds place. Time to do a carry over.",
  hundreds_carryover2:
    "You have split {{hsumx}} correctly. Click 'Next' to continue.",
  hundreds_complete:
    "We have completed adding hundreds. Let's move to the thousands column now.",
  thousands_1:
    "To add the numbers in the thousands column, tap on the '+' button.",
  thousands_carryover:
    "Uh oh! We have more than 9 in the thousands place. Let's do a carry over.",
  thousands_carryover2: "Perfect Split. Click 'Next' to carry over.",
  thousands_complete:
    "We have completed adding the thousands. Let's move to the last column now.",
  ten_thousands_1:
    "Finally, let's add the numbers in the ten thousands column. Tap on the '+' button.",
  ten_thousands_complete:
    "We have completed adding the numbers in all the columns.",
  final_summary:
    "You have completed the addition. Your final answer is {{answer}}.",

  combine:
    "Now we need to compose the answer from results of all column additions. Tap on the highlighted part.",
  mcq_one:
    "{{osumx}} > 9,<br>We need to split {{osumx}} to do a carry over of extra 10s to the tens place. ",
  mcq_ten:
    "{{tsumx}} > 9,<br>We need to split {{tsumx}} to do a carry over of extra 100s to the hundreds place. ",
  mcq_hundred:
    "{{hsumx}} > 9,<br>We need to split {{hsumx}} to do a carry over of extra 1000s to the thousands place. ",
  mcq_thousand:
    "{{thsumx}} > 9,<br>We need to split {{thsumx}} to do a carry over of extra 10000s to the ten thousands place. ",
};

const headerArrayEnglish = ["TTh", "Th", "H", "T", "O"];

const buttonTextsEnglish = {
  next: "Next",
  start_over: "Start Over",
  carry_over: "Carry Over",
  try_new: "Try New",
};

const overlayDataEnglish = {
  heading: "Activity Complete!",
  paragraph: `If you want to try again, click on the 'Start Over' button. `,
};

// --- INDONESIAN ---
// NOTE: Indonesian translations for the new first stage are placeholders.
// You can replace them with accurate translations.

const firstStageQuestionsIndonesian = [
  {
    question:
      "Di Desa Subur, 25.700 kg beras disimpan di satu gudang dan 38.400 kg di gudang lain. Berapa jumlah total beras yang disimpan?",
    numbers: [25700, 38400],
    given: ["25.700 kg", "38.400 kg"],
    givenFacts: [
      "Diketahui:",
      "Beras di satu gudang: 25.700 kg",
      "Beras di gudang lain: 38.400 kg",
    ],
    toFind: ["jumlah total beras yang disimpan"],
    toFindFacts: ["Ditanya:", "Jumlah total beras yang disimpan"],
    conclude_text: "Jumlah total beras yang disimpan adalah 64.100 kg.",
    first_stage_4:
      "Kita perlu <span class='em'>menjumlahkan</span> untuk menemukan jumlah total beras yang disimpan.",
  },
  {
    question:
      "SD Harapan menerima 42.570 buku pelajaran dari Kementerian. Minggu berikutnya, mereka menerima 29.260 buku lagi. Berapa jumlah total buku pelajaran yang mereka terima?",
    numbers: [42570, 29260],
    given: ["42.570 buku pelajaran", "29.260 buku lagi"],
    givenFacts: [
      "Diketahui:",
      "Buku pelajaran dari Kementerian: 42.570",
      "Buku pelajaran yang diterima minggu berikutnya: 29.260",
    ],
    toFind: ["jumlah total buku pelajaran yang mereka terima"],
    toFindFacts: ["Ditanya:", "Jumlah total buku pelajaran yang diterima"],
    conclude_text: "Jumlah total buku pelajaran yang diterima adalah 71.830.",
    first_stage_4:
      "Kita perlu <span class='em'>menjumlahkan</span> untuk menemukan jumlah total buku pelajaran yang diterima.",
  },
  {
    question:
      "Kelurahan Tunas Jaya mengalokasikan Rp45.850 untuk dekorasi dan Rp39.550 untuk pertunjukan. Berapa jumlah total anggarannya?",
    numbers: [45850, 39550],
    given: ["Rp45.850 untuk dekorasi", "Rp39.550 untuk pertunjukan"],
    givenFacts: [
      "Diketahui:",
      "Anggaran untuk dekorasi: Rp45.850",
      "Anggaran untuk pertunjukan: Rp39.550",
    ],
    toFind: ["jumlah total anggaran"],
    toFindFacts: ["Ditanya:", "Jumlah total anggaran"],
    conclude_text: "Jumlah total anggarannya adalah Rp85.400.",
    first_stage_4:
      "Kita perlu <span class='em'>menjumlahkan</span> untuk menemukan jumlah total anggaran.",
  },
  {
    question:
      "Kelas 5A mengumpulkan Rp28.780 dari penjualan makanan dan Rp17.950 dari penggalangan dana. Berapa jumlah uang yang mereka kumpulkan?",
    numbers: [28780, 17950],
    given: [
      "Rp28.780 dari penjualan makanan",
      "Rp17.950 dari penggalangan dana",
    ],
    givenFacts: [
      "Diketahui:",
      "Uang dari penjualan makanan: Rp28.780",
      "Uang dari penggalangan dana: Rp17.950",
    ],
    toFind: ["Berapa jumlah uang yang mereka kumpulkan"],
    toFindFacts: ["Ditanya:", "Jumlah total uang yang terkumpul"],
    conclude_text: "Jumlah total uang yang terkumpul adalah Rp46.730.",
    first_stage_4:
      "Kita perlu <span class='em'>menjumlahkan</span> untuk menemukan jumlah total uang yang terkumpul.",
  },
];

const mcqDataIndonesian = {
  add_or_subtract: {
    question:
      "Apakah Anda harus menambah atau mengurangi untuk menyelesaikan soal ini?",
    options: ["Tambah", "Kurangi"],
    answer_index: 0,
  },
  ones_place: {
    question: "Nilai tempat mana yang kita tambahkan terlebih dahulu?",
    options: ["Puluhan", "Ratusan", "Satuan", "Ribuan"],
    answer_index: 2,
    correct_feedback: "Tepat sekali! Kita mulai dari kanan ke kiri.",
    wrong_feedback:
      "Kurang tepat. Ingat, kita selalu mulai dari nilai tempat paling kanan.",
  },
  add_ones: {
    question: "{{o1x}} + {{o2x}} =",
    options: ["{{osumx_minus}}", "{{osumx_plus}}", "{{osumx}}"],
    answer_index: 2,
    correct_feedback: "Kerja bagus!",
    wrong_feedback: "Kurang tepat. Coba lagi.",
  },
  add_tens: {
    question: "{{t1x}} + {{t2x}} {{oOverflowStr}} =",
    options: ["{{tsumx_plus}}", "{{tsumx}}", "{{tsumx_minus}}"],
    answer_index: 1,
    correct_feedback: "Bagus sekali!",
    wrong_feedback: "Ups, bukan itu. Mari coba lagi.",
  },
  add_hundreds: {
    question: "{{h1x}} + {{h2x}} {{tOverflowStr}} =",
    options: ["{{hsumx_minus}}", "{{hsumx_plus}}", "{{hsumx}}"],
    answer_index: 2,
    correct_feedback: "Sempurna!",
    wrong_feedback: "Salah. Coba lagi.",
  },
  add_thousands: {
    question: "{{th1x}} + {{th2x}} {{hOverflowStr}} =",
    options: ["{{thsumx_minus}}", "{{thsumx_plus}}", "{{thsumx}}"],
    answer_index: 2,
    correct_feedback: "Luar biasa!",
    wrong_feedback: "Kurang tepat. Coba lagi.",
  },
  add_ten_thousands: {
    question: "{{tt1x}} + {{tt2x}} {{thOverflowStr}} =",
    options: ["{{ttsumx}}", "{{ttsumx_plus}}", "{{ttsumx_minus}}"],
    answer_index: 0,
    correct_feedback: "Anda berhasil!",
    wrong_feedback: "Ups, bukan itu. Mari coba lagi.",
  },
  ones_split: {
    question:
      "Kita tidak boleh memiliki {{osumx}} di tempat satuan.<br> Angka mana yang harus kita simpan?",
    options: ["1", "{{o3ne}}", "{{osum}}"],
    answer_index: 0,
    correct_feedback: "Benar!",
    wrong_feedback: "Bukan itu yang harus disimpan. Coba lagi.",
  },
  tens_split: {
    question:
      "Kita tidak boleh memiliki {{tsumx}} di tempat puluhan.<br> Angka mana yang harus kita simpan?",
    options: ["1", "{{t3ne}}", "{{tsum}}"],
    answer_index: 0,
    correct_feedback: "Kerja bagus!",
    wrong_feedback: "Bukan itu yang harus disimpan. Coba lagi.",
  },
  hundreds_split: {
    question:
      "Kita tidak boleh memiliki {{hsumx}} di tempat ratusan.<br> Angka mana yang harus kita simpan?",
    options: ["1", "{{h3ne}}", "{{hsum}}"],
    answer_index: 0,
    correct_feedback: "Bagus sekali!",
    wrong_feedback: "Bukan itu yang harus disimpan. Coba lagi.",
  },
  thousands_split: {
    question:
      "Kita tidak boleh memiliki {{thsumx}} di tempat ribuan.<br> Angka mana yang harus kita simpan?",
    options: ["1", "{{th3ne}}", "{{thsum}}"],
    answer_index: 0,
    correct_feedback: "Sempurna!",
    wrong_feedback: "Bukan itu yang harus disimpan. Coba lagi.",
  },
};

const textPoolIndonesian = {
  conclude: "Jumlah total beras yang disimpan adalah {{answer}} kg.",
  first_stage_1:
    "Baca soal cerita dengan saksama. Klik Lanjut untuk melanjutkan.",
  first_stage_2:
    "Bagus! Mari kita identifikasi informasi penting yang diberikan dalam soal.",
  first_stage_3: "Inilah yang perlu kita hitung.",
  first_stage_4:
    "Kita perlu <span class='em'>menambahkan</span> untuk menemukan jumlah total beras yang disimpan.",
  mcqIn: "Klik pada opsi yang benar.",
  start: "Kita punya tantangan penjumlahan. Mari kita selesaikan.",
  split_number1:
    "Pisahkan bilangan menjadi nilai-nilai tempatnya. Ketuk pada bilangan pertama.",
  split_number2:
    "Pisahkan bilangan menjadi nilai-nilai tempatnya. Ketuk pada bilangan kedua.",
  after_split:
    "Kita punya 5 tempat untuk ditambahkan. Klik 'Lanjut' untuk menambahkan tempat satuan.",
  ones_1: "Mari kita jumlahkan angka-angka di kolom satuan. Ketuk tombol '+'.",
  ones_carryover:
    "Oh! Kita punya lebih dari 9 di tempat satuan. Kita perlu melakukan simpanan.",
  ones_carryover2:
    "Bagus! kita telah memisahkan {{osumx}} dengan benar. Klik 'Simpan'.",
  ones_complete:
    "Kita telah selesai menjumlahkan satuan. Sekarang mari kita jumlahkan angka-angka di kolom puluhan.",
  tens_1: "Untuk menjumlahkan angka-angka di kolom puluhan, ketuk tombol '+'.",
  tens_carryover:
    "Oh! kita punya lebih dari 9 di tempat puluhan. Kita perlu melakukan simpanan.",
  tens_carryover2:
    "Bagus! Kita telah memisahkan {{tsumx}} dengan benar. Klik 'Lanjut' untuk menyimpan.",
  tens_complete:
    "Kita telah selesai menjumlahkan puluhan. Sekarang mari kita jumlahkan angka-angka di kolom ratusan.",
  hundreds_1:
    "Untuk menjumlahkan angka-angka di kolom ratusan, ketuk tombol '+'.",
  hundreds_carryover:
    "Oh tidak! Kita punya lebih dari 9 di tempat ratusan. Waktunya melakukan simpanan.",
  hundreds_carryover2:
    "Anda telah memisahkan {{hsumx}} dengan benar. Klik 'Lanjut' untuk melanjutkan.",
  hundreds_complete:
    "Kita telah selesai menjumlahkan ratusan. Mari kita pindah ke kolom ribuan sekarang.",
  thousands_1:
    "Untuk menjumlahkan angka-angka di kolom ribuan, ketuk tombol '+'.",
  thousands_carryover:
    "Oh tidak! Kita punya lebih dari 9 di tempat ribuan. Mari kita lakukan simpanan.",
  thousands_carryover2: "Pemisahan Sempurna. Klik 'Lanjut' untuk menyimpan.",
  thousands_complete:
    "Kita telah selesai menjumlahkan ribuan. Mari kita pindah ke kolom terakhir sekarang.",
  ten_thousands_1:
    "Terakhir, mari kita jumlahkan angka-angka di kolom puluh ribuan. Ketuk tombol '+'.",
  ten_thousands_complete:
    "Kita telah selesai menjumlahkan angka-angka di semua kolom.",
  final_summary:
    "Anda telah menyelesaikan penjumlahan. Jawaban akhir Anda adalah {{answer}}.",

  combine:
    "Sekarang kita perlu menyusun jawaban dari hasil semua penjumlahan kolom. Ketuk pada bagian yang disorot.",
  mcq_one:
    "{{osumx}} > 9,<br>Kita perlu memisahkan {{osumx}} untuk melakukan simpanan 10-an ekstra ke tempat puluhan.",
  mcq_ten:
    "{{tsumx}} > 9,<br>Kita perlu memisahkan {{tsumx}} untuk melakukan simpanan 100-an ekstra ke tempat ratusan.",
  mcq_hundred:
    "{{hsumx}} > 9,<br>Kita perlu memisahkan {{hsumx}} untuk melakukan simpanan 1000-an ekstra ke tempat ribuan.",
  mcq_thousand:
    "{{thsumx}} > 9,<br>Kita perlu memisahkan {{thsumx}} untuk melakukan simpanan 10000-an ekstra ke tempat puluh ribuan.",
};

const headerArrayIndonesian = ["PRi", "Ri", "R", "P", "S"];

const buttonTextsIndonesian = {
  next: "Berikutnya",
  start_over: "Mulai Lagi",
  carry_over: "Simpan",
  try_new: "Coba yang Baru",
};

const overlayDataIndonesian = {
  heading: "Aktivitas Selesai!",
  paragraph: `Jika kamu ingin mencoba lagi, klik tombol 'Mulai Lagi'.`,
};
