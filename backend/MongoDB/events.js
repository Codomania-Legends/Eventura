const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    "eventName" : { type : String , required : true },
    "category" : { type : String , required : true , enum : [ "Competition", "Fest", "Party", "Workshop/Presentation" ] },
    "location" : { type : String , required : true },
    "time" : { type : Date , required : true },
    "organizedBy" : { type : String , required : true },
    "reviews" : [
        new mongoose.Schema({
            "username" : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "user_details"
            },
            "comment" : {
                type : String
            },
            "stars" : {
                type : Number,
                default : 1,
                enum : [ 1 , 2 , 3 , 4 , 5 ]
            }
        } , { _id : false })
    ],
    "total_registrations" : {
        type : Number,
        default : 0
    },
    "total_attended" : {
        type : Number,
        default : 0
    },
})

const EVENT = mongoose.model( "events" , Schema )
module.exports = {
    EVENT
}
