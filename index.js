var express = require("express");
var app = express();
var path    = require("path");
var ejs = require("ejs");
var PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+ '/public/pages/index.html'));
});

app.listen(PORT, function(){
  console.log("access");
})
