const { default: mongoose } = require("mongoose");


const ProjectSchema = new mongoose.Schema({
    name:{
        type:String
    },
    status:{
        type:String,
        enum:['Not Started','Started','In Progress']
    },
    description:{
        type:String
    },
    client:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Client'
    }
})

module.exports = mongoose.model('Project',ProjectSchema)