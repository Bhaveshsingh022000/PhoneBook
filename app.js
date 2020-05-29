const express = require('express');
const app = express();
const path = require('path');
const boydParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const multer = require('multer');
const MongoDBStore = require('connect-mongodb-session')(session);

const MONGODB_URI = `mongodb+srv://bhavesh_05:Bhavesh2017@cluster0-yuok1.mongodb.net/phonebook?retryWrites=true&w=majority`;

const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});

const homeRoutes = require('./routes/home');
const authRoutes = require('./routes/auth');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'images');
    },
    filename: (req, file, cb)=>{
        cb(null, Math.random().toString() +'_'+file.originalname);
    }
});
//chekc

const filefilter = (req,file,cb)=>{
    if(file.mimetype === 'image/png' ||file.mimetype === 'image/jpg' ||file.mimetype === 'image/jpeg'){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
    
}

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(boydParser.urlencoded({ extended: false }));
app.use(multer({storage:fileStorage, fileFilter:filefilter}).single('image'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images',express.static(path.join(__dirname, 'images')));
app.use(session({ secret: 'supersecret', resave: false, saveUninitialized: false, store: store }));


app.use(homeRoutes);
app.use(authRoutes);

mongoose.connect(MONGODB_URI)
    .then(result => {
        console.log('connected');
        app.listen(process.env.PORT||3000);
    })
    .catch(err => {
        console.log(err);
    })
