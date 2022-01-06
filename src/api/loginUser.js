const config = require('../config.json')

const server = 'http://' + config.apiServer + ":" + config.apiPort;

export async function createUser() {
    
    const options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ email: 'tetete', username: 'testusername', password: 'testpassword', role: 'teacher'})
    };
    
    const res = await fetch(server + '/api/account/login', options);
    const data = await res.json();
}