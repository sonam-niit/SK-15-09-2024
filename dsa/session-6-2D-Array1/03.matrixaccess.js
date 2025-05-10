const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log('Access Row Wise')
matrix.forEach(row=>{
    row.forEach(val => console.log(val))
})
console.log('Access Column Wise')
for(let col=0;col<matrix[0].length;col++){
    for(let row=0;row<matrix.length;row++){
        console.log(matrix[row][col])
    }
}