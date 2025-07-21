const leftInstructionsEnglish = {};
const speechBubbleDataEnglish = {
  hint_1:
    "There are some words and phrases like 'difference', 'left', 'in all', 'altogether', 'how many more', 'remain', etc., that tell whether we need to add or subtract.",
  hint_2:
    "Some words and phrases that indicate subtraction are 'left', 'less', 'taken away', 'remain', 'how many more', etc.",
  stage_1_prompt:
    "Hey!!<br>Let’s read the word problem out loud.<br><br>Use this information to solve the upcoming question.<br>Click 'Next'.",
  initial_prompt:
    "Hey!!<br>Let’s read the word problem out loud.<br><br>Can you tell whether you need to add or subtract to find the answer?",
  mcq_1_feedback_incorrect:
    "This question does not require addition.<br><br>Try again.",
  mcq_1_feedback_correct:
    "Well done.<br><br>Now let’s see which part of the question hinted that subtraction needs to be done here.",
  mcq_2_initial:
    "Read the full story again.<br><br>Find the word which indicates that subtraction is required.",
  mcq_2_feedback_incorrect:
    "Ohh, that’s not correct.<br><br>Try to find the clue word that tells us to do subtraction here.",
  expression_prompt:
    "Set this story question into a mathematical expression.<br><br>Write the expression and click 'Check'.",

  problem_1: {
    mcq_2_feedback_correct:
      "Good. You got it right.<br><br>The word “left” indicates that numbers should be subtracted in this question.<br><br>Now, let’s solve this question. Click 'Next'.",
    expression_hint:
      "Let’s look at the story again.<br>Can you find the numbers that need to be used?<br><br>There are 8 birds. 3 birds fly away.<br><br>Use this information.",
    final_summary:
      "You solved the question correctly.<br>Out of 8 birds, 5 birds were left after 3 birds flew away.<br><br>Let’s see what other problem is given in this story. Let’s solve the next part. Click 'Next'.",
  },

  problem_2: {
    mcq_2_feedback_correct:
      "Good. You got it right.<br><br>The word “remain” indicates that numbers should be subtracted in this question.<br><br>Now, let’s solve this question. Click 'Next'.",
    expression_hint:
      "Let’s look at the story again.<br>Can you find the numbers that need to be used?<br><br>Lina has 10 balloons. 5 balloons burst.<br><br>Use this information.",
    final_summary:
      "You solved the question correctly.<br>Out of 10 balloons, 5 balloons burst, so 5 balloons remain.<br><br>Let’s see what other problem is given in this story. Let’s solve the next part. Click 'Next'.",
  },

  problem_3: {
    mcq_2_feedback_correct:
      "Good. You got it right.<br><br>The phrase “how many more” indicates that numbers should be subtracted in this question.<br><br>Now, let’s solve this question. Click 'Next'.",
    expression_hint:
      "Putri has 9 chocolates. Budi has 6 chocolates.<br><br>Use this information.",
    final_summary:
      "You solved the question correctly.<br>Putri has 9 chocolates. Budi has 6 chocolates. Putri has 3 more chocolates.<br><br>Click 'Next'.",
  },
};

