const express = require("express")
const admin = require("firebase-admin")

const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()

app.use(cors({origin: true, credentials: true}))
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get("*", function (req, res) {
    return res.sendStatus(200)
})

app.listen("3000", "localhost", function () {
    console.log("Server started on port 3000")
})