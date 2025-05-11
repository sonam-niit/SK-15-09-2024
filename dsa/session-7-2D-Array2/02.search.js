function search(matrix,target){
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]==target)
                return true
        }
    }
    return false;
}

const result = search([[1,2,3],[4,5,6],[7,8,9]],10)
if(result)
    console.log('element found')
else
    console.log('element not found')
