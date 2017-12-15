const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!Ping') {
    	message.reply.('Pong');
  	}
});

client.on('message', message => {
    if (message.content === '!Owner') {
    	message.reply('This Amazing Bot Developed and Made by IAmRockMH2#4980!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
