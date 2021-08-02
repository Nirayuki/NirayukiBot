const Discord = require('discord.js');
module.exports = {
    name: 'stoping',
    execute(client, message) {
        message.reply("Comando em manutenção.")
        // client.msg.stop();
    }
}