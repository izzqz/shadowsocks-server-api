function SsApi() {
  this.getPing = require('./lib/getPing.js')
  this.login = require('./lib/login.js')
}

module.exports = SsApi
