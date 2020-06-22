const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

const mainRoutes = require('./routes/pages/main/mainPages')
const albumRoutes = require('./routes/pages/albums/albumPages')

const log = console.log

const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname)))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', mainRoutes)
app.use('/albums', albumRoutes)

app.listen(PORT, log('Server is up on port', PORT))
