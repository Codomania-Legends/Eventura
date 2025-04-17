const jwt = require('jsonwebtoken');

const Secrect_Key = process.env.SECRET_KEY

function SetToken( payload ) {
    const token = jwt.sign( payload , Secrect_Key)
    return token
}

function checkToken( token ){
    const isValid = jwt.verify( token , Secrect_Key )
    return isValid
}

module.exports = {
    SetToken,
    checkToken
}
