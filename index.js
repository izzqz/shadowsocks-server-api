/* TODO:
[ ] shadowsocks-api.add.server
[ ] shadowsocks-api.add.port
---
[ ] shadowsocks-api.remove.server
[ ] shadowsocks-api.remove.port
[ ] shadowsocks-api.get.ping
[ ] shadowsocks-api.get.allPorts
*/

function SsApi() {
  this.getPing = require('./lib/getPing.js')
}

module.exports = SsApi
