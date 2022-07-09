const express = require('express');
const path = require('path')
var logger = require('morgan');
var createError = require('http-errors');
const { connectMongoDB } = require('./dbConfig')
require('dotenv').config();

var indexRouter = require('./routers/index');
const uploadRouter = require('./routers/upload.router')


connectMongoDB()

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(function (req, res, next) {
	req.header('Access-Control-Allow-Origin', '*');
	req.header('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');
	req.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,  X-Auth-Token');
	next();
});

app.use('/', indexRouter);
app.use('/upload', uploadRouter);

app.use(function (req, res, next) {
	next(createError(404));
});

app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status_code || 500);
	res.render('error');
	// render the error page
});

module.exports = app