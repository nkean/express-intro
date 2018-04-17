const express = require('express');

const app = express();
const PORT = 5000; // never changes, so we make it all caps (any port from 1025 - 65535)

app.listen(PORT);  // tells the app to listen on set port

