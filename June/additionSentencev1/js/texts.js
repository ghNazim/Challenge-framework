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
    slider_label: "Fill with Cubes:",
    slider_unit: "cubes",
    formula_template: "Volume = {count} unit cubes", // {count} will be replaced

    // Instructions for each of the 10 structures
    // Each step will have a title and content. Content can include HTML.
    steps: [
        {
            instruction_title: "Structure 1: The H-Block",
            instruction_content: "<p>This is the first structure. It's shaped like an 'H'.</p><p>Drag the slider below the shape to fill it with <span class='highlight-gold'>unit cubes</span>. Notice how many cubes fit inside.</p>",
            shape_name: "H-Block"
        },
        {
            instruction_title: "Structure 2: L-Corner",
            instruction_content: "<p>Great! Now for the second structure, an 'L-Corner'.</p><p>Use the slider again. How many <span class='highlight-gold'>unit cubes</span> make up this shape?</p>",
            shape_name: "L-Corner"
        },
        {
            instruction_title: "Structure 3: Staircase",
            instruction_content: "<p>This structure looks like a small 'Staircase'.</p><p>Fill it up with <span class='highlight-gold'>unit cubes</span> using the slider.</p>",
            shape_name: "Staircase"
        },
        {
            instruction_title: "Structure 4: The Cube (2x2x2)",
            instruction_content: "<p>A perfect '2x2x2 Cube'!</p><p>How many <span class='highlight-gold'>unit cubes</span> do you expect this to hold? Verify with the slider.</p>",
            shape_name: "2x2x2 Cube"
        },
        {
            instruction_title: "Structure 5: L-Platform",
            instruction_content: "<p>This is an 'L-Platform' shape.</p><p>Use the slider to see its volume in <span class='highlight-gold'>unit cubes</span>.</p>",
            shape_name: "L-Platform"
        },
        {
            instruction_title: "Structure 6: Straight Line",
            instruction_content: "<p>A simple 'Straight Line' of cubes.</p><p>Fill it using the slider. How many <span class='highlight-gold'>unit cubes</span> long is it?</p>",
            shape_name: "Straight Line"
        },
        {
            instruction_title: "Structure 7: Flat Rectangle (2x4)",
            instruction_content: "<p>This is a flat '2x4 Rectangle'.</p><p>Use the slider. What's its volume in <span class='highlight-gold'>unit cubes</span>?</p>",
            shape_name: "2x4 Rectangle"
        },
        {
            instruction_title: "Structure 8: U-Shape",
            instruction_content: "<p>An interesting 'U-Shape'.</p><p>Fill it up with <span class='highlight-gold'>unit cubes</span> using the slider and count them.</p>",
            shape_name: "U-Shape"
        },
        {
            instruction_title: "Structure 9: T-Shape",
            instruction_content: "<p>This structure forms a 'T-Shape'.</p><p>How many <span class='highlight-gold'>unit cubes</span> does it take to build it? Use the slider to find out.</p>",
            shape_name: "T-Shape"
        },
        {
            instruction_title: "Structure 10: Zig-Zag",
            instruction_content: "<p>Our final individual structure! This one forms a 'Zig-Zag' pattern.</p><p>Fill it up using the slider and note the total number of <span class='highlight-gold'>unit cubes</span>.</p>",
            shape_name: "Zig-Zag"
        }
    ],

    instruction_general: {
        instruction_title: "Explore Volumes",
        instruction_text: "<p>Drag the slider below the shape to fill it with <span class='highlight-gold'>unit cubes</span>. Notice how many cubes fit inside.</p>",
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