const textsEnglish = {
  html_title: "Addition Sentence",
  subtitle_text: "Write the addition sentence and find the sum",
  button_texts: {
    prev: "Previous",
    next: "Next",
    add_jar: "Add another Jar", // unchanged as it's a button
    start_over: "Start Over", // unchanged as it's a button
  },
  overlay_text:
    "Hello! Let’s have fun and continue to create bigger numbers together!",
  left_panel: {
    instruction_general: {
      instruction_title: "Hello!",
      instruction_text:
        "Let’s have fun and continue to create bigger numbers together!",
    },
    next: {
      instruction_title: "",
      instruction_text: "Click the 'Next' button to continue.",
    },
    reminder: {
      instruction_title: "Reminder",
      instruction_text:
        "Just a reminder – this pink jar shows the ones place.<br><br> Each click adds one cube!",
    },
    plus: {
      instruction_title: "Add boxes",
      instruction_text:
        "Just click on the “+” button once to see what happens!",
    },
    minus: {
      instruction_title: "Remove boxes",
      instruction_text:
        "Now just for fun, click on the “-” button.<br><br> See what happens to the boxes above and below.",
    },
    keep_adding: {
      instruction_title: "Add more boxes",
      instruction_text:
        "Wasn’t that fun?<br><br> Now let's keep adding cubes to the box to see how many we can fill up.",
    },
    pink_unlike: {
      instruction_title: "Observe",
      instruction_text:
        "The pink jar does not like having more than one digit!",
    },
    mcq: {
      instruction_title: "",
      instruction_text:
        "I really want to continue counting higher. How can we resolve this?<br><br> Help me by clicking the right answer.",
    },
    increase: {
      instruction_title: "",
      instruction_text:
        "Use the '+' button to increase the number of cubes in the ones place.",
    },
    move_left: {
      instruction_title: "",
      instruction_text: "Click on the arrow to see the magic happen.",
    },
    move_right: {
      instruction_title: "",
      instruction_text:
        "Just for fun, click on the arrow to move the rod back into the pink jar and observe what happens.",
    },
    move_left_again: {
      instruction_title: "",
      instruction_text: "Click the arrow to get back the rod. Isn’t it magic!",
    },
    number_ten: {
      instruction_title: "And we have created the number 10!!!",
      instruction_text: "",
    },
    one_more_rod: {
      instruction_title: "",
      instruction_text:
        "The pink jar won’t like this…<br><br> but just for the sake of math learning, let’s try putting one more rod in.<br><br> Click to continue!",
    },
    finally: {
      instruction_title: "Finally!",
      instruction_text: "All is fine now! We have created twenty!",
    },
    one_more_click: {
      instruction_title: "",
      instruction_text: "One more click and the pink jar is all happy!",
    },
  },

  comments: {
    number_disappeared:
      "Oops! The number disappeared! Looks like this number display box can’t show the count of that many cubes.",
    add_jar: "The way to resolve this is by adding another jar!",
    rod: "Ten cubes came together to form one rod!",
    rod_split:
      "One rod split to form ten cubes! As the pink jar can hold only nine symbols, move the cubes to the blue jar.",
    wrong1:
      "Hmm… if we leave all 10 in the ones place, we can’t keep counting. Let’s see what happens when we move them to the tens place instead!",
    wrong3:
      "Oh no! We worked hard to count to 10 – we don’t need to erase. Let’s try a better idea: move them to the tens place!",
    correct:
      "Yes! Ten ones make one ten. Let’s merge them and move it to the tens place!",
    you_expert:
      "You are an expert now. You know what to do! Go ahead and click on the arrow to move ten ones to make one ten.",
    twenty_ones:
      "Aha! We now have twenty ones – that’s the same as two tens! But the pink jar is not built for so many. Let’s regroup and make it happy again.",
  },
};

