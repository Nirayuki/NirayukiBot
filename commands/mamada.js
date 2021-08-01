
module.exports = {
    name: "mamada",
    description: 'Para dar aquela mamada em alguém',
    execute(client, message) {
        const Discord = require('discord.js');
        const user = message.mentions.users.first()
        if (!user) {
            const embed = new Discord.MessageEmbed()
                .setColor('#FFFFFF')
                .setTitle("Mamada")
                .setAuthor('Nirayuki', 'https://cdn.discordapp.com/avatars/295607349652094977/1e1db24a040da737ad532aa9bb393b9d.png')
                .setDescription("Use esse comando para mamar alguém que você gosta")
                .addFields([
                    {
                        name: "Como usar ?",
                        value: `\`\`~mamada <usuário> [usuário]\`\``
                    },
                    {
                        name: "**Exemplos**",
                        value: "⬇️"
                    },
                    {
                        name: `Você deve marcar a uma pessoa para dar aquela mamada.`,
                        value: `\`\`~mamada @Yukinira\`\``
                    },
                ])

            return message.channel.send(embed)
        }

        const embed = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .setDescription(`<@${message.author.id}> Mamou bem gostosinho <@${user.id}>`)
            .setImage('https://media1.tenor.com/images/240820b9f5ba01dd4c109d80ba64514d/tenor.gif?itemid=11019877')

        message.channel.send(embed)
    }

}
