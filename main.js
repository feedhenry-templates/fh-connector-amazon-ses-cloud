/*
  Returns a list containing all verified email addresses
 */
exports.ses = function(params, cb) {
  var AWS = require('aws-sdk');
  var accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  var secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
  AWS.config.update({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
  });
  AWS.config.update({
    region: 'eu-west-1'
  });


  var ses = new AWS.SES();
  ses.listVerifiedEmailAddresses({}, function(err, data) {
    if (err) {
      console.log(err, err.stack); // an error occurred
      return cb(err);
    } else {
      console.log(data); // successful response
      return cb(null, data);
    }
  });
};