const flag = "ENGLISH";//<<-- change to "INDONESIAN" or "ENGLISH" to change language

const textsEnglish = {
  headings: {
    hundreds: "Hundreds",
    tens: "Tens",
    ones: "Ones",
    H: "H",
    T: "T",
    O: "O",
  },
  buttons: {
    set1: "Set First Number",
    set2: "Set Second Number",
    _next: "Next",
    next: "Next Question",
    add_unit: "Add Ones Place",
    add_ten: "Add Tens Place",
    add_hundred: "Add Hundreds Place",
    carryOver_unit: "Carry Over to Tens",
    carryOver_ten: "Carry Over to Hundreds",
    start_over: "Start Over",
    submit: "Submit",
    okay: "Okay",
  },
  instructions: {
    start: "Click on the button at the bottom of your screen to proceed.",
    set1: "Use the '+' and '-' buttons to set the first number.",
    set1_correct:
      "Great job! You set the first number correctly. Let's set the second one.",

    set2: "Use the '+' and '-' buttons to set the second number.",
    set1_success:
      "You have set the first number correctly. Let's set the second one.",
    set2_success:
      "You have set the second number correctly. Let's add them up.",
    units1: "Bring the cubes at ones place together.",
    question: "Answer the following question to proceed. Click 'Next'.",
    unitsCarry:
      "Ten ones equal one ten. So, lets carry them over to the tens place.",
    tens1: "Bring the rods at tens place together.",
    tensCarry:
      "Ten tens equal one hundreds. So, lets carry them over to the hundreds place.",
    hundreds1: "Bring the flats at hundreds place together.",
    result: "Adding {{num1}} and {{num2}}, we get {{sum}}.",
    tryNew: "Congratulations! You have added two numbers successfully.",
    finished: "Congratulations! You have added two numbers successfully.",
    overlay_heading: "Activity Complete!",
    overlay_text: "If you want to try again, Click on the 'Start Over' button.",
  },
};

const mcqObjectEnglish = {
  questions: [
    {
      question: "Which place do we add first?",
      options: ["Ones", "Tens", "Hundreds"],
      correctAnswer: 0,
    },
    {
      question:
        "Ones place can not hold more than 9 cubes. What should we do next?",
      options: [
        "Ignore the extra cubes",
        "Break them into smaller cubes",
        "Carry 10 cubes over to the tens place.",
      ],
      correctAnswer: 2,
    },
    {
      question: "What place should we add next?",
      options: ["Ones", "Tens", "Hundreds"],
      correctAnswer: 1,
    },
    {
      question:
        "Tens place can not hold more than 9 rods. What should we do next?",
      options: [
        "Put extra rods in the ones place.",
        "Carry 10 rods over to the hundreds place.",
        "Throw away the extra rods.",
      ],
      correctAnswer: 1,
    },
    {
      question: "{{u1}} + {{u2}} = ",
      options: ["{{usum}}", "{{uSumMinus}}", "{{uSumPlus}}"],
      correctAnswer: 0,
    },
    {
      question: "{{t1}} + {{t2}} + {{overflowUnits}} =",
      options: ["{{tSumMinus}}", "{{tSum}}", "{{tSumPlus}}"],
      correctAnswer: 1,
    },
    {
      question: "{{h1}} + {{h2}} + {{overflowTens}} =",
      options: ["{{hSumMinus}}", "{{hSumPlus}}", "{{hSum}}"],
      correctAnswer: 2,
    },
  ],
  currentQuestionIndex: 0,
};

const textsIndonesian = {
  headings: {
    hundreds: "Ratusan",
    tens: "Puluhan",
    ones: "Satuan",
    H: "R",
    T: "P",
    O: "S",
  },
  buttons: {
    set1: "Atur Angka Pertama",
    set2: "Atur Angka Kedua",
    _next: "Berikutnya",
    next: "Soal Berikutnya",
    add_unit: "Tambah Satuan",
    add_ten: "Tambah Puluhan",
    add_hundred: "Tambah Ratusan",
    carryOver_unit: "Bawa ke Puluhan",
    carryOver_ten: "Bawa ke Ratusan",
    start_over: "Mulai Lagi",
    submit: "Kirim",
    okay: "Oke",
  },
  instructions: {
    start: "Klik tombol di bagian bawah layar untuk melanjutkan.",
    set1: "Gunakan tombol '+' dan '-' untuk mengatur angka pertama.",
    set1_correct:
      "Kerja bagus! Kamu telah mengatur angka pertama dengan benar. Sekarang atur angka kedua.",

    set2: "Gunakan tombol '+' dan '-' untuk mengatur angka kedua.",
    set1_success:
      "Kamu telah mengatur angka pertama dengan benar. Sekarang atur angka kedua.",
    set2_success:
      "Kamu telah mengatur angka kedua dengan benar. Sekarang mari kita jumlahkan.",
    units1: "Gabungkan kubus di tempat satuan.",
    question: "Jawab pertanyaan berikut untuk melanjutkan. Klik 'Berikutnya'.",
    unitsCarry:
      "Sepuluh satuan sama dengan satu puluhan. Jadi, mari kita bawa ke tempat puluhan.",
    tens1: "Gabungkan batang di tempat puluhan.",
    tensCarry:
      "Sepuluh puluhan sama dengan satu ratusan. Jadi, mari kita bawa ke tempat ratusan.",
    hundreds1: "Gabungkan lembaran di tempat ratusan.",
    result: "Menjumlahkan {{num1}} dan {{num2}}, kita mendapatkan {{sum}}.",
    tryNew: "Selamat! Kamu telah berhasil menjumlahkan dua angka.",
    finished: "Selamat! Kamu telah berhasil menjumlahkan dua angka.",
    overlay_heading: "Aktivitas Selesai!",
    overlay_text: "Jika kamu ingin mencoba lagi, klik tombol 'Mulai Lagi'.",
  },
};


const mcqObjectIndonesian = {
  questions: [
    {
      question: "Tempat mana yang harus kita jumlahkan terlebih dahulu?",
      options: ["Satuan", "Puluhan", "Ratusan"],
      correctAnswer: 0,
    },
    {
      question:
        "Tempat satuan tidak dapat menampung lebih dari 9 kubus. Apa yang harus kita lakukan?",
      options: [
        "Abaikan kubus yang berlebih",
        "Pecah menjadi kubus yang lebih kecil",
        "Bawa 10 kubus ke tempat puluhan.",
      ],
      correctAnswer: 2,
    },
    {
      question: "Tempat mana yang harus kita jumlahkan selanjutnya?",
      options: ["Satuan", "Puluhan", "Ratusan"],
      correctAnswer: 1,
    },
    {
      question:
        "Tempat puluhan tidak dapat menampung lebih dari 9 batang. Apa yang harus kita lakukan?",
      options: [
        "Pindahkan batang berlebih ke tempat satuan.",
        "Bawa 10 batang ke tempat ratusan.",
        "Buang batang yang berlebih.",
      ],
      correctAnswer: 1,
    },
    {
      question: "{{u1}} + {{u2}} = ",
      options: ["{{usum}}", "{{uSumMinus}}", "{{uSumPlus}}"],
      correctAnswer: 0,
    },
    {
      question: "{{t1}} + {{t2}} + {{overflowUnits}} =",
      options: ["{{tSumMinus}}", "{{tSum}}", "{{tSumPlus}}"],
      correctAnswer: 1,
    },
    {
      question: "{{h1}} + {{h2}} + {{overflowTens}} =",
      options: ["{{hSumMinus}}", "{{hSumPlus}}", "{{hSum}}"],
      correctAnswer: 2,
    },
  ],
  currentQuestionIndex: 0,
};


const texts = flag === "ENGLISH" ? textsEnglish : textsIndonesian;
const mcqObject = flag === "ENGLISH" ? mcqObjectEnglish : mcqObjectIndonesian;
