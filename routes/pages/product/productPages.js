const express = require('express')
const productRoutes = new express.Router()
const path = require('path')

productRoutes.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../index.html'))
})

module.exports = productRoutes
