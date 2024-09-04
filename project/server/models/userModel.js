const mongoose = require('mongoose')
const { type } = require('os')

// User Schema

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },

    email:{
        type: String, 
        require: true,
        unique: true

    },

    password:{
        type: String,
        require: true
    },

    isadmin:{
        type: Boolean,
        require: true,
        default: false
    }
},{timestamps: true})

module.exports = mongoose.model('users', userSchema)
