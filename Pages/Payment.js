document.getElementById('paymentForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Check if any radio button is selected
    const paymentMethods = document.getElementsByName('paymentMethod');
    let isSelected = false;

    for (let i = 0; i < paymentMethods.length; i++) {
        if (paymentMethods[i].checked) {
            isSelected = true;
            break;
        }
    }

    // Show error message if no payment method is selected
    const errorDiv = document.getElementById('error');
    if (!isSelected) {
        errorDiv.style.display = 'block'; // Show the error message
    } else {
        errorDiv.style.display = 'none'; // Hide the error message
        // Here you can proceed with form submission
        window.location.href = "Confirmation.html"; // Placeholder for successful submission
    }
});



let currentIndex = 0;
    const images = document.querySelectorAll('#slider img');
    const totalImages = images.length;

    function showNextImage() {
        images[currentIndex].classList.remove('active'); // Hide current image
        currentIndex = (currentIndex + 1) % totalImages; // Move to the next image
        images[currentIndex].classList.add('active'); // Show the next image
    }

    setInterval(showNextImage, 3000);