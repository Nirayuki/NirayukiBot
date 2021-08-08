const Discord = require("discord.js");
const ytdl = require("ytdl-core-discord");
const cron = require('cron');
const fs = require('fs');
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

    if (message.content.toLowerCase().indexOf("redsu") > -1) {
        message.react("<:Juliet:833940824139759638>")
        
    }

    if (message.content.toLowerCase().indexOf("fofa") > -1) {
        message.react("😳")
    }

    if (message.content.toLowerCase().indexOf("nira") > -1) {
        message.react("<:Redsu_01:853288698938785804>")
    }

    if(message.content.toLowerCase().indexOf("zed") > -1) {
        message.react("<:Zed_irritante:854079971165601803>")
    }

    if(message.content.toLowerCase().indexOf("duda") > -1) {
        message.react("<:Xie:846866701277593662>")
    }

    if(message.content.toLowerCase().indexOf("pih") > -1 || message.content.toLowerCase().indexOf("pietra") > -1) {
        message.react("<:Bunny_blanket:853203283350650890>")
    }


    // if(message.content.toLowerCase().indexOf("lyn") > -1 || message.content.toLowerCase().indexOf("bunny") > -1) {
    //     message.react("<:bunnyboba:853203328392495134>")
    // }

    if(message.content.toLowerCase().indexOf("luke") > -1) {
        message.react("<:nazare:841869626148257792>")
    }

    if(message.content.toLowerCase().indexOf("mafiosa") > -1) {
        message.react("<:ferretblob:853466119805337601>")
    }

    if(message.content.toLowerCase().indexOf("gab") > -1) {
        message.react("<:snk_01:854083657328361492>")
    }

    if(message.content.toLowerCase().indexOf("xulinha") > -1 || message.content.toLowerCase().indexOf("xuli") > -1 || message.content.toLowerCase().indexOf("julie") > -1){
        message.react("<:bunny_blushheart:853203283031228436>")
    }
    
    if(message.content.toLowerCase().indexOf("ju") > -1 || message.content.toLowerCase().indexOf("fofase") > -1){
        message.react("<a:sadcat:853202962363842560>")
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