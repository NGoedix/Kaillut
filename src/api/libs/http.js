const https = require('http');

const server = 'http://localhost:3100';

async function getRequest(path_) {
    
    const options = {
        hostname: 'localhost',
        port: 3100,
        path: path_,
        method: 'GET'
    }

    let res = await https.request(options, res => {
        let data = '';
        res.on('data', function (d) {
            data += d;
        });
        res.on('error', function (e) {
            console.error(e);
        });
    })

    return res;
}

function postRequest(path_, data) {
    const options = {
        hostname: 'localhost',
        port: 3100,
        path: path_,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    }
        
    const req = https.request(options, res => {
        var body = '';
        res.on('data', (chunk) => {
            body += chunk;
        });
        res.on('end', () => {
            console.log(body);
        });
    })
      
    req.on('error', error => {
        console.error(error)
    })
      
    req.write(data)
    req.end()
}

module.exports = {
    getRequest,
    postRequest
}