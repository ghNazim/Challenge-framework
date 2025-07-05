const flag = localStorage.getItem("flag");

const textsEnglish = {
  headings: {
    hundreds: "Hundreds",
    tens: "Tens",
    ones: "Ones",
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
    overlay_heading: "Activity Complete!",
    overlay_text: "If you want to try again, Click on the 'Start Over' button.",
  },
};

const textsIndonesian = {
  headings: {
    hundreds: "Ratusan",
    tens: "Puluhan",
    ones: "Satuan",
  },
  buttons: {
    set: "Atur",
    next: "Berikutnya",
    submit: "Kirim",
    start_over: "Mulai Lagi",
    add_unit: "Tambahkan Tempat Satuan",
    add_tens: "Tambahkan Tempat Puluhan",
    add_hundreds: "Tambahkan Tempat Ratusan",
    carryOver_unit: "Bawa ke Puluhan",
    carryOver_tens: "Bawa ke Ratusan",
    regroup: "Kelompokkan Ulang",
  },
  instructions: {
    start: "Klik tombol di bagian bawah layar untuk melanjutkan.",
    set: "Atur jawaban menggunakan tombol '+' dan '-'.",
    correct: "Kerja bagus! Kamu telah menjumlahkan dua angka.",
    wrong: "Coba lagi. Jawaban itu belum benar.",
    finished: "Selamat! Kamu telah menyelesaikan semua pertanyaan.",
    overlay_heading: "Aktivitas Selesai!",
    overlay_text: "Jika kamu ingin mencoba lagi, klik tombol 'Mulai Lagi'.",
  },
};


const texts = flag === "ENGLISH" ? textsEnglish : textsIndonesian;
