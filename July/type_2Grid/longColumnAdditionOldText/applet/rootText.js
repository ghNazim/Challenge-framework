const mcqDataEnglish = {
  ones_place: {
    question: "Which place do we add first?",
    options: ["Ones", "Hundreds", "Thousands", "Ten Thousands"],
    answer_index: 0,
    correct_feedback: "You are right. We go from right to left.",
    wrong_feedback: "No, that's not right. We go from right to left.",
  },
  add_ones: {
    question: "{{o1x}} + {{o2x}} =",
    options: ["{{osumx_minus}}", "{{osumx_plus}}", "{{osumx}}"],
    answer_index: 2,
    correct_feedback: "That's right. ",
    wrong_feedback: "That's not right. Try again.",
  },
  add_tens: {
    question: "{{t1x}} + {{t2x}} + {{oOverflow}}0 =",
    options: ["{{tsumx_plus}}", "{{tsumx}}", "{{tsumx_minus}}"],
    answer_index: 1,
    correct_feedback: "That's right.",
    wrong_feedback: "That's not right. Try again.",
  },
  add_hundreds: {
    question: "{{h1x}} + {{h2x}} + {{tOverflow}}00 =",
    options: ["{{hsumx_minus}}", "{{hsumx_plus}}", "{{hsumx}}"],
    answer_index: 2,
    correct_feedback: "That's right.",
    wrong_feedback: "That's not right. Try again.",
  },
  add_thousands: {
    question: "{{th1x}} + {{th2x}} + {{hOverflow}}000 =",
    options: ["{{thsumx_minus}}", "{{thsumx_plus}}", "{{thsumx}}"],
    answer_index: 2,
    correct_feedback: "That's right.",
    wrong_feedback: "That's not right. Try again.",
  },
  add_ten_thousands: {
    question: "{{tt1x}} + {{tt2x}} + {{thOverflow}}0000 =",
    options: ["{{ttsumx}}", "{{ttsumx_plus}}", "{{ttsumx_minus}}"],
    answer_index: 0,
    correct_feedback: "That's right.",
    wrong_feedback: "That's not right. Try again.",
  },
  ones_split: {
    question: "How do we split {{osumx}}?",
    options: ["9+{{o3x_plus}}", "11+{{o3x_minus}}", "10+{{o3x}}"],
    answer_index: 2,
    correct_feedback: "That's right.",
    wrong_feedback: "That's not right. Try again.",
  },
  tens_split: {
    question: "How do we split {{tsumx}}?",
    options: ["90+{{t3x_plus}}", "110+{{t3x_minus}}", "100+{{t3x}}"],
    answer_index: 2,
    correct_feedback: "That's right.",
    wrong_feedback: "That's not right. Try again.",
  },
  hundreds_split: {
    question: "How do we split {{hsumx}}?",
    options: ["1100+{{h3x_minus}}", "1000+{{h3x}}", "900+{{h3x_plus}}"],
    answer_index: 1,
    correct_feedback: "That's right.",
    wrong_feedback: "That's not right. Try again.",
  },
  thousands_split: {
    question: "How do we split {{thsumx}}?",
    options: ["10000+{{th3x}}", "11000+{{th3x_minus}}", "9000+{{th3x_plus}}"],
    answer_index: 0,
    correct_feedback: "That's right.",
    wrong_feedback: "That's not right. Try again.",
  },
};
const textPoolEnglish = {
  mcqIn: "Answer this question by clicking the correct option.",
  start: "Let's learn addition with carry overs. Click 'Next' to start.",
  split_number1:
    "Split the number into their place values. Tap on the first number.",
  split_number2:
    "Split the number into their place values. Tap on the second number.",
  after_split: "Let's answer a question. Click on 'Next' to continue.",
  ones_1: "Recall we add by place values. Let's add ones column.",
  ones_carryover:
    "Oh! we have more than 9 in ones place. We need to do a carry over.",
  ones_carryover2: "Great! we have split {{osumx}} correctly. Click on 'Carry Over'.",
  ones_complete: "We have completed adding ones. Let's add tens now.",
  tens_1: "Let's add the tens column.",
  tens_carryover:
    "Oh! we have more than 90 in the tens place. We need to do a carry over.",
  tens_carryover2:
    "Great! We have split {{tsumx}} correctly. Click on 'Next' to carry over.",
  tens_complete:
    "We have completed adding the tens. Let's add the hundreds now.",

  hundreds_1: "Now for the hundreds column.",
  hundreds_carryover:
    "Uh oh! We have more than 900 in the hundreds place. Time to do a carry over.",
  hundreds_carryover2:
    "You have split {{hsumx}} correctly. Click 'Next' to continue.",
  hundreds_complete:
    "We have completed adding hundreds place. Let's move to the thousands now.",

  thousands_1: "Let's add the thousands column.",
  thousands_carryover:
    "Uh oh! We have more than 9000 in the thousands place. Let's do a carry over.",
  thousands_carryover2: "Perfect Split. Click 'Next' to carry over.",
  thousands_complete:
    "We have completed adding the thousands. Let's add ten thousands now.",

  ten_thousands_1: "Finally, let's add the ten thousands column.",
  ten_thousands_complete: "We have completed adding all columns.",
  final_summary:
    "Good work! You have added the numbers correctly. The answer is {{answer}}.",
  combine:
    "Now we need to combine the result to get the answer. Tap on the highlighted part.",
  mcq_one:"{{osumx}}>9,<br>We need to split {{osumx}} to do a carry over to tens place. ",
  mcq_ten:"{{tsumx}}>90,<br>We need to split {{tsumx}} to do a carry over to hundreds place. ",
  mcq_hundred:"{{hsumx}}>900,<br>We need to split {{hsumx}} to do a carry over to thousands place. ",
  mcq_thousand:"{{thsumx}}>9000,<br>We need to split {{thsumx}} to do a carry over to ten thousands place. ",
};

const buttonTextsEnglish = {
  next: "Next",
  start_over: "Start Over",
  carry_over: "Carry Over",
  try_new: "Try New",
};

const buttonTextsIndonesian = {
  next: "Berikutnya",
  start_over: "Mulai Lagi",
  previous: "Sebelumnya",
  submit: "Kirim",
  proceed: "Lanjutkan",
  hint: "Petunjuk",
  check: "Periksa",
};
const overlayDataIndonesian = {
  heading: "Aktivitas Selesai!",
  paragraph: `Jika kamu ingin mencoba lagi, klik tombol 'Mulai Lagi'.`,
};

const overlayDataEnglish = {
  heading: "Activity Complete!",
  paragraph: `If you want to try again, click on the 'Start Over' button. `,
};
