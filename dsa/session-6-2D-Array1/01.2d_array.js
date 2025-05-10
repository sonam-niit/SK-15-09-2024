const matrix = [
    [1,2,3],
    [4,5,6,1],
    [7,8,9]
]
for( let row=0;row<matrix.length;row++){
    let temp=''
    for(let col=0; col<matrix[row].length;col++){
        temp+= matrix[row][col]+"\t"
    }
    console.log(temp)
}