const port = 3003
const allowsCors = require('./cors')
const bodyParse = require('body-parser')
const express = require('express')
const queryParser = require('express-query-int')
const server = express()

server.use(bodyParse.urlencoded({ useNewUrlParse: true }))
server.use(bodyParse.json())
server.use(allowsCors)
server.use(queryParser)

server.listen(port, function(){
    console.log(`BACKEND IS RUNNING ON PORT ${port}.`)
})

module.exports = server