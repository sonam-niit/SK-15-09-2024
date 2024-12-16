let data='A'
let myData=data.charCodeAt(0);
function pattern(row){
    for(let i=1;i<=row;i++){
        let res=''
        for(let j=1;j<=i;j++){
            res+=String.fromCharCode(myData)+" "; 
            myData+=1;
            if(String.fromCharCode(myData)==='[')
                myData=65;
        }
        console.log(res); //print one line
    }
}
pattern(10);
