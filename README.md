# shadowsocks-server-api
Node.js library to communicate with the [shadowsocks-restful-api](https://github.com/shadowsocks/shadowsocks-restful-api)

## Installation
```shell
npm i shadowsocks-server-api
```

## Usage
To start a new instance:
```js
const SsApi = require('shadowsocks-server-api')

const ssApi = new SsApi()

let server = {
  host: 'Your server host',
  port: 4001, //Port of shadowsocks-restful-api
  token: '',
  password: 'pleaseChangeThisPassword'
}
```
<!--
### Running the integration tests
Edit
```js
{
  host: 'localhost',
  port: 4001,
  token: '',
  password: 'pleaseChangeThisPassword'
}
```
```shell
npm test
```
-->
### Login
###### ssApi.login()
```js
ssApi.login(server, (error, response, token) => {
    // Returns response Object and an error if it contains one
    console.log(token) //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzE0NzIx...
  }
})
```

### Ping
###### ssApi.getPing()
```js
ssApi.getPing(server, (error, response, body) => {
    // Returns response Object and an error if it contains one
    console.log(body) // {"pong":"pong"}
  }
})
```

### Add port
###### ssApi.addPort()
```js
let portConfig = { // Config for shadowsocks port
  port: 'port_number',
  password: 'port_password',
  method: 'encryption_method'
}

ssApi.addPort(server, portConfig, (error, response, body) => {
    // Returns response Object and an error if it contains one
    console.log(response.statusCode) // 201 Created
  }
})
```

### Get all ports
###### ssApi.getPorts()
```js
ssApi.getPorts(server, (error, response, body) => {
    // Returns response Object and an error if it contains one
    console.log(body) // [{"port":port_number, "password":"port_password","method":"encryption_method"}, ... ]
  }
})
```

### Delete a port
###### ssApi.deletePort()
```js
let port_to_delete = 4242

ssApi.deletePort(server, port_to_delete, (error, response, body) => {
    // Returns response Object and an error if it contains one
    console.log(response.statusCode) // 204 No Content
  }
})
```

### Get traffic for all ports
###### ssApi.getTrafic()
```js
ssApi.getTrafic(server, (error, response, body) => {
    // Returns response Object and an error if it contains one
    console.log(body) // [{"port":port_number, "traffic": traffic_usage}, ... ]
  }
})
```
