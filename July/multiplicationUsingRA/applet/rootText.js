const leftInstructionsEnglish = {
  hmm: "Hmm... We need {{count}} taken {{group}} times.<br><br><b>{{questionString}}&nbsp;?</b>",
  try_answering: "Try answering this using the buttons below.",
  try_answering_again: "Try answering again using the buttons below.",
  hint: "We get the answer by doing <b>multiplication</b>.",
  wrong: "Oops! We get the answer by <b>multiplication</b>.",
  correct: "Great job! We get the answer by <b>multiplication</b>.",
  final_correct_top: "Great!",
  final_correct:
    "{{count}} {{item_plural}} taken {{group}} times is:<br><b> {{questionString}} {{answer}}</b> {{item_plural}} in {{group}} {{group_name_plural}}.",
  question_1: "How many pencils are there in 3 such boxes?",
  question_2: "Can you count the number of flowers in 5 bushes?",
  question_3: "How many dumplings are there in 3 such bowls?",
  question_4: "How many candies are there in 3 such bags?",
  question:
    "How many {{item_plural}} are there in {{group}} such {{group_name_plural}}?",
  tap: "Tap each {{item_in_group}}.",
  tap_next: "Tap the next {{item_in_group}}.",
  tap_1: "Tap each pencil box.",
  tap_2: "Tap each flower bush.",
  tap_3: "Tap each bowl of dumpling.",
  tap_4: "Tap each bag of candy.",
  tap_next_1: "Tap the next pencil box.",
  tap_next_2: "Tap the next flower bush.",
  tap_next_3: "Tap the next bowl of dumpling.",
  tap_next_4: "Tap the next bag of candy.",
  correct_mid: "That's correct!",
  mid_step_top:
    "How many {{item_plural}} are there in {{current_image}} {{group_name_neutral}}?<br><b>{{currentQuestionString}}?</b>",
  click_buttons:
    "Enter your answer in the yellow box by clicking the buttons below.",
};
const dataForQuestionsEnglish = {
  1: {
    group: 3,
    count: 3,
    item: "pencil",
    item_plural: "pencils",
    group_name:"box",
    group_name_plural: "boxes",
    answer: 9,
  },
  2: {
    group: 5,
    count: 4,
    item: "flower",
    item_plural: "flowers",
    group_name_plural: "bushes",
    group_name: "bush",
    answer: 20,
  },
  3: {
    group: 4,
    count: 3,
    item: "dumpling",
    group_name_plural: "bowls",
    group_name: "bowl",
    answer: 12,
    item_plural: "dumplings",
  },
  4: {
    group: 3,
    count: 5,
    item: "candy",
    group_name_plural: "bags",
    group_name: "bag",
    answer: 15,
    item_plural: "candies",
  },
};
const overlayDataEnglish = {
  heading: "Activity Complete!",
  paragraph: `If you want to try again, click on the 'Start Over' button. `,
};

const leftInstructionsIndonesian = {
  hmm: "Hmm... Kita perlu {{count}} diambil {{group}} kali.<br><br><b>{{questionString}}&nbsp;?</b>",
  try_answering: "Coba jawab ini menggunakan tombol di bawah.",
  try_answering_again: "Coba jawab lagi menggunakan tombol di bawah.",
  hint: "Kita mendapatkan jawabannya dengan melakukan <b>perkalian</b>.",
  wrong: "Ups! Kita mendapatkan jawabannya dengan <b>perkalian</b>.",
  correct: "Kerja bagus! Kita mendapatkan jawabannya dengan <b>perkalian</b>.",
  final_correct_top: "Hebat!",
  final_correct:
    "{{count}} {{item_plural}} diambil {{group}} kali adalah:<br><b> {{questionString}} {{answer}}</b> {{item_plural}} dalam {{group}} {{group_name_plural}}.",
  question_1: "Berapa banyak pensil yang ada di 3 kotak seperti itu?",
  question_2: "Bisakah kamu menghitung jumlah bunga di 5 semak?",
  question_3: "Berapa banyak pangsit yang ada di 3 mangkuk seperti itu?",
  question_4: "Berapa banyak permen yang ada di 3 tas seperti itu?",
  question:
    "Berapa banyak {{item_plural}} yang ada di {{group}} {{group_name_plural}} seperti itu?",
  tap: "Ketuk setiap {{item_in_group}}.",
  tap_next: "Ketuk {{item_in_group}} berikutnya.",
  tap_1: "Ketuk setiap kotak pensil.",
  tap_2: "Ketuk setiap semak bunga.",
  tap_3: "Ketuk setiap mangkuk pangsit.",
  tap_4: "Ketuk setiap tas permen.",
  tap_next_1: "Ketuk kotak pensil berikutnya.",
  tap_next_2: "Ketuk semak bunga berikutnya.",
  tap_next_3: "Ketuk mangkuk pangsit berikutnya.",
  tap_next_4: "Ketuk tas permen berikutnya.",
  correct_mid: "Itu benar!",
  mid_step_top:
    "Berapa banyak {{item_plural}} yang ada di {{current_image}} {{group_name_plural}}?<br><b>{{currentQuestionString}}?</b>",
  click_buttons:
    "Masukkan jawabanmu di kotak kuning dengan mengklik tombol di bawah.",
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
  },
  2: {
    group: 5,
    count: 4,
    item: "bunga",
    item_plural: "bunga",
    group_name_plural: "semak",
    group_name: "semak",
    answer: 20,
  },
  3: {
    group: 4,
    count: 3,
    item: "pangsit",
    group_name_plural: "mangkuk",
    group_name: "mangkuk",
    answer: 12,
    item_plural: "pangsit",
  },
  4: {
    group: 3,
    count: 5,
    item: "permen",
    group_name_plural: "kantong",
    group_name: "kantong",
    answer: 15,
    item_plural: "permen",
  },
};