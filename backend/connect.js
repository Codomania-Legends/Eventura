const {connect} = require("mongoose")

function connectMongoDB( url ) {
    connect( url )
    .then( () => console.log("MongoDB connected") )
    .catch( (err) => console.log(err) )
}

module.exports = { connectMongoDB }
