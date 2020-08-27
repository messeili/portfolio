'use strict'

//use expess library
const express = require('express');

//initialize the express
const server = express();

//declare a port 
const PORT = process.PORT || 4000;

server.listen(PORT, () => {
    console.log(`listening to Port ${PORT}`);
});

server.use(express.static('./public'));