const { checkToken } = require("../Authentication/user")

function Restrict_LoginUserOnly( req , res , next ) {
    if( !req.cookies ) res.json( { msg : "Restrict to login user only" } )
    const token = req.cookies?.token
    const username = req.body?.username || req.params?.username || req.query?.username

    if (!token || !username) {
        return res.status(401).json({ msg: "Restricted to logged-in users only" });
    }
    
    const check = checkToken( username , token )
    if( check ) {
        return next()
    }
    if( !check ){
        return res.json( { msg : "Restrict to login user only" } )
    }
}

module.exports = {
    Restrict_LoginUserOnly
}
