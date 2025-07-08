const { model , Schema } = require("mongoose")

const user_schema = new Schema( {
    username : { type : String , required : true },
    password : { type : String , required : true },
    identity : { enum : [ "Admin" , "Student" , "Faculty" ] },
    id : { type : String , required : true , unique : true }
} ) 

const USER = model( "user" , user_schema )

module.exports = { USER }
