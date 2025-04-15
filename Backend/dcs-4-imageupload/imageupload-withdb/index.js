import express from 'express'
import { connect } from './connect.js'
import UserRouter from './routes/user.route.js'
import cookieParser from 'cookie-parser';

const app= express()
connect()
app.use(express.json())//JSON Parser
app.use(cookieParser())

app.use('/api/user',UserRouter)

app.listen(5000,()=>console.log('Server Started'))