const express = require('express');
const app = express();

const port = 4000;
const hostName = '127.0.0.1';
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.status(202).sendFile(__dirname + '/index.html')
})

app.listen(port, hostName, ()=>{
    console.log(`Server is running at http://${hostName}:${port}`);
});

