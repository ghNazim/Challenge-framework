const firstStageQuestionsEnglish = [
  {
    question:
      "A storage facility had 91,000 kg of rice. After distribution, only 57,500 kg remained. How much rice was distributed?",
    numbers: [91000, 57500],
    given: ["91,000 kg of rice", "57,500 kg remained"],
    givenFacts: [
      "Given:",
      "Initial amount of rice in storage: 91,000 kg",
      "Rice remaining: 57,500 kg",
    ],
    toFind: ["How much rice was distributed"],
    toFindFacts: ["To find:", "Amount of rice distributed"],
    first_stage_4:
      "We need to <span class='em'>subtract</span> to find the amount of rice distributed.",
    conclude_text: "The amount of rice distributed is 33,500 kg.",
  },
  {
    question:
      "A book stall had 84,500 books in stock. They sold 29,300 books during the fair. How many books were left?",
    numbers: [84500, 29300],
    given: ["84,500 books in stock", "sold 29,300 books"],
    givenFacts: ["Given:", "Books in stock: 84,500", "Books sold: 29,300"],
    toFind: ["How many books were left"],
    toFindFacts: ["To find:", "Number of books left"],
    first_stage_4:
      "We need to <span class='em'>subtract</span> to find the number of books left.",
    conclude_text: "The number of books left is 55,200 books.",
  },
];

