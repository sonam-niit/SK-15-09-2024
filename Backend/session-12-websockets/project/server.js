import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
    console.log('client connected')
    ws.on('error', console.error);
    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });
    ws.send('Hello From Server!');
    ws.on('close', () => {
        console.log('client disconnected')
    })
});
console.log(`WebSocket Server is running on 
    port 8080`)
