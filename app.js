//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname +"/date.js");
const app = express();
let items = [];
let workItems = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/", function(req,res){
    let day = date.getDate();
    res.render("list", {listTitle: day, newListItem:items});
});

app.post("/", function(req,res){
    let item = req.body.newItem;
    if(req.body.submit === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
    
})
app.get("/work", function(req,res){
    res.render("list",{listTitle:"Work list", newListItem:workItems})
})
app.get("/about", function(req,res){
    res.render("about");
})

app.listen(3000, function(){
    console.log("Server has started on port 3000")
});