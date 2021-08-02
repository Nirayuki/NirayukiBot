const Discord = require('discord.js');
module.exports= {
    name: 'joken',
    description: 'Jogar jokenpo com seus amigos',
    execute(client, message) {
        const user = message.mentions.users.first()

        const joken = ['🗻', '📄', '✂️']

        function getNumber() {
            return Math.floor(Math.random() * 3)
        }

        if (!user) {
            const embed = new Discord.MessageEmbed()
                .setColor('#FFFFFF')
                .setTitle("Joken")
                .setAuthor('Nirayuki', 'https://cdn.discordapp.com/avatars/295607349652094977/1e1db24a040da737ad532aa9bb393b9d.png')
                .setDescription("Use esse comando para jogar Jokenpo!")
                .addFields([
                    {
                        name: "Como usar ?",
                        value: `\`\`~joken <usuário>\`\``
                    },
                    {
                        name: "**Exemplos**",
                        value: "⬇️"
                    },
                    {
                        name: `Você deve marcar a pessoa para jogar.`,
                        value: `\`\`~joken @Yukinira\`\``
                    },
                ])

            return message.channel.send(embed)
        }

        const filter = m => m.author.id === user.id && m.content.toLowerCase() === "joken";
        message.channel.send(`Por favor <@${user.id}> digite \`\`joken\`\`.`);
        message.channel.awaitMessages(filter, {max: 1}).then(collected => {

                const me_rn = getNumber()
                const you_rn = getNumber()
                const me = joken[me_rn];
                const you = joken[you_rn];

                // '🗻', '📄', '✂️'
                if((me === '🗻' && you === '✂️') || (me === '📄' && you === '🗻') || (me === '✂️' && you === '📄')){
                   return message.channel.send(`<@${message.author.id}> ganhou! | Resultado: ${message.author.username}: ${me} **vs** ${you} :${user.username}`)
                } 

                if((you === '🗻' && me === '✂️') || (you === '📄' && me === '🗻') || (you === '✂️' && me === '📄')){
                    return message.channel.send(`<@${user.id}> ganhou! | Resultado: ${user.username}: ${you} **vs** ${me} :${message.author.username}`)
                } 
                
                if((you === '🗻' && me === '🗻') || (you === '📄' && me === '📄') || (you === '✂️' && me === '✂️')){
                    return message.channel.send(`Empatou!!!! | Resultado: ${user.username}: ${you} **vs** ${me} :${message.author.username}`)
                }
        }).catch(err => {
            message.channel.send("Ocorreu um erro")
        })
        
    }
}