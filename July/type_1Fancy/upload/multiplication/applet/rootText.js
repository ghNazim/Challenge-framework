const leftInstructionsEnglish = {
  screen_1_top: "Look at the images on the right and answer the question.",
  hmm: "Hmm... We need {{count}} taken {{group}} times.<br><br><b>{{questionString}}&nbsp;?</b>",
  try_answering: "Try answering this using the buttons below.",
  try_answering_again: "Try answering again using the buttons below.",
  hint: "We get the answer by doing <b>multiplication</b>.",
  wrong: "Oops! We get the answer by <b>multiplication</b>.",
  correct: "Great job! We get the answer by <b>multiplication</b>.",
  final_correct_top: "Great!",
  final_correct:
    "{{count}} {{item_plural}} taken {{group}} times is:<br><b> {{questionString}} {{answer}}</b> {{item_plural}} in {{group}} {{group_name_plural}}.",
  question:
    "How many {{item_plural}} are there in {{group}} such {{group_name_plural}}?",
  tap: "Tap each {{item_in_group}}.",
  tap_next: "Tap the next {{item_in_group}}.",
  correct_mid: "That's correct!",
  mid_step_top:
    "How many {{item_plural}} are there in {{current_image}} {{group_name_neutral}}?<br><b>{{currentQuestionString}}?</b>",
  click_buttons:
    "Enter your answer in the yellow box by clicking the buttons below.",
  question_before_tap1: "How many {{group_name_plural}} are there?",
  question_before_tap2:
    "How many {{item_plural}} are there in each {{group_name}} ?",
  correct_1_top:
    "Thats correct! There are {{group}} {{group_name_plural}} in total.",
  correct_1_bottom: "Click 'Next' to continue.",
  correct_2_top:
    "That's correct! There are {{count}} {{item_plural}} in each {{group_name}}.",
  correct_2_bottom: "Click 'Next' to continue.",
  overlay_text:
    "There are {{group}} groups of {{count}} {{item_plural}} each.<br>So, there are {{group}} times {{count}} {{item_plural}}.<br><br>Let's calculate how much is {{group}} times {{count}}...",
};
const dataForQuestionsEnglish = {
  1: {
    group: 3,
    count: 3,
    item: "pencil",
    item_plural: "pencils",
    group_name: "box",
    group_name_plural: "boxes",
    answer: 9,
    item_in_group: "pencil box",
  },
  2: {
    group: 5,
    count: 4,
    item: "flower",
    item_plural: "flowers",
    group_name_plural: "bushes",
    group_name: "bush",
    answer: 20,
    item_in_group: "flower bush",
  },
  3: {
    group: 4,
    count: 3,
    item: "dumpling",
    group_name_plural: "bowls",
    group_name: "bowl",
    answer: 12,
    item_plural: "dumplings",
    item_in_group: "bowl of dumpling",
  },
  4: {
    group: 3,
    count: 5,
    item: "candy",
    group_name_plural: "bags",
    group_name: "bag",
    answer: 15,
    item_plural: "candies",
    item_in_group: "bag of candy",
  },
};
const overlayDataEnglish = {
  heading: "Activity Complete!",
  paragraph: `If you want to try again, click on the 'Start Over' button. `,
};

const leftInstructionsIndonesian = {
  screen_1_top: "Lihat gambar di sebelah kanan dan jawab pertanyaannya.",
  hmm: "Hmm... Kita butuh {{count}} diambil sebanyak {{group}} kali.<br><br><b>{{questionString}}&nbsp;?</b>",
  try_answering: "Coba jawab menggunakan tombol di bawah ini.",
  try_answering_again: "Coba jawab lagi menggunakan tombol di bawah ini.",
  hint: "Kita mendapatkan jawabannya dengan cara <b>perkalian</b>.",
  wrong: "Ups! Kita mendapatkan jawabannya dengan <b>perkalian</b>.",
  correct: "Kerja bagus! Kita mendapatkan jawabannya dengan <b>perkalian</b>.",
  final_correct_top: "Bagus sekali!",
  final_correct:
    "{{count}} {{item_plural}} diambil sebanyak {{group}} kali adalah:<br><b>{{questionString}} {{answer}}</b> {{item_plural}} dalam {{group}} {{group_name_plural}}.",
  question:
    "Ada berapa {{item_plural}} di dalam {{group}} {{group_name_plural}} seperti itu?",
  tap: "Ketuk setiap {{item_in_group}}.",
  tap_next: "Ketuk {{item_in_group}} berikutnya.",
  correct_mid: "Itu benar!",
  mid_step_top:
    "Ada berapa {{item_plural}} di dalam {{current_image}} {{group_name_neutral}}?<br><b>{{currentQuestionString}}?</b>",
  click_buttons:
    "Masukkan jawabanmu di kotak kuning dengan mengklik tombol-tombol di bawah ini.",
  question_before_tap1: "Ada berapa {{group_name_plural}}?",
  question_before_tap2: "Ada berapa {{item_plural}} di setiap {{group_name}}?",
  correct_1_top: "Itu benar! Ada {{group}} {{group_name_plural}} secara total.",
  correct_1_bottom: "Klik 'Berikutnya' untuk melanjutkan.",
  correct_2_top:
    "Itu benar! Ada {{count}} {{item_plural}} di setiap {{group_name}}.",
  correct_2_bottom: "Klik 'Berikutnya' untuk melanjutkan.",
  overlay_text:
    "Ada {{group}} kelompok yang masing-masing terdiri dari {{count}} {{item_plural}}.<br>Jadi, ada {{group}} kali {{count}} {{item_plural}}.<br><br>Ayo kita hitung berapa hasil dari {{group}} kali {{count}}...",
};

const buttonTextsEnglish = {
  next: "Next",
  start_over: "Start Over",
  previous: "Previous",
  submit: "Submit",
  proceed: "Proceed",
  hint: "Hint",
};

const buttonTextsIndonesian = {
  next: "Berikutnya",
  start_over: "Mulai Lagi",
  previous: "Sebelumnya",
  submit: "Kirim",
  proceed: "Lanjutkan",
  hint: "Petunjuk",
};
const overlayDataIndonesian = {
  heading: "Aktivitas Selesai!",
  paragraph: `Jika kamu ingin mencoba lagi, klik tombol 'Mulai Lagi'.`,
};

const dataForQuestionsIndonesian = {
  1: {
    group: 3,
    count: 3,
    item: "pensil",
    item_plural: "pensil",
    group_name: "kotak",
    group_name_plural: "kotak",
    answer: 9,
    item_in_group: "kotak pensil",
  },
  2: {
    group: 5,
    count: 4,
    item: "bunga",
    item_plural: "bunga",
    group_name_plural: "semak",
    group_name: "semak",
    answer: 20,
    item_in_group: "semak bunga",
  },
  3: {
    group: 4,
    count: 3,
    item: "pangsit",
    group_name_plural: "mangkuk",
    group_name: "mangkuk",
    answer: 12,
    item_plural: "pangsit",
    item_in_group: "mangkuk pangsit",
  },
  4: {
    group: 3,
    count: 5,
    item: "permen",
    group_name_plural: "kantong",
    group_name: "kantong",
    answer: 15,
    item_plural: "permen",
    item_in_group: "kantong permen",
  },
};
