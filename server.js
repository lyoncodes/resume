'use strict'
// import dependencies
require('dotenv').config()
const express = require('express')


// app 
const app = express() 

// PORT
const PORT = process.env.PORT || 3000

app.use(express.static('./public'))
// Set the view engine
app.set('view engine', 'ejs')

app.get('/home', home)
app.post('/resume', resume)
app.post('/CVV', cvv)
app.post('/nba', nba)

function home(req, res) {
 res.render('index')
}
function resume(req, res) {
 res.render('resume')
}
function cvv(req, res) {
 res.render('CVV')
}
function nba(req, res) {
 res.render('nba')
}
app.listen(PORT, () => console.log(`listening on port ${3000}`))

// Error handling
function handleError (res) {
  res.status(404).send('Resource Unavailable!')
}