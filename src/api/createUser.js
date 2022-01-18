const http = require('./libs/http')

export async function createUser({email, password, role}) {

    if (email.trim() == '' || password.trim() == '') return 'Debes escribir el email y la contraseña.'

    const data = JSON.stringify({ email: email, password: password, role: role })

    const res = await http.postRequest('/api/account/register', data);º 

    if (res.success === false) {
        if (res.error == 'internal_error') return 'Error interno.';
        if (res.error == 'email_unavailable') return 'Email ya registrado.';
        if (res.error.email == 'email_regex_not_match') return 'El email no es válido.';
        if (res.error.role == 'role_type_not_match') return 'El rol no es válido.'
        switch (res.error.password) {
            case 'password_length_not_match':
                return 'La contraseña no puede contener espacios.'
            case 'password_must_longest':
                return 'La contraseña debe contener mínimo 8 carácteres.'
            case 'password_regex_not_match':
                return 'La contraseña debe contener 1 mayúscula, 1 minúscula, 1 número y 1 carácter especial.'
        }
      }
      return true;
}