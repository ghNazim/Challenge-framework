const flag = "ENGLISH";

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
    units1: "Bring the cubes at ones place together to sum them up.",
    question: "Answer the following question to proceed. Click 'Next'.",
    unitsCarry:
      "Ten ones equal one ten. So, lets carry them over to the tens place.",
    tens1: "Bring the rods at tens place together to sum them up.",
    tensCarry:
      "Ten tens equal one hundreds. So, lets carry them over to the hundreds place.",
    hundreds1: "Bring the flats at hundreds place together to sum them up.",
    result: "Adding {{num1}} and {{num2}}, we get {{sum}}.",
    tryNew: "Congratulations! You have added two numbers successfully.",
    finished: "Congratulations! You have added two numbers successfully.",
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
      question: "What is the sum of {{u1}} and {{u2}}?",
      options: ["{{usum}}", "{{uSumMinus}}", "{{uSumPlus}}"],
      correctAnswer: 0,
    },
    {
      question: "What is the sum of {{t1}} and {{t2}}?",
      options: ["{{tSumMinus}}", "{{tSum}}", "{{tSumPlus}}"],
      correctAnswer: 1,
    },
    {
      question: "What is the sum of {{h1}} and {{h2}}?",
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
    next: "Pertanyaan Berikutnya",
    add_unit: "Tambahkan Tempat Satuan",
    add_ten: "Tambahkan Tempat Puluhan",
    add_hundred: "Tambahkan Tempat Ratusan",
    carryOver_unit: "Bawa ke Puluhan",
    carryOver_ten: "Bawa ke Ratusan",
    start_over: "Mulai Lagi",
    submit: "Kirim",
  },
  instructions: {
    start: "Klik tombol di bagian bawah layar untuk melanjutkan.",
    set1: "Gunakan tombol '+' dan '-' untuk mengatur angka pertama.",
    set1_correct:
      "Kerja bagus! Kamu sudah mengatur angka pertama dengan benar. Sekarang atur angka kedua.",
    set1_success:
      "Kamu sudah mengatur angka pertama dengan benar. Sekarang atur angka kedua.",
    set2: "Gunakan tombol '+' dan '-' untuk mengatur angka kedua.",
    set2_success:
      "Kamu sudah mengatur angka kedua dengan benar. Sekarang mari kita jumlahkan.",
    units1: "Gabungkan kubus di tempat satuan untuk menjumlahkannya.",
    question: "Jawab pertanyaan berikut untuk melanjutkan. Klik 'Berikutnya'.",
    unitsCarry:
      "Sepuluh satuan sama dengan satu puluhan. Mari kita pindahkan ke tempat puluhan.",
    tens1: "Gabungkan batang di tempat puluhan untuk menjumlahkannya.",
    tensCarry:
      "Sepuluh puluhan sama dengan satu ratusan. Mari kita pindahkan ke tempat ratusan.",
    hundreds1: "Gabungkan bidang di tempat ratusan untuk menjumlahkannya.",
    result: "Menjumlahkan {{num1}} dan {{num2}}, kita mendapatkan {{sum}}.",
    tryNew: "Selamat! Kamu berhasil menjumlahkan dua angka.",
    finished: "Selamat! Kamu berhasil menjumlahkan dua angka.",
  },
};

const mcqObjectIndonesian = {
  questions: [
    {
      question: "Kita mulai menjumlahkan dari tempat yang mana?",
      options: ["Satuan", "Puluhan", "Ratusan"],
      correctAnswer: 0,
    },
    {
      question:
        "Tempat satuan tidak dapat menampung lebih dari 9 kubus. Apa yang harus kita lakukan?",
      options: [
        "Abaikan kubus lebihnya",
        "Pecahkan jadi kubus lebih kecil",
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
        "Tempat puluhan tidak bisa menampung lebih dari 9 batang. Apa yang harus kita lakukan?",
      options: [
        "Masukkan batang lebih ke tempat satuan.",
        "Bawa 10 batang ke tempat ratusan.",
        "Buang batang lebihnya.",
      ],
      correctAnswer: 1,
    },
    {
      question: "Berapa hasil penjumlahan dari {{u1}} dan {{u2}}?",
      options: ["{{usum}}", "{{uSumMinus}}", "{{uSumPlus}}"],
      correctAnswer: 0,
    },
    {
      question:
        "Berapa hasil penjumlahan dari {{t1}} and {{t2}}?",
      options: ["{{tSumMinus}}", "{{tSum}}", "{{tSumPlus}}"],
      correctAnswer: 1,
    },
    {
      question:
        "Berapa hasil penjumlahan dari {{h1}} and {{h2}}?",
      options: ["{{hSumMinus}}", "{{hSumPlus}}", "{{hSum}}"],
      correctAnswer: 2,
    },
  ],
  currentQuestionIndex: 0,
};

const texts = flag === "ENGLISH" ? textsEnglish : textsIndonesian;
const mcqObject = flag === "ENGLISH" ? mcqObjectEnglish : mcqObjectIndonesian;
