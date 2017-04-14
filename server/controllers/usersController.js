var db = require('../db/db');
var nodemailer = require('nodemailer');
var validator = require('validator');

module.exports.registerUser = function(req, res, next) {
  console.log('registerUser');
  console.log(req.body);
  //key represents the trip id
  db.query('INSERT INTO \
                    users(namef, namel, email) \
                    VALUES($1, $2, $3) RETURNING id',
                    [req.body.nameB, req.body.nameL, req.body.email], function(err, userResults) {
                      if (err) {
                        // res.send(err)
                      }
                      res.send(userResults.rows[0]);
  });
};

module.exports.email = function(obj) {
  console.log("IN EMAIL!", obj.body)
  //obj will contain email recipients name and email
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bookingbuddy17@gmail.com',
      pass: 'Verizon7'
    }
  });

  let mailOptions = {
    from: '"Booking Buddy" <foo@blurdybloop.com>', // sender address
    to: obj.body.email, // list of receivers
    subject: 'Hey! You\'ve been invited to go on vacation!', // Subject line
    text: 'Whatever we want to tell the db ' + obj.body.id, // plain text body
    html: '<b>Its vacation time! Go to the following link to plan your group vacation.</b>' + ' http://localhost:3000/profile/'+ obj.body.id + '<br><b> Enjoy enjoy!</b>' // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
};