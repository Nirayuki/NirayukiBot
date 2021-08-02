const Discord = require('discord.js');

module.exports = {
    name: 'velha',
    async execute(client, message){
        const user = message.mentions.users.first();


        message.channel.send(`| 1 | 2 | 3 |\n| 4 | 5 | 6 |\n| 7 | 8 | 9 |\n
        
        `);
    }
}