const express = require('express')
const connectDb = require('./config/db')
const port = 3000
const pageRouter = require('../server/router/PageRouter')
const app = express()
const expressOasGenerator = require('express-oas-generator')

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use('/page', pageRouter)

expressOasGenerator.init(app, {});
connectDb()
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})