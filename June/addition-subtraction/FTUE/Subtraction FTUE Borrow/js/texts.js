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
      "Let's learn subtraction with borrowing!<br><br>These are our TENS and ONES containers.",
    step0_b: "Use the '+' and '-' buttons to place blocks.",
    step0_c: "The number cards show the value of the blocks.",
    step1_tens:
      "Let's subtract 15 from 32. First, make the number 32.<br><br>Tap the '+' on the TENS box 3 times.",
    step1_ones: "Great! Now set the ones. Tap the '+' on the ONES box 2 times.",
    step1_complete: "Awesome! You have represented the number 32.",
    step2_tens:
      "Now, let's show the number to be subtracted, 15.<br><br>Tap the '+' on the TENS box in the second row 1 time.",
    step2_ones: "Perfect! That's 1 ten. Now for the ones. Tap the '+' 5 times.",
    step2_complete: "We have set up the problem: 32 - 15.",
    step_borrow_intro:
      "Look at the ones place. We cannot take 5 away from 2.",
    step_borrow_action:
      "We need to borrow! Let's exchange 1 ten-rod for 10 one-cubes.",
    step_borrow_complete: "Excellent! Now we have 12 ones and can subtract.",
    take_away_ones: "First, let's take away the ones.",
    take_away_tens: "Now, let's take away the tens.",
    collect_ones: "Great! Let's collect the remaining ones to find the answer.",
    collect_tens: "Finally, let's collect the remaining tens.",
    collect_done: "You have found the answer!",
    final_result:
      "We see that 32 minus 15 is 17.<br><br><strong style=\"text-align: center; width: 100%; display: block; font-size: 1.5rem;\">32 - 15 = 17</strong>",
  },
};

// --- Indonesian Text Data ---
const textsIndonesian = {
  buttons: {
    start: "Mulai",
    next: "Lanjut",
    borrow: "Pinjam",
    take_away_ones: "Ambil Satuan",
    take_away_tens: "Ambil Puluhan",
    collect_ones: "Kumpulkan Satuan",
    collect_tens: "Kumpulkan Puluhan",
    start_task: "Lanjut",
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
      "Mari belajar pengurangan dengan meminjam!<br><br>Ini adalah wadah PULUHAN dan SATUAN kita.",
    step0_b: "Gunakan tombol '+' dan '-' untuk menempatkan balok.",
    step0_c: "Kartu angka menunjukkan nilai dari balok-balok tersebut.",
    step1_tens:
      "Mari kita kurangi 15 dari 32. Pertama, buat angka 32.<br><br>Ketuk tombol '+' pada kotak PULUHAN 3 kali.",
    step1_ones:
      "Bagus! Sekarang atur satuannya. Ketuk tombol '+' pada kotak SATUAN 2 kali.",
    step1_complete: "Luar biasa! Kamu telah merepresentasikan angka 32.",
    step2_tens:
      "Sekarang, mari kita tunjukkan angka yang akan dikurangi, yaitu 15.<br><br>Ketuk tombol '+' pada kotak PULUHAN di baris kedua 1 kali.",
    step2_ones:
      "Sempurna! Itu 1 puluhan. Sekarang untuk satuannya. Ketuk '+' 5 kali.",
    step2_complete: "Kita telah menyiapkan soal: 32 - 15.",
    step_borrow_intro:
      "Lihatlah tempat satuan. Kita tidak bisa mengambil 5 dari 2.",
    step_borrow_action:
      "Kita perlu meminjam! Mari kita tukar 1 batang puluhan dengan 10 kubus satuan.",
    step_borrow_complete:
      "Sangat baik! Sekarang kita punya 12 satuan dan bisa melakukan pengurangan.",
    take_away_ones: "Pertama, mari kita ambil satuannya.",
    take_away_tens: "Sekarang, mari kita ambil puluhannya.",
    collect_ones: "Bagus! Mari kumpulkan sisa satuan untuk menemukan jawabannya.",
    collect_tens: "Terakhir, mari kumpulkan sisa puluhannya.",
    collect_done: "Kamu telah menemukan jawabannya!",
    final_result:
      "Kita lihat bahwa 32 dikurangi 15 adalah 17.<br><br><strong style=\"text-align: center; width: 100%; display: block; font-size: 1.5rem;\">32 - 15 = 17</strong>",
  },
};

// --- Language Selection ---
const texts = flag === "INDONESIAN" ? textsIndonesian : textsEnglish;