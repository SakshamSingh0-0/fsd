const http = require('http');
const fs = require('fs');
const home = fs.readFileSync('./a.html');

const myserver =http.createServer((req, res) => {
     res.end(home);  // jjab o/p show krna hai, no interaction with user and jab interact krna ho to res.write()
})

myserver.listen(8000, () => 
    console.log("server is running on port 8000"));
