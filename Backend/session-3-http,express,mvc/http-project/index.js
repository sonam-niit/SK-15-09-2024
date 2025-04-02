import http from 'http' //its inbuit module of node js no need to install
import fs from 'fs';
const server = http.createServer((req, res) => {

    res.writeHead(200, { 'content-type': 'text/html' })
    if (req.url == '/about'){
        res.write("<a href='/'>Home Page</a><h1>About Us Page</h1>");
        res.end();
    }
    else if (req.url == '/contact'){
        res.write("<a href='/'>Home Page</a><h1>Contact Us Page</h1>");
        res.end()
    }
    else if (req.url == '/news'){
        res.write("<a href='/'>Home Page</a><h1>News Page</h1>");
        res.end()
    }
    else{
        fs.readFile('index.html',(err,data)=>{
            if(err)
                console.log(err)
            else{
                res.write(data.toString());
                res.end();
            }
        })
    }
})
server.listen(5000, (err) => console.log('server started on PORT 5000'));