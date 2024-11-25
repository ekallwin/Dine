function login() {
    const phone = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const errorText = document.getElementById('errorText');
    const Errornum = document.getElementById('Error-num');

    errorText.textContent = "";
    Errornum.textContent = "";

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
        Errornum.textContent = "Invalid Phone Number";
        return; 
    }

    if (password !== "12345678") {
        errorText.textContent = "Invalid Password";
        return; 
    }

    window.location.href = "../home/home.html"; 
}

function key_up() {
    const phone = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const errorText = document.getElementById('errorText');
    const Errornum = document.getElementById('Error-num');

    if (phone.length === 10 && /^[6-9]\d{9}$/.test(phone)) {
        Errornum.style.display = "none";
    } else {
        Errornum.style.display = "block";
        Errornum.textContent = "Invalid Phone Number";
    }

   
}

document.getElementById('showPassword').addEventListener('change', function () {
    const passwordInput = document.getElementById('password');
    passwordInput.type = this.checked ? 'text' : 'password';
});


const inputField = document.getElementById('login');

    inputField.addEventListener('input', (event) => {
        // Allow numbers, +, -, (, ), and spaces
        const value = event.target.value;
        event.target.value = value.replace(/[^0-9+\-\(\)\s]/g, '');
    });