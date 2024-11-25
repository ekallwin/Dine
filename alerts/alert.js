
function trash_click() {
  const alertContent = document.querySelector('.alert_content');
  if (alertContent) {       
    document.getElementById('overlay').style.display = 'block';
  }
}

function confirmAction(userConfirmed) {
  const alertContent = document.querySelector('.alert_content');
  if (userConfirmed && alertContent) {
      alertContent.remove(); 

      if (!document.querySelector('.alert_content')) {
          document.getElementById('emptyMessage').style.display = 'block';
      }
  }
  document.getElementById('overlay').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
  const alertContent = document.querySelector('.alert_content');
  const emptyMessage = document.getElementById('emptyMessage');
  if (alertContent.hidden) {
      emptyMessage.style.display = 'block';
  } else {
      emptyMessage.style.display = 'none';
  }
});




function checkNotifications() {
  const container = document.getElementById("notificationsContainer");
  const emptyMessage = document.getElementById("emptyMessage");
  
  const hasNotifications = [...container.children].some(
      (child) => child.id !== "emptyMessage" && child.style.display !== "none"
  );

  if (hasNotifications) {
      emptyMessage.style.display = "none";
  } else {
      emptyMessage.style.display = "block";
  }
}
window.onload = checkNotifications;