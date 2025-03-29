import http from 'http' //its inbuit module of node js no need to install

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'content-type': 'text/html' })
    res.write("<h1>Hello from server</h1>");
    res.end(); //response completed
})
server.listen(5000, (err) => {
    if (err)
        console.log('error ocured while starting server', err)
    else
        console.log('server started on PORT 5000')
});