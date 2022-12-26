const express = require('express');
const path = require ('path');
const app = express ();

app.set ('view engine','pug');
app.set ('views', path.join(__dirname,'views'));

app.get ('/',(req,res)=>{
    // alert('hello');
    res.render('front.pug');
})

app.get('/game',(req,res)=>{
    res.render('flipflap.pug');
})

app.listen('80',()=>{
    console.log ('server is live !');
})