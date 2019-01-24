'use strict'
// import dependencies
require('dotenv').config()
const express = require('express')

// app 
const app = express() 

// PORT
const PORT = process.env.PORT || 3000

app.use(express.static('./public'))

app.get('/main', (req, res) => {
  res.send('hello')
})

app.listen(PORT, () => console.log(`listening on port ${3000}`))

