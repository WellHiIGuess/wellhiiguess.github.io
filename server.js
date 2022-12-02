var express = require('express');
var cors = require('cors');
var fs = require('fs');
var app = express();
app.use(cors());
app.get('/', function (req, res) {
    res.send('wrong');
});
app.get('/blog', function (req, res) {
    res.send(fs.readFileSync('blog.json'));
    console.log('shit');
});
app.listen(8000);