const numberFormEnglish = [
  "",
  "One ten and one one makes eleven",
  "One ten and two ones makes twelve",
  "One ten and three ones makes thirteen",
  "One ten and four ones makes fourteen",
  "One ten and five ones makes fifteen",
  "One ten and six ones makes sixteen",
  "One ten and seven ones makes seventeen",
  "One ten and eight ones makes eighteen",
  "One ten and nine ones makes nineteen",
  "Two tens make twenty!",
];

const mcqDataEnglish = {
  options: [
    "Leave the 10 cubes in the ones place.",
    "Move all 10 cubes to the tens place as 1 ten.",
    "Erase all the cubes and start over.",
  ],
  feedback: ["wrong1", "correct", "wrong3"],
  answer: 1,
  question: "",
};

const numberToTextEnglish = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
  "Twenty",
];

const tagsEnglish = {
  one: " One",
  ten: " Ten",
  ones: " Ones",
  tens: " Tens",
  hundred: " Hundreds",
  hundreds: " Hundreds",
};
const tagsIndonesian = {
  one: " Satu",
  ten: " Sepuluh",
  ones: " Satuan",
  tens: " Puluhan",
  hundred: " Seratus",
  hundreds: " Ratusan",
};

const textsIndonesian = {
  html_title: "Kalimat Penjumlahan",
  subtitle_text: "Tulis kalimat penjumlahan dan temukan hasilnya",
  button_texts: {
    prev: "Sebelumnya",
    next: "Berikutnya",
    add_jar: "Tambahkan Toples Lagi",
    start_over: "Mulai Lagi",
  },
  overlay_text:
    "Halo! Ayo bersenang-senang dan terus membuat angka yang lebih besar bersama-sama!",
  left_panel: {
    instruction_general: {
      instruction_title: "Halo!",
      instruction_text:
        "Ayo bersenang-senang dan terus membuat angka yang lebih besar bersama-sama!",
    },
    next: {
      instruction_title: "",
      instruction_text: "Klik tombol 'Berikutnya' untuk melanjutkan.",
    },
    reminder: {
      instruction_title: "Pengingat",
      instruction_text:
        "Hanya pengingat – toples merah muda ini menunjukkan tempat satuan.<br><br> Setiap klik menambahkan satu kubus!",
    },
    plus: {
      instruction_title: "Tambahkan Kotak",
      instruction_text:
        "Cukup klik tombol “+” sekali untuk melihat apa yang terjadi!",
    },
    minus: {
      instruction_title: "Hapus Kotak",
      instruction_text:
        "Sekarang untuk bersenang-senang, klik tombol “-”.<br><br> Lihat apa yang terjadi pada kotak di atas dan bawah.",
    },
    keep_adding: {
      instruction_title: "Tambahkan Lagi",
      instruction_text:
        "Menyenangkan, bukan?<br><br> Sekarang mari kita terus tambahkan kubus ke dalam kotak dan lihat berapa banyak yang bisa kita isi.",
    },
    pink_unlike: {
      instruction_title: "Amati",
      instruction_text:
        "Toples merah muda tidak suka memiliki lebih dari satu digit!",
    },
    mcq: {
      instruction_title: "",
      instruction_text:
        "Saya benar-benar ingin terus menghitung lebih tinggi. Bagaimana kita bisa mengatasinya?<br><br> Bantu saya dengan mengklik jawaban yang benar.",
    },
    increase: {
      instruction_title: "",
      instruction_text:
        "Gunakan tombol '+' untuk menambah jumlah kubus di tempat satuan.",
    },
    move_left: {
      instruction_title: "",
      instruction_text: "Klik panah untuk melihat keajaibannya.",
    },
    move_right: {
      instruction_title: "",
      instruction_text:
        "Untuk bersenang-senang, klik panah untuk memindahkan batang kembali ke toples merah muda dan lihat apa yang terjadi.",
    },
    move_left_again: {
      instruction_title: "",
      instruction_text:
        "Klik panah untuk mendapatkan batangnya kembali. Ajaib, bukan!",
    },
    number_ten: {
      instruction_title: "Dan kita telah membuat angka 10!!!",
      instruction_text: "",
    },
    one_more_rod: {
      instruction_title: "",
      instruction_text:
        "Toples merah muda mungkin tidak akan menyukainya…<br><br> tapi demi belajar matematika, mari kita coba memasukkan satu batang lagi.<br><br> Klik untuk melanjutkan!",
    },
    finally: {
      instruction_title: "Akhirnya!",
      instruction_text:
        "Semua baik-baik saja sekarang! Kita telah membuat dua puluh!",
    },
    one_more_click: {
      instruction_title: "",
      instruction_text: "Satu klik lagi dan toples merah muda akan senang!",
    },
  },

  comments: {
    number_disappeared:
      "Ups! Angkanya menghilang! Sepertinya kotak tampilan angka ini tidak dapat menampilkan jumlah sebanyak itu.",
    add_jar: "Cara untuk mengatasi ini adalah dengan menambahkan toples lain!",
    rod: "Sepuluh kubus bergabung membentuk satu batang!",
    rod_split:
      "Satu batang terpecah menjadi sepuluh kubus! Karena toples merah muda hanya bisa menampung sembilan simbol, pindahkan kubus ke toples biru.",
    wrong1:
      "Hmm… jika kita meninggalkan semua 10 di tempat satuan, kita tidak bisa terus menghitung. Mari kita lihat apa yang terjadi jika kita memindahkannya ke tempat puluhan!",
    wrong3:
      "Oh tidak! Kita sudah bekerja keras menghitung sampai 10 – kita tidak perlu menghapusnya. Mari coba ide yang lebih baik: pindahkan ke tempat puluhan!",
    correct:
      "Ya! Sepuluh satuan menjadi satu puluhan. Mari kita gabungkan dan pindahkan ke tempat puluhan!",
    you_expert:
      "Kamu sudah ahli sekarang. Kamu tahu apa yang harus dilakukan! Silakan klik panah untuk memindahkan sepuluh satuan menjadi satu puluhan.",
    twenty_ones:
      "Aha! Sekarang kita punya dua puluh satuan – itu sama dengan dua puluhan! Tapi toples merah muda tidak dirancang untuk sebanyak itu. Mari kita kelompokkan ulang dan buat dia senang lagi.",
  },
};

