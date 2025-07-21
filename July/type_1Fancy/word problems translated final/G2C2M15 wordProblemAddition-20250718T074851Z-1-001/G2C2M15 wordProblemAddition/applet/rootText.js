const leftInstructionsEnglish = {};
const speechBubbleDataEnglish = {
  hint_1:
    "There are some words and phrases like 'difference', 'left', 'in all', 'altogether', etc., that tell us whether we need to add or subtract.",
  hint_2:
    "Some words that indicate addition are 'total', 'in all', 'altogether', etc.",
  stage_1_prompt:
    "Hey! <br>Let’s read the story out loud.<br><br>Use this information to solve the upcoming question.<br>Click 'Next'.",
  initial_prompt:
    "Hey!<br> Let's read the word problem out loud.<br><br>Can you tell whether you need to add or subtract to find the answer?",
  mcq_1_feedback_incorrect:
    "This question does not require subtraction.<br><br>Try again.",
  mcq_1_feedback_correct:
    "Well done!<br><br>Now let's see which part of the question hinted that addition needs to be done here.",
  mcq_2_initial:
    "Read the full story again.<br><br>Find the word which indicates that addition is required.",
  mcq_2_feedback_incorrect:
    "Oh, that's not correct.<br><br>Try to find the clue word that tells us to do addition here.",
  expression_prompt:
    "Turn this story question into a mathematical expression.<br><br>Add to find the answer and check.",

  problem_1: {
    mcq_2_feedback_correct:
      'Good! You got it right.<br><br>The word "total" indicates that the numbers should be added in this question.<br>Now, let\'s solve this question.<br>Click "Next".',
    expression_hint:
      "Let's look at the story again.<br><br>Can you find the numbers that need to be added?<br><br>5 butterflies on the flower. 4 butterflies on the leaves. Use this information.",
    final_summary:
      "You solved the question correctly.<br><br> There are 5 + 4 = 9 butterflies in total.<br><br> Let's solve another story. Click 'Next'.",
  },

  problem_2: {
    mcq_2_feedback_correct:
      'Good! You got it right.<br><br>The word "altogether" indicates that the numbers should be added in this question.<br><br>Now, let\'s solve this question.<br>Click "Next".',
    expression_hint:
      "Let's look at the story again. Can you find the numbers that need to be added?<br><br>Lina has 7 red balloons.She got 5 more balloons.<br><br> Use this information.",
    final_summary:
      "You solved the question correctly.<br><br> Lina now has 7 + 5 = 12 balloons in total.<br><br> Let's solve another story. Click 'Next'.",
  },

  problem_3: {
    mcq_2_feedback_correct:
      'Good! You got it right.<br><br>The phrase "in all" indicates that the numbers should be added in this question.<br>Now, let\'s solve this question. Click "Next".',
    expression_hint:
      "Let's look at the story again. Can you find the numbers that need to be added?<br><br>Ryan has 9 toy cars. He buys 4 more toy cars.<br><br> Use this information.",
    final_summary:
      "You solved the question correctly.<br><br> Ryan now has 9 + 4 = 13 cars in total.<br><br> Click 'Next'.",
  },
};

const questionDataEnglish = {
  expression: "Write the mathematical expression and click on 'Check'.",

  problem_1: {
    problem_statement:
      "There are 5 butterflies on the flower. There are 4 butterflies on the leaves. How many butterflies are there in total?",
    mcq_1: {
      question: "Should we add or subtract to solve this question?",
      options: ["Add", "Subtract"],
      correct_answer: 0,
      hint: "There are some words and phrases like 'difference', 'left', 'in all', 'altogether', etc., that tell us whether we need to add or subtract.",
    },
    mcq_2: {
      question: "Which of these words refers to addition?",
      options: ["many", "total", "there"],
      correct_answer: 1,
      hint: "Some words that indicate addition are 'total', 'in all', 'altogether', etc.",
    },
    solution: "There are 5 + 4 = 9 butterflies in total.",
    correct_answer: ["5", "+", "4", "=", "9"],
  },

  problem_2: {
    problem_statement:
      "Lina has 7 red balloons. Her friend gives her 5 more green balloons. How many balloons does Lina have altogether?",
    mcq_1: {
      question: "Should we add or subtract to solve this question?",
      options: ["Add", "Subtract"],
      correct_answer: 0,
      hint: "There are some words and phrases like 'difference', 'left', 'in all', 'altogether', etc., that tell us whether we need to add or subtract.",
    },
    mcq_2: {
      question: "Which of these words refers to addition?",
      options: ["balloons", "altogether", "green"],
      correct_answer: 1,
      hint: "Some words that indicate addition are 'total', 'in all', 'altogether', etc.",
    },
    solution: "Lina now has 7 + 5 = 12 balloons in total.",
    correct_answer: ["7", "+", "5", "=", "12"],
  },

  problem_3: {
    problem_statement:
      "Ryan has 9 toy cars. He buys 4 more toy cars. How many toy cars does he have in all?",
    mcq_1: {
      question: "Should we add or subtract to solve this question?",
      options: ["Add", "Subtract"],
      correct_answer: 0,
      hint: "There are some words and phrases like 'difference', 'left', 'in all', 'altogether', etc., that tell us whether we need to add or subtract.",
    },
    mcq_2: {
      question: "Which of these words refers to addition?",
      options: ["buys", "in all", "cars"],
      correct_answer: 1,
      hint: "Some words that indicate addition are 'total', 'in all', 'altogether', etc.",
    },
    solution: "Ryan now has 9 + 4 = 13 cars in total.",
    correct_answer: ["9", "+", "4", "=", "13"],
  },
};

