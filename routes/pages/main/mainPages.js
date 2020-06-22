const express = require('express')
const mainRoutes = new express.Router()
const path = require('path')

mainRoutes.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../index.html'))
})

mainRoutes.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../projects.html'))
})

mainRoutes.get('/showcase', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../showcase.html'))
})

mainRoutes.get('/store', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../store.html'))
})

mainRoutes.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../about.html'))
})

mainRoutes.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../contact.html'))
})

mainRoutes.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../cart.html'))
})

module.exports = mainRoutes
