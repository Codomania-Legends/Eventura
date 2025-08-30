const CERTIFICATE = require("../Model/certificates");

async function handleCreateCertificates(req, res) {
  if (!req.body) return res.status(400).send("Invalid Request");

  try {
    const details = req.body;
    const result = await CERTIFICATE.create(details);

    if (result) {
      return res.json({ msg: "Certificate Selected", data: result });
    }

    res.json({ msg: "Something Happened" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

async function handleInsertWinners( req , res ) {
  try {
    if( !req.body ) new Error("Body is not defined")
    const { eventName , u_id , pos } = req.body
    const events = await CERTIFICATE.updateOne( 
      { eventName },
      { winners : { $push : { u_id , pos } } }
    )
    res.json({})
  } catch (error) {
    return res.json({ msg : error.message })
  }
}

module.exports = {
  handleCreateCertificates
};
