let data=[]
function fetchData(callback){
    //fetching data from server
    setTimeout(function(){
        console.log("Data fetched successfuly");
        data=[1,2,3,4,5,6,7,8,9,10];
        callback(); //i am trying to make it sync
    },
    3000)
    //settimeout function takes 2 arguments 1 is function to handle after delay
    //2nd is time for delay in milliseconds.
}
function display(){
    console.log("Display Data",data);
}

fetchData(display)