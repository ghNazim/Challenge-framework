const textsEnglish = {
  html_title: "Addition Sentence",
  subtitle_text: "Write the addition sentence and find the sum",
  button_texts: {
    prev: "Previous",
    next: "Next",
    add_jar: "Add another Jar", // Text for the button when on the last shape
    start_over: "Start Over", // Text for the button on the summary page
  },
  overlay_text:
    "Hello! Let’s have some fun and create the first two digit number together!",
  instruction_general: {
    instruction_title: "Greetings!",
    instruction_text:
      "Ever wondered how numbers are made? <br><br>Let’s have some fun and find out together!",
  },
  next: {
    instruction_title: "",
    instruction_text: "Click the 'Next' button to continue.",
  },
  pink_jar: {
    instruction_title: "Instruction",
    instruction_text:
      "This is a special Pink Jar, We call it the ONES jar.<br>You can add and remove squares from here. Let's give it a try!",
  },
  sum_plus: {
    instruction_title: "",
    instruction_text:
      "Click on the “+” button, The Digit is displayed on the top box.<br><br>The bottom box tells us how we say it.",
  },
  plus: {
    instruction_title: "'+' Button",
    instruction_text:
      "Click on the “+” button to increase the number of cubes in the jar.",
  },
  top_num: {
    instruction_title: "",
    instruction_text: "The Digit is displayed on the top box.",
  },
  bottom_num: {
    instruction_title: "",
    instruction_text: "The bottom box tells us how we say it.",
  },
  minus: {
    instruction_title: "Remove boxes",
    instruction_text:
      "Now just for fun, Click on the “-” button, see what happens to the boxes above and below",
  },

  keep_adding: {
    instruction_title: "Add more boxes",
    instruction_text:
      " Wasn’t that fun? <br><br>Now let's keep adding cubes to the box to see how many we can fill up.",
  },
  wiggling: {
    instruction_title: "Whoa!",
    instruction_text:
      "Do you see that?<br><br> The Pink Jar is wiggling. It can’t hold more than 9 cubes!",
  },
  max_reached: {
    instruction_title: "",
    instruction_text:
      "Wasn’t that fun? <br><br> Now let's keep adding cubes to the box to see how many we can fill up.",
  },
  blue_jar: {
    instruction_title: "Blue Jar",
    instruction_text:
      "This is a special blue Jar, you can use this jar when the pink jar fills up!",
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
    instruction_text:
      "Click the arrow to get back the rod.<br><br> Isn’t it magic!",
  },
  number_ten: {
    instruction_title: "",
    instruction_text: `We have Created the first 2 digit number “10”.`,
  },

  comments: {
    keep_adding:
      "Now let's keep adding cubes to the box to see how many we can fill up.",
    number_disappeared:
      "Oops! the number disappeared! Looks like this number display box can’t show the count of that many cubes.",
    oops: "Oops! This Jar can only show one digit at a time.",
    add_jar: "The Way to resolve this is by adding another Jar!",
    blue_jar:
      "This is a special blue Jar, We call it the Tens jar. you can use this jar when the pink jar fills up!",
    rod: "Ten cubes came together to form one rod!",
    rod_split:
      "One rod split to form ten cubes! As the pink jar can hold only nine symbols, move the cubes to the blue jar.",
  },
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
];
const tagsEnglish = {
  one:" One",
  ten:" Ten",
  ones:" Ones",
  tens:" Tens"

}
const tagsIndonesian = {
  one: " Satu",
  ten: " Sepuluh",
  ones: " Satu",
  tens: " Sepuluh",
};


