const axios = require('axios');

let server = 'http://kaillut.herokuapp.com/';

async function getRequest(endpoint) {
    return axios(server + endpoint).then(response => response.data).catch((err) => err);
}

async function postRequest(endpoint, data) {
    return axios({
        method: 'post',
        url: server + endpoint,
        responseType: 'json',
        headers: { 'Content-type': 'application/json' },
        data: data
    }).then(response => response.data).catch((err) => err);
}

export {
    getRequest,
    postRequest
}