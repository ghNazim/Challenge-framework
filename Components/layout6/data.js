const appTextContent = {
  titleBar: {
    heading: "Pyramids",
    subheading: "Explore how a pyramid is formed from its 2D base",
  },
  contextSteps: [
    {
      title: "Step 1: Select the base",
      text: "Select the base of your pyramid by clicking on any of the buttons below.",
      highlights: [
        {
          word: "base",
          def: "base",
          instance: 1,
          description:
            "The base of a pyramid is the polygonal face of the pyramid that lies opposite the apex. It is the foundation upon which the pyramid is built.",
        },
      ],
    },
    {
      title: "Step 2: Adjust the height",
      text: "Adjust the position of the apex by playing with the 'Height' slider.",
      highlights: [
        {
          word: "apex",
          def: "apex",
          instance: 1,
          description:
            "The apex of a pyramid is the single point where all the lateral faces (triangular sides) meet. It is the topmost vertex of the pyramid, opposite the base. ",
        },
      ],
    },
    {
      title: "Step 3: Form the pyramid",
      text: "Drag the 'Form pyramid' slider all the way to the right to complete the pyramid. ",
      highlights: [],
    },
  ],
  note:"Note: This isn't technically a pyramid, as circle is not a polygon. It is known as a 'cone'.",
  controls: {
    sliderLabels: {
      height: "Height",
      form: "Form Pyramid",
    },
    buttons: ["Square", "Rectangle", "Circle", "Triangle"],
  },
  fullscreenOverlay: {
    title: "Full Screen Overlay",
    text: "This overlay covers the entire applet with margins.",
  },
};
