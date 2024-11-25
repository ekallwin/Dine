async function fetchLocation() {
    const pincode = document.getElementById('pincode').value;
    const stateInput = document.getElementById('state');
    const districtInput = document.getElementById('district');
    const areaInput = document.getElementById('area');

    if (!pincode) {
      alert('Please enter a PIN code!');
      return;
    }

    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const data = await response.json();

      if (data[0].Status === 'Success') {
        const { PostOffice } = data[0];
        const { State, District, Name } = PostOffice[0];

        stateInput.value = State;
        districtInput.value = District;
        areaInput.value = Name;
      } else {
        alert('Invalid PIN Code!');
        stateInput.value = '';
        districtInput.value = '';
        areaInput.value = '';
      }
    } catch (error) {
      alert('Error fetching location data.');
      console.error(error);
    }
  }
