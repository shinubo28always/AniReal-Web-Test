// === Notifications Array ===
// Add your notifications here
let notifications = [
    "Join Here: TG:- AniReal - Anime Zone",
    "New episode of Demon Slayer released!"
];

// Badge on home page
const badge = document.getElementById('notifBadge');

// Notification list in notification.html
const notificationList = document.getElementById('notificationList');

// === Render Notifications ===
function renderNotifications() {
    if (!notificationList) return; // Skip if on home page
    notificationList.innerHTML = '';
    notifications.forEach(msg => {
        const div = document.createElement('div');
        div.className = 'notification-card';
        div.textContent = msg;
        notificationList.appendChild(div);
    });
}

// === Update Badge ===
function updateBadge() {
    if (!badge) return;
    if (notifications.length === 0) {
        badge.style.display = 'none';
    } else {
        badge.style.display = 'inline-block';
        badge.textContent = notifications.length;
    }
}

// === Add Notification ===
function addNotification(msg) {
    notifications.push(msg);
    renderNotifications();
    updateBadge();
}

// === Remove Notification ===
// Remove by index (0 = first notification)
function removeNotification(index) {
    if (index >= 0 && index < notifications.length) {
        notifications.splice(index, 1);
        renderNotifications();
        updateBadge();
    }
}

// === Remove All Notifications ===
function removeAllNotifications() {
    notifications = [];
    renderNotifications();
    updateBadge();
}

// === Initial Render ===
renderNotifications();
updateBadge();

// === Examples ===
// Dynamically add
// addNotification("New episode of Naruto released!");

// Dynamically remove first
// removeNotification(0);

// Remove all
// removeAllNotifications();
