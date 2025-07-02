const flag = "ENGLISH"; // Change this to "INDONESIAN" to use the translated text

// --- English Text Data ---
const textsEnglish = {
  buttons: {
    start: "Start",
    next: "Next",
    borrow: "Borrow",
    take_away_ones: "Take Away Ones",
    take_away_tens: "Take Away Tens",
    collect_ones: "Collect Ones",
    collect_tens: "Collect Tens",
    start_task: "Next",
    add_unit: "Add Ones Place",
    add_ten: "Add Tens Place",
    unit_overflow: "Carry Over to Tens",
  },
  ftue: {
    hand_cursor: "assets/tap.png",
    pose_normal: "assets/JAXnormal.png",
    pose_thinking: "assets/JAXthinking.png",
    pose_happy: "assets/JAX_happy.png",
    pose_superHappy: "assets/JAXhappy.png",
  },
  context_data: {
    step0_a:
      "Let's learn addition with carry over!<br><br>These are our TENS and ONES containers.",
    step0_b: "Use the '+' and '-' buttons to place blocks.",
    step0_c: "The number cards show the value of the blocks.",
    step1_tens:
      "Let's add 27 with 15. First, make the number 27.<br><br>Tap the '+' on the TENS box 2 times.",
    step1_ones: "Great! Now set the ones. Tap the '+' on the ONES box 7 times.",
    step1_complete: "Awesome! You have represented the number 27.",
    step2_tens:
      "Now, let's show the other number, 15.<br><br>Tap the '+' on the TENS box in the second row 1 time.",
    step2_ones: "Perfect! That's 1 ten. Now for the ones. Tap the '+' 5 times.",
    step2_complete: "We have set up the problem: 27 + 15.",
    add_units1: "Now bring the cubes at ones place together to sum them up. Click the button below.",
    unit_overflow:
      "Units place can not hold more than 9 numbers. <br><br>Carry 10 cubes over to tens place.",
    after_overflow: "Great job!<br><br>Now lets bring the rods together.",
    done: "Great! You have found the answer!",
    final_result:
      'We see that 27 plus 15 is 42.<br><br><strong style="text-align: center; width: 100%; display: block; font-size: 1.5rem;">27 + 15 = 42</strong>',
  },
};
const tagsEnglish ={
  ones:"Ones",
  tens:"Tens",
  o:"O",
  t:"T"
}
const tagsIndonesian = {
  ones: "Satuan",
  tens: "Puluhan",
  o: "S",
  t: "P",
};
// --- Indonesian Text Data ---
const textsIndonesian = {
  buttons: {
    start: "Mulai",
    next: "Berikutnya",
    borrow: "Pinjam",
    take_away_ones: "Ambil Satuan",
    take_away_tens: "Ambil Puluhan",
    collect_ones: "Kumpulkan Satuan",
    collect_tens: "Kumpulkan Puluhan",
    start_task: "Berikutnya",
    add_unit: "Tambah Tempat Satuan",
    add_ten: "Tambah Tempat Puluhan",
    unit_overflow: "Bawa ke Puluhan",
  },
  ftue: {
    hand_cursor: "assets/tap.png",
    pose_normal: "assets/JAXnormal.png",
    pose_thinking: "assets/JAXthinking.png",
    pose_happy: "assets/JAX_happy.png",
    pose_superHappy: "assets/JAXhappy.png",
  },
  context_data: {
    step0_a:
      "Ayo belajar penjumlahan dengan teknik menyimpan!<br><br>Ini adalah wadah PULUHAN dan SATUAN kita.",
    step0_b: "Gunakan tombol '+' dan '-' untuk menempatkan balok.",
    step0_c: "Kartu angka menunjukkan nilai dari balok.",
    step1_tens:
      "Ayo jumlahkan 27 dengan 15. Pertama, buat angka 27.<br><br>Klik tombol '+' pada kotak PULUHAN sebanyak 2 kali.",
    step1_ones:
      "Bagus! Sekarang atur satuannya. Klik tombol '+' pada kotak SATUAN sebanyak 7 kali.",
    step1_complete: "Keren! Kamu telah mewakili angka 27.",
    step2_tens:
      "Sekarang, mari tunjukkan angka lainnya, 15.<br><br>Klik tombol '+' pada kotak PULUHAN di baris kedua 1 kali.",
    step2_ones:
      "Sempurna! Itu 1 puluhan. Sekarang untuk satuannya. Klik tombol '+' sebanyak 5 kali.",
    step2_complete: "Kita telah menyusun soal: 27 + 15.",
    add_units1:
      "Sekarang gabungkan kubus di tempat satuan untuk menjumlahkannya. Klik tombol di bawah ini.",
    unit_overflow:
      "Tempat satuan tidak bisa menampung lebih dari 9 angka.<br><br>Ubah 10 kubus menjadi 1 batang di tempat puluhan.",
    after_overflow:
      "Kerja bagus!<br><br>Sekarang mari kita gabungkan batang-batangnya.",
    done: "Hebat! Kamu telah menemukan jawabannya!",
    final_result:
      'Kita lihat bahwa 27 ditambah 15 adalah 42.<br><br><strong style="text-align: center; width: 100%; display: block; font-size: 1.5rem;">27 + 15 = 42</strong>',
  },
};


// --- Language Selection ---
const texts = flag === "INDONESIAN" ? textsIndonesian : textsEnglish;
const tags = flag === "INDONESIAN" ? tagsIndonesian : tagsEnglish;