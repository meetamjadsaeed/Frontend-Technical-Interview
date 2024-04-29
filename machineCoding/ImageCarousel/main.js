const demoData = [
  {
    id: 1,
    title: "Title 1",
    src: "https://dummyimage.com/300/09f/fff.png",
    bgColor: "red",
  },
  {
    id: 2,
    title: "Title 2",
    src: "https://dummyimage.com/300/09f/fff.png",
    bgColor: "green",
  },
  {
    id: 3,
    title: "Title 3",
    src: "https://dummyimage.com/300/09f/fff.png",
    bgColor: "blue",
  },
  {
    id: 4,
    title: "Title 4",
    src: "https://dummyimage.com/300/09f/fff.png",
    bgColor: "yellow",
  },
];

const getResultsDiv = document.getElementById("listWrapper");
let currentIndex = 0;

function createList({ data }) {
  getResultsDiv.innerHTML = "";
  data.forEach((item) => {
    const createDiv = document.createElement("div");
    createDiv.classList.add("item");
    createDiv.textContent = item.title; // Set item title
    createDiv.style.background = item.bgColor; // Set item background color
    getResultsDiv.appendChild(createDiv);
  });
}

function moveNext() {
  currentIndex = (currentIndex + 1) % demoData.length;
  iterateList({ data: demoData });
}

function movePrev() {
  currentIndex = (currentIndex - 1 + demoData.length) % demoData.length;
  iterateList({ data: demoData });
}

const runSlideShow = setInterval(() => {
  moveNext();
}, 3000);

const stopSlideShow = document.getElementById("stop");

stopSlideShow.addEventListener("click", () => {
  clearInterval(runSlideShow);
});

const startSlideShow = document.getElementById("start");

startSlideShow.addEventListener("click", () => {
  runSlideShow = setInterval(() => {
    moveNext();
  }, 3000);
});

function iterateList({ data }) {
  const children = getResultsDiv.children;
  for (let i = 0; i < children.length; i++) {
    if (i === currentIndex) {
      children[i].classList.add("displayBlock");
      children[i].classList.remove("displayNone");
    } else {
      children[i].classList.remove("displayBlock");
      children[i].classList.add("displayNone");
    }
  }
}

// create event listener for next button
const nextButton = document.getElementById("next");
nextButton.addEventListener("click", moveNext);

// create event listener for prev button
const prevButton = document.getElementById("prev");
prevButton.addEventListener("click", movePrev);

function createPagination({ data }) {
  const pagination = document.getElementById("pagination");

  // Clear any existing content in pagination
  pagination.innerHTML = "";

  for (let index = 0; index < data.length; index++) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("pagination__item");
    createDiv.textContent = index + 1;
    pagination.appendChild(createDiv);
    createDiv.addEventListener("click", moveToIndex);
    function moveToIndex() {
      currentIndex = index;
      iterateList({ data: demoData });
    }
  }
}

// Initialize
createList({ data: demoData });
iterateList({ data: demoData });
createPagination({ data: demoData });
