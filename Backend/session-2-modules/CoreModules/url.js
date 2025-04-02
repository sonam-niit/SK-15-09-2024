import url from 'url'

const browserURL="http://localhost:5000/home/index.html?name=sonam&age=37"

//true means it will read query string, by default it is false
const parsedUrl = url.parse(browserURL,true)
console.log('Host:',parsedUrl.host);
console.log('Host Name:',parsedUrl.hostname);
console.log('Port:',parsedUrl.port);
console.log('Protocol:',parsedUrl.protocol);
console.log('Path:',parsedUrl.path);
console.log('PathName:',parsedUrl.pathname);
const query = parsedUrl.query
for(let key in query){
    console.log(key+":"+query[key])
}
