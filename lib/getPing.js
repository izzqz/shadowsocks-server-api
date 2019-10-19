'use strict'
const request = require('request')

function getPing(server, callback) {
  if (!server.host || !server.token) {
    throw new Error('The getPing function does not have the host or token')
  }

  request({
    method: 'GET',
    url: `https://${server.host}:${server.port}/ping`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${server.token}`
    },
    rejectUnauthorized: false,
    requestCert: true,
    agent: false,
  }, (error, response, body) => {
    callback(error, response, body)
  })
}

module.exports = getPing
