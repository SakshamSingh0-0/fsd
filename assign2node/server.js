import { createServer } from 'http';
import { readFileSync } from 'fs';
const home = readFileSync('./a.html');
const about = readFileSync('./course.html');
const login = readFileSync('./login.html');
const myserver = createServer((req, res) => {
    if(req.url == "/"){
        res.end(home);    
    }
    else if(req.url == "/course"){
        res.end(about);    
    }
    else if(req.url == "/login"){
        res.end(login);    
    }
})

myserver.listen(3000, () => 
    console.log("server is running on port 3000"));