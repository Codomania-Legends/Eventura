const express = require("express")
const {handleCreateCertificates} = require("../Controllers/certificate.js")
const c_router = express.Router()

c_router.post( "/create" , handleCreateCertificates )

module.exports = {c_router}
