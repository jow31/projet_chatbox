const Discord = require('discord.js');
const client = new Discord.Client();

var express = require('express');
var app = express();

app.get('/', function(req, res){
res.send('hello world');
});



client.on('ready', () => {
console.log('I am ready!');
});
client.on('message', message => {
if (message.content === 'ping') {
message.reply('pong');
}
console.log(message);
});
client.on('presenceUpdate', function(oldMember, newMember) {
console.log(oldMember.presence, '=>', newMember.presence);
});
client.login(process.env.DISCORD_TOKEN);
app.listen(process.env.PORT || 5000);
