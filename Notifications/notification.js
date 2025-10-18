// === Notification Data ===
// Initially empty
let notifications = [];

// Badge on home page
const badge = document.getElementById('notifBadge');

// Notification list in notification.html
const notificationList = document.getElementById('notificationList');

// Admin flag (true means delete button visible)
const isAdmin = true; // Change false for normal users

// === Add Notification Function ===
function addNotification(message) {
    const id = Date.now();
    const notif = { id, message };
    notifications.push(notif);
    renderNotifications();
    updateBadge();
}

// === Delete Notification Function (Admin Only) ===
function deleteNotification(id) {
    notifications = notifications.filter(n => n.id !== id);
    renderNotifications();
    updateBadge();
}

// === Render Notifications ===
function renderNotifications() {
    if (!notificationList) return; // in home page, skip
    notificationList.innerHTML = '';
    notifications.forEach(n => {
        const div = document.createElement('div');
        div.className = 'notification-card';
        div.textContent = n.message;

        // Admin delete button
        if (isAdmin) {
            const btn = document.createElement('button');
            btn.className = 'delete-btn';
            btn.textContent = 'Delete';
            btn.style.display = 'block';
            btn.onclick = () => deleteNotification(n.id);
            div.appendChild(btn);
        }

        notificationList.appendChild(div);
    });
}

// === Update Badge on Home Page ===
function updateBadge() {
    if (!badge) return;
    if (notifications.length === 0) {
        badge.style.display = 'none';
    } else {
        badge.style.display = 'inline-block';
        badge.textContent = notifications.length;
    }
}

// === Example Notifications ===
// Add one notice automatically
addNotification('🎉 One Piece Episode 105 is now live!');
// Call these whenever you want to add a notification
// addNotification('New episode of Naruto released!');
// addNotification('Server maintenance at 10 PM');
// Initial render
renderNotifications();
updateBadge();