const questionDataEnglish = {
  expression: "Write the mathematical expression and click 'Check'.",

  problem_1: {
    problem_statement:
      "There are 8 birds sitting on a tree. 3 birds fly away. How many birds are left on the tree?",
    mcq_1: {
      question: "Should we add or subtract to solve this question?",
      options: ["Add", "Subtract"],
      correct_answer: 1,
      hint: "There are some words and phrases like difference, left, in all, altogether, remain, etc., that tell whether we need to add or subtract.",
    },
    mcq_2: {
      question: "Which of these words here refer to subtraction?",
      options: ["birds", "tree", "left"],
      correct_answer: 2,
      hint: "Some words that indicate subtraction are left, less, taken away, remain, etc.",
    },
    solution: "8 - 3 = 5 birds left.",
    correct_answer: ["8", "-", "3", "=", "5"],
  },

  problem_2: {
    problem_statement:
      "Lina has 10 balloons. 5 balloons burst. How many balloons remain?",
    mcq_1: {
      question: "Should we add or subtract to solve this question?",
      options: ["Add", "Subtract"],
      correct_answer: 1,
      hint: "There are some words and phrases like difference, left, in all, altogether, remain, etc., that tell whether we need to add or subtract.",
    },
    mcq_2: {
      question: "Which of these words here refer to subtraction?",
      options: ["balloons", "burst", "remain"],
      correct_answer: 2,
      hint: "Some words that indicate subtraction are left, less, taken away, remain, etc.",
    },
    solution: "10 - 5 = 5 balloons remain.",
    correct_answer: ["10", "-", "5", "=", "5"],
  },

  problem_3: {
    problem_statement:
      "Putri has 9 chocolates. Budi has 6 chocolates. How many more chocolates does Putri have than Budi?",
    mcq_1: {
      question: "Should we add or subtract to solve this question?",
      options: ["Add", "Subtract"],
      correct_answer: 1,
      hint: "Some phrases that indicate subtraction are difference, how many less, left, takes away.",
    },
    mcq_2: {
      question: "Which of these phrase here refer to subtraction?",
      options: ["chocolates", "have", "how many more"],
      correct_answer: 2,
      hint: "Some phrases that indicate subtraction are difference, how many less, left, takes away.",
    },
    solution: "9 - 6 = 3 more chocolates.",
    correct_answer: ["9", "-", "6", "=", "3"],
  },
};

const speechBubbleDataIndonesian = {
  hint_1:
    "Ada beberapa kata dan frasa seperti 'selisih', 'tersisa', 'jumlah', 'semuanya', 'berapa lebih banyak', 'sisa', dll., yang menunjukkan apakah kita perlu menjumlahkan atau mengurangkan.",
  hint_2:
    "Beberapa kata dan frasa yang menunjukkan pengurangan adalah 'tersisa', 'lebih sedikit', 'diambil', 'sisa', 'berapa lebih banyak', dll.",
  stage_1_prompt:
    "Hai!!<br>Ayo kita baca soal cerita ini dengan suara keras.<br><br>Gunakan informasi ini untuk menyelesaikan soal berikutnya.<br>Klik 'Berikutnya'.",
  initial_prompt:
    "Hai!!<br>Ayo kita baca soal cerita ini dengan suara keras.<br><br>Bisa kamu tentukan apakah kita perlu menjumlahkan atau mengurangkan untuk menemukan jawabannya?",
  mcq_1_feedback_incorrect:
    "Soal ini tidak memerlukan penjumlahan.<br><br>Coba lagi.",
  mcq_1_feedback_correct:
    "Bagus.<br><br>Sekarang mari kita lihat bagian mana dari soal yang memberi petunjuk bahwa kita perlu melakukan pengurangan.",
  mcq_2_initial:
    "Baca kembali seluruh cerita.<br><br>Temukan kata yang menunjukkan bahwa kita perlu melakukan pengurangan.",
  mcq_2_feedback_incorrect:
    "Oh, itu belum benar.<br><br>Coba cari kata petunjuk yang menunjukkan kita harus mengurangkan.",
  expression_prompt:
    "Ubah soal cerita ini menjadi ekspresi matematika.<br><br>Tulis ekspresinya dan klik 'Periksa'.",

  problem_1: {
    mcq_2_feedback_correct:
      'Bagus. Kamu benar.<br><br>Kata "tersisa" menunjukkan bahwa kita perlu mengurangkan dalam soal ini.<br><br>Sekarang, mari kita selesaikan soal ini. Klik "Berikutnya".',
    expression_hint:
      "Mari kita lihat kembali ceritanya.<br>Bisa kamu temukan angka yang perlu digunakan?<br><br>Ada 8 burung. 3 burung terbang pergi.<br><br>Gunakan informasi ini.",
    final_summary:
      "Kamu menyelesaikan soal ini dengan benar.<br>Dari 8 burung, tersisa 5 burung setelah 3 burung terbang pergi.<br><br>Sekarang kita lihat soal berikutnya. Klik 'Berikutnya'.",
  },

  problem_2: {
    mcq_2_feedback_correct:
      'Bagus. Kamu benar.<br><br>Kata "sisa" menunjukkan bahwa kita perlu mengurangkan dalam soal ini.<br><br>Sekarang, mari kita selesaikan soal ini. Klik "Berikutnya".',
    expression_hint:
      "Mari kita lihat kembali ceritanya.<br>Bisa kamu temukan angka yang perlu digunakan?<br><br>Lina punya 10 balon. 5 balon meletus.<br><br>Gunakan informasi ini.",
    final_summary:
      "Kamu menyelesaikan soal ini dengan benar.<br>Dari 10 balon, 5 balon meletus, jadi tersisa 5 balon.<br><br>Sekarang kita lihat soal berikutnya. Klik 'Berikutnya'.",
  },

  problem_3: {
    mcq_2_feedback_correct:
      'Bagus. Kamu benar.<br><br>Frasa "berapa lebih banyak" menunjukkan bahwa kita perlu mengurangkan dalam soal ini.<br><br>Sekarang, mari kita selesaikan soal ini. Klik "Berikutnya".',
    expression_hint:
      "Putri punya 9 cokelat. Budi punya 6 cokelat.<br><br>Gunakan informasi ini.",
    final_summary:
      "Kamu menyelesaikan soal ini dengan benar.<br>Putri punya 9 cokelat. Budi punya 6 cokelat. Putri punya 3 cokelat lebih banyak.<br><br>Klik 'Berikutnya'.",
  },
};

