const Discord = require('discord.js');
const pagination = require('discord.js-pagination');

module.exports = {
    name: "help",
    description: 'Mostras os comandos atuais',
    async execute(client, message) {
        
        
        const author = message.author;
        const page1 = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .setTitle('Prefix: ~')
            .setAuthor('Nirayuki', 'https://cdn.discordapp.com/avatars/295607349652094977/1e1db24a040da737ad532aa9bb393b9d.png')
            .setDescription(`Qualquer duvida entre em contato com Nira#8054`)
            .addFields([
                {
                    name: "time",
                    value: "Mostra a hora e data para você"
                },
                {
                    name: "ping",
                    value: "Pong!"
                },
                {
                    name: "ship",
                    value: "Para verificar seu web amor"
                },
                {
                    name: "waifu",
                    value: "Para verificar sua web waifu"
                },
            ])
            .setThumbnail(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`)
            .setTimestamp()
            .setFooter('With ❤ by Nira#8054', 'https://imgur.com/bmkIYv4.png');

        const page2 = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .setAuthor('Nirayuki', 'https://cdn.discordapp.com/avatars/295607349652094977/1e1db24a040da737ad532aa9bb393b9d.png')
            .setDescription(`Qualquer duvida entre em contato com Nira#8054`)
            .addFields([
                {
                    name: "cantada",
                    value: "Para dar aquela cantada no crush"
                },
                {
                    name: "mamada",
                    value: "Para dar aquela mamada no crush"
                },
                {
                    name: "joken",
                    value: "Para jogar Jokenpo com seus amigos!"
                },
                {
                    name: "hug",
                    value: "Para abaraçar seus amigos!"
                },
                
            ])
            .setThumbnail(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`)
            .setTimestamp()
            .setFooter('With ❤ by Nira#8054', 'https://imgur.com/bmkIYv4.png');

        const page3 = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .setAuthor('Nirayuki', 'https://cdn.discordapp.com/avatars/295607349652094977/1e1db24a040da737ad532aa9bb393b9d.png')
            .setDescription(`Qualquer duvida entre em contato com Nira#8054`)
            .addFields([
                // {
                //     name: '!leave',
                //     value: "Para o reprodução e saí do canal de voz"
                // },
                // {
                //     name: "!resetqueue",
                //     value: "Limpa a queue de reprodução"
                // },
                // {
                //     name: '!play <url youtube>',
                //     value: "Reprodiz o audio do vídeo requisitado no canal de voz"
                // },
                {
                    name: "Ping",
                    value: "Para pingar alguém a cada 6s"
                },
                {
                    name: "Stoping",
                    value: "Para parar os ping"
                },
                {
                    name: "Slap",
                    value: "Da um tapão na pessoa"
                },
                {
                    name: "Cinema",
                    value: "Comando para sortear um filme."
                }
            ])
            .setThumbnail(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`)
            .setTimestamp()
            .setFooter('With ❤ by Nira#8054', 'https://imgur.com/bmkIYv4.png');

            const page4 = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .setAuthor('Nirayuki', 'https://cdn.discordapp.com/avatars/295607349652094977/1e1db24a040da737ad532aa9bb393b9d.png')
            .setDescription(`Qualquer duvida entre em contato com Nira#8054`)
            .addFields([
                {
                    name: "Em construção...",
                    value: "Novos comandos em breve!"
                }
            ])
            .setThumbnail(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`)
            .setTimestamp()
            .setFooter('With ❤ by Nira#8054', 'https://imgur.com/bmkIYv4.png');


        const pages = [
            page1,
            page2,
            page3,
            page4,
        ]

        const emoji = ["◀️", "▶️"]
        const timeout = '30000'

        pagination(message, pages, emoji, timeout)
    }

}
