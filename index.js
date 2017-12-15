const express = require('express');
const app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/static')));
app.listen(3000, function() {
    console.log('listening on 3000')
});
app.get('/', function (req, res) {
    res.sendFile('/vueExample.html', { root: __dirname });
});
