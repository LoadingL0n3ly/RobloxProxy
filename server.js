var express = require("express")
var request = require("request")
var app = express()
var port = 3000

app.use(express.json())

app.post("/ProxyGet", function(Request, Res){
    if (!Request.body.url){
        Res.send("No url provided")
        return
    }

    var URL = Request.body.url
    request(URL).pipe(Res)

})

app.listen(port)