const Discord = require('discord.js');
module.exports = {
    name: 'hug',
    execute(client, message) {
        const hug = [
            {link: 'https://media1.tenor.com/images/78d3f21a608a4ff0c8a09ec12ffe763d/tenor.gif?itemid=16509980'},
            {link: 'https://media1.tenor.com/images/5845f40e535e00e753c7931dd77e4896/tenor.gif?itemid=9920978'},
            {link: 'https://media1.tenor.com/images/506aa95bbb0a71351bcaa753eaa2a45c/tenor.gif?itemid=7552075'},
            {link: 'https://media1.tenor.com/images/4db088cfc73a5ee19968fda53be6b446/tenor.gif?itemid=14637016'},
            {link: 'https://media1.tenor.com/images/e58eb2794ff1a12315665c28d5bc3f5e/tenor.gif?itemid=10195705'},
            {link: 'https://media1.tenor.com/images/ee3c3831a62667dc84ec4149a1651d8b/tenor.gif?itemid=14924015'},
            {link: 'https://media1.tenor.com/images/b77fd0cfd95f89f967be0a5ebb3b6c6a/tenor.gif?itemid=7864716'},
            {link: 'https://media1.tenor.com/images/b7487d45af7950bfb3f7027c93aa49b1/tenor.gif?itemid=9882931'},
            {link: 'https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif?itemid=7552093'},
            {link: 'https://media1.tenor.com/images/3ee30e7a472efe430502d08b993dc79b/tenor.gif?itemid=12668673'},
            {link: 'https://media1.tenor.com/images/3a914d34db5a609efcf7150cd6fe16c4/tenor.gif?itemid=7274071'},
            {link: 'https://media1.tenor.com/images/44b4b9d5e6b4d806b6bcde2fd28a75ff/tenor.gif?itemid=9383138'},
            {link: 'https://media1.tenor.com/images/aeb42019b0409b98aed663f35b613828/tenor.gif?itemid=14108949'},
            {link: 'https://media1.tenor.com/images/40aed63f5bc795ed7a980d0ad5c387f2/tenor.gif?itemid=11098589'},
            {link: 'https://media1.tenor.com/images/edea458dd2cbc76b17b7973a0c23685c/tenor.gif?itemid=13041472'},
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
                .setDescription("Use esse comando para abraçar alguém")
                .addFields([
                    {
                        name: "Como usar ?",
                        value: `\`\`~hug <usuário> [usuário]\`\``
                    },
                    {
                        name: "**Exemplos**",
                        value: "⬇️"
                    },
                    {
                        name: `Você deve marcar a uma pessoa para dar aquele beijo.`,
                        value: `\`\`~hug @Yukinira\`\``
                    },
                ])

            return message.channel.send(embed)
        }

        const math = getCount()

        const embed = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .setDescription(`<:kimochi:813877016742723595> <@${message.author.id}> Abraçou bem gostosinho <@${target.id}>`)
            .setImage(hug[math].link)
            .setFooter("🔀 Clique para retribuir")

            message.channel.send({ embed: embed }).then(embedMessage => {
                embedMessage.react("🔀");
    
                message.client.on('messageReactionAdd', (reaction, user) => {
                    console.log(user.id, target.id);
                    if ((!user.bot) && (user.id === target.id) && (reaction.emoji.name === "🔀")) {
                        const math = getCount()
    
                        const embed = new Discord.MessageEmbed()
                            .setColor('#FFFFFF')
                            .setDescription(`<:kimochi:813877016742723595> <@${target.id}> retribuiu bem gostosinho <@${message.author.id}>`)
                            .setImage(hug[math].link)
    
                            message.channel.send(embed);
                    }
                })
            });
    }
}