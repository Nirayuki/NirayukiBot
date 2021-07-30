const Discord = require("discord.js");
const ytdl = require("ytdl-core-discord");
const cron = require('cron');
require('dotenv/config');

const client = new Discord.Client();
let counter = {};
let queue = [];


client.once('ready', () => {
    client.user.setActivity('Oi :)');
    console.log('Iniciado com sucesso!');
});

function emoji (id) {
    return client.emojis.get(id).toString();
}

const data = new Date;
const dia = data.getDate();
const hora = data.getHours();
const minuto = data.getMinutes();
const mes = data.getMonth();
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];


client.on('message', message => {

    if(message.content.toLowerCase() === 'fofa'){
        message.channel.send("😳");
    }

    if(message.content.toLowerCase() === 'aron'){
        message.channel.send(`Não, porfavor <:xorast:827327454644666378>`);
    }

    if(message.content.toLowerCase() === 'novato'){
        message.channel.send(`Sim, apenas isso... <:pxico:826431319255941150>`);
    }

    try{

        const prefix = process.env.PREFIX;
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const arguments = message.content.slice(prefix.length).trim().split(' ');
        const command = arguments.shift().toLowerCase();


        if (command === "ping") {
            message.reply("Pong!");
        }

        if (command === "time") {
            message.reply(`Hoje é dia ${dia} de ${meses[mes]} e são ${hora} hora(s) e ${minuto} minuto(s)`);
        }


    }  catch (ex) {
        message.reply("Ocorreu um erro.");
    }
})


client.login(process.env.API_TOKEN);