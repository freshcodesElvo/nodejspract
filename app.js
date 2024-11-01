const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/')
    {
        res.end("welcome to our home page");
    }
    if(req.url === '/about') 
    {
        res.end("This is our short history");
    }


    res.end(`
        <h1>Oppps!!! page not found!</h1>
        <a href="/">Go to Home</a> | <a href="/about">About</a>    
        `)
   


});
server.listen(5000)