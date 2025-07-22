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
    options: ["{{o3x}}", "{{o3x_plus}}", "{{o3x_minus}}"],
    answer_index: 0,
    correct_feedback: "That's right.",
    wrong_feedback: "That's not right. Try again.",
  },
  tens_borrow: {
    question: "What should we do?",
    options: [
      "Borrow from the hundreds place",
      "Subtract {{t1}}0 from {{t2}}0",
      "Ignore and move on",
    ],
    answer_index: 0,
    correct_feedback: "That's correct.",
    wrong_feedback: "That's not right. Try again.",
  },
  num_at_tens: {
    question:
      "After borrowing from the hundreds place, the number at tens place becomes:",
    options: ["{{tFinal_minus}}0", "{{tFinal}}0", "{{tFinal_plus}}0"],
    answer_index: 1,
    correct_feedback: "Excellent!",
    wrong_feedback: "That's not right. Try again.",
  },
  final_add_tens: {
    question: "{{tFinal}}0 - {{t2}}0 =",
    options: ["{{t3x_plus}}", "{{t3x_minus}}", "{{t3x}}"],
    answer_index: 2,
    correct_feedback: "Great job!",
    wrong_feedback: "That's not right. Try again.",
  },
  hundreds_borrow: {
    question: "What should we do?",
    options: [
      "Borrow from the thousands place",
      "Subtract {{h1}}00 from {{h2}}00",
      "It's impossible",
    ],
    answer_index: 0,
    correct_feedback: "You got it!",
    wrong_feedback: "That's not right. Try again.",
  },
  num_at_hundreds: {
    question:
      "After borrowing from the thousands place, the number at hundreds place becomes:",
    options: ["{{hFinal}}00", "{{hFinal_minus}}00", "{{hFinal_plus}}00"],
    answer_index: 0,
    correct_feedback: "Perfect!",
    wrong_feedback: "That's not right. Try again.",
  },
  final_add_hundreds: {
    question: "{{hFinal}}00 - {{h2}}00 =",
    options: ["{{h3x}}", "{{h3x_plus}}", "{{h3x_minus}}"],
    answer_index: 0,
    correct_feedback: "That's right.",
    wrong_feedback: "That's not right. Try again.",
  },
  thousands_borrow: {
    question: "What should we do?",
    options: [
      "Borrow from the ten thousands place",
      "Start over",
      "Guess the answer",
    ],
    answer_index: 0,
    correct_feedback: "Correct!",
    wrong_feedback: "That's not right. Try again.",
  },
  num_at_thousands: {
    question:
      "After borrowing from the ten thousands place, the number at thousands place becomes:",
    options: ["{{thFinal_plus}}000", "{{thFinal}}000", "{{thFinal_minus}}000"],
    answer_index: 1,
    correct_feedback: "Amazing!",
    wrong_feedback: "That's not right. Try again.",
  },
  final_add_thousands: {
    question: "{{thFinal}}000 - {{th2}}000 =",
    options: ["{{th3x_minus}}", "{{th3x}}", "{{th3x_plus}}"],
    answer_index: 1,
    correct_feedback: "That's right.",
    wrong_feedback: "That's not right. Try again.",
  },
  final_add_ten_thousands: {
    question: "{{ttFinal}}0000 - {{tt2}}0000 =",
    options: ["{{tt3x}}", "{{tt3x_minus}}", "{{tt3x_plus}}"],
    answer_index: 0,
    correct_feedback: "That's right.",
    wrong_feedback: "That's not right. Try again.",
  },
};
const textPoolEnglish = {
  mcqIn: "Click on the correct option.",
  start: "Let's solve this subtraction challenge. Click 'Next' to start.",
  split_number1:
    "Split the number into its place values. Tap on the first number.",
  split_number2:
    "Split the number into its place values. Tap on the second number.",
  after_split:
    "We have decomposed the numbers correctly. Let's start subtraction!",
  ones_1: "Recall we subtract by place values. Let's subtract ones column.",
  topLesser_one:
    "{{o1x}} is lesser than {{o2x}}. We can't subtract {{o2x}} from {{o1x}}.",
  split_ones: "Click {{t1}}0 to split it.",
  splitted_for_ones: "{{t1}}0 is split into {{tCorrect}}0 + 10.",
  enough_ones: "Now we have enough to subtract. Tap '-' button now.",
  subtracted_ones:
    "We have subtracted the ones column. Click 'Next' to continue.",
  ones_mcq1: "We can't subtract<br> {{o2x}} from {{o1x}}.",
  ones_mcq2: "We have {{o1}} at ones place and borrowed 10 from tens place.",
  tens_1: "Now let's subtract the tens column. Tap '-' button.",
  topLesser_ten:
    "{{tCorrect}}0 is lesser than {{t2x}}. We can't subtract {{t2x}} from {{tCorrect}}0.",
  split_tens: "Click {{h1x}} to split it.",
  splitted_for_tens: "{{h1x}} is split into {{hCorrect}}00 + 100.",
  enough_tens: "Now we have enough to subtract. Tap '-' button now.",
  subtracted_tens:
    "We have subtracted the tens column. Click 'Next' to continue.",
  tens_mcq1: "We can't subtract {{t2x}} from {{tCorrect}}0.",
  tens_mcq2:
    "We have {{tCorrect}}0 at tens place and borrowed 100 from hundreds place.",
  hundreds_1: "Now let's subtract the hundreds column. Tap '-' button.",
  topLesser_hundred:
    "{{hCorrect}}00 is lesser than {{h2x}}. We can't subtract {{h2x}} from {{hCorrect}}00.",
  split_hundreds: "Click {{th1x}} to split it.",
  splitted_for_hundreds: "{{th1x}} is split into {{thCorrect}}000 + 1000.",
  enough_hundreds: "Now we have enough to subtract. Tap '-' button now.",
  subtracted_hundreds:
    "We have subtracted the hundreds column. Click 'Next' to continue.",
  hundreds_mcq1: "We can't subtract {{h2x}} from {{hCorrect}}00.",
  hundreds_mcq2:
    "We have {{hCorrect}}00 at hundreds place and borrowed 1000 from thousands place.",
  thousands_1: "Now let's subtract the thousands column. Tap '-' button.",
  topLesser_thousand:
    "{{thCorrect}}000 is lesser than {{th2x}}. We can't subtract {{th2x}} from {{thCorrect}}000.",
  split_thousands: "Click {{tt1x}} to split it.",
  splitted_for_thousands: "{{tt1x}} is split into {{ttCorrect}}0000 + 10000.",
  enough_thousands: "Now we have enough to subtract. Tap '-' button now.",
  subtracted_thousands:
    "We have subtracted the thousands column. Click 'Next' to continue.",
  thousands_mcq1: "We can't subtract {{th2x}} from {{thCorrect}}000.",
  thousands_mcq2:
    "We have {{thCorrect}}000 at thousands place and borrowed 10000 from ten thousands place.",
  ten_thousands_1:
    "Finally, let's subtract the ten thousands column. Tap '-' button.",
  subtracted_ten_thousands:
    "We have subtracted the ten thousands column. Click 'Next' to see the final answer.",
  final_summary:
    "Good work! You have composed the answer correctly. The answer is {{answer}}.",
  combine:
    "Now we need to compose the answer from results of all column subtractions.<br> Tap on the highlighted part.",
};
const mcqDataIndonesian = {
  ones_place: {
    question: "Nilai tempat mana yang kita kurangi terlebih dahulu?",
    options: ["Puluhan", "Ratusan", "Satuan", "Ribuan"],
    answer_index: 2,
    correct_feedback: "Tepat sekali! Kita menghitung dari kanan ke kiri.",
    wrong_feedback:
      "Bukan, itu tidak benar. Kita menghitung dari kanan ke kiri.",
  },
  ones_borrow: {
    question: "Apa yang harus kita lakukan?",
    options: [
      "Tulis 0 dan lanjutkan",
      "Pinjam dari nilai tempat puluhan",
      "Kurangi {{o2}} dari {{o1}} saja",
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
    options: ["{{o3x}}", "{{o3x_plus}}", "{{o3x_minus}}"],
    answer_index: 0,
    correct_feedback: "Itu benar.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  tens_borrow: {
    question: "Apa yang harus kita lakukan?",
    options: [
      "Pinjam dari nilai tempat ratusan",
      "Kurangi {{t2}}0 dari {{t1}}0",
      "Abaikan dan lanjutkan",
    ],
    answer_index: 0,
    correct_feedback: "Itu benar.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  num_at_tens: {
    question:
      "Setelah meminjam dari nilai tempat ratusan, angka di nilai tempat puluhan menjadi:",
    options: ["{{tFinal_minus}}0", "{{tFinal}}0", "{{tFinal_plus}}0"],
    answer_index: 1,
    correct_feedback: "Luar biasa!",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  final_add_tens: {
    question: "{{tFinal}}0 - {{t2}}0 =",
    options: ["{{t3x_plus}}", "{{t3x_minus}}", "{{t3x}}"],
    answer_index: 2,
    correct_feedback: "Kerja bagus!",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  hundreds_borrow: {
    question: "Apa yang harus kita lakukan?",
    options: [
      "Pinjam dari nilai tempat ribuan",
      "Kurangi {{h2}}00 dari {{h1}}00",
      "Tidak mungkin",
    ],
    answer_index: 0,
    correct_feedback: "Kamu berhasil!",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  num_at_hundreds: {
    question:
      "Setelah meminjam dari nilai tempat ribuan, angka di nilai tempat ratusan menjadi:",
    options: ["{{hFinal}}00", "{{hFinal_minus}}00", "{{hFinal_plus}}00"],
    answer_index: 0,
    correct_feedback: "Sempurna!",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  final_add_hundreds: {
    question: "{{hFinal}}00 - {{h2}}00 =",
    options: ["{{h3x}}", "{{h3x_plus}}", "{{h3x_minus}}"],
    answer_index: 0,
    correct_feedback: "Itu benar.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  thousands_borrow: {
    question: "Apa yang harus kita lakukan?",
    options: [
      "Pinjam dari nilai tempat puluh ribuan",
      "Mulai dari awal",
      "Tebak jawabannya",
    ],
    answer_index: 0,
    correct_feedback: "Benar!",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  num_at_thousands: {
    question:
      "Setelah meminjam dari nilai tempat puluh ribuan, angka di nilai tempat ribuan menjadi:",
    options: ["{{thFinal_plus}}000", "{{thFinal}}000", "{{thFinal_minus}}000"],
    answer_index: 1,
    correct_feedback: "Luar biasa!",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  final_add_thousands: {
    question: "{{thFinal}}000 - {{th2}}000 =",
    options: ["{{th3x_minus}}", "{{th3x}}", "{{th3x_plus}}"],
    answer_index: 1,
    correct_feedback: "Itu benar.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  final_add_ten_thousands: {
    question: "{{ttFinal}}0000 - {{tt2}}0000 =",
    options: ["{{tt3x}}", "{{tt3x_minus}}", "{{tt3x_plus}}"],
    answer_index: 0,
    correct_feedback: "Itu benar.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
};

const textPoolIndonesian = {
  mcqIn: "Klik pada opsi yang benar.",
  start:
    "Mari kita selesaikan tantangan pengurangan ini. Klik 'Berikutnya' untuk memulai.",
  split_number1:
    "Uraikan bilangan menjadi nilai tempatnya. Ketuk pada bilangan pertama.",
  split_number2:
    "Uraikan bilangan menjadi nilai tempatnya. Ketuk pada bilangan kedua.",
  after_split:
    "Kita telah menguraikan bilangannya dengan benar. Mari kita mulai pengurangan!",
  ones_1:
    "Ingat kita mengurangi berdasarkan nilai tempat. Mari kita kurangi kolom satuan.",
  topLesser_one:
    "{{o1x}} lebih kecil dari {{o2x}}. Kita tidak bisa mengurangi {{o2x}} dari {{o1x}}.",
  split_ones: "Klik {{t1}}0 untuk menguraikannya.",
  splitted_for_ones: "{{t1}}0 diuraikan menjadi {{tCorrect}}0 + 10.",
  enough_ones:
    "Sekarang kita punya cukup untuk mengurangi. Ketuk tombol '-' sekarang.",
  subtracted_ones:
    "Kita telah mengurangi kolom satuan. Klik 'Berikutnya' untuk melanjutkan.",
  ones_mcq1: "Kita tidak bisa mengurangi {{o2x}} dari {{o1x}}.",
  ones_mcq2:
    "Kita punya {{o1}} di tempat satuan dan meminjam 10 dari tempat puluhan.",
  tens_1: "Sekarang mari kita kurangi kolom puluhan. Ketuk tombol '-'.",
  topLesser_ten:
    "{{tCorrect}}0 lebih kecil dari {{t2x}}. Kita tidak bisa mengurangi {{t2x}} dari {{tCorrect}}0.",
  split_tens: "Klik {{h1x}} untuk menguraikannya.",
  splitted_for_tens: "{{h1x}} diuraikan menjadi {{hCorrect}}00 + 100.",
  enough_tens:
    "Sekarang kita punya cukup untuk mengurangi. Ketuk tombol '-' sekarang.",
  subtracted_tens:
    "Kita telah mengurangi kolom puluhan. Klik 'Berikutnya' untuk melanjutkan.",
  tens_mcq1: "Kita tidak bisa mengurangi {{t2x}} dari {{tCorrect}}0.",
  tens_mcq2:
    "Kita punya {{tCorrect}}0 di tempat puluhan dan meminjam 100 dari tempat ratusan.",
  hundreds_1: "Sekarang mari kita kurangi kolom ratusan. Ketuk tombol '-'.",
  topLesser_hundred:
    "{{hCorrect}}00 lebih kecil dari {{h2x}}. Kita tidak bisa mengurangi {{h2x}} dari {{hCorrect}}00.",
  split_hundreds: "Klik {{th1x}} untuk menguraikannya.",
  splitted_for_hundreds: "{{th1x}} diuraikan menjadi {{thCorrect}}000 + 1000.",
  enough_hundreds:
    "Sekarang kita punya cukup untuk mengurangi. Ketuk tombol '-' sekarang.",
  subtracted_hundreds:
    "Kita telah mengurangi kolom ratusan. Klik 'Berikutnya' untuk melanjutkan.",
  hundreds_mcq1: "Kita tidak bisa mengurangi {{h2x}} dari {{hCorrect}}00.",
  hundreds_mcq2:
    "Kita punya {{hCorrect}}00 di tempat ratusan dan meminjam 1000 dari tempat ribuan.",
  thousands_1: "Sekarang mari kita kurangi kolom ribuan. Ketuk tombol '-'.",
  topLesser_thousand:
    "{{thCorrect}}000 lebih kecil dari {{th2x}}. Kita tidak bisa mengurangi {{th2x}} dari {{thCorrect}}000.",
  split_thousands: "Klik {{tt1x}} untuk menguraikannya.",
  splitted_for_thousands:
    "{{tt1x}} diuraikan menjadi {{ttCorrect}}0000 + 10000.",
  enough_thousands:
    "Sekarang kita punya cukup untuk mengurangi. Ketuk tombol '-' sekarang.",
  subtracted_thousands:
    "Kita telah mengurangi kolom ribuan. Klik 'Berikutnya' untuk melanjutkan.",
  thousands_mcq1: "Kita tidak bisa mengurangi {{th2x}} dari {{thCorrect}}000.",
  thousands_mcq2:
    "Kita punya {{thCorrect}}000 di tempat ribuan dan meminjam 10000 dari tempat puluh ribuan.",
  ten_thousands_1:
    "Terakhir, mari kita kurangi kolom puluh ribuan. Ketuk tombol '-'.",
  subtracted_ten_thousands:
    "Kita telah mengurangi kolom puluh ribuan. Klik 'Berikutnya' untuk melihat jawaban akhir.",
  final_summary:
    "Kerja bagus! Kamu telah menyusun jawabannya dengan benar. Jawabannya adalah {{answer}}.",
  combine:
    "Sekarang kita perlu menyusun jawaban dari hasil pengurangan semua kolom. Ketuk pada bagian yang disorot.",
};
const headerArrayEnglish = ["TTh", "Th", "H", "T", "O"];
const headerArrayIndonesian = ["PRi", "Ri", "R", "P", "S"];

const buttonTextsEnglish = {
  next: "Next",
  start_over: "Start Over",
  carry_over: "Carry Over",
  try_new: "Try New",
};

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

const overlayDataEnglish = {
  heading: "Activity Complete!",
  paragraph: `If you want to try again, click on the 'Start Over' button. `,
};
