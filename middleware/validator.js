"use strict";

function validator(req, res, next) {
    console.log(req.query.name);
   if (req.query.name) {
    next();
   }
    // call next so that tha function in the next line can do its work 
   else{
       next('Not Found')
   }
  
}
  
  module.exports = validator;