const mongoose = require("mongoose")

const dbname = process.env.ATLAS_DATABASE
const username = process.env.ATLAS_USERNAME
const password = process.env.ATLAS_PASSWORD

const uri = `mongodb+srv://willfarmer35:xeFKXFGocoezf0Es@cluster0.ukef31t.mongodb.net/userdb?retryWrites=true&w=majority`

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Tractor Beam has us conencted"))
    .catch((err) => console.log("This is our config error message:", err))
    