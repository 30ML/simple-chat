const io = require('socket.io')
const http = require('http')

const users = {}
const rooms = {}

const server = http.createServer(() => {})

io(server.listen(80))