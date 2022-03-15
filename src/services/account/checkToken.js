/* eslint-disable default-case */
const http = require('../libs/http')

export async function checkToken({token}) {
    const res = await http.postRequest('/api/account/checkToken', JSON.stringify({ token: token }));

    return res.success;
}