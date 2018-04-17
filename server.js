const express = require('express');

const app = express();
const PORT = 5000; // never changes, so we make it all caps (any port from 1025 - 65535)

// req is request, res is response

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/hey', function(req, res) {
    res.send('Howdy');
});

app.listen(PORT, function () {
    console.log(`listening on port: ${PORT}`); // using es6 templating again, instead of concatenation
});  // tells the app to listen on set port

