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
  expression_incorrect:
    "Itu tidak sepenuhnya benar. Kamu bisa menggunakan tombol 'Petunjuk' di pojok kanan atas untuk mendapatkan petunjuk.",
  hintText:
    "Untuk menulis kalimat perkalian, tulislah seperti ini:<br> jumlah kelompok × jumlah benda dalam satu kelompok. Untuk 3 kelompok yang masing-masing berisi 4 benda, kita tulis 3 × 4 = 12",
  first_screen:
    "Hei! Tidak perlu menghitung setiap benda satu per satu jika sudah dikelompokkan. Ayo kita lihat bagaimana cara menggunakan perkalian untuk menghitung benda dalam jumlah besar dengan lebih cepat.",
  qsn1: "Isi dan periksa jumlah kelompok pada gambar.",
  qsn2: "Isi dan periksa jumlah benda di setiap kelompok.",
  hint_1:
    "Ada beberapa kata dan frasa seperti 'selisih', 'tersisa', 'semuanya', 'total', 'berapa banyak lagi', 'sisa', dll., yang memberitahu apakah kita perlu menambah atau mengurangi.",
  hint_2:
    "Beberapa kata dan frasa yang menunjukkan pengurangan adalah 'tersisa', 'kurang', 'diambil', 'sisa', 'berapa banyak lagi', dll.",
  stage_1_prompt:
    "Hei!!<br>Ayo baca soal cerita ini dengan keras.<br><br>Gunakan informasi ini untuk menyelesaikan pertanyaan berikutnya.<br>Klik 'Berikutnya'.",
  initial_prompt:
    "Hei!!<br>Ayo baca soal cerita ini dengan keras.<br><br>Bisakah kamu menebak apakah kamu perlu menambah atau mengurangi untuk menemukan jawabannya?",
  qsn_1_feedback_incorrect:
    "Pertanyaan ini tidak memerlukan penjumlahan.<br><br>Coba lagi.",
  qsn_1_feedback_correct:
    "Bagus sekali.<br><br>Sekarang mari kita lihat bagian mana dari pertanyaan yang memberi petunjuk bahwa pengurangan perlu dilakukan di sini.",
  mcq_2_initial:
    "Baca kembali ceritanya secara lengkap.<br><br>Temukan kata yang menunjukkan bahwa diperlukan pengurangan.",
  qsn_2_feedback_incorrect:
    "Oh, itu tidak benar.<br><br>Coba temukan kata kunci yang memberitahu kita untuk melakukan pengurangan di sini.",
  expression_prompt:
    "Ubahlah soal cerita ini menjadi ekspresi matematika.<br><br>Tulis ekspresinya dan klik 'Periksa'.",
};

const questionDataIndonesian = {
  expression: "Tulis ekspresi matematika dan klik 'Periksa'.",

  problem_1: {
    problem_statement: "",
    qsn_1_initial: "Isi dan periksa jumlah kelompok pada gambar.",
    qsn_2_initial: "Benar… Isi dan periksa jumlah benda di setiap kelompok.",
    qsn_1_feedback_correct:
      "Benar… Isi dan periksa jumlah benda di setiap kelompok.",
    qsn_1_feedback_incorrect:
      "Ooh... Hitung ada berapa banyak ikat bunga pada gambar.",
    qsn_2_feedback_incorrect:
      "Ooh! Hitung ada berapa banyak bunga di setiap kelompok.",
    qsn_2_feedback_correct:
      "Benar… Ada 8 kelompok berisi 4 bunga. Secara matematis, ada 8 kali 4 bunga. Tulis informasi ini ke dalam kalimat perkalian. Klik 'Berikutnya'.",
    expression_text:
      "Ada 8 kelompok berisi 4 bunga. Secara matematis, ada 8 kali 4 bunga. Tulis informasi ini ke dalam kalimat perkalian di bawah dan periksa.",
    expression_correct:
      "Bagus sekali. 8 kali 4 ditulis sebagai 8 × 4. Ayo kita tulis untuk pertanyaan lain. Klik Berikutnya.",
    correct_answer: ["8", "×", "4", "=", "32"],
    image: "assets/flower.png",
    qsn1: "Ada berapa kelompok bunga?",
    qsn2: "Ada berapa bunga di setiap kelompok?",
  },

  problem_2: {
    problem_statement: "",
    qsn_1_initial: "Isi dan periksa jumlah kelompok pada gambar.",
    qsn_2_initial: "Benar… Isi dan periksa jumlah benda di setiap kelompok.",
    qsn_1_feedback_correct:
      "Benar… Isi dan periksa jumlah benda di setiap kelompok.",
    qsn_1_feedback_incorrect:
      "Ooh... Hitung ada berapa mangkuk pangsit pada gambar.",
    qsn_2_feedback_incorrect:
      "Ooh! Hitung ada berapa pangsit di setiap mangkuk.",
    qsn_2_feedback_correct:
      "Benar… Ada 4 kelompok berisi 3 pangsit. Secara matematis, ada 4 kali 3 pangsit. Tulis informasi ini ke dalam kalimat perkalian. Klik 'Berikutnya'.",
    expression_text:
      "Ada 4 kelompok berisi 3 pangsit. Secara matematis, ada 4 kali 3 pangsit. Tulis informasi ini ke dalam kalimat perkalian di bawah dan periksa.",
    expression_correct:
      "Bagus sekali. 4 kali 3 ditulis sebagai 4 × 3. Ayo kita tulis untuk pertanyaan lain. Klik Berikutnya.",
    correct_answer: ["4", "×", "3", "=", "12"],
    image: "assets/dumpling.png",
    qsn1: "Ada berapa mangkuk pangsit?",
    qsn2: "Ada berapa pangsit di setiap mangkuk?",
  },

  problem_3: {
    problem_statement: "",
    qsn_1_initial: "Isi dan periksa jumlah kelompok pada gambar.",
    qsn_2_initial: "Benar… Isi dan periksa jumlah benda di setiap kelompok.",
    qsn_1_feedback_correct:
      "Benar… Isi dan periksa jumlah benda di setiap kelompok.",
    qsn_1_feedback_incorrect:
      "Ooh... Hitung ada berapa kantong permen pada gambar.",
    qsn_2_feedback_incorrect:
      "Ooh! Hitung ada berapa permen di setiap kantong.",
    qsn_2_feedback_correct:
      "Benar… Ada 3 kelompok berisi 5 permen. Secara matematis, ada 3 kali 5 permen. Tulis informasi ini ke dalam kalimat perkalian. Klik 'Berikutnya'.",
    expression_text:
      "Ada 3 kelompok berisi 5 permen. Secara matematis, ada 3 kali 5 permen. Tulis informasi ini ke dalam kalimat perkalian di bawah dan periksa.",
    expression_correct:
      "Bagus sekali. 3 kali 5 ditulis sebagai 3 × 5. Ayo kita tulis untuk pertanyaan lain. Klik Berikutnya.",
    correct_answer: ["3", "×", "5", "=", "15"],
    image: "assets/candy.png",
    qsn1: "Ada berapa kantong permen?",
    qsn2: "Ada berapa permen di setiap kantong?",
  },
};

const leftInstructionsIndonesian = {
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
