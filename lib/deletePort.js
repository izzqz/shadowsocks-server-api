'use strict'
const request = require('request')

function deletePort(server, port_to_delete, callback) {
  if (!server.host || !server.token || server.port_to_delete) {
    throw new Error('The deletePort() function does not have the host, token or port to delete')
  }

  request({
    method: 'DELETE',
    url: `https://${server.host}?port=${port_to_delete}`,
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

module.exports = deletePort
