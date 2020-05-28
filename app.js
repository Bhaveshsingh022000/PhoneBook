const express = require('express');
const app = express();
const path = require('path');
const boydParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');

const MONGODB_URI ='mongodb+srv://bhavesh_05:Bhavesh2017@cluster0-yuok1.mongodb.net/phonebook?retryWrites=true&w=majority';


const homeRoutes = require('./routes/home');
const authRoutes = require('./routes/auth');

app.set('view engine','ejs');
app.set('views','views');

app.use(boydParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(session({secret:'supersecret', resave:false, saveUninitialized:false}));


app.use(homeRoutes);
app.use(authRoutes);

mongoose.connect(MONGODB_URI)
    .then(result =>{
        console.log('connected');
        app.listen(3000);
    })
    .catch(err =>{
        console.log(err);
    })
