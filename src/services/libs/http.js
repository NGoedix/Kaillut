const axios = require('axios');

let server = 'http://kaillut.herokuapp.com';

function getRequest(endpoint, authorization) {
    let headers = { 'Content-type': 'application/json'};
    
    if (authorization) 
        headers = { 'Content-type': 'application/json', 'Authorization': `Bearer ${window.localStorage.getItem('user_token')}`};

    return axios({
        method: 'get',
        url: server + endpoint,
        responseType: 'json',
        headers: headers
    }).then(response => response.data).catch((err) => err);
}

function postRequest(endpoint, data, authorization) {
    let headers = { 'Content-type': 'application/json'};
    
    if (authorization) 
        headers = { 'Content-type': 'application/json', 'Authorization': `Bearer ${window.localStorage.getItem('user_token')}`};

    return axios({
        method: 'post',
        url: server + endpoint,
        responseType: 'json',
        headers: headers,
        data: data
    }).then(response => response.data).catch((err) => err.response.data);
}

export {
    getRequest,
    postRequest
}