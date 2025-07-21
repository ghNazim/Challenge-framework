const mcqDataEnglish = {
  ones_place: {
    question: "Which place do we add first?",
    options: ["Tens", "Hundreds", "Ones", "Thousands"],
    answer_index: 2,
    correct_feedback: "Absolutely correct! We go from right to left.",
    wrong_feedback: "No, that's not right. We go from right to left.",
  },
  add_ones: {
    question: "{{o1x}} + {{o2x}} =",
    options: ["{{osumx_minus}}", "{{osumx_plus}}", "{{osumx}}"],
    answer_index: 2,
    correct_feedback: "Well done. ",
    wrong_feedback: "That's not right. Try again.",
  },
  add_tens: {
    question: "{{t1x}} + {{t2x}} {{oOverflowStr}} =",
    options: ["{{tsumx_plus}}", "{{tsumx}}", "{{tsumx_minus}}"],
    answer_index: 1,
    correct_feedback: "That's right.",
    wrong_feedback: "That's not right. Try again.",
  },
  add_hundreds: {
    question: "{{h1x}} + {{h2x}} {{tOverflowStr}} =",
    options: ["{{hsumx_minus}}", "{{hsumx_plus}}", "{{hsumx}}"],
    answer_index: 2,
    correct_feedback: "Awesome!",
    wrong_feedback: "That's not right. Try again.",
  },
  add_thousands: {
    question: "{{th1x}} + {{th2x}} {{hOverflowStr}} =",
    options: ["{{thsumx_minus}}", "{{thsumx_plus}}", "{{thsumx}}"],
    answer_index: 2,
    correct_feedback: "Well done.",
    wrong_feedback: "That's not right. Try again.",
  },
  add_ten_thousands: {
    question: "{{tt1x}} + {{tt2x}} {{thOverflowStr}} =",
    options: ["{{ttsumx}}", "{{ttsumx_plus}}", "{{ttsumx_minus}}"],
    answer_index: 0,
    correct_feedback: "Correct.",
    wrong_feedback: "That's not right. Try again.",
  },
  ones_split: {
    question: "To do a carry over,<br> how should we split {{osumx}}?",
    options: ["9 + {{o3x_plus}}", "11 + {{o3x_minus}}", "10 + {{o3x}}"],
    answer_index: 2,
    correct_feedback: "Awesome.",
    wrong_feedback: "That's not right. Try again.",
  },
  tens_split: {
    question: "To do a carry over,<br> how should we split {{tsumx}}?",
    options: ["90 + {{t3x_plus}}", "110 + {{t3x_minus}}", "100 + {{t3x}}"],
    answer_index: 2,
    correct_feedback: "That's right.",
    wrong_feedback: "That's not right. Try again.",
  },
  hundreds_split: {
    question: "To do a carry over,<br> how should we split {{hsumx}}?",
    options: ["1100 + {{h3x_minus}}", "1000 + {{h3x}}", "900 + {{h3x_plus}}"],
    answer_index: 1,
    correct_feedback: "That's right.",
    wrong_feedback: "That's not right. Try again.",
  },
  thousands_split: {
    question: "To do a carry over,<br> how should we split {{thsumx}}?",
    options: [
      "10000 + {{th3x}}",
      "11000 + {{th3x_minus}}",
      "9000 + {{th3x_plus}}",
    ],
    answer_index: 0,
    correct_feedback: "Perfect.",
    wrong_feedback: "That's not right. Try again.",
  },
};
const textPoolEnglish = {
  mcqIn: "Click on the correct option.",
  start: "Let's learn long column addition. Click 'Next' to start.",
  split_number1:
    "Split the number into its place values. Tap on the first number.",
  split_number2:
    "Split the number into its place values. Tap on the second number.",
  after_split:
    "We have decomposed the numbers correctly. Let's start addition!",
  ones_1: "Let's add the numbers in the ones column. Tap on the '+' button.",
  ones_carryover:
    "Oh! We have more than 9 in ones place. We need to do a carry over.",
  ones_carryover2:
    "Great! we have split {{osumx}} correctly. Click on 'Carry Over'.",
  ones_complete:
    "We have completed adding ones. Let's add the numbers in the tens column now.",
  tens_1: "To add the numbers in the tens column, tap on the '+' button.",
  tens_carryover:
    "Oh! we have more than 90 in the tens place. We need to do a carry over.",
  tens_carryover2:
    "Great! We have split {{tsumx}} correctly. Click on 'Next' to carry over.",
  tens_complete:
    "We have completed adding tens. Let's add the numbers in the hundreds column now.",

  hundreds_1:
    "To add the numbers in the hundreds column, tap on the '+' button.",
  hundreds_carryover:
    "Uh oh! We have more than 900 in the hundreds place. Time to do a carry over.",
  hundreds_carryover2:
    "You have split {{hsumx}} correctly. Click 'Next' to continue.",
  hundreds_complete:
    "We have completed adding hundreds. Let's move to the thousands column now.",

  thousands_1:
    "To add the numbers in the thousands column, tap on the '+' button.",
  thousands_carryover:
    "Uh oh! We have more than 9000 in the thousands place. Let's do a carry over.",
  thousands_carryover2: "Perfect Split. Click 'Next' to carry over.",
  thousands_complete:
    "We have completed adding the thousands. Let's move to the last column now.",

  ten_thousands_1:
    "Finally, let's add the numbers in the ten thousands column. Tap on the '+' button.",
  ten_thousands_complete:
    "We have completed adding the numbers in all the columns.",
  final_summary:
    "Good work! You have composed the answer correctly. The answer is {{answer}}.",
  combine:
    "Now we need to compose the answer from results of all column additions. Tap on the highlighted part.",
  mcq_one:
    "{{osumx}} > 9,<br>We need to split {{osumx}} to do a carry over of extra 10s to the tens place. ",
  mcq_ten:
    "{{tsumx}} > 90,<br>We need to split {{tsumx}} to do a carry over of extra 100s to the hundreds place. ",
  mcq_hundred:
    "{{hsumx}} > 900,<br>We need to split {{hsumx}} to do a carry over of extra 1000s to the thousands place. ",
  mcq_thousand:
    "{{thsumx}} > 9000,<br>We need to split {{thsumx}} to do a carry over of extra 10000s to the ten thousands place. ",
};
const mcqDataIndonesian = {
  ones_place: {
    question: "Tempat mana yang kita jumlahkan terlebih dahulu?",
    options: ["Puluhan", "Ratusan", "Satuan", "Ribuan"],
    answer_index: 2,
    correct_feedback: "Benar sekali! Kita mulai dari kanan ke kiri.",
    wrong_feedback: "Tidak, itu tidak benar. Kita mulai dari kanan ke kiri.",
  },
  add_ones: {
    question: "{{o1x}} + {{o2x}} =",
    options: ["{{osumx_minus}}", "{{osumx_plus}}", "{{osumx}}"],
    answer_index: 2,
    correct_feedback: "Kerja bagus.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  add_tens: {
    question: "{{t1x}} + {{t2x}} {{oOverflowStr}} =",
    options: ["{{tsumx_plus}}", "{{tsumx}}", "{{tsumx_minus}}"],
    answer_index: 1,
    correct_feedback: "Benar.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  add_hundreds: {
    question: "{{h1x}} + {{h2x}} {{tOverflowStr}} =",
    options: ["{{hsumx_minus}}", "{{hsumx_plus}}", "{{hsumx}}"],
    answer_index: 2,
    correct_feedback: "Luar biasa!",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  add_thousands: {
    question: "{{th1x}} + {{th2x}} {{hOverflowStr}} =",
    options: ["{{thsumx_minus}}", "{{thsumx_plus}}", "{{thsumx}}"],
    answer_index: 2,
    correct_feedback: "Kerja bagus.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  add_ten_thousands: {
    question: "{{tt1x}} + {{tt2x}} {{thOverflowStr}} =",
    options: ["{{ttsumx}}", "{{ttsumx_plus}}", "{{ttsumx_minus}}"],
    answer_index: 0,
    correct_feedback: "Benar.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  ones_split: {
    question:
      "Untuk melakukan pemindahan,<br> bagaimana kita harus memecah {{osumx}}?",
    options: ["9 + {{o3x_plus}}", "11 + {{o3x_minus}}", "10 + {{o3x}}"],
    answer_index: 2,
    correct_feedback: "Luar biasa.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  tens_split: {
    question:
      "Untuk melakukan pemindahan,<br> bagaimana kita harus memecah {{tsumx}}?",
    options: ["90 + {{t3x_plus}}", "110 + {{t3x_minus}}", "100 + {{t3x}}"],
    answer_index: 2,
    correct_feedback: "Benar.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  hundreds_split: {
    question:
      "Untuk melakukan pemindahan,<br> bagaimana kita harus memecah {{hsumx}}?",
    options: ["1100 + {{h3x_minus}}", "1000 + {{h3x}}", "900 + {{h3x_plus}}"],
    answer_index: 1,
    correct_feedback: "Benar.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
  thousands_split: {
    question:
      "Untuk melakukan pemindahan,<br> bagaimana kita harus memecah {{thsumx}}?",
    options: [
      "10000 + {{th3x}}",
      "11000 + {{th3x_minus}}",
      "9000 + {{th3x_plus}}",
    ],
    answer_index: 0,
    correct_feedback: "Sempurna.",
    wrong_feedback: "Itu tidak benar. Coba lagi.",
  },
};

const textPoolIndonesian = {
  mcqIn: "Klik pada jawaban yang benar.",
  start: "Ayo belajar penjumlahan panjang. Klik 'Berikutnya' untuk mulai.",
  split_number1: "Pecah angka menjadi nilai tempatnya. Ketuk angka pertama.",
  split_number2: "Pecah angka menjadi nilai tempatnya. Ketuk angka kedua.",
  after_split: "Kita telah memecah angka dengan benar. Ayo mulai menjumlahkan!",
  ones_1: "Mari kita jumlahkan angka di kolom satuan. Ketuk tombol '+'.",
  ones_carryover:
    "Oh! Hasilnya lebih dari 9 di tempat satuan. Kita harus melakukan pemindahan.",
  ones_carryover2:
    "Bagus! Kita telah memecah {{osumx}} dengan benar. Klik 'Pemindahan'.",
  ones_complete:
    "Kita telah selesai menjumlahkan satuan. Sekarang mari kita tambahkan angka di kolom puluhan.",
  tens_1: "Untuk menjumlahkan angka di kolom puluhan, ketuk tombol '+'.",
  tens_carryover:
    "Oh! Hasilnya lebih dari 90 di tempat puluhan. Kita harus melakukan pemindahan.",
  tens_carryover2:
    "Bagus! Kita telah memecah {{tsumx}} dengan benar. Klik 'Berikutnya' untuk melakukan pemindahan.",
  tens_complete:
    "Kita telah selesai menjumlahkan puluhan. Sekarang mari kita tambahkan angka di kolom ratusan.",
  hundreds_1: "Untuk menjumlahkan angka di kolom ratusan, ketuk tombol '+'.",
  hundreds_carryover:
    "Ups! Hasilnya lebih dari 900 di tempat ratusan. Saatnya melakukan pemindahan.",
  hundreds_carryover2:
    "Kamu telah memecah {{hsumx}} dengan benar. Klik 'Berikutnya' untuk melanjutkan.",
  hundreds_complete:
    "Kita telah selesai menjumlahkan ratusan. Sekarang kita lanjut ke kolom ribuan.",
  thousands_1: "Untuk menjumlahkan angka di kolom ribuan, ketuk tombol '+'.",
  thousands_carryover:
    "Ups! Hasilnya lebih dari 9000 di tempat ribuan. Ayo lakukan pemindahan.",
  thousands_carryover2:
    "Pecahan sempurna. Klik 'Berikutnya' untuk melakukan pemindahan.",
  thousands_complete:
    "Kita telah selesai menjumlahkan ribuan. Sekarang mari lanjut ke kolom terakhir.",
  ten_thousands_1:
    "Akhirnya, mari kita jumlahkan angka di kolom puluh ribuan. Ketuk tombol '+'.",
  ten_thousands_complete: "Kita telah selesai menjumlahkan semua kolom.",
  final_summary:
    "Kerja bagus! Kamu telah menyusun jawabannya dengan benar. Jawabannya adalah {{answer}}.",
  combine:
    "Sekarang kita perlu menyusun jawaban dari hasil penjumlahan tiap kolom. Ketuk bagian yang disorot.",
  mcq_one:
    "{{osumx}} > 9,<br>Kita perlu memecah {{osumx}} untuk memindahkan ke tempat puluhan.",
  mcq_ten:
    "{{tsumx}} > 90,<br>Kita perlu memecah {{tsumx}} untuk memindahkan ke tempat ratusan.",
  mcq_hundred:
    "{{hsumx}} > 900,<br>Kita perlu memecah {{hsumx}} untuk memindahkan ke tempat ribuan.",
  mcq_thousand:
    "{{thsumx}} > 9000,<br>Kita perlu memecah {{thsumx}} untuk memindahkan ke tempat puluh ribuan.",
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
