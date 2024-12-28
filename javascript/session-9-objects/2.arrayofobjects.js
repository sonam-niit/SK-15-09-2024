const prod1={ id: 1, name: "laptop", price: 99999, description: "Mac Book" };
const prod2={ id: 2, name: "IPhone", price: 153000, description: "I Phone 16 Pro Max" }
const prod3={ id: 3, name: "Headphone", price: 999, description: "Boat head sets" }
const prod4={ id: 4, name: "Pencil Box", price: 99, description: "Extra Dark" }
const prod5={ id: 5, name: "Compass Box", price: 149, description: "Includes Pen,Pencil etc.." }
//Objects Array
const products = [prod1,prod2,prod3,prod4,prod5]
for(let product of products){
    console.log('-----------------------------------------------------');
    for(let key in product){
        console.log(key.toUpperCase()+' : '+product[key]);
    }
}