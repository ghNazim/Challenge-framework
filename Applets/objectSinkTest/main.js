const jarWidth = 300,
  jarHeight = 300,
  x0 = 250,
  y0 = 400,
  dx = 80,
  dy = 40,initialWaterLevel = 200;
const objectHeight = 100;
const duration = 2000,
  objectStartY = 10,
  objectEndY = 290,
  pivot = 80,waterLevel=objectHeight/2;
let currentObject = "watermelon";
const watermelonProps = {
    name:"watermelon",
    waterLevel:this.height/2
}
drawPrism(initialWaterLevel);
drawBeaker();
function setImagePos(id, x, y) {
  const obj = document.getElementById(id);
  obj.setAttribute("x", x);
  obj.setAttribute("y", y);
}

setImagePos("watermelon", 400, 80);
setImagePos("pumpkin", 400, 80);
setImagePos("pineapple", 400, 80);

animateObjectPosition("watermelon", objectStartY, objectEndY, duration, pivot,waterLevel,objectHeight);
