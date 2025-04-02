import fs from 'fs/promises'
import readLine from 'readline-sync';

async function createDirectory(path) {
    try {
        await fs.mkdir(path,{recursive:true});
        console.log('Directory created')
    } catch (error) {
        console.log('Error while creating Directory',error)
    }
}
async function removeDirectory(path) {
    try {
        await fs.rmdir(path);
        console.log('Directory removed')
    } catch (error) {
        console.log('Error while removing Directory',error)
    }
}

async function removeDirWithFiles(path) {
    try {
        await fs.rm(path,
            {recursive:true,
                force:true});
        console.log('Entire Path values deleted')
    } catch (error) {
        console.log('Error while removing Directory',error)
    }
}
removeDirWithFiles('./files/sonam')
//createDirectory('./files/sonam/data'); //it will create all directories if not exist
//removeDirectory('./files/hello') //this will remove only empty folder
async function readFile(fileName){
    try {
        const data= await fs.readFile(fileName)
        console.log(data.toString())
    } catch (error) {
        console.log('Error in Reading file',error)
    }
}
async function writeFile(fileName,message){
    try {
        await fs.writeFile(fileName,message)
        console.log("Data written successfully")
    } catch (error) {
        console.log('Error in Writing file',error)
    }
}
// const fileName = readLine.question('Enter FileName: ');
// const message = readLine.question('Enter Message: ');
// writeFile(fileName,message);
// readFile(fileName)

