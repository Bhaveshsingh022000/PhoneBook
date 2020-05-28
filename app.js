const express = require('express');
const app = express();
const path = require('path');
const boydParser = require('body-parser');

const homeRoutes = require('./routes/home');

app.set('view engine','ejs');
app.set('views','views');

app.use(boydParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));


app.use(homeRoutes);

app.listen(3000);