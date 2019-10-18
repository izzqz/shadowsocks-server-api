'use strict'

function SsApi() {
  this.login = require('./lib/login.js')
  this.getPing = require('./lib/getPing.js')
  this.addPort = require('./lib/addPort.js')
  this.deletePort = require('./lib/deletePort.js')
}

module.exports = SsApi
