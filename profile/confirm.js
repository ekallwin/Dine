function Logout() {
    const alertContent = document.querySelector('.contents');
    if (alertContent) {       
      document.getElementById('overlay').style.display = 'block';
    }
  }
  
  function confirmAction(userConfirmed) {
    const alertContent = document.querySelector('.contents');
    if (userConfirmed && alertContent) {
        window.location.href="../index.html"; 
    }
    document.getElementById('overlay').style.display = 'none';
  }
  
function CommingSoon() {
  alert(`Comming Soon!`)
}