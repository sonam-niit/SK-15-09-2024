let fullName="sonam soni"

console.log(fullName[2]) //accessible
fullName[2]='m' // this is not chnaging string

console.log(fullName)

fullName="Python" //this is creating new object in memory
console.log(fullName) // now fullName is pointing python not 'sonam soni'