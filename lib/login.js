'use strict'
const request = require('request')

function login(server, callback) {
  if (!server.host || !server.password) {
    throw new Error('The login function does not have the host or password')
  }

  request({
    method: 'POST',
    url: `https://${server.host}:${server.port}/login`,
    headers: {
      'Content-Type': 'application/json',
    },
    body: `{"password": "${server.password}"}`,
    rejectUnauthorized: false,
    requestCert: true,
    agent: false,
  }, (error, response, body) => {
    if (error) {
      throw new Error(error)
    } else {
      callback(error, response, JSON.parse(body).token)
    }
  })
}

module.exports = login
