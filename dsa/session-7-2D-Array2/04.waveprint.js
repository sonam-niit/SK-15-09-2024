function wavePrint(matrix) {
    const result = []
    for (let col = 0; col < matrix[0].length; col++) {
        if (col % 2 === 0) {
            for(row=0;row<matrix.length;row++){
                result.push(matrix[row][col])
            }
        }else{
            for(row=matrix.length-1;row>=0;row--){
                result.push(matrix[row][col])
            }
        }
    }
    return result
}

console.log(wavePrint([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]))