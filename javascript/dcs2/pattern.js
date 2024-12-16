function pattern(row){
    for(let i=1;i<=row;i++){
        let res='' //create new variable with blank
        for(let j=1;j<=i;j++){
            res+=" * "; //add new * at each col iteration
        }
        console.log(res); //print one line
    }
}
pattern(10);