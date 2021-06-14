const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:String

})


const user = mongoose.model("user",UserSchema)
module.exports = user;