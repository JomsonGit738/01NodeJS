//hai;no
// console.log('Hello world');
const { log } = require('console')
const http = require('http')
const { v4: uuidv4 } = require('uuid')

log(uuidv4())

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end('Hello world')
})

const port = 4000

server.listen(port, () => {
    console.log('server is listening')
})

//npm init