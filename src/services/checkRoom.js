/* eslint-disable default-case */
const http = require('./libs/http')

export async function checkRoom(game) {
  let data = await http.getRequest('/api/room/' + game);
  
  return data.success === false ? data.error : true;
}