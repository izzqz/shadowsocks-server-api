const request = require('request')

function getPing(server, callback) {
  if (!server.host || !server.token) {
    throw new Error('The getPing function does not have the host or token')
  }

  request({
    method: 'GET',
    url: `https://${server.host}/ping`,
    headers: {
      Authorization: `Bearer ${server.token}`
    },
    rejectUnauthorized: false,
    requestCert: true,
    agent: false,
  }, (error, res, body) => {
    if (error) {
      throw new Error(error)
    } else {
      callback(body)
    }
  })
}

module.exports = getPing
