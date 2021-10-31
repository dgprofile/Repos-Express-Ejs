const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

app.use(expressEjsLayouts);
//EJS looks to 3 things - layout/css/js - layout is the starter file/css is the directory of css files/js is the directory for js files
app.set('view engine', 'ejs');
app.set('layout', './layouts/main')
app.set('css',express.static(__dirname + 'public/css'));
app.set('js',express.static(__dirname + 'public/js')); 

app.get('/', (req,res)=>{ 
    res.render('index.ejs');
});
app.get('/about', (req,res)=>{ 
    res.render('about.ejs');
});
app.listen(PORT, ()=>{
    console.log(`this is from port ${PORT} , it says Hello World`);
});