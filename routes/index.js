const express = require('express');
const { check, validationResult } = require('express-validator/check');
const nodemailer = require('nodemailer');
let request = require('request-promise');


let router = express.Router();

var submitMessage = function (req, res) {
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
      res.json({ error: error });
    } else {
      res.json({
        success: true, message: "Thanks for contacting me! I look forward to getting in touch with you shortly."
      });
    }
  });
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { reCAPTCHA_site_key: process.env.RECAPTCHA_SITE_KEY });
});

router.post(
  '/',
  [
    check('name', 'is required').isLength({ min: 1 }),
    check('email', 'is invalid').isEmail(),
    check('subject', 'is required').isLength({ min: 1 }),
    check('message', 'is required').isLength({ min: 1 }),
  ],
  function (req, res) {
    const options = {
      method: 'POST',
      uri: 'https://www.google.com/recaptcha/api/siteverify',
      body: {
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: req.body.recaptcha_response,
      },
      json: true
    };

    request(options)
      .then(function (response) {
        submitMessage(req, res);
      })
      .catch(function (error) {
        console.log(error)
      })
  }
);

module.exports = router;
