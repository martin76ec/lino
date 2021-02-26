const http = require('http')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.server = http.createServer(app)
app.use(cors())
app.use(bodyParser.json({ extended: false }))

app.get('/', (request, response) => {
	response.send('<h1>Hello World, this is from Minm</h1>')
})

app.server.listen(process.env.PORT || 3000)
console.log(`Server started at port: ${ app.server.address().port }`)

module.exports = app
