const appTextContent = {
  titleBar: {
    heading: "Unwrapping of a cylinder",
    subheading: "Observe how a cylinder unwraps into commonly known 2D shapes.",
  },
  contextSteps: [
    {
      title: "Customize the radius",
      text: "Adjust the radius of the cylinder by playing with the 'Radius' slider.",
      highlights: [
        {
          word: "radius",
          def: "radius",
          instance: 1,
          description:
            "The radius of a cylinder is the distance from the center of the circular base to the edge of the circle.",
        },
      ],
    },
    {
      title: "Customize the height",
      text: "Adjust the height of the cylinder by playing with the 'Height' slider.",
      highlights: [
        {
          word: "height",
          def: "height",
          instance: 1,
          description:
            "The height of a cylinder is the distance from the center of the circular base to the center of the circular top.",
        },
      ],
    },
    {
      title: "Unravel the Cylinder",
      text: "Use the 'Unwrap' slider to gradually unravel the cylinder. ",
      highlights: [],
    },
    {
      title: "Observe",
      text: "The cylinder can be unwrapped into one rectangle and two circles.",
      highlights: [
        {
          word: "rectangle",
          def: "rectangle",
          instance: 1,
          description:
            "A rectangle is a two-dimensional shape that has four straight sides and four right angles. Opposite sides are equal in length and parallel.",
        },
        {
          word: "circles",
          def: "circle",
          instance: 1,
          description:
            "A circle is a round shape where every point on the edge is the same distance from the center.",
        },
      ],
    },
  ],
  controls: {
    sliderLabels: {
      radius: "Radius",
      height: "Height",
      unwrap: "Unwrap",
    },
    prevButton: "Previous",
    nextButton: "Next",
  },
  fullscreenOverlay: {
    title: "Full Screen Overlay",
    text: "This overlay covers the entire applet with margins.",
  },
};
