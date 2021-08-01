module.exports = {
    name: "ship",
    description: 'Para shippar aquela pessoa que você gosta',
    execute(client, message) {
        const Canvas = require('canvas');
        const Discord = require('discord.js');
        if (!message.content.startsWith(process.env.PREFIX)) {
            return
        }
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

        async function getCanva(props) {
            const canvas = Canvas.createCanvas(700, 250)
            const ctx = canvas.getContext("2d")

            const bg = await Canvas.loadImage("https://cdn.discordapp.com/attachments/716216765448978504/858442843197669376/PElrfiWeuvQ.png")
            ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)

            const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'png' }))
            ctx.drawImage(avatar, 70, 25, 200, 200)

            const userAvatar = await Canvas.loadImage(user.displayAvatarURL({ format: "png" }))
            ctx.drawImage(userAvatar, 430, 25, 200, 200)

            const heart = await Canvas.loadImage('https://cdn.discordapp.com/attachments/805639782352289802/870796701340938260/unknown.png')
            const broken = await Canvas.loadImage('https://cdn.discordapp.com/attachments/805639782352289802/870797785526566952/unknown.png')




            if (props) {
                ctx.drawImage(heart, 275, 60, 150, 150)
                const attach = new Discord.MessageAttachment(canvas.toBuffer(), 'love.png')
                return message.channel.send(`💕 ${message.author.username} + ${user.username} = ${rn}% 💕`, attach)
            } else {
                ctx.drawImage(broken, 275, 60, 150, 150)
                const attach = new Discord.MessageAttachment(canvas.toBuffer(), 'love.png')
                return message.channel.send(`💔 ${message.author.username} + ${user.username} = ${rn}% 💔`, attach)
            }



        }

        async function getDuda() {
            const canvas = Canvas.createCanvas(700, 250)
            const ctx = canvas.getContext("2d")

            const bg = await Canvas.loadImage("https://cdn.discordapp.com/attachments/716216765448978504/858442843197669376/PElrfiWeuvQ.png")
            ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)

            const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'png' }))
            ctx.drawImage(avatar, 70, 25, 200, 200)

            const userAvatar = await Canvas.loadImage(user.displayAvatarURL({ format: "png" }))
            ctx.drawImage(userAvatar, 430, 25, 200, 200)

            const heart = await Canvas.loadImage('https://cdn.discordapp.com/attachments/805639782352289802/870796701340938260/unknown.png')
            const broken = await Canvas.loadImage('https://cdn.discordapp.com/attachments/805639782352289802/870797785526566952/unknown.png')

            ctx.drawImage(heart, 275, 60, 150, 150)
            const attach = new Discord.MessageAttachment(canvas.toBuffer(), 'love.png')
            return message.channel.send(`💕 ${message.author.username} + ${user.username} = 100% 💕`, attach)
        }

        if (user.id === "630205563480965140" || user.id === "788244423921893387") {
            getDuda()
        } else {
            if (rn >= 50) {
                getCanva(true)
            } else {
                getCanva(false)
            }
        }

        // if (rn >= 50) {
        //     getCanva(true)
        // } else {
        //     getCanva(false)
        // }
    }
}