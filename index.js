const express = require('express')
const connect = require('./config/db')

const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
const router = require('./routes/userRoutes')
// connect mongodb database
connect()
app.use(bodyParser.json())
app.use('/', router)
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log('Your app is running')
})
