const http = require('http')
const fs=require('fs')
filedata=fs.readFileSync('./apiData.json','utf-8')
// console.log(filedata)
const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url == '/') {

        res.end('hello bhai log ye apna home page')
    }
    else if (req.url == '/api') {
        res.writeHead(200, { "content-type": "application/JSON" })
        // res.(__dirname)
        res.end(filedata);
    }

    else {
        res.writeHead(404, { "content-type": "text/html" })
        res.end('404 page not found')
    }

});

server.listen(3000, '127.0.0.1', () => {
    console.log('i am listening')


});