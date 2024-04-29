const demoData = [
  {
    id: 1,
    title: "Title 1",
  },
  {
    id: 2,
    title: "Title 2",
  },
  {
    id: 3,
    title: "Title 3",
  },
  {
    id: 4,
    title: "Title 4",
  },
  {
    id: 5,
    title: "Title 5",
  },
  {
    id: 6,
    title: "Title 6",
  },
];

const getResultsDiv = document.getElementById("listWrapper");

function createList(data, inputValue) {
  // Clear previous results
  getResultsDiv.innerHTML = "";

  data.forEach((item) => {
    const createLi = document.createElement("li");
    createLi.classList.add("suggest__results__item");

    // Wrap matching characters in bold
    const index = item.title.toLowerCase().indexOf(inputValue.toLowerCase());
    if (index !== -1) {
      const boldTitle =
        item.title.substring(0, index) +
        "<b>" +
        item.title.substring(index, index + inputValue.length) +
        "</b>" +
        item.title.substring(index + inputValue.length);
      createLi.innerHTML = boldTitle;
    } else {
      createLi.textContent = item.title;
    }

    getResultsDiv.appendChild(createLi);
  });
}

function onInputChange(e) {
  const inputValue = e.target.value.toLowerCase();
  const filterData = demoData.filter((item) =>
    item.title.toLowerCase().includes(inputValue)
  );
  createList(filterData, inputValue); // Pass inputValue to createList
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const debouncedInputChange = debounce(onInputChange, 300);

const getInput = document.getElementById("myInput");

getInput.addEventListener("input", debouncedInputChange);
