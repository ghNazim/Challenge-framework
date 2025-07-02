const flag = "ENGLISH"; //<--Language flag

// ----------------------------------------------------
localStorage.setItem("flag", flag);
const textsEnglish = {
  headings: {
    hundreds: "H",
    tens: "T",
    ones: "O",
  },
  buttons: {
    set: "Set",
    next: "Next",
    submit: "Submit",
    start_over: "Start Over",
    add_unit: "Add Ones Place",
    add_tens: "Add Tens Place",
    add_hundreds: "Add Hundreds Place",
    carryOver_unit: "Carry Over",
    carryOver_tens: "Carry Over",
    regroup: "Regroup", // A more general term for regroup/borrow
  },
  instructions: {
    start: "Click on the button at the bottom of your screen to proceed.",
    set: "Set the answer using '+' and '-' buttons.",
    correct: "Good job! You have added two numbers.",
    wrong: "Try again. That's not the correct answer.",
    finished: "Congratulations! You have completed all questons.",
  },
};

textsIndonesian = {
  headings: {
    hundreds: "R", // Ratusan
    tens: "P", // Puluhan
    ones: "S", // Satuan
  },
  buttons: {
    set: "Atur",
    next: "Berikutnya",
    submit: "Kirim",
    start_over: "Mulai Lagi",
    add_unit: "Tambah Tempat Satuan",
    add_tens: "Tambah Tempat Puluhan",
    add_hundreds: "Tambah Tempat Ratusan",
    carryOver_unit: "Bawa ke Atas",
    carryOver_tens: "Bawa ke Atas",
    regroup: "Kelompokkan Ulang",
  },
  instructions: {
    start: "Klik tombol di bagian bawah layar Anda untuk melanjutkan.",
    set: "Atur jawabannya menggunakan tombol '+' dan '-'.",
    correct: "Bagus! Kamu telah menjumlahkan dua angka.",
    wrong: "Coba lagi. Jawabanmu belum tepat.",
    finished: "Selamat! Kamu telah menyelesaikan semua soal.",
  },
};


const texts = flag === "ENGLISH" ? textsEnglish : textsIndonesian;