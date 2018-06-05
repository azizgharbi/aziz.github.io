var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));


/** 
 * redirect 404  
 */

app.get('*',function(req,res){
    return res.redirect("/");
})


var port = process.env.PORT || 5000;
app.listen(port);