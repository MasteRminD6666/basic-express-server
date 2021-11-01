"use strict";

function validator(req, res, next) {
    console.log(req.query.name);
  
   if (req.query.name) {
    next();
   }
    // call next so that tha function in the next line can do its work 
   else{
       next(res.status(500.).json({
           error: 500,
           type: 'Internal Server Error'
       }));
   }
  
}
  
  module.exports = validator;