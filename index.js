const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const connect = require('./config/db')
const router = require('./routes/userRoutes')
const profileRoutes = require('./routes/profileRoutes')
const postRoutes = require('./routes/postRoutes')
require('dotenv').config()
const app = express()
// connect mongodb database
connect()
app.use(bodyParser.json())
app.use('/', router)
app.use('/', postRoutes)

app.use('/', profileRoutes)
const PORT = process.env.PORT || 5000
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build/')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
app.listen(PORT, () => {
  console.log('Your app is running')
})
