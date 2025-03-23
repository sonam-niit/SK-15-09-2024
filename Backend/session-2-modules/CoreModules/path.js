import path from 'path';

const myPath="/project/script/test.js"
console.log('Base Name: ', path.basename(myPath));
console.log('Directory: ', path.dirname(myPath));
console.log('Extention: ', path.extname(myPath));
console.log(path.join('/models','js','user.js'));
console.log(path.resolve('sonam/project','tmp/script','..','demo.js'))
console.log(path.isAbsolute('D:/skillacademy/batch10/hello.js'))
console.log(path.isAbsolute('/batch10/hello.js')) //true
console.log(path.isAbsolute('batch10/hello.js')) //false
//get relative path from to to path
console.log(path.relative('/data/test/aaa','/data/test/bbb')) // .. /bbb
console.log(path.delimiter); //windows is ; and POSIX : symbol
// Real Time Usage
const filePath = "/Users/sonam/project/file.txt";
console.log('Base Name: ', path.basename(filePath));
console.log('Directory: ', path.dirname(filePath));
console.log('Extention: ', path.extname(filePath));
console.log('Join: ', path.join('/users','sonam','docs'));


