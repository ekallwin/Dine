document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('address-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        if (validate()) {
            window.location.href = "Payment.html";
        }
    });
});


function RemoveError() {
    document.querySelectorAll('.Error-text').forEach(function(element) {
        element.style.display = 'none';
    });
}

function RemoveNameError() {
    document.getElementById('Name-error').style.display = 'none';
}
function RemovePhoneError() {
    document.getElementById('Phone-error').style.display = 'none';
}
function RemoveLane1Error() {
    document.getElementById('lane1-error').style.display = 'none';
}
function RemoveLane2Error() {
    document.getElementById('lane2-error').style.display = 'none';
}
function RemovePincodeError(pincode){
        document.getElementById('error-message').style.display = 'none';
        document.getElementById('state-error').style.display = 'none';
        document.getElementById('district-error').style.display = 'none';
        document.getElementById('area-error').style.display = 'none';
}

function RemoveTypeerror(){
    document.getElementById('Address-type-error').style.display = 'none';
}

function validate(event) {
    document.getElementById('Name-error').textContent = '';
    document.getElementById('Phone-error').textContent = '';
    document.getElementById('lane1-error').textContent = '';
    document.getElementById('lane2-error').textContent = '';
    document.getElementById('error-message').textContent = '';
    document.getElementById('state-error').textContent = '';
    document.getElementById('district-error').textContent = '';
    document.getElementById('area-error').textContent = '';
    document.getElementById('Address-type-error').textContent = '';

    let isValid = true; 

    const nameInput = document.getElementById('name-input');
    if (nameInput.value.trim() === '') {
        document.getElementById('Name-error').textContent = 'Please provide necessary details';
        isValid = false;
    }

    const phoneInput = document.getElementById('Phone-number');
    if (phoneInput.value.trim() === '') {
        document.getElementById('Phone-error').textContent = 'Please provide necessary details';
        isValid = false;
    } else if (!phoneInput.checkValidity()) {
        document.getElementById('Phone-error').textContent = 'Please enter a valid phone number';
        isValid = false;
    }

    const lane1Input = document.getElementById('lane1');
    if (lane1Input.value.trim() === '') {
        document.getElementById('lane1-error').textContent = 'Please provide necessary details';
        isValid = false;
    }

    const lane2Input = document.getElementById('lane2');
    if (lane2Input.value.trim() === '') {
        document.getElementById('lane2-error').textContent = 'Please provide necessary details';
        isValid = false;
    }

    const pincodeInput = document.getElementById('pincode');
    if (pincodeInput.value.trim() === '') {
        document.getElementById('error-message').textContent = 'Please provide necessary details';
        isValid = false;
    } else if (!pincodeInput.checkValidity()) {
        document.getElementById('error-message').textContent = 'Please enter a valid PIN code';
        isValid = false;
    }

    const stateInput = document.getElementById('state');
    if (stateInput.value.trim() === '') {
        document.getElementById('state-error').textContent = 'Please provide necessary details';
        isValid = false;
    }

    const districtInput = document.getElementById('district');
    if (districtInput.value.trim() === '') {
        document.getElementById('district-error').textContent = 'Please provide necessary details';
        isValid = false;
    }

    const areaInput = document.getElementById('area');
    if (areaInput.value.trim() === '') {
        document.getElementById('area-error').textContent = 'Please provide necessary details';
        isValid = false;
    }

    const addressTypeInput = document.getElementById('Address-type');
    if (addressTypeInput.value === '') {
        document.getElementById('Address-type-error').textContent = 'Please select an address type';
        isValid = false;
    }

    if (isValid) {
        window.location.href = "Payment.html";
        return false; 
    }

    return false; 
}
