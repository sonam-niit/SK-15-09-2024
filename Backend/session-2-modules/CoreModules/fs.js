import fs from 'fs';

function writeDataToFile() {
    const message = 'Welcome to NodeJS FS Module!'
    fs.writeFile('./files/data.txt', message, (err) => {
        if (err) {
            console.log('Error Occured:', err)
        } else {
            console.log('Data Written Successfully')
        }
    })
}
//writeDataToFile(); 
//Create the file if not exist and write data to that file
//Incase if the file exits it will override the data
function appendDataToFile(message) {
    fs.appendFile('./files/data.txt', message, (err) => {
        if (err) {
            console.log('Error Occured:', err)
        } else {
            console.log('Data Appended Successfully')
        }
    })
}
// appendDataToFile('\nNode JS is a run time Environment.')
//\n for new line
//append function will add the data at end of your file

//All function we have used here are async
function readDataFromFile(fileName) {
    console.log('File Reading started')
    fs.readFile(fileName, (err, data) => {
        if (err)
            console.log(err.message)
        else
            console.log(data.toString())

    })
    console.log('file reading completed')
}
readDataFromFile('./files/data.txt')