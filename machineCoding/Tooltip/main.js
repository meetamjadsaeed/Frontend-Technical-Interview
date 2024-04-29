const getHoverBtn = document.getElementById("hover__btn");
const getToolTipWrapper = document.getElementById("tooltip__wrapper");

getHoverBtn.addEventListener("mouseenter", onMouseEnter);
getHoverBtn.addEventListener("mouseleave", onMouseLeave);
getToolTipWrapper.addEventListener("mouseenter", onTooltipMouseEnter);
getToolTipWrapper.addEventListener("mouseleave", onTooltipMouseLeave);

let isCursorInsideTooltip = false;

function toggleTooltip() {
  const classesList = getToolTipWrapper.classList;
  const arrayOfClasses = Array.from(classesList);
  if (arrayOfClasses.includes("displayNone")) {
    getToolTipWrapper.classList.remove("displayNone");
    getToolTipWrapper.classList.add("displayBlock");
  } else {
    getToolTipWrapper.classList.remove("displayBlock");
    getToolTipWrapper.classList.add("displayNone");
  }
}

function onMouseEnter() {
  toggleTooltip();
}

function onMouseLeave() {
  if (!isCursorInsideTooltip) {
    toggleTooltip();
  }
}

function onTooltipMouseEnter() {
  isCursorInsideTooltip = true;
}

function onTooltipMouseLeave() {
  isCursorInsideTooltip = false;
}
