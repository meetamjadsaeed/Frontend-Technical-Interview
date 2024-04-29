const itemsPerPage = 5; // Number of items per page
const dataContainer = document.getElementById("dataContainer");
const paginationContainer = document.getElementById("paginationContainer");

// Sample data for demonstration
const data = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

// Display initial data
displayData(1);

// Display data for a given page number
function displayData(pageNumber) {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  dataContainer.innerHTML = ""; // Clear previous data

  paginatedData.forEach((item) => {
    const listItem = document.createElement("div");
    listItem.textContent = item;
    dataContainer.appendChild(listItem);
  });

  // Render pagination buttons
  renderPaginationButtons(pageNumber);
}

// Render pagination buttons
function renderPaginationButtons(currentPage) {
  const totalPages = Math.ceil(data.length / itemsPerPage);

  paginationContainer.innerHTML = ""; // Clear previous pagination buttons

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    if (i === currentPage) {
      button.classList.add("active");
    }
    button.addEventListener("click", () => {
      displayData(i);
      highlightButton(i);
    });
    paginationContainer.appendChild(button);
  }
}

// Highlight the current page button
function highlightButton(currentPage) {
  const buttons = paginationContainer.getElementsByTagName("button");
  for (let button of buttons) {
    button.classList.remove("active");
    if (parseInt(button.textContent) === currentPage) {
      button.classList.add("active");
    }
  }
}
