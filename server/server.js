const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require('request')
const app = express();

const port =  process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json())

if(process.env.NODE_ENV === "production"){
    app.use(express.static("build"))
    app.get('*', (req, res) => {
        req.sendFile(path.resolve(__dirname, "build", "index.html"))
    })
}

app.use("/musics", (req, res) => {
    request(`https://api.deezer.com/search?q=${req.body.musicTitle}`, (error, response, body) => {
        res.send(body)
    })
})

app.listen(port, () => {
    console.log("server runs on port", port)
})