const express = require("express")
const admin = require("firebase-admin")

const app = express()

app.get("*", function (req, res) {
    return res.sendStatus(200)
})

app.listen("3000", "localhost", function () {
    console.log("Server started on port 3000")
})