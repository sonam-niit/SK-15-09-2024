function fibonacci(n) {
  if(n <= 1) {
    return n;
  }
  let prev = 0, curr = 1, next;
  let result = prev+', '+curr+', ';
  for(let i = 2; i <= n; i++) {
    next = prev + curr;
    result += next + ', ';
    prev = curr;
    curr = next;
  }
  console.log(result.slice(0, -2)); // Remove the last comma and space
  return curr;
}

console.log(fibonacci(10)); // 55
console.log(fibonacci( 1)); // 1