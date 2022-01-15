const http = require('./libs/http')

export async function createUser({email, username, password, role}) {

    const data = JSON.stringify({ email: email, username: username, password: password, role: role })

    const res = await http.postRequest('/api/account/register', data);
    
    console.log(res);

    if (res.success === false) {
        if (res.error == 'internal_error') return 'Error interno.';
        if (res.error == 'email_or_username_unavailable') return 'Usuario o email ya registrados.';
        if (res.error.email == 'email_regex_not_match') return 'El email no es válido.';
        if (res.error.role == 'role_type_not_match') return 'El rol no es válido.'
        switch (res.error.user) {
            case 'username_length_not_match':
                return 'El usuario no puede contener espacios.'
            case 'username_must_longest':
                return 'El nombre de usuario debe contener mínimo 4 carácteres.'
            case 'username_regex_not_match':
                return 'El nombre de usuario solo puede contener mayúsculas, minúculas, puntos y guiones.'
        }
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