var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
require('dotenv').config()

const routerUsers = require('./routes/users.route')
const routerDeps = require('./routes/dep.route')
const routerBanks = require('./routes/bank.route')

const routerProjects = require('./routes/project.route')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('DB CONNECTED'))
.catch(err=>console.log(err.message))
app.use('/api',routerProjects)

app.use('/api', routerUsers)

app.use('/api', routerDeps)
app.use('/api', routerBanks)

module.exports = app;