const questionDataIndonesian = {
  expression: "Tulis ekspresi matematika dan klik 'Periksa'.",

  problem_1: {
    problem_statement:
      "Ada 8 burung yang bertengger di pohon. 3 burung terbang pergi. Berapa burung yang tersisa di pohon?",
    mcq_1: {
      question:
        "Apakah kita harus menjumlahkan atau mengurangkan untuk menyelesaikan soal ini?",
      options: ["Menjumlahkan", "Mengurangkan"],
      correct_answer: 1,
      hint: "Ada beberapa kata dan frasa seperti selisih, tersisa, jumlah, semuanya, sisa, dll., yang menunjukkan apakah kita perlu menjumlahkan atau mengurangkan.",
    },
    mcq_2: {
      question: "Kata mana di bawah ini yang menunjukkan pengurangan?",
      options: ["burung", "pohon", "tersisa"],
      correct_answer: 2,
      hint: "Beberapa kata yang menunjukkan pengurangan adalah tersisa, lebih sedikit, diambil, sisa, dll.",
    },
    solution: "8 - 3 = 5 burung tersisa.",
    correct_answer: ["8", "-", "3", "=", "5"],
  },

  problem_2: {
    problem_statement:
      "Lina memiliki 10 balon. 5 balon meletus. Berapa balon yang tersisa?",
    mcq_1: {
      question:
        "Apakah kita harus menjumlahkan atau mengurangkan untuk menyelesaikan soal ini?",
      options: ["Menjumlahkan", "Mengurangkan"],
      correct_answer: 1,
      hint: "Ada beberapa kata dan frasa seperti selisih, tersisa, jumlah, semuanya, sisa, dll., yang menunjukkan apakah kita perlu menjumlahkan atau mengurangkan.",
    },
    mcq_2: {
      question: "Kata mana di bawah ini yang menunjukkan pengurangan?",
      options: ["balon", "meletus", "sisa"],
      correct_answer: 2,
      hint: "Beberapa kata yang menunjukkan pengurangan adalah tersisa, lebih sedikit, diambil, sisa, dll.",
    },
    solution: "10 - 5 = 5 balon tersisa.",
    correct_answer: ["10", "-", "5", "=", "5"],
  },

  problem_3: {
    problem_statement:
      "Putri memiliki 9 cokelat. Budi memiliki 6 cokelat. Berapa cokelat lebih banyak yang dimiliki Putri dibanding Budi?",
    mcq_1: {
      question:
        "Apakah kita harus menjumlahkan atau mengurangkan untuk menyelesaikan soal ini?",
      options: ["Menjumlahkan", "Mengurangkan"],
      correct_answer: 1,
      hint: "Beberapa frasa yang menunjukkan pengurangan adalah selisih, berapa lebih sedikit, tersisa, diambil.",
    },
    mcq_2: {
      question: "Frasa mana di bawah ini yang menunjukkan pengurangan?",
      options: ["cokelat", "punya", "berapa lebih banyak"],
      correct_answer: 2,
      hint: "Beberapa frasa yang menunjukkan pengurangan adalah selisih, berapa lebih sedikit, tersisa, diambil.",
    },
    solution: "9 - 6 = 3 cokelat lebih banyak.",
    correct_answer: ["9", "-", "6", "=", "3"],
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
