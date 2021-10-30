const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));

app.use(expressEjsLayouts);
app.set('view engine', 'ejs');
app.set()

app.get('/', (req,res)=>{ 
    res.render('index.ejs');
});
app.get('/about', (req,res)=>{ 
    res.render('about.ejs');
});
app.listen(PORT, ()=>{
    console.log(`this is from port ${PORT} , it says Hello World`);
});