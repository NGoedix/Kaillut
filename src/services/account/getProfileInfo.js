const http = require('../libs/http')

export async function getProfileInfo() {
  return await http.getRequest('/api/account/getProfileInfo', true);
}