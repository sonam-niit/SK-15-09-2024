import { addCategory, getAllCategories } from "./controllers/category-controller.js";
import { addproduct } from "./controllers/product-controller.js";
import { connect } from "./dbconfig.js";

//Main file to call all functions
connect();
//add Categories
// addCategory('Electronics','all electronics Items');
// addCategory('Home Appliences','Home Electronics items');
// addCategory('Stationary','All School Related Products')

// getAllCategories();
//Add product add Category Object Id in String
addproduct('Pen',10,'Nice Grip',"67f5446f76cc742f23ab13bf");
addproduct('Pencil',5,'Extra Dark',"67f5446f76cc742f23ab13bf");
addproduct('Laptop',79999,'Lenovo thinkpad',"67f5446f76cc742f23ab13bd");