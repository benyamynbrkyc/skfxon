const express = require('express')
const albumRoutes = new express.Router()
const path = require('path')

albumRoutes.get('/jala-brat-raf-camora', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../albums/1-jala-raf/index.html'))
})

module.exports = albumRoutes
