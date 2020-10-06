var express = require('express'),
    app = express(),
    port = process.env.port || 3333;


const routes = require('./routes');

app.use(express.json());
app.use(routes)

app.listen(port);