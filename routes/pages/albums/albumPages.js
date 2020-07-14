const express = require('express')
const albumRoutes = new express.Router()
const path = require('path')

albumRoutes.get('/jala-brat-raf-camora', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../albums/1-jala-raf/index.html'))
})

albumRoutes.get('/bjelasnica-mega-koncert', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../albums/2-bjelasnica/index.html'))
})

albumRoutes.get('/bosnian-kingdom', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../../albums/3-bosnian-kingdom/index.html')
  )
})

albumRoutes.get('/parallax-club', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../albums/4-parallax/index.html'))
})

albumRoutes.get('/ilma-photoshoot', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../../albums/5-ilma-photoshoot/index.html')
  )
})

albumRoutes.get('/prom-photoshoot', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../../albums/6-prom-photoshoot/index.html')
  )
})

module.exports = albumRoutes
