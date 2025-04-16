const mongoose = require("mongoose")

const Schema = new mongoose.Schema( {
    "username" : {
        type : String,
        required : true
    },
    "password" : {
        type : String,
        required : true
    },
    "registrations" : [ 
        new mongoose.Schema( {
            "eventName" : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "event",
                required : true
            },
            "status" : {
                type : String,
                required : true,
                enum : [ "rejected" , "pending" , "completed" ]
            },
            "fees_paid" : {
                type : Boolean,
                required : true,
                default : false
            }
        } ) 
    ]
} )

const USER = mongoose.model( "user" , Schema )

module.exports = {
    USER
}
