// === Notifications Array ===
const notifications = [
    ""
];

// Badge on home page
const badge = document.getElementById('notifBadge');

// Notification list in notification.html
const notificationList = document.getElementById('notificationList');

// === Render Notifications ===
function renderNotifications() {
    if (!notificationList) return; // Home page te skip
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

// === Initial Render ===
renderNotifications();
updateBadge();

notifications.push("Join Here: TG:- AniReal - Anime Zone");
renderNotifications();
updateBadge();
// === Example: add notification dynamically ===
// notifications.push("New episode of Demon Slayer released!");
// renderNotifications();
// updateBadge();
// Example: remove first notification
notifications.splice(0, 1);
renderNotifications();
updateBadge();
