import fs from 'fs/promises'

async function fileExist(filePath){
    try {
        await fs.access(filePath);
        console.log('File Exist')
    } catch (error) {
        console.log("file Doesn't exist")
    }
}
// fileExist('./files/data.txt')

async function getFileStats(){
    try {
        const stats=await fs.stat('./files/data.txt')
        console.log(stats)
    } catch (error) {
        console.log("Error while getting file stats")
    }
}
// getFileStats()

//renaming file
//copy file

async function test(){
    try {
        const dir = await fs.opendir('./');
        for await (const dirent of dir)
          console.log(dirent.name);
      } catch (err) {
        console.error(err);
      }
}

test()

