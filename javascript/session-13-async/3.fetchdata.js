function fetchData() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(function (data) {
            console.log(data.status)
            for (let entry of data.headers.entries()) {
                console.log(entry, 'Key: ', entry[0], ' value: ', entry.value[1]);
            }
            return data.json() //async
        })
        .then(json=>console.log(json)) //Arrow Functions
        .catch(function (err) {
            console.log(err)
        })
}

fetchData()