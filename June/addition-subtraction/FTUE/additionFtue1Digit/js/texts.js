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
    okay: "Okay",
    start_over: "Start Over",
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
      "Let's learn Addition.<br><br>This is our cube container.<br><br>Click 'Next' to continue.",
    step0_b:
      "You can use the '+' and '-' buttons to change the number of cubes.<br><br>Click 'Next' to continue.",
    step0_c:
      "The number card shows the value of the cubes.<br><br>Click 'Next' to continue.",
    step1:
      "Let's solve 5 + 3.<br><br>Put 5 cubes in the container.<br><br>Tap on the '+' button 5 times.",
    step1_complete:
      "Great! <br><br>You have represented the number 5.<br><br> Click 'Next' to continue.",
    step2:
      "Use the second container to represent the number 3.<br><br>Tap on the '+' button 3 times.",
    step2_complete:
      "This container has 3 cubes, which we need to add to the cubes of the first container.<br><br>Click 'Next' to continue.",
    step3: "Let's bring all the cubes in the third container.<br><br> Click on 'Add'.",
    step3_complete:
      "The second container is filled now.<br><br>Collect the remaining cubes from the first container in the last container.",
    step4_complete:
      "You have brought the cubes together.<br><br> There are 8 cubes in total.",
    step5:
      'In math, adding means bringing things together.<br><br> If you bring 5 and 3 together, you get 8.<br><br><strong style="text-align: center; width: 100%; display: block; font-size: 1.5rem;">5 + 3 = 8</strong>',
    overlay_final_heading: "Activity Complete!",
    overlay_final_message: `If you want to try again, click on the "Start Over" button.`,
  },
};

const textsIndonesian = {
  buttons: {
    start: "Mulai",
    next: "Berikutnya",
    take_away: "Kurangi",
    collect_remaining: "Kumpulkan Sisa",
    start_task: "Berikutnya",
    add_unit: "Tambah",
    add_ten: "Tambahkan Tempat Puluhan",
    add_hundred: "Tambahkan Tempat Ratusan",
    carryOver_unit: "Bawa ke Puluhan",
    carryOver_ten: "Bawa ke Ratusan",
    okay: "Oke",
    start_over: "Mulai Lagi",
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
      "Ayo belajar Penjumlahan.<br><br>Ini adalah wadah kubus kita.<br><br>Klik 'Berikutnya' untuk melanjutkan.",
    step0_b:
      "Kamu dapat menggunakan tombol '+' dan '-' untuk mengubah jumlah kubus.<br><br>Klik 'Berikutnya' untuk melanjutkan.",
    step0_c:
      "Kartu angka menunjukkan nilai dari kubus.<br><br>Klik 'Berikutnya' untuk melanjutkan.",
    step1:
      "Ayo kita selesaikan 5 + 3.<br><br>Masukkan 5 kubus ke dalam wadah.<br><br>Ketuk tombol '+' sebanyak 5 kali.",
    step1_complete:
      "Bagus!<br><br>Kamu telah merepresentasikan angka 5.<br><br>Klik 'Berikutnya' untuk melanjutkan.",
    step2:
      "Gunakan wadah kedua untuk merepresentasikan angka 3.<br><br>Ketuk tombol '+' sebanyak 3 kali.",
    step2_complete:
      "Wadah ini berisi 3 kubus, yang perlu kita tambahkan ke kubus di wadah pertama.<br><br>Klik 'Berikutnya' untuk melanjutkan.",
    step3:
      "Ayo kita gabungkan semua kubus ke dalam wadah ketiga.<br>Klik 'Tambah'.",
    step3_complete:
      "Wadah kedua sekarang sudah terisi.<br><br>Kumpulkan sisa kubus dari wadah pertama ke wadah terakhir.",
    step4_complete:
      "Kamu telah menggabungkan semua kubus.<br><br> Totalnya ada 8 kubus.",
    step5:
      'Dalam matematika, menjumlahkan berarti menggabungkan benda.<br><br> Jika kamu menggabungkan 5 dan 3, kamu mendapatkan 8.<br><br><strong style="text-align: center; width: 100%; display: block; font-size: 1.5rem;">5 + 3 = 8</strong>',
    overlay_final_heading: "Aktivitas Selesai!",
    overlay_final_message: `Jika kamu ingin mencoba lagi, klik tombol "Mulai Lagi".`,
  },
};


const texts = flag === "INDONESIAN" ? textsIndonesian : textsEnglish;
