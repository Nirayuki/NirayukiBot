const Discord = require('discord.js');

module.exports = {
    name: 'velha',
    async execute(client, message) {
        const user = message.mentions.users.first();
        const array = ['', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '];

        var counter = 9;

        if (!user) {
            const embed = new Discord.MessageEmbed()
                .setColor('#FFFFFF')
                .setTitle("Joken")
                .setAuthor('Nirayuki', 'https://cdn.discordapp.com/avatars/295607349652094977/1e1db24a040da737ad532aa9bb393b9d.png')
                .setDescription("Use esse comando para jogar Velha!")
                .addField('O jogo será assim', `| 1  | 2  | 3  |\n| 4 | 5 | 6 |\n| 7 | 8 | 9 |\n`)
                .addFields([
                    {
                        name: "Como usar ?",
                        value: `\`\`~velha <usuário>\`\``
                    },
                    {
                        name: "**Exemplos**",
                        value: "⬇️"
                    },
                    {
                        name: `Você deve marcar a pessoa para jogar.`,
                        value: `\`\`~velha @Yukinira\`\``
                    },
                ])

            return message.channel.send(embed)
        } else {
            message.channel.send(`Por favor <@${message.author.id}> digite \`\`Um número de 1-9\`\`.`);
            message.channel.send(`- \n| ${array[1]}  | ${array[2]}  | ${array[3]}  |\n| ${array[4]}  | ${array[5]}  | ${array[6]}  |\n| ${array[7]}  | ${array[8]}  | ${array[9]}  |\n`);
            const filter = m => m.author.id === message.author.id && m.content.toLowerCase() === "1" || m.content.toLowerCase() === "2" || m.content.toLowerCase() === "3" || m.content.toLowerCase() === "4" || m.content.toLowerCase() === "5" || m.content.toLowerCase() === "6" || m.content.toLowerCase() === "7" || m.content.toLowerCase() === "8" || m.content.toLowerCase() === "9";
            const filterUser = m => m.author.id === user.id && m.content.toLowerCase() === "1" || m.content.toLowerCase() === "2" || m.content.toLowerCase() === "3" || m.content.toLowerCase() === "4" || m.content.toLowerCase() === "5" || m.content.toLowerCase() === "6" || m.content.toLowerCase() === "7" || m.content.toLowerCase() === "8" || m.content.toLowerCase() === "9";



            for (var i = 0; i < counter; i++) {

                if ((array[1] === "x" && array[2] === "x" && array[3] === "x") || (array[1] === "x" && array[4] === "x" && array[7] === "x") || (array[4] === "x" && array[5] === "x" && array[6] === "x") || (array[7] === "x" && array[8] === "x" && array[9] === "x") || (array[3] === "x" && array[5] === "x" && array[7] === "x") || (array[1] === "x" && array[5] === "x" && array[9] === "x") || (array[2] === "x" && array[5] === "x" && array[8] === "x") || (array[3] === "x" && array[6] === "x" && array[9] === "x")) {
                    counter = 1;
                    message.channel.send(`Parabêns <@${message.author.id}> você ganhou!`)
                    message.channel.send(`Não foi dessa vez <@${user.id}>`)
                } else {
                    if ((array[1] === "o" && array[2] === "o" && array[3] === "o") || (array[1] === "o" && array[4] === "o" && array[7] === "o") || (array[4] === "o" && array[5] === "o" && array[6] === "o") || (array[7] === "o" && array[8] === "o" && array[9] === "x") || (array[3] === "o" && array[5] === "o" && array[7] === "o") || (array[1] === "o" && array[5] === "o" && array[9] === "o") || (array[2] === "o" && array[5] === "o" && array[8] === "o") || (array[3] === "o" && array[6] === "o" && array[9] === "o")) {
                        counter = 1;
                        message.channel.send(`Parabêns <@${user.id}> você ganhou!`)
                        message.channel.send(`Não foi dessa vez <@${message.author.id}>`)
                    } else {
                        await message.channel.awaitMessages(filter, { max: 1 }).then(collected => {
                            const content = collected.first()
                            const number = Number(content.content);
        
                            if (array[number].includes("x") || array[number].includes("o")) {
                                message.channel.send(`A coluna que você escolheu já foi preenchida. Por favor escolha novamente \`\`um número de 1-9\`\``);
                                message.channel.send(`- \n| ${array[1]} | ${array[2]} | ${array[3]} |\n| ${array[4]} | ${array[5]} | ${array[6]} |\n| ${array[7]} | ${array[8]} | ${array[9]} |\n`);
                                counter = counter + 1;
                            } else {
                                array[number] = "x"
                                message.channel.send(`-\n| ${array[1]} | ${array[2]} | ${array[3]} |\n| ${array[4]} | ${array[5]} | ${array[6]} |\n| ${array[7]} | ${array[8]} | ${array[9]} |\n`);
        
                                if ((array[1] === "x" && array[2] === "x" && array[3] === "x") || (array[1] === "x" && array[4] === "x" && array[7] === "x") || (array[4] === "x" && array[5] === "x" && array[6] === "x") || (array[7] === "x" && array[8] === "x" && array[9] === "x") || (array[3] === "x" && array[5] === "x" && array[7] === "x") || (array[1] === "x" && array[5] === "x" && array[9] === "x") || (array[2] === "x" && array[5] === "x" && array[8] === "x") || (array[3] === "x" && array[6] === "x" && array[9] === "x")) {
                                    counter = 1;
                                }
        
                                if ((array[1] === "o" && array[2] === "o" && array[3] === "o") || (array[1] === "o" && array[4] === "o" && array[7] === "o") || (array[4] === "o" && array[5] === "o" && array[6] === "o") || (array[7] === "o" && array[8] === "o" && array[9] === "x") || (array[3] === "o" && array[5] === "o" && array[7] === "o") || (array[1] === "o" && array[5] === "o" && array[9] === "o") || (array[2] === "o" && array[5] === "o" && array[8] === "o") || (array[3] === "o" && array[6] === "o" && array[9] === "o")) {
                                    counter = 1;
                                } else {
                                    message.channel.send(`Por favor <@${user.id}> digite \`\`Um número de 1-9\`\`.`);
                                }
        
                            }
        
                        })
                    }
                }

                if ((array[1] === "x" && array[2] === "x" && array[3] === "x") || (array[1] === "x" && array[4] === "x" && array[7] === "x") || (array[4] === "x" && array[5] === "x" && array[6] === "x") || (array[7] === "x" && array[8] === "x" && array[9] === "x") || (array[3] === "x" && array[5] === "x" && array[7] === "x") || (array[1] === "x" && array[5] === "x" && array[9] === "x") || (array[2] === "x" && array[5] === "x" && array[8] === "x") || (array[3] === "x" && array[6] === "x" && array[9] === "x")) {
                    counter = 1;
                } else {
                    if ((array[1] === "o" && array[2] === "o" && array[3] === "o") || (array[1] === "o" && array[4] === "o" && array[7] === "o") || (array[4] === "o" && array[5] === "o" && array[6] === "o") || (array[7] === "o" && array[8] === "o" && array[9] === "x") || (array[3] === "o" && array[5] === "o" && array[7] === "o") || (array[1] === "o" && array[5] === "o" && array[9] === "o") || (array[2] === "o" && array[5] === "o" && array[8] === "o") || (array[3] === "o" && array[6] === "o" && array[9] === "o")) {
                        counter = 1;
                    } else {
                        await message.channel.awaitMessages(filterUser, { max: 1 }).then(collected => {
                            const content = collected.first()
                            const number = Number(content.content);

                            if (array[number].includes("x") || array[number].includes("o")) {
                                message.channel.send(`A coluna que você escolheu já foi preenchida. Por favor escolha novamente \`\`um número de 1-9\`\``);
                                message.channel.send(`- \n| ${array[1]} | ${array[2]} | ${array[3]} |\n| ${array[4]} | ${array[5]} | ${array[6]} |\n| ${array[7]} | ${array[8]} | ${array[9]} |\n`);
                                counter = counter + 1;
                            } else {
                                array[number] = "o"
                                message.channel.send(`- \n| ${array[1]} | ${array[2]} | ${array[3]} |\n| ${array[4]} | ${array[5]} | ${array[6]} |\n| ${array[7]} | ${array[8]} | ${array[9]} |\n`);

                                if ((array[1] === "x" && array[2] === "x" && array[3] === "x") || (array[1] === "x" && array[4] === "x" && array[7] === "x") || (array[4] === "x" && array[5] === "x" && array[6] === "x") || (array[7] === "x" && array[8] === "x" && array[9] === "x") || (array[3] === "x" && array[5] === "x" && array[7] === "x") || (array[1] === "x" && array[5] === "x" && array[9] === "x") || (array[2] === "x" && array[5] === "x" && array[8] === "x") || (array[3] === "x" && array[6] === "x" && array[9] === "x")) {
                                    counter = 1;
                                    message.channel.send(`Parabêns <@${message.author.id}> você ganhou!`)
                                    message.channel.send(`Não foi dessa vez <@${user.id}>`)
                                }

                                if ((array[1] === "o" && array[2] === "o" && array[3] === "o") || (array[1] === "o" && array[4] === "o" && array[7] === "o") || (array[4] === "o" && array[5] === "o" && array[6] === "o") || (array[7] === "o" && array[8] === "o" && array[9] === "x") || (array[3] === "o" && array[5] === "o" && array[7] === "o") || (array[1] === "o" && array[5] === "o" && array[9] === "o") || (array[2] === "o" && array[5] === "o" && array[8] === "o") || (array[3] === "o" && array[6] === "o" && array[9] === "o")) {
                                    counter = 1;
                                    message.channel.send(`Parabêns <@${user.id}> você ganhou!`)
                                    message.channel.send(`Não foi dessa vez <@${message.author.id}>`)
                                } else {
                                    message.channel.send(`Por favor <@${message.author.id}> digite \`\`Um número de 1-9\`\`.`);
                                }
                            }

                        })
                    }
                }


            }

        }



    }
}