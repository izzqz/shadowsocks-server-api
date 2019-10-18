// const request = require('request')
//
// const options = {
//   method: 'GET',
//   url: 'https://198.13.32.73:4001/ping',
//   headers: {
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzEzODcyNjQsImV4cCI6MTU3MTQ3MzY2NH0.3DSpBSMKj8El7VOThoTtsNncZNafTXotSaqnHkoa_5w'
//   },
//   rejectUnauthorized: false,
//   requestCert: true,
//   agent: false,
// }

const SsApi = require('./index.js')
ssApi = new SsApi()

let server = {
  name: 'jP1',
  domain: 'jp1.yolk.network',
  host: '198.13.32.73:4001',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzEzODcyNjQsImV4cCI6MTU3MTQ3MzY2NH0.3DSpBSMKj8El7VOThoTtsNncZNafTXotSaqnHkoa_5w',
  password: '12345'
}

ssApi.getPing(server, body => {
  console.log(body)
})
