// Function to update the last seen timestamp
function updateLastSeen() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Format the timestamp
  var formattedTime =
    formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);

  // Display the timestamp in the HTML element
  document.getElementById("lastSeen").textContent = formattedTime;
}

// Function to format time (add leading zeros)
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

// Update the last seen timestamp immediately
updateLastSeen();

// Set up auto-update every second
setInterval(updateLastSeen, 1000);
