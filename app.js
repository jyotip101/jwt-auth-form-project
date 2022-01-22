require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const mainRouter = require('./routes/main')
const notFoundMiddlewqre = require('./middleware/notFound')
const errorHandlerMiddlewqre = require('./middleware/errorHandle')

// middleware
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1', mainRouter)
app.use(notFoundMiddlewqre)
app.use(errorHandlerMiddlewqre)

const port = process.env.PORT || 3000

const start = async () => {
  try {
    app.listen(port, console.log(`Server is listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
