const mongoose  = require("mongoose");

const connectDB = async()=>{
   const variable =  await mongoose.connect(process.env.MONGO_URI);
   console.log('mongodb connected---')
}

module.exports = connectDB