const mcqDataEnglish = {
  ones_place: {
    question: "Which place do we subtract first?",
    options: ["Tens", "Hundreds", "Ones", "Thousands"],
    answer_index: 2,
    correct_feedback: "Absolutely correct! We go from right to left.",
    wrong_feedback: "No, that's not right. We go from right to left.",
  },
  ones_borrow: {
    question: "What should we do ?",
    options: [
      "Write 0 and move on",
      "Borrow from the tens place",
      "Subtract {{o1}} from {{o2}} instead",
    ],
    answer_index: 1,
    correct_feedback: "That's correct.",
    wrong_feedback: "That's not right. Try again.",
  },
  num_at_ones: {
    question:
      "After borrowing from the tens place, the number at ones place becomes:",
    options: ["{{oFinal}}", "{{oFinal_minus}}", "{{oFinal_plus}}"],
    answer_index: 0,
    correct_feedback: "Well done.",
    wrong_feedback: "That's not right. Try again.",
  },
  final_add_ones: {
    question: "{{oFinal}} - {{o2}} =",
    options: ["{{o3x}}", "{{o3x_plus}}", "10"],
    answer_index: 0,
    correct_feedback: "That's right.",
    wrong_feedback: "That's not right. Try again.",
  },
  tens_borrow: {
    question: "What should we do?",
    options: [
      "Borrow from the hundreds place",
      "Subtract {{t1}} from {{t2}}",
      "Ignore and move on",
    ],
    answer_index: 0,
    correct_feedback: "That's correct.",
    wrong_feedback: "That's not right. Try again.",
  },
  num_at_tens: {
    question:
      "After borrowing from the hundreds place, the number at tens place becomes:",
    options: ["{{tFinal_minus}}", "{{tFinal}}", "{{tFinal_plus}}"],
    answer_index: 1,
    correct_feedback: "Excellent!",
    wrong_feedback: "That's not right. Try again.",
  },
  final_add_tens: {
    question: "{{tFinal}} - {{t2}} =",
    options: ["{{t3x_plus}}", "10", "{{t3x}}"],
    answer_index: 2,
    correct_feedback: "That's right.",
    wrong_feedback: "That's not right. Try again.",
  },
  hundreds_borrow: {
    question: "What should we do?",
    options: [
      "Borrow from the thousands place",
      "Subtract {{h1}} from {{h2}}",
      "It's impossible",
    ],
    answer_index: 0,
    correct_feedback: "You got it!",
    wrong_feedback: "That's not right. Try again.",
  },
  num_at_hundreds: {
    question:
      "After borrowing from the thousands place, the number at hundreds place becomes:",
    options: ["{{hFinal}}", "{{hFinal_minus}}", "{{hFinal_plus}}"],
    answer_index: 0,
    correct_feedback: "Perfect!",
    wrong_feedback: "That's not right. Try again.",
  },
  final_add_hundreds: {
    question: "{{hFinal}} - {{h2}} =",
    options: ["{{h3x}}", "{{h3x_plus}}", "{{h3x_minus}}"],
    answer_index: 0,
    correct_feedback: "That's right.",
    wrong_feedback: "That's not right. Try again.",
  },
  thousands_borrow: {
    question: "What should we do?",
    options: [
      "Borrow from the ten thousands place",
      "Swap {{th1}} and {{th2}}",
      "Ignore and move on",
    ],
    answer_index: 0,
    correct_feedback: "Correct!",
    wrong_feedback: "That's not right. Try again.",
  },
  num_at_thousands: {
    question:
      "After borrowing from the ten thousands place, the number at thousands place becomes:",
    options: ["{{thFinal_plus}}", "{{thFinal}}", "{{thFinal_minus}}"],
    answer_index: 1,
    correct_feedback: "Amazing!",
    wrong_feedback: "That's not right. Try again.",
  },
  final_add_thousands: {
    question: "{{thFinal}} - {{th2}} =",
    options: ["{{th3x_minus}}", "{{th3x}}", "{{th3x_plus}}"],
    answer_index: 1,
    correct_feedback: "That's right.",
    wrong_feedback: "That's not right. Try again.",
  },
  final_add_ten_thousands: {
    question: "{{ttFinal}} - {{tt2}} =",
    options: ["{{tt3x}}", "{{tt3x_minus}}", "{{tt3x_plus}}"],
    answer_index: 0,
    correct_feedback: "That's right.",
    wrong_feedback: "That's not right. Try again.",
  },
};
const textPoolEnglish = {
  mcq: {
    question: "Should We add or subtract to solve this question?",
    options: ["Add", "Subtract"],
    answer_index: 1,
  },
  select_operation: "Select the correct operation.",
  first_stage_1: "Read the word problem carefully. Click Next to continue.",
  first_stage_2:
    "Great! Let's identify the important information given in the problem.",
  first_stage_3: "This is what we need to calculate.",
  first_stage_4: "We need to subtract to find Amount of rice distributed.",
  mcqIn: "Click on the correct option.",
  start: "Let's solve this subtraction challenge. Click 'Next' to start.",
  split_number1:
    "Split the number into its place values. Tap on the first number.",
  split_number2:
    "Split the number into its place values. Tap on the second number.",
  after_split:
    "We have 5 places to subtract. Recall that we go from right to left.",
  ones_1: "Recall we subtract by place values. Let's subtract ones column.",
  topLesser_one:
    "{{o1x}} is lesser than {{o2x}}. We can't subtract {{o2x}} from {{o1x}}.",
  split_ones: "Click {{t1}} to split it.",
  splitted_for_ones: "{{t1}} is split into {{tCorrect}} + 1.",
  enough_ones: "Now we have enough to subtract. Tap '-' button now.",
  subtracted_ones:
    "We have subtracted the ones column. Click 'Next' to continue.",
  ones_mcq1: "We can't subtract {{o2x}} from {{o1x}}.",
  ones_mcq2: "We have {{o1}} at ones place and borrowed 1 from tens place.",
  tens_1: "Now let's subtract the tens column. Tap '-' button.",
  topLesser_ten:
    "{{tCorrect}} is lesser than {{t2x}}. We can't subtract {{t2x}} from {{tCorrect}}.",
  split_tens: "Click {{h1}} to split it.",
  splitted_for_tens: "{{h1}} is split into {{hCorrect}} + 1.",
  enough_tens: "Now we have enough to subtract. Tap '-' button now.",
  subtracted_tens:
    "We have subtracted the tens column. Click 'Next' to continue.",
  tens_mcq1: "We can't subtract {{t2x}} from {{tCorrect}}.",
  tens_mcq2:
    "We have {{tCorrect}} at tens place and borrowed 1 from hundreds place.",
  hundreds_1: "Now let's subtract the hundreds column. Tap '-' button.",
  topLesser_hundred:
    "{{hCorrect}} is lesser than {{h2x}}. We can't subtract {{h2x}} from {{hCorrect}}.",
  split_hundreds: "Click {{th1}} to split it.",
  splitted_for_hundreds: "{{th1}} is split into {{thCorrect}} + 1.",
  enough_hundreds: "Now we have enough to subtract. Tap '-' button now.",
  subtracted_hundreds:
    "We have subtracted the hundreds column. Click 'Next' to continue.",
  hundreds_mcq1: "We can't subtract {{h2x}} from {{hCorrect}}.",
  hundreds_mcq2:
    "We have {{hCorrect}} at hundreds place and borrowed 1 from thousands place.",
  thousands_1: "Now let's subtract the thousands column. Tap '-' button.",
  topLesser_thousand:
    "{{thCorrect}} is lesser than {{th2x}}. We can't subtract {{th2x}} from {{thCorrect}}.",
  split_thousands: "Click {{tt1}} to split it.",
  splitted_for_thousands: "{{tt1}} is split into {{ttCorrect}} + 1.",
  enough_thousands: "Now we have enough to subtract. Tap '-' button now.",
  subtracted_thousands:
    "We have subtracted the thousands column. Click 'Next' to continue.",
  thousands_mcq1: "We can't subtract {{th2x}} from {{thCorrect}}.",
  thousands_mcq2:
    "We have {{thCorrect}} at thousands place and borrowed 1 from ten thousands place.",
  ten_thousands_1:
    "Finally, let's subtract the ten thousands column. Tap '-' button.",
  subtracted_ten_thousands:
    "We have subtracted the ten thousands column. Click 'Next' to see the final answer.",
  final_summary:
    "Good work! You have completed the subtraction. The answer is {{answer}}.",
  combine:
    "Now we need to compose the answer from results of all column subtractions. Tap on the highlighted part.",
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
const firstStageQuestionsIndonesian = [
  {
    question:
      "Sebuah fasilitas penyimpanan memiliki 91.000 kg beras. Setelah didistribusikan, hanya tersisa 57.500 kg. Berapa banyak beras yang didistribusikan?",
    numbers: [91000, 57500],
    given: ["91.000 kg beras", "tersisa 57.500 kg"],
    givenFacts: [
      "Diketahui:",
      "Jumlah awal beras di penyimpanan: 91.000 kg",
      "Beras yang tersisa: 57.500 kg",
    ],
    toFind: ["Berapa banyak beras yang didistribusikan"],
    toFindFacts: ["Ditanyakan:", "Jumlah beras yang didistribusikan"],
    first_stage_4:
      "Kita perlu <span class='em'>mengurangi</span> untuk menemukan jumlah beras yang didistribusikan.",
    conclude_text: "Jumlah beras yang didistribusikan adalah 33.500 kg.",
  },
  {
    question:
      "Sebuah kios buku memiliki stok 84.500 buku. Mereka menjual 29.300 buku selama pameran. Berapa banyak buku yang tersisa?",
    numbers: [84500, 29300],
    given: ["stok 84.500 buku", "menjual 29.300 buku"],
    givenFacts: [
      "Diketahui:",
      "Stok buku: 84.500",
      "Buku yang terjual: 29.300",
    ],
    toFind: ["Berapa banyak buku yang tersisa"],
    toFindFacts: ["Ditanyakan:", "Jumlah buku yang tersisa"],
    first_stage_4:
      "Kita perlu <span class='em'>mengurangi</span> untuk menemukan jumlah buku yang tersisa.",
    conclude_text: "Jumlah buku yang tersisa adalah 55.200 buku.",
  },
];

const mcqDataIndonesian = {
  ones_place: {
    question: "Nilai tempat mana yang kita kurangi terlebih dahulu?",
    options: ["Puluhan", "Ratusan", "Satuan", "Ribuan"],
    answer_index: 2,
    correct_feedback: "Benar sekali! Kita mulai dari kanan ke kiri.",
    wrong_feedback: "Tidak, itu tidak benar. Kita mulai dari kanan ke kiri.",
  },
  ones_borrow: {
    question: "Apa yang harus kita lakukan?",
    options: [
      "Tulis 0 dan lanjutkan",
      "Meminjam dari nilai tempat puluhan",
      "Kurangi {{o1}} dari {{o2}} saja",
    ],
    answer_index: 1,
    correct_feedback: "Itu benar.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  num_at_ones: {
    question:
      "Setelah meminjam dari nilai tempat puluhan, angka di nilai tempat satuan menjadi:",
    options: ["{{oFinal}}", "{{oFinal_minus}}", "{{oFinal_plus}}"],
    answer_index: 0,
    correct_feedback: "Bagus sekali.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  final_add_ones: {
    question: "{{oFinal}} - {{o2}} =",
    options: ["{{o3x}}", "{{o3x_plus}}", "10"],
    answer_index: 0,
    correct_feedback: "Itu benar.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  tens_borrow: {
    question: "Apa yang harus kita lakukan?",
    options: [
      "Meminjam dari nilai tempat ratusan",
      "Kurangi {{t1}} dari {{t2}}",
      "Abaikan dan lanjutkan",
    ],
    answer_index: 0,
    correct_feedback: "Itu benar.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  num_at_tens: {
    question:
      "Setelah meminjam dari nilai tempat ratusan, angka di nilai tempat puluhan menjadi:",
    options: ["{{tFinal_minus}}", "{{tFinal}}", "{{tFinal_plus}}"],
    answer_index: 1,
    correct_feedback: "Luar biasa!",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  final_add_tens: {
    question: "{{tFinal}} - {{t2}} =",
    options: ["{{t3x_plus}}", "10", "{{t3x}}"],
    answer_index: 2,
    correct_feedback: "Itu benar.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  hundreds_borrow: {
    question: "Apa yang harus kita lakukan?",
    options: [
      "Meminjam dari nilai tempat ribuan",
      "Kurangi {{h1}} dari {{h2}}",
      "Tidak mungkin",
    ],
    answer_index: 0,
    correct_feedback: "Anda berhasil!",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  num_at_hundreds: {
    question:
      "Setelah meminjam dari nilai tempat ribuan, angka di nilai tempat ratusan menjadi:",
    options: ["{{hFinal}}", "{{hFinal_minus}}", "{{hFinal_plus}}"],
    answer_index: 0,
    correct_feedback: "Sempurna!",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  final_add_hundreds: {
    question: "{{hFinal}} - {{h2}} =",
    options: ["{{h3x}}", "{{h3x_plus}}", "{{h3x_minus}}"],
    answer_index: 0,
    correct_feedback: "Itu benar.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  thousands_borrow: {
    question: "Apa yang harus kita lakukan?",
    options: [
      "Meminjam dari nilai tempat puluh ribuan",
      "Tukar {{th1}} dan {{th2}}",
      "Abaikan dan lanjutkan",
    ],
    answer_index: 0,
    correct_feedback: "Benar!",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  num_at_thousands: {
    question:
      "Setelah meminjam dari nilai tempat puluh ribuan, angka di nilai tempat ribuan menjadi:",
    options: ["{{thFinal_plus}}", "{{thFinal}}", "{{thFinal_minus}}"],
    answer_index: 1,
    correct_feedback: "Luar biasa!",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  final_add_thousands: {
    question: "{{thFinal}} - {{th2}} =",
    options: ["{{th3x_minus}}", "{{th3x}}", "{{th3x_plus}}"],
    answer_index: 1,
    correct_feedback: "Itu benar.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  final_add_ten_thousands: {
    question: "{{ttFinal}} - {{tt2}} =",
    options: ["{{tt3x}}", "{{tt3x_minus}}", "{{tt3x_plus}}"],
    answer_index: 0,
    correct_feedback: "Itu benar.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
};

const textPoolIndonesian = {
  mcq: {
    question:
      "Apakah kita harus menambah atau mengurangi untuk menyelesaikan soal ini?",
    options: ["Tambah", "Kurangi"],
    answer_index: 1,
  },
  select_operation: "Pilih operasi yang benar.",
  first_stage_1:
    "Baca soal cerita dengan saksama. Klik Lanjut untuk melanjutkan.",
  first_stage_2:
    "Bagus! Mari kita identifikasi informasi penting yang diberikan dalam soal.",
  first_stage_3: "Inilah yang perlu kita hitung.",
  first_stage_4:
    "Kita perlu mengurangi untuk menemukan Jumlah beras yang didistribusikan.",
  mcqIn: "Klik pada opsi yang benar.",
  start:
    "Mari belajar pengurangan dengan meminjam. Klik 'Lanjut' untuk memulai.",
  split_number1:
    "Pisahkan bilangan menjadi nilai-nilai tempatnya. Ketuk pada bilangan pertama.",
  split_number2:
    "Pisahkan bilangan menjadi nilai-nilai tempatnya. Ketuk pada bilangan kedua.",
  after_split:
    "Kita punya 5 nilai tempat untuk dikurangi. Ingatlah bahwa kita mulai dari kanan ke kiri.",
  ones_1:
    "Ingat kita mengurangi berdasarkan nilai tempat. Mari kita kurangi kolom satuan.",
  topLesser_one:
    "{{o1x}} lebih kecil dari {{o2x}}. Kita tidak bisa mengurangi {{o2x}} dari {{o1x}}.",
  split_ones: "Klik {{t1}} untuk memisahkannya.",
  splitted_for_ones: "{{t1}} dipisahkan menjadi {{tCorrect}} + 1.",
  enough_ones:
    "Sekarang kita punya cukup untuk mengurangi. Ketuk tombol '-' sekarang.",
  subtracted_ones:
    "Kita telah mengurangi kolom satuan. Klik 'Lanjut' untuk melanjutkan.",
  ones_mcq1: "Kita tidak bisa mengurangi {{o2x}} dari {{o1x}}.",
  ones_mcq2:
    "Kita punya {{o1}} di tempat satuan dan meminjam 1 dari tempat puluhan.",
  tens_1: "Sekarang mari kita kurangi kolom puluhan. Ketuk tombol '-'.",
  topLesser_ten:
    "{{tCorrect}} lebih kecil dari {{t2x}}. Kita tidak bisa mengurangi {{t2x}} dari {{tCorrect}}.",
  split_tens: "Klik {{h1}} untuk memisahkannya.",
  splitted_for_tens: "{{h1}} dipisahkan menjadi {{hCorrect}} + 1.",
  enough_tens:
    "Sekarang kita punya cukup untuk mengurangi. Ketuk tombol '-' sekarang.",
  subtracted_tens:
    "Kita telah mengurangi kolom puluhan. Klik 'Lanjut' untuk melanjutkan.",
  tens_mcq1: "Kita tidak bisa mengurangi {{t2x}} dari {{tCorrect}}.",
  tens_mcq2:
    "Kita punya {{tCorrect}} di tempat puluhan dan meminjam 1 dari tempat ratusan.",
  hundreds_1: "Sekarang mari kita kurangi kolom ratusan. Ketuk tombol '-'.",
  topLesser_hundred:
    "{{hCorrect}} lebih kecil dari {{h2x}}. Kita tidak bisa mengurangi {{h2x}} dari {{hCorrect}}.",
  split_hundreds: "Klik {{th1}} untuk memisahkannya.",
  splitted_for_hundreds: "{{th1}} dipisahkan menjadi {{thCorrect}} + 1.",
  enough_hundreds:
    "Sekarang kita punya cukup untuk mengurangi. Ketuk tombol '-' sekarang.",
  subtracted_hundreds:
    "Kita telah mengurangi kolom ratusan. Klik 'Lanjut' untuk melanjutkan.",
  hundreds_mcq1: "Kita tidak bisa mengurangi {{h2x}} dari {{hCorrect}}.",
  hundreds_mcq2:
    "Kita punya {{hCorrect}} di tempat ratusan dan meminjam 1 dari tempat ribuan.",
  thousands_1: "Sekarang mari kita kurangi kolom ribuan. Ketuk tombol '-'.",
  topLesser_thousand:
    "{{thCorrect}} lebih kecil dari {{th2x}}. Kita tidak bisa mengurangi {{th2x}} dari {{thCorrect}}.",
  split_thousands: "Klik {{tt1}} untuk memisahkannya.",
  splitted_for_thousands: "{{tt1}} dipisahkan menjadi {{ttCorrect}} + 1.",
  enough_thousands:
    "Sekarang kita punya cukup untuk mengurangi. Ketuk tombol '-' sekarang.",
  subtracted_thousands:
    "Kita telah mengurangi kolom ribuan. Klik 'Lanjut' untuk melanjutkan.",
  thousands_mcq1: "Kita tidak bisa mengurangi {{th2x}} dari {{thCorrect}}.",
  thousands_mcq2:
    "Kita punya {{thCorrect}} di tempat ribuan dan meminjam 1 dari tempat puluh ribuan.",
  ten_thousands_1:
    "Terakhir, mari kita kurangi kolom puluh ribuan. Ketuk tombol '-'.",
  subtracted_ten_thousands:
    "Kita telah mengurangi kolom puluh ribuan. Klik 'Lanjut' untuk melihat jawaban akhir.",
  final_summary:
    "Kerja bagus! Anda telah menyelesaikan pengurangan. Jawabannya adalah {{answer}}.",
  combine:
    "Sekarang kita perlu menyusun jawaban dari hasil semua pengurangan kolom. Ketuk pada bagian yang disorot.",
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
