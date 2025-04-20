import jwt from 'jsonwebtoken'

const user = {id:1,name:'sonam',emai:'sonam@gmail.com'}
const secretKey= "iamsonamsoni12345"

const token= jwt.sign(user,secretKey);
console.log(token);
//validate token
const data= jwt.verify(token,secretKey);
console.log(data)
