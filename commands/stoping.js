const Discord = require('discord.js');
module.exports = {
    name: 'stoping',
    execute(client, message) {

        const member = message.guild.member(message.author)
        if (member.hasPermission('ADMINISTRATOR')) {
            client.msg.stop();
        } else {
            message.reply("Você não tem permissão de administrador.")
        }

        
    }
}