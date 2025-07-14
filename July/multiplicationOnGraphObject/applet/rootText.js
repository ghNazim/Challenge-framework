const questionsEnglish = [
  {
    col: 2,
    row: 6,
    item: "cup",
    item_plural: "cups",
    group_name: "tray",
    group_name_plural: "trays",
  },
  {
    col: 3,
    row: 4,
    item: "dumpling",
    item_plural: "dumplings",
    group_name: "bowl",
    group_name_plural: "bowls",
  },
];
const leftInstructionsEnglish = {
  shortData: {
    leftBadge: `<div class="top-badge">Repeated Addition</div>`,
    rightBadge: `<div class="top-badge">Multiplication</div>`,
  },
  question:
    "How many {{item_plural}} will be in {{row_count}} {{group_name_plural}} like in the image shown?",
  h1Text:
    "What is the result of {{col_count}} taken {{row_count}} times?<br><br>{{repeated_addition_string}} = ?",
  cornerText: "{{row_count}} times",
  start:
    "How many {{item_plural}} will be in {{row_count}} {{group_name_plural}} like in the image shown?<br><br>Let's learn how we can find this.",
  set_horizontal:
    "First, how many {{item_plural}} will be in 1 {{group_name}}?<br><br> Use the slider at the bottom and tap the button to set the count of {{item_plural}} in one {{group_name}}.",
  wrong_feedback_x:
    "Oops… that is not the count of {{item_plural}} in the image shown to us in the question… Try again…<br><br>Use the slider and tap the button to set the count of {{item_plural}} in 1 tray…",
  wrong_feedback_y:
    "Oops… that is not the count of {{group_name_plural}}. Try again…<br><br>Use the slider and tap the button to set the count of {{group_name_plural}}.",
  set_vertical:
    "Good job!<br> Now, as per the question, how many {{group_name_plural}} do we need?<br><br>Use the slider on the right and tap the button to set the count of {{group_name_plural}}.",
  complete_setting:
    "Good Job!<br>What we see here is a count of {{ans}} {{item_plural}} in {{row_count}} {{group_name_plural}}.<br>Let’s understand this better… Tap Next…",
  before_question:"What we see here is the multiplication grid.<br><br> Tap 'Next' to explore this further.",
  column_question:
    "How many columns are here in this multiplication grid? Tap the correct answer.",
  row_question:
    "{{col_count}} Columns! Good Job! How many rows are here in this multiplication grid? Tap the correct answer.",
  completed_questions:
    "{{col_count}} columns in {{row_count}} rows! Well done. <br><br>Let’s visualize this multiplication.<br><br>Tap 'Next'.",
  animation_1:
    "Each row is increasing by {{col_count}}… <br>{{row_count}} rows of {{col_count}}…",
  animation_end:
    "Each row is increasing by {{col_count}}… <br>{{row_count}} rows of {{col_count}}…That’s {{row_count}} × {{col_count}} = {{ans}}.<br> Tap Replay at the left, or Next at the right…",
  completion:
    "{{row_count}} rows of {{col_count}} is {{ans}}, <br>or {{row_count}} × {{col_count}} = {{ans}}, the top right number in the grid!<br> That was fun and easy! Activity completed! Tap 'Summary'.",
  bottom_text: `{{row_count}} groups of {{col_count}} ... <br><span class="yellow-highlight">{{repeated_addition_string}}</span> = <span class="yellow-highlight">{{row_count}} × {{col_count}}</span> = <span class="yellow-highlight">{{ans}}</span>`,
  summary: `<span class="yellow-highlight">Multiplication</span> is repeated addition.<br><br>It can be thought of as counting in a simple grid:<br> <span class="yellow-highlight">number of rows</span> times <span class="yellow-highlight">number in each row</span>.<br><br>The answer is at the top right of the grid:<br><span class="yellow-highlight">number of rows</span> × <span class="yellow-highlight">number of columns</span>!`,
};

