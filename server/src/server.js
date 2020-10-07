var express = require('express'),
    app = express(),
    port = process.env.port || 3333;

require('./database')


const routes = require('./routes');

app.use(express.json());
app.use(routes)

app.listen(port);