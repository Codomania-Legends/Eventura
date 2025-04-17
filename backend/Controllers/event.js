const { EVENT } = require("../MongoDB/events")
const dayjs = require("dayjs")

// Post Event
async function handlePostEvent( req , res ) {
    if( !req.body ) return res.json( {msg : "Body is required"} )
        const { eventName , location , time , category  } = req.body
    let warning = null
    if( !eventName || !location || !time || !category ) return res.json({msg : "All fields are compulsory"})
    
    const check_sameEvent = await EVENT.findOne({ eventName })
    
    if( check_sameEvent ) return res.json({msg : "Event Already Exists"})
        
        
    const formatTime = dayjs(time, "D/M/YY , h:mm A");
    
    if (!formatTime.isValid()) {
        return res.json({ msg: "Invalid Date Format. Use DD/MM/YY , h:mmA" });
    }
    
    const finalDate = formatTime.toDate();
    const username = req.username
    const sameDateEvents = await EVENT.find( { time : finalDate } )
    if( sameDateEvents.length != 0 ) {
        warning = `There are events on this date`
    }
    const newEvent = await EVENT.create( {
        eventName,
        organizedBy : username,
        category,
        location,
        time : finalDate,
    } )
    if( !newEvent ) return res.json({ msg : "Error creating Event" })
        return res.json( { msg : "Event Created" , warning : warning , events : sameDateEvents } )
}

// Post Event

// Update Event Name

async function UpdateEventName( req , res ) {
    
}

// Update Event Name


module.exports = {
    handlePostEvent
}
