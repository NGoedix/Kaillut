const http = require('./libs/http')

export async function createUser({email, username, password, role}) {
    
    const options = {
        headers: { 'Content-type': 'application/json' }
    };

    const data = JSON.stringify({ email: email, username: username, password: password, role: role })

    const res = await http.postRequest('/api/account/register', data);
    
    if (res.success === false) {
        switch (res.error) {
            case 'internal_error':
                return 'Error interno.'
            case 'role_type_not_match':
                return 'Rol no válido.'
            case 'username_unavailable':
                return 'Nombre de usuario no disponible.'
            case 'password_length_not_match':
                return 'La contraseña no puede contener espacios.'
            case 'password_must_longest':
                return 'La contraseña debe contener mínimo 8 carácteres.'
            case 'password_regex_not_match':
                return 'La contraseña debe contener 1 mayúscula, 1 minúscula, 1 número y 1 carácter especial.'
            case 'username_length_not_match':
                return 'El usuario no puede contener espacios.'
            case 'username_must_longest':
                return 'El nombre de usuario debe contener mínimo 4 carácteres.'
            case 'username_regex_not_match':
                return 'El nombre de usuario solo puede contener mayúsculas, minúculas, puntos y guiones.'
            case 'email_regex_not_match':
                return 'El email no es válido.'
            case 'email_unavailable':
                return 'El email ya está registrado.'
        }
      }
      return true;

}