// ====== Central Notification Array ======
let notifications = [
  "Welcome to AniReal!",
  "New Episode Released: One Piece",
  "Don't miss Attack on Titan!"
];

// ====== Update Home Page Badge ======
function updateBadge() {
  const badge = document.getElementById("notifBadge");
  if (!badge) return;
  badge.textContent = notifications.length;
  badge.style.display = notifications.length > 0 ? "inline-block" : "none";
}

// ====== Add New Notification ======
function addNotification(msg) {
  if (!msg || msg.trim() === "") return;
  notifications.push(msg.trim());
  updateBadge();
  renderNotifications();
}

// ====== Delete Notification ======
function deleteNotification(index) {
  notifications.splice(index, 1);
  updateBadge();
  renderNotifications();
}

// ====== Render Notifications on Management Page ======
function renderNotifications() {
  const listContainer = document.getElementById("notifList");
  if (!listContainer) return;
  listContainer.innerHTML = "";

  if (notifications.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.textContent = "No notifications available!";
    emptyMsg.style.textAlign = "center";
    emptyMsg.style.color = "gray";
    listContainer.appendChild(emptyMsg);
    return;
  }

  notifications.forEach((msg, i) => {
    const card = document.createElement("div");
    card.className = "notif-card";
    card.innerHTML = `
      <span>${msg}</span>
      <button class="deleteBtn" onclick="deleteNotification(${i})">Delete</button>
    `;
    listContainer.appendChild(card);
  });
}

// ====== Initialize Badge ======
document.addEventListener("DOMContentLoaded", () => {
  updateBadge();
});
