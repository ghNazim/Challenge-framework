

const appTextContent = {
  titleBar: {
    heading: "Volume of a Cylinder",
    subheading: "Observe how circular plates are stacked to form a cylinder",
  },
  contextSteps: [
    {
      title: "Step 1: Customize Your Cylinder",
      text: "Use the sliders above to adjust the radius of the plates and the number of plates stacked.",
      highlights: [
        {
          word: "plates",
          def: "plate",
          instance: 1,
          description:"Identical circular plates stacked on top of each other combine to form a cylinder. "
        },
      ],
    },
    {
      title: "Step 2: Calculate the Volume",
      text: "The cylinder’s volume is calculated by multiplying the area of each plate by the number of plates stacked.",
      highlights: [],
    },
  ],
  controls: {
    sliderLabels: {
      radius: "Radius",
      height: "No of plates",
    },
    prevButton: "Previous",
    nextButton: "Next",
  },
  volumeFormula: [
    "Volume of the cylinder",
    "= Area of the base × height formed by plates",
    "= π r ² × h",
    "= π r ² h",
  ],
  fullscreenOverlay: {
    title: "Full Screen Overlay",
    text: "This overlay covers the entire applet with margins.",
  },
};
