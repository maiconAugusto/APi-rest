const express = require('express')
const app = express()
const port = 8000
const mongoose = require('./config/database')
const router = require('./router')
const cors = require('cors')
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(cors())

app.use((req, res, next)=>{
    req.io = io
    return next()
})

app.use(express.json({limit: '80mb'}))
app.use(express.urlencoded({extended: false, limit: '80mb'}))
app.use(router)

server.listen(port,()=>{
    console.log(`server runing in port: ${port}`)
})