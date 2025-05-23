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
          description:
            "Identical circular plates stacked on top of each other combine to form a cylinder. ",
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
    prevButton: "Previous",
    nextButton: "Next",
  },
  volumeFormula: {
    watermelon: [
      "Volume of the Displaced Water",
      "= Area of the base x Rise in water level",
      "= 30 x 20 x 5 cc",
      "= 3000 cc",
    ],
    pumpkin: [
      "Volume of the Displaced Water",
      "= Area of the base x Rise in water level",
      "= 30 x 20 x 4 cc",
      "= 2400 cc",
    ],
    coconut: [
      "Volume of the Displaced Water",
      "= Area of the base x Rise in water level",
      "= 30 x 20 x 2 cc",
      "= 1200 cc",
    ],
  },
};
