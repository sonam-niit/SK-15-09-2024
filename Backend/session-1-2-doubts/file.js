import fs from 'fs';

function deleteFile(fileName) {

    fs.unlink(fileName, (err) => {
        if (err)
            console.log('Unable to delete', err.message)
        else
            console.log('File Deleted Successfully')
    })
}

deleteFile('./files/test.txt');