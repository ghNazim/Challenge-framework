// texts.js

const texts = {
    html_title: "Addition Sentence",
    subtitle_text: "Write the addition sentence and find the sum",
    button_texts: {
        prev: "Previous",
        next: "Next",
        finish: "View Summary", // Text for the button when on the last shape
        start_over: "Start Over" // Text for the button on the summary page
    },
    

    instruction_general: {
        instruction_title: "Instruction",
        instruction_text: "<p> Click on the empty box you want to fill, then click on any number on the right to fill the box with the number.  </p>",
    },
    // Content for the final summary step
    final_step: {
        instruction_title: "All Shapes Revealed!",
        instruction_content: "<p> This demonstrates a key concept: Different 3D shapes can have the same <span class='highlight'>volume</span>.</p>",
        formula_text: "All 10 shapes have a volume of 8 unit cubes."
    },

    // Texts for overlay popups (triggered by clicking .highlight span elements)
    // You can expand this as needed.
    overlay_definitions: {
        "highlight-gold": {
            title: "Unit Cubes",
            content: "<p>A <strong>unit cube</strong> is a standard cube, typically with sides of 1 unit in length (e.g., 1cm, 1 inch).</p><p>We use unit cubes as building blocks to measure the volume of larger, more complex shapes.</p>"
        },
        "highlight-red": {
             title: "Consistent Volume",
             content: "<p>Even though all 10 shapes had different forms, each one required exactly <strong>8 unit cubes</strong> to be completely filled.</p><p>This highlights that volume is a measure of the total space occupied, not the specific dimensions or form of the object.</p>"
        },
         "highlight": {
             title: "Volume",
             content: "<p>The measure of the amount of three-dimensional space an object occupies.</p>"
         }
    }
};
window.APP_TEXTS = texts;

const questions = [[3,2],[4,1],[5,0],[1,3],[6,2],[7,1],[2,2]];
const numberToText = ["ZERO","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE"];
const itemPictures = {
  coin: "🪙",
};

const questionTexts = [
    "Three coins added to two coins makes how many coins ?",
    "Four coins added to one coin makes how many coins ?",
    "Five coins added to zero coins makes how many coins ?",
    "One coin added to three coins makes how many coins ?",
    "Six coins added to two coins makes how many coins ?",
    "Seven coins added to one coin makes how many coins ?",
    "Two coins added to two coins makes how many coins ?",
]