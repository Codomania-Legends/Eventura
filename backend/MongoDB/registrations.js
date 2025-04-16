const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    "username" : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user_details",
        required : true
    },
    "events" : [
        new mongoose.Schema({
            "eventName" :{ 
                type : mongoose.Schema.Types.ObjectId,
                ref : "events",
                required : true,
                unique : true
            },
            "status" : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "user_details",
                required : true,
            },
            "attended" : {
                type : Boolean,
                default : false,
                required : true
            }
        })
    ]
})
 const REGISTRATION = mongoose.model( "registrations" , Schema )
 module.exports = { REGISTRATION }
