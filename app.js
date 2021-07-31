const Discord = require("discord.js");
const ytdl = require("ytdl-core-discord");
const cron = require('cron');
const Canvas = require('canvas');
require('dotenv/config');

const client = new Discord.Client();
let counter = {};
let queue = [];


async function playQueue(connection) {
    connection.play(await ytdl(queue[0]), { type: 'opus' }).on("finish", () => {
        console.log(queue)
        queue = queue.filter(song => song != queue[0])
        if (queue.length > 0) {
            playQueue(connection);
        }
    });
}


client.once('ready', () => {
    client.user.setActivity('~help');
    console.log('Iniciado com sucesso!');
});

function emoji(id) {
    return client.emojis.get(id).toString();
}




client.on('message', message => {

    if (message.content.toLowerCase() === 'fofa') {
        message.channel.send("😳");
    }

    if (message.content.toLowerCase() === 'aron') {
        message.channel.send(`Não, porfavor <:xorast:827327454644666378>`);
    }

    if (message.content.toLowerCase() === 'novato') {
        message.channel.send(`Sim, apenas isso... <:pxico:826431319255941150>`);
    }

    try {

        const prefix = process.env.PREFIX;
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const arguments = message.content.slice(prefix.length).trim().split(' ');
        const command = arguments.shift().toLowerCase();

        if (command === "play") {
            const voice = message.member.voice;
            const URL = arguments[0];

            if (!voice.channelID) {
                message.reply("É preciso estar em um canal de voz para utilizar esse comando.");
                return;
            }

            if (!URL) {
                message.reply("É preciso enviar a URL do vídeo para ser reproduzido");
                return;
            }

            if (!queue[0]) {
                queue.push(URL);
                console.log(queue);
                voice.channel.join().then((connection) => {
                    try {
                        playQueue(connection);
                    } catch (ex) {
                        message.reply("Erro ao reproduzir mídia");
                        console.error(ex);
                    }
                });
            } else {
                queue.push(URL);
                console.log(queue);
            }
        }

        if (command === "leave") {
            const voice = message.member.voice;

            if (!voice.channelID) {
                message.reply("É preciso estar em um canal de voz para utilizar esse comando.");
                return;
            }

            voice.channel.leave();
        }

        if (command === "resetqueue") {
            console.log("Resetando queue");
            const voice = message.member.voice;

            if (!voice.channelID) {
                message.reply("É preciso estar em um canal de voz para utilizar esse comando.");
                return;
            }

            queue.forEach(() => {
                queue.pop();
            })

            message.reply("Queue resetada.");
            voice.channel.leave();
        }

        if (command === "ping") {
            message.reply("Pong!");
        }

        if (command === "time") {
            const data = new Date;
            const dia = data.getDate();
            const hora = data.getHours();
            const minuto = data.getMinutes();
            const mes = data.getMonth();
            const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
            message.reply(`Hoje é dia ${dia} de ${meses[mes]} e são ${hora} hora(s) e ${minuto} minuto(s)`);
        }

        if (command === "help") {
            const author = message.author;
            const exampleEmbed = new Discord.MessageEmbed()
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
                    {
                        name: "cantada",
                        value: "Para dar aquela cantada no crush"
                    },
                    {
                        name: "mamada",
                        value: "Para dar aquela mamada no crush"
                    },
                    {
                        name: '!play <url youtube>',
                        value: "Reprodiz o audio do vídeo requisitado no canal de voz"
                    },
                    {
                        name: '!leave',
                        value: "Para o reprodução e saí do canal de voz"
                    },
                    {
                        name: "!resetqueue",
                        value: "Limpa a queue de reprodução"
                    },
                    {
                        name: "Em construção...",
                        value: "Novos comandos em breve!"
                    }
                ])
                .setThumbnail(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`)
                .setTimestamp()
                .setFooter('With ❤ by Nira', 'https://imgur.com/bmkIYv4.png');

            message.channel.send(exampleEmbed);
        }

        if (command === "teste") {
            const Embed = new Discord.MessageEmbed()
                .setImage(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`)

            message.channel.send(Embed);

        }

        if(command === "mamada") {
            const user = message.mentions.users.first()

            if (!user) {
                const embed = new Discord.MessageEmbed()
                    .setColor('#FFFFFF')
                    .setTitle("Mamada")
                    .setAuthor('Nirayuki', 'https://cdn.discordapp.com/avatars/295607349652094977/1e1db24a040da737ad532aa9bb393b9d.png')
                    .setDescription("Use esse comando para mamar alguém que você gosta")
                    .addFields([
                        {
                            name: "Como usar ?",
                            value: `\`\`~mamada <usuário> [usuário]\`\``
                        },
                        {
                            name: "**Exemplos**",
                            value: "⬇️"
                        },
                        {
                            name: `Você deve marcar a uma pessoa para dar aquela mamada.`,
                            value: `\`\`~mamada @Yukinira\`\``
                        },
                    ])

                    return message.channel.send(embed)
            }

            const embed = new Discord.MessageEmbed()
                .setColor('#FFFFFF')
                .setDescription(`<@${message.author.id}> Mamou bem gostosinho <@${user.id}>`)
                .setImage('https://media1.tenor.com/images/240820b9f5ba01dd4c109d80ba64514d/tenor.gif?itemid=11019877')

            message.channel.send(embed)
        }

        if(command === "cantada") {
            if (!message.content.startsWith(process.env.PREFIX)) {
                return
            }

            

            const user = message.mentions.users.first()
            const rn = Math.floor(Math.random() * 9) + 1

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
                {id: 1, description: `<@${user.id}> Quando você for casar, me convida para ser o noivo?`},
                {id: 2, description: `<@${user.id}> Você é doceira? Queria encomendar uns beijinhos.`},
                {id: 3, description: `<@${user.id}> Gata, me dê seu currículo porque hoje vou te dar trabalho.`},
                {id: 4, description: `<@${user.id}> Gata, me chame de Tarzan e segure no meu cipó.`},
                {id: 5, description: `<@${user.id}> Gata seu pai e pirata? Então porque ele esconde um tesouro desse em casa.`},
                {id: 6, description: `<@${user.id}> Gata, meu nome é Arnaldo, mas pode me chamar de Naldo, pois quando eu te vi perdi o ar.`},
                {id: 7, description: `<@${user.id}> Não sou casas Bahia mas minha dedicação é total a você.`},
                {id: 8, description: `<@${user.id}> Você é o prego que falta na minha havaianas.`},
                {id: 9, description: `<@${user.id}> Me chame de juiz que hoje estou querendo resolver nosso caso na vara.`},
                {id: 10, description: `<@${user.id}> Gata, me chame de capeta e deixe eu te possuir.`},
            ]

            message.channel.send(respostas[rn].description);
        }

        if (command === "waifu") {
            if (!message.content.startsWith(process.env.PREFIX)) {
                return
            }

            const user = message.mentions.users.first()
            const rn = Math.floor(Math.random() * 99) + 1

            // if (!user) return message.channel.send("Por favor, mencione uma waifu.")

            if (!user) {
                const embed = new Discord.MessageEmbed()
                    .setColor('#FFFFFF')
                    .setTitle("Waifu")
                    .setAuthor('Nirayuki', 'https://cdn.discordapp.com/avatars/295607349652094977/1e1db24a040da737ad532aa9bb393b9d.png')
                    .setDescription("Use esse comando para ver se a pessoa é uma waifu")
                    .addFields([
                        {
                            name: "Como usar ?",
                            value: `\`\`~waifu <usuário> [usuário]\`\``
                        },
                        {
                            name: "**Exemplos**",
                            value: "⬇️"
                        },
                        {
                            name: `Você deve marcar uma pessoa para ver se ela é sua waifu ou não.`,
                            value: `\`\`~waifu @Yukinira\`\``
                        },
                    ])

                    return message.channel.send(embed)
            }

            if (rn >= 50) {
                const count = Math.floor(Math.random() * 4) + 1

                const respostas = [
                    { id: 1, description: `<:zerotwoheartlove:853203576897667112> **${user.username}** é a melhor waifu que existe || **Waifumetor: ${rn}%**` },
                    { id: 2, description: `<:zerotwoheartlove:853203576897667112> **${user.username}** é a waifu do(a) **${message.author.username}** por favor se afastem!! || **Waifumetor: ${rn}%**` },
                    { id: 3, description: `<:zerotwoheartlove:853203576897667112> **${user.username}** É top 1 do ranking mundial das melhores waifus || **Waifumetor: ${rn}%**` },
                    { id: 4, description: `<:zerotwoheartlove:853203576897667112> Bah, ninguém bate de frente com **${user.username}** || **Waifumetor: ${rn}%**` },
                    { id: 5, description: `<:zerotwoheartlove:853203576897667112> **${user.username}** é apenas a melhor de todas || **Waifumetor: ${rn}%**` },
                ]

                message.channel.send(respostas[count].description)
            } else {
                const count = Math.floor(Math.random() * 4) + 1

                const respostas = [
                    { id: 1, description: `<:zerotwouhoh:853203576797397013> **${user.username}** essa aí não tem um pingo de waifu || **Waifumetor: ${rn}%**` },
                    { id: 2, description: `<:zerotwouhoh:853203576797397013> **${user.username}** graças ao bom deus não é waifu do(a) **${message.author.username}** || **Waifumetor: ${rn}%**` },
                    { id: 3, description: `<:zerotwouhoh:853203576797397013> **${user.username}** É top 1 do ranking mundial das piores waifus || **Waifumetor: ${rn}%**` },
                    { id: 4, description: `<:zerotwouhoh:853203576797397013> Bah, ninguém quer ficar com a **${user.username}** || **Waifumetor: ${rn}%**` },
                    { id: 5, description: `<:zerotwouhoh:853203576797397013> **${user.username}** É apenas a pior de todas!! || **Waifumetor: ${rn}%**` },
                ]

                message.channel.send(respostas[count].description)
            }

        }

        if (command === "ship") {
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

    } catch (ex) {
        console.log(ex);
        message.reply("Ocorreu um erro.");
    }
})


client.login(process.env.API_TOKEN);