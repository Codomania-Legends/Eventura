import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    eventName : { required : true , unique : true , type : String },
    certificateSelected : { required : true , type : String },
    winners : [ new mongoose.Schema( { u_id : {type : String} , pos : {enum : ["First" , "Runner up"]} } ) ],
    participants : [ new mongoose.Schema( { u_id : { type : String , unique : true } } ) ]
})

const CERTIFICATE = new mongoose.model("certificates" , Schema)

module.exports = { CERTIFICATE }
