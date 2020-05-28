const express = require('express');
const app = express();

const homeRoutes = require('./routes/home');

app.set('view engine','ejs');
app.set('views','views');

app.use(homeRoutes);

app.listen(3000);