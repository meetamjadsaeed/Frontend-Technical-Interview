// JavaScript code to handle beforeinstallprompt event
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the default browser prompt
  event.preventDefault();

  // Store the event for later use
  deferredPrompt = event;

  // Display your custom installation prompt
  // You can show a button or a banner here
  showInstallPrompt();
});

function showInstallPrompt() {
  // Show your custom installation prompt
  // For example, display a button or banner
  const installButton = document.getElementById("install-button");
  installButton.style.display = "block";

  // Add an event listener to the install button
  installButton.addEventListener("click", () => {
    // Show the browser's installation prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the installation prompt");
      } else {
        console.log("User dismissed the installation prompt");
      }
      // Reset the deferredPrompt variable
      deferredPrompt = null;
    });
  });
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(function (registration) {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch(function (error) {
        console.error("Service Worker registration failed:", error);
      });
  });
}

Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    console.log("Notification permission granted.");
  } else {
    console.log("Notification permission denied.");
  }
});
