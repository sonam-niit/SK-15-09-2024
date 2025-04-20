import WebSocket from "ws";

const ws = new WebSocket
('ws://localhost:8080');
ws.on('open',()=>{
    console.log('Server Connected')
    ws.send('Hello From Client!!')
})

ws.on('message',(message)=>{
    console.log(`These message received 
        from Server: ${message}`)
})