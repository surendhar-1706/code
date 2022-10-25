const mongoose = require('mongoose');

const connectDb = async () => {
    await mongoose.connect('mongodb+srv://admin:admin@page.umlpd58.mongodb.net/?retryWrites=true&w=majority');
    console.log('mongodb connected---')
}

module.exports = connectDb