const port = 3003
const bodyParse = require('body-parser')
const express = require('express')
const server = express()

server.unsubscribe(bodyParse.urlencoded({ extended: true }))

server.listen(port, function(){
    console.log(`BACKEND IS RUNNING ON PORT ${port}.`)
})