const textsIndonesian = {
  html_title: "Kalimat Penjumlahan",
  subtitle_text: "Tulis kalimat penjumlahan dan temukan hasilnya",
  button_texts: {
    prev: "Sebelumnya",
    next: "Berikutnya",
    add_jar: "Tambah Toples Lagi", // Teks untuk tombol saat di bentuk terakhir
    start_over: "Mulai Lagi", // Teks untuk tombol di halaman ringkasan
  },
  overlay_text:
    "Halo! Ayo bersenang-senang dan buat angka dua digit pertama bersama-sama!",
  instruction_general: {
    instruction_title: "Salam!",
    instruction_text:
      "Pernahkah kamu bertanya-tanya bagaimana angka dibuat? <br><br>Ayo bersenang-senang dan cari tahu bersama-sama!",
  },
  next: {
    instruction_title: "",
    instruction_text: "Klik tombol 'Berikutnya' untuk melanjutkan.",
  },
  pink_jar: {
    instruction_title: "Instruksi",
    instruction_text:
      "Ini adalah Toples Merah Muda spesial. Kami menyebutnya toples SATUAN.<br>Kamu bisa menambah dan menghapus kotak dari sini. Ayo kita coba!",
  },
  sum_plus: {
    instruction_title: "",
    instruction_text:
      "Klik tombol “+”, Angka muncul di kotak atas.<br><br>Kotak bawah memberi tahu kita cara menyebutkannya.",
  },
  plus: {
    instruction_title: "Tombol '+'",
    instruction_text:
      "Klik tombol “+” untuk menambah jumlah kubus dalam toples.",
  },
  top_num: {
    instruction_title: "",
    instruction_text: "Angka muncul di kotak atas.",
  },
  bottom_num: {
    instruction_title: "",
    instruction_text: "Kotak bawah memberi tahu kita bagaimana menyebutkannya.",
  },
  minus: {
    instruction_title: "Hapus kotak",
    instruction_text:
      "Sekarang untuk bersenang-senang, klik tombol “-”, lihat apa yang terjadi pada kotak atas dan bawah.",
  },
  keep_adding: {
    instruction_title: "Tambahkan lebih banyak kotak",
    instruction_text:
      "Seru, kan? <br><br>Sekarang mari terus tambahkan kubus ke dalam kotak dan lihat berapa banyak yang bisa kita isi.",
  },
  wiggling: {
    instruction_title: "Wah!",
    instruction_text:
      "Kamu lihat itu?<br><br>Toples Merah Muda sedang bergoyang. Ia tidak bisa menampung lebih dari 9 kubus!",
  },
  max_reached: {
    instruction_title: "",
    instruction_text:
      "Seru, kan? <br><br>Sekarang mari terus tambahkan kubus ke dalam kotak dan lihat berapa banyak yang bisa kita isi.",
  },
  blue_jar: {
    instruction_title: "Toples Biru",
    instruction_text:
      "Ini adalah Toples Biru spesial. Kamu bisa menggunakannya saat toples merah muda sudah penuh!",
  },
  move_left: {
    instruction_title: "",
    instruction_text: "Klik panah untuk melihat keajaiban terjadi.",
  },
  move_right: {
    instruction_title: "",
    instruction_text:
      "Sekadar bersenang-senang, klik panah untuk memindahkan batang kembali ke toples merah muda dan lihat apa yang terjadi.",
  },
  move_left_again: {
    instruction_title: "",
    instruction_text:
      "Klik panah untuk mengambil kembali batangnya.<br><br>Ajaib, bukan!",
  },
  number_ten: {
    instruction_title: "",
    instruction_text: `Kita telah Membuat angka dua digit pertama “10”.`,
  },

  comments: {
    keep_adding:
      "Sekarang mari terus tambahkan kubus ke dalam kotak dan lihat berapa banyak yang bisa kita isi.",
    number_disappeared:
      "Ups! Angkanya menghilang! Sepertinya kotak tampilan angka ini tidak bisa menampilkan jumlah sebanyak itu.",
    oops: "Ups! Toples ini hanya bisa menampilkan satu digit dalam satu waktu.",
    add_jar: "Cara mengatasinya adalah dengan menambahkan Toples lagi!",
    blue_jar:
      "Ini adalah Toples Biru spesial. Kami menyebutnya toples Puluhan. Kamu bisa menggunakannya saat toples merah muda sudah penuh!",
    rod: "Sepuluh kubus bergabung membentuk satu batang!",
    rod_split:
      "Satu batang terpecah menjadi sepuluh kubus! Karena toples merah muda hanya bisa menampung sembilan simbol, pindahkan kubus ke toples biru.",
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
];
  