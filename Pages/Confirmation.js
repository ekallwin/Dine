function displayDateTime() {
    const now = new Date();

    now.setMinutes(now.getMinutes() + 48);

    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
    };
    const formattedDateTime = now.toLocaleString(undefined, options);

    document.getElementById('datetime').textContent = formattedDateTime;
  }

  displayDateTime();

  setInterval(displayDateTime, 1000);



  function generateRandomNumber() {
    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000); 
    const prefixedNumber = `OD-${randomNumber}`; 
    document.getElementById('randomNumber').textContent = prefixedNumber; 
  }

  generateRandomNumber();


  if (performance.navigation.type === 1) { 
    window.location.href = "../home/home.html";
  }