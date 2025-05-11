const matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
//sum of each row
matrix.forEach((row,i)=>{
    const sum = row.reduce((acc,curr)=>acc+curr,0)
    console.log(`Sum of row ${i}: ${sum}`)
})

//sum of each column
for(let col=0;col<matrix[0].length;col++){
    let sum=0
    for(let row=0;row<matrix.length;row++){
        sum+= matrix[row][col]
    }
    console.log(`Sum of Column ${col}: ${sum}`)
}