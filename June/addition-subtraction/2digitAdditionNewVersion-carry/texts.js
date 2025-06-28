const flag = "ENGLISH"; //<-- Change this to "INDONESIAN" or "ENGLISH"
// LANGUAGE FLAG

const textsEnglish = {
  headings: {
    tens: "T",
    ones: "O",
  },
  buttons: {
    set1: "Set First Number",
    set2: "Set Second Number",
    next: "Next Question",
    add_unit: "Add Units Place",
    add_ten: "Add Tens Place",
    carryOver_unit: "Carry Over to Tens",
    start_over: "Start Over",
    submit: "Submit",
    start: "Start",
  },
  instructions: {
    start: "Click on the button at the bottom of your screen to proceed.",
    set1: "Use the '+' and '-' buttons to set the first number.",
    set2: "Use the '+' and '-' buttons to set the second number.",
    units1: "Bring the cubes at the ones place together to sum them up.",
    unitsCarry:
      "Ten ones equal one ten, so let's carry them over to the tens place.",
    tens1: "Bring the rods at the tens place together to sum them up.",
    result: "The sum of these two numbers is: ",
    tryNew: "Congratulations! You have added two numbers successfully.",
    finished: "Congratulations! You have added two numbers successfully.",
  },
  context_data: {
    page1: "Let's add {{num1}} and {{num2}}.",
    lets_add:
      "Let's add numbers by splitting them into tens and ones.<br><br>Try {{num1}} + {{num2}}.",
    put_unit:
      "Click on the + or - button to fill {{u1}} ones in the ones place for entering {{num1}} in the adding machine and submit.",
    wrong_unit:
      "You have submitted the wrong number. Please enter {{u1}} ones to submit {{num1}} in the adding machine.",
    put_ten:
      "Click on the + or - button to fill {{t1}} tens in the tens place for entering {{num1}} in the adding machine and submit.",
    wrong_ten:
      "You have submitted the wrong number. Please enter {{t1}} tens to submit {{num1}} in the adding machine.",
    put_unit2:
      "Click on the + or - button to fill {{u2}} in the ones place for entering {{num2}} in the adding machine and submit.",
    wrong_unit2:
      "You have submitted the wrong number. Please enter {{u2}} by clicking 6 times in the adding machine.",
    put_ten2:
      "Click on the + or - button to fill {{t2}} tens in the tens place for entering {{num2}} in the adding machine and submit.",
    wrong_ten2:
      "You have submitted the wrong number. Please enter {{t2}} tens to submit {{num2}} in the adding machine.",
    add_units: "Click the button below to bring ones together.",
    qsn_unit:
      "How many ones are there in total? Choose from the options given below.",
    unit_wrong_feedback:
      "You have submitted the wrong number. Please count the number of ones and click on the correct option again.",
    unit_overflow:
      "{{uSum}} is a 2-digit number. As {{uSum}} = 10 + {{u3}}, carry over 10 in the tens place as 1 ten.",
    add_tens: "Click the button below to bring tens together.",
    qsn_ten:
      "How many tens are there in total? Choose from the options given below.",
    ten_wrong_feedback:
      "You have submitted the wrong number. Please count the number of tens and click on the correct option again.",
    final_page:
      "That means there are a total of {{t3}} tens and {{u3}} ones in the adding machine. So, {{num1}} + {{num2}} = {{sum}}.",
  },
};
const textsIndonesian = {
  headings: {
    tens: "P",
    ones: "S",
  },
  buttons: {
    set1: "Atur Angka Pertama",
    set2: "Atur Angka Kedua",
    next: "Pertanyaan Selanjutnya",
    add_unit: "Tambahkan Tempat Satuan",
    add_ten: "Tambahkan Tempat Puluhan",
    carryOver_unit: "Bawa ke Tempat Puluhan",
    start_over: "Mulai Lagi",
    submit: "Kirim",
    start: "Mulai",
  },
  instructions: {
    start: "Klik tombol di bagian bawah layar Anda untuk melanjutkan.",
    set1: "Gunakan tombol '+' dan '-' untuk mengatur angka pertama.",
    set2: "Gunakan tombol '+' dan '-' untuk mengatur angka kedua.",
    units1: "Gabungkan kubus di tempat satuan untuk menjumlahkannya.",
    unitsCarry:
      "Sepuluh satuan sama dengan satu puluhan, jadi mari kita bawa ke tempat puluhan.",
    tens1: "Gabungkan batang di tempat puluhan untuk menjumlahkannya.",
    result: "Jumlah dari kedua angka tersebut adalah: ",
    tryNew: "Selamat! Anda telah berhasil menjumlahkan dua angka.",
    finished: "Selamat! Anda telah berhasil menjumlahkan dua angka.",
  },
  context_data: {
    page1: "Mari kita tambahkan {{num1}} dan {{num2}}.",
    lets_add:
      "Mari kita tambahkan angka dengan memisahkannya menjadi puluhan dan satuan.<br><br>Coba {{num1}} + {{num2}}.",
    put_unit:
      "Klik tombol + atau - untuk mengisi {{u1}} satuan di tempat satuan untuk memasukkan {{num1}} ke dalam mesin penjumlah dan kirim.",
    wrong_unit:
      "Anda telah mengirimkan angka yang salah. Harap masukkan {{u1}} satuan untuk mengirim {{num1}} ke dalam mesin penjumlah.",
    put_ten:
      "Klik tombol + atau - untuk mengisi {{t1}} puluhan di tempat puluhan untuk memasukkan {{num1}} ke dalam mesin penjumlah dan kirim.",
    wrong_ten:
      "Anda telah mengirimkan angka yang salah. Harap masukkan {{t1}} puluhan untuk mengirim {{num1}} ke dalam mesin penjumlah.",
    put_unit2:
      "Klik tombol + atau - untuk mengisi {{u2}} di tempat satuan untuk memasukkan {{num2}} ke dalam mesin penjumlah dan kirim.",
    wrong_unit2:
      "Anda telah mengirimkan angka yang salah. Harap masukkan {{u2}} dengan mengklik 6 kali di mesin penjumlah.",
    put_ten2:
      "Klik tombol + atau - untuk mengisi {{t2}} puluhan di tempat puluhan untuk memasukkan {{num2}} ke dalam mesin penjumlah dan kirim.",
    wrong_ten2:
      "Anda telah mengirimkan angka yang salah. Harap masukkan {{t2}} puluhan untuk mengirim {{num2}} ke dalam mesin penjumlah.",
    add_units: "Klik tombol di bawah ini untuk menggabungkan satuan.",
    qsn_unit:
      "Ada berapa satuan secara total? Pilih dari opsi yang tersedia di bawah ini.",
    unit_wrong_feedback:
      "Anda telah mengirimkan angka yang salah. Harap hitung jumlah satuan dan klik opsi yang benar lagi.",
    unit_overflow:
      "{{uSum}} adalah angka 2 digit. Karena {{uSum}} = 10 + {{u3}}, bawa 10 ke tempat puluhan sebagai 1 puluhan.",
    add_tens: "Klik tombol di bawah ini untuk menggabungkan puluhan.",
    qsn_ten:
      "Ada berapa puluhan secara total? Pilih dari opsi yang tersedia di bawah ini.",
    ten_wrong_feedback:
      "Anda telah mengirimkan angka yang salah. Harap hitung jumlah puluhan dan klik opsi yang benar lagi.",
    final_page:
      "Artinya ada total {{t3}} puluhan dan {{u3}} satuan di dalam mesin penjumlah. Jadi, {{num1}} + {{num2}} = {{sum}}.",
  },
};

const texts = flag === "INDONESIAN" ? textsIndonesian : textsEnglish;


const questions = [
  { num1: 16, num2: 18 },
  { num1: 23, num2: 17 },
  { num1: 15, num2: 7 },
];
const questionMcqOptions = [
  {
    correctAnswer: 14,
    options: [15, 12, 14, 17],
  },
  {
    correctAnswer: 3,
    options: [2, 3, 4, 5],
  },
  {
    correctAnswer: 10,
    options: [15, 10, 11, 7],
  },
  {
    correctAnswer: 4,
    options: [2, 3, 4, 5],
  },
  {
    correctAnswer: 12,
    options: [12, 15, 14, 11],
  },
  {
    correctAnswer: 2,
    options: [2, 3, 4, 5],
  },
];