const flag = "ENGLISH"; // Change this to "INDONESIAN" if needed

const textsEnglish = {
  buttons: {
    start: "Start",
    next: "Next",
    take_away: "Take Away",
    collect_remaining: "Collect Remaining",
    start_task: "Next",
    add_unit: "Add",
    add_ten: "Add Tens Place",
    add_hundred: "Add Hundreds Place",
    carryOver_unit: "Carry Over",
    carryOver_ten: "Carry Over to Hundreds",
  },
  ftue: {
    hand_cursor: "assets/tap.png",
    pose_normal: "assets/JAXnormal.png",
    pose_thinking: "assets/JAXthinking.png",
    pose_happy: "assets/JAX_happy.png",
    pose_superHappy: "assets/JAXhappy.png",
  },
  context_data: {
    step0_a: "Let's learn Addition.<br><br>This is our cube container.",
    step0_b: "Use the '+' and '-' buttons.",
    step0_c: "The number card shows the value of the cubes.",
    step1:
      "Put 5 cubes in the container.<br><br>Tap on the '+' button 5 times.",
    step1_complete:
      "You have added 5 cubes. By doing this, you have represented the number 5.",
    step2:
      "Let's bring a second container for the second number.<br><br>Tap the '+' button 3 times.",
    step2_complete:
      "This container has 3 cubes, which we need to add to the cubes of the first container.",
    step3: "Let's bring all the cubes in the third container.",
    step3_complete:
      "The second container is filled now.<br>Collect the remaining cubes from the first container in the last container.",
    step4_complete:
      "You have brought the cubes together.<br><br> There are 8 cubes in total.",
    step5:
      'In math, adding means putting things together. If you put 5 and 3 together, you get 8.<br><br><strong style="text-align: center; width: 100%; display: block; font-size: 1.5rem;">5 + 3 = 8</strong>',
  },
};

const textsIndonesian = {
  buttons: {
    start: "Mulai",
    next: "Berikutnya",
    take_away: "Ambil",
    collect_remaining: "Kumpulkan Sisa",
    start_task: "Berikutnya",
    add_unit: "Tambah",
    add_ten: "Tambah Tempat Puluhan",
    add_hundred: "Tambah Tempat Ratusan",
    carryOver_unit: "Bawa ke Puluhan",
    carryOver_ten: "Bawa ke Ratusan",
  },
  ftue: {
    hand_cursor: "assets/tap.png",
    pose_normal: "assets/JAXnormal.png",
    pose_thinking: "assets/JAXthinking.png",
    pose_happy: "assets/JAX_happy.png",
    pose_superHappy: "assets/JAXhappy.png",
  },
  context_data: {
    step0_a: "Ayo belajar Penjumlahan.<br><br>Ini adalah wadah kubus kita.",
    step0_b: "Gunakan tombol '+' dan '-' .",
    step0_c: "Kartu angka menunjukkan nilai dari kubus.",
    step1:
      "Masukkan 5 kubus ke dalam wadah.<br><br>Klik tombol '+' sebanyak 5 kali.",
    step1_complete:
      "Kamu telah menambahkan 5 kubus. Dengan ini, kamu telah mewakili angka 5.",
    step2:
      "Ayo tambahkan wadah kedua untuk angka kedua.<br><br>Klik tombol '+' sebanyak 3 kali.",
    step2_complete:
      "Wadah ini berisi 3 kubus, yang akan kita tambahkan ke kubus di wadah pertama.",
    step3: "Mari kita pindahkan semua kubus ke wadah ketiga.",
    step3_complete:
      "Wadah kedua sekarang sudah penuh.<br>Kumpulkan sisa kubus dari wadah pertama ke wadah terakhir.",
    step4_complete:
      "Kamu telah menggabungkan semua kubus.<br><br>Jumlah totalnya adalah 8 kubus.",
    step5:
      'Dalam matematika, menjumlahkan berarti menggabungkan benda.<br>Jika kamu menggabungkan 5 dan 3, hasilnya adalah 8.<br><br><strong style="text-align: center; width: 100%; display: block; font-size: 1.5rem;">5 + 3 = 8</strong>',
  },
};


const texts = flag === "INDONESIAN" ? textsIndonesian : textsEnglish;