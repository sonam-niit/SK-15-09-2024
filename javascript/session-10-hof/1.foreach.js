const array = [1, 2, 3, 4, 5, 6, 7, 8]

//print array elements using foreach
array.forEach(function (value) {
    console.log(value * 3)
})

const data = [{ id: 1, name: 'alex' },{ id: 2, name: 'bob' },{ id: 3, name: 'catty' }]
data.forEach(function(value){
    console.log(value.id+" "+value.name);
    
})
