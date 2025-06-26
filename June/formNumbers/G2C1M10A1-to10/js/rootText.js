// texts.js

const textsEnglish = {
  html_title: "Addition sentence",
  subtitle_text: "Write the addition sentence and find the sum",
  button_texts: {
    prev: "Previous",
    next: "Next",
    add_jar: "Add another Jar", // Lowercased for consistency
    start_over: "Start Over", // Lowercased for consistency
  },
  overlay_text:
    "Greetings!<br><br>Ever wondered how numbers are made?<br><br>Let’s have some fun and find out together!",
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
      "This is a special pink jar. You can add and remove cubes from here.<br><br>Let's give it a try!",
  },
  sum_plus: {
    instruction_title: "",
    instruction_text:
      "Click on the “+” button and observe the number that appears in the top box. The bottom box tells us how to say it.",
  },
  plus: {
    instruction_title: "Add cubes",
    instruction_text:
      "Click on the “+” button to increase the number of cubes in the jar.",
  },
  top_num: {
    instruction_title: "",
    instruction_text: "The top box shows how many cubes are in the jar.",
  },
  bottom_num: {
    instruction_title: "",
    instruction_text: "The bottom box tells us how to say the number.",
  },
  minus: {
    instruction_title: "Remove boxes",
    instruction_text:
      "Now just for fun, click on the “-” button and see what happens to the boxes above and below.",
  },
  keep_adding: {
    instruction_title: "Add more boxes",
    instruction_text:
      "Wasn’t that fun?<br><br>Now let's keep adding cubes to the box to see how many we can fill up.",
  },
  wiggling: {
    instruction_title: "Whoa!",
    instruction_text:
      "Do you see that?<br><br>The pink jar is wiggling. It can’t hold more than 9 cubes!",
  },
  max_reached: {
    instruction_title: "",
    instruction_text:
      "Wasn’t that fun?<br><br>Now let's keep adding cubes to the box to see how many we can fill up.",
  },
  blue_jar: {
    instruction_title: "Blue jar",
    instruction_text:
      "This is a special blue jar. You can use this jar when the pink jar fills up!",
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
    instruction_text: "Click the arrow to get the rod back. Isn’t it magical?",
  },
  number_ten: {
    instruction_title: "And we have created the number 10!",
    instruction_text: "",
  },
  comments: {
    number_disappeared:
      "Oops! The number disappeared! Looks like this number display box can’t show the count of that many cubes.",
    add_jar: "The way to resolve this is by adding another jar!",
    rod: "Ten cubes came together to form one rod!",
    rod_split:
      "One rod split to form ten cubes! As the pink jar can hold only nine items, move the cubes to the blue jar.",
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
  one: " One",
  ten: " Ten",
  ones: " Ones",
  tens: " Tens",
  hundred: " Hundred",
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
  html_title: "Kalimat penjumlahan",
  subtitle_text: "Tulis kalimat penjumlahan dan temukan jumlahnya",
  button_texts: {
    prev: "Sebelumnya",
    next: "Berikutnya",
    add_jar: "Tambahkan Toples Lain",
    start_over: "Mulai Ulang",
  },
  overlay_text:
    "Halo!<br><br>Pernahkah kamu bertanya-tanya bagaimana angka terbentuk?<br><br>Ayo kita bersenang-senang dan cari tahu bersama!",
  instruction_general: {
    instruction_title: "Halo!",
    instruction_text:
      "Pernahkah kamu bertanya-tanya bagaimana angka terbentuk? <br><br>Ayo kita bersenang-senang dan cari tahu bersama!",
  },
  next: {
    instruction_title: "",
    instruction_text: "Klik tombol 'Berikutnya' untuk melanjutkan.",
  },
  pink_jar: {
    instruction_title: "Instruksi",
    instruction_text:
      "Ini adalah toples merah muda spesial. Kamu bisa menambahkan dan menghapus kubus dari sini.<br><br>Ayo kita coba!",
  },
  sum_plus: {
    instruction_title: "",
    instruction_text:
      "Klik tombol “+” dan perhatikan angka yang muncul di kotak atas. Kotak bawah memberi tahu cara mengucapkannya.",
  },
  plus: {
    instruction_title: "Tambahkan kubus",
    instruction_text:
      "Klik tombol “+” untuk menambah jumlah kubus dalam toples.",
  },
  top_num: {
    instruction_title: "",
    instruction_text:
      "Kotak atas menunjukkan berapa banyak kubus di dalam toples.",
  },
  bottom_num: {
    instruction_title: "",
    instruction_text:
      "Kotak bawah memberi tahu cara kita mengucapkan angka tersebut.",
  },
  minus: {
    instruction_title: "Hapus kotak",
    instruction_text:
      "Sekarang untuk bersenang-senang, klik tombol “-” dan lihat apa yang terjadi pada kotak atas dan bawah.",
  },
  keep_adding: {
    instruction_title: "Tambahkan lebih banyak kotak",
    instruction_text:
      "Seru, bukan?<br><br>Sekarang mari kita terus menambahkan kubus ke dalam kotak dan lihat seberapa banyak yang bisa kita isi.",
  },
  wiggling: {
    instruction_title: "Wah!",
    instruction_text:
      "Kamu lihat itu?<br><br>Toples merah muda bergoyang. Ia tidak bisa menampung lebih dari 9 kubus!",
  },
  max_reached: {
    instruction_title: "",
    instruction_text:
      "Seru, bukan?<br><br>Sekarang mari kita terus menambahkan kubus ke dalam kotak dan lihat seberapa banyak yang bisa kita isi.",
  },
  blue_jar: {
    instruction_title: "Toples biru",
    instruction_text:
      "Ini adalah toples biru spesial. Kamu bisa menggunakan toples ini saat toples merah muda sudah penuh!",
  },
  move_left: {
    instruction_title: "",
    instruction_text: "Klik panah untuk melihat keajaibannya.",
  },
  move_right: {
    instruction_title: "",
    instruction_text:
      "Untuk bersenang-senang, klik panah untuk memindahkan batang kembali ke dalam toples merah muda dan perhatikan apa yang terjadi.",
  },
  move_left_again: {
    instruction_title: "",
    instruction_text:
      "Klik panah untuk mengambil batang kembali. Ajaib, bukan?",
  },
  number_ten: {
    instruction_title: "Dan kita telah membuat angka 10!",
    instruction_text: "",
  },
  comments: {
    number_disappeared:
      "Ups! Angkanya menghilang! Sepertinya kotak tampilan angka ini tidak bisa menunjukkan jumlah kubus sebanyak itu.",
    add_jar: "Cara mengatasinya adalah dengan menambahkan toples lain!",
    rod: "Sepuluh kubus bersatu membentuk satu batang!",
    rod_split:
      "Satu batang dipecah menjadi sepuluh kubus! Karena toples merah muda hanya bisa menampung sembilan item, pindahkan kubus ke toples biru.",
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
