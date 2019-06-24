'use strict'
// define console logs

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
app.get('/', home)
app.get('/portfolio', portfolio)


// Rendering Functions
function home(req, res) {
 res.render('../views/index.ejs')
}
function portfolio(req, res){
  res.render('../views/index.ejs')
}

// Read & Save Functions

app.listen(PORT, () => console.log(`listening on port ${3000}`))

// Error handling
function handleError (res) {
  res.status(404).send('Resource Unavailable!')
}

