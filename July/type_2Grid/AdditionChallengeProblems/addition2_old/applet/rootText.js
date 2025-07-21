const firstStageQuestions = [
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
    toFindFacts: ["To find:", "The total amount of stored rice"],
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
    toFindFacts: ["To find:", "The total number of textbooks received"],
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
    toFindFacts: ["To find:", "The total amount of money collected"],
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
    options: ["10", "{{osumx_plus}}", "{{osumx}}"],
    answer_index: 2,
    correct_feedback: "Great job!",
    wrong_feedback: "Not quite. Give it another try.",
  },
  add_tens: {
    question: "{{t1x}} + {{t2x}} {{oOverflowStr}} =",
    options: ["{{tsumx_plus}}", "{{tsumx}}", "10"],
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
    options: ["1", "{{o3}}", "{{osum}}"],
    answer_index: 0,
    correct_feedback: "Correct!",
    wrong_feedback: "That's not the one to carry. Try again.",
  },
  tens_split: {
    question:
      "We can't have {{tsumx}} in the tens place.<br> Which digit should we carry forward??",
    options: ["1", "{{t3}}", "{{tsum}}"],
    answer_index: 0,
    correct_feedback: "Great job!",
    wrong_feedback: "That's not the one to carry. Try again.",
  },
  hundreds_split: {
    question:
      "We can't have {{hsumx}} in the hundreds place.<br> Which digit should we carry forward??",
    options: ["1", "0", "{{hsum}}"],
    answer_index: 0,
    correct_feedback: "Well done!",
    wrong_feedback: "That's not the one to carry. Try again.",
  },
  thousands_split: {
    question:
      "We can't have {{thsumx}} in the thousands place.<br> Which digit should we carry forward??",
    options: ["1", "0", "{{thsum}}"],
    answer_index: 0,
    correct_feedback: "Perfect!",
    wrong_feedback: "That's not the one to carry. Try again.",
  },
};

