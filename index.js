#!/usr/bin/env node
var program = require('commander');
var request = require('request');
var webhook = "[webhook url]"

var messageVal;
program
  .option('-s, --spongebob', 'Rename to Spongebob says')
  .arguments('[message]')
  .action(function(message) {
    messageVal = message;
  });

program.parse(process.argv);

function spongeText(text){
  return text.split("").map(function(character, index){
    return index % 2 == 0 ? character.toUpperCase() : character.toLowerCase()
  }).join("");
}

var formData = {
  content: `_${program.spongebob ? spongeText(messageVal) : messageVal}_`,
}

if(program.spongebob) {
  formData.username = "Spongebob Says",
  formData.avatar_url = "http://i.imgur.com/uqxjvXp.jpg"
}

request.post({url: webhook, formData: formData}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Monologue Sent', body);
});
