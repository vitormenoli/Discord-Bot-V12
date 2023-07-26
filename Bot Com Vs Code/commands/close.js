module.exports = {
    name:  "close by ferinha",

    run: async(client, message, args) => {
        
        message.delete();

        if(message.channel.name !== `${message.author.id}`) return message.channel.send(`:x: | ${message.author} Você pode utilizar este comando apenas para fechar o seu ticket!`).then(msg => msg.delete({timeout:15000}));
        
        message.channel.delete()
    }
}