function notificar() {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      new Notification("Oi!", {
        body: "Essa é uma notificação local",
        icon: "icons/icon-192.png"
      });
    }
  });
}