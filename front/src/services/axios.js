import axios from 'axios';

const url = "http://localhost:8000/api/";

export async function insertContact({ data }) {
    await axios({
        method: 'POST',
        url: url + 'clients',
        data: data
    })
        .then(function (response) {
            return response.data
        })
        .catch(function (error){
            alert(error);
        })
}

export async function insertSimulation({ data }) {
    await axios({
        method: 'POST',
        url: url + 'simulations',
        data: data
    })
        .then(function (response) {
            return response.data
        })
}

export async function getGeoInfo(setCity, latitude, longitude) {
    await axios({
        method: 'GET',
        url: 'http://nominatim.openstreetmap.org/reverse?format=json&lat=' + latitude + '&lon=' + longitude + '&zoom=18&addressdetails=1'
    })
        .then((response) => {
            setCity(response.data.address.city);
        })
};


export async function checkEmail(setCheck) {
    await axios({
        method: 'GET',
        url: url + 'clients',
    })
        .then((response) => {
            setCheck(response.data["hydra:member"])
        })
        .catch((error) => {
            alert(error);
        })
}