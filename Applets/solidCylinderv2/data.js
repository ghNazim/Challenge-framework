const appTextContent = {
  titleBar: {
    heading: "Volume of a Cylinder",
    subheading: "Observe how a cylinder can be rearranged into a cuboid",
  },
  contextSteps: [
    {
      title: "Step 1: Cut the Cylinder",
      text: "To find the volume of a cylinder, We start by cutting the cylinder into many thin slices. Click 'Next'.",
      highlights: [
        {
          word: "volume",
          def: "volume",
          instance: 1,
          description:
            "The volume of a shape is the amount of space it occupies. It tells us how much something can hold or how much space it fills.",
        },
      ],
    },
    {
      title: "Step 2: Adjust the slice count",
      text: "Use the slider above to change how many slices the cylinder is divided into.",
      highlights: [],
    },
    {
      title: "Step 3: Split the Cylinder",
      text: "Click 'Next' to break the cylinder into two equal halves.",
      highlights: [],
    },
    {
      title: "Step 4: Rearrange the slices",
      text: "Click 'Next' to bring the two halves together and form a shape resembling a matchbox. This shape is called a cuboid.",
      highlights: [
        {
          word: "cuboid",
          def: "cuboid",
          instance: 1,
          description:
            "A cuboid is a three-dimensional shape with six rectangular faces . Its volume can be found by multiplying its width, breadth, and height.",
        },
      ],
    },
    {
      title: "Important to notice",
      text: "The more slices you create, the more the shape starts to look like a real cuboid.",
      highlights: [],
    },
    {
      title: "Step 5: Calculate Volume",
      text: "To find the volume of the cuboid, multiply its width, breadth, and height. Click 'Next' to calculate the volume.",
      highlights: [],
    },
  ],
  controls: {
    sliderLabel: "Number of slices",
    prevButton: "Previous",
    nextButton: "Next",
  },
  volumeFormula: [
    "Volume of the cylinder",
    "= width × breadth × height",
    "= π r × r × h",
    "= π r ² h",
  ],
  fullscreenOverlay: {
    title: "Full Screen Overlay",
    text: "This overlay covers the entire applet with margins.",
  },
};
