const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        require: true,
        max: 20,
        min: 2,
        unique: true,
    },

    email: {
        type: String,
        require: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        min: 6,
        max: 15,
    },

    profilePicture: {
        type: String,
        default: ""
    },

    coverPicture: {
        type: String,
        default: ""
    },

    followers: {
        type: Array,
        default: []
    },

    followings: {
        type: Array,
        default: []
    },

    isAdmin: {
        type: Boolean,
        default: false
    }
},

{timestamps:true})

module.exports = mongoose.model("User", userSchema);