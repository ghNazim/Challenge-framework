function triggerFlyText(tag,cb){
  const q = `#row-3 .${tag}-cell .digit-label`;
  const a = `.calc-sum-wrapper .${tag}`;
  const sourceElement = document.querySelector(q);
  const targetElement = document.querySelector(a);
  const sourceRect = sourceElement.getBoundingClientRect();
  const targetRect = targetElement.getBoundingClientRect();
  const clone = sourceElement.cloneNode(true);

  const computed = window.getComputedStyle(sourceElement);
  for (let prop of computed) {
    clone.style[prop] = computed.getPropertyValue(prop);
  }

  clone.style.position = "absolute";
  clone.style.margin = "0";
  clone.style.zIndex = "50";
  clone.style.top = `${sourceRect.top + window.scrollY}px`;
  clone.style.left = `${sourceRect.left + window.scrollX}px`;
  
  clone.style.transitionProperty = "top, left";
  clone.style.transitionDuration = `${800}ms`;
  clone.style.transitionTimingFunction = "ease-in-out";

  document.body.appendChild(clone);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      clone.style.top = `${targetRect.top + window.scrollY}px`;
      clone.style.left = `${targetRect.left + window.scrollX}px`;
    });
  });
  clone.addEventListener(
    "transitionend",
    function handleTransitionEnd() {
      clone.removeEventListener("transitionend", handleTransitionEnd);
      if (clone.parentNode) {
        clone.parentNode.removeChild(clone);
      }
      targetElement.classList.remove("hidden")
      if(cb) cb();
    },
    { once: true }
  );
}

function setOpaque(tag){
    const allPlaces = document.querySelectorAll(`.calculation-display .op`);
    const current = document.querySelectorAll(`.calculation-display .${tag}-place`);
    allPlaces.forEach(place => place.classList.add("transparent"));
    current.forEach(place => place.classList.remove("transparent"));
}

function setAllOpaque(){
    const allPlaces = document.querySelectorAll(`.calculation-display .op`);
    allPlaces.forEach(place => place.classList.remove("transparent"));
}

function highlightSum(n){
    const calcNumWrapper = document.querySelector(".calculation-display .calc-num-wrapper");
    const calcOpWrapper = document.querySelector(".calculation-display .calc-op-wrapper");
    const calcSumWrapper = document.querySelector(".calculation-display .calc-sum-wrapper");
    if(n === 1){
        calcNumWrapper.classList.add("highlight");
        calcOpWrapper.classList.remove("highlight");
    }
    else if(n === 2){
        calcNumWrapper.classList.remove("highlight");
        calcOpWrapper.classList.add("highlight");
    }
    else if(n === 3){
        calcSumWrapper.classList.add("highlight");
    }
    else{
        calcNumWrapper.classList.remove("highlight");
        calcOpWrapper.classList.remove("highlight");
    }
}