const leftInstructionsIndonesian = {
  shortData: {
    leftBadge: `<div class="top-badge">Penjumlahan Berulang</div>`,
    rightBadge: `<div class="top-badge">Perkalian</div>`,
  },
  h1Text:
    "Berapa hasil dari {{col_count}} diambil {{row_count}} kali?<br><br>5 + 5 + 5 + 5 = ?",
  cornerText: "5 ditambahkan <br>4 kali",
  start:
    "Apa jawaban dari penjumlahan berulang ini?<br><br>Ayo pelajari cara menemukannya… Ketuk 'Mulai'.",
  set_horizontal:
    "Ayo lakukan ini di petak perkalian.<br><br>Gunakan penggeser di bagian bawah dan ketuk tombol untuk mengatur angka 5 yang berulang satu kali.",
  set_vertical:
    "Kerja bagus! 5 angka sudah masuk…<br><br>Gunakan penggeser di sebelah kanan dan ketuk tombol untuk mengatur berapa kali ini perlu diulang…",
  complete_setting:
    "Kerja bagus!<br> Yang kita miliki di sini adalah hitungan {{ans}} dalam petak 5 yang diulang 4 kali…<br><br>Ketuk 'Berikutnya'.",
  column_question:
    "Ada berapa kolom di petak perkalian ini? Ketuk jawaban yang benar.",
  row_question:
    "5 Kolom! Kerja bagus! Ada berapa baris di petak perkalian ini? Ketuk jawaban yang benar.",
  completed_questions:
    "5 kolom dalam 4 baris! Bagus sekali. <br><br>Ayo kita visualisasikan perkalian ini.<br><br>Ketuk 'Berikutnya'.",
  animation_1: "Setiap baris bertambah 5… <br>5 diambil 4 kali…",
  animation_end:
    "Setiap baris bertambah 5… <br>5 diambil 4 kali…Itu adalah 4 × 5 = 20.<br> Ketuk Putar Ulang di kiri, atau Berikutnya di kanan…",
  completion:
    "4 baris dari 5 adalah 20, <br>atau 4 × 5 = 20, angka kanan atas di petak!<br> Itu menyenangkan dan mudah! Aktivitas selesai! Ketuk 'Ringkasan'.",
  bottom_text: `5 diambil 4 kali... <br><span class="yellow-highlight">5 + 5 + 5 + 5</span> = <span class="yellow-highlight">4 × 5</span> = <span class="yellow-highlight">20</span>`,
  summary: `<span class="yellow-highlight">Perkalian</span> adalah penjumlahan berulang.<br><br>Ini bisa dianggap sebagai menghitung dalam petak sederhana:<br> <span class="yellow-highlight">jumlah baris</span> kali <span class="yellow-highlight">jumlah di setiap baris</span>.<br><br>Jawabannya ada di kanan atas petak:<br><span class="yellow-highlight">jumlah baris</span> × <span class="yellow-highlight">jumlah kolom</span>!`,
};

const buttonTextsEnglish = {
  next: "Next",
  start_over: "Start Over",
  previous: "Previous",
  replay: "Replay",
  submit: "Submit",
  proceed: "Proceed",
  hint: "Hint",
  check: "Check",
  set: "Set",
  start: "Start",
  summary: "Summary",
  next_question: "Next Question",
};

const buttonTextsIndonesian = {
  next: "Berikutnya",
  start_over: "Mulai Lagi",
  previous: "Sebelumnya",
  replay: "Putar Ulang",
  submit: "Kirim",
  proceed: "Lanjutkan",
  hint: "Petunjuk",
  check: "Periksa",
  set: "Atur",
  start: "Mulai",
  summary: "Ringkasan",
};
const overlayDataIndonesian = {
  heading: "Aktivitas Selesai!",
  paragraph: `Jika kamu ingin mencoba lagi, klik tombol 'Mulai Lagi'.`,
};

const overlayDataEnglish = {
  heading: "Activity Complete!",
  paragraph: `If you want to try again, click on the 'Start Over' button. `,
};
