const mongoose = require('mongoose');

const connectDb = async () => {
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log('mongodb connected---')


}

module.exports = connectDb