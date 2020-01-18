const axios = require('axios');

// const getApartment1 = (handleSuccess) => {
//     axios.get("http://localhost:8000/apartments")
//     .then(result => handleSuccess(result.data))
// }

const getApartmentByID = (handleSuccess, apartmentId) => {
    axios.get(`http://localhost:8000/apartments/${apartmentId}`)
    .then(success => {
        handleSuccess(success.data[0])
    }).catch(error => console.log(error))
} 




// fake data for future test - to active remove '1' from name
    const getApartment = (handleSuccess) => {
        fetch("https://storage.googleapis.com/realtour/apartments-rt.json", {
                method: 'GET',
            }
        ).then(response => response.json()
        ).then(success => handleSuccess(success)
        ).catch(error => console.log(error))
    };

export {getApartmentByID, getApartment};