const speechBubbleDataIndonesian = {
  hint_1:
    "Ada beberapa kata dan frasa seperti 'selisih', 'tersisa', 'jumlah', 'semuanya', dll., yang memberi tahu kita apakah kita perlu menjumlahkan atau mengurangkan.",
  hint_2:
    "Beberapa kata yang menunjukkan penjumlahan adalah 'jumlah', 'semuanya', 'total', dll.",
  stage_1_prompt:
    "Hai! <br>Ayo kita baca ceritanya dengan suara keras.<br><br>Gunakan informasi ini untuk menyelesaikan soal berikutnya.<br>Klik 'Berikutnya'.",
  initial_prompt:
    "Hai!<br> Ayo kita baca soal cerita ini dengan suara keras.<br><br>Bisa kamu tentukan apakah kita perlu menjumlahkan atau mengurangkan untuk menemukan jawabannya?",
  mcq_1_feedback_incorrect:
    "Soal ini tidak memerlukan pengurangan.<br><br>Coba lagi.",
  mcq_1_feedback_correct:
    "Bagus sekali!<br><br>Sekarang mari kita lihat bagian mana dari soal yang menunjukkan bahwa kita perlu menjumlahkan.",
  mcq_2_initial:
    "Baca kembali cerita lengkapnya.<br><br>Temukan kata yang menunjukkan bahwa kita perlu menjumlahkan.",
  mcq_2_feedback_incorrect:
    "Oh, itu kurang tepat.<br><br>Coba cari kata petunjuk yang memberi tahu kita untuk menjumlahkan.",
  expression_prompt:
    "Ubah soal cerita ini menjadi sebuah ekspresi matematika.<br><br>Jumlahkan untuk menemukan jawabannya dan periksa.",

  problem_1: {
    mcq_2_feedback_correct:
      'Bagus! Kamu benar.<br><br>Kata "jumlah" menunjukkan bahwa angka-angka harus dijumlahkan dalam soal ini.<br>Sekarang, mari kita selesaikan soalnya.<br>Klik "Berikutnya".',
    expression_hint:
      "Mari kita lihat kembali ceritanya.<br><br>Bisa kamu temukan angka yang perlu dijumlahkan?<br><br>5 kupu-kupu di bunga. 4 kupu-kupu di daun. Gunakan informasi ini.",
    final_summary:
      "Kamu berhasil menyelesaikan soal ini dengan benar.<br><br> Ada 5 + 4 = 9 kupu-kupu secara keseluruhan.<br><br> Ayo selesaikan cerita lain. Klik 'Berikutnya'.",
  },

  problem_2: {
    mcq_2_feedback_correct:
      'Bagus! Kamu benar.<br><br>Kata "semuanya" menunjukkan bahwa angka-angka harus dijumlahkan dalam soal ini.<br><br>Sekarang, mari kita selesaikan soalnya.<br>Klik "Berikutnya".',
    expression_hint:
      "Mari kita lihat kembali ceritanya. Bisa kamu temukan angka yang perlu dijumlahkan?<br><br>Lina memiliki 7 balon merah. Ia mendapatkan 5 balon lagi.<br><br> Gunakan informasi ini.",
    final_summary:
      "Kamu berhasil menyelesaikan soal ini dengan benar.<br><br> Lina sekarang memiliki 7 + 5 = 12 balon secara keseluruhan.<br><br> Ayo selesaikan cerita lain. Klik 'Berikutnya'.",
  },

  problem_3: {
    mcq_2_feedback_correct:
      'Bagus! Kamu benar.<br><br>Frasa "semuanya" menunjukkan bahwa angka-angka harus dijumlahkan dalam soal ini.<br>Sekarang, mari kita selesaikan soalnya. Klik "Berikutnya".',
    expression_hint:
      "Mari kita lihat kembali ceritanya. Bisa kamu temukan angka yang perlu dijumlahkan?<br><br>Ryan memiliki 9 mobil mainan. Ia membeli 4 mobil mainan lagi.<br><br> Gunakan informasi ini.",
    final_summary:
      "Kamu berhasil menyelesaikan soal ini dengan benar.<br><br> Ryan sekarang memiliki 9 + 4 = 13 mobil mainan secara keseluruhan.<br><br> Klik 'Berikutnya'.",
  },
};

