import { WebSocketServer } from "ws";
import jwt from 'jsonwebtoken'

const wss = new WebSocketServer({ port: 8080 })
wss.on('connection',function (ws, req) {
    //Extract the token from URL Parameter
    const urlParams = new URLSearchParams(req.url.replace('/', ''))
    const token = urlParams.get('token')

    if (!token) {
        ws.close(1008, 'Token required');
        return
    }
    //verify the Token
    try {
        const user = jwt.verify(token, 'my-secret-key');
        console.log('User Authenticated', user)

        //Now Let's Allow communication
        ws.send(`Hello ${user.name}, You are authenticated`);
        ws.on('message',function (msg) {
            console.log(`Message from ${user.name}: ${msg}`)
        })
        ws.on('close',function (msg) {
            console.log(`Client ${user.name} disconnected`)
        })
    } catch (error) {
        console.log(error);
        ws.close(1008,'Invalid Token')
    }
    ws.on('error', console.error);
})

console.log('Secure Websocket Server started...')