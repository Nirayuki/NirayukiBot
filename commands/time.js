
module.exports = {
    name: "time",
    description: 'Para olhar o tempo atual',
    execute(client, message) {
        const Discord = require('discord.js');
        const data = new Date;
        const dia = data.getDate();
        const hora = data.getHours();
        const minuto = data.getMinutes();
        const mes = data.getMonth();
        const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        message.reply(`Hoje é dia ${dia} de ${meses[mes]} e são ${hora} hora(s) e ${minuto} minuto(s)`);
    }

}
