// input and Output
const matrix = [];

matrix.push([1,2,3]);
matrix.push([4,5,6]);

console.log(matrix)
// iterate using for of loop
for(let row of matrix){
    let temp=''
    for(let col of row){
        temp+=col+'\t'
    }
    console.log(temp)
}