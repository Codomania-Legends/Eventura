const { USER } = require("../Model/user");

async function CheckForDuplicateUser( { username , password } ){
    const result = await USER.findOne( {username , password} )
    if( !result ) return true
    else return false
}

module.exports = { CheckForDuplicateUser }
