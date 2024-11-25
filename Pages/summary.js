function redirect() {
    const name = document.title; // Get the name from the <title>
    const amt = document.getElementById('Amt').innerText; // Get the value of Amt
    const url = `Summary.html?title=${encodeURIComponent(name)}&amt=${encodeURIComponent(amt)}`; 
    window.location.href = url; 
}

function redirectToAddress() {
    if (document.getElementById('total-quantity').value == ""){
        alert("Please select the quantity");
    }
    else {
        window.location.href = "Address.html";
    }
}