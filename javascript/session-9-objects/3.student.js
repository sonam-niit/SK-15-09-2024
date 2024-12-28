const student={
    id:1,
    name:"Sonam Soni",
    email:'sonam@gmail.com',
    address:'Mumbai',
    phone:'+91 9876510988'
}
//For in loop is used to iterate an object
for(let key in student){
    console.log(key.toUpperCase()+" : "+ student[key]);
}
