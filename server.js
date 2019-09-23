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
app.get('/', home);
app.get('/skyscraper', fetchSample);
app.get('/retail-spa', fetchRetail);
app.get('/retail-spa-r', fetchRetailSpa);
app.get('/product', fetchSpeaker);
app.get('/product-s', fetchSneaker);
app.get('/development', fetchDevelopment);

// app.get('/social', social);
// app.get('/samples', samples);
// app.get('/dev', construction);
// app.get('/credit', credit);


// Rendering Functions
function home(req, res) {
 res.render('../views/index.ejs')
}

function fetchDevelopment(req, res){
  res.render('../views/content-ul.ejs')
}

function fetchSample(req, res){
  res.render('../views/image-background-layout.ejs')
}
function fetchRetail(req, res){
  res.render('../views/responsive-card-layout.ejs')
}
function fetchRetailSpa(req, res){
  res.render('../views/responsive-card-layout-alt.ejs')
}

function fetchSpeaker(req, res){
  res.render('../views/column-grid-layout.ejs')
}

function fetchSneaker(req, res){
  res.render('../views/column-grid-layout-alt.ejs')
};



// Read & Save Functions

app.listen(PORT, () => console.log(`listening on port ${3000}`))

// Error handling
function handleError (res) {
  res.status(404).send('Resource Unavailable!')
}

