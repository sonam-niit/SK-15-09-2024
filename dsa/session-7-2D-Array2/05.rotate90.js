function rotate90(matrix){

    for(let i=0;i<matrix.length;i++){
        for(let j=i;j<matrix.length;j++){
            let temp=matrix[i][j]
            matrix[i][j]=matrix[j][i]
            matrix[j][i]=temp
        }
    }
    console.log('tranposed matrix',matrix)
    for(let i=0;i<matrix.length;i++){
        matrix[i].reverse()
    }

    console.log(matrix)
    
}

rotate90([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])

//Task for Practice: Diagonal Traversal