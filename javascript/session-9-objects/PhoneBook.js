phoneBook=[]; // By default todo is blank

function addPhone(uid,uname,uphone){
    const obj={id:uid,name:uname,phone:uphone};
    phoneBook.push(obj);
}
function getAllPhones(){
    console.log(phoneBook);
}

addPhone(101,'alex','9876543210');
addPhone(102,'John','1234567890');
addPhone(103,'Devid','8765432190');
getAllPhones()