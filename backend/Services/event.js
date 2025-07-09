const { EVENT } = require("../Model/event");

async function CheckForDuplicateEVentName( { eventName } ){
    const result = await EVENT.findOne( { eventName } )
    if( !result ) return true
    else return false
}

module.exports = { CheckForDuplicateEVentName }
