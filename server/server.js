const path = require('path')
const express = require('express')
const server = express()

// const apiRoutes = require('./routes/maps')
const locationsApiRoutes = require('./routes/locations')

server.use(express.static(path.join(__dirname, '..', 'public')))
server.use(express.json())

// server.use('/api/v1/maps', apiRoutes)
server.use('/api/v1/locations', locationsApiRoutes)

module.exports = server