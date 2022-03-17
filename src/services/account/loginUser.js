/* eslint-disable default-case */
const http = require('../libs/http')

export async function loginUser(email, password) {
    
    if (email.trim() === '' || password.trim() === '') return 'Debes escribir el email y la contraseña.';

    const body = JSON.stringify({ email: email, password: password })

    const res = await http.postRequest('/api/account/login', body);

    return res.success ? res : res.error;
}