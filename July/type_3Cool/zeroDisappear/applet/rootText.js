const leftInstructionsEnglish = {
  // Texts for the original applet
  initial_prompt: "Solve the expression on the card.",
  solve_the_problem: "Use the numpad to enter your answer.",
  correct_feedback: "That's right!",
  good_job: "Great work!",
  wrong_feedback: "Not quite.",
  try_again: "Let's try the next one.",
  activity_complete: "You've finished all the cards!",
  well_done: "Well done!",

  // Texts for the new applet
  lets_solve: "Let's solve a problem!",
  click_start: "Click Start to begin.",
  step1_initial: "Let's break down the problem.",
  step1_prompt: "Click the button to see the first step.",
  step1_after_zero_gone: "Good! Now we have a simpler problem.",
  step1_prompt_again: "Click the button to solve it.",

  step2_initial: "Let's find the product of these numbers.",
  step2_prompt: "Click on the box to answer the multiplication.",
  step2_after_answer: "Excellent! That's the correct product.",
  step2_prompt_again: "Let's move to the final step.",
  numpad_1: "Use the keypad to enter your answer.",
  numpad_2: "Click on the green tick button to submit your answer.",
  step3_initial: "Now, let's bring back the zero we ignored.",
  step3_prompt_first: "Click the button to add the zero back.",
  step3_after_first_zero: "Great! One last step.",
  step3_prompt_second: "Click the button to see the final answer.",
  step3_complete: "And there we have it!",
  step3_final_answer: "The final answer is {finalProduct}.",
  step1_brief: "Remove {zeroCount} zeroes.",
  step2_brief: "Find the product.",
  step3_brief: "Bring back {zeroCount} zeroes.",
};
const appletTextEnglish = {
  top_heading: "{m0} × {n}",
  steps: ["Remove zeroes", "Find the product", "Bring back zeroes"],
  step_headings: {
    step1: "Step 1: {m0} has {zeroCount} zeroes. Let's remove them.",
    step2: "Step 2: Find the product",
    step3: "Step 3: Bring back {zeroCount} zeroes",
    step1_singular: "Step 1: {m0} has {zeroCount} zero. Let's remove it.",
    step3_singular: "Step 3: Bring back {zeroCount} zero.",
  },
  math_content: {
    step1: "<div>{m0_formatted} &times; {n}</div>",
    step2_q: "What is {m1} &times; {n}?",
    step2_a:
      "{m1} &times; {n} = <div class='answer-box' id='answer-box'>?</div>",
    step3_initial:
      "<div>{m1}{initial_zeros} &times; {n} = {product}{final_zeros}</div>",
  },
};
const dataForQuestionsEnglish = {
  // This can be used for more complex data later if needed.
};

const overlayDataEnglish = {
  heading: "Activity Complete!",
  paragraph: `You've successfully solved the problem. Great job!`,
};

const buttonTextsEnglish = {
  next: "Next",
  start_over: "Start Over",
  previous: "Previous",
  submit: "Submit",
  proceed: "Proceed",
  hint: "Hint",
  step_button: "Next Step",
  start: "Start",
  remove_zero: "Remove Zero",
  bring_back_zero: "Bring back Zero",
};

// --- Applet Specific Texts ---


// --- INDONESIAN ---
const leftInstructionsIndonesian = {
  // Teks untuk applet asli
  initial_prompt: "Selesaikan ekspresi pada kartu.",
  solve_the_problem: "Gunakan numpad untuk memasukkan jawabanmu.",
  correct_feedback: "Itu benar!",
  good_job: "Kerja bagus!",
  wrong_feedback: "Kurang tepat.",
  try_again: "Mari kita coba yang berikutnya.",
  activity_complete: "Kamu telah menyelesaikan semua kartu!",
  well_done: "Bagus sekali!",

  // Teks untuk applet baru
  lets_solve: "Ayo selesaikan soal!",
  click_start: "Klik Mulai untuk memulai.",
  step1_initial: "Ayo kita pecahkan soalnya.",
  step1_prompt: "Klik tombol untuk melihat langkah pertama.",
  step1_after_zero_gone: "Bagus! Sekarang soalnya lebih sederhana.",
  step1_prompt_again: "Klik tombol untuk menyelesaikannya.",

  step2_initial: "Ayo cari hasil kali angka-angka ini.",
  step2_prompt: "Klik pada kotak untuk menjawab perkalian.",
  step2_after_answer: "Luar biasa! Hasil kalinya benar.",
  step2_prompt_again: "Ayo lanjut ke langkah terakhir.",
  numpad_1: "Gunakan papan tombol untuk memasukkan jawabanmu.",
  numpad_2: "Klik tombol centang hijau untuk mengirimkan jawabanmu.",
  step3_initial:
    "Sekarang, ayo kita kembalikan angka nol yang tadi kita abaikan.",
  step3_prompt_first: "Klik tombol untuk menambahkan kembali angka nol.",
  step3_after_first_zero: "Bagus! Satu langkah lagi.",
  step3_prompt_second: "Klik tombol untuk melihat jawaban akhir.",
  step3_complete: "Dan ini dia!",
  step3_final_answer: "Jawaban akhirnya adalah {finalProduct}.",
  step1_brief: "Hilangkan {zeroCount} angka nol.",
  step2_brief: "Cari hasil kalinya.",
  step3_brief: "Kembalikan {zeroCount} angka nol.",
};
const appletTextIndonesian = {
  top_heading: "{m0} × {n}",
  steps: ["Hilangkan angka nol", "Cari hasil kali", "Kembalikan angka nol"],
  step_headings: {
    step1:
      "Langkah 1: {m0} memiliki {zeroCount} angka nol. Ayo kita hilangkan.",
    step2: "Langkah 2: Cari hasil kali",
    step3: "Langkah 3: Kembalikan {zeroCount} angka nol",
    step1_singular:
      "Langkah 1: {m0} memiliki {zeroCount} angka nol. Ayo kita hilangkan.",
    step3_singular: "Langkah 3: Kembalikan {zeroCount} angka nol.",
  },
  math_content: {
    step1: "<div>{m0_formatted} &times; {n}</div>",
    step2_q: "Berapakah {m1} &times; {n}?",
    step2_a:
      "{m1} &times; {n} = <div class='answer-box' id='answer-box'>?</div>",
    step3_initial:
      "<div>{m1}{initial_zeros} &times; {n} = {product}{final_zeros}</div>",
  },
};

const dataForQuestionsIndonesian = {
  // ...
};

const overlayDataIndonesian = {
  heading: "Aktivitas Selesai!",
  paragraph: `Anda telah berhasil menyelesaikan masalah. Kerja bagus!`,
};

const buttonTextsIndonesian = {
  next: "Berikutnya",
  start_over: "Mulai Lagi",
  previous: "Sebelumnya",
  submit: "Kirim",
  proceed: "Lanjutkan",
  hint: "Petunjuk",
  step_button: "Langkah Berikutnya",
  start: "Mulai",
  remove_zero: "Hapus Nol",
  bring_back_zero: "Kembalikan Nol",
};

