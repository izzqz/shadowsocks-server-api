'use strict'
const request = require('request')

function getPorts(server, callback) {
  if (!server.host || !server.token) {
    throw new Error('The getPorts() function does not have the host or token')
  }

  request({
    method: 'GET',
    url: `https://${server.host}/all`,
    headers: {
      Authorization: `Bearer ${server.token}`
    },
    rejectUnauthorized: false,
    requestCert: true,
    agent: false,
  }, (error, response, body) => {
    callback(error, response, body)
  })
}

module.exports = getPorts
