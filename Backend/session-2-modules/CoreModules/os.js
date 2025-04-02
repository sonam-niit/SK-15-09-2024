import os from 'os';

const totalMemory=os.totalmem()
console.log(Math.ceil(totalMemory/(1024*1024*1024)),"GB")
const freeMemory = os.freemem()
console.log(Math.ceil(freeMemory/(1024*1024*1024)),"GB")
console.log('Home Directory: ',os.homedir())
console.log('Host Name: ',os.hostname())
console.log('Priority: ',os.getPriority())
console.log('CPUs Length: ',os.cpus().length)

const cpus = os.cpus();
console.log('Model: ',cpus[0].model)
console.log('Speed: ',cpus[0].speed)

console.log('Architecture',os.arch())
console.log(os.platform());
console.log(os.tmpdir())