'use strict'
const request = require('request')

function addPort(server, portConfig, callback) {
  if (!server.host || !server.token) {
    throw new Error('The login function does not have the host or token')
  }

  request({
    method: 'POST',
    url: `https://${server.host}:${server.port}/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${server.token}`
    },
    body: JSON.stringify(portConfig),
    rejectUnauthorized: false,
    requestCert: true,
    agent: false,
  }, (error, response, body) => {
    callback(error, response, body)
  })
}

module.exports = addPort
