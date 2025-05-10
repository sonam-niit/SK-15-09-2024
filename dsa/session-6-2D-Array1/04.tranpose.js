function transpose(matrix){
    const rows= matrix.length; //3
    const cols= matrix[0].length; //4
    //create new array with row length as cols
    //col length as no of rows and fill all values with 0
    const transposed = Array.from({length:cols},()=>Array(rows).fill(0));
    //[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(matrix[i][j]) //incase if element is undefined keep it 0 by default
                transposed[j][i]= matrix[i][j]
            //assigning rows values to column
        }
    }
    return transposed
}

console.log(transpose([[1,2,3,4],[4,5,6,7],[7,8,9]]));
