const flag = "ENGLISH"; // Change this to "INDONESIAN" if needed

const textsEnglish = {
  buttons: {
    start: "Start",
    next: "Next",
    take_away: "Take Away",
    collect_remaining: "Collect Remaining",
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
    step0_a: "Let's learn subtraction.<br><br>This is our cube container.",
    step0_b: "Use the '+' and '-' buttons.",
    step0_c: "The number card shows the value of the cubes.",
    step1: "Put 5 cubes in the container.<br><br>Tap on the '+' button 5 times.",
    step1_complete:
      "You have added 5 cubes. By doing this, you have represented the number 5.",
    step2:
      "Let's bring a second container for the second number.<br><br>Tap the '+' button 3 times.",
    step2_complete:
      "This container has 3 slots, which we need to fill by taking away cubes from the first container.",
    step3:
      "Let's take away cubes from the first container to fill the second container.",
    step3_complete:
      "The second container is filled now.<br>Collect the remaining cubes from the first container in the last container.",
    step4_complete: "You have collected the remaining cubes.",
    step5:
      "If we take 3 away from 5, we get 2. In Math, taking away means subtraction!<br><br><strong style=\"text-align: center; width: 100%; display: block; font-size: 1.5rem;\">5 - 3 = 2</strong>",
  },
};

const textsIndonesian = {
  buttons: {
    start: "Mulai",
    next: "Lanjut",
    take_away: "Ambil",
    collect_remaining: "Kumpulkan Sisa",
    start_task: "Lanjut",
  },
  ftue: {
    hand_cursor: "assets/hand_cursor.png",
    pose_normal: "assets/JAXnormal.png",
    pose_thinking: "assets/JAXthinking.png",
    pose_happy: "assets/JAXhappy.png",
    pose_superHappy: "assets/JAXsuperhappy.png",
  },
  context_data: {
    step0_a: "Mari belajar pengurangan.<br><br>Ini adalah wadah kubus kita.",
    step0_b: "Gunakan tombol '+' dan '-'.",
    step0_c: "Kartu angka menunjukkan nilai dari kubus.",
    step1: "Masukkan 5 kubus ke dalam wadah.<br><br>Ketuk tombol '+' 5 kali.",
    step1_complete:
      "Kamu telah menambahkan 5 kubus. Dengan ini, kamu telah merepresentasikan angka 5.",
    step2:
      "Mari kita tambahkan wadah kedua untuk angka kedua.<br><br>Ketuk tombol '+' 3 kali.",
    step2_complete:
      "Wadah ini memiliki 3 slot, yang perlu kita isi dengan mengambil kubus dari wadah pertama.",
    step3:
      "Mari kita ambil kubus dari wadah pertama untuk mengisi wadah kedua.",
    step3_complete:
      "Wadah kedua sekarang terisi.<br>Kumpulkan sisa kubus dari wadah pertama di wadah terakhir.",
    step4_complete: "Kamu telah mengumpulkan sisa kubus.",
    step5:
      "Jika kita mengambil 3 dari 5, kita mendapatkan 2. Dalam Matematika, mengambil berarti pengurangan!<br><br><strong style=\"text-align: center; width: 100%; display: block; font-size: 1.5rem;\">5 - 3 = 2</strong>",
  },
};

const texts = flag === "INDONESIAN" ? textsIndonesian : textsEnglish;