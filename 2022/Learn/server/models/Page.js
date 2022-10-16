const { default: mongoose } = require("mongoose");

const PageSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Page', PageSchema)