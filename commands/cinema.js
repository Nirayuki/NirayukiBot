module.exports = {
    name: 'cinema',
    async execute(client, message) {
        const user = message.mentions.users

        let cinema = [];

        const array = user.array()

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