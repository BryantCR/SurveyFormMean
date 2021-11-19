var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var app = express();

app.use(express.json()) //en el curriculum nos enseñan esta
app.use(bodyParser.urlencoded({entended: true}));
app.use(express.static(__dirname + "/static"));
app.use(session({
    secret: 'root',
}))

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
})

app.post("/result", function(req, res){
    req.session.results = req.body;
    console.log(req.body);
    res.redirect("results");
})

app.get("/results", function(req, res){
    res.render("results", {results:req.session.results});
})

app.listen(8080, function(){
    console.log("Listening on port: 8080");
})