const { model , Schema } = require("mongoose")

const user_schema = new Schema( {
    username : { type : String , required : true },
    password : { type : String , required : true },
    identity : { type: String, 
        enum: [ "Admin" , "Student" , "Faculty" ], 
        required: true 
    },
    eventParticipated : [ {type : String} ]
} ) 

const USER = model( "user" , user_schema )

module.exports = { USER }
