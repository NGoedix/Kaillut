const http = require('./libs/http')

export async function checkRoom(game) {
  let data = await http.getRequest('/api/room/' + game);

  if (data.success === false) {
    switch (data.error) {
      case 'internal_error':
        return 'Error interno.'
      case 'game_unavailable':
        return 'La sala no existe.'
    }
  }
  return true;
}