import express from 'express'
import storage from 'node-persist'
import cors from 'cors'
import CustomerRoute from './customer-route.js'

const app = express() //creating server
app.use(express.json()) //JSON Parser to read POST Data
app.use(cors());//thirdpary middleware to access backend from frontend
app.use('/api/customer',CustomerRoute)
app.listen(5000, () => { 
    console.log('Server Started'); 
    storage.init() //initialize storage once the server started
})

//endpoint: http://localhost:5000/api/customer