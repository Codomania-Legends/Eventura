const { checkToken, GetUsername } = require("../Authentication/user")

function Restrict_LoginUserOnly( req , res , next ) {
    if( !req.cookies ) res.json( { msg : "Restrict to login user only" } )
    const token = req.cookies?.token

    if (!token) {
        return res.status(401).json({ msg: "Restricted to logged-in users only" });
    }
    const check = checkToken( token )
    if( check ) {
        const username = GetUsername(token)
        req.username = username
        console.log(username)
        return next()
    }
    if( !check ){
        return res.json( { msg : "Restrict to login user only" } )
    }
}

module.exports = {
    Restrict_LoginUserOnly
}
