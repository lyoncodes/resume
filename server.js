'use strict'
// define console logs
const success = "This seems to be working"
console.log(success)

// import dependencies
require('dotenv').config()
const express = require('express')
const pg = require('pg')

// app 
const app = express() 

// PORT
const PORT = process.env.PORT || 3000
app.use(express.static('./public'))

// Database Setup
const client = new pg.Client(process.env.DATABASE_URL)
client.connect()
client.on('error', err => console.error(err))

// Set the view engine
app.set('view engine', 'ejs')

// Routes
app.get('/home', home)
app.post('/resume', resume)
app.post('/CVV', cvv)
app.post('/nba', nba)
app.post('/save', readForm)

// Rendering Functions
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

// Read & Save Functions
function onFormSubmit () {
  var formData = readForm()
  insertNewGuest(formData)
}

function readForm() {
  console.log('evoked')
  var formData = {}
  formData["firstName"] = document.getElementsByName("firstName").value
  formData["email"] = document.getElementsByName("email").value
  formData["moveIn"] = document.getElementsByName("moveIn").value
  formData["floorPlan"] = document.getElementsByName("floorPlan").value
  return formData
}

// Object Constructor
function insertNewGuest (data) {
  var table = document.getElementById("guestList").getElementsByTagName('tbody')[0]
  var newRow = table.insertRow(table.length)
  cell1 = newRow.insertCell(0)
  cell1.innerHTML = data.firstName
  cell2 = newRow.insertCell(1)
  cell2.innerHTML = data.email
  cell3 = newRow.insertCell(2)
  cell3.innerHTML = data.moveIn
  cell4 = newRow.insertCell(3)
  cell4.innerHTML = data.floorPlan

}
app.listen(PORT, () => console.log(`listening on port ${3000}`))

// Error handling
function handleError (res) {
  res.status(404).send('Resource Unavailable!')
}