const Discord = require('discord.js');

module.exports = {
    name: 'kiss',
    description: 'Manda essa para dar um beijão no seu amo',
    execute(client, message) {
        const kiss = [
            { link: 'https://media1.tenor.com/images/3d56f6ef81e5c01241ff17c364b72529/tenor.gif?itemid=13843260' },
            { link: 'https://media1.tenor.com/images/503bb007a3c84b569153dcfaaf9df46a/tenor.gif?itemid=17382412' },
            { link: 'https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865' },
            { link: 'https://media1.tenor.com/images/f102a57842e7325873dd980327d39b39/tenor.gif?itemid=12392648' },
            { link: 'https://media1.tenor.com/images/02d9cae34993e48ab5bb27763d5ca2fa/tenor.gif?itemid=4874618' },
            { link: 'https://media1.tenor.com/images/621ceac89636fc46ecaf81824f9fee0e/tenor.gif?itemid=4958649' },
            { link: 'https://media1.tenor.com/images/ba1841e4aeb5328e41530d3289616f46/tenor.gif?itemid=14240425' },
            { link: 'https://media1.tenor.com/images/558f63303a303abfdddaa71dc7b3d6ae/tenor.gif?itemid=12879850' },
            { link: 'https://media1.tenor.com/images/d5a3f43f9b2ed8900834607d59916a9c/tenor.gif?itemid=13516822' },
            { link: 'https://media1.tenor.com/images/30535c19fb2eb9ee1c45daaf2cb87fd1/tenor.gif?itemid=17845610' },
            { link: 'https://media1.tenor.com/images/37ceeaa82fb503fb10bbd539ad4e3fd8/tenor.gif?itemid=16477767' },
            { link: 'https://media1.tenor.com/images/85ae811b41326a6138677b4293d4c0d8/tenor.gif?itemid=10824318' },
            { link: 'https://media1.tenor.com/images/83ef75f5940f5fd6918228c24d3bceca/tenor.gif?itemid=22408718' },
            { link: 'https://media1.tenor.com/images/693602b39a071644cebebdce7c459142/tenor.gif?itemid=6206552' },
            { link: 'https://media1.tenor.com/images/7dd0ca2d6a37361aa8a7760aec8db364/tenor.gif?itemid=18504614' },
            { link: 'https://media1.tenor.com/images/6eeb17e94ceeeb6cff793326db0c33b8/tenor.gif?itemid=17893716' },
            { link: 'https://media1.tenor.com/images/ad514e809adc14f0b7722a324c2eb36e/tenor.gif?itemid=14375355' },
            { link: 'https://media1.tenor.com/images/d21356553d5ac843bedb5cc1a3971da4/tenor.gif?itemid=13337668' },
            { link: 'https://media1.tenor.com/images/d1a11805180742c70339a6bfd7745f8d/tenor.gif?itemid=4883557' },
            { link: 'https://media1.tenor.com/images/37889be53ab8bee0bb9cb38a333fbf3e/tenor.gif?itemid=14375361' },
            { link: 'https://cdn.discordapp.com/attachments/805639782352289802/871431808800129164/c5243a46b7fa99f44c1b68726631e141.gif' },
            
        ]

        function getCount() {
            return Math.floor(Math.random() * 21)
        }


        const target = message.mentions.users.first()
        if (!target) {
            const embed = new Discord.MessageEmbed()
                .setColor('#FFFFFF')
                .setTitle("Kiss")
                .setAuthor('Nirayuki', 'https://cdn.discordapp.com/avatars/295607349652094977/1e1db24a040da737ad532aa9bb393b9d.png')
                .setDescription("Use esse comando para beijar alguém")
                .addFields([
                    {
                        name: "Como usar ?",
                        value: `\`\`~kiss <usuário> [usuário]\`\``
                    },
                    {
                        name: "**Exemplos**",
                        value: "⬇️"
                    },
                    {
                        name: `Você deve marcar a uma pessoa para dar aquele beijo.`,
                        value: `\`\`~kiss @Yukinira\`\``
                    },
                ])
                

            return message.channel.send(embed)
        }

        message.channel.send("Comando está em manutenção")

    //     const math = getCount()

    //     const embed = new Discord.MessageEmbed()
    //         .setColor('#FFFFFF')
    //         .setDescription(`<:kimochi:813877016742723595> <@${message.author.id}> Beijou bem gostosinho <@${target.id}>`)
    //         .setImage(kiss[math].link)
    //         .setFooter("🔀 Clique para retribuir")

    //     message.channel.send({ embed: embed }).then(embedMessage => {
    //         embedMessage.react("🔀");

    //         message.client.on('messageReactionAdd', (reaction, user) => {
    //             if ((!user.bot) && (user.id === target.id) && (reaction.emoji.name === "🔀")) {
    //                 const math = getCount()

    //                 const embed = new Discord.MessageEmbed()
    //                     .setColor('#FFFFFF')
    //                     .setDescription(`<:kimochi:813877016742723595> <@${target.id}> retribuiu bem gostosinho <@${message.author.id}>`)
    //                     .setImage(kiss[math].link)

    //                     message.channel.send(`<@${message.author.id}> você recebeu um beijão`,embed);
    //             }
    //         })
    //     });
    }
}