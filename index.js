require('dotenv').config()

const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/twitter", (req, res) => {
    res.send("nurullahdotcom")
})

app.get("/login", (req, res) => {
    res.send("<h1>Please login at NR Coding</h1>")
})

app.get("/youtube", (req, res) => {
    res.send("NR Coding")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})