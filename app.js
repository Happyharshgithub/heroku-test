const { response } = require('express');
const express = require('express');
const { dirname } = require('path/posix');
const port = process.env.PORT || 3000;
const app = express ();
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view


app.get('/', (req,res) =>{
    res.render('index',{root: __dirname})
})





app.listen (port);

