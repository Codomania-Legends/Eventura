const jwt = require('jsonwebtoken');
const Secrect_Key = "VidhiAnshul"

const MapUser_Token = new Map()

function SetToken( user , payload ) {
    const token = jwt.sign( payload , Secrect_Key)
    MapUser_Token.set( user , token )
    return token
}

function GetToken( user ){
    return MapUser_Token.get(user)
}

function checkToken( user , token ){
    const storedToken = MapUser_Token.get(user)
    if( storedToken !== token ) return false
    return jwt.verify( storedToken , Secrect_Key )
}

module.exports = {
    SetToken,
    GetToken,
    checkToken
}