const numberToTextIndonesian = [
  "Nol",
  "Satu",
  "Dua",
  "Tiga",
  "Empat",
  "Lima",
  "Enam",
  "Tujuh",
  "Delapan",
  "Sembilan",
  "Sepuluh",
  "Sebelas",
  "Dua Belas",
  "Tiga Belas",
  "Empat Belas",
  "Lima Belas",
  "Enam Belas",
  "Tujuh Belas",
  "Delapan Belas",
  "Sembilan Belas",
  "Dua Puluh",
];

const numberFormIndonesian = [
  "",
  "Satu puluhan dan satu satuan menjadi sebelas",
  "Satu puluhan dan dua satuan menjadi dua belas",
  "Satu puluhan dan tiga satuan menjadi tiga belas",
  "Satu puluhan dan empat satuan menjadi empat belas",
  "Satu puluhan dan lima satuan menjadi lima belas",
  "Satu puluhan dan enam satuan menjadi enam belas",
  "Satu puluhan dan tujuh satuan menjadi tujuh belas",
  "Satu puluhan dan delapan satuan menjadi delapan belas",
  "Satu puluhan dan sembilan satuan menjadi sembilan belas",
  "Dua puluhan menjadi dua puluh!",
];

const mcqDataIndonesian = {
  options: [
    "Biarkan 10 kubus di tempat satuan.",
    "Pindahkan semua 10 kubus ke tempat puluhan sebagai 1 puluhan.",
    "Hapus semua kubus dan mulai dari awal.",
  ],
  feedback: ["wrong1", "correct", "wrong3"],
  answer: 1,
  question: "",
};
