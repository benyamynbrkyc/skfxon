const express = require('express')
const mainRoutes = new express.Router()
const path = require('path')
const nodemailer = require('nodemailer')
const sendMail = require('../../../mail')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'stapicip@gmail.com',
    pass: 'pardonstapici123'
  }
})

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

mainRoutes.post('/email', (req, res) => {
  const { subject, email, text } = req.body
  console.log('server received the data', req.body)

  sendMail(email, subject, text, (err, data) => {
    if (err) res.json({ message: 'Internal Error', err })
    else res.json({ message: 'Email sent!', data })
  })
})

module.exports = mainRoutes
