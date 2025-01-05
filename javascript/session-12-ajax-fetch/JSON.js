const user={ id:1,name:"sonam"}
console.log(user); //javascript object
//Convert into JSON
const json= JSON.stringify(user);
console.log(json); //JSON Object

const postJSON= JSON.stringify({"userId": 1, "id": 1, "title": "My Title","body": "My Body"})
//convert it into javascript object
const object= JSON.parse(postJSON)
console.log(object.title);

//When you want to tranfer your data from one place to another place we need JSON format
//to convert objects into JSON we use JSON.strigify() method
//When you want to process your JSON data you need to convert it into object
//For that we are using JSON.parse()