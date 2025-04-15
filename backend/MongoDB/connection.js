const mongoose = require("mongoose")

async function Connect_MongoDB() {
    await mongoose.connect( "mongodb://127.0.0.1:27017/Eventura" )
    .then( () => console.log("MongoDB is now connected") )
    .catch( (err) => console.log("Some err occured : " , err ) )
}

module.exports = {
    Connect_MongoDB
}
