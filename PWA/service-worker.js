// Service Worker - service-worker.js
// Offline Functionality:
const CACHE_NAME = "basic-pwa-cache-v1";
const urlsToCache = ["/", "/index.html", "/styles.css", "/icon.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// Background Sync:
// Service Worker - service-worker.js

self.addEventListener("sync", (event) => {
  if (event.tag === "syncData") {
    event.waitUntil(syncData());
  }
});

function syncData() {
  // Implement your background sync logic here
  console.log("Background sync is triggered.");
}

// Push Notifications:

// Service Worker - service-worker.js

self.addEventListener("push", (event) => {
  const options = {
    body: "This is a push notification.",
    icon: "icon.png",
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "2",
    },
  };

  event.waitUntil(
    self.registration.showNotification("Push Notification", options)
  );
});
