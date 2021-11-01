'use strict';
const express = require('express');


const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const notFound = require('../handlers/404')
const logger = require('../middleware/logger')
const validator = require('../middleware/validator')

const errorHandler = require('../handlers/500');

app.get('/', (req, res) =>{
    res.send('welcome from the Home page 😄')
})

app.get('/name', validator,(req,res) => {
  const name = req.query.name
  res.status(200).json({name: name})
},)
// using middleware here 
app.use(logger);
app.use('*', notFound)
app.use(errorHandler);

function start() {
  app.set( 'port', ( process.env.PORT || 5000 ));

  // Start node server
  app.listen( app.get( 'port' ), function() {
    console.log( 'Node server is running on port ' + app.get( 'port' ));
    });
}
module.exports = { 
    app, 
    start
}

