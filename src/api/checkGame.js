const http = require('./libs/http')

export async function checkGame(game) {
  let data = await http.getRequest('/api/room/' + game);

  console.log(data);
}