const Canvas = require('canvas');
const Discord = require('discord.js');

module.exports = {
    name: "ship",
    description: 'Para shippar aquela pessoa que você gosta',
    async execute(client, message) {

        const user = message.mentions.users.first()
        const rn = Math.floor(Math.random() * 99) + 1

        // if (!user) return message.channel.send("Por favor, mencione uma pessoa.")

        if (!user) {
            const embed = new Discord.MessageEmbed()
                .setColor('#FFFFFF')
                .setTitle("Ship")
                .setAuthor('Nirayuki', 'https://cdn.discordapp.com/avatars/295607349652094977/1e1db24a040da737ad532aa9bb393b9d.png')
                .setDescription("Use esse comando para testar sua sorte no amor")
                .addFields([
                    {
                        name: "Como usar ?",
                        value: `\`\`~ship <usuário> [usuário]\`\``
                    },
                    {
                        name: "**Exemplos**",
                        value: "⬇️"
                    },
                    {
                        name: `Você deve marcar uma pessoa para testar o seu webamor.`,
                        value: `\`\`~ship @Yukinira\`\``
                    },
                ])

            return message.channel.send(embed)
        }

        const canvas = Canvas.createCanvas(580, 200)
        const ctx = canvas.getContext("2d")

        const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'png' }))
        ctx.drawImage(avatar, 10, 0, 200, 200)

        const userAvatar = await Canvas.loadImage(user.displayAvatarURL({ format: "png" }))
        ctx.drawImage(userAvatar, 360, 0, 200, 200)

        const heart = await Canvas.loadImage('https://cdn.discordapp.com/attachments/805639782352289802/870796701340938260/unknown.png')
        const broken = await Canvas.loadImage('https://cdn.discordapp.com/attachments/805639782352289802/870797785526566952/unknown.png')



        if (user.id === "630205563480965140" || user.id === "788244423921893387") {
            // getDuda()
            ctx.drawImage(heart, 150, 25, 150, 150)
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'love.png')
            const embed = new Discord.MessageEmbed()
                .setColor('#FFFFFF')
                .setDescription(`💕 ${message.author.username} + ${user.username} = 100% 💕`)
                .attachFiles(attachment)
                .setImage(`attachment://love.png`)
            return message.channel.send(embed)
            // return message.channel.send(`💕 ${message.author.username} + ${user.username} = 100% 💕`, attach)

        } else {

            if (rn >= 50) {

                ctx.drawImage(heart, 210, 25, 150, 150)
                const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'love.png')
                const embed = new Discord.MessageEmbed()
                    .setColor('#FFFFFF')
                    .setDescription(`💕 ${message.author.username} + ${user.username} = ${rn}% 💕`)
                    .attachFiles(attachment)
                    .setImage(`attachment://love.png`)
                return message.channel.send(embed)
                // return message.channel.send(`💕 ${message.author.username} + ${user.username} = ${rn}% 💕`, attach)

            } else {

                ctx.drawImage(broken, 205, 25, 150, 150)
                const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'love.png')
                const embed = new Discord.MessageEmbed()
                    .setColor('#FFFFFF')
                    .setDescription(`💔 ${message.author.username} + ${user.username} = ${rn}% 💔`)
                    .attachFiles(attachment)
                    .setImage(`attachment://love.png`)
                return message.channel.send(`<@${user.id}>`, embed)
                // return message.channel.send(`💔 ${message.author.username} + ${user.username} = ${rn}% 💔`, attach)

            }
        }
    }
}