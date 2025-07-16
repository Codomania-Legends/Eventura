const { model , Schema } = require("mongoose")

const user_schema = new Schema( {
    username : { type : String , required : true },
    password : { type : String , required : true },
    identity : { type: String, 
        enum: [ "Admin" , "Student" , "Faculty" ], 
        required: true 
    },
    eventParticipated : [ {type : String} ],
    likedEvents : [ {type : String} ],
    savedEvents : [{type : String}],
    CurrHostEvent : { type : String }
} ) 

const USER = model( "user" , user_schema )

module.exports = { USER }
