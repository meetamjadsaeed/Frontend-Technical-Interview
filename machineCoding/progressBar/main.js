let barWidth = 0;
const getBar = document.getElementById("myBar");

function bar() {
  barWidth += 25;
  getBar.style.width = `${barWidth}%`;
  getBar.innerHTML = `${barWidth}%`;
}

function moveBar() {
  let id = setInterval(frame, 100);
  function frame() {
    barWidth >= 100 ? clearInterval(id) : bar();
  }
}

moveBar();
