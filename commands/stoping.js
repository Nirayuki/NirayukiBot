const Discord = require('discord.js');
module.exports = {
    name: 'stoping',
    execute(client, message) {
        client.msg.stop();
    }
}