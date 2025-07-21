const leftInstructionsEnglish = {};
const speechBubbleDataEnglish = {
  hint_1_addition:
    "There are some words and phrases like 'difference', 'left', 'in all', 'altogether', etc., that tell us whether we need to add or subtract.",
  hint_2_addition:
    "Some words that indicate addition are 'total', 'in all', 'altogether', etc.",
  stage_1_prompt_addition:
    "Hey! <br>Let’s read the story out loud.<br><br>Use this information to solve the upcoming question.<br>Click 'Next'.",
  initial_prompt_addition:
    "Hey!<br> Let's read the word problem out loud.<br><br>Can you tell whether you need to add or subtract to find the answer?",
  mcq_1_feedback_incorrect_addition:
    "This question does not require subtraction.<br><br>Try again.",
  mcq_1_feedback_correct_addition:
    "Well done!<br><br>Now let's see which part of the question hinted that addition needs to be done here.",
  mcq_2_initial_addition:
    "Read the full story and the question again.<br><br>Find the word which indicates that addition is required.",
  mcq_2_feedback_incorrect_addition:
    "Oh, that's not correct.<br><br>Try to find the clue word that tells us to do addition here.",
  expression_prompt_addition:
    "Turn this story question into a mathematical expression.<br><br>Add to find the answer and check.",
  //ADDITION END
  hint_1_subtraction:
    "There are some words and phrases like 'difference', 'left', 'in all', 'altogether', 'how many more', 'remain', etc., that tell whether we need to add or subtract.",
  hint_2_subtraction:
    "Some words and phrases that indicate subtraction are 'left', 'less', 'taken away', 'remain', 'how many more', etc.",
  stage_1_prompt_subtraction:
    "Hey!!<br>Let’s read the word problem out loud.<br><br>Use this information to solve the upcoming question.<br>Click 'Next'.",
  initial_prompt_subtraction:
    "Hey!!<br>Let’s read the word problem out loud.<br><br>Can you tell whether you need to add or subtract to find the answer?",
  mcq_1_feedback_incorrect_subtraction:
    "This question does not require addition.<br><br>Try again.",
  mcq_1_feedback_correct_subtraction:
    "Well done.<br><br>Now let’s see which part of the question hinted that subtraction needs to be done here.",
  mcq_2_initial_subtraction:
    "Read the full story and the question again.<br><br>Find the word which indicates that subtraction is required.",
  mcq_2_feedback_incorrect_subtraction:
    "Ohh, that’s not correct.<br><br>Try to find the clue word that tells us to do subtraction here.",
  expression_prompt_subtraction:
    "Set this story question into a mathematical expression.<br><br>Write the expression and click 'Check'.",
  //SUBTRACTION END
  problem_1: {
    mcq_2_feedback_correct_subtraction:
      'Good.. You got it right.<br><br>The word "less" indicates that numbers should be subtracted in this question.<br><br>Now, let\'s solve this question.<br>Click "Next".',
    expression_hint:
      "Let's look at the story again. Can you find the numbers that need to be subtracted?<br><br>Tika has 12 donuts. Malosi has 5 donuts less than Tika.<br><br>Use this information.",
    final_summary:
      "Well done.<br><br>Malosi has 7 donuts.<br><br>Let's solve the next part. Click 'Next'.",
  },

  problem_2: {
    mcq_2_feedback_correct_addition:
      'Good.. You got it right.<br><br>The word "total" indicates that numbers should be added in this question.<br><br>Now, let\'s solve this question.<br>Click "Next".',
    expression_hint:
      "Let's look at the story again. Can you find the numbers that need to be added?<br><br>Tika has 12 donuts. We found that Malosi has 7 donuts.<br><br>Use this information.",
    final_summary:
      "Well done.<br><br>Tika and Malosi have 19 donuts in total.<br><br>Let's solve another story. Click 'Next'.",
  },

  problem_3: {
    mcq_2_feedback_correct_subtraction:
      'Good.. You got it right.<br><br>The word "less" indicates that numbers should be subtracted in this question.<br><br>Now, let\'s solve this question.<br>Click "Next".',
    expression_hint:
      "Let's look at the story again. Can you find the numbers that need to be subtracted?<br><br>Lili has 8 dolls. Tika has 5 dolls.<br><br>Use this information.",
    final_summary:
      "Well done.<br><br>Lili has 3 more dolls than Tika.<br><br>Let's solve the next part. Click 'Next'.",
  },

  problem_4: {
    mcq_2_feedback_correct_addition:
      'Good.. You got it right.<br><br>The word "total" indicates that numbers should be added in this question.<br><br>Now, let\'s solve this question.<br>Click "Next".',
    expression_hint:
      "Let's look at the story again. Can you find the numbers that need to be added?<br><br>Tika has 5 dolls and Kira has 7 dolls.<br><br>Use this information.",
    final_summary:
      "Well done.<br><br>Tika and Kira have 12 dolls in total.<br><br>Let's solve another story. Click 'Next'.",
  },
};

