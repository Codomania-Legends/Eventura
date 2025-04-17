const { SetToken } = require("../Authentication/user")
const { USER } = require("../MongoDB/user")
const bcrypt = require("bcrypt")

async function SignupUser( req , res ) {
    if( !req.body ) return res.json({msg : "Body is required"})
    const { username , password } = req.body
    if( !username || !password ) return res.json({ msg : "username password required" })
    
    const find_user = await USER.findOne({username})
    if( find_user ) return res.json( { msg : "User Already Exists" } )
    
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password , saltRound)

    const result = await USER.create( {
        username : username,
        password : hashedPassword,
        registrations : []
    } )

    if( result ){
        token = SetToken({ username })
        res.cookie( "token" , token )
        return res.json( { msg : "user logged in" } )
    }
    else {
        res.json({msg : "Please Try Later"})
    }

}

async function LoginUser( req , res ) {
    if( !req.body ) return res.json({msg : "Body is required"})
    const { username , password } = req.body
    if( !username || !password ) return res.json({ msg : "username password required" })
    
    const find_user = await USER.findOne({username})
    if( !find_user ) return res.json({msg : "User not found"})
    const isMatch = await bcrypt.compare( password , find_user.password )
    if( !isMatch ) return res.json({msg : "Invalid password"})
    if( find_user ) {
        const token = SetToken({username})
        res.cookie("token" , token)
        return res.json( {msg : "Login Successs"} )
    }
    else {
        return res.json( { msg : "Invalid username password" } )
    }
}

module.exports = {
    LoginUser,
    SignupUser
}
