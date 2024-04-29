// Retrieve the content from local storage and display it
document.getElementById("content").value =
  localStorage.getItem("savedContent") || "";

// Add event listener to the textarea for input changes
document.getElementById("content").addEventListener("input", function () {
  // Save the content to local storage
  localStorage.setItem("savedContent", this.value);
});
