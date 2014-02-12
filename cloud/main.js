/*
  Returns a list containing all of the identities (email addresses and domains) for a specific AWS Account, regardless of verification status.
 */
exports.ses = function(params, cb){
  var AWS = require('aws-sdk');
  var ses = new AWS.SES();
  ses.listIdentities(params, function (err, data) {
    if (err) {
      console.log(err); // an error occurred
    } else {
      console.log(data); // successful response
    }
  });
};
