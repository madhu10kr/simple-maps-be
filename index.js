const express = require('express');
const morgan = require('morgan');
const _ = require('lodash');
const cors =  require('cors')
const mongoose = require('./config/db');



const {router} = require('./config/routes');

const app = express();




app.use(cors())
app.use(express.json());


app.use('/',router);


//custom middle ware using tokens in morgan
app.use(morgan((tokens, req, res) => {
    return `STARTED: ${tokens.method(req, res)} ${tokens.url(req, res)} for ${req.ip} at ${new Date()}
COMPLETED: ${tokens.status(req, res)} in  ${tokens['response-time'](req, res)}ms`;
  }));


app.use(function(req, res, next) {
        res.status(404).send({ error : 'Route not found'});
  });

const port = process.env.PORT || 5000;


app.listen(port,() => {
    console.log('Server - Listening to port '+port);
});