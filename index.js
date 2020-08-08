const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passsport = require('passport');
const path = require('path');
const config = require('./config/db');
const account = require('./routes/account'); 

const app = express();

const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', ()=>{
    console.log('we connected successfully to the DB!!!!!!!!!!!');
});

mongoose.connection.on('error', (err)=>{
    console.log('we can not connected to the DB!&!&!&!&!&' + err);
});

app.get('/', (req, res)=>{
    res.send('Home page');
});

app.use('/account/', account);

app.listen(port, ()=> {
    console.log(`Сервер был запущен по порту: ${port}`);
});
