const leftInstructionsEnglish = {};
const speechBubbleDataEnglish = {
  expression_incorrect:"That's not entirely correct. You can use the 'Hint' button at the top right corner to get a hint.",
  hintText:
    "For writing multiplication sentences write as:<br> number of groups × number of objects in one group. For 3 groups of 4 objects each, we write as 3 × 4 = 12",
  first_screen:
    "Hey! There is no need to count every object one-by-one when they are grouped. let’s see how can we use multiplication for counting large number of objects in a quicker way.",
  qsn1: " Fill and check the number of groups in the picture.",
  qsn2: "Fill and check the number of objects in each group.",
  hint_1:
    "There are some words and phrases like 'difference', 'left', 'in all', 'altogether', 'how many more', 'remain', etc., that tell whether we need to add or subtract.",
  hint_2:
    "Some words and phrases that indicate subtraction are 'left', 'less', 'taken away', 'remain', 'how many more', etc.",
  stage_1_prompt:
    "Hey!!<br>Let’s read the word problem out loud.<br><br>Use this information to solve the upcoming question.<br>Click 'Next'.",
  initial_prompt:
    "Hey!!<br>Let’s read the word problem out loud.<br><br>Can you tell whether you need to add or subtract to find the answer?",
  qsn_1_feedback_incorrect:
    "This question does not require addition.<br><br>Try again.",
  qsn_1_feedback_correct:
    "Well done.<br><br>Now let’s see which part of the question hinted that subtraction needs to be done here.",
  mcq_2_initial:
    "Read the full story again.<br><br>Find the word which indicates that subtraction is required.",
  qsn_2_feedback_incorrect:
    "Ohh, that’s not correct.<br><br>Try to find the clue word that tells us to do subtraction here.",
  expression_prompt:
    "Set this story question into a mathematical expression.<br><br>Write the expression and click 'Check'.",
};

const questionDataEnglish = {
  expression: "Write the mathematical expression and click 'Check'.",

  problem_1: {
    problem_statement: "",
    qsn_1_initial: "Fill and check the number of groups in the picture. ",
    qsn_2_initial:
      "Correct… Fill and check the number of objects in each group.",
    qsn_1_feedback_correct:
      "Correct… Fill and check the number of objects in each group.",
    qsn_1_feedback_incorrect:
      "Ooh... Count how many bunches of flowers are there in the picture.",
    qsn_2_feedback_incorrect: "Ooh! Count how many flowers are in each group.",
    qsn_2_feedback_correct:
      "Correct… There are 8 groups of 4 flowers. Mathematically, there are 8 times 4 number of flowers. Write this information into a multiplication statement. Click 'Next'.",
    expression_text:
      "There are 8 groups of 4 flowers. Mathematically, there are 8 times 4 number of flowers. Write this information into a multiplication statement below and check.",
    expression_correct:
      "Well done. 8 times 4 is written as 8 × 4. Let’s write for another question. Click Next.",
    correct_answer: ["8", "×", "4", "=", "32"],
    image: "assets/flower.png",
    qsn1: "How many groups of flowers are there?",
    qsn2: "How many flowers are there in each group?",
  },

  problem_2: {
    problem_statement: "",
    qsn_1_initial: "Fill and check the number of groups in the picture.",
    qsn_2_initial:
      "Correct… Fill and check the number of objects in each group.",
    qsn_1_feedback_correct:
      "Correct… Fill and check the number of objects in each group.",
    qsn_1_feedback_incorrect:
      "Ooh... Count how many bowls of dumplings are there in the picture.",
    qsn_2_feedback_incorrect: "Ooh! Count how many dumplings are in each bowl.",
    qsn_2_feedback_correct:
      "Correct… There are 4 groups of 3 dumplings. Mathematically, there are 4 times 3 number of dumplings. Write this information into a multiplication statement. Click 'Next'.",
    expression_text:
      "There are 4 groups of 3 dumplings. Mathematically, there are 4 times 3 number of dumplings. Write this information into a multiplication statement below and check.",
    expression_correct:
      "Well done. 4 times 3 is written as 4 × 3. Let’s write for another question. Click Next.",
    correct_answer: ["4", "×", "3", "=", "12"],
    image: "assets/dumpling.png",
    qsn1: "How many bowls of dumplings are there?",
    qsn2: "How many dumplings are there in each bowl?",
  },

  problem_3: {
    problem_statement: "",
    qsn_1_initial: "Fill and check the number of groups in the picture.",
    qsn_2_initial:
      "Correct… Fill and check the number of objects in each group.",
    qsn_1_feedback_correct:
      "Correct… Fill and check the number of objects in each group.",
    qsn_1_feedback_incorrect:
      "Ooh... Count how many bags of candies are there in the picture.",
    qsn_2_feedback_incorrect: "Ooh! Count how many candies are in each bag.",
    qsn_2_feedback_correct:
      "Correct… There are 3 groups of 5 candies. Mathematically, there are 3 times 5 number of candies. Write this information into a multiplication statement. Click 'Next'.",
    expression_text:
      "There are 3 groups of 5 candies. Mathematically, there are 3 times 5 number of candies. Write this information into a multiplication statement below and check.",
    expression_correct:
      "Well done. 3 times 5 is written as 3 × 5. Let’s write for another question. Click Next.",
    correct_answer: ["3", "×", "5", "=", "15"],
    image: "assets/candy.png",
    qsn1: "How many bags of candies are there?",
    qsn2: "How many candies are there in each bag?",
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
  okay: "Okay",
};

const buttonTextsIndonesian = {
  next: "Berikutnya",
  start_over: "Mulai Lagi",
  previous: "Sebelumnya",
  submit: "Kirim",
  proceed: "Lanjutkan",
  hint: "Petunjuk",
  check: "Periksa",
  okay: "Oke",
};
const overlayDataIndonesian = {
  heading: "Aktivitas Selesai!",
  paragraph: `Jika kamu ingin mencoba lagi, klik tombol 'Mulai Lagi'.`,
};

const overlayDataEnglish = {
  heading: "Activity Complete!",
  paragraph: `If you want to try again, click on the 'Start Over' button. `,
};
