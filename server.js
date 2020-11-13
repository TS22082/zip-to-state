const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000
var cors = require('cors')

//configure middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Routes
app.use("/", require("./routes/api-routes"))
//Server
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`))