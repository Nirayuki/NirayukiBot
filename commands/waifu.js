module.exports = {
    name: "waifu",
    description: 'Para ver se a pessoa é uma waifu',
    execute(client, message) {
        const Discord = require('discord.js');
        if (!message.content.startsWith(process.env.PREFIX)) {
            return
        }

        const user = message.mentions.users.first()
        const rn = Math.floor(Math.random() * 100)

        // if (!user) return message.channel.send("Por favor, mencione uma waifu.")

        if (!user) {
            const embed = new Discord.MessageEmbed()
                .setColor('#FFFFFF')
                .setTitle("Waifu")
                .setAuthor('Nirayuki', 'https://cdn.discordapp.com/avatars/295607349652094977/1e1db24a040da737ad532aa9bb393b9d.png')
                .setDescription("Use esse comando para ver se a pessoa é uma waifu")
                .addFields([
                    {
                        name: "Como usar ?",
                        value: `\`\`~waifu <usuário> [usuário]\`\``
                    },
                    {
                        name: "**Exemplos**",
                        value: "⬇️"
                    },
                    {
                        name: `Você deve marcar uma pessoa para ver se ela é sua waifu ou não.`,
                        value: `\`\`~waifu @Yukinira\`\``
                    },
                ])

            return message.channel.send(embed)
        }

        if (rn >= 50) {
            const count = Math.floor(Math.random() * 4) + 1

            const respostas = [
                { id: 1, description: `<:zerotwoheartlove:853203576897667112> **${user.username}** é a melhor waifu que existe || **Waifumetor: ${rn}%**` },
                { id: 2, description: `<:zerotwoheartlove:853203576897667112> **${user.username}** é a waifu do(a) **${message.author.username}** por favor se afastem!! || **Waifumetor: ${rn}%**` },
                { id: 3, description: `<:zerotwoheartlove:853203576897667112> **${user.username}** É top 1 do ranking mundial das melhores waifus || **Waifumetor: ${rn}%**` },
                { id: 4, description: `<:zerotwoheartlove:853203576897667112> Bah, ninguém bate de frente com **${user.username}** || **Waifumetor: ${rn}%**` },
                { id: 5, description: `<:zerotwoheartlove:853203576897667112> **${user.username}** é apenas a melhor de todas || **Waifumetor: ${rn}%**` },
            ]

            message.channel.send(respostas[count].description)
        } else {
            const count = Math.floor(Math.random() * 4) + 1

            const respostas = [
                { id: 1, description: `<:zerotwouhoh:853203576797397013> **${user.username}** essa aí não tem um pingo de waifu || **Waifumetor: ${rn}%**` },
                { id: 2, description: `<:zerotwouhoh:853203576797397013> **${user.username}** graças ao bom deus não é waifu do(a) **${message.author.username}** || **Waifumetor: ${rn}%**` },
                { id: 3, description: `<:zerotwouhoh:853203576797397013> **${user.username}** É top 1 do ranking mundial das piores waifus || **Waifumetor: ${rn}%**` },
                { id: 4, description: `<:zerotwouhoh:853203576797397013> Bah, ninguém quer ficar com a **${user.username}** || **Waifumetor: ${rn}%**` },
                { id: 5, description: `<:zerotwouhoh:853203576797397013> **${user.username}** É apenas a pior de todas!! || **Waifumetor: ${rn}%**` },
            ]

            message.channel.send(respostas[count].description)
        }
    }
}