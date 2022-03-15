/* eslint-disable default-case */
const http = require('../libs/http')

export async function loginUser({email, password}) {
    
    if (email.trim() === '' || password.trim() === '') return 'Debes escribir el email y la contraseña.';

    const data = JSON.stringify({ email: email, password: password })

    const res = await http.postRequest('/api/account/login', data);

    if (res.success === false) {
        if (res.error === 'internal_error') return 'Error interno.';
        return 'Email y/o contraseña incorrectos.'
    }
    return res;

}