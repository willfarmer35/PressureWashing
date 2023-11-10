const mongoose = require("mongoose")


const username = process.env.ATLAS_USERNAME
const password = process.env.ATLAS_PASSWORD

const uri = `mongodb+srv://${username}:${password}@cluster0.ukef31t.mongodb.net/userdb?retryWrites=true&w=majority`

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Tractor Beam has us conencted"))
    .catch((err) => console.log("This is our config error message:", err))
    