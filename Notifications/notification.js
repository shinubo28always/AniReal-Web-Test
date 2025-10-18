// === Notifications Array (Je text add korbe, sheta show hobe) ===
const notifications = [
    "Pta nii kon bahenchod ka najar lag gye🤬"
];

// Home page badge
const badge = document.getElementById('notifBadge');

// Notification list in notification.html
const notificationList = document.getElementById('notificationList');

// === Render Notifications ===
function renderNotifications() {
    // Home page badge
    if(badge){
        if(notifications.length === 0){
            badge.style.display = 'none';
        } else {
            badge.style.display = 'inline-block';
            badge.textContent = notifications.length;
        }
    }

    // Notification page
    if(notificationList){
        notificationList.innerHTML = '';
        notifications.forEach(msg => {
            const div = document.createElement('div');
            div.className = 'notification-card';
            div.textContent = msg;
            notificationList.appendChild(div);
        });
    }
}

// === Initial Render ===
renderNotifications();
