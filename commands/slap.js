const Discord = require('discord.js');
module.exports = {
    name: 'slap',
    execute(client, message) {
        const slap = [
            {link: 'https://media1.tenor.com/images/74db8b0b64e8d539aebebfbb2094ae84/tenor.gif?itemid=15144612'},
            {link: 'https://media1.tenor.com/images/b7a844cc66ca1c6a4f06c266646d070f/tenor.gif?itemid=17423278'},
            {link: 'https://media1.tenor.com/images/a9b8bd2060d76ec286ec8b4c61ec1f5a/tenor.gif?itemid=17784858'},
            {link: 'https://media1.tenor.com/images/47ac5507e827fa6a49a1aff6b070c3eb/tenor.gif?itemid=13278667'},
            {link: 'https://media1.tenor.com/images/c159cd1d7e7424cf9fd6fbdb09919146/tenor.gif?itemid=14179570'},
            {link: 'https://media1.tenor.com/images/416ce127ae441cff2825ce2b992df736/tenor.gif?itemid=17342897'},
            {link: 'https://media1.tenor.com/images/e8f880b13c17d61810ac381b2f6a93c3/tenor.gif?itemid=17897236'},
            {link: 'https://media1.tenor.com/images/153b2f1bfd3c595c920ce60f1553c5f7/tenor.gif?itemid=10936993'},
            {link: 'https://media1.tenor.com/images/f7f0d538542373e7e5366b281d3772e7/tenor.gif?itemid=17303228'},
            {link: 'https://media1.tenor.com/images/ad8b8470667bc1174e3cc9e4fe985642/tenor.gif?itemid=22498671'},
            {link: 'https://media1.tenor.com/images/1ae0a42059d8ad64a0345e93313dfc91/tenor.gif?itemid=21281337'},
            {link: 'https://media1.tenor.com/images/fa27c3efd19fb6b9ffbffcb77607b169/tenor.gif?itemid=20425341'},
            {link: 'https://media1.tenor.com/images/0a49fd8c8f720cc857bcb921a6322ed3/tenor.gif?itemid=20220790'},
            {link: 'https://media1.tenor.com/images/514b3df851271a4152fc81fbbf27d158/tenor.gif?itemid=22321835'},
            {link: 'https://media1.tenor.com/images/358986720d4b533a49bdb67cbc4fe3e5/tenor.gif?itemid=14179582'},
        ]

        function getCount(){
            return Math.floor(Math.random() * 15)
        }

        
        const target = message.mentions.users.first()
        if (!target) {
            const embed = new Discord.MessageEmbed()
                .setColor('#FFFFFF')
                .setTitle("Kiss")
                .setAuthor('Nirayuki', 'https://cdn.discordapp.com/avatars/295607349652094977/1e1db24a040da737ad532aa9bb393b9d.png')
                .setDescription("Use esse comando para dar um tapão")
                .addFields([
                    {
                        name: "Como usar ?",
                        value: `\`\`~slap <usuário> [usuário]\`\``
                    },
                    {
                        name: "**Exemplos**",
                        value: "⬇️"
                    },
                    {
                        name: `Você deve marcar a uma pessoa para dar um tapão.`,
                        value: `\`\`~slap @Yukinira\`\``
                    },
                ])

            return message.channel.send(embed)
        }

        const math = getCount()

        const embed = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .setDescription(`<:kimochi:813877016742723595> <@${message.author.id}> Deu um tapão em <@${target.id}>`)
            .setImage(slap[math].link)
            .setFooter("🔀 Clique para retribuir")

            message.channel.send({ embed: embed }).then(embedMessage => {
                embedMessage.react("🔀");
    
                message.client.on('messageReactionAdd', (reaction, user) => {
                    console.log(user.id, target.id);
                    if ((!user.bot) && (user.id === target.id) && (reaction.emoji.name === "🔀")) {
                        const math = getCount()
    
                        const embed = new Discord.MessageEmbed()
                            .setColor('#FFFFFF')
                            .setDescription(`<:kimochi:813877016742723595> <@${target.id}> retribuiu o tapão <@${message.author.id}>`)
                            .setImage(slap[math].link)
    
                            message.channel.send(embed);
                    }
                })
            });
    }
}