const questionDataIndonesian = {
  expression: "Tulis ekspresi matematikanya dan klik 'Periksa'.",

  problem_1: {
    problem_statement:
      "Ada 5 kupu-kupu di bunga. Ada 4 kupu-kupu di daun. Berapa jumlah semua kupu-kupu?",
    mcq_1: {
      question:
        "Apakah kita harus menjumlahkan atau mengurangkan untuk menyelesaikan soal ini?",
      options: ["Menjumlahkan", "Mengurangkan"],
      correct_answer: 0,
      hint: "Ada beberapa kata dan frasa seperti 'selisih', 'tersisa', 'jumlah', 'semuanya', dll., yang memberi tahu kita apakah kita perlu menjumlahkan atau mengurangkan.",
    },
    mcq_2: {
      question: "Kata mana di bawah ini yang menunjukkan penjumlahan?",
      options: ["banyak", "jumlah", "ada"],
      correct_answer: 1,
      hint: "Beberapa kata yang menunjukkan penjumlahan adalah 'jumlah', 'semuanya', 'total', dll.",
    },
    solution: "Ada 5 + 4 = 9 kupu-kupu secara keseluruhan.",
    correct_answer: ["5", "+", "4", "=", "9"],
  },

  problem_2: {
    problem_statement:
      "Lina memiliki 7 balon merah. Temannya memberinya 5 balon hijau lagi. Berapa balon yang dimiliki Lina semuanya?",
    mcq_1: {
      question:
        "Apakah kita harus menjumlahkan atau mengurangkan untuk menyelesaikan soal ini?",
      options: ["Menjumlahkan", "Mengurangkan"],
      correct_answer: 0,
      hint: "Ada beberapa kata dan frasa seperti 'selisih', 'tersisa', 'jumlah', 'semuanya', dll., yang memberi tahu kita apakah kita perlu menjumlahkan atau mengurangkan.",
    },
    mcq_2: {
      question: "Kata mana di bawah ini yang menunjukkan penjumlahan?",
      options: ["balon", "semuanya", "hijau"],
      correct_answer: 1,
      hint: "Beberapa kata yang menunjukkan penjumlahan adalah 'jumlah', 'semuanya', 'total', dll.",
    },
    solution: "Lina sekarang memiliki 7 + 5 = 12 balon secara keseluruhan.",
    correct_answer: ["7", "+", "5", "=", "12"],
  },

  problem_3: {
    problem_statement:
      "Ryan memiliki 9 mobil mainan. Ia membeli 4 mobil mainan lagi. Berapa mobil mainan yang dimilikinya semuanya?",
    mcq_1: {
      question:
        "Apakah kita harus menjumlahkan atau mengurangkan untuk menyelesaikan soal ini?",
      options: ["Menjumlahkan", "Mengurangkan"],
      correct_answer: 0,
      hint: "Ada beberapa kata dan frasa seperti 'selisih', 'tersisa', 'jumlah', 'semuanya', dll., yang memberi tahu kita apakah kita perlu menjumlahkan atau mengurangkan.",
    },
    mcq_2: {
      question: "Kata mana di bawah ini yang menunjukkan penjumlahan?",
      options: ["membeli", "semuanya", "mobil"],
      correct_answer: 1,
      hint: "Beberapa kata yang menunjukkan penjumlahan adalah 'jumlah', 'semuanya', 'total', dll.",
    },
    solution:
      "Ryan sekarang memiliki 9 + 4 = 13 mobil mainan secara keseluruhan.",
    correct_answer: ["9", "+", "4", "=", "13"],
  },
};

const leftInstructionsIndonesian = {};

const buttonTextsEnglish = {
  next: "Next",
  start_over: "Start Over",
  previous: "Previous",
  submit: "Submit",
  proceed: "Proceed",
  hint: "Hint",
  check: "Check",
};

const buttonTextsIndonesian = {
  next: "Berikutnya",
  start_over: "Mulai Lagi",
  previous: "Sebelumnya",
  submit: "Kirim",
  proceed: "Lanjutkan",
  hint: "Petunjuk",
  check: "Periksa",
};
const overlayDataIndonesian = {
  heading: "Aktivitas Selesai!",
  paragraph: `Jika kamu ingin mencoba lagi, klik tombol 'Mulai Lagi'.`,
};

const overlayDataEnglish = {
  heading: "Activity Complete!",
  paragraph: `If you want to try again, click on the 'Start Over' button. `,
};
