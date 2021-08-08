module.exports = {
    name: "nira",
   async execute(client, message) {
       const array = ['', '1', '2', '3', '4', '5']

       message.channel.send("Fale um número de 1-5");

       const filter = m => m.author.id === message.author.id;
       message.channel.awaitMessages(filter, {max:1}).then(msgs => {
            const msg = msgs.first()
            const number = Number(msg.content);
            
                
            message.channel.send(`Você escolheu o número ${array[number]}`)
            
       })
   }
}