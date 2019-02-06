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
app.post('/search', search)

function home(req, res) {
 res.render('index')
}

function search(req, res) {
 res.render('resume')
}
app.listen(PORT, () => console.log(`listening on port ${3000}`))

