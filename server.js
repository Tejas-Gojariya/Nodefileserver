const http = require("http")
const fs = require("fs")

const server = http.createServer(function (req, res) {
    // res.writeHead(200, { "Content-Type": "html/text" })
    res.statusCode = 200
    res.setHeader("Content-Type","text/html")
    fs.readFile("index.html", function (err, data) {
        if (err) {
            console.log(err)
            res.statusCode = 400
        } else {
            res.statusCode = 200
            res.write(data)
            console.log("chal baap ko mat shikha")
        }
        res.end()
    })
}).listen(8000);