const createError = require('http-errors');
const compression = require('compression');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const nodemailer = require('nodemailer');
const { check, validationResult } = require('express-validator/check');

require('dotenv').config();

var indexRouter = require('./routes/index');

var app = express();
app.use(compression());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/javascripts', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/javascripts', express.static(__dirname + '/node_modules/bootstrap/dist/js/'));
app.use('/javascripts', express.static(__dirname + '/node_modules/jquery.easing/'));
app.use('/stylesheets', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/stylesheets', express.static(__dirname + '/node_modules/devicon/'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
    res.render('error');
  });

app.post(
  '/',
  [
    check('name', 'is required').isLength({ min: 1 }),
    check('email', 'is invalid').isEmail(),
    check('subject', 'is required').isLength({ min: 1 }),
    check('message', 'is required').isLength({ min: 1 }),
  ],
  function (req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }

    let mailOpts, smtpTrans;

    smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
      }
    });

    mailOpts = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;',
      to: process.env.GMAIL_USERNAME,
      subject: req.body.subject,
      text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    };

    smtpTrans.sendMail(mailOpts, function (error, response) {
      if (error) {
        res.render('error');
      } else {
        res.json({
          success: true, message: "Thanks for contacting me! I look forward to getting in touch with you shortly."
        });
      }
    });
});

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



module.exports = app;
