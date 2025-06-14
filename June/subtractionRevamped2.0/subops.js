function switchBlock(imgElement, newSrc) {
  const scaleDown = imgElement.animate(
    [{ transform: "scale(1)" }, { transform: "scale(0)" }],
    { duration: 300, easing: "ease" }
  );

  scaleDown.onfinish = () => {
    imgElement.src = newSrc;
    imgElement.animate([{ transform: "scale(0)" }, { transform: "scale(1)" }], {
      duration: 300,
      easing: "ease",
    });
  };
}

