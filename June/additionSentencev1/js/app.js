// app.js
const T = window.APP_TEXTS;

if (!T) {
    console.error("Error: APP_TEXTS not found. Ensure texts.js is loaded before app.js and defines window.APP_TEXTS.");
}

let mainTitleText, subtitleText, contextBox, upperControlsContainer,
    formulaTextElement, prevButton, nextButton, stepCounterElement,
    definitionOverlay, definitionOverlayContent, closeDefinitionOverlay, htmlTitle;

let volumeSlider, sliderValueDisplay;

// App state
let currentStep = 0,NUM_STRUCTURES=8;

initApp();

function initApp() {
    htmlTitle = document.getElementById('html_title');
    mainTitleText = document.getElementById('main_title_text');
    subtitleText = document.getElementById('subtitle_text');
    contextBox = document.getElementById('contextBox');
    prevButton = document.getElementById('prevButton');
    nextButton = document.getElementById('nextButton');
    stepCounterElement = document.getElementById('stepCounter');
    definitionOverlay = document.getElementById('definitionOverlay');
    definitionOverlayContent = document.getElementById('definitionOverlayContent');
    closeDefinitionOverlay = document.getElementById('closeDefinitionOverlay');

    htmlTitle.textContent = T.html_title;
    mainTitleText.textContent = T.main_title_text;
    subtitleText.textContent = T.subtitle_text;
    nextButton.textContent = T.button_texts.next;
    prevButton.textContent = T.button_texts.prev;
    // Button text will be set in updateNavigationButtons


    closeDefinitionOverlay.addEventListener('click', () => definitionOverlay.classList.remove('show'));
    contextBox.addEventListener('click', (event) => {
        const target = event.target.closest('.highlight, .highlight-blue, .highlight-gold, .highlight-green, .highlight-red');
        if (target) {
            const key = Array.from(target.classList).find(cls => T.overlay_definitions[cls]);
            if (key && T.overlay_definitions[key]) {
                const def = T.overlay_definitions[key];
                definitionOverlayContent.innerHTML = `<h3>${def.title}</h3>${def.content}`;
                definitionOverlay.classList.add('show');
            }
        }
    });
}


function updateInstructions(stepIndex) {
    const ContextSection = document.querySelector('.context-section');
    let title, content;
        if (stepIndex < NUM_STRUCTURES) {
            title = T.instruction_general.instruction_title;
            content = T.instruction_general.instruction_text;
        } else {
            title = T.final_step.instruction_title;
            content = T.final_step.instruction_content;
        }
        ContextSection.innerHTML = `<h2>${title}</h2><div>${content}</div>`;
        ContextSection.classList.add('visible');
}

function updateStepCounter(stepIndex) {
    stepCounterElement.innerHTML = '';
    for (let i = 0; i <= NUM_STRUCTURES; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === stepIndex) {
            dot.classList.add('active');
        }
        dot.dataset.stepIndex = i;
        stepCounterElement.appendChild(dot);
    }
}
updateInstructions(0)
updateStepCounter(0)