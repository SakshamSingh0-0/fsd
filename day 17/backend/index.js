import express from 'express';
import fs from 'fs';

const app = express();
const PORT = 8800;

app.use(express.json());

const readData = ()=>{
    const data = fs.readFileSync('../data.json', 'utf-8');
    return JSON.parse(data);
}
const writeData = ()=>{
    fs.writeFileSync("./data.json",JSON.stringify(data))
}

app.get('/users', (req, res)=>{
    res.json(readData());
})
app.post('/users', async (req, res)=>{
    const userData = await readData();
    const data = req.body;
    userData.push(data);
    writeData(userData);
    res.status(200).json({
        
    })

})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);

});