const express = require('express')
const connectDb = require('./config/db')

const app = express()
const port = 3000
const router = require('express').Router();





connectDb()
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})