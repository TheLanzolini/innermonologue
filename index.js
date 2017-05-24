#!/usr/bin/env node
var program = require('commander');
var request = require('request');
var webhook = "[webhook URL]"

var messageVal;
program
  .option('-p, --phokal', 'Rename to Phokals Inner Monologue')
  .arguments('[message]')
  .action(function(message) {
    messageVal = message;
  });

program.parse(process.argv);

var formData = {
  content: `_${messageVal}_`,
}

if(program.phokal) {
  formData.username = "Phokal's Inner Monologue",
  formData.avatar_url = "http://i.imgur.com/uqxjvXp.jpg"
}

request.post({url: webhook, formData: formData}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Monologue Sent', body);
});
