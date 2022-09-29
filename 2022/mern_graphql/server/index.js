var express = require('express');
require('dotenv').config()
const port = process.env.PORT
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const connectDB = require('./config/db');
const schema = require('./schema/schema')

var app = express();
connectDB();
app.use('/graphql',
    graphqlHTTP({
        schema,
        graphiql: true
    })
)


app.listen(port, console.log('Server Running on ', port))