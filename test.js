'use strict'
const SsApi = require('./index.js')
const ssApi = new SsApi()

let server = {
  host: 'localhost',
  port: '4001',
  token: 'your_authentication_token',
  password: 'pleaseChangeThisPassword'
}

let portConfig = {
  port: "12005",
  password: "1",
  method: "chacha20"
}

ssApi.login(server, (error, response, token) => {
  console.log('login function...')
  console.log('status code: ' + response.statusCode)
  if (error) {
    throw new Error(error)
  } else {
    console.log('token: ' + token + '\n\n')
  }
})

ssApi.getPing(server, (error, response, body) => {
  console.log('getPing function...')
  console.log('status code: ' + response.statusCode)
  if (error) {
    throw new Error(error)
  } else {
    console.log('get ping: ' + body + '\n\n')
  }
})

ssApi.addPort(server, portConfig, (error, response) => {
  console.log('addPort function...')
  console.log('status code: ' + response.statusCode)
  if (error) {
    throw new Error(error)
  } else {
    console.log('\n\n')
  }
})

ssApi.getPorts(server, (error, response, body) => {
  console.log('getPorts function...')
  console.log('status code: ' + response.statusCode)
  if (error) {
    throw new Error(error)
  } else {
    console.log(body + '\n\n')
  }
})

ssApi.getTrafic(server, (error, response, body) => {
  console.log('getTrafic function...')
  console.log('status code: ' + response.statusCode)
  if (error) {
    throw new Error(error)
  } else {
    console.log(body + '\n\n')
  }
})

ssApi.deletePort(server, portConfig.port, (error, response) => {
  console.log('deletePort function...')
  console.log('status code: ' + response.statusCode)
  if (error) {
    throw new Error(error)
  } else {
    console.log('\n\n')
  }
})
