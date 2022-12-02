const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors());


app.get('/', (req, res) => {
    res.send('wrong');
});

app.get('/blog', (req, res) => {
    res.send(fs.readFileSync('blog.json'));
    console.log('shit');
});


app.listen(8000);
