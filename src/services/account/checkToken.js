/* eslint-disable default-case */
const http = require('../libs/http')

export async function checkToken(token) {    
    return await http.postRequest('/api/account/checkToken', JSON.stringify({ token: token }));
}