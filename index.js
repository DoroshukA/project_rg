const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mmongoose = require('mongoose');
const passsport = require('passport');
const path = require('path');
const config = require('./config/db');

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.send('Home page');
});

app.listen(port, ()=> {
    console.log(`Сервер был запущен по порту: ${port}`);
});
