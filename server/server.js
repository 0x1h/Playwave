const express = require('express');
const SpotifyWebAPI = require('spotify-web-api-node')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())


app.post("/login", (req, res) => {
    const SpotifyWeb = SpotifyWebAPI({
        redirectUri: 'http://localhost:3000/',
        clientId: "80f75b8b4aae4363af8127ad5f78c461",
        clientSecret: "6d411b5209c84bbf8d60843d2b31e6a7"
    })

    SpotifyWeb.clientCredentialsGrant().then(data => {
        SpotifyWeb.setAccessToken(data.body["access_token"])
        console.log(data.body)

        res.json({
            tokenExpires: data.body["token_expires"],
            accessToken: data.body["access_token"],
        })
    }).catch(err => console.log(err))

})

app.listen(3001)