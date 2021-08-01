const Discord = require("discord.js");
const ytdl = require("ytdl-core-discord");
const cron = require('cron');
const fs = require('fs');
const Canvas = require('canvas');
require('dotenv/config');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
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


const getPing = (props) => {
    let msg = new cron.CronJob('* * * * * *', () => {
        props.message.channel.send(`${props.user.id}`);
        console.log("tá caindo a cada 1m");
    })

    if(props.start === true) {
        msg.start()
    } else {
        message.stop()
        client.channels.cache.get("780665727547736075").send("Schedule parado com sucesso!");
    }
}


client.once('ready', () => {
    client.user.setActivity('~help');
    console.log('Iniciado com sucesso!');
});


for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {

    if (message.content.toLowerCase() === 'fofa') {
        message.channel.send("😳");
    }

    // if ((message.content.toLowerCase().indexOf("pih") > -1) || (message.content.toLowerCase().indexOf("pietra") > -1)) {
    //     message.channel.send("<:xd123:676919679775801380>");
    // }

    if (message.content.toLowerCase() === 'aron') {
        message.channel.send(`Não, porfavor <:xorast:827327454644666378>`);
    }

    if (message.content.toLowerCase() === 'novato') {
        message.channel.send(`Sim, apenas isso... <:pxico:826431319255941150>`);
    }

    if (message.content.toLowerCase().indexOf("redsu") > -1) {
        message.channel.send(`<:Juliet:833940824139759638>`)
    }

    const prefix = process.env.PREFIX;
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const arguments = message.content.slice(prefix.length).trim().split(/ +/);
    const command = arguments.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {

        client.commands.get(command).execute(client, message);
 
    
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

       
        // if (command === "teste") {
        //     const Embed = new Discord.MessageEmbed()
        //         .setImage(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`)

        //     message.channel.send(Embed);

        // }

      
    } catch (ex) {
        console.log(ex);
        message.reply("Ocorreu um erro.");
    }
})


client.login(process.env.API_TOKEN);