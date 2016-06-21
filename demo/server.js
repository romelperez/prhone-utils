var express = require('express');

var port = process.env.PORT || 7777;
var app = express();

app.use(express.static(__dirname.replace('/demo', '')));

app.listen(port, function(err) {
    if (err) throw err;
    console.log('Server running at http://127.0.0.1:'+ port);
});