const questionDataEnglish = {
  expression: "Write the mathematical expression and click on 'Check'.",

  problem_1: {
    problem_statement:
      "Tika has 12 donuts. Malosi has 5 donuts less than that Tika has.",
    problem_mid: "How many donuts does Malosi have?",
    highlights: [
      { text: "donuts", place: "bottom" },
      { text: "less", place: "top" },
      { text: "have", place: "bottom" },
    ],
    mcq_1: {
      question: "Should we Add or Subtract to solve this question?",
      options: ["Add", "Subtract"],
      correct_answer: 1,
      hint: "There are some words and phrases like difference, left, in all, altogether etc. that tell whether we need to add or subtract.",
    },
    mcq_2: {
      question: "Which of these words here refer to Subtraction?",
      options: ["donuts", "less", "have"],
      correct_answer: 1,
      hint: "Some words that indicate SUBTRACTION are left, less, taken away etc.",
    },
    solution: "Malosi has 12 - 5 = 7 donuts.",
    correct_answer: ["12", "-", "5", "=", "7"],
  },
  problem_2: {
    problem_statement:
      "Tika has 12 donuts. Malosi has 5 donuts less than that Tika has. Earlier we found by subtraction that Malosi has 7 donuts.",
    problem_mid: "How many donuts does Tika and Malosi have in total?",
    highlights: [
      { text: "donuts", place: "bottom" },
      { text: "Tika", place: "bottom" },
      { text: "total", place: "bottom" },
    ],
    mcq_1: {
      question: "Should we Add or Subtract to solve this question?",
      options: ["Add", "Subtract"],
      correct_answer: 0,
      hint: "There are some words and phrases like difference, left, in all, altogether etc. that tell whether we need to add or subtract.",
    },
    mcq_2: {
      question: "Which of these words here refer to addition?",
      options: ["donuts", "Tika", "total"],
      correct_answer: 2,
      hint: "Some words that indicate ADDITION are total, in all, altogether etc.",
    },
    solution: "Tika and Malosi have 12 + 7 = 19 donuts in total.",
    correct_answer: ["12", "+", "7", "=", "19"],
  },
  problem_3: {
    problem_statement:
      "Tika, Kira and Lili are playing with dolls. Tika brought 5 dolls. Kira brought 7 dolls. Lili brought 8 dolls.",
    problem_mid: "How many less dolls does Tika has than Lili?",
    highlights: [
      { text: "less", place: "bottom" },
      { text: "brought", place: "top" },
      { text: "playing", place: "top" },
    ],
    mcq_1: {
      question: "Should we Add or Subtract to solve this question?",
      options: ["Add", "Subtract"],
      correct_answer: 1,
      hint: "There are some words and phrases like less, left, total, in all, altogether etc. that tell whether we need to add or subtract.",
    },
    mcq_2: {
      question: "Which of these words here refer to Subtraction?",
      options: ["less", "brought", "playing"],
      correct_answer: 0,
      hint: "Some words that indicate SUBTRACTION are left, less, taken away etc.",
    },
    solution: "Lili has 8 - 5 = 3 more dolls than Tika.",
    correct_answer: ["8", "-", "5", "=", "3"],
  },
  problem_4: {
    problem_statement:
      "Tika, Kira and Lili are playing with dolls. Tika brought 5 dolls. Kira brought 7 dolls. Lili brought 8 dolls.",
    problem_mid: "How many dolls does Tika and Kira have in total?",
    highlights: [
      { text: "dolls", place: "bottom" },
      { text: "how", place: "bottom" },
      { text: "total", place: "bottom" },
    ],
    mcq_1: {
      question: "Should we Add or Subtract to solve this question?",
      options: ["Add", "Subtract"],
      correct_answer: 0,
      hint: "There are some words and phrases like less, left, total, in all, altogether etc. that tell whether we need to add or subtract.",
    },
    mcq_2: {
      question: "Which of these words here refer to addition?",
      options: ["dolls", "how", "total"],
      correct_answer: 2,
      hint: "Some words that indicate ADDITION are total, in all, altogether etc.",
    },
    solution: "Tika and Kira have 5 + 7 = 12 dolls in total.",
    correct_answer: ["5", "+", "7", "=", "12"],
  },
};
const speechBubbleDataIndonesian = {
  // PENJUMLAHAN
  hint_1_addition:
    "Ada beberapa kata dan frasa seperti 'selisih', 'tersisa', 'jumlah', 'semuanya', dll., yang menunjukkan apakah kita perlu menjumlahkan atau mengurangkan.",
  hint_2_addition:
    "Beberapa kata yang menunjukkan penjumlahan adalah 'total', 'jumlah', 'semuanya', dll.",
  stage_1_prompt_addition:
    "Hai! <br>Ayo kita baca ceritanya bersama-sama.<br><br>Gunakan informasi ini untuk menyelesaikan soal berikutnya.<br>Klik 'Berikutnya'.",
  initial_prompt_addition:
    "Hai!<br> Ayo kita baca soal cerita ini bersama-sama.<br><br>Bisa kamu tentukan apakah kita perlu menjumlahkan atau mengurangkan untuk menemukan jawabannya?",
  mcq_1_feedback_incorrect_addition:
    "Soal ini tidak memerlukan pengurangan.<br><br>Coba lagi.",
  mcq_1_feedback_correct_addition:
    "Bagus sekali!<br><br>Sekarang, mari kita lihat bagian mana dari soal yang menunjukkan bahwa penjumlahan diperlukan.",
  mcq_2_initial_addition:
    "Baca kembali cerita dan pertanyaannya.<br><br>Temukan kata yang menunjukkan bahwa penjumlahan diperlukan.",
  mcq_2_feedback_incorrect_addition:
    "Oh, belum tepat.<br><br>Coba temukan kata petunjuk yang menunjukkan bahwa kita perlu menjumlahkan.",
  expression_prompt_addition:
    "Ubah soal cerita ini menjadi sebuah ekspresi matematika.<br><br>Jumlahkan untuk mendapatkan jawabannya dan klik 'Periksa'.",

  // PENGURANGAN
  hint_1_subtraction:
    "Ada beberapa kata dan frasa seperti 'selisih', 'tersisa', 'jumlah', 'semuanya', 'berapa lebih banyak', 'sisa', dll., yang menunjukkan apakah kita perlu menjumlahkan atau mengurangkan.",
  hint_2_subtraction:
    "Beberapa kata dan frasa yang menunjukkan pengurangan adalah 'tersisa', 'lebih sedikit', 'diambil', 'sisa', 'berapa lebih banyak', dll.",
  stage_1_prompt_subtraction:
    "Hai!!<br>Ayo kita baca soal cerita ini bersama-sama.<br><br>Gunakan informasi ini untuk menyelesaikan soal berikutnya.<br>Klik 'Berikutnya'.",
  initial_prompt_subtraction:
    "Hai!!<br>Ayo kita baca soal cerita ini bersama-sama.<br><br>Bisa kamu tentukan apakah kita perlu menjumlahkan atau mengurangkan untuk menemukan jawabannya?",
  mcq_1_feedback_incorrect_subtraction:
    "Soal ini tidak memerlukan penjumlahan.<br><br>Coba lagi.",
  mcq_1_feedback_correct_subtraction:
    "Bagus!<br><br>Sekarang mari kita lihat bagian mana dari soal yang menunjukkan bahwa pengurangan diperlukan.",
  mcq_2_initial_subtraction:
    "Baca kembali cerita dan pertanyaannya.<br><br>Temukan kata yang menunjukkan bahwa pengurangan diperlukan.",
  mcq_2_feedback_incorrect_subtraction:
    "Oh, itu belum benar.<br><br>Coba cari kata petunjuk yang menunjukkan kita harus mengurangkan.",
  expression_prompt_subtraction:
    "Ubah soal cerita ini menjadi ekspresi matematika.<br><br>Tulis ekspresinya dan klik 'Periksa'.",

  // MASALAH
  problem_1: {
    mcq_2_feedback_correct_subtraction:
      'Bagus.. Kamu benar.<br><br>Kata "lebih sedikit" menunjukkan bahwa angka harus dikurangkan dalam soal ini.<br><br>Sekarang, mari kita selesaikan soal ini.<br>Klik "Berikutnya".',
    expression_hint:
      "Mari kita lihat lagi ceritanya. Bisa kamu temukan angka-angka yang perlu dikurangkan?<br><br>Tika memiliki 12 donat. Malosi memiliki 5 donat lebih sedikit dari Tika.<br><br>Gunakan informasi ini.",
    final_summary:
      "Bagus!<br><br>Malosi memiliki 7 donat.<br><br>Ayo selesaikan bagian berikutnya. Klik 'Berikutnya'.",
  },

  problem_2: {
    mcq_2_feedback_correct_addition:
      'Bagus.. Kamu benar.<br><br>Kata "total" menunjukkan bahwa angka-angka harus dijumlahkan dalam soal ini.<br><br>Sekarang, mari kita selesaikan soal ini.<br>Klik "Berikutnya".',
    expression_hint:
      "Mari kita lihat lagi ceritanya. Bisa kamu temukan angka-angka yang harus dijumlahkan?<br><br>Tika memiliki 12 donat. Kita sudah tahu bahwa Malosi memiliki 7 donat.<br><br>Gunakan informasi ini.",
    final_summary:
      "Bagus!<br><br>Tika dan Malosi memiliki total 19 donat.<br><br>Ayo selesaikan cerita lainnya. Klik 'Berikutnya'.",
  },

  problem_3: {
    mcq_2_feedback_correct_subtraction:
      'Bagus.. Kamu benar.<br><br>Kata "lebih sedikit" menunjukkan bahwa angka harus dikurangkan dalam soal ini.<br><br>Sekarang, mari kita selesaikan soal ini.<br>Klik "Berikutnya".',
    expression_hint:
      "Mari kita lihat lagi ceritanya. Bisa kamu temukan angka-angka yang perlu dikurangkan?<br><br>Lili memiliki 8 boneka. Tika memiliki 5 boneka.<br><br>Gunakan informasi ini.",
    final_summary:
      "Bagus!<br><br>Lili memiliki 3 boneka lebih banyak dari Tika.<br><br>Ayo selesaikan bagian selanjutnya. Klik 'Berikutnya'.",
  },

  problem_4: {
    mcq_2_feedback_correct_addition:
      'Bagus.. Kamu benar.<br><br>Kata "total" menunjukkan bahwa angka-angka harus dijumlahkan dalam soal ini.<br><br>Sekarang, mari kita selesaikan soal ini.<br>Klik "Berikutnya".',
    expression_hint:
      "Mari kita lihat lagi ceritanya. Bisa kamu temukan angka-angka yang harus dijumlahkan?<br><br>Tika memiliki 5 boneka dan Kira memiliki 7 boneka.<br><br>Gunakan informasi ini.",
    final_summary:
      "Bagus!<br><br>Tika dan Kira memiliki total 12 boneka.<br><br>Ayo selesaikan cerita lainnya. Klik 'Berikutnya'.",
  },
};