const textPoolEnglish = {
  answer_of_question: `<span>Answer: Total number of books received: {{answer}} </span>`,
  first_stage_1: "Read the word problem carefully. Click Next to continue.",
  first_stage_2:
    "Great! Let's identify the important information given in the problem.",
  first_stage_3: "Good job. Now, let's figure out what we need to find.",
  first_stage_4: "We need to add to find the total number of books received.",
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

const mcqDataIndonesian = {
  add_or_subtract: {
    question:
      "Apakah Anda harus menambah atau mengurangi untuk menyelesaikan pertanyaan?",
    options: ["Tambah", "Kurangi"],
    answer_index: 0,
  },
  ones_place: {
    question: "Nilai tempat manakah yang kita tambahkan terlebih dahulu?",
    options: ["Puluhan", "Ratusan", "Satuan", "Ribuan"],
    answer_index: 2,
    correct_feedback: "Tepat sekali! Kita mengerjakannya dari kanan ke kiri.",
    wrong_feedback:
      "Bukan, itu tidak benar. Ingat, kita selalu mulai dari nilai tempat paling kanan.",
  },
  add_ones: {
    question: "{{o1x}} + {{o2x}} =",
    options: ["{{osumx_minus}}", "{{osumx_plus}}", "{{osumx}}"],
    answer_index: 2,
    correct_feedback: "Kerja bagus!",
    wrong_feedback: "Bukan, itu tidak benar. Coba lagi.",
  },
  add_tens: {
    question: "{{t1x}} + {{t2x}} {{oOverflowStr}} =",
    options: ["{{tsumx_plus}}", "{{tsumx}}", "{{tsumx_minus}}"],
    answer_index: 1,
    correct_feedback: "Bagus sekali!",
    wrong_feedback: "Ups, itu tidak benar. Ayo coba lagi.",
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
    wrong_feedback: "Bukan, itu tidak benar. Coba lagi.",
  },
  add_ten_thousands: {
    question: "{{tt1x}} + {{tt2x}} {{thOverflowStr}} =",
    options: ["{{ttsumx}}", "{{ttsumx_plus}}", "{{ttsumx_minus}}"],
    answer_index: 0,
    correct_feedback: "Kamu berhasil!",
    wrong_feedback: "Ups, itu tidak benar. Ayo coba lagi.",
  },
  ones_split: {
    question:
      "Kita tidak bisa memiliki {{osumx}} di tempat satuan.<br> Angka mana yang harus kita simpan?",
    options: ["1", "{{o3}}", "{{osum}}"],
    answer_index: 0,
    correct_feedback: "Benar!",
    wrong_feedback: "Bukan itu yang harus disimpan. Coba lagi.",
  },
  tens_split: {
    question:
      "Kita tidak bisa memiliki {{tsumx}} di tempat puluhan.<br> Angka mana yang harus kita simpan?",
    options: ["1", "{{t3}}", "{{tsum}}"],
    answer_index: 0,
    correct_feedback: "Kerja bagus!",
    wrong_feedback: "Bukan itu yang harus disimpan. Coba lagi.",
  },
  hundreds_split: {
    question:
      "Kita tidak bisa memiliki {{hsumx}} di tempat ratusan.<br> Angka mana yang harus kita simpan?",
    options: ["1", "{{h3}}", "{{hsum}}"],
    answer_index: 0,
    correct_feedback: "Bagus sekali!",
    wrong_feedback: "Bukan itu yang harus disimpan. Coba lagi.",
  },
  thousands_split: {
    question:
      "Kita tidak bisa memiliki {{thsumx}} di tempat ribuan.<br> Angka mana yang harus kita simpan?",
    options: ["1", "{{th3}}", "{{thsum}}"],
    answer_index: 0,
    correct_feedback: "Sempurna!",
    wrong_feedback: "Bukan itu yang harus disimpan. Coba lagi.",
  },
};

const textPoolIndonesian = {
  first_stage_1:
    "Baca soal cerita dengan seksama. Klik Berikutnya untuk melanjutkan.",
  first_stage_2:
    "Bagus! Mari kita identifikasi informasi penting yang diberikan dalam soal.",
  first_stage_3:
    "Kerja bagus. Sekarang, mari kita cari tahu apa yang perlu kita temukan.",
  first_stage_4:
    "Untuk mencari jumlah total, operasi apa yang harus kita gunakan?",
  mcqIn: "Klik pada opsi yang benar.",
  start:
    "Ayo belajar penjumlahan bersusun panjang. Klik 'Berikutnya' untuk memulai.",
  split_number1:
    "Uraikan bilangan menjadi nilai-nilai tempatnya. Ketuk pada bilangan pertama.",
  split_number2:
    "Uraikan bilangan menjadi nilai-nilai tempatnya. Ketuk pada bilangan kedua.",
  after_split:
    "Kita punya 5 tempat untuk ditambahkan. Ingat kita mulai dari kanan ke kiri.",
  ones_1: "Ayo jumlahkan angka di kolom satuan. Ketuk tombol '+'.",
  ones_carryover:
    "Oh! Kita punya lebih dari 9 di tempat satuan. Kita perlu melakukan simpanan.",
  ones_carryover2:
    "Hebat! Kita telah menguraikan {{osumx}} dengan benar. Klik 'Simpan'.",
  ones_complete:
    "Kita telah selesai menjumlahkan satuan. Sekarang ayo jumlahkan angka di kolom puluhan.",
  tens_1: "Untuk menjumlahkan angka di kolom puluhan, ketuk tombol '+'.",
  tens_carryover:
    "Oh! Kita punya lebih dari 90 di tempat puluhan. Kita perlu melakukan simpanan.",
  tens_carryover2:
    "Hebat! Kita telah menguraikan {{tsumx}} dengan benar. Klik 'Berikutnya' untuk melakukan simpanan.",
  tens_complete:
    "Kita telah selesai menjumlahkan puluhan. Sekarang ayo jumlahkan angka di kolom ratusan.",
  hundreds_1: "Untuk menjumlahkan angka di kolom ratusan, ketuk tombol '+'.",
  hundreds_carryover:
    "Uh oh! Kita punya lebih dari 900 di tempat ratusan. Waktunya melakukan simpanan.",
  hundreds_carryover2:
    "Kamu telah menguraikan {{hsumx}} dengan benar. Klik 'Berikutnya' untuk melanjutkan.",
  hundreds_complete:
    "Kita telah selesai menjumlahkan ratusan. Ayo pindah ke kolom ribuan sekarang.",
  thousands_1: "Untuk menjumlahkan angka di kolom ribuan, ketuk tombol '+'.",
  thousands_carryover:
    "Uh oh! Kita punya lebih dari 9000 di tempat ribuan. Ayo lakukan simpanan.",
  thousands_carryover2:
    "Penguraian Sempurna. Klik 'Berikutnya' untuk melakukan simpanan.",
  thousands_complete:
    "Kita telah selesai menjumlahkan ribuan. Ayo pindah ke kolom terakhir sekarang.",
  ten_thousands_1:
    "Terakhir, ayo jumlahkan angka di kolom puluh ribuan. Ketuk tombol '+'.",
  ten_thousands_complete:
    "Kita telah selesai menjumlahkan angka di semua kolom.",
  final_summary:
    "Kamu telah menyelesaikan penjumlahan. Jawaban akhirmu adalah {{answer}}.",
  combine:
    "Sekarang kita perlu menyusun jawaban dari hasil semua penjumlahan kolom. Ketuk pada bagian yang disorot.",
  mcq_one:
    "{{osumx}} > 9,<br>Kita perlu menguraikan {{osumx}} untuk melakukan simpanan kelebihan 10-an ke tempat puluhan.",
  mcq_ten:
    "{{tsumx}} > 90,<br>Kita perlu menguraikan {{tsumx}} untuk melakukan simpanan kelebihan 100-an ke tempat ratusan.",
  mcq_hundred:
    "{{hsumx}} > 900,<br>Kita perlu menguraikan {{hsumx}} untuk melakukan simpanan kelebihan 1000-an ke tempat ribuan.",
  mcq_thousand:
    "{{thsumx}} > 9000,<br>Kita perlu menguraikan {{thsumx}} untuk melakukan simpanan kelebihan 10000-an ke tempat puluh ribuan.",
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
