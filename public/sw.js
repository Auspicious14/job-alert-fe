self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("job-alerts-v1").then((cache) => {
      return cache.addAll([
        "/",
        "/_next/static/css/",
        "/_next/static/chunks/main.js",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("push", (event) => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: "/icons/icon-192x192.png",
  });
});

self.addEventListener("message", (event) => {
  if (event.data === "skipWaiting") {
    self.skipWaiting();
  }
});

const handlePushSubscription = async () => {
  const registration = await self.registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  });
  return registration.toJSON();
};

self.addEventListener("pushsubscriptionchange", () => {
  handlePushSubscription().then((sub) => {
    fetch("/api/push/resubscribe", {
      method: "POST",
      body: JSON.stringify(sub),
    });
  });
});