const questionDataIndonesian = {
  expression: "Tulis ekspresi matematika dan klik 'Periksa'.",

  problem_1: {
    problem_statement:
      "Tika memiliki 12 donat. Malosi memiliki 5 donat lebih sedikit dari yang dimiliki Tika.",
    problem_mid: "Berapa jumlah donat yang dimiliki Malosi?",
    highlights: [
      { text: "donat", place: "bottom" },
      { text: "lebih sedikit", place: "top" },
      { text: "memiliki", place: "bottom" },
    ],
    mcq_1: {
      question:
        "Apakah kita harus menjumlahkan atau mengurangkan untuk menyelesaikan soal ini?",
      options: ["Menjumlahkan", "Mengurangkan"],
      correct_answer: 1,
      hint: "Ada beberapa kata dan frasa seperti selisih, tersisa, jumlah, semuanya, dll., yang menunjukkan apakah kita perlu menjumlahkan atau mengurangkan.",
    },
    mcq_2: {
      question: "Kata mana di bawah ini yang menunjukkan pengurangan?",
      options: ["donat", "lebih sedikit", "memiliki"],
      correct_answer: 1,
      hint: "Beberapa kata yang menunjukkan PENGURANGAN adalah tersisa, lebih sedikit, diambil, dll.",
    },
    solution: "Malosi memiliki 12 - 5 = 7 donat.",
    correct_answer: ["12", "-", "5", "=", "7"],
  },

  problem_2: {
    problem_statement:
      "Tika memiliki 12 donat. Malosi memiliki 5 donat lebih sedikit dari Tika. Sebelumnya kita sudah menemukan bahwa Malosi memiliki 7 donat.",
    problem_mid: "Berapa total donat yang dimiliki Tika dan Malosi?",
    highlights: [
      { text: "donat", place: "bottom" },
      { text: "Tika", place: "bottom" },
      { text: "total", place: "bottom" },
    ],
    mcq_1: {
      question:
        "Apakah kita harus menjumlahkan atau mengurangkan untuk menyelesaikan soal ini?",
      options: ["Menjumlahkan", "Mengurangkan"],
      correct_answer: 0,
      hint: "Ada beberapa kata dan frasa seperti selisih, tersisa, total, semuanya, dll.",
    },
    mcq_2: {
      question: "Kata mana di bawah ini yang menunjukkan penjumlahan?",
      options: ["donat", "Tika", "total"],
      correct_answer: 2,
      hint: "Beberapa kata yang menunjukkan PENJUMLAHAN adalah total, jumlah, semuanya, dll.",
    },
    solution: "Tika dan Malosi memiliki 12 + 7 = 19 donat secara total.",
    correct_answer: ["12", "+", "7", "=", "19"],
  },

  problem_3: {
    problem_statement:
      "Tika, Kira, dan Lili sedang bermain dengan boneka. Tika membawa 5 boneka. Kira membawa 7 boneka. Lili membawa 8 boneka.",
    problem_mid:
      "Berapa boneka lebih sedikit yang dimiliki Tika dibandingkan dengan Lili?",
    highlights: [
      { text: "lebih sedikit", place: "bottom" },
      { text: "membawa", place: "top" },
      { text: "bermain", place: "top" },
    ],
    mcq_1: {
      question:
        "Apakah kita harus menjumlahkan atau mengurangkan untuk menyelesaikan soal ini?",
      options: ["Menjumlahkan", "Mengurangkan"],
      correct_answer: 1,
      hint: "Ada beberapa kata dan frasa seperti lebih sedikit, tersisa, total, dll.",
    },
    mcq_2: {
      question: "Kata mana di bawah ini yang menunjukkan pengurangan?",
      options: ["lebih sedikit", "membawa", "bermain"],
      correct_answer: 0,
      hint: "Beberapa kata yang menunjukkan PENGURANGAN adalah tersisa, lebih sedikit, diambil, dll.",
    },
    solution: "Lili memiliki 8 - 5 = 3 boneka lebih banyak dari Tika.",
    correct_answer: ["8", "-", "5", "=", "3"],
  },

  problem_4: {
    problem_statement:
      "Tika, Kira, dan Lili sedang bermain dengan boneka. Tika membawa 5 boneka. Kira membawa 7 boneka. Lili membawa 8 boneka.",
    problem_mid: "Berapa total boneka yang dimiliki Tika dan Kira?",
    highlights: [
      { text: "boneka", place: "bottom" },
      { text: "berapa", place: "bottom" },
      { text: "total", place: "bottom" },
    ],
    mcq_1: {
      question:
        "Apakah kita harus menjumlahkan atau mengurangkan untuk menyelesaikan soal ini?",
      options: ["Menjumlahkan", "Mengurangkan"],
      correct_answer: 0,
      hint: "Ada beberapa kata dan frasa seperti total, semuanya, jumlah, dll.",
    },
    mcq_2: {
      question: "Kata mana di bawah ini yang menunjukkan penjumlahan?",
      options: ["boneka", "berapa", "total"],
      correct_answer: 2,
      hint: "Beberapa kata yang menunjukkan PENJUMLAHAN adalah total, jumlah, semuanya, dll.",
    },
    solution: "Tika dan Kira memiliki 5 + 7 = 12 boneka secara total.",
    correct_answer: ["5", "+", "7", "=", "12"],
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
