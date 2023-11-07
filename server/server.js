const express = require("express");
const cors = require("cors")
const app = express();
const userRoutes = require('./routes/user.routes')
const reviewRoutes = require('./routes/review.routes')
require("dotenv").config()
// req is short for request
// res is short for response
app.use(cors())

app.use(express.json(), express.urlencoded({ extended: true }));


require("./configs/mongoose.config")
//routes

app.use('/api/user',userRoutes)
app.use('/api/review',reviewRoutes)


const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
 