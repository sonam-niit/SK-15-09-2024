function display(arg){
    arg(); //calling argument function
}

function print(){
    console.log('Print Function triggered');
}

display(print); //passing pring function as argument
