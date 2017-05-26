#!/usr/bin/env node
var program = require('commander');
var request = require('request');
var webhook = "https://discordapp.com/api/webhooks/316589437611933699/VnI0f9pCidkuGTtETy2QxuJAGUGZjOUCrQvjHFlYu5ibSAX8TQBBYtnCoRApHp2fyDNc"

var messageVal;
program
  .option('-s, --spongebob', 'Rename to Spongebob says')
  .arguments('[message]')
  .action(function(message) {
    messageVal = message;
  });

program.parse(process.argv);

var formData = {
  content: `_${messageVal}_`,
}

if(program.phokal) {
  formData.username = "Spongebob Says",
  formData.avatar_url = "http://i.imgur.com/uqxjvXp.jpg"
}

request.post({url: webhook, formData: formData}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Monologue Sent', body);
});
