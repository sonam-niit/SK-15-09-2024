function sumArray(arr){
    if(arr.length===0) return 0
    return arr[0]+sumArray(arr.slice(1));
}

console.log(sumArray([1,2,3,4]))

function reverseString(str){
    if(str=="") return ""
    return reverseString(str.slice(1))+str[0]
}

console.log(reverseString("sonam"))

// reverse("sonam") --> reverse("onam")+"s"
// reverse("onam") --> reverse("nam")+"o"
// reverse("nam") --> reverse("am") +"n"
// reverse("am") --> reverse("m")+"a"
// reverse("m") --> reverse("")+"m"
// reverse("")--> "" (base)

// ""+"m"+"a"+"n"+"o"+"s"

