// For example:

// "Zero to two, three in a row,
// Four, five, and six, on the go.
// Seven, eight, and three in line,
// Diagonals to make you shine."

// Assign Mnemonic Keywords: Assign mnemonic keywords to each winning combination. Choose words that are easy to remember and relate to the positions on the Tic Tac Toe grid. For instance:

// [0, 1, 2] - "Top Row"
// [3, 4, 5] - "Middle Row"
// [6, 7, 8] - "Bottom Row"
// [0, 3, 6] - "Left Column"
// [1, 4, 7] - "Middle Column"
// [2, 5, 8] - "Right Column"
// [0, 4, 8] - "Top Left to Bottom Right Diagonal"
// [2, 4, 6] - "Top Right to Bottom Left Diagonal"

document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  const message = document.getElementById("message");
  const resetButton = document.getElementById("reset");

  let currentPlayer = "X";
  let gameActive = true;
  let gameState = ["", "", "", "", "", "", "", "", ""];

  // Winning combinations for Tic Tac Toe
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],

    [1, 4, 7],

    [2, 5, 8],

    [0, 4, 8],

    [2, 4, 6],
  ];

  // Handles click on a cell
  function handleCellClick(clickedCell, clickedCellIndex) {
    // Update game state
    gameState[clickedCellIndex] = currentPlayer;
    // Update cell content
    clickedCell.textContent = currentPlayer;

    // Check for win
    const isWin = checkWin();
    // Check for draw
    const isDraw = !gameState.includes("");

    // If there's a winner
    if (isWin) {
      message.textContent = `${currentPlayer} has won!`;
      gameActive = false;
      return;
    }

    // If it's a draw
    if (isDraw) {
      message.textContent = `It's a draw!`;
      gameActive = false;
      return;
    }

    // Switch player
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    message.textContent = `${currentPlayer}'s turn`;
  }

  // Checks if there's a win
  function checkWin() {
    return winningConditions.some((combination) => {
      return combination.every((index) => {
        return gameState[index] === currentPlayer;
      });
    });
  }

  // Handles hover effect on cell
  function handleCellHover(event) {
    if (!gameActive) return;
    event.target.classList.add("hover");
  }

  // Handles hover effect removal on cell
  function handleCellLeave(event) {
    event.target.classList.remove("hover");
  }

  // Resets the game
  function handleReset() {
    currentPlayer = "X";
    gameActive = true;
    gameState = ["", "", "", "", "", "", "", "", ""];
    message.textContent = `${currentPlayer}'s turn`;
    board.querySelectorAll(".cell").forEach((cell) => (cell.textContent = ""));
  }

  // Creates the Tic Tac Toe board
  function createBoard() {
    gameState.forEach((cell, index) => {
      const cellElement = document.createElement("div");
      cellElement.classList.add("cell");
      // Adds event listeners for cell click, hover, and leave
      cellElement.addEventListener("click", () => {
        if (!gameActive || cell !== "") return;
        handleCellClick(cellElement, index);
      });
      cellElement.addEventListener("mouseover", handleCellHover);
      cellElement.addEventListener("mouseleave", handleCellLeave);
      board.appendChild(cellElement);
    });
  }

  // Initializes the game
  createBoard();
  message.textContent = `${currentPlayer}'s turn`;

  // Event listener for reset button
  resetButton.addEventListener("click", handleReset);
});
