const Discrod = require('discord.js');

module.exports = {
    name: 'teste',
    execute(client, message) {
        console.log(message.channel.nsfw);
    }
}