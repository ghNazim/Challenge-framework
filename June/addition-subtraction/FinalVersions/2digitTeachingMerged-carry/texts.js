const flag = "ENGLISH";

const textsEnglish = {
  headings: {
    hundreds: "H",
    tens: "T",
    ones: "O",
  },
  buttons: {
    set1: "Set First Number",
    set2: "Set Second Number",
    next: "Next Question",
    add_unit: "Add Ones Place",
    add_ten: "Add Tens Place",
    add_hundred: "Add Hundreds Place",
    carryOver_unit: "Carry Over to Tens",
    carryOver_ten: "Carry Over to Hundreds",
    start_over: "Start Over",
    submit: "Submit",
  },
  instructions: {
    start: "Click on the button at the bottom of your screen to proceed.",
    set1: "Use the '+' and '-' buttons to set the first number.",
    set2: "Use the '+' and '-' buttons to set the second number.",
    units1: "Bring the cubes at ones place together to sum them up.",
    unitsCarry:
      "Ten ones equal one ten. So, lets carry them over to the tens place.",
    tens1: "Bring the rods at tens place together to sum them up.",
    tensCarry:
      "Ten tens equal one hundreds. So, lets carry them over to the hundreds place.",
    hundreds1: "Bring the flats at hundreds place together to sum them up.",
    result: "Sum of these two numbers is: ",
    tryNew: "Congratulations! You have added two numbers successfully.",
    finished: "Congratulations! You have added two numbers successfully.",
  },
};

const mcqObjectEnglish = {
  questions: [
    {
      question: "Which place do we add first?",
      options: ["Ones", "Tens"],
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
      options: ["Ones", "Tens"],
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
      question: "What is the sum of {{u1}} and {{u2}}?",
      options: ["{{usum}}", "{{uSumMinus}}", "{{uSumPlus}}"],
      correctAnswer: 0,
    },
    {
      question: "What is the sum of {{t1}}, {{t2}} and {{overflowUnits}} ?",
      options: ["{{tSumMinus}}", "{{tSum}}", "{{tSumPlus}}"],
      correctAnswer: 1,
    },
    {
      question: "What is the sum of {{h1}}, {{h2}} and {{overflowTens}}?",
      options: ["{{hSumMinus}}", "{{hSumPlus}}", "{{hSum}}"],
      correctAnswer: 2,
    },
  ],
  currentQuestionIndex: 0,
};

const textsIndonesian = {
  headings: {
    hundreds: "R", // Ratusan
    tens: "P", // Puluhan
    ones: "S", // Satuan
  },
  buttons: {
    set1: "Atur Angka Pertama",
    set2: "Atur Angka Kedua",
    next: "Soal Berikutnya",
    add_unit: "Tambah Tempat Satuan",
    add_ten: "Tambah Tempat Puluhan",
    add_hundred: "Tambah Tempat Ratusan",
    carryOver_unit: "Bawa ke Tempat Puluhan",
    carryOver_ten: "Bawa ke Tempat Ratusan",
    start_over: "Mulai Lagi",
    submit: "Kirim",
  },
  instructions: {
    start: "Klik tombol di bagian bawah layar Anda untuk melanjutkan.",
    set1: "Gunakan tombol '+' dan '-' untuk mengatur angka pertama.",
    set2: "Gunakan tombol '+' dan '-' untuk mengatur angka kedua.",
    units1: "Gabungkan kubus di tempat satuan untuk menjumlahkannya.",
    unitsCarry:
      "Sepuluh satuan sama dengan satu puluhan. Mari kita bawa ke tempat puluhan.",
    tens1: "Gabungkan batang di tempat puluhan untuk menjumlahkannya.",
    tensCarry:
      "Sepuluh puluhan sama dengan satu ratusan. Mari kita bawa ke tempat ratusan.",
    hundreds1: "Gabungkan lempeng di tempat ratusan untuk menjumlahkannya.",
    result: "Jumlah dari kedua angka tersebut adalah: ",
    tryNew: "Selamat! Kamu telah berhasil menjumlahkan dua angka.",
    finished: "Selamat! Kamu telah berhasil menjumlahkan dua angka.",
  },
};

const mcqObjectIndonesian = {
  questions: [
    {
      question: "Tempat mana yang harus kita jumlahkan terlebih dahulu?",
      options: ["Satuan", "Puluhan"],
      correctAnswer: 0,
    },
    {
      question:
        "Tempat satuan tidak dapat menampung lebih dari 9 kubus. Apa yang harus kita lakukan selanjutnya?",
      options: [
        "Abaikan kubus yang berlebih",
        "Pecah menjadi kubus yang lebih kecil",
        "Bawa 10 kubus ke tempat puluhan",
      ],
      correctAnswer: 2,
    },
    {
      question: "Tempat mana yang harus kita jumlahkan setelah itu?",
      options: ["Satuan", "Puluhan"],
      correctAnswer: 1,
    },
    {
      question:
        "Tempat puluhan tidak dapat menampung lebih dari 9 batang. Apa yang harus kita lakukan selanjutnya?",
      options: [
        "Letakkan batang tambahan di tempat satuan",
        "Bawa 10 batang ke tempat ratusan",
        "Buang batang yang berlebih",
      ],
      correctAnswer: 1,
    },
    {
      question: "Berapakah hasil penjumlahan dari {{u1}} dan {{u2}}?",
      options: ["{{usum}}", "{{uSumMinus}}", "{{uSumPlus}}"],
      correctAnswer: 0,
    },
    {
      question:
        "Berapakah hasil penjumlahan dari {{t1}}, {{t2}} dan {{overflowUnits}}?",
      options: ["{{tSumMinus}}", "{{tSum}}", "{{tSumPlus}}"],
      correctAnswer: 1,
    },
    {
      question:
        "Berapakah hasil penjumlahan dari {{h1}}, {{h2}} dan {{overflowTens}}?",
      options: ["{{hSumMinus}}", "{{hSumPlus}}", "{{hSum}}"],
      correctAnswer: 2,
    },
  ],
  currentQuestionIndex: 0,
};






const texts = flag === "ENGLISH" ? textsEnglish : textsIndonesian;
const mcqObject = flag === "ENGLISH" ? mcqObjectEnglish : mcqObjectIndonesian;
