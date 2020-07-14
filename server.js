if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

const mainRoutes = require('./routes/pages/main/mainPages')
const albumRoutes = require('./routes/pages/albums/albumPages')
const productRoutes = require('./routes/pages/product/productPages')

const log = console.log

const PORT = process.env.PORT || 3002

app.use(express.static(path.join(__dirname)))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', mainRoutes)
app.use('/albums', albumRoutes)
app.use('/product', productRoutes)

app.listen(PORT, log('Server is up on port', PORT))
