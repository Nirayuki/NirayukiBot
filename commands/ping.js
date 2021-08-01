const Discord = require('discord.js');
const cron = require('cron');
module.exports = {
    name: 'ping',
    execute(client, message) {
        const user = message.mentions.users.first()

        if (!user) {
            const embed = new Discord.MessageEmbed()
                .setColor('#FFFFFF')
                .setTitle("Ping")
                .setAuthor('Nirayuki', 'https://cdn.discordapp.com/avatars/295607349652094977/1e1db24a040da737ad532aa9bb393b9d.png')
                .setDescription("Use isso para chamar a atenção de alguém")
                .addFields([
                    {
                        name: "Como usar ?",
                        value: `\`\`~ping <usuário> [usuário]\`\``
                    },
                    {
                        name: "**Exemplos**",
                        value: "⬇️"
                    },
                    {
                        name: `Marque uma pessoa para chamar a atenção.`,
                        value: `\`\`~ping @Yukinira\`\``
                    },
                ])

            return message.channel.send(embed)
        }

        let msg = new cron.CronJob('*/6 * * * * *', () => {
            message.channel.send(`<@${user.id}>`)
            .then(mesg => {
                setTimeout(() => mesg.delete(), 1000)
            })
            .catch()
        })
        
        client.msg = msg;

        client.msg.start()
        
    }
}