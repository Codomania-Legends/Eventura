const { EVENT } = require("../Model/event")
const { USER } = require("../Model/user")

async function RegisterForEvent( req , res ) {
    try{
        if( !req.body ) throw new Error("Body is Not defined")
        const { username , eventName } = req.body
        if( !username || !eventName ) throw new Error("Username or Event name is not defined")
            console.log("hello")
        const user = await USER.findOneAndUpdate(
            { username },
            { $push: { eventParticipated: eventName } },
            { new: true }
        )
        const event = await EVENT.findOneAndUpdate(
            { eventName },
            { 
                $push: { registrations: username },
                $inc: { total_r: 1 }
            },
            { new: true }
        )
        if (!user) throw new Error("User not found")
        if( !event ) throw new Error("Event not found")
        res.json({ message: "Registerd" })
    }
    catch (err) {res.json({message : err.message}) }
}

async function SaveEventForSaved( req , res ) {
    try {
        if( !req.body ) throw new Error("Body is Not defined")
        const { username , eventName } = req.body
        if( !username || !eventName ) throw new Error("Username or Event name is not defined")
            console.log("hello")
        const user = await USER.findOneAndUpdate(
            { username },
            { $addToSet: { savedEvents: eventName } },
            { new: true }
        )
        if (!user) throw new Error("User not found")
        res.json({ message: "Saved" })
    } 
    catch (err) {res.json({message : err.message}) }
}
async function SaveEventForLiked( req , res ) {
    try {
        if( !req.body ) throw new Error("Body is Not defined")
        const { username , eventName } = req.body
        if( !username || !eventName ) throw new Error("Username or Event name is not defined")
            console.log("hello")
        const user = await USER.findOneAndUpdate(
            { username },
            { $addToSet: { likedEvents : eventName } },
            { new: true } 
        )
        if (!user) throw new Error("User not found")
        res.json({ message: "Liked" })
    } 
    catch (err) {res.json({message : err.message}) }
}

module.exports = {
    RegisterForEvent,
    SaveEventForSaved,
    SaveEventForLiked
}
