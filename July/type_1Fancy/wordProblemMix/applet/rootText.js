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
  problem_1: {
    initial_prompt:
      "Hei!! Ayo baca soal cerita ini dengan lantang. Bisakah kamu memberitahu apakah kamu perlu menambah atau mengurangi untuk menemukan jawabannya?",
    mcq_1_feedback_correct:
      "Bagus sekali... Sekarang mari kita lihat bagian mana dari pertanyaan yang mengisyaratkan bahwa pengurangan perlu dilakukan di sini..",
    mcq_2_prompt:
      "Baca kembali cerita dan pertanyaan lengkapnya. Temukan kata yang menunjukkan bahwa penjumlahan diperlukan.",
    mcq_2_feedback_incorrect:
      "Ohh itu tidak benar... Coba temukan kata petunjuk yang memberitahu kita untuk melakukan Pengurangan di sini.",
    mcq_2_feedback_correct:
      'Bagus.. Jawabanmu benar. Kata "total" menunjukkan bahwa angka-angka harus dijumlahkan dalam pertanyaan ini. Sekarang,, ayo selesaikan pertanyaan ini. Klik BERIKUTNYA.',
    expression_prompt:
      "Susun soal cerita ini ke dalam ekspresi matematika. Tambahkan untuk menemukan jawaban dan PERIKSA.",
    expression_hint:
      "Mari kita lihat ceritanya lagi. Bisakah kamu menemukan angka-angka yang perlu ditambahkan? 5 Kupu-kupu di atas bunga. 4 Kupu-kupu di atas daun. Gunakan informasi ini",
    final_summary:
      "Juga, kamu menyelesaikan pertanyaan dengan benar. Ada 5 + 4 = 9 kupu-kupu secara TOTAL. Ayo Selesaikan cerita lain. Klik Berikutnya",
  },
  problem_2: {
    initial_prompt:
      "Hei!! Ayo baca soal cerita ini dengan lantang. Bisakah kamu memberitahu apakah kamu perlu menambah atau mengurangi untuk menemukan jawabannya?",
    mcq_1_feedback_correct:
      "Bagus sekali... Sekarang mari kita lihat bagian mana dari pertanyaan yang mengisyaratkan bahwa pengurangan perlu dilakukan di sini..",
    mcq_2_prompt:
      "Baca kembali cerita dan pertanyaan lengkapnya. Temukan kata yang menunjukkan bahwa penjumlahan diperlukan.",
    mcq_2_feedback_incorrect:
      "Ohh itu tidak benar... Coba temukan kata petunjuk yang memberitahu kita untuk melakukan Pengurangan di sini.",
    mcq_2_feedback_correct:
      'Bagus.. Jawabanmu benar. Kata "semuanya" menunjukkan bahwa angka-angka harus dijumlahkan dalam pertanyaan ini. Sekarang,, ayo selesaikan pertanyaan ini. Klik BERIKUTNYA.',
    expression_prompt:
      "Susun soal cerita ini ke dalam ekspresi matematika. Tambahkan untuk menemukan jawaban dan PERIKSA.",
    expression_hint:
      "Mari kita lihat ceritanya lagi. Bisakah kamu menemukan angka-angka yang perlu ditambahkan? Lina memiliki 7 balon merah. Dia mendapat 5 balon lagi. Gunakan informasi ini",
    final_summary:
      "Juga, kamu menyelesaikan pertanyaan dengan benar. Lina sekarang memiliki 7 + 5 = 12 balon secara TOTAL. Ayo Selesaikan cerita lain. Klik Berikutnya",
  },
};
const questionDataIndonesian = {
  expression: "Tulis ekspresi matematika dan klik 'Periksa'.",
  problem_1: {
    problem_statement:
      "Ada 5 Kupu-kupu di atas bunga. Ada 4 kupu-kupu di atas daun. Berapa banyak kupu-kupu seluruhnya?",
    mcq_1: {
      question:
        "Haruskah kita Menambah atau Mengurangi untuk menyelesaikan pertanyaan ini?",
      options: ["Tambah", "Kurangi"],
      correct_answer: 0,
      hint: "Ada beberapa kata dan frasa seperti selisih, sisa, seluruhnya, semuanya, dll. yang memberitahu apakah kita perlu menambah atau mengurangi.",
    },
    mcq_2: {
      question: "Manakah dari kata-kata ini yang merujuk pada Penjumlahan?",
      options: ["banyak", "total", "ada"],
      correct_answer: 1,
      hint: "Beberapa kata yang menunjukkan PENJUMLAHAN adalah total, seluruhnya, semuanya, dll.",
    },
    solution: "Ada 5 + 4 = 9 kupu-kupu secara TOTAL.",
  },
  problem_2: {
    problem_statement:
      "Lina memiliki 7 balon merah. Temannya memberinya 5 balon hijau lagi. Berapa banyak balon yang dimiliki Lina semuanya?",
    mcq_1: {
      question:
        "Haruskah kita Menambah atau Mengurangi untuk menyelesaikan pertanyaan ini?",
      options: ["Tambah", "Kurangi"],
      correct_answer: 0,
      hint: "Ada beberapa kata dan frasa seperti selisih, sisa, seluruhnya, semuanya, dll. yang memberitahu apakah kita perlu menambah atau mengurangi.",
    },
    mcq_2: {
      question: "Manakah dari kata-kata ini yang merujuk pada Penjumlahan?",
      options: ["balon", "semuanya", "hijau"],
      correct_answer: 1,
      hint: "Beberapa kata yang menunjukkan PENJUMLAHAN adalah total, seluruhnya, semuanya, dll.",
    },
    solution: "Lina sekarang memiliki 7 + 5 = 12 balon secara TOTAL.",
  },
};

const leftInstructionsIndonesian = {
  hmm: "Hmm... Kita perlu menambahkan {{count}} sebanyak {{group}} kali.<br><br><b>{{questionString}}&nbsp;?</b>",
  try_answering: "Coba jawab ini menggunakan tombol-tombol di bawah.",
  try_answering_again: "Coba jawab lagi menggunakan tombol-tombol di bawah.",
  hint: "Kita mendapatkan jawabannya dengan melakukan <b>penjumlahan berulang</b>.",
  wrong: "Ups! Kita mendapatkan jawabannya dengan <b>penjumlahan berulang</b>.",
  correct:
    "Kerja bagus! Kita mendapatkan jawabannya dengan <b>penjumlahan berulang</b>.",
  final_correct_top: "Hebat!",
  final_correct:
    "{{count}} {{item}} ditambahkan {{group}} kali adalah:<br><b> {{questionString}} {{answer}}</b> {{item}} dalam {{group}} {{group_name_plural}}.",
  question_1: "Berapa banyak pensil yang ada di 3 kotak seperti itu?",
  question_2: "Bisakah kamu menghitung jumlah bunga di 5 semak?",
  tap_1: "Ketuk setiap kotak pensil.",
  tap_2: "Ketuk setiap semak bunga.",
  tap_next_1: "Ketuk kotak pensil berikutnya.",
  tap_next_2: "Ketuk semak bunga berikutnya.",
  correct_mid: "Jawabanmu benar!",
  mid_step_top:
    "Berapa banyak {{item}} yang ada di {{current_image}} {{group_name_plural}}?<br><b>{{currentQuestionString}}?</b>",
  click_buttons:
    "Masukkan jawabanmu di kotak kuning dengan mengeklik tombol-tombol di bawah.",
};

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
