const appTextContent = {
  titleBar: {
    heading: "Volume measurement",
    subheading: "Explore how to measure volume of any irregular shape",
  },
  contextSteps: [
    {
      title: "Step 1: Select a Shape",
      text: "Choose a shape to begin measuring its volume.",
      highlights: [
        {
          word: "volume",
          def: "volume",
          instance: 1,
          description: "Volume is the amount of space something takes up. ",
        },
      ],
    },
    {
      title: "Chosen shape:",
      text: "You have chosen a watermelon to measure its volume.",
      highlights: [],
    },
    {
      title: "Step 2: Drop the Shape",
      text: "Click the 'Next' button to release the shape into the container.",
      highlights: [],
    },
    {
      title: "Observe the Water Level",
      text: "Notice how the water level rises as the shape submerges. The volume of the displaced water is the volume of the shape.",
      highlights: [],
    },
    {
      title: "Shape of the Displaced Water",
      text: "The displaced water forms a cuboid, whose volume we can easily calculate.",
      highlights: [
        {
          word: "cuboid",
          def: "cuboid",
          instance: 1,
          description:
            "A cuboid is a 3D shape with six flat sides — all in the shape of rectangles. It's like a box or a brick, with definite length, width, and height. ",
        },
      ],
    },
    {
      title: "Step 3:Calculate the volume",
      text: "Determine the shape’s volume by multiplying the rise in water level by the area of the container’s base.",
      highlights: [
        {
          word: "area",
          def: "area",
          instance: 1,
          description:
            "Area of a rectangle is the product of its length and width. The container's base is in the shape of a rectangle.",
        },
      ],
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
      "= 30 x 20 x 4 cc",
      "= 2400 cc",
    ],
    pumpkin: [
      "Volume of the Displaced Water",
      "= Area of the base x Rise in water level",
      "= 30 x 20 x 3 cc",
      "= 1800 cc",
    ],
    coconut: [
      "Volume of the Displaced Water",
      "= Area of the base x Rise in water level",
      "= 30 x 20 x 2 cc",
      "= 1200 cc",
    ],
  },
};
