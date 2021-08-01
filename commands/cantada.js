
module.exports = {
    name: "cantada",
    description: 'Para dar aquela cantada em alguém',
    execute(client, message) {
        const Discord = require('discord.js');
        if (!message.content.startsWith(process.env.PREFIX)) {
            return
        }



        const user = message.mentions.users.first()
        const rn = Math.floor(Math.random() * 21)

        // if (!user) return message.channel.send("Por favor, mencione um crush.")

        if (!user) {
            const embed = new Discord.MessageEmbed()
                .setColor('#FFFFFF')
                .setTitle("Cantada")
                .setAuthor('Nirayuki', 'https://cdn.discordapp.com/avatars/295607349652094977/1e1db24a040da737ad532aa9bb393b9d.png')
                .setDescription("Use esse comando para dar aquela cantada")
                .addFields([
                    {
                        name: "Como usar ?",
                        value: `\`\`~cantada <usuário> [usuário]\`\``
                    },
                    {
                        name: "**Exemplos**",
                        value: "⬇️"
                    },
                    {
                        name: `Você deve marcar a uma pessoa para dar a cantada.`,
                        value: `\`\`~cantada @Yukinira\`\``
                    },
                ])

            return message.channel.send(embed)
        }

        const respostas = [
            {description: `<@${user.id}> Quando você for casar, me convida para ser o noivo?` },
            {description: `<@${user.id}> Você é doceira? Queria encomendar uns beijinhos.` },
            {description: `<@${user.id}> Gata, me dê seu currículo porque hoje vou te dar trabalho.` },
            {description: `<@${user.id}> Gata, me chame de Tarzan e segure no meu cipó.` },
            {description: `<@${user.id}> Gata seu pai e pirata? Então porque ele esconde um tesouro desse em casa.` },
            {description: `<@${user.id}> Gata, meu nome é Arnaldo, mas pode me chamar de Naldo, pois quando eu te vi perdi o ar.` },
            {description: `<@${user.id}> Não sou casas Bahia mas minha dedicação é total a você.` },
            {description: `<@${user.id}> Você é o prego que falta na minha havaianas.` },
            {description: `<@${user.id}> Me chame de juiz que hoje estou querendo resolver nosso caso na vara.` },
            {description: `<@${user.id}> Gata, me chame de capeta e deixe eu te possuir.` },
            {description: `<@${user.id}> Me chama de Estados Unidos e me USA.` },
            {description: `<@${user.id}> Você não é GPS quebrado mas me deixa sem rumo.` },
            {description: `<@${user.id}> Me chama de previsão do tempo e diz que tá rolando um clima.` },
            {description: `<@${user.id}> Me chama de órgãos vitais e diz que sem mim você não vive.` },
            {description: `<@${user.id}> Me chama de sedex 10 que eu me entrego pra você até as 9 da manhã do dia seguinte.` },
            {description: `<@${user.id}> E aí gata, tá faltando o quê para a gente ficar? Uma atitude minha ou um sorriso seu?` },
            {description: `<@${user.id}> Você gosta de estrelas?  Sim, por quê? Porque conheço um lugar que tem cinco.` },
            {description: `<@${user.id}> Gata, fiquei sabendo que o bife não gosta de você.` },
            {description: `<@${user.id}> Oi?  É que ouvi dizer que o bife é contra filé.` },
            {description: `<@${user.id}> Me chame de receita federal e se declare para mim, sua linda!` },
            {description: `<@${user.id}> Me joga na parede e me chama de lagartixa.` },
        ]

        message.channel.send(respostas[rn].description);
    }
}


