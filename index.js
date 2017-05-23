#!/usr/bin/env node
var program = require('commander');
var request = require('request');
var webhook = require('./webhook.js');

var messageVal;
program
  .arguments('[message]')
  .action(function(message) {
    messageVal = message;
  });

program.parse(process.argv);

if( !!messageVal ) {
  console.log(messageVal)
}

var formData = {
  content: `_${messageVal}_`,
}

request.post({url: webhook, formData: formData}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Upload successful!  Server responded with:', body);
});
