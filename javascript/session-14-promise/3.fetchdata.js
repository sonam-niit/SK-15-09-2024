//Async Await
//you can use await only if function is async
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        console.log(json)
    } catch (error) {
        console.log(error)
    }
}
//Call function
fetchData()