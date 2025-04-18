const jwt = require('jsonwebtoken');
require("dotenv").config({ path : "./Service/.env" })
const Secrect_Key = process.env.SECRET_KEY

function SetToken( payload ) {
    const token = jwt.sign( payload , Secrect_Key)
    return token
}

function GetUsername( token ){
    const decodeData = jwt.decode( token )
    return decodeData.username
}

function checkToken( token ){
    const isValid = jwt.verify( token , Secrect_Key )
    return isValid
}

module.exports = {
    SetToken,
    checkToken,
    GetUsername
}
