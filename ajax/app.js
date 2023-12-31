var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
var sessions = require('express-session');
var mysqlSessions = require('express-mysql-session');
const mysql = require('mysql');

var db = {
  host: "localhost",
  user: "root",
  password: "",
  database: "sucio"
}

var mysqlstore = mysqlSessions(sessions);
var sessionStore = new mysqlstore(db);

var pool = mysql.createPool(db);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(sessions({
  saveUninitialized: false,
  resave: true,
  secret: "QuienLoLeaMeDebe20Euros",
}))

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/api', apiRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

http.createServer(app).listen(3000, function (err){
  if(err){
      console.error("Se ha producido un error al iniciar el servidor: " + err.message);
  } else {
      console.log("Servidor iniciado correctamente");
  }
});

module.exports = app;
