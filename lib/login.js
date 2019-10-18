const request = require('request')

function login(server, callback) {
  if (!server.host || !server.password) {
    throw new Error('The login function does not have the host or password')
  }

  request({
    method: 'POST',
    url: `https://${server.host}/login`,
    headers: {
      'Content-Type': 'application/json',
    },
    body: `{"password": "${server.password}"}`,
    rejectUnauthorized: false,
    requestCert: true,
    agent: false,
  }, (error, res, body) => {
    if (error) {
      throw new Error(error)
    } else {
      callback(JSON.parse(body).token)
    }
  })
}

module.exports = login
