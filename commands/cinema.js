const Discord = require('discord.js');
module.exports = {
    name: 'cinema',
    async execute(client, message) {
        const user = message.mentions.users

        let cinema = [];

        const array = user.array()

        if (array.length < 1) {
            const embed = new Discord.MessageEmbed()
                .setColor('#FFFFFF')
                .setTitle("Cinema")
                .setAuthor('Nirayuki', 'https://cdn.discordapp.com/avatars/295607349652094977/1e1db24a040da737ad532aa9bb393b9d.png')
                .setDescription("Nesse comando, você pode marcar várias pessoas para decidir um filme. O bot vai esperar a resposta de 2 filmes e depois irá passar para a proxima pessoa.")
                .addFields([
                    {
                        name: "Como usar ?",
                        value: `\`\`~cinema <usuário>\`\``
                    },
                    {
                        name: "**Exemplos**",
                        value: "⬇️"
                    },
                    {
                        name: `Você deve marcar a pessoa para jogar.`,
                        value: `\`\`~cinema @Yukinira @Nira @João @José\`\``
                    },
                ])

            return message.channel.send(embed)
        }

       for(var i = 0; i < array.length; i++) {
            const filter = m => m.author.id === array[i].id
            message.channel.send(`<@${array[i].id}> digite o 1 filme`)
           await message.channel.awaitMessages(filter, {max: 1}).then(msgs => {

                const content = msgs.first()
                cinema.push({id: array[i].id, filme: content.content})
            });

            message.channel.send(`<@${array[i].id}> digite o 2 filme`)
            await message.channel.awaitMessages(filter, {max: 1}).then(msgs => {
                const content = msgs.first()
                cinema.push({id: array[i].id, filme: content.content})
            });

        }


        const rn = Math.floor(Math.random() * array.length) 


        message.channel.send(`O filme sorteado foi ${cinema[rn].filme} ganhou: <@${cinema[rn].id}>`)

    }
}