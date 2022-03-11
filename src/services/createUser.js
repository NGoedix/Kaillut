/* eslint-disable default-case */
const http = require('./libs/http')

export async function createUser({email, password, role}) {

    if (email.trim() === '' || password.trim() === '') return 'Debes escribir el email y la contraseña.';

    const res = await http.postRequest('/api/account/register', JSON.stringify({ email: email, password: password, role: role }));

    if (res.success === false) {
        if (res.error.email !== 'valid') return res.error.email;
        if (res.error.password !== 'valid') return res.error.password;
        if (res.error.role !== 'valid') return res.error.role;
        return res.error;
    }
    return true;
}