const firstStageQuestions = [
  {
    question:
      "A storage facility had 91,000 kg of rice. After distribution, only 57,500 kg remained. How much rice was distributed?",
    numbers: [82000, 64500],
    given: ["91,000 kg of rice", "57,500 kg remained"],
    givenFacts: [
      "Given:",
      "Total money Rudi had: 82,000",
      "Total money spent: 64,500",
    ],
    toFind: ["How much rice was distributed"],
    toFindFacts: ["To find:", "Money left with Rudi"],
  },
  {
    question:
      "A book stall had 84,500 books in stock. They sold 29,300 books during the fair. How many books were left?",
    numbers: [84500, 29300],
    given: ["84,500 books in stock", "sold 29,300 books"],
    givenFacts: ["Given:", "Books in stock: 84,500", "Books sold: 29,300"],
    toFind: ["How many books were left"],
    toFindFacts: ["To find:", "The number of books left"],
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
  first_stage_1: "Read the word problem carefully. Click Next to continue.",
  first_stage_2:
    "Great! Let's identify the important information given in the problem.",
  first_stage_3: "Good job. Now, let's figure out what we need to find.",
  first_stage_4: "We need to subtract to find the money left.",
  mcqIn: "Click on the correct option.",
  start: "Let's learn subtraction with borrowing. Click 'Next' to start.",
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

const mcqDataIndonesian = {
  ones_place: {
    question: "Tempat mana yang harus kita kurangi terlebih dahulu?",
    options: ["Puluhan", "Ratusan", "Satuan", "Ribuan"],
    answer_index: 2,
    correct_feedback: "Benar sekali! Kita mulai dari kanan ke kiri.",
    wrong_feedback: "Tidak, itu kurang tepat. Kita mulai dari kanan ke kiri.",
  },
  ones_borrow: {
    question: "Apa yang harus kita lakukan?",
    options: [
      "Tulis 0 dan lanjutkan",
      "Pinjam dari tempat puluhan",
      "Kurangkan {{o1}} dari {{o2}} saja",
    ],
    answer_index: 1,
    correct_feedback: "Itu benar.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  num_at_ones: {
    question:
      "Setelah meminjam dari tempat puluhan, angka di tempat satuan menjadi:",
    options: ["{{oFinal}}", "{{oFinal_minus}}", "{{oFinal_plus}}"],
    answer_index: 0,
    correct_feedback: "Bagus sekali.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  final_add_ones: {
    question: "{{oFinal}} - {{o2}} =",
    options: ["{{o3x}}", "{{o3x_plus}}", "{{o3x_minus}}"],
    answer_index: 0,
    correct_feedback: "Itu benar.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  tens_borrow: {
    question: "Apa yang harus kita lakukan?",
    options: [
      "Pinjam dari tempat ratusan",
      "Kurangkan {{t1}} dari {{t2}}",
      "Abaikan dan lanjutkan",
    ],
    answer_index: 0,
    correct_feedback: "Itu benar.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  num_at_tens: {
    question:
      "Setelah meminjam dari tempat ratusan, angka di tempat puluhan menjadi:",
    options: ["{{tFinal_minus}}", "{{tFinal}}", "{{tFinal_plus}}"],
    answer_index: 1,
    correct_feedback: "Luar biasa!",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  final_add_tens: {
    question: "{{tFinal}} - {{t2}} =",
    options: ["{{t3x_plus}}", "{{t3x_minus}}", "{{t3x}}"],
    answer_index: 2,
    correct_feedback: "Itu benar.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  hundreds_borrow: {
    question: "Apa yang harus kita lakukan?",
    options: [
      "Pinjam dari tempat sepuluh ribuan",
      "Kurangkan {{h1}} dari {{h2}}",
      "Tidak mungkin",
    ],
    answer_index: 0,
    correct_feedback: "Kamu benar!",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  num_at_hundreds: {
    question:
      "Setelah meminjam dari tempat ribuan, angka di tempat ratusan menjadi:",
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
      "Pinjam dari tempat sepuluh ribuan",
      "Mulai dari awal",
      "Tebak jawabannya",
    ],
    answer_index: 0,
    correct_feedback: "Benar!",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  num_at_thousands: {
    question:
      "Setelah meminjam dari tempat sepuluh ribuan, angka di tempat ribuan menjadi:",
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
  first_stage_1:
    "Baca soal cerita dengan seksama. Klik Berikutnya untuk melanjutkan.",
  first_stage_2:
    "Bagus! Mari kita identifikasi informasi penting yang diberikan dalam soal.",
  first_stage_3:
    "Kerja bagus. Sekarang, mari kita cari tahu apa yang perlu kita temukan.",
  first_stage_4: "Kita perlu mengurangkan untuk menemukan jawabannya.",
  mcqIn: "Klik pada opsi yang benar.",
  start:
    "Mari belajar pengurangan dengan peminjaman. Klik 'Berikutnya' untuk memulai.",
  split_number1:
    "Pisahkan angka ke dalam nilai tempatnya. Ketuk angka pertama.",
  split_number2: "Pisahkan angka ke dalam nilai tempatnya. Ketuk angka kedua.",
  after_split:
    "Kita punya 5 tempat untuk dikurangkan. Ingat kita mulai dari kanan ke kiri.",
  ones_1:
    "Ingat kita mengurangkan berdasarkan nilai tempat. Mari kurangi kolom satuan.",
  topLesser_one:
    "{{o1x}} lebih kecil dari {{o2x}}. Kita tidak bisa mengurangkan {{o2x}} dari {{o1x}}.",
  split_ones: "Klik {{t1}} untuk membaginya.",
  splitted_for_ones: "{{t1}} dibagi menjadi {{tCorrect}} + 1.",
  enough_ones:
    "Sekarang kita punya cukup untuk mengurangkan. Ketuk tombol '-' sekarang.",
  subtracted_ones:
    "Kita telah mengurangkan kolom satuan. Klik 'Berikutnya' untuk lanjut.",
  ones_mcq1: "Kita tidak bisa mengurangkan {{o2x}} dari {{o1x}}.",
  ones_mcq2:
    "Kita punya {{o1}} di tempat satuan dan meminjam 1 dari tempat puluhan.",
  tens_1: "Sekarang mari kurangi kolom puluhan. Ketuk tombol '-'.",
  topLesser_ten:
    "{{tCorrect}} lebih kecil dari {{t2x}}. Kita tidak bisa mengurangkan {{t2x}} dari {{tCorrect}}.",
  split_tens: "Klik {{h1}} untuk membaginya.",
  splitted_for_tens: "{{h1}} dibagi menjadi {{hCorrect}} + 1.",
  enough_tens:
    "Sekarang kita punya cukup untuk mengurangkan. Ketuk tombol '-' sekarang.",
  subtracted_tens:
    "Kita telah mengurangkan kolom puluhan. Klik 'Berikutnya' untuk lanjut.",
  tens_mcq1: "Kita tidak bisa mengurangkan {{t2x}} dari {{tCorrect}}.",
  tens_mcq2:
    "Kita punya {{tCorrect}} di tempat puluhan dan meminjam 1 dari tempat ratusan.",
  hundreds_1: "Sekarang mari kurangi kolom ratusan. Ketuk tombol '-'.",
  topLesser_hundred:
    "{{hCorrect}} lebih kecil dari {{h2x}}. Kita tidak bisa mengurangkan {{h2x}} dari {{hCorrect}}.",
  split_hundreds: "Klik {{th1}} untuk membaginya.",
  splitted_for_hundreds: "{{th1}} dibagi menjadi {{thCorrect}} + 1.",
  enough_hundreds:
    "Sekarang kita punya cukup untuk mengurangkan. Ketuk tombol '-' sekarang.",
  subtracted_hundreds:
    "Kita telah mengurangkan kolom ratusan. Klik 'Berikutnya' untuk lanjut.",
  hundreds_mcq1: "Kita tidak bisa mengurangkan {{h2x}} dari {{hCorrect}}.",
  hundreds_mcq2:
    "Kita punya {{hCorrect}} di tempat ratusan dan meminjam 1 dari tempat ribuan.",
  thousands_1: "Sekarang mari kurangi kolom ribuan. Ketuk tombol '-'.",
  topLesser_thousand:
    "{{thCorrect}} lebih kecil dari {{th2x}}. Kita tidak bisa mengurangkan {{th2x}} dari {{thCorrect}}.",
  split_thousands: "Klik {{tt1}} untuk membaginya.",
  splitted_for_thousands: "{{tt1}} dibagi menjadi {{ttCorrect}} + 1.",
  enough_thousands:
    "Sekarang kita punya cukup untuk mengurangkan. Ketuk tombol '-' sekarang.",
  subtracted_thousands:
    "Kita telah mengurangkan kolom ribuan. Klik 'Berikutnya' untuk lanjut.",
  thousands_mcq1: "Kita tidak bisa mengurangkan {{th2x}} dari {{thCorrect}}.",
  thousands_mcq2:
    "Kita punya {{thCorrect}} di tempat ribuan dan meminjam 1 dari tempat sepuluh ribuan.",
  ten_thousands_1:
    "Terakhir, mari kurangi kolom sepuluh ribuan. Ketuk tombol '-'.",
  subtracted_ten_thousands:
    "Kita telah mengurangkan kolom sepuluh ribuan. Klik 'Berikutnya' untuk melihat jawaban akhir.",
  final_summary:
    "Kerja bagus! Kamu telah menyelesaikan pengurangan. Jawabannya adalah {{answer}}.",
  combine:
    "Sekarang kita perlu menyusun jawaban dari hasil semua pengurangan kolom. Ketuk bagian yang disorot.